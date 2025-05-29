// assets/js/menu.js
// Módulo para manejar el colapso del menú al hacer clic en un enlace

export function initMenu() {
  const navLinks = document.querySelectorAll('.nav-link');
  const navbarCollapse = document.getElementById('navbarNav');
  if (!navbarCollapse) return;

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
        bsCollapse.hide();
      }
    });
  });
}
