// assets/js/scroll.js
// Módulo para animaciones en scroll con throttle

function throttle(fn, wait) {
  let inThrottle, lastFn, lastTime;
  return function() {
    const context = this, args = arguments;
    if (!inThrottle) {
      fn.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(() => {
        if ((Date.now() - lastTime) >= wait) {
          fn.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
}

export function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  window.addEventListener('scroll', throttle(() => {
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('visible');
      }
    });
  }, 200));
}

// Al cargar DOM
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('mainNav');
  const toggleScrolled = () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', toggleScrolled);
  toggleScrolled(); // para inicio de página en scroll
});
