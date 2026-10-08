/* TRIGRAMS Studio, October 2026 rebuild. One offer, one price.
   Everything here is progressive: the pages read fine with no JavaScript. */
(function () {
'use strict';

/* ---------- Analytics (Vercel Web Analytics custom events) ---------- */
window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
function track(name, data) {
  try { window.va('event', { name: name, data: data || {} }); } catch (e) {}
}
var PAGE = location.pathname || '/';

/* ---------- Price ----------
   The campaign price lives here and nowhere else. The HTML ships the default
   so crawlers and no-JS visitors see it too.

   Split test: point each ad set at a different URL, e.g.
     https://www.trigrams.studio/?p=2500
     https://www.trigrams.studio/?p=3000
     https://www.trigrams.studio/?p=4000
   The visitor keeps that price on every page and on return visits, and the
   forms send it as "price_seen", so every enquiry shows which price it saw. */
var PRICES = [2500, 3000, 4000];
var DEFAULT_PRICE = 4000;

function readPrice() {
  var fromUrl = parseInt(new URLSearchParams(location.search).get('p'), 10);
  if (PRICES.indexOf(fromUrl) !== -1) {
    try { localStorage.setItem('ts-price', String(fromUrl)); } catch (e) {}
    return fromUrl;
  }
  try {
    var saved = parseInt(localStorage.getItem('ts-price'), 10);
    if (PRICES.indexOf(saved) !== -1) return saved;
  } catch (e) {}
  return DEFAULT_PRICE;
}
var PRICE = readPrice();
var PRICE_TEXT = '$' + PRICE.toLocaleString('en-AU');
document.querySelectorAll('[data-price]').forEach(function (el) { el.textContent = PRICE_TEXT; });
document.querySelectorAll('[data-price-field]').forEach(function (el) { el.value = PRICE_TEXT; });
if (PRICE !== DEFAULT_PRICE) track('Price Variant', { price: PRICE_TEXT, page: PAGE });

/* ---------- Menu ---------- */
var menu = document.getElementById('menu');
var opener = document.querySelector('[data-menu-open]');
function setMenu(open) {
  if (!menu) return;
  menu.hidden = !open;
  document.documentElement.style.overflow = open ? 'hidden' : '';
  if (opener) opener.setAttribute('aria-expanded', open ? 'true' : 'false');
  if (open) { var c = menu.querySelector('[data-menu-close]'); if (c) c.focus(); }
  else if (opener) opener.focus({ preventScroll: true });
}
if (menu && opener) {
  opener.addEventListener('click', function () { setMenu(true); });
  menu.querySelector('[data-menu-close]').addEventListener('click', function () { setMenu(false); });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !menu.hidden) setMenu(false); });
}

/* ---------- How it works: hover or tap a step, the photo and line change ---------- */
var stepsEl = document.querySelector('[data-steps]');
if (stepsEl) {
  var steps = stepsEl.querySelectorAll('[data-step]');
  var photos = document.querySelectorAll('[data-step-photo]');
  var line = document.querySelector('[data-step-line]');
  var count = document.querySelector('[data-step-count]');
  stepsEl.classList.add('is-live');
  var show = function (i) {
    steps.forEach(function (s, n) { s.classList.toggle('is-on', n === i); });
    photos.forEach(function (p, n) { p.classList.toggle('is-on', n === i); });
    if (line) line.textContent = steps[i].getAttribute('data-line');
    if (count) count.textContent = '0' + (i + 1) + ' / 0' + steps.length;
  };
  steps.forEach(function (s, i) {
    s.addEventListener('mouseenter', function () { show(i); });
    s.addEventListener('focus', function () { show(i); });
    s.addEventListener('click', function () { show(i); });
  });
}

var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var finePointer = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

/* ---------- Motif: once the header scrolls away, the nav folds into the logo ----------
   A small round mark with a red ring that fills as you scroll. Hover (or tap) it and the
   links unfold out of it. Built from the header's own links, so every page gets it. */
