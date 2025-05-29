// assets/js/form.js
// Módulo para validación accesible de formularios

export function initFormValidation() {
  const form = document.querySelector('form');
  if (!form) return;

  form.addEventListener('submit', event => {
    event.preventDefault();
    let valid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required]');

    inputs.forEach(input => {
      const errorId = input.id + '-error';
      let errorEl = document.getElementById(errorId);

      if (!input.checkValidity()) {
        valid = false;
        if (!errorEl) {
          errorEl = document.createElement('div');
          errorEl.id = errorId;
          errorEl.className = 'invalid-feedback';
          errorEl.setAttribute('aria-live', 'polite');
          input.after(errorEl);
        }
        errorEl.textContent = input.validationMessage;
        input.classList.add('is-invalid');
      } else {
        if (errorEl) errorEl.remove();
        input.classList.remove('is-invalid');
      }
    });

    if (valid) {
      form.submit();
    }
  });
}
