var CLIENTS = [
  { name: 'Studio 187 Tattoo', logo: 'assets/clients/studio187tattoo_logo.png', initials: '', url: 'https://www.studio187tattoo.com/', shot: '' },
  { name: 'MXF Athlete', logo: '', initials: 'MXF', url: 'https://www.mxfathlete.com/', shot: 'assets/mxf.jpg' },
  { name: 'Pulse Property Group', logo: 'assets/clients/ppg_logo.png', initials: '', url: 'https://www.pulsepropertygroup.com.au/', shot: '' },
  { name: 'UP Dietitian', logo: 'assets/clients/updietitian_logo.png', initials: '', url: 'https://www.updietitian.com/', shot: 'assets/upd.jpg' },
  { name: 'NLPSC', logo: 'assets/clients/nlpsc_logo.png', initials: '', url: 'https://www.nlpsc.com/', shot: 'assets/nlpsc.jpg' },
  { name: 'West Coast Allied Health', logo: '', initials: 'WC', url: 'https://wcah-website.vercel.app/', shot: '' },
  { name: 'Foggo', logo: '', initials: 'F', url: 'https://foggowebsite-3j2o38frm-trigramsstudio.vercel.app/', shot: '' },
  { name: 'WA Sports Performance', logo: 'assets/clients/wasp_logo.png', initials: '', url: '#', shot: '' },
  { name: 'Matt & Mates', logo: 'assets/clients/mattandmates_logo.jpg', initials: '', url: '#', shot: '' },
  { name: 'Coffee Bean House', logo: 'assets/clients/cbh_logo.png', initials: '', url: '#', shot: '' }
];

var CASE_STUDIES = [
  {
    name: 'Pulse Property Group', line: 'Real estate, Perth', url: 'https://www.pulsepropertygroup.com.au/',
    logo: 'assets/clients/ppg_logo.png', initials: '', shot: '',
    turnaround: 'First message to live: 6 working days',
    before: 'Listings lived on the portals, with no home base for the brand.',
    now: 'One place to send buyers and sellers, with every appraisal request alerting the team instantly.',
    stats: [ { value: '340', label: 'visits in the first month' }, { value: '2:10', label: 'average time on page' }, { value: '14', label: 'appraisal requests' } ]
  },
  {
    name: 'MXF Athlete', line: 'Strength and conditioning', url: 'https://www.mxfathlete.com/',
    logo: '', initials: 'MXF', shot: 'assets/mxf.jpg',
    turnaround: 'First message to live: 5 working days',
    before: 'Enquiries arrived through Instagram DMs and got buried.',
    now: 'A coaching enquiry form with instant alerts. Every athlete gets an answer the same day.',
    stats: [ { value: '31', label: 'enquiries in the first month' }, { value: '2:40', label: 'average time on page' }, { value: '9', label: 'new athletes on board' } ]
  },
  {
    name: 'Studio 187 Tattoo', line: 'Tattoo studio', url: 'https://www.studio187tattoo.com/',
    logo: 'assets/clients/studio187tattoo_logo.png', initials: '', shot: '',
    turnaround: 'First message to live: 4 working days',
    before: 'Bookings ran on walk-ins and word of mouth.',
    now: 'Artists get an alert the moment a booking request lands, with the reference photos attached.',
    stats: [ { value: '48', label: 'booking requests, month one' }, { value: '3:10', label: 'average time on page' }, { value: '21', label: 'confirmed bookings' } ]
  },
  {
    name: 'UP Dietitian', line: 'Dietitian, private practice', url: 'https://www.updietitian.com/',
    logo: 'assets/clients/updietitian_logo.png', initials: '', shot: 'assets/upd.jpg',
    turnaround: 'First message to live: 4 working days',
    before: 'Bookings ran through a link in bio and email back-and-forth.',
    now: 'Services and a booking form in one place, with new client alerts straight to her phone.',
    stats: [ { value: '210', label: 'visits in the first month' }, { value: '3:05', label: 'average time on page' }, { value: '12', label: 'initial consults booked' } ]
  },
  {
    name: 'West Coast Allied Health', line: 'Exercise physiology, Perth', url: 'https://wcah-website.vercel.app/',
    logo: '', initials: 'WC', shot: '',
    turnaround: 'First message to live: 6 working days',
    before: 'Referrals came by phone and paper forms.',
    now: 'Online referrals and enquiries, routed to the right clinician with an instant alert.',
    stats: [ { value: '420', label: 'visits in the first month' }, { value: '2:20', label: 'average time on page' }, { value: '19', label: 'referral enquiries' } ]
  }
];

/* Video work. `src` is a short silent preview for the carousel; `full` is the
   complete ad with sound, loaded only when a card is opened. `kind` splits the
   paid-ad creative from the broader brand work. */
var REELS = [
  { id: 'nlpsc-conditioning',       client: 'NLPSC',            label: 'Conditioning ad',        kind: 'ad',    accent: '#0F1E32' },
  { id: 'nlpsc-december',           client: 'NLPSC',            label: 'December ad',            kind: 'ad',    accent: '#0F1E32' },
  { id: 'sportiesfc-v1',            client: 'SportiesFC',       label: 'Video ad, cut one',      kind: 'ad',    accent: '#1A2E1A' },
  { id: 'sportiesfc-v2',            client: 'SportiesFC',       label: 'Video ad, cut two',      kind: 'ad',    accent: '#1A2E1A' },
  { id: 'sportiesfc-v3',            client: 'SportiesFC',       label: 'Video ad, cut three',    kind: 'ad',    accent: '#1A2E1A' },
  { id: 'timely-reel-1-coffee',     client: 'Timely Coffee',    label: 'Coffee you can be proud of', kind: 'brand', accent: '#3B2210' },
  { id: 'timely-reel-2-roasting',   client: 'Timely Coffee',    label: 'Roasting 101',           kind: 'brand', accent: '#3B2210' },
  { id: 'timely-reel-3-qc',         client: 'Timely Coffee',    label: 'QC taste tests',         kind: 'brand', accent: '#3B2210' },
  { id: 'timely-reel-4-packing',    client: 'Timely Coffee',    label: 'Packing orders',         kind: 'brand', accent: '#3B2210' },
  { id: 'timely-coffee-window',     client: 'Timely Coffee',    label: 'The coffee window',      kind: 'brand', accent: '#3B2210' },
  { id: 'timely-finishing-touches', client: 'Timely Coffee',    label: 'Finishing touches',      kind: 'brand', accent: '#3B2210' },
  { id: 'timely-pour-over',         client: 'Timely Coffee',    label: 'Pour over',              kind: 'brand', accent: '#3B2210' },
  { id: 'drawon-founder-interview', client: 'Drawon',           label: 'Founder interview',      kind: 'brand', accent: '#1E1A2E' },
  { id: 'abbey-loading-principle',  client: 'Abbey',            label: 'The loading principle',  kind: 'brand', accent: '#1A1A2E' },
  { id: 'studio-187',               client: 'Studio 187 Tattoo',label: 'Studio film',            kind: 'brand', accent: '#1E1E1E' },
  { id: 'trigg-training',           client: 'Trigg Training',   label: 'Montage',                kind: 'brand', accent: '#1A2A1E' },
  { id: 'allan-intro',              client: 'Allan Wryneck',    label: 'Intro',                  kind: 'brand', accent: '#1E2A18' },
  { id: 'allan-wryneck',            client: 'Allan Wryneck',    label: 'Feature',                kind: 'brand', accent: '#1E2A18' },
  { id: 'announcement',             client: 'TRIGRAMS Studio',  label: 'Announcement',           kind: 'brand', accent: '#1A1A1A' }
];

/* Stills from the same shoots. Thumbnails drive the strip and the grid; the
   full-size file only loads when a photo is opened in the lightbox. */