var siteNav = document.querySelector('.site-nav');
if (siteNav && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('has-motif');

  var motif = document.createElement('nav');
  motif.className = 'motif';
  motif.setAttribute('aria-label', 'Sections');
  var tray = document.createElement('div');
  tray.className = 'motif-tray';
  siteNav.querySelectorAll('.nav-mid a, .nav-end a').forEach(function (a) {
    var link = a.cloneNode(true);
    link.className = a.classList.contains('btn') ? 'motif-cta' : 'motif-link';
    link.addEventListener('click', function () { setMotif(false); });
    tray.appendChild(link);
  });
  var mark = document.createElement('button');
  mark.type = 'button';
  mark.className = 'motif-mark';
  mark.tabIndex = -1;
  mark.setAttribute('aria-expanded', 'false');
  mark.setAttribute('aria-label', 'Show sections');
  mark.innerHTML = '<svg class="motif-ring" viewBox="0 0 56 56" aria-hidden="true"><circle cx="28" cy="28" r="26" pathLength="1"/></svg>' +
    '<video autoplay loop muted playsinline disablepictureinpicture disableremoteplayback preload="metadata" src="/assets/logo-rotate.mp4" aria-hidden="true"></video>';
  motif.appendChild(tray);
  motif.appendChild(mark);
  document.body.appendChild(motif);

  var motifOpen = false;
  var setMotif = function (open) {
    motifOpen = open;
    motif.classList.toggle('is-open', open);
    mark.setAttribute('aria-expanded', open ? 'true' : 'false');
    mark.setAttribute('aria-label', open ? 'Hide sections' : 'Show sections');
  };
  mark.addEventListener('click', function () { setMotif(!motifOpen); });
  motif.addEventListener('mouseleave', function () { setMotif(false); });
  document.addEventListener('pointerdown', function (e) { if (motifOpen && !motif.contains(e.target)) setMotif(false); });
  document.addEventListener('keydown', function (e) { if (motifOpen && e.key === 'Escape') setMotif(false); });

  /* show the mark only once the real header is off screen */
  new IntersectionObserver(function (entries) {
    var gone = !entries[0].isIntersecting;
    motif.classList.toggle('is-visible', gone);
    mark.tabIndex = gone ? 0 : -1;
    if (!gone) setMotif(false);
  }).observe(siteNav);

  /* the ring runs down like a reel as you scroll */
  var onMotifScroll = function () {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    motif.style.setProperty('--progress', max > 0 ? Math.min(1, window.scrollY / max) : 0);
  };
  window.addEventListener('scroll', onMotifScroll, { passive: true });
  window.addEventListener('resize', onMotifScroll);
  onMotifScroll();

  /* dot beside the link for the page or section you're on */
  var targets = [];
  tray.querySelectorAll('a').forEach(function (link) {
    var url = new URL(link.href, location.href);
    if (url.origin !== location.origin || url.pathname !== location.pathname) return;
    var section = url.hash && document.getElementById(url.hash.slice(1));
    if (section) targets.push({ link: link, section: section });
    else if (!url.hash) link.classList.add('is-active');
  });
  if (targets.length) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        targets.forEach(function (t) { if (t.section === e.target) t.link.classList.toggle('is-active', e.isIntersecting); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    targets.forEach(function (t) { sectionObserver.observe(t.section); });
  }
}

/* ---------- 3D tilt toward the pointer (hero phones, Cutting Room preview) ---------- */
if (finePointer && !reduceMotion) {
  document.querySelectorAll('[data-tilt]').forEach(function (el) {
    var raf = 0;
    el.addEventListener('pointermove', function (e) {
      var r = el.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;
      var y = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(function () {
        el.style.setProperty('--ry', (x * 14).toFixed(2) + 'deg');
        el.style.setProperty('--rx', (y * -10).toFixed(2) + 'deg');
      });
    });
    el.addEventListener('pointerleave', function () {
      el.style.setProperty('--ry', '0deg');
      el.style.setProperty('--rx', '0deg');
    });
  });
}

/* ---------- Count up the comparison numbers when they come into view ---------- */
var counters = document.querySelectorAll('[data-count]');
if (counters.length && 'IntersectionObserver' in window && !reduceMotion) {
  var co = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      co.unobserve(en.target);
      var el = en.target, end = parseInt(el.getAttribute('data-count'), 10), n = 0;
      var t = setInterval(function () { el.textContent = ++n; if (n >= end) clearInterval(t); }, 90);
      el.textContent = '0';
    });
  }, { threshold: 0.8 });
  counters.forEach(function (c) { co.observe(c); });
}

