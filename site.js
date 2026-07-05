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

var SERVICE_STEPS = [
  {
    n: '01', name: 'Website', price: 'From $300', timeline: 'Live in 48 hours',
    desc: 'A clean, functional site built fast with AI. Clear offer, clear pricing, a contact form that actually works. Hosted at $25/month.',
    note: 'This is the door. It’s not the business.',
    trigger: 'The question that starts step two: “what happens when someone fills in the contact form?”'
  },
  {
    n: '02', name: 'Lead follow-up system', price: '$500–800', timeline: 'Built once',
    desc: 'A 3–5 email sequence that triggers the moment someone enquires, built in MailerLite or ConvertKit. Most small businesses get a lead and do nothing with it — this fixes that permanently.',
    note: 'Built once. Runs forever. No extra work on your end.',
    trigger: 'Once it’s live and working, managing it makes obvious sense.'
  },
  {
    n: '03', name: 'Monthly retainer', price: '$150–200/mo', timeline: 'Ongoing',
    desc: 'Once the system is live, I manage and optimise it: open-rate reports, copy tweaks, keeping the automation healthy.',
    note: 'Low cost, high peace of mind. No retainer for activity — only for results.',
    trigger: 'Once there’s trust and a clear goal, a campaign sprint follows naturally.'
  },
  {
    n: '04', name: 'Campaign sprint', price: '$1,500–2,500', timeline: '6–8 weeks',
    desc: 'A focused push with one clear objective: lead gen, re-engagement, or a seasonal promo. I build the structure, write the copy with AI, and run it.',
    note: 'Defined start, defined end, clear outcome. This is where the real revenue shift happens.',
    trigger: null
  }
];

function renderLadder() {
  var el = document.getElementById('ladder-list');
  if (!el) return;
  el.innerHTML = SERVICE_STEPS.map(function (step, i) {
    var card = '' +
      '<div class="liquid-glass ladder-step stagger-item' + (i === 0 ? ' open' : '') + '">' +
        '<button type="button" class="ladder-head" aria-expanded="' + (i === 0 ? 'true' : 'false') + '">' +
          '<span class="ladder-num">' + step.n + '</span>' +
          '<span class="ladder-head-main"><span class="ladder-name">' + step.name + '</span><span class="ladder-timeline">' + step.timeline + '</span></span>' +
          '<span class="ladder-price">' + step.price + '</span>' +
          '<svg class="ladder-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>' +
        '</button>' +
        '<div class="ladder-body-wrap"><div class="ladder-body"><div>' +
          '<p class="ladder-desc">' + step.desc + '</p>' +
          '<p class="ladder-note">' + step.note + '</p>' +
        '</div></div></div>' +
      '</div>';
    var connector = step.trigger
      ? '<div class="ladder-connector stagger-item"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>' + step.trigger + '</div>'
      : '';
    return card + connector;
  }).join('');

  var steps = el.querySelectorAll('.ladder-step');
  steps.forEach(function (stepEl) {
    var btn = stepEl.querySelector('.ladder-head');
    btn.addEventListener('click', function () {
      var open = stepEl.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      stepEl.dataset.userToggled = '1';
    });
  });

  /* Reveal steps open as they scroll into view, unless the visitor closed them */
  if ('IntersectionObserver' in window) {
    var ladderIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var stepEl = entry.target;
        if (!stepEl.dataset.userToggled) {
          stepEl.classList.add('open');
          stepEl.querySelector('.ladder-head').setAttribute('aria-expanded', 'true');
        }
        ladderIo.unobserve(stepEl);
      });
    }, { threshold: 0.55, rootMargin: '0px 0px -12% 0px' });
    steps.forEach(function (s) { ladderIo.observe(s); });
  } else {
    steps.forEach(function (s) { s.classList.add('open'); });
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
    return '' +
      '<div class="liquid-glass example-card stagger-item">' +
        '<div class="example-shot">' + shot + '</div>' +
        '<a href="' + ex.url + '" target="_blank" rel="noopener" class="example-meta">' +
          '<span class="example-meta-top"><span class="example-name">' + ex.name + '</span>' +
            '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex:none;color:rgba(239,238,234,0.55);"><path d="M7 17 17 7"></path><path d="M7 7h10v10"></path></svg></span>' +
          '<span class="example-host">' + hostOf(ex.url) + '</span>' +
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

  prevBtn.addEventListener('click', function () { track.scrollBy({ left: -cardStep(), behavior: 'smooth' }); });
  nextBtn.addEventListener('click', function () { track.scrollBy({ left: cardStep(), behavior: 'smooth' }); });
  dots.forEach(function (dot) {
    dot.addEventListener('click', function () { track.scrollTo({ left: cardStep() * parseInt(dot.dataset.idx, 10), behavior: 'smooth' }); });
  });

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
          '<div class="cs-turnaround">' + cs.turnaround + '</div>' +
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
  { label: 'Initial contact', time: 'Hour 0', assets: [], pill: 'New enquiry', stage: 'chat' },
  { label: 'Files & goals in', time: 'Hour 2', assets: ['Logo', 'Brand colours', 'Photos & goals'], pill: 'Assets received', stage: 'mood' },
  { label: 'Draft built', time: 'Hour 24', assets: ['Logo', 'Brand colours', 'Photos & goals'], pill: 'Draft ready', stage: 'content' },
  { label: 'Your review', time: 'Hour 24–40', assets: ['Logo', 'Brand colours', 'Photos & goals'], pill: 'In review', stage: 'content', review: true },
  { label: 'Live', time: 'By hour 48', assets: ['Logo', 'Brand colours', 'Photos & goals'], pill: 'Live', stage: 'content', badge: true, live: true }
];