var STILLS = [
  { client: 'Timely Coffee', dir: 'timely', files: ['dsc02265.jpg','dsc02293.jpg','dsc02297.jpg','dsc02307.jpg','dsc02332.jpg','dsc02366.jpg','dsc02485.jpg','dsc03704-2.jpg'] },
  { client: 'UP Dietitian', dir: 'up-dietitian', files: ['upd-1.jpg','upd-51.jpg','upd-82.jpg','upd-109.jpg','upd-57.jpg','up-3.jpg','upd-28.jpg','upd-31.jpg','upd-52.jpg','upd-55.jpg','upd-56.jpg','upd-71.jpg','upd-86.jpg','upd-87.jpg','upd-94.jpg','upd-96.jpg','upd-101.jpg','upd-104.jpg','upd-107.jpg','upd-113.jpg','up-12.jpg','up-15.jpg','up-31.jpg'] },
  { client: 'Waterford', dir: 'waterford', files: ['waterford-38.jpg','waterford-39.jpg','waterford-41.jpg','waterford-42.jpg','waterford-43.jpg','waterford-44.jpg','waterford-45.jpg'] }
];

/* The ladder. Rungs are named by the outcome the business gets; the service
   name rides underneath. Prices are "from" only, deliberately: the upper bound
   depends on scope and stays out of the shop window. Ongoing management is an
   attribute of a rung, never a rung of its own. */
var SERVICE_STEPS = [
  {
    n: '01', outcome: 'Get found', name: 'Website', icon: 'ts-website',
    price: 'From $500 + GST', timeline: 'Live in 14 days',
    desc: 'A clean, fast site that says what you do and what it costs, with a contact form that works. Hosted at $25/month.',
    note: 'The foundation everything else sits on. You own the domain, the content and the code.',
    trigger: 'Once people are finding you, the next thing worth sorting is what happens when they enquire.'
  },
  {
    n: '02', outcome: 'Never lose an enquiry', name: 'Follow-up system', icon: 'ts-email',
    price: 'From $500', timeline: 'Built once',
    desc: 'A 3 to 5 email sequence that fires the moment someone enquires, built in MailerLite or ConvertKit. Most small businesses get an enquiry and do nothing with it, and this fixes that permanently.',
    note: 'Built once, then it runs on its own. Add $150/month and I manage and optimise it for you.',
    trigger: 'With enquiries handled, the natural next move is staying in front of the people who aren’t ready to buy yet.'
  },
  {
    n: '03', outcome: 'Stay in front of them', name: 'Content marketing', icon: 'ts-video',
    price: 'From $1,000/month', timeline: 'Ongoing',
    desc: 'Video and written content that keeps your business in front of the people who already know you. I plan it, produce it, and publish it on a schedule you can see.',
    note: 'This is where most of the growth comes from, because it compounds. You approve the plan before anything goes out.',
    trigger: 'Once the content is working, paid reach makes it go further.'
  },
  {
    n: '04', outcome: 'Reach more people', name: 'Meta ads & campaigns', icon: 'ts-launch',
    price: 'From $1,500', timeline: '6 to 8 weeks',
    desc: 'A focused push with 1 clear objective: new enquiries, re-engagement, a seasonal promo, or a launch. I build the structure, write the copy, and run it.',
    note: 'Defined start, defined end, and you see the numbers the whole way through.',
    trigger: null
  }
];

/* The ladder renders as an ascending staircase: each rung sits higher than the
   last, on a rail that fills as you scroll. Selecting a rung swaps the detail
   panel underneath rather than expanding in place, because the rung columns
   are too narrow for body copy on desktop.

   Two modes. "Climb in order" is the staircase. "Pick one" flattens the rungs
   to equal height and gives each its own CTA, so the optionality is something
   you can see and click instead of a line of small print. */
function renderLadder() {
  var el = document.getElementById('ladder-list');
  if (!el) return;

  var rungs = SERVICE_STEPS.map(function (step, i) {
    return '' +
      '<button type="button" class="ladder-rung" data-i="' + i + '" style="--i:' + i + ';"' +
        ' role="tab" aria-selected="' + (i === 0 ? 'true' : 'false') + '"' +
        ' aria-controls="ladder-detail" id="rung-' + i + '" tabindex="' + (i === 0 ? '0' : '-1') + '">' +
        '<span class="rung-stem" aria-hidden="true"></span>' +
        '<span class="liquid-glass rung-card">' +
          '<span class="rung-top">' +
            '<span class="rung-num">' + step.n + '</span>' +
            '<img class="ts-icon rung-icon" src="assets/icons/' + step.icon + '.svg" alt="">' +
          '</span>' +
          '<span class="rung-outcome">' + step.outcome + '</span>' +
          '<span class="rung-name">' + step.name + '</span>' +
          '<span class="rung-meta"><span class="rung-price">' + step.price + '</span><span class="rung-time">' + step.timeline + '</span></span>' +
          '<span class="rung-cta">Get a quote' +
            '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"></path><path d="M7 7h10v10"></path></svg>' +
          '</span>' +
        '</span>' +
      '</button>';
  }).join('');

  el.innerHTML = '' +
    '<div class="ladder-modes" role="group" aria-label="How to view the phases">' +
      '<button type="button" class="ladder-mode is-on" data-mode="climb" aria-pressed="true">Start to finish</button>' +
      '<button type="button" class="ladder-mode" data-mode="pick" aria-pressed="false">Pick one</button>' +
    '</div>' +
    '<div class="ladder-climb" data-reveal>' +
      '<div class="ladder-rail" aria-hidden="true"><span class="ladder-rail-fill"></span></div>' +
      '<div class="ladder-rungs" role="tablist" aria-label="The four phases">' + rungs + '</div>' +
    '</div>' +
    '<div class="liquid-glass ladder-detail" id="ladder-detail" role="tabpanel" aria-live="polite"></div>';

  var detail = el.querySelector('#ladder-detail');
  var rungEls = Array.prototype.slice.call(el.querySelectorAll('.ladder-rung'));
  var climb = el.querySelector('.ladder-climb');
  var railFill = el.querySelector('.ladder-rail-fill');
  var active = 0;

  function paint(i) {
    var step = SERVICE_STEPS[i];
    active = i;
    rungEls.forEach(function (r, n) {
      r.classList.toggle('is-active', n === i);
      r.classList.toggle('is-climbed', n <= i);
      r.setAttribute('aria-selected', n === i ? 'true' : 'false');
      r.tabIndex = n === i ? 0 : -1;
    });
    detail.setAttribute('aria-labelledby', 'rung-' + i);
    detail.innerHTML = '' +
      '<div class="detail-head">' +
        '<span class="detail-num">' + step.n + '</span>' +
        '<div>' +
          '<h3 class="detail-outcome">' + step.outcome + '</h3>' +
          '<p class="detail-name">' + step.name + ', ' + step.price.toLowerCase() + ', ' + step.timeline.toLowerCase() + '</p>' +
        '</div>' +
      '</div>' +
      '<p class="detail-desc">' + step.desc + '</p>' +
      '<p class="detail-note">' + step.note + '</p>' +
      (step.trigger
        ? '<p class="detail-next"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>' + step.trigger + '</p>'
        : '') +
      '<a class="btn-red detail-cta" href="enquiry.html">Get a quote for this</a>';
    if (railFill) railFill.style.setProperty('--fill', ((i + 1) / SERVICE_STEPS.length * 100) + '%');
  }

  rungEls.forEach(function (r, i) {
    r.addEventListener('click', function () {
      paint(i);
      climb.dataset.userPicked = '1';
    });
    /* Left/right (and up/down on the stacked layout) walk the rungs. */
    r.addEventListener('keydown', function (e) {
      var next = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? i + 1
        : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? i - 1 : null;
      if (next === null) return;
      e.preventDefault();
      next = (next + rungEls.length) % rungEls.length;
      paint(next);
      climb.dataset.userPicked = '1';
      rungEls[next].focus();
    });
  });

  el.querySelectorAll('.ladder-mode').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var mode = btn.dataset.mode;
      el.querySelectorAll('.ladder-mode').forEach(function (b) {
        var on = b === btn;
        b.classList.toggle('is-on', on);
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      climb.classList.toggle('is-flat', mode === 'pick');
      el.classList.toggle('mode-pick', mode === 'pick');
    });
  });

  paint(0);

  /* Climb the rungs as the section scrolls past, until the visitor takes over. */
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var i = +entry.target.dataset.i;
        if (!climb.dataset.userPicked && i > active) paint(i);
      });
    }, { threshold: 0.9 });
    rungEls.forEach(function (r) { io.observe(r); });
  }
}

function hostOf(url) {
  try { return new URL(url).hostname.replace(/^www\./, ''); } catch (e) { return ''; }
}

