"""Temporary: crawl dwc.ge and ktwgroup.ge, record pages with images and barcodes."""
import json, re, time, urllib.request, urllib.parse
from html.parser import HTMLParser

UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36'
SITES = ['https://dwc.ge/', 'https://ktwgroup.ge/', 'https://ktwgroup.ge/shop', 'https://ktw.ge/']
MAX_PAGES = 700


class P(HTMLParser):
    def __init__(self):
        super().__init__(); self.links = []; self.imgs = []; self.meta = {}; self.title = ''; self._t = False; self.text = []
    def handle_starttag(self, tag, a):
        a = dict(a)
        if tag == 'a' and a.get('href'): self.links.append(a['href'])
        if tag in ('img', 'source'):
            for k in ('src', 'data-src', 'data-lazy-src', 'data-original', 'srcset', 'data-srcset'):
                if a.get(k): self.imgs.append(a[k])
        if tag == 'meta' and (a.get('property') or a.get('name')) and a.get('content'):
            self.meta[a.get('property') or a.get('name')] = a['content']
        if tag == 'title': self._t = True
        st = a.get('style') or ''
        for m in re.findall(r'url\(["\']?([^"\')]+)', st): self.imgs.append(m)
    def handle_endtag(self, tag):
        if tag == 'title': self._t = False
    def handle_data(self, d):
        if self._t: self.title += d
        d = d.strip()
        if d: self.text.append(d)


def get(url):
    req = urllib.request.Request(url, headers={'User-Agent': UA, 'Accept-Language': 'ka,en;q=0.8'})
    with urllib.request.urlopen(req, timeout=25) as r:
        ct = r.headers.get('Content-Type', '')
        if 'html' not in ct: return None, r.geturl()
        return r.read().decode('utf-8', 'replace'), r.geturl()


out = {'pages': [], 'errors': []}
seen = set(); queue = list(SITES)
hosts = {urllib.parse.urlparse(s).netloc.replace('www.', '') for s in SITES}
while queue and len(out['pages']) < MAX_PAGES:
    u = queue.pop(0)
    u = u.split('#')[0]
    if u in seen: continue
    seen.add(u)
    if re.search(r'\.(jpg|jpeg|png|webp|gif|pdf|zip|svg|mp4)(\?|$)', u, re.I): continue
    try:
        html, final = get(u)
    except Exception as e:
        out['errors'].append([u, str(e)]); continue
    if not html: continue
    p = P()
    try: p.feed(html)
    except Exception: pass
    imgs = []
    for i in p.imgs:
        for part in i.split(','):
            part = part.strip().split(' ')[0]
            if part: imgs.append(urllib.parse.urljoin(final, part))
    text = ' | '.join(p.text)
    out['pages'].append({
        'url': final, 'title': p.title.strip(), 'og': p.meta.get('og:image'), 'ogt': p.meta.get('og:title'),
        'desc': p.meta.get('description') or p.meta.get('og:description'),
        'imgs': list(dict.fromkeys(imgs))[:40],
        'barcodes': sorted(set(re.findall(r'\b48\d{11}\b', html))),
        'text': text[:3000],
    })
    for l in p.links:
        nu = urllib.parse.urljoin(final, l)
        pu = urllib.parse.urlparse(nu)
        if pu.scheme in ('http', 'https') and pu.netloc.replace('www.', '') in hosts and nu.split('#')[0] not in seen:
            queue.append(nu.split('#')[0])
    time.sleep(0.3)

json.dump(out, open('scan.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=0)
print(len(out['pages']), 'pages', len(out['errors']), 'errors')
