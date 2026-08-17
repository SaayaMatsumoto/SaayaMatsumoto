/* Scroll reveal animations */
(() => {
  const revealElements = document.querySelectorAll(
    '.fade-in, .fade-left, .fade-right, .fade-up'
  );
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!revealElements.length || reducedMotion || !('IntersectionObserver' in window)) {
    return;
  }

  document.documentElement.classList.add('reveal-enabled');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  });

  revealElements.forEach((element) => revealObserver.observe(element));
})();