function avatarInner(item) {
  if (item.logo) return '<img src="' + item.logo + '" alt="' + item.name + '">';
  return '<span>' + item.initials + '</span>';
}

function renderMarquee() {
  var el = document.getElementById('clients-marquee');
  if (!el) return;
  var tile = function(item, hidden) {
    return '<a href="' + item.url + '" target="_blank" rel="noopener" title="' + item.name + '" class="client-tile"' + (hidden ? ' aria-hidden="true" tabindex="-1"' : '') + '>' + avatarInner(item) + '</a>';
  };
  var setA = CLIENTS.map(function (c) { return tile(c, false); }).join('');
  var setB = CLIENTS.map(function (c) { return tile(c, true); }).join('');
  el.innerHTML = setA + setB;
}

function renderExamples() {
  var el = document.getElementById('examples-grid');
  if (!el) return;
  var examples = CLIENTS.filter(function (c) { return c.url && c.url !== '#'; });
  el.innerHTML = examples.map(function (ex) {
    var shot = ex.shot
      ? '<img src="' + ex.shot + '" alt="' + ex.name + ' full page screenshot">'
      : '<div class="example-placeholder"><span>Full-page preview coming soon</span></div>';
    var chrome = '' +
      '<div class="example-chrome" aria-hidden="true">' +
        '<span class="example-chrome-dots"><i></i><i></i><i></i></span>' +
        '<span class="example-chrome-url">' + hostOf(ex.url) + '</span>' +
      '</div>';
    return '' +
      '<div class="liquid-glass example-card stagger-item">' +
        chrome +
        '<a href="' + ex.url + '" target="_blank" rel="noopener" class="example-shot" aria-label="Open ' + ex.name + ' in a new tab">' + shot +
          '<span class="example-shot-hint">Open live site' +
            '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"></path><path d="M7 7h10v10"></path></svg></span>' +
        '</a>' +
        '<a href="' + ex.url + '" target="_blank" rel="noopener" class="example-meta">' +
          '<span class="example-meta-top"><span class="example-name">' + ex.name + '</span>' +
            '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex:none;color:rgba(239,238,234,0.55);"><path d="M7 17 17 7"></path><path d="M7 7h10v10"></path></svg></span>' +
        '</a>' +
      '</div>';
  }).join('');
}

function initExamplesCarousel() {
  var track = document.getElementById('examples-grid');
  var prevBtn = document.getElementById('examples-prev');
  var nextBtn = document.getElementById('examples-next');
  var dotsEl = document.getElementById('examples-dots');
  if (!track || !track.children.length) return;

  var count = track.children.length;
  dotsEl.innerHTML = Array.from({ length: count }).map(function (_, i) {
    return '<button type="button" class="carousel-dot' + (i === 0 ? ' is-active' : '') + '" data-idx="' + i + '" aria-label="Go to build ' + (i + 1) + '"></button>';
  }).join('');
  var dots = dotsEl.querySelectorAll('.carousel-dot');

  function cardStep() {
    var card = track.children[0];
    var style = window.getComputedStyle(track);
    return card.getBoundingClientRect().width + parseFloat(style.gap || 20);
  }

  function activeIndex() {
    return Math.round(track.scrollLeft / cardStep());
  }

  function updateUI() {
    var idx = Math.min(count - 1, Math.max(0, activeIndex()));
    dots.forEach(function (d, i) { d.classList.toggle('is-active', i === idx); });
    prevBtn.disabled = track.scrollLeft <= 4;
    nextBtn.disabled = track.scrollLeft >= track.scrollWidth - track.clientWidth - 4;
  }

  prevBtn.addEventListener('click', function () { pauseAuto(); track.scrollBy({ left: -cardStep(), behavior: 'smooth' }); });
  nextBtn.addEventListener('click', function () { pauseAuto(); track.scrollBy({ left: cardStep(), behavior: 'smooth' }); });
  dots.forEach(function (dot) {
    dot.addEventListener('click', function () { pauseAuto(); track.scrollTo({ left: cardStep() * parseInt(dot.dataset.idx, 10), behavior: 'smooth' }); });
  });

  /* Slow auto-advance: next card every 6s, loop back to the start.
     Pauses while hovered/touched and after any manual control, and
     stays off entirely for reduced-motion visitors. */
  var AUTO_MS = 6000;
  var autoTimer = null;
  var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function autoAdvance() {
    var atEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth - 4;
    if (atEnd) track.scrollTo({ left: 0, behavior: 'smooth' });
    else track.scrollBy({ left: cardStep(), behavior: 'smooth' });
  }
  function startAuto() {
    if (reducedMotion || autoTimer) return;
    autoTimer = setInterval(autoAdvance, AUTO_MS);
  }
  function stopAuto() {
    clearInterval(autoTimer);
    autoTimer = null;
  }
  var resumeTimer;
  function pauseAuto() {
    stopAuto();
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(startAuto, AUTO_MS * 2);
  }

  var carousel = track.closest('.examples-carousel') || track;
  carousel.addEventListener('mouseenter', stopAuto);
  carousel.addEventListener('mouseleave', function () { pauseAuto(); });
  track.addEventListener('touchstart', pauseAuto, { passive: true });
  track.addEventListener('wheel', pauseAuto, { passive: true });

  /* Only cycle while the section is on screen */
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) startAuto(); else stopAuto();
      });
    }, { threshold: 0.3 }).observe(carousel);
  } else {
    startAuto();
  }

  var scrollTick;
  track.addEventListener('scroll', function () {
    clearTimeout(scrollTick);
    scrollTick = setTimeout(updateUI, 60);
  }, { passive: true });
  window.addEventListener('resize', updateUI);
  updateUI();
}

function renderCaseStudies() {
  var el = document.getElementById('cs-grid');
  if (!el) return;
  var limit = parseInt(el.dataset.limit || '0', 10);
  var list = limit > 0 ? CASE_STUDIES.slice(0, limit) : CASE_STUDIES;
  el.innerHTML = list.map(function (cs) {
    var shot = cs.shot
      ? '<img src="' + cs.shot + '" alt="' + cs.name + ' full page screenshot">'
      : '<div class="example-placeholder"><span>Full-page preview coming soon</span></div>';
    var stats = cs.stats.map(function (st) {
      return '<div><div class="cs-stat-val">' + st.value + '</div><div class="cs-stat-lbl">' + st.label + '</div></div>';
    }).join('');
    return '' +
      '<div class="liquid-glass cs-card stagger-item">' +
        '<div class="cs-shot">' + shot + '</div>' +
        '<div class="cs-body">' +
          '<div class="cs-head">' +
            '<span class="cs-logo">' + avatarInner(cs) + '</span>' +
            '<div style="flex:1;min-width:0;"><div class="cs-name">' + cs.name + '</div><div class="cs-line">' + cs.line + '</div></div>' +
            '<a href="' + cs.url + '" target="_blank" rel="noopener" title="Open the live site" class="cs-visit">Visit ' +
              '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"></path><path d="M7 7h10v10"></path></svg></a>' +
          '</div>' +
          '<div class="cs-turnaround"><img class="ts-icon" src="assets/icons/ts-turnaround.svg" alt="">' + cs.turnaround + '</div>' +
          '<div style="display:flex;flex-direction:column;gap:12px;">' +
            '<div class="cs-baseline"><span class="cs-baseline-label">Before</span><span class="cs-baseline-val">' + cs.before + '</span></div>' +
            '<div class="cs-baseline"><span class="cs-baseline-label">Now</span><span class="cs-baseline-val cs-baseline-val--now">' + cs.now + '</span></div>' +
          '</div>' +
          '<div class="cs-stats">' + stats + '</div>' +
        '</div>' +
      '</div>';
  }).join('');
}

var PROCESS_STEPS = [
  { label: 'Initial contact', time: 'Day 0', assets: [], pill: 'New enquiry', stage: 'chat' },
  { label: 'Files & goals in', time: 'Day 1', assets: ['Logo', 'Brand colours', 'Photos & goals'], pill: 'Assets received', stage: 'mood' },
  { label: 'Draft built', time: 'Day 5', assets: ['Logo', 'Brand colours', 'Photos & goals'], pill: 'Draft ready', stage: 'content' },
  { label: 'Your review', time: 'Day 6–10', assets: ['Logo', 'Brand colours', 'Photos & goals'], pill: 'In review', stage: 'content', review: true },
  { label: 'Live', time: 'By day 14', assets: ['Logo', 'Brand colours', 'Photos & goals'], pill: 'Live', stage: 'content', badge: true, live: true }
];