/* ---------- What's included: a timeline that plays itself until you touch it ---------- */
var tl = document.querySelector('[data-timeline]');
if (tl) {
  var nodes = tl.querySelectorAll('[data-tl]');
  var panels = tl.querySelectorAll('[data-tl-panel]');
  var fill = tl.querySelector('[data-tl-fill]');
  var cur = 0, timer = 0, inView = false, held = false;
  var go = function (i, focus) {
    cur = i;
    nodes.forEach(function (n, k) {
      n.classList.toggle('is-on', k === i);
      n.classList.toggle('is-done', k < i);
      n.setAttribute('aria-selected', k === i ? 'true' : 'false');
      n.tabIndex = k === i ? 0 : -1;
    });
    panels.forEach(function (p, k) {
      p.hidden = k !== i;
      /* The edit scene's video only loads and plays while its part is showing. */
      var v = p.querySelector('video[data-src]');
      if (!v) return;
      if (k === i) { if (!v.src) v.src = v.getAttribute('data-src'); var pr = v.play(); if (pr && pr.catch) pr.catch(function () {}); }
      else v.pause();
    });
    if (fill) fill.parentNode.style.setProperty('--fill', (i / (nodes.length - 1) * 100) + '%');
    if (focus) nodes[i].focus();
  };
  var tick = function () {
    clearTimeout(timer);
    if (reduceMotion || held || !inView) return;
    timer = setTimeout(function () { go((cur + 1) % nodes.length); tick(); }, 5200);
  };
  nodes.forEach(function (n, i) {
    n.addEventListener('click', function () { held = true; clearTimeout(timer); go(i); });
    n.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { e.preventDefault(); held = true; clearTimeout(timer); go((cur + d + nodes.length) % nodes.length, true); }
    });
  });
  tl.querySelectorAll('[data-tl-prev], [data-tl-next]').forEach(function (b) {
    b.addEventListener('click', function () {
      held = true; clearTimeout(timer);
      go((cur + (b.hasAttribute('data-tl-next') ? 1 : -1) + nodes.length) % nodes.length);
    });
  });
  tl.addEventListener('pointerenter', function () { clearTimeout(timer); });
  tl.addEventListener('pointerleave', tick);
  if ('IntersectionObserver' in window) {
    /* .tl is display: contents on desktop, so watch the rail, which has a box. */
    new IntersectionObserver(function (en) { inView = en[0].isIntersecting; tick(); }, { threshold: 0.4 }).observe(tl.querySelector('.tl-rail') || tl);
  }
  go(0);
}

/* ---------- Ad budget slider ---------- */
var meter = document.querySelector('[data-meter]');
if (meter) {
  var input = meter.querySelector('[data-meter-input]');
  var TIERS = [
    { max: 30, tier: 'low', title: 'Too low to test properly', note: 'Under $35 a day, Meta can’t gather enough data to find who responds. Wait until you can spend a bit more.' },
    { max: 45, tier: 'min', title: 'The minimum', note: 'Enough for Meta to find your first leads on 1 audience. Most of the first 2 weeks is testing.' },
    { max: 95, tier: 'rec', title: 'Recommended', note: 'Room to test 2 to 3 versions of the ad and put the money behind the one that works.' },
    { max: 999, tier: 'fast', title: 'Faster answers', note: 'More areas, offers or audiences tested at the same time.' }
  ];
  var money = function (n) { return '$' + n.toLocaleString('en-AU'); };
  var paint = function () {
    var d = parseInt(input.value, 10);
    var min = parseInt(input.min, 10), max = parseInt(input.max, 10);
    var t = TIERS.filter(function (x) { return d <= x.max; })[0];
    meter.querySelector('[data-meter-day]').textContent = money(d) + (d >= max ? '+' : '');
    meter.querySelector('[data-meter-month]').textContent = 'about ' + money(Math.round(d * 30.4 / 50) * 50);
    var v = meter.querySelector('[data-meter-verdict]');
    v.setAttribute('data-tier', t.tier);
    meter.querySelector('[data-meter-title]').textContent = t.title;
    meter.querySelector('[data-meter-note]').textContent = t.note;
    input.style.setProperty('--pct', ((d - min) / (max - min) * 100) + '%');
  };
  input.addEventListener('input', paint);
  paint();
}

