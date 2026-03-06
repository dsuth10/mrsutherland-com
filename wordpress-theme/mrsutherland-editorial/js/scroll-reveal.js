/**
 * Scroll reveal: add .is-visible when .scroll-reveal elements enter viewport.
 * Respects prefers-reduced-motion. Matches GPT-5.4 interactive page behavior.
 */
(function () {
  var reducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function init() {
    if (reducedMotion) {
      document.querySelectorAll('.scroll-reveal').forEach(function (el) {
        el.classList.add('is-visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.scroll-reveal').forEach(function (el) {
      observer.observe(el);
    });
  }

  // On single post: wrap entry-content direct children in scroll-reveal for paragraph-by-paragraph reveal (run before init so observer sees them)
  function wrapEntryContentChildren() {
    var entry = document.querySelector('.single .entry-content');
    if (!entry || reducedMotion) return;
    var children = Array.prototype.slice.call(entry.children);
    children.forEach(function (child, i) {
      if (child.classList.contains('scroll-reveal-wrap')) return;
      var wrapper = document.createElement('div');
      wrapper.className = 'scroll-reveal';
      wrapper.style.transitionDelay = (i * 60) + 'ms';
      child.parentNode.insertBefore(wrapper, child);
      wrapper.appendChild(child);
    });
  }

  function boot() {
    wrapEntryContentChildren();
    init();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