function renderBuildDemo() {
  var root = document.getElementById('build-demo');
  if (!root) return;

  root.innerHTML = '' +
    '<div class="build-titlebar">' +
      '<div class="build-dots"><span style="background:#ff5f57;"></span><span style="background:#febc2e;"></span><span style="background:#28c840;"></span></div>' +
      '<span class="build-titlebar-label">updietitian.com, the 14-day build</span>' +
    '</div>' +
    '<div class="build-body">' +
      '<div class="build-sidebar">' +
        '<div class="build-sidebar-label"><img class="ts-icon" src="assets/icons/ts-build.svg" alt="">The build</div>' +
        '<div class="build-steps" id="build-steps"></div>' +
        '<div class="build-sidebar-label" style="margin-top:20px;"><img class="ts-icon" src="assets/icons/ts-files.svg" alt="">Your assets</div>' +
        '<div class="build-assets" id="build-assets"></div>' +
      '</div>' +
      '<div class="build-preview" id="build-preview">' +
        '<div class="build-preview-top">' +
          '<span class="build-preview-brand"><img src="assets/clients/updietitian_logo.png" alt="">UP Dietitian</span>' +
          '<nav class="bp-navlinks" aria-hidden="true"><span>Services</span><span>About</span><span>Pricing</span><span>Contact</span></nav>' +
          '<span class="build-preview-pill" id="build-pill">New enquiry</span>' +
        '</div>' +
        '<div class="build-preview-stage">' +

          '<div class="build-stage build-stage--chat" id="stage-chat">' +
            '<div class="chat-bubble chat-bubble--client" style="--d:0.15s;">Hi, I’m a dietitian in Perth. I need a website that takes bookings.</div>' +
            '<div class="chat-bubble chat-bubble--studio" style="--d:0.9s;">Can do. Send your logo, photos and prices, whatever you’ve got.</div>' +
            '<div class="chat-bubble chat-bubble--studio" style="--d:1.6s;">The 14 days starts when you hit send.</div>' +
          '</div>' +

          '<div class="build-stage build-stage--mood" id="stage-mood">' +
            '<div class="mood-grid">' +
              '<div class="mood-tile mood-tile--logo" style="--d:0.1s;"><img src="assets/clients/updietitian_logo.png" alt="UP Dietitian logo"></div>' +
              '<div class="mood-tile mood-tile--swatch1" style="--d:0.25s;"><span>#7A9B76</span></div>' +
              '<div class="mood-tile mood-tile--swatch2" style="--d:0.4s;"><span>#F4EFE6</span></div>' +
              '<div class="mood-tile mood-tile--type" style="--d:0.55s;"><span class="mood-aa">Aa</span><span>Fraunces</span></div>' +
              '<div class="mood-tile mood-tile--photo" style="--d:0.7s;"><img src="assets/upd.jpg" alt="UP Dietitian site photography"></div>' +
              '<div class="mood-tile mood-tile--note" style="--d:0.85s;"><span>Goal: more initial consults, less email back-and-forth</span></div>' +
            '</div>' +
          '</div>' +

          '<div class="build-stage build-stage--content" id="stage-content">' +
            '<div class="bp-cols">' +
              '<div class="bp-text">' +
                '<div class="build-preview-eyebrow bp-el" style="--i:0;">Dietitian, private practice, Perth</div>' +
                '<div class="build-preview-h bp-el" style="--i:1;">Feel good about <em>food</em> again.</div>' +
                '<p class="bp-para bp-el" style="--i:2;">Evidence-based nutrition support, tailored to you. Initial consults available this week, in the clinic or over telehealth.</p>' +
                '<div class="bp-cta-row bp-el" style="--i:3;"><span class="bp-btn" id="bp-btn">Book a consult</span><span class="bp-link">View services</span></div>' +
                '<div class="bp-chips bp-el" style="--i:4;"><span>Gut health</span><span>Sports nutrition</span><span>Meal planning</span><span>Telehealth</span></div>' +
                '<div class="build-annotation" id="build-annotation">' +
                  '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>' +
                  'Make the button pop' +
                '</div>' +
              '</div>' +
              '<div class="bp-photo bp-el" style="--i:5;"><img src="assets/upd.jpg" alt="UP Dietitian website preview"><span class="bp-photo-tag">Initial consult · 60 min</span></div>' +
            '</div>' +
            '<div class="bp-statbar bp-el" style="--i:6;">' +
              '<div><b>500+</b><span>clients helped</span></div>' +
              '<div><b>HICAPS</b><span>rebates on the spot</span></div>' +
              '<div><b>Perth</b><span>clinic + telehealth</span></div>' +
            '</div>' +
          '</div>' +

        '</div>' +
        '<div class="build-badge" id="build-badge">' +
          '<img src="assets/logo-mark-transparent.png" alt="" style="width:20px;height:20px;flex:none;">' +
          '<div>' +
            '<div style="font-family:var(--font-body);font-size:12px;font-weight:600;color:#EFEEEA;">Site is live</div>' +
            '<div style="font-family:var(--font-body);font-size:11px;color:rgba(239,238,234,0.5);">14 days, brief to live</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';

  var stepsEl = document.getElementById('build-steps');
  var assetsEl = document.getElementById('build-assets');
  var pillEl = document.getElementById('build-pill');
  var stageEls = {
    chat: document.getElementById('stage-chat'),
    mood: document.getElementById('stage-mood'),
    content: document.getElementById('stage-content')
  };
  var annotationEl = document.getElementById('build-annotation');
  var badgeEl = document.getElementById('build-badge');
  var previewEl = document.getElementById('build-preview');

  var DURATION = 4200;
  var active = 0;
  var timer = null;

  function render() {
    stepsEl.innerHTML = PROCESS_STEPS.map(function (step, i) {
      var isActive = i === active;
      var bar = isActive ? '<span class="build-step-bar"><i style="animation-duration:' + DURATION + 'ms"></i></span>' : '';
      return '<button type="button" class="build-step' + (isActive ? ' build-step--active' : '') + '" data-idx="' + i + '"><span>' + step.label + '</span><span>' + step.time + '</span>' + bar + '</button>';
    }).join('');

    var current = PROCESS_STEPS[active];
    assetsEl.innerHTML = current.assets.length
      ? current.assets.map(function (a, i) { return '<div class="build-asset" style="animation-delay:' + (i * 110) + 'ms;"><span class="build-asset-check">✓</span>' + a + '</div>'; }).join('')
      : '<div class="build-asset-empty">Waiting on your files…</div>';

    pillEl.textContent = current.pill;
    pillEl.classList.toggle('is-live', !!current.live);
    Object.keys(stageEls).forEach(function (key) {
      stageEls[key].classList.toggle('is-active', current.stage === key);
    });
    previewEl.classList.toggle('is-review', !!current.review);
    previewEl.classList.toggle('is-live', !!current.live);
    annotationEl.classList.toggle('is-active', !!current.review);
    badgeEl.classList.toggle('is-active', !!current.badge);

    stepsEl.querySelectorAll('.build-step').forEach(function (btn) {
      btn.addEventListener('click', function () {
        stop();
        active = parseInt(btn.dataset.idx, 10);
        render();
      });
    });
  }

  function tick() { active = (active + 1) % PROCESS_STEPS.length; render(); }
  function start() { stop(); timer = setInterval(tick, DURATION); }
  function stop() { if (timer) { clearInterval(timer); timer = null; } }

  render();
  start();

  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', start);
}

/* ─── REEL CAROUSEL ──────────────────────────────────────────────────────────
   Phone-framed 9:16 cards. The card plays a short silent preview on hover
   (desktop) or when tapped into view (touch); opening a card loads the full
   ad with sound in a lightbox. Nothing but the poster loads until asked. */

