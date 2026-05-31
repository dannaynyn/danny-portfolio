const Cursor = (() => {
  const Dot  = document.getElementById('Cursor');
  const Ring = document.getElementById('CursorRing');
  let Mx = 0, My = 0, Rx = 0, Ry = 0;

  document.addEventListener('mousemove', E => { Mx = E.clientX; My = E.clientY; });

  const Tick = () => {
    Dot.style.left  = Mx + 'px';
    Dot.style.top   = My + 'px';
    Rx += (Mx - Rx) * 0.13;
    Ry += (My - Ry) * 0.13;
    Ring.style.left = Rx + 'px';
    Ring.style.top  = Ry + 'px';
    requestAnimationFrame(Tick);
  };

  Tick();
})();

const Nav = (() => {
  const El = document.getElementById('Nav');
  window.addEventListener('scroll', () => {
    El.classList.toggle('scrolled', scrollY > 40);
  }, { passive: true });
})();

const Reveal = (() => {
  const Els = document.querySelectorAll('.reveal');
  const Io  = new IntersectionObserver(Entries => {
    Entries.forEach(E => {
      if (!E.isIntersecting) return;
      E.target.classList.add('visible');
      Io.unobserve(E.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  Els.forEach(El => Io.observe(El));
})();
