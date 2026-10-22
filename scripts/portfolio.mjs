/* Builds the body of portfolio.html (the unlisted, link-only gallery) from
   scripts/portfolio.json and the photos in assets/stills/<slug>/.

   Add photos:   scripts/add-photos.sh "<folder>" <slug>, then add the set to portfolio.json
   Rebuild:      node scripts/portfolio.mjs
   Everything between the portfolio:start and portfolio:end comments is
   rewritten; the head, nav and footer around it are left alone. */

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const DATA = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts/portfolio.json'), 'utf8'));
const PAGE = path.join(ROOT, 'portfolio.html');

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const ARROW = '<svg width="22" height="12" viewBox="0 0 22 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 6h19M15 1l5 5-5 5"/></svg>';
const PLAY = '<svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true"><path d="M3 1.5v11l9-5.5z"/></svg>';
const KINDS = { ad: 'Ads', brand: 'Brand films', bts: 'Behind the scenes' };

/* Width and height from the JPEG frame header, so the grid doesn't jump as photos load. */
function jpegSize(file) {
  const b = fs.readFileSync(file);
  let i = 2;
  while (i < b.length) {
    if (b[i] !== 0xFF) { i++; continue; }
    const m = b[i + 1];
    if (m >= 0xC0 && m <= 0xCF && m !== 0xC4 && m !== 0xC8 && m !== 0xCC) {
      return { h: b.readUInt16BE(i + 5), w: b.readUInt16BE(i + 7) };
    }
    i += 2 + b.readUInt16BE(i + 2);
  }
  throw new Error('No size in ' + file);
}

function photos(set) {
  const dir = path.join(ROOT, 'assets/stills', set.slug);
  const hide = new Set(set.hide || []);
  const all = fs.readdirSync(dir).filter((f) => f.endsWith('.jpg')).map((f) => f.slice(0, -4)).filter((n) => !hide.has(n)).sort();
  const featured = (set.featured || []).filter((n) => all.includes(n));
  return [...featured, ...all.filter((n) => !featured.includes(n))].map((name) => {
    const thumb = fs.existsSync(path.join(dir, 'thumb', name + '.jpg')) ? `thumb/${name}` : name;
    return { name, full: `/assets/stills/${set.slug}/${name}.jpg`, thumb: `/assets/stills/${set.slug}/${thumb}.jpg`, ...jpegSize(path.join(dir, thumb + '.jpg')), fw: jpegSize(path.join(dir, name + '.jpg')).w };
  });
}

const sets = DATA.sets.map((s) => ({ ...s, photos: photos(s) }));
const photoCount = sets.reduce((n, s) => n + s.photos.length, 0);
const clients = new Set([...DATA.reels.map((r) => r.client), ...sets.map((s) => s.client)]);
clients.delete('TRIGRAMS Studio');

for (const r of DATA.reels) {
  for (const f of [`assets/reels/${r.id}.mp4`, `assets/reels/${r.id}-poster.jpg`, `assets/reels/full/${r.id}.mp4`]) {
    if (!fs.existsSync(path.join(ROOT, f))) throw new Error('Missing ' + f);
  }
}

const findPhoto = (key) => {
  const [slug, name] = key.split('/');
  const p = (sets.find((s) => s.slug === slug) || { photos: [] }).photos.find((x) => x.name === name);
  if (!p) throw new Error('Highlight not found: ' + key);
  return { ...p, caption: sets.find((s) => s.slug === slug).client };
};
const highlights = DATA.highlights.map(findPhoto);
const [h1, h2, h3] = highlights;

const reelCard = (r) => `      <button type="button" class="card" data-kind="${r.kind}" data-video="/assets/reels/full/${r.id}.mp4" aria-label="Play the ${esc(r.client)} video, ${esc(r.label)}">
        <span class="photo shade-bottom">
          <img src="/assets/reels/${r.id}-poster.jpg" alt="" loading="lazy" decoding="async" /><video muted loop playsinline preload="none" data-preview="/assets/reels/${r.id}.mp4"></video>
          <span class="card-play">${PLAY}</span>
          ${r.stat ? `<span class="card-stat"><b>${esc(r.stat[0])}</b><span>${esc(r.stat[1])}</span></span>` : ''}
        </span>
        <span class="card-meta"><b>${esc(r.client)}</b><span>${esc(r.label)}</span></span>
      </button>`;

const tile = (p, i, set, show) => `        <button type="button" class="pf-tile"${i >= show ? ' data-more' : ''} data-full="${p.full}" aria-label="Open photo ${i + 1} of ${set.photos.length}, ${esc(set.client)}"><img src="${p.thumb}" alt="" width="${p.w}" height="${p.h}" loading="lazy" decoding="async" /></button>`;