function reelCardHTML(reel, hidden) {
  return '' +
    '<button type="button" class="reel-card" data-reel="' + reel.id + '"' + (hidden ? ' aria-hidden="true" tabindex="-1"' : '') +
      ' style="--accent:' + reel.accent + ';" aria-label="Play ' + reel.client + ' · ' + reel.label + '">' +
      '<span class="reel-notch" aria-hidden="true"></span>' +
      '<video class="reel-video" preload="none" muted loop playsinline poster="assets/reels/' + reel.id + '-poster.jpg" src="assets/reels/' + reel.id + '.mp4"></video>' +
      '<span class="reel-vignette" aria-hidden="true"></span>' +
      '<span class="reel-play" aria-hidden="true"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg></span>' +
      '<span class="reel-meta"><span class="reel-client">' + reel.client + '</span><span class="reel-label">' + reel.label + '</span></span>' +
    '</button>';
}

/* One shared lightbox for every carousel on the page. */
function reelLightbox() {
  var el = document.getElementById('reel-lightbox');
  if (el) return el;
  el = document.createElement('div');
  el.id = 'reel-lightbox';
  el.className = 'reel-lightbox';
  el.innerHTML = '' +
    '<div class="reel-lightbox-backdrop"></div>' +
    '<div class="reel-lightbox-inner">' +
      '<video class="reel-lightbox-video" controls playsinline preload="auto"></video>' +
      '<div class="reel-lightbox-cap"></div>' +
    '</div>' +
    '<button type="button" class="reel-lightbox-close" aria-label="Close video">' +
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>' +
    '</button>';
  document.body.appendChild(el);

  var vid = el.querySelector('.reel-lightbox-video');
  function close() {
    el.classList.remove('is-open');
    vid.pause();
    vid.removeAttribute('src');
    vid.load();
    document.body.style.overflow = '';
  }
  el.querySelector('.reel-lightbox-close').addEventListener('click', close);
  el.querySelector('.reel-lightbox-backdrop').addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && el.classList.contains('is-open')) close();
  });
  return el;
}

function openReel(reel) {
  var el = reelLightbox();
  var vid = el.querySelector('.reel-lightbox-video');
  vid.poster = 'assets/reels/' + reel.id + '-poster.jpg';
  vid.src = 'assets/reels/full/' + reel.id + '.mp4';
  el.querySelector('.reel-lightbox-cap').innerHTML =
    '<strong>' + reel.client + '</strong><span>' + reel.label + '</span>';
  el.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  vid.play().catch(function () {});
}

/* Wires hover-preview + click-to-open onto every card inside a container. */
function initReelCards(root) {
  var byId = {};
  REELS.forEach(function (r) { byId[r.id] = r; });
  var canHover = window.matchMedia && window.matchMedia('(hover: hover)').matches;

  root.querySelectorAll('.reel-card').forEach(function (card) {
    var vid = card.querySelector('.reel-video');
    var reel = byId[card.dataset.reel];

    function play() {
      if (!vid.getAttribute('src')) return;
      vid.play().then(function () { card.classList.add('is-playing'); }).catch(function () {});
    }
    function stop() {
      vid.pause();
      vid.currentTime = 0;
      card.classList.remove('is-playing');
    }

    if (canHover) {
      card.addEventListener('mouseenter', play);
      card.addEventListener('mouseleave', stop);
    }
    card.addEventListener('click', function () { openReel(reel); });
  });

  /* On touch, previews play only while the card is actually on screen —
     otherwise 19 videos fight for bandwidth the moment the page loads. */
  if (!canHover && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var v = entry.target.querySelector('.reel-video');
        if (entry.isIntersecting) {
          v.play().then(function () { entry.target.classList.add('is-playing'); }).catch(function () {});
        } else {
          v.pause();
          entry.target.classList.remove('is-playing');
        }
      });
    }, { threshold: 0.6 });
    root.querySelectorAll('.reel-card').forEach(function (c) { io.observe(c); });
  }
}

/* Tiered carousel: two rows drifting at different speeds so they never align.
   `data-reels` picks the subset — "ad", "brand" or omitted for everything.
   `data-rows="1"` renders a single row (used on the Meta ads page). */
function renderReelCarousels() {
  var mounts = document.querySelectorAll('[data-reels]');
  if (!mounts.length) return;
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  mounts.forEach(function (mount) {
    var kind = mount.dataset.reels;
    var list = kind === 'all' ? REELS : REELS.filter(function (r) { return r.kind === kind; });
    if (!list.length) return;
    var singleRow = mount.dataset.rows === '1' || list.length <= 6;

    var rows;
    if (singleRow) {
      rows = [list];
    } else {
      var mid = Math.ceil(list.length / 2);
      rows = [list.slice(0, mid), list.slice(mid)];
    }

    mount.innerHTML = rows.map(function (row, i) {
      var cards = row.map(function (r) { return reelCardHTML(r, false); }).join('') +
                  row.map(function (r) { return reelCardHTML(r, true); }).join('');
      return '<div class="reel-row" data-row="' + i + '"><div class="reel-row-track">' + cards + '</div></div>';
    }).join('') +
    '<div class="reel-hint"><button type="button" class="carousel-btn" data-reel-nav="-1" aria-label="Scroll left">' +
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg></button>' +
      '<span>Drag to browse &middot; tap a card for the full ad</span>' +
      '<button type="button" class="carousel-btn" data-reel-nav="1" aria-label="Scroll right">' +
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></button></div>';

    initReelCards(mount);

    var rowEls = mount.querySelectorAll('.reel-row');
    mount.querySelectorAll('[data-reel-nav]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var dir = parseInt(btn.dataset.reelNav, 10);
        rowEls.forEach(function (r) { r.scrollBy({ left: dir * 320, behavior: 'smooth' }); });
      });
    });

    if (reduced) return;

    /* Continuous drift. Each row loops by resetting once it passes the
       halfway point, which is where the duplicated set begins. */
    var paused = false;
    var speeds = [0.35, 0.2];
    var started = [true, false];
    setTimeout(function () { started[1] = true; }, 1000);

    mount.addEventListener('mouseenter', function () { paused = true; });
    mount.addEventListener('mouseleave', function () { paused = false; });
    mount.addEventListener('touchstart', function () { paused = true; }, { passive: true });

    var onScreen = true;
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { onScreen = e.isIntersecting; });
      }, { threshold: 0.05 }).observe(mount);
    }

    (function tick() {
      if (!paused && onScreen) {
        rowEls.forEach(function (row, i) {
          if (!started[i]) return;
          row.scrollLeft += speeds[i] || 0.3;
          if (row.scrollLeft >= row.scrollWidth / 2) row.scrollLeft -= row.scrollWidth / 2;
        });
      }
      requestAnimationFrame(tick);
    })();
  });
}

/* ─── STILLS: strip → grid modal → lightbox ─────────────────────────────── */

function allStills() {
  var out = [];
  STILLS.forEach(function (g) {
    g.files.forEach(function (f) {
      out.push({ client: g.client, full: 'assets/stills/' + g.dir + '/' + f, thumb: 'assets/stills/' + g.dir + '/thumb/' + f });
    });
  });
  return out;
}

function renderStills() {
  var mount = document.getElementById('stills-strip');
  if (!mount) return;
  var all = allStills();
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Preview strip: an even spread across clients rather than the first N. */
  var strip = [];
  STILLS.forEach(function (g) {
    var step = Math.max(1, Math.floor(g.files.length / 4));
    for (var i = 0; i < g.files.length && strip.length < 14; i += step) {
      strip.push({ client: g.client, thumb: 'assets/stills/' + g.dir + '/thumb/' + g.files[i], full: 'assets/stills/' + g.dir + '/' + g.files[i] });
    }
  });

  var tile = function (p, hidden) {
    return '<button type="button" class="still-tile" data-full="' + p.full + '"' + (hidden ? ' aria-hidden="true" tabindex="-1"' : '') +
      ' aria-label="Open photo from the ' + p.client + ' shoot">' +
      '<img src="' + p.thumb + '" alt="" loading="lazy"><span class="still-tile-client">' + p.client + '</span></button>';
  };
  mount.innerHTML = '<div class="stills-track">' +
    strip.map(function (p) { return tile(p, false); }).join('') +
    strip.map(function (p) { return tile(p, true); }).join('') + '</div>';

  var track = mount.querySelector('.stills-track');
  var paused = false;
  mount.addEventListener('mouseenter', function () { paused = true; });
  mount.addEventListener('mouseleave', function () { paused = false; });
  mount.addEventListener('touchstart', function () { paused = true; }, { passive: true });

  if (!reduced) {
    (function tick() {
      if (!paused) {
        mount.scrollLeft += 0.3;
        if (mount.scrollLeft >= track.scrollWidth / 2) mount.scrollLeft -= track.scrollWidth / 2;
      }
      requestAnimationFrame(tick);
    })();
  }

  mount.querySelectorAll('.still-tile').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var idx = all.findIndex(function (p) { return p.full === btn.dataset.full; });
      openStillsGrid(idx < 0 ? 0 : idx);
    });
  });

  var openAll = document.getElementById('stills-open');
  if (openAll) {
    openAll.textContent = 'View all ' + all.length + ' photos';
    openAll.addEventListener('click', function () { openStillsGrid(-1); });
  }
}

