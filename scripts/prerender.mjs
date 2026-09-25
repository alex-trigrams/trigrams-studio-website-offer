/* Writes the markup site.js renders into the HTML files, so crawlers that do
   not run JavaScript (GPTBot, ClaudeBot, PerplexityBot, and Google's first
   pass) still see the four layers, the case studies, the client list and the
   FAQ. site.js still renders at runtime and replaces this markup, so the page
   behaves exactly as before. It also writes each page's JSON-LD from the
   business facts in BUSINESS below.

   Run after editing CLIENTS, CASE_STUDIES, SERVICE_STEPS or FAQ_SHORT:
     node scripts/prerender.mjs
   `--check` exits non-zero if any page is out of date (nothing is written). */

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const SITE_JS = fs.readFileSync(path.join(ROOT, 'site.js'), 'utf8');
const CHECK = process.argv.includes('--check');

/* Mount points, found by id or by attribute. Each is a <div> in the source. */
const MOUNTS = [
  { key: 'ladder-list',     open: /<div\b[^>]*\bid="ladder-list"[^>]*>/ },
  { key: 'layer-list',      open: /<div\b[^>]*\bid="layer-list"[^>]*>/ },
  { key: 'clients-marquee', open: /<div\b[^>]*\bid="clients-marquee"[^>]*>/ },
  { key: 'examples-grid',   open: /<div\b[^>]*\bid="examples-grid"[^>]*>/ },
  { key: 'cs-grid',         open: /<div\b[^>]*\bid="cs-grid"[^>]*>/ },
  { key: '[data-faq-short]', open: /<div\b[^>]*\bdata-faq-short\b[^>]*>/ }
];

/* Anything the script touches that we don't care about: callable, indexable,
   and inert. */
function inert() {
  const fn = function () { return inert(); };
  return new Proxy(fn, {
    get(t, k) {
      if (k === Symbol.toPrimitive) return () => '';
      if (k === 'length') return 0;
      if (k === 'then') return undefined;
      return inert();
    },
    set() { return true; },
    apply() { return inert(); },
    construct() { return inert(); }
  });
}

/* A mount records what is written to it. Children queried by selector are
   recorders too, so the ladder's detail panel can be spliced back in. */
function recorder(attrs) {
  const children = {};
  const el = {
    innerHTML: '',
    children: [],
    dataset: attrs,
    style: { setProperty() {} },
    classList: { add() {}, remove() {}, toggle() {}, contains: () => false },
    setAttribute() {}, getAttribute: () => null, addEventListener() {},
    scrollIntoView() {},
    querySelector(sel) { return (children[sel] ||= recorder({})); },
    querySelectorAll() { return []; },
    _children: children
  };
  return el;
}

function renderPage(html) {
  const mounts = {};
  for (const m of MOUNTS) {
    const hit = html.match(m.open);
    if (!hit) continue;
    const data = {};
    for (const [, k, v] of hit[0].matchAll(/\bdata-([a-z-]+)="([^"]*)"/g)) {
      data[k.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = v;
    }
    mounts[m.key] = recorder(data);
  }

  const document = {
    getElementById: (id) => mounts[id] || null,
    querySelector: (sel) => mounts[sel] || null,
    querySelectorAll: () => [],
    addEventListener() {}, removeEventListener() {},
    createElement: () => inert(),
    documentElement: inert(), body: inert(), head: inert(),
    visibilityState: 'visible', readyState: 'complete', cookie: ''
  };
  const window = {
    document, location: { hash: '', search: '', pathname: '/', href: 'https://www.trigrams.studio/' },
    addEventListener() {}, removeEventListener() {},
    matchMedia: () => ({ matches: false, addEventListener() {}, addListener() {} }),
    localStorage: { getItem: () => null, setItem() {} },
    sessionStorage: { getItem: () => null, setItem() {} },
    requestAnimationFrame: () => 0, cancelAnimationFrame() {},
    setTimeout: () => 0, clearTimeout() {}, setInterval: () => 0, clearInterval() {},
    innerWidth: 1440, innerHeight: 900, scrollY: 0, pageYOffset: 0,
    navigator: { userAgent: 'prerender' },
    URL, URLSearchParams, Math, JSON, Date, parseInt, parseFloat, Array, Object, String, Number
  };
  window.window = window;
  window.self = window;

  vm.runInNewContext(SITE_JS, window, { filename: 'site.js' });

  const out = {};
  for (const [key, el] of Object.entries(mounts)) {
    let inner = el.innerHTML;
    /* The ladder paints its detail panel into a child after the first write. */
    const detail = el._children['#ladder-detail'];
    if (detail && detail.innerHTML) {
      inner = inner.replace(/(id="ladder-detail"[^>]*>)(<\/div>)/, `$1${detail.innerHTML}$2`);
    }
    out[key] = inner;
  }
  return out;
}

/* Replace a mount's contents. Mounts are divs; count div depth to find the
   matching close so re-running on already-prerendered HTML is idempotent. */
function inject(html, openRe, inner) {
  const hit = openRe.exec(html);
  if (!hit) return html;
  const start = hit.index + hit[0].length;
  const tag = /<div\b|<\/div>/g;
  tag.lastIndex = start;
  let depth = 1, m;
  while ((m = tag.exec(html))) {
    depth += m[0] === '</div>' ? -1 : 1;
    if (depth === 0) return html.slice(0, start) + inner + html.slice(m.index);
  }
  throw new Error('Unclosed mount: ' + openRe);
}