const setBlock = (s, n) => {
  const show = s.show || 12;
  const more = s.photos.length - show;
  return `    <div class="pf-set" id="set-${s.slug}" data-gallery${more > 0 ? ' data-collapsed' : ''}>
      <header class="pf-set-head" data-reveal>
        <span class="pf-set-n">${String(n + 1).padStart(2, '0')}</span>
        <div><h3 class="h3">${esc(s.client)}</h3><p class="muted">${esc([s.title, s.when].filter(Boolean).join(' · '))}</p></div>
        <span class="pf-set-count">${s.photos.length} photos</span>
      </header>
      <div class="pf-grid">
${s.photos.map((p, i) => tile(p, i, s, show)).join('\n')}
      </div>${more > 0 ? `
      <button type="button" class="btn btn--line pf-more" data-show-all>Show all ${s.photos.length} photos</button>` : ''}
    </div>`;
};

const body = `<!-- portfolio:start (generated by scripts/portfolio.mjs from scripts/portfolio.json; edit those, not this) -->
<section class="hero pf-hero" id="top">
  <div class="hero-glow" aria-hidden="true"></div>
  <div class="hero-grid" aria-hidden="true"></div>
  <div class="hero-inner">
    <div class="hero-copy">
      <span class="eyebrow eyebrow--light"><i></i>Portfolio</span>
      <h1 class="h1 hero-h1"><span>Photos</span> <span>and video,</span> <span>shot by me</span></h1>
      <p class="lede">Ads, brand films and photo shoots for local businesses. I planned, shot and edited everything on this page.</p>
      <div class="btn-row">
        <a href="#videos" class="btn btn--red btn--glow">Watch the videos ${ARROW}</a>
        <a href="#photos" class="btn btn--line-white">See the photos</a>
      </div>
      <span class="hero-price"><b>${DATA.reels.length}</b> videos · <b>${photoCount}</b> photos · <b>${clients.size}</b> clients</span>
    </div>
    <div class="hero-stage pf-stage" data-tilt aria-hidden="true">
      <img class="pf-print pf-print--l" src="${h2.thumb}" alt="" width="${h2.w}" height="${h2.h}" />
      <img class="pf-print pf-print--r" src="${h3.thumb}" alt="" width="${h3.w}" height="${h3.h}" />
      <img class="pf-print pf-print--c" src="${h1.thumb}" alt="" width="${h1.w}" height="${h1.h}" fetchpriority="high" />
      <div class="float-chip float-chip--a"><b>${photoCount}</b> photos</div>
      <div class="float-chip float-chip--b"><b>${DATA.reels.length}</b> videos</div>
    </div>
  </div>
  <a href="#selected" class="scroll-cue" aria-label="Scroll down"><span></span></a>
</section>

<section class="pf-strip" id="selected" aria-label="Selected photos" data-gallery>
  <div class="pf-strip-track">
${highlights.map((p, i) => `    <button type="button" class="pf-strip-item" data-full="${p.full}" aria-label="Open selected photo ${i + 1}, ${esc(p.caption)}"><img src="${p.full}" srcset="${p.thumb} ${p.w}w, ${p.full} ${p.fw}w" sizes="(max-width: 640px) 45vh, 42vh" alt="" width="${p.w}" height="${p.h}" loading="lazy" decoding="async" /><span>${esc(p.caption)}</span></button>`).join('\n')}
  </div>
</section>

<section class="section dark pf-videos" id="videos" aria-labelledby="videos-h">
  <div class="section-head" data-reveal>
    <div>
      <h2 class="h2" id="videos-h">Videos</h2>
      <p class="sub">Tap one to watch it with sound.</p>
    </div>
    <div class="pf-filter" role="group" aria-label="Show">
      <button type="button" class="is-on" data-filter="all" aria-pressed="true">All</button>
${Object.entries(KINDS).filter(([k]) => DATA.reels.some((r) => r.kind === k)).map(([k, v]) => `      <button type="button" data-filter="${k}" aria-pressed="false">${v}</button>`).join('\n')}
    </div>
  </div>
  <div class="cards cards--grid" data-filterable>
${DATA.reels.map(reelCard).join('\n')}
  </div>
</section>

<section class="section pf-photos" id="photos" aria-labelledby="photos-h">
  <div class="section-head" data-reveal>
    <div>
      <h2 class="h2" id="photos-h">Photos</h2>
      <p class="sub">Tap any photo to see it full size.</p>
    </div>
    <nav class="pf-jump" aria-label="Photo sets">
${sets.map((s) => `      <a href="#set-${s.slug}">${esc(s.client)} <span>${esc(s.title)}</span></a>`).join('\n')}
    </nav>
  </div>
  <div class="pf-sets">
${sets.map(setBlock).join('\n')}
  </div>
</section>
<!-- portfolio:end -->`;

const html = fs.readFileSync(PAGE, 'utf8');
const out = html.replace(/<!-- portfolio:start[\s\S]*?<!-- portfolio:end -->/, body);
if (out === html && !html.includes('portfolio:start')) throw new Error('Markers missing in portfolio.html');
fs.writeFileSync(PAGE, out);
console.log(`portfolio.html: ${DATA.reels.length} videos, ${photoCount} photos in ${sets.length} sets, ${highlights.length} highlights`);