/* Full-screen grid with client filters, plus a lightbox over the top. */
function openStillsGrid(lightboxIndex) {
  var all = allStills();
  var modal = document.getElementById('stills-modal');

  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'stills-modal';
    modal.className = 'stills-modal';
    modal.innerHTML = '' +
      '<div class="stills-modal-head">' +
        '<div class="stills-modal-title"><strong>Stills from set</strong><span id="stills-count"></span></div>' +
        '<div class="stills-filters" id="stills-filters"></div>' +
        '<button type="button" class="stills-close" aria-label="Close gallery">' +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>' +
        '</button>' +
      '</div>' +
      '<div class="stills-scroll"><div class="stills-grid" id="stills-grid"></div></div>' +
      '<div class="stills-light" id="stills-light">' +
        '<button type="button" class="stills-light-prev" aria-label="Previous photo"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg></button>' +
        '<img alt="">' +
        '<button type="button" class="stills-light-next" aria-label="Next photo"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></button>' +
        '<div class="stills-light-count"></div>' +
      '</div>';
    document.body.appendChild(modal);

    var filtersEl = modal.querySelector('#stills-filters');
    var clients = ['All'].concat(STILLS.map(function (g) { return g.client; }));
    filtersEl.innerHTML = clients.map(function (c, i) {
      return '<button type="button" class="stills-filter' + (i === 0 ? ' is-active' : '') + '" data-client="' + c + '">' + c + '</button>';
    }).join('');

    modal.querySelector('.stills-close').addEventListener('click', function () { closeStillsGrid(); });
    filtersEl.querySelectorAll('.stills-filter').forEach(function (b) {
      b.addEventListener('click', function () {
        filtersEl.querySelectorAll('.stills-filter').forEach(function (x) { x.classList.remove('is-active'); });
        b.classList.add('is-active');
        paintStillsGrid(b.dataset.client);
      });
    });

    var light = modal.querySelector('#stills-light');
    light.querySelector('.stills-light-prev').addEventListener('click', function (e) { e.stopPropagation(); stepStill(-1); });
    light.querySelector('.stills-light-next').addEventListener('click', function (e) { e.stopPropagation(); stepStill(1); });
    light.addEventListener('click', function (e) { if (e.target === light || e.target.tagName === 'IMG') light.classList.remove('is-open'); });

    document.addEventListener('keydown', function (e) {
      if (!modal.classList.contains('is-open')) return;
      var lightOpen = light.classList.contains('is-open');
      if (e.key === 'Escape') { lightOpen ? light.classList.remove('is-open') : closeStillsGrid(); }
      if (lightOpen && e.key === 'ArrowLeft') stepStill(-1);
      if (lightOpen && e.key === 'ArrowRight') stepStill(1);
    });
  }

  modal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  paintStillsGrid('All');
  if (lightboxIndex >= 0) openStillLight(lightboxIndex);
}

function closeStillsGrid() {
  var modal = document.getElementById('stills-modal');
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.querySelector('#stills-light').classList.remove('is-open');
  document.body.style.overflow = '';
}

function paintStillsGrid(client) {
  var modal = document.getElementById('stills-modal');
  var all = allStills();
  var list = client === 'All' ? all : all.filter(function (p) { return p.client === client; });
  modal.querySelector('#stills-count').textContent = list.length + ' photos';
  modal.querySelector('#stills-grid').innerHTML = list.map(function (p) {
    return '<button type="button" class="stills-cell" data-full="' + p.full + '"><img src="' + p.thumb + '" alt="" loading="lazy"></button>';
  }).join('');
  modal.querySelectorAll('.stills-cell').forEach(function (cell) {
    cell.addEventListener('click', function () {
      openStillLight(all.findIndex(function (p) { return p.full === cell.dataset.full; }));
    });
  });
}

function openStillLight(index) {
  var modal = document.getElementById('stills-modal');
  if (!modal) return;
  var all = allStills();
  if (index < 0 || index >= all.length) return;
  var light = modal.querySelector('#stills-light');
  light.dataset.index = index;
  light.querySelector('img').src = all[index].full;
  light.querySelector('.stills-light-count').textContent = (index + 1) + ' / ' + all.length;
  light.classList.add('is-open');
}

function stepStill(dir) {
  var light = document.querySelector('#stills-light');
  if (!light) return;
  var next = parseInt(light.dataset.index, 10) + dir;
  var total = allStills().length;
  openStillLight((next + total) % total);
}

/* Published case-study deck: snap carousel with dots. */
function initDeck() {
  var track = document.getElementById('deck-track');
  var dotsEl = document.getElementById('deck-dots');
  if (!track || !dotsEl) return;
  var slides = track.children.length;

  dotsEl.innerHTML = Array.from({ length: slides }).map(function (_, i) {
    return '<button type="button" class="carousel-dot' + (i === 0 ? ' is-active' : '') + '" data-idx="' + i + '" aria-label="Slide ' + (i + 1) + '"></button>';
  }).join('');
  var dots = dotsEl.querySelectorAll('.carousel-dot');

  function step() {
    var first = track.children[0];
    return first.getBoundingClientRect().width + parseFloat(window.getComputedStyle(track).gap || 16);
  }
  function update() {
    var idx = Math.min(slides - 1, Math.max(0, Math.round(track.scrollLeft / step())));
    dots.forEach(function (d, i) { d.classList.toggle('is-active', i === idx); });
    document.getElementById('deck-prev').disabled = track.scrollLeft <= 4;
    document.getElementById('deck-next').disabled = track.scrollLeft >= track.scrollWidth - track.clientWidth - 4;
  }

  document.getElementById('deck-prev').addEventListener('click', function () { track.scrollBy({ left: -step(), behavior: 'smooth' }); });
  document.getElementById('deck-next').addEventListener('click', function () { track.scrollBy({ left: step(), behavior: 'smooth' }); });
  dots.forEach(function (d) {
    d.addEventListener('click', function () { track.scrollTo({ left: step() * parseInt(d.dataset.idx, 10), behavior: 'smooth' }); });
  });

  var t;
  track.addEventListener('scroll', function () { clearTimeout(t); t = setTimeout(update, 60); }, { passive: true });
  window.addEventListener('resize', update);
  update();
}

renderBuildDemo();
renderReelCarousels();
initDeck();
renderStills();
renderMarquee();
renderExamples();
initExamplesCarousel();
renderCaseStudies();
renderLadder();

/* Enquiry service picker: preselects from ?service=, reveals the fields that
   match, and sets the Formspree subject so the inbox sorts itself. Fields in
   hidden blocks are disabled so they never post as empty noise. */
(function () {
  var picker = document.getElementById('svc-picker');
  if (!picker) return;

  var SLUGS = {
    'website': 'Website',
    'meta-ads': 'Meta ads',
    'ads': 'Meta ads',
    'video': 'Video',
    'videography': 'Video',
    'creative-direction': 'Creative direction',
    'not-sure': 'Not sure'
  };
  var SUBJECTS = {
    'Website': 'Website enquiry · trigrams.studio',
    'Meta ads': 'Meta ads enquiry · trigrams.studio',
    'Video': 'Video enquiry · trigrams.studio',
    'Creative direction': 'Creative direction waitlist · trigrams.studio',
    'Not sure': 'New enquiry · trigrams.studio'
  };

  var radios = picker.querySelectorAll('input[name="service"]');
  var extras = document.querySelectorAll('.svc-extra');
  var subject = document.getElementById('enquiry-subject');
  var submit = document.getElementById('enquiry-submit');

  function apply(value) {
    extras.forEach(function (block) {
      var on = block.dataset.for === value;
      block.classList.toggle('is-open', on);
      block.querySelectorAll('input, textarea').forEach(function (f) { f.disabled = !on; });
    });
    if (subject) subject.value = SUBJECTS[value] || SUBJECTS['Not sure'];
    if (submit) submit.textContent = value === 'Creative direction' ? 'Join the waitlist' : 'Send enquiry';
  }

  radios.forEach(function (r) {
    r.addEventListener('change', function () { if (r.checked) apply(r.value); });
  });

  var wanted = SLUGS[(new URLSearchParams(location.search).get('service') || '').toLowerCase()];
  if (wanted) {
    radios.forEach(function (r) { r.checked = (r.value === wanted); });
  }
  var current = document.querySelector('input[name="service"]:checked');
  apply(current ? current.value : 'Website');
})();

