// shared behaviour for case-study pages
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

// scroll progress bar
const bar = $('#progress');
addEventListener('scroll', () => {
  const h = document.documentElement;
  bar.style.transform = `scaleX(${h.scrollTop / (h.scrollHeight - h.clientHeight || 1)})`;
}, { passive: true });

// reveal on scroll
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); e.target.dispatchEvent(new Event('reveal')); io.unobserve(e.target); }
}), { threshold: .2 });
$$('.reveal').forEach(el => io.observe(el));

// sticky index highlights the section in view
const links = $$('.toc a');
const spy = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id));
}), { rootMargin: '-40% 0px -55% 0px' });
$$('section[id]').forEach(s => spy.observe(s));

// numbers count up when they appear
$$('[data-count]').forEach(el => {
  const target = parseFloat(el.dataset.count), dec = (el.dataset.count.split('.')[1] || '').length;
  const pre = el.dataset.pre || '', suf = el.dataset.suf || '';
  el.textContent = pre + (0).toFixed(dec) + suf;
  const run = () => {
    const t0 = performance.now(), dur = 1200;
    (function f(now) {
      const p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      el.textContent = pre + (target * e).toLocaleString('en-US',{minimumFractionDigits:dec,maximumFractionDigits:dec}) + suf;
      if (p < 1) requestAnimationFrame(f);
    })(t0);
  };
  const o = new IntersectionObserver(es => { if (es[0].isIntersecting) { run(); o.disconnect(); } }, { threshold: .5 });
  o.observe(el);
});