/* ---------- The Cutting Room preview: tabs scroll the screenshot ---------- */
var resTabs = document.querySelectorAll('[data-res]');
var shot = document.querySelector('[data-res-shot]');
if (resTabs.length && shot) {
  /* Image units: the screenshot is 960 wide, the window shows a 16:10 slice. */
  var IMG_H = parseInt(shot.getAttribute('height'), 10) || 2820, VIEW_H = 600;
  var showAt = function (y) {
    var clamped = Math.min(Math.max(y, 0), IMG_H - VIEW_H);
    shot.style.setProperty('--shot-y', (-clamped / IMG_H * 100) + '%');
  };
  var resAt = 0;
  resTabs.forEach(function (b) {
    var pick = function () {
      resAt = parseInt(b.getAttribute('data-res'), 10);
      resTabs.forEach(function (o) { o.classList.toggle('is-on', o === b); o.setAttribute('aria-pressed', o === b ? 'true' : 'false'); });
      showAt(resAt);
    };
    b.addEventListener('click', pick);
    if (finePointer) b.addEventListener('mouseenter', pick);
  });
  /* Hovering the window itself takes a slow scroll through the whole page. */
  var browser = shot.closest('.browser');
  if (browser && finePointer && !reduceMotion) {
    browser.addEventListener('mouseenter', function () { shot.style.transitionDuration = '7s'; showAt(IMG_H); });
    browser.addEventListener('mouseleave', function () { shot.style.transitionDuration = ''; showAt(resAt); });
  }
}

/* ---------- FAQ: filter by topic, one answer open at a time ---------- */
var faqList = document.querySelector('[data-faq]');
if (faqList) {
  var items = faqList.querySelectorAll('.faq-item');
  items.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (d.open) items.forEach(function (o) { if (o !== d) o.open = false; });
    });
  });
  var filter = document.querySelector('[data-faq-filter]');
  if (filter) {
    filter.hidden = false;
    filter.querySelectorAll('button').forEach(function (b) {
      b.addEventListener('click', function () {
        var cat = b.getAttribute('data-cat');
        filter.querySelectorAll('button').forEach(function (o) { o.classList.toggle('is-on', o === b); });
        var first = null;
        items.forEach(function (d) {
          var show = cat === 'all' || d.getAttribute('data-cat') === cat;
          d.hidden = !show;
          if (show && !first) first = d;
          if (!show) d.open = false;
        });
        if (first) first.open = true;
      });
    });
  }
}