/* Entrance */
(function () {
  var els = document.querySelectorAll('[data-fade]');
  var delays = [80, 250, 450, 650];
  els.forEach(function (el) {
    var i = parseInt(el.dataset.fade || '0');
    requestAnimationFrame(function () {
      setTimeout(function () { el.classList.add('in'); }, delays[i] || 80);
    });
  });
})();

/* Scroll reveals */
(function () {
  var STAGGER_MS = 90;
  var els = document.querySelectorAll('[data-reveal]');
  var staggerEls = document.querySelectorAll('[data-stagger]');
  var revealStagger = function (el) {
    var children = el.querySelectorAll(':scope > .stagger-item');
    children.forEach(function (c, i) { setTimeout(function () { c.classList.add('in'); }, i * STAGGER_MS); });
  };
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('in'); });
    staggerEls.forEach(revealStagger);
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      if (entry.target.hasAttribute('data-stagger')) {
        revealStagger(entry.target);
        io.unobserve(entry.target);
        return;
      }
      var delay = parseInt(entry.target.dataset.revealDelay || '0');
      setTimeout(function () { entry.target.classList.add('in'); }, delay);
      io.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -48px 0px' });
  els.forEach(function (el) { io.observe(el); });
  staggerEls.forEach(function (el) { io.observe(el); });
})();

/* Sticky nav: scrolled shadow + mobile menu toggle */
(function () {
  var bar = document.getElementById('nav-bar');
  var toggle = document.getElementById('nav-toggle');
  var links = document.getElementById('nav-links');
  if (bar) {
    var tick = function () { bar.classList.toggle('scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', tick, { passive: true });
    tick();
  }
  if (toggle && links) {
    var closeMenu = function () {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    };
    var openMenu = function () {
      links.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
    };
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      if (links.classList.contains('open')) closeMenu(); else openMenu();
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
    document.addEventListener('click', function (e) {
      if (!links.contains(e.target) && e.target !== toggle) closeMenu();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 860) closeMenu();
    });
  }
})();

/* Theme toggle. The theme itself is applied before first paint by the inline
   snippet in <head> — this only builds the control and handles switching.

   Pixel icons have a hardcoded light fill, so CSS can't recolour them and a
   filter would invert their chrome chip too. Dark variants get swapped in. */
(function () {
  var KEY = 'ts-theme';
  var root = document.documentElement;

  function swapIcons(theme) {
    document.querySelectorAll('.ts-icon').forEach(function (img) {
      var src = img.getAttribute('src') || '';
      if (src.indexOf('/icons/') === -1) return;
      var wantDark = theme === 'light';
      var isDark = src.indexOf('/icons/dark/') !== -1;
      if (wantDark && !isDark) img.setAttribute('src', src.replace('/icons/', '/icons/dark/'));
      if (!wantDark && isDark) img.setAttribute('src', src.replace('/icons/dark/', '/icons/'));
    });
  }

  function apply(theme, persist) {
    root.setAttribute('data-theme', theme);
    swapIcons(theme);
    if (persist) { try { localStorage.setItem(KEY, theme); } catch (e) {} }
    var btns = document.querySelectorAll('.theme-toggle button');
    btns.forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.theme === theme ? 'true' : 'false'); });
  }

  var current = root.getAttribute('data-theme') || 'dark';
  swapIcons(current);

  var sun = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path></svg>';
  var moon = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"></path></svg>';

  var wrap = document.createElement('div');
  wrap.className = 'theme-toggle';
  wrap.setAttribute('role', 'group');
  wrap.setAttribute('aria-label', 'Colour theme');
  wrap.innerHTML =
    '<button type="button" data-theme="dark" aria-label="Dark theme" title="Dark">' + moon + '</button>' +
    '<button type="button" data-theme="light" aria-label="Light theme" title="Light">' + sun + '</button>';
  document.body.appendChild(wrap);

  wrap.querySelectorAll('button').forEach(function (b) {
    b.addEventListener('click', function () { apply(b.dataset.theme, true); });
  });
  apply(current, false);

  /* Follow the OS only while the visitor hasn't made an explicit choice. */
  if (window.matchMedia) {
    var mq = window.matchMedia('(prefers-color-scheme: light)');
    var onChange = function (e) {
      var saved = null;
      try { saved = localStorage.getItem(KEY); } catch (err) {}
      if (!saved) apply(e.matches ? 'light' : 'dark', false);
    };
    if (mq.addEventListener) mq.addEventListener('change', onChange);
  }
})();

/* Scroll progress under the nav. */
(function () {
  var bar = document.createElement('div');
  bar.className = 'scroll-progress';
  document.body.appendChild(bar);
  var ticking = false;
  function update() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var pct = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    bar.style.transform = 'scaleX(' + pct + ')';
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener('resize', update);
  update();
})();

/* Nav "More" dropdown. Opens on hover where hovering exists, and on click
   everywhere — click also drives keyboard use, so it works without a mouse. */
(function () {
  var wrap = document.getElementById('nav-more');
  var btn = document.getElementById('nav-more-btn');
  if (!wrap || !btn) return;
  var canHover = window.matchMedia && window.matchMedia('(hover: hover) and (min-width: 860px)').matches;

  function open() { wrap.classList.add('is-open'); btn.setAttribute('aria-expanded', 'true'); }
  function close() { wrap.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); }

  if (canHover) {
    /* Pointer opens and closes it. Click must not also toggle here, or moving
       the mouse onto the button opens it and the click immediately shuts it. */
    wrap.addEventListener('mouseenter', open);
    wrap.addEventListener('mouseleave', close);
    /* Keyboard path: tabbing to the button opens the menu. */
    btn.addEventListener('focus', open);
    btn.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); });
  } else {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      wrap.classList.contains('is-open') ? close() : open();
    });
  }

  document.addEventListener('click', function (e) {
    if (!wrap.contains(e.target)) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && wrap.classList.contains('is-open')) { close(); btn.focus(); }
  });
  /* Close when focus leaves the group entirely, so tabbing past it tidies up. */
  wrap.addEventListener('focusout', function () {
    setTimeout(function () { if (!wrap.contains(document.activeElement)) close(); }, 0);
  });
})();

/* Menu bar clock */
(function () {
  var el = document.getElementById('menubar-clock');
  if (!el) return;
  var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  function tick() {
    var d = new Date();
    var h = d.getHours();
    var ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    var m = String(d.getMinutes()).padStart(2, '0');
    el.textContent = days[d.getDay()] + ' ' + months[d.getMonth()] + ' ' + d.getDate() + ' ' + h + ':' + m + ' ' + ampm;
  }
  tick();
  setInterval(tick, 30000);
})();

/* Enquiry form */
(function () {
  var form = document.getElementById('enquiry-form');
  if (!form) return;
  var note = document.getElementById('enquiry-note');
  var submitBtn = document.getElementById('enquiry-submit');
  var ENDPOINT = 'https://formspree.io/f/meewzagj';

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
    note.className = 'enquiry-note';
    note.textContent = '';

    fetch(ENDPOINT, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(function (res) {
      if (res.ok) {
        form.reset();
        note.classList.add('is-success');
        note.textContent = 'Sent. I’ll reply the same day.';
        submitBtn.textContent = 'Send enquiry';
      } else {
        throw new Error('Request failed');
      }
    }).catch(function () {
      note.classList.add('is-error');
      note.textContent = 'Something went wrong. Email hello@trigrams.studio directly.';
      submitBtn.textContent = 'Send enquiry';
    }).finally(function () {
      submitBtn.disabled = false;
    });
  });
})();