function renderBuildDemo() {
  var root = document.getElementById('build-demo');
  if (!root) return;

  root.innerHTML = '' +
    '<div class="build-titlebar">' +
      '<div class="build-dots"><span style="background:#ff5f57;"></span><span style="background:#febc2e;"></span><span style="background:#28c840;"></span></div>' +
      '<span class="build-titlebar-label">updietitian.com, the 48-hour build</span>' +
    '</div>' +
    '<div class="build-body">' +
      '<div class="build-sidebar">' +
        '<div class="build-sidebar-label">The build</div>' +
        '<div class="build-steps" id="build-steps"></div>' +
        '<div class="build-sidebar-label" style="margin-top:20px;">Your assets</div>' +
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
            '<div class="chat-bubble chat-bubble--client" style="--d:0.15s;">Hi — I’m a dietitian in Perth. I need a website that takes bookings.</div>' +
            '<div class="chat-bubble chat-bubble--studio" style="--d:0.9s;">Can do. Send your logo, photos and prices — whatever you’ve got.</div>' +
            '<div class="chat-bubble chat-bubble--studio" style="--d:1.6s;">The 48 hours starts when you hit send.</div>' +
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
                '<div class="build-preview-eyebrow bp-el" style="--i:0;">Dietitian, private practice — Perth</div>' +
                '<div class="build-preview-h bp-el" style="--i:1;">Feel good about <em>food</em> again.</div>' +
                '<p class="bp-para bp-el" style="--i:2;">Evidence-based nutrition support, tailored to you. Initial consults available this week, in the clinic or over telehealth.</p>' +
                '<div class="bp-cta-row bp-el" style="--i:3;"><span class="bp-btn" id="bp-btn">Book a consult</span><span class="bp-link">View services</span></div>' +
                '<div class="bp-chips bp-el" style="--i:4;"><span>Gut health</span><span>Sports nutrition</span><span>Meal planning</span><span>Telehealth</span></div>' +
                '<div class="build-annotation" id="build-annotation">' +
                  '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>' +
                  'Make the button pop' +
                '</div>' +
              '</div>' +
              '<div class="bp-photo bp-el" style="--i:5;"><img src="assets/upd.jpg" alt="UP Dietitian website preview"><span class="bp-photo-tag">Initial consult — 60 min</span></div>' +
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
            '<div style="font-family:var(--font-body);font-size:11px;color:rgba(239,238,234,0.5);">48 hours, brief to live</div>' +
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

renderBuildDemo();
renderMarquee();
renderExamples();
initExamplesCarousel();
renderCaseStudies();
renderLadder();

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
      note.textContent = 'Something went wrong — email hello@trigrams.studio directly.';
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
      '<p class="news-pop-sub">What’s working in marketing for WA small businesses right now — systems, numbers, no fluff.</p>' +
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
      note.textContent = 'Something went wrong — try the form in the Blog section.';
      btn.disabled = false;
      btn.textContent = 'Subscribe';
    });
  });
})();
