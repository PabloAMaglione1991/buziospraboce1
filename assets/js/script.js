// assets/js/script.js
// Entrada principal: importa módulos y los inicializa

import { initMenu } from './menu.js';
import { initFormValidation } from './form.js';
import { initScrollAnimations } from './scroll.js';

document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  initFormValidation();
  initScrollAnimations();
});