/* Newsletter form */
(function () {
  var form = document.getElementById('newsletter-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var btn = form.querySelector('button');
    btn.disabled = true;
    btn.textContent = 'Subscribing…';
    fetch('https://formspree.io/f/meewzagj', {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(function (res) {
      if (!res.ok) throw new Error('failed');
      form.reset();
      btn.textContent = 'Subscribed ✓';
    }).catch(function () {
      btn.textContent = 'Try again';
      btn.disabled = false;
    });
  });
})();

/* FAQ accordion */
(function () {
  var items = document.querySelectorAll('.faq-item');
  if (!items.length) return;
  items.forEach(function (item) {
    var btn = item.querySelector('.faq-q');
    btn.addEventListener('click', function () {
      var open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
})();

/* Portal links (Client Login + Free Resource) + analytics events.
   One place for all pages — links are injected into the nav and footer,
   and interactions are reported to Vercel Web Analytics as custom events. */
(function () {
  var CLIENT_URL = 'https://client.trigrams.studio/admin';
  var RESOURCE_URL = 'https://onboarding.trigrams.studio';

  // Vercel Analytics queue guard — safe to call before the script loads.
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
  function track(name, data) {
    try { window.va('event', { name: name, data: data || {} }); } catch (e) {}
  }
  var PAGE = location.pathname.replace(/\/index\.html$/, '/') || '/';

  /* --- Free Resource sits in the "More" dropdown. Client Login is footer-only,
         so the top bar stays down to three links plus the CTA. --- */
  var moreMenu = document.getElementById('nav-more-menu');
  if (moreMenu && !moreMenu.querySelector('[data-portal="resource"]')) {
    var res = document.createElement('a');
    res.href = RESOURCE_URL;
    res.textContent = 'Free Resource';
    res.setAttribute('data-portal', 'resource');
    res.rel = 'noopener';
    moreMenu.appendChild(res);
  }

  /* --- Inject both into the footer "Talk" column --- */
  var footerCols = document.querySelectorAll('.footer-links');
  if (footerCols.length) {
    var talk = footerCols[footerCols.length - 1];
    if (!talk.querySelector('[data-portal]')) {
      var fRes = document.createElement('a');
      fRes.href = RESOURCE_URL; fRes.textContent = 'Free Resource';
      fRes.setAttribute('data-portal', 'resource'); fRes.rel = 'noopener';
      var fLogin = document.createElement('a');
      fLogin.href = CLIENT_URL; fLogin.textContent = 'Client Login';
      fLogin.setAttribute('data-portal', 'client'); fLogin.rel = 'noopener';
      talk.appendChild(fRes);
      talk.appendChild(fLogin);
    }
  }

  /* --- Track clicks to the portals (delegated, catches all copies) --- */
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[data-portal]');
    if (!a) return;
    track('Portal Click', {
      portal: a.getAttribute('data-portal') === 'client' ? 'Client Login' : 'Free Resource',
      from: PAGE
    });
  });

  /* --- Track key CTA / button clicks --- */
  document.addEventListener('click', function (e) {
    var el = e.target.closest && e.target.closest('a, button');
    if (!el || el.hasAttribute('data-portal')) return;
    var href = el.getAttribute('href') || '';
    var label = (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 60);
    var kind = null;
    if (href.indexOf('calendly.com') !== -1 || el.classList.contains('cal-float')) kind = 'Book a call';
    else if (el.id === 'enquiry-submit' || href.indexOf('enquiry.html') !== -1) kind = 'Enquiry';
    else if (el.classList.contains('nav-cta') || el.classList.contains('liquid-glass') || /start your build|get started/i.test(label)) kind = 'CTA';
    if (kind) track('CTA Click', { kind: kind, label: label, from: PAGE });
  });

  /* --- Scroll depth: 25 / 50 / 75 / 100% (once each per page) --- */
  var marks = [25, 50, 75, 100];
  var hit = {};
  function onScrollDepth() {
    var doc = document.documentElement;
    var scrollable = doc.scrollHeight - window.innerHeight;
    if (scrollable <= 0) return;
    var pct = Math.round(((window.scrollY) / scrollable) * 100);
    marks.forEach(function (m) {
      if (pct >= m && !hit[m]) { hit[m] = true; track('Scroll Depth', { depth: m + '%', page: PAGE }); }
    });
    if (Object.keys(hit).length === marks.length) window.removeEventListener('scroll', onScrollDepth);
  }
  window.addEventListener('scroll', onScrollDepth, { passive: true });

  /* --- Section views: fire once when a section scrolls into view --- */
  var sections = document.querySelectorAll('section[id]');
  if (sections.length && 'IntersectionObserver' in window) {
    var seen = {};
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (ent) {
        if (!ent.isIntersecting) return;
        var id = ent.target.id;
        if (seen[id]) return;
        seen[id] = true;
        track('Section View', { section: id, page: PAGE });
      });
    }, { threshold: 0.4 });
    sections.forEach(function (s) { so.observe(s); });
  }
})();

/* Newsletter popup — shows once per week, never after subscribing */
(function () {
  var KEY_DONE = 'tg_news_done';
  var KEY_LAST = 'tg_news_last';
  try {
    if (localStorage.getItem(KEY_DONE)) return;
    var last = parseInt(localStorage.getItem(KEY_LAST) || '0', 10);
    if (Date.now() - last < 7 * 86400000) return;
  } catch (e) { return; }
  if (document.getElementById('enquiry-form')) return; // never over the enquiry page
  if (document.body.hasAttribute('data-no-pop')) return; // 404 and legal pages opt out

  var pop = document.createElement('div');
  pop.className = 'news-pop';
  pop.innerHTML = '' +
    '<div class="news-pop-backdrop"></div>' +
    '<div class="news-pop-card" role="dialog" aria-modal="true" aria-label="Newsletter signup">' +
      '<button type="button" class="news-pop-close" aria-label="Close">' +
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>' +
      '</button>' +
      '<div class="section-eyebrow"><i class="red"></i><span>The newsletter</span></div>' +
      '<div class="news-pop-title">One useful email a <em>month</em>.</div>' +
      '<p class="news-pop-sub">What’s working in marketing for WA small businesses right now: systems, numbers, no fluff.</p>' +
      '<form class="news-pop-form" id="news-pop-form">' +
        '<input type="email" name="email" placeholder="you@yourbusiness.com" autocomplete="email" required aria-label="Email address">' +
        '<input type="text" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;width:1px;height:1px;opacity:0;">' +
        '<input type="hidden" name="_subject" value="Newsletter signup (popup) from trigrams.studio">' +
        '<button type="submit" class="btn-red">Subscribe</button>' +
      '</form>' +
      '<p class="news-pop-note" id="news-pop-note">No spam. Unsubscribe any time.</p>' +
    '</div>';
  document.body.appendChild(pop);

  var shown = false;
  function show() {
    if (shown) return;
    shown = true;
    pop.classList.add('show');
    try { localStorage.setItem(KEY_LAST, String(Date.now())); } catch (e) {}
    window.removeEventListener('scroll', onScroll);
  }
  function hide() { pop.classList.remove('show'); }

  var timer = setTimeout(show, 16000);
  function onScroll() {
    var depth = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
    if (depth > 0.5) { clearTimeout(timer); show(); }
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  pop.querySelector('.news-pop-close').addEventListener('click', hide);
  pop.querySelector('.news-pop-backdrop').addEventListener('click', hide);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') hide(); });

  var form = pop.querySelector('#news-pop-form');
  var note = pop.querySelector('#news-pop-note');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var btn = form.querySelector('button');
    btn.disabled = true;
    btn.textContent = 'Subscribing…';
    fetch('https://formspree.io/f/meewzagj', {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(function (res) {
      if (!res.ok) throw new Error('failed');
      note.classList.add('is-success');
      note.textContent = 'Done. First one lands soon.';
      try { localStorage.setItem(KEY_DONE, '1'); } catch (e2) {}
      setTimeout(hide, 1800);
    }).catch(function () {
      note.textContent = 'Something went wrong. Try the form in the newsletter section.';
      btn.disabled = false;
      btn.textContent = 'Subscribe';
    });
  });
})();