/* ---------- Client carousel: drifts on its own, drag or use the arrows ---------- */
var rail = document.querySelector('[data-rail]');
if (rail) {
  var railTrack = rail.querySelector('.logo-track');
  var half = function () { return railTrack.scrollWidth / 2; };
  var paused = false, dragging = false, moved = 0, startX = 0, startLeft = 0, last = 0, pos = 0;
  var wrap = function () {
    if (rail.scrollLeft >= half()) rail.scrollLeft -= half();
    else if (rail.scrollLeft <= 0) rail.scrollLeft += half();
  };
  rail.scrollLeft = 1;
  pos = rail.scrollLeft;
  var drift = function (t) {
    var dt = last ? Math.min(t - last, 50) : 16;
    last = t;
    /* Keep a float position: scrollLeft rounds to whole pixels, so adding
       half a pixel to it each frame would never move. */
    if (Math.abs(rail.scrollLeft - pos) > 2) pos = rail.scrollLeft; /* user scrolled */
    if (!paused && !dragging && !reduceMotion) {
      pos += dt * 0.03;
      if (pos >= half()) pos -= half();
      rail.scrollLeft = pos;
    }
    requestAnimationFrame(drift);
  };
  requestAnimationFrame(drift);
  ['mouseenter', 'focusin', 'touchstart'].forEach(function (ev) { rail.addEventListener(ev, function () { paused = true; }, { passive: true }); });
  ['mouseleave', 'focusout'].forEach(function (ev) { rail.addEventListener(ev, function () { paused = false; }); });
  rail.addEventListener('touchend', function () { setTimeout(function () { paused = false; }, 2500); }, { passive: true });
  rail.addEventListener('scroll', wrap, { passive: true });

  /* Mouse drag. A drag of more than a few pixels doesn't count as a click. */
  rail.addEventListener('pointerdown', function (e) {
    if (e.pointerType !== 'mouse') return;
    dragging = true; moved = 0; startX = e.clientX; startLeft = rail.scrollLeft;
  });
  window.addEventListener('pointermove', function (e) {
    if (!dragging) return;
    moved = Math.abs(e.clientX - startX);
    if (moved > 4) rail.classList.add('is-dragging');
    rail.scrollLeft = startLeft - (e.clientX - startX);
  });
  window.addEventListener('pointerup', function () {
    if (!dragging) return;
    dragging = false;
    setTimeout(function () { rail.classList.remove('is-dragging'); }, 0);
  });
  rail.addEventListener('click', function (e) { if (moved > 4) { e.preventDefault(); moved = 0; } }, true);

  var hold = 0;
  var step = function (dir) {
    paused = true; clearTimeout(hold);
    hold = setTimeout(function () { paused = false; }, 1400);
    var tile = railTrack.querySelector('.logo-tile');
    var w = tile ? tile.getBoundingClientRect().width + 14 : 240;
    rail.scrollBy({ left: dir * w * 2, behavior: 'smooth' });
  };
  var pb = document.querySelector('[data-rail-prev]'), nb = document.querySelector('[data-rail-next]');
  if (pb) pb.addEventListener('click', function () { step(-1); });
  if (nb) nb.addEventListener('click', function () { step(1); });
  rail.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
  });
  rail.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a.logo-tile');
    if (a) track('Client Click', { client: (a.querySelector('.logo-info b') || {}).textContent || '', from: PAGE });
  });
}

/* ---------- Ad cards: silent preview in view, full video with sound on tap ---------- */
var cards = document.querySelectorAll('.card[data-video]');
if (cards.length) {
  var reduce = reduceMotion;
  var preview = function (v, on) {
    if (on) {
      if (!v.src) v.src = v.getAttribute('data-preview');
      var p = v.play(); if (p && p.catch) p.catch(function () {});
    } else v.pause();
  };
  if (!reduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { preview(en.target, en.isIntersecting); });
    }, { threshold: 0.6 });
    cards.forEach(function (c) { io.observe(c.querySelector('video')); });
  }

  var viewer = document.getElementById('viewer');
  if (viewer && viewer.showModal) {
    var full = viewer.querySelector('video');
    var close = function () { full.pause(); full.removeAttribute('src'); full.load(); if (viewer.open) viewer.close(); };
    cards.forEach(function (c) {
      c.addEventListener('click', function () {
        full.src = c.getAttribute('data-video');
        viewer.showModal();
        var p = full.play(); if (p && p.catch) p.catch(function () {});
        track('Video Open', { video: c.getAttribute('data-video').split('/').pop(), page: PAGE });
      });
    });
    viewer.querySelector('[data-viewer-close]').addEventListener('click', close);
    viewer.addEventListener('click', function (e) { if (e.target === viewer) close(); });
    viewer.addEventListener('close', function () { full.pause(); });
  } else {
    /* No <dialog>: open the file itself. */
    cards.forEach(function (c) { c.addEventListener('click', function () { location.href = c.getAttribute('data-video'); }); });
  }
}