/* ---------- Structured data (JSON-LD) ----------
   One @graph per page. Business facts live here and nowhere else. The address
   must match the Google Business Profile character for character. Add
   `streetAddress`/`postalCode`, `telephone` and `openingHoursSpecification`
   only once they are confirmed. */
const SITE = 'https://www.trigrams.studio';
const BUSINESS = {
  '@type': 'ProfessionalService',
  '@id': SITE + '/#business',
  name: 'TRIGRAMS Studio',
  url: SITE + '/',
  logo: SITE + '/assets/Logo.png',
  image: SITE + '/assets/og-share.jpg',
  description: 'A Perth marketing agency for small businesses. TRIGRAMS Studio builds content, Facebook and Instagram ads, websites and follow-up emails as 1 connected system that brings in customers.',
  email: 'hello@trigrams.studio',
  address: { '@type': 'PostalAddress', addressLocality: 'Perth', addressRegion: 'WA', addressCountry: 'AU' },
  areaServed: { '@type': 'City', name: 'Perth' },
  identifier: { '@type': 'PropertyValue', propertyID: 'ABN', value: '85 714 298 118' },
  founder: { '@id': SITE + '/#alex' },
  sameAs: ['https://www.instagram.com/trigramsstudio/', 'https://substack.com/@trigramsstudio'],
  knowsAbout: ['Small business marketing', 'Facebook and Instagram advertising', 'Website design', 'Email follow up', 'Video and photo content'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Marketing system for small businesses',
    itemListElement: [{
      '@type': 'Offer',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: 5000, priceCurrency: 'AUD' },
      itemOffered: {
        '@type': 'Service',
        name: 'Small business marketing system',
        serviceType: 'Marketing agency',
        areaServed: { '@type': 'City', name: 'Perth' },
        description: '4 connected parts built and run together: attention (photo, video and social content), traffic (Facebook and Instagram ads), conversion (the website and landing pages) and follow up (automatic emails and 1 list of every enquiry).'
      }
    }]
  }
};
const PERSON = {
  '@type': 'Person',
  '@id': SITE + '/#alex',
  name: 'Alex Oliver',
  jobTitle: 'Founder',
  worksFor: { '@id': SITE + '/#business' },
  url: SITE + '/about',
  image: SITE + '/assets/about-me-photo.jpg',
  knowsAbout: ['Small business marketing', 'Video production', 'Facebook and Instagram advertising', 'Websites']
};
const WEBSITE = {
  '@type': 'WebSite', '@id': SITE + '/#website', url: SITE + '/', name: 'TRIGRAMS Studio',
  inLanguage: 'en-AU', publisher: { '@id': SITE + '/#business' }
};
const PAGE_TYPE = { 'about.html': 'AboutPage', 'enquiry.html': 'ContactPage' };

const text = (s) => s.replace(/<[^>]+>/g, '').replace(/&middot;/g, '·').replace(/&amp;/g, '&')
  .replace(/&#39;|&rsquo;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();

function jsonLd(file, html) {
  if (/name="robots" content="noindex/.test(html)) return null;
  const canonical = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
  if (!canonical) return null;
  const page = {
    '@type': PAGE_TYPE[file] || 'WebPage',
    '@id': canonical + '#page',
    url: canonical,
    name: text(html.match(/<title>(.*?)<\/title>/)[1]),
    description: text(html.match(/<meta name="description" content="([^"]*)"/)[1]),
    isPartOf: { '@id': SITE + '/#website' },
    about: { '@id': SITE + '/#business' },
    inLanguage: 'en-AU'
  };
  /* FAQPage only on the homepage, and only for the questions visible there. */
  if (file === 'index.html') {
    const qa = [...html.matchAll(/class="faq-q"[^>]*>([\s\S]*?)<svg[\s\S]*?<div class="faq-a">([\s\S]*?)<\/div><\/div>/g)];
    if (qa.length) {
      page['@type'] = ['WebPage', 'FAQPage'];
      page.mainEntity = qa.map(([, q, a]) => ({
        '@type': 'Question', name: text(q),
        acceptedAnswer: { '@type': 'Answer', text: text(a) }
      }));
    }
  }
  const graph = [page, BUSINESS, PERSON, WEBSITE];
  return '<script type="application/ld+json">' +
    JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c') +
    '</script>';
}

function injectLd(html, block) {
  const re = /\n?<script type="application\/ld\+json">[\s\S]*?<\/script>/;
  html = html.replace(re, '');
  return block ? html.replace('</head>', block + '\n</head>') : html;
}

let stale = 0;
for (const file of fs.readdirSync(ROOT).filter((f) => f.endsWith('.html')).sort()) {
  const p = path.join(ROOT, file);
  const before = fs.readFileSync(p, 'utf8');
  const rendered = renderPage(before);
  let after = before;
  for (const m of MOUNTS) {
    if (m.key in rendered) after = inject(after, m.open, rendered[m.key]);
  }
  const ld = jsonLd(file, after);
  after = injectLd(after, ld);
  const keys = Object.keys(rendered).concat(ld ? ['json-ld'] : []).join(', ') || 'nothing';
  if (after === before) { console.log(`  ${file}: up to date (${keys})`); continue; }
  stale++;
  if (CHECK) { console.log(`✗ ${file}: out of date (${keys})`); continue; }
  fs.writeFileSync(p, after);
  console.log(`✓ ${file}: ${keys}`);
}
if (CHECK && stale) process.exit(1);
