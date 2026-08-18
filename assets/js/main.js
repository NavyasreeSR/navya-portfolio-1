/* ============================================================
   NAVYA SREE SANTHAPETA — PORTFOLIO JAVASCRIPT
   ============================================================ */

/* ── HEADER SCROLL ── */
(function () {
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
})();

/* ── MOBILE NAV ── */
(function () {
  const btn = document.querySelector('.hamburger');
  const nav = document.getElementById('mobile-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
})();

/* ── STACK CARD DECK ── */
(function () {
  const cards = document.querySelectorAll('.deck-card');
  const btns  = document.querySelectorAll('.deck-btn');
  if (!cards.length) return;

  let current = 0;
  let timer   = null;

  function showCard(idx) {
    cards.forEach((c, i) => c.classList.toggle('active', i === idx));
    btns.forEach((b, i) => b.classList.toggle('active', i === idx));
    current = idx;
  }

  function next() {
    showCard((current + 1) % cards.length);
  }

  function startAuto() {
    timer = setInterval(next, 2800);
  }

  function stopAuto() {
    clearInterval(timer);
  }

  // Manual nav
  btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      stopAuto();
      showCard(i);
      startAuto();
    });
  });

  // Pause on hover
  const deck = document.getElementById('stack-deck');
  if (deck) {
    deck.addEventListener('mouseenter', stopAuto);
    deck.addEventListener('mouseleave', startAuto);
  }

  showCard(0);
  startAuto();
})();

/* ── SCROLL REVEAL ── */
(function () {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();

/* ── SMOOTH SCROLL ── */
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const t = document.querySelector(this.getAttribute('href'));
      if (!t) return;
      e.preventDefault();
      t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