/* ---------- Qualifying form (Book a call + Enquire) ----------
   Same questions on both pages. Every submission reaches the inbox, tagged
   "fit: yes" or "fit: no". A "no" is anyone under $1,000 a month in ad spend
   or anyone who said losing the first month would hurt; they get pointed to
   the free resources instead of the calendar. */
var CALENDLY = 'https://calendly.com/alex-trigrams/30min';
var ENDPOINT = 'https://formspree.io/f/meewzagj';

document.querySelectorAll('form[data-qualify]').forEach(function (form) {
  var kind = form.getAttribute('data-qualify');
  var err = form.querySelector('[data-form-error]');
  var btn = form.querySelector('button[type="submit"]');
  var btnText = btn.textContent;

  function fail(msg, el) {
    err.textContent = msg;
    err.hidden = false;
    if (el) el.focus();
  }

  function missing(scope) {
    var first = null;
    (scope || form).querySelectorAll('input[required]').forEach(function (el) {
      if (first) return;
      if (el.type === 'radio') {
        if (!form.querySelector('input[name="' + el.name + '"]:checked')) first = el;
      } else if (el.type === 'checkbox') {
        if (!el.checked) first = el;
      } else if (!el.value.trim() || (el.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim()))) {
        first = el;
      }
    });
    return first;
  }

  /* Steps: one group of questions at a time, with a progress bar. */
  var stepEls = form.querySelectorAll('[data-form-step]');
  var at = 0, showStep = null;
  if (stepEls.length > 1) {
    form.classList.add('js-steps');
    var prog = document.createElement('div');
    prog.className = 'form-progress';
    prog.innerHTML = '<div class="form-progress-row"><b data-step-name></b><span data-step-of></span></div><div class="form-progress-bar"><i></i></div>';
    stepEls[0].parentNode.insertBefore(prog, stepEls[0]);
    var navEl = document.createElement('div');
    navEl.className = 'form-nav';
    navEl.innerHTML = '<button type="button" class="btn btn--line" data-step-back>Back</button><button type="button" class="btn" data-step-next>Next</button>';
    stepEls[stepEls.length - 1].parentNode.insertBefore(navEl, stepEls[stepEls.length - 1].nextSibling);
    stepEls[stepEls.length - 1].parentNode.insertBefore(err, navEl);
    var back = navEl.querySelector('[data-step-back]'), next = navEl.querySelector('[data-step-next]');
    showStep = function (i, focus) {
      at = i;
      stepEls.forEach(function (st, k) { st.hidden = k !== i; });
      prog.querySelector('[data-step-name]').textContent = stepEls[i].getAttribute('data-step-title');
      prog.querySelector('[data-step-of]').textContent = 'Step ' + (i + 1) + ' of ' + stepEls.length;
      prog.querySelector('i').style.setProperty('--p', ((i + 1) / stepEls.length * 100) + '%');
      back.hidden = i === 0;
      next.hidden = i === stepEls.length - 1;
      if (focus) { var f = stepEls[i].querySelector('input, textarea'); if (f) f.focus({ preventScroll: true }); }
      track('Form Step', { form: kind, step: i + 1 });
    };
    next.addEventListener('click', function () {
      err.hidden = true;
      var gap = missing(stepEls[at]);
      if (gap) { fail(gap.type === 'radio' ? 'Please pick an answer for each question.' : gap.type === 'email' ? 'Please add a valid email address.' : 'Please fill in the fields marked with a star.', gap); return; }
      showStep(at + 1, true);
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    back.addEventListener('click', function () { err.hidden = true; showStep(at - 1, true); });
    showStep(0);
  }

  function stage(result) {
    document.querySelectorAll('[data-stage="questions"]').forEach(function (el) { el.hidden = true; });
    var panel = document.querySelector('[data-result="' + result + '"]');
    if (panel) panel.hidden = false;
    var title = document.querySelector('[data-stage-title]');
    var copy = document.querySelector('[data-stage-copy]');
    if (result === 'fit' && kind === 'call') {
      if (title) title.textContent = 'Pick a time';
      if (copy) copy.textContent = 'Thanks. Choose a time that suits and you’ll get a calendar invite straight away.';
      document.querySelectorAll('[data-progress]').forEach(function (p) { p.classList.toggle('is-on', p.getAttribute('data-progress') === '2'); });
    } else if (result === 'unfit') {
      if (title) title.hidden = true;
      if (copy) copy.hidden = true;
      document.querySelectorAll('.progress').forEach(function (p) { p.hidden = true; });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function openCalendar() {
    var frame = document.querySelector('[data-calendar]');
    if (!frame) return;
    var q = new URLSearchParams({
      embed_type: 'Inline', hide_gdpr_banner: '1',
      background_color: 'ffffff', text_color: '15171a', primary_color: 'd92b1b',
      name: form.elements.name.value.trim(), email: form.elements.email.value.trim()
    });
    frame.src = CALENDLY + '?' + q.toString();
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    err.hidden = true;
    if (showStep && at < stepEls.length - 1) {
      /* Enter on an early step means "next". */
      form.querySelector('[data-step-next]').click();
      return;
    }
    var gap = missing();
    if (gap && showStep) {
      for (var k = 0; k < stepEls.length; k++) { if (stepEls[k].contains(gap)) { showStep(k); break; } }
    }
    if (gap) {
      var msg = gap.type === 'checkbox' ? 'Please tick the box to confirm you’ve read how it works and the price.'
        : gap.type === 'radio' ? 'Please answer every question. They help me make the call worth your time.'
        : gap.type === 'email' ? 'Please add a valid email address.'
        : 'Please fill in the fields marked with a star.';
      fail(msg, gap);
      return;
    }

    var unfit = !!form.querySelector('input[data-unfit]:checked');
    form.querySelector('[data-fit-field]').value = unfit ? 'no' : 'yes';
    var subject = form.querySelector('input[name="_subject"]');
    subject.value = (unfit ? '[Not a fit yet] ' : '') + (kind === 'call' ? 'Call request' : 'Enquiry') + ' · ' + PRICE_TEXT + ' · trigrams.studio';

    btn.disabled = true;
    btn.textContent = 'Sending…';

    fetch(ENDPOINT, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
      .then(function (res) {
        if (!res.ok) throw new Error('Formspree ' + res.status);
        track(kind === 'call' ? 'Call Qualifier' : 'Enquiry', { fit: unfit ? 'no' : 'yes', price: PRICE_TEXT });
        if (!unfit && kind === 'call') openCalendar();
        stage(unfit ? 'unfit' : 'fit');
      })
      .catch(function () {
        fail('Something went wrong sending that. Please email hello@trigrams.studio and I’ll reply within 24 hours.');
        btn.disabled = false;
        btn.textContent = btnText;
      });
  });
});

/* ---------- Click tracking ---------- */
document.addEventListener('click', function (e) {
  var a = e.target.closest && e.target.closest('a');
  if (!a) return;
  var href = a.getAttribute('href') || '';
  var label = (a.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 60);
  if (a.hasAttribute('data-portal')) {
    track('Portal Click', { portal: a.getAttribute('data-portal') === 'client' ? 'Client Login' : 'Free Resource', from: PAGE });
  } else if (/^\/book-a-call/.test(href)) {
    track('CTA Click', { kind: 'Book a call', label: label, from: PAGE });
  } else if (/^\/enquiry/.test(href)) {
    track('CTA Click', { kind: 'Enquiry', label: label, from: PAGE });
  }
});

/* ---------- Scroll depth: 25 / 50 / 75 / 100%, once each ---------- */
var marks = [25, 50, 75, 100], hit = {};
function onScroll() {
  var doc = document.documentElement;
  var scrollable = doc.scrollHeight - window.innerHeight;
  if (scrollable <= 0) return;
  var pct = Math.round((window.scrollY / scrollable) * 100);
  marks.forEach(function (m) {
    if (pct >= m && !hit[m]) { hit[m] = true; track('Scroll Depth', { depth: m + '%', page: PAGE }); }
  });
  if (Object.keys(hit).length === marks.length) window.removeEventListener('scroll', onScroll);
}
window.addEventListener('scroll', onScroll, { passive: true });

})();
