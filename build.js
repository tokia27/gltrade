#!/usr/bin/env node
/*
 * GLTrade — გვერდების აწყობა (build)
 * ------------------------------------------------------------
 * ქმნის ცალკე HTML ფაილს ყველა მისამართისთვის:
 *   /                          მთავარი
 *   /produqcia/                კატალოგი
 *   /produqcia/<კატეგორია>/     კატეგორია და ქვეკატეგორია
 *   /produqti/<პროდუქტი>/       თითოეული პროდუქტი
 *   /chvens-shesakheb/, /momsakhurebis-pirobebi/, ...
 * + sitemap.xml, robots.txt, 404.html
 *
 * გაშვება:  node build.js        (შედეგი იწერება _site საქაღალდეში)
 * GitHub-ზე ამას ავტომატურად აკეთებს .github/workflows/deploy.yml
 * დამატებითი პაკეტები არ სჭირდება.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = __dirname;
const OUT = path.join(ROOT, '_site');
const SITE = 'https://gltrade.ge';
const SKIP = new Set(['.git', '.github', '_site', 'node_modules', 'build.js', 'package.json', 'package-lock.json', '.DS_Store', 'README.md']);

const template = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const appCode = fs.readFileSync(path.join(ROOT, 'app.js'), 'utf8');

// ---------- app.js-ის გაშვება ბრაუზერის გარეშე ----------
let elements = {};
function fakeEl(id) {
    const el = {
        id, _html: null, _text: null, style: {}, dataset: {}, options: [], value: '', children: [],
        classList: { add() {}, remove() {}, toggle() {}, contains() { return false; } },
        setAttribute() {}, getAttribute() { return null; }, removeAttribute() {},
        appendChild() {}, remove() {}, querySelector() { return null; }, querySelectorAll() { return []; },
        addEventListener() {}, focus() {}, blur() {}, scrollIntoView() {}
    };
    Object.defineProperty(el, 'innerHTML', { get() { return this._html || ''; }, set(v) { this._html = String(v); } });
    Object.defineProperty(el, 'textContent', { get() { return this._text || ''; }, set(v) { this._text = String(v); } });
    return el;
}
const noop = () => {};
const documentStub = {
    getElementById(id) { return elements[id] || (elements[id] = fakeEl(id)); },
    querySelector() { return null; },
    querySelectorAll() { return []; },
    addEventListener: noop, removeEventListener: noop,
    createElement() { return fakeEl(''); },
    documentElement: { classList: { add: noop, remove: noop }, style: { setProperty: noop }, lang: 'ka' },
    body: { classList: { add: noop, remove: noop, toggle: noop, contains: () => false }, style: {} },
    head: null
};
const storage = { getItem: () => null, setItem: noop, removeItem: noop };
const ctx = {
    console, document: documentStub, localStorage: storage, sessionStorage: storage,
    navigator: { language: 'ka', clipboard: {} },
    location: { hash: '', pathname: '/', search: '', href: SITE + '/' },
    history: { pushState: noop, replaceState: noop },
    setTimeout: () => 0, clearTimeout: noop, setInterval: () => 0, clearInterval: noop,
    requestAnimationFrame: noop, matchMedia: () => ({ matches: false, addEventListener: noop }),
    fetch: () => Promise.reject(new Error('offline')), alert: noop, confirm: () => false,
    IntersectionObserver: function () { return { observe: noop, disconnect: noop }; }
};
ctx.window = ctx;
ctx.addEventListener = noop;
ctx.scrollTo = noop;
vm.createContext(ctx);
vm.runInContext(appCode + `
;globalThis.__gl = {
    products, CATEGORIES, PAGE_PATHS, SITE_URL, catalogState, PAGE_SIZE,
    buildRoutes, catPath, productPath, pageMeta, catalogMeta, productMeta,
    renderCatalog, renderHomeCategories, renderHero, renderBrands, productPageHTML,
    productName, productImages, productCategory, productSubcategory, normalizeCategoryValue, categoryCount,
    setLang: (l) => { currentLang = l; }
};`, ctx, { filename: 'app.js' });
const G = ctx.__gl;
G.setLang('ka');

// ---------- დამხმარე ფუნქციები ----------
const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const abs = (src) => (/^https?:/.test(src) ? src : SITE + (src.startsWith('/') ? src : '/' + src));

function fillById(html, id, inner) {
    const re = new RegExp(`<([a-zA-Z0-9]+)([^>]*?\\sid="${id}"[^>]*)>`);
    const m = re.exec(html);
    if (!m) return html;
    const tag = m[1];
    const start = m.index + m[0].length;
    const end = html.indexOf(`</${tag}>`, start);
    if (end < 0) return html;
    const current = html.slice(start, end);
    if (current.includes('<')) throw new Error(`#${id} არ არის ცარიელი შაბლონში`);
    return html.slice(0, start) + inner + html.slice(end);
}
function setMeta(html, meta, extraHead) {
    const title = esc(meta.title);
    const desc = esc(meta.description || '');
    const url = SITE + meta.path;
    html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
    html = html.replace(/(<meta name="description" content=")[^"]*(")/, `$1${desc}$2`);
    html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
    html = html.replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`);
    html = html.replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${desc}$2`);
    html = html.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`);
    let head = '';
    if (meta.image && !meta.image.startsWith('data:')) head += `\n<meta property="og:image" content="${esc(abs(meta.image))}">`;
    if (meta.ogType) html = html.replace('<meta property="og:type" content="website">', `<meta property="og:type" content="${meta.ogType}">`);
    if (meta.noindex) head += '\n<meta name="robots" content="noindex, follow">';
    if (extraHead) head += '\n' + extraHead;
    return html.replace('</head>', head + '\n</head>');
}
function activate(html, sectionId) {
    html = html.replace('<section id="home" class="page-section active-section">', '<section id="home" class="page-section">');
    return html.replace(`<section id="${sectionId}" class="page-section">`, `<section id="${sectionId}" class="page-section active-section">`);
}
function jsonLd(obj) {
    return `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`;
}
function breadcrumbs(items) {
    return jsonLd({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it[0], item: SITE + it[1] }))
    });
}
function inject(html) {
    for (const id of Object.keys(elements)) {
        const el = elements[id];
        if (el._html !== null) html = fillById(html, id, el._html);
        else if (el._text !== null) html = fillById(html, id, esc(el._text));
    }
    return html;
}
let written = 0;
function writePage(urlPath, html) {
    const dir = path.join(OUT, ...urlPath.split('/').filter(Boolean));
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html);
    written++;
}
function copyDir(src, dst) {
    fs.mkdirSync(dst, { recursive: true });
    for (const name of fs.readdirSync(src)) {
        if (SKIP.has(name) || name.endsWith('.part.js') || name.endsWith('.part.html')) continue;
        const s = path.join(src, name), d = path.join(dst, name);
        const st = fs.statSync(s);
        if (st.isDirectory()) copyDir(s, d); else fs.copyFileSync(s, d);
    }
}

// ---------- აწყობა ----------
fs.rmSync(OUT, { recursive: true, force: true });
copyDir(ROOT, OUT);

const routes = G.buildRoutes();
const sitemap = [];
const today = new Date().toISOString().slice(0, 10);
const catalogLabel = 'პროდუქცია';

// მთავარი
elements = {};
G.renderHomeCategories(); G.renderHero(); G.renderBrands();
let home = inject(template);
home = setMeta(home, G.pageMeta('home'), jsonLd({
    '@context': 'https://schema.org', '@type': 'Organization', name: 'GLTrade', legalName: 'შპს „გლ ნოუთ“',
    url: SITE + '/', email: 'info@gltrade.ge', telephone: '+995597779830',
    address: { '@type': 'PostalAddress', streetAddress: 'ვ. გულისაშვილის 18ბ', addressLocality: 'თბილისი', addressCountry: 'GE' }
}));
writePage('/', home);
sitemap.push(['/', '1.0']);

// სტატიკური გვერდები
for (const page of ['about', 'terms', 'cart', 'auth-section', 'history-section']) {
    const meta = G.pageMeta(page);
    let html = activate(template, page);
    html = setMeta(html, meta, meta.noindex ? '' : breadcrumbs([['მთავარი', '/'], [meta.title.replace(' | GLTrade', ''), meta.path]]));
    writePage(meta.path, html);
    if (!meta.noindex) sitemap.push([meta.path, '0.5']);
}

// კატალოგი, კატეგორიები, ქვეკატეგორიები
const catTargets = [['all', 'all']];
G.CATEGORIES.forEach(c => {
    if (c.id === 'all') return;
    catTargets.push([c.id, 'all']);
    c.subs.forEach(s => catTargets.push([c.id, s[0]]));
});
for (const [cat, sub] of catTargets) {
    elements = {};
    G.catalogState.cat = cat; G.catalogState.sub = sub; G.catalogState.query = '';
    G.catalogState.sort = 'default'; G.catalogState.openCat = cat !== 'all' ? cat : null;
    G.renderCatalog(true);
    const count = Number((elements['catalog-count'] && elements['catalog-count']._text) || 0);
    const meta = G.catalogMeta(cat, sub);
    if (count === 0) meta.noindex = true;
    const crumbs = [['მთავარი', '/'], [catalogLabel, '/produqcia/']];
    if (cat !== 'all') {
        const c = G.CATEGORIES.find(x => x.id === cat);
        crumbs.push([c.name.ka, G.catPath(cat)]);
        if (sub !== 'all') crumbs.push([(c.subs.find(s => s[0] === sub) || [])[1], meta.path]);
    }
    let html = activate(inject(template), 'catalog');
    html = setMeta(html, meta, breadcrumbs(crumbs));
    writePage(meta.path, html);
    if (!meta.noindex) sitemap.push([meta.path, cat === 'all' ? '0.9' : (sub === 'all' ? '0.8' : '0.7')]);
}

// პროდუქტები
for (const prod of G.products) {
    elements = {};
    const box = documentStub.getElementById('product-page-body');
    box.innerHTML = G.productPageHTML(prod);
    const meta = G.productMeta(prod);
    meta.ogType = 'product';
    const name = G.productName(prod);
    const imgs = G.productImages(prod).filter(s => !s.startsWith('data:')).map(abs);
    const ld = {
        '@context': 'https://schema.org', '@type': 'Product', name,
        url: SITE + meta.path,
        offers: {
            '@type': 'Offer', priceCurrency: 'GEL', price: Number(prod.price || 0).toFixed(2),
            availability: prod.inStock === false ? 'https://schema.org/OutOfStock' : 'https://schema.org/InStock',
            url: SITE + meta.path, seller: { '@type': 'Organization', name: 'GLTrade' }
        }
    };
    if (imgs.length) ld.image = imgs;
    if (prod.barcode) ld.sku = String(prod.barcode);
    if (prod.brands && prod.brands.length && typeof prod.brands[0] === 'string') ld.brand = { '@type': 'Brand', name: prod.brands[0] };
    const c = G.CATEGORIES.find(x => G.normalizeCategoryValue(x.id) === G.productCategory(prod));
    const crumbs = [['მთავარი', '/'], [catalogLabel, '/produqcia/']];
    if (c) {
        crumbs.push([c.name.ka, G.catPath(c.id)]);
        const s = c.subs.find(x => G.normalizeCategoryValue(x[0]) === G.productSubcategory(prod));
        if (s) crumbs.push([s[1], G.catPath(c.id, s[0])]);
    }
    crumbs.push([name, meta.path]);
    let html = activate(inject(template), 'product-page');
    html = setMeta(html, meta, jsonLd(ld) + '\n' + breadcrumbs(crumbs));
    writePage(meta.path, html);
    sitemap.push([meta.path, '0.6']);
}

// 404 — GitHub Pages აჩვენებს არარსებულ მისამართზე
let nf = activate(template, 'notfound');
nf = setMeta(nf, { title: 'გვერდი ვერ მოიძებნა | GLTrade', description: '', path: '/', noindex: true });
fs.writeFileSync(path.join(OUT, '404.html'), nf);

// sitemap.xml და robots.txt
fs.writeFileSync(path.join(OUT, 'sitemap.xml'),
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    sitemap.map(([p, pr]) => `  <url><loc>${esc(SITE + p)}</loc><lastmod>${today}</lastmod><priority>${pr}</priority></url>`).join('\n') +
    '\n</urlset>\n');
fs.writeFileSync(path.join(OUT, 'robots.txt'),
    `User-agent: *\nAllow: /\nDisallow: /kalata/\nDisallow: /shesvla/\nDisallow: /shekvetebis-istoria/\n\nSitemap: ${SITE}/sitemap.xml\n`);

// GitHub Pages-ს Jekyll-ის დამუშავება არ სჭირდება
fs.writeFileSync(path.join(OUT, '.nojekyll'), '');

console.log(`მზადაა: ${written} გვერდი, ${sitemap.length} მისამართი sitemap.xml-ში → ${path.relative(ROOT, OUT)}/`);
