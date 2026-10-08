/* Writes each page's JSON-LD from the business facts in BUSINESS below.
   Since the October 2026 rebuild every page is plain static HTML (no content
   is rendered by site.js any more), so structured data is all this does.

   Run after editing a page title, description, the homepage FAQ or BUSINESS:
     node scripts/prerender.mjs
   `--check` exits non-zero if any page is out of date (nothing is written). */

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const CHECK = process.argv.includes('--check');

/* ---------- Structured data (JSON-LD) ----------
   One @graph per page. Business facts live here and nowhere else. The address
   must match the Google Business Profile and the site footer character for
   character. No telephone: Alex is keeping his number private for now. */
const SITE = 'https://www.trigrams.studio';
const BUSINESS = {
  '@type': 'ProfessionalService',
  '@id': SITE + '/#business',
  name: 'TRIGRAMS Studio',
  url: SITE + '/',
  logo: SITE + '/assets/Logo.png',
  image: SITE + '/assets/og-share.jpg',
  description: 'TRIGRAMS Studio makes and runs Facebook and Instagram ads for Perth small businesses, start to finish: planning, scripts, filming, editing, running the ads and sending the leads to the client. Campaigns from $4,000 plus GST.',
  email: 'hello@trigrams.studio',
  address: {
    '@type': 'PostalAddress', streetAddress: '130 Burswood Rd', addressLocality: 'Burswood',
    addressRegion: 'WA', postalCode: '6100', addressCountry: 'AU'
  },
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '10:00', closes: '15:00'
  }],
  areaServed: { '@type': 'City', name: 'Perth' },
  identifier: { '@type': 'PropertyValue', propertyID: 'ABN', value: '85 714 298 118' },
  founder: { '@id': SITE + '/#alex' },
  sameAs: ['https://www.instagram.com/trigramsstudio/', 'https://substack.com/@trigramsstudio'],
  knowsAbout: ['Meta advertising', 'Facebook and Instagram advertising', 'Lead generation', 'Video ads', 'Small business marketing'],
  /* Price matches DEFAULT_PRICE in site.js. Other prices may be shown while
     they are being tested; this is the standard one. */
  makesOffer: [{
    '@type': 'Offer',
    priceSpecification: { '@type': 'PriceSpecification', minPrice: 4000, priceCurrency: 'AUD' },
    itemOffered: {
      '@type': 'Service',
      name: 'Meta ads campaign, done for you',
      serviceType: 'Facebook and Instagram advertising',
      areaServed: { '@type': 'City', name: 'Perth' },
      description: 'Planning and scripts, a half-day shoot, 1 main video and 2 to 3 vertical cuts, audience and tracking set-up, ad copy and test versions, running the ads, every lead sent straight to you, and an end-of-campaign report. Ad spend is separate and paid to Meta.'
    }
  }]
};
const PERSON = {
  '@type': 'Person',
  '@id': SITE + '/#alex',
  name: 'Alex Oliver',
  jobTitle: 'Founder',
  worksFor: { '@id': SITE + '/#business' },
  url: SITE + '/#about',
  image: SITE + '/assets/about-me-photo.jpg',
  knowsAbout: ['Facebook and Instagram advertising', 'Video production', 'Small business marketing']
};
const WEBSITE = {
  '@type': 'WebSite', '@id': SITE + '/#website', url: SITE + '/', name: 'TRIGRAMS Studio',
  inLanguage: 'en-AU', publisher: { '@id': SITE + '/#business' }
};
const PAGE_TYPE = { 'enquiry.html': 'ContactPage', 'book-a-call.html': 'ContactPage' };

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
    const qa = [...html.matchAll(/<span class="faq-q">([\s\S]*?)<\/span>[\s\S]*?<p class="faq-a">([\s\S]*?)<\/p>/g)];
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
  const ld = jsonLd(file, before);
  const after = injectLd(before, ld);
  if (after === before) { console.log(`  ${file}: up to date`); continue; }
  stale++;
  if (CHECK) { console.log(`✗ ${file}: out of date`); continue; }
  fs.writeFileSync(p, after);
  console.log(`✓ ${file}: ${ld ? 'json-ld' : 'removed json-ld'}`);
}
if (CHECK && stale) process.exit(1);
