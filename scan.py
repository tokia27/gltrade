"""Temporary scan #2: render dwc.ge with a browser; crawl ktwgroup.ge product pages gently."""
import json, re, time, urllib.request, urllib.parse
from html.parser import HTMLParser
from playwright.sync_api import sync_playwright

UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36'
out = {'dwc': [], 'ktw': [], 'errors': []}

# ---------------- dwc.ge (Framer, needs rendering) ----------------
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(user_agent=UA, viewport={'width': 1400, 'height': 1000})
    seen = set(); queue = ['https://dwc.ge/', 'https://dwc.ge/ranina', 'https://dwc.ge/ka']
    while queue and len(out['dwc']) < 250:
        u = queue.pop(0).split('#')[0].split('?')[0].rstrip('/') or 'https://dwc.ge'
        if u in seen: continue
        seen.add(u)
        try:
            pg.goto(u, wait_until='networkidle', timeout=45000)
            for _ in range(6):
                pg.mouse.wheel(0, 2500); pg.wait_for_timeout(400)
            data = pg.evaluate("""() => ({
                title: document.title,
                heads: [...document.querySelectorAll('h1,h2,h3,h4,p')].map(e => e.innerText.trim()).filter(Boolean).slice(0, 80),
                imgs: [...document.querySelectorAll('img')].map(i => ({src: i.currentSrc || i.src, alt: i.alt, w: i.naturalWidth, h: i.naturalHeight})),
                links: [...document.querySelectorAll('a[href]')].map(a => a.href)
            })""")
        except Exception as e:
            out['errors'].append([u, str(e)[:200]]); continue
        data['url'] = u
        out['dwc'].append(data)
        for l in data['links']:
            if urllib.parse.urlparse(l).netloc.replace('www.', '') == 'dwc.ge': queue.append(l)
    b.close()


# ---------------- ktwgroup.ge ----------------
class P(HTMLParser):
    def __init__(self):
        super().__init__(); self.links = []; self.imgs = []; self.title = ''; self._t = False; self.h = []; self._h = False
    def handle_starttag(self, tag, a):
        a = dict(a)
        if tag == 'a' and a.get('href'): self.links.append(a['href'])
        if tag == 'img' and a.get('src'): self.imgs.append({'src': a['src'], 'alt': a.get('alt', ''), 'cls': a.get('class', '')})
        if tag == 'title': self._t = True
        if tag in ('h1', 'h2', 'h3', 'p', 'li', 'span'): self._h = True
    def handle_endtag(self, tag):
        if tag == 'title': self._t = False
        if tag in ('h1', 'h2', 'h3', 'p', 'li', 'span'): self._h = False
    def handle_data(self, d):
        if self._t: self.title += d
        if self._h and d.strip(): self.h.append(d.strip())


def get(url):
    for attempt in range(5):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': UA})
            with urllib.request.urlopen(req, timeout=30) as r:
                return r.read().decode('utf-8', 'replace'), r.geturl()
        except urllib.error.HTTPError as e:
            if e.code == 429: time.sleep(10 * (attempt + 1)); continue
            raise
    raise Exception('429 x5')


KEEP = re.compile(r'^https://ktwgroup\.ge/(wine|sparkling-wine|chacha|brandy|tixa|wine-manufacturer|sparkling-wine-manufacturer|brandy-manufacturer|chacha-manufacturer)(/|$)')
seen = set(); queue = ['https://ktwgroup.ge/wine/', 'https://ktwgroup.ge/sparkling-wine/', 'https://ktwgroup.ge/chacha/', 'https://ktwgroup.ge/brandy/', 'https://ktwgroup.ge/tixa/']
while queue and len(out['ktw']) < 450:
    u = queue.pop(0).split('#')[0].split('?')[0]
    if u in seen: continue
    seen.add(u)
    try:
        html, final = get(u)
    except Exception as e:
        out['errors'].append([u, str(e)[:200]]); continue
    p = P(); p.feed(html)
    links = [urllib.parse.urljoin(final, l).split('#')[0].split('?')[0] for l in p.links]
    out['ktw'].append({'url': final, 'title': p.title.strip(), 'imgs': p.imgs, 'text': p.h[:120],
                       'links': [l for l in dict.fromkeys(links) if KEEP.match(l)]})
    for l in links:
        if KEEP.match(l) and l not in seen: queue.append(l)
    time.sleep(1.2)

json.dump(out, open('scan.json', 'w', encoding='utf-8'), ensure_ascii=False)
print(len(out['dwc']), len(out['ktw']), len(out['errors']))
