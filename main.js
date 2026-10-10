(() => {
  'use strict';
  document.getElementById('year').textContent = new Date().getFullYear();

  // Highlight the nav link for the section in view.
  const links = [...document.querySelectorAll('.site-header nav a')];
  const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        links.forEach(a => a.removeAttribute('aria-current'));
        const active = links.find(a => a.getAttribute('href') === '#' + e.target.id);
        if (active) active.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => io.observe(s));
  }

  // Fill the roadmap line as the reader scrolls through it.
  const road = document.querySelector('.roadmap');
  if (road) {
    let ticking = false;
    const update = () => {
      const r = road.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (innerHeight * 0.6 - r.top) / r.height));
      road.style.setProperty('--progress', (p * 100).toFixed(1) + '%');
      ticking = false;
    };
    addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    addEventListener('resize', update);
    update();
  }
})();
