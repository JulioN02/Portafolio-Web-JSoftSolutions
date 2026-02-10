/**
 * ============================================================================
 * HEADER NAVIGATION SCRIPT
 * Ubicación: src/scripts/headerNavigation.ts
 * 
 * Responsabilidad:
 * - Gestionar el toggle del menú móvil
 * - Cerrar menú al navegar
 * - Detectar scroll y actualizar estilos
 * - Marcar links activos según la ruta actual
 * - Manejar accesibilidad (ARIA attributes)
 * ============================================================================
 */

interface HeaderElements {
  header: HTMLElement | null;
  toggle: HTMLButtonElement | null;
  nav: HTMLElement | null;
  links: NodeListOf<HTMLAnchorElement>;
}

/**
 * Obtiene todos los elementos necesarios del DOM
 */
function getHeaderElements(): HeaderElements {
  return {
    header: document.querySelector('.site-header'),
    toggle: document.querySelector('.site-header__toggle'),
    nav: document.querySelector('.site-header__nav'),
    links: document.querySelectorAll('.site-header__link'),
  };
}

/**
 * Inicializa todos los event listeners del header
 */
export function setupHeaderNavigation(): void {
  const elements = getHeaderElements();

  if (!elements.header || !elements.toggle || !elements.nav) {
    console.warn('Header elements not found');
    return;
  }

  // Inicializar funcionalidades
  setupToggleButton(elements);
  setupNavLinks(elements);
  setupScrollDetection(elements);
  updateActiveLink(elements);

  // Observar cambios de ruta (para SPA)
  window.addEventListener('popstate', () => updateActiveLink(elements));
}

/* ============================================================================
   TOGGLE BUTTON - MENÚ MÓVIL
   ============================================================================ */

/**
 * Configura el comportamiento del botón hamburger
 */
function setupToggleButton(elements: HeaderElements): void {
  const { toggle, nav } = elements;

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = toggle.classList.contains('is-active');

    // Toggle clases
    toggle.classList.toggle('is-active');
    nav.classList.toggle('is-active');

    // Actualizar ARIA attributes
    toggle.setAttribute('aria-expanded', String(!isOpen));

    // Controlar scroll del body
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  // Cerrar menú al presionar ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggle.classList.contains('is-active')) {
      closeMenu(toggle, nav);
    }
  });
}

/**
 * Cierra el menú móvil
 */
function closeMenu(
  toggle: HTMLButtonElement,
  nav: HTMLElement
): void {
  toggle.classList.remove('is-active');
  nav.classList.remove('is-active');
  toggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

/* ============================================================================
   NAVEGACIÓN - CERRAR AL CLICKEAR
   ============================================================================ */

/**
 * Configura que el menú se cierre al clickear un link
 */
function setupNavLinks(elements: HeaderElements): void {
  const { toggle, nav, links } = elements;

  if (!links || !toggle || !nav) return;

  links.forEach((link) => {
    link.addEventListener('click', () => {
      // Solo cerrar si el menú está visible (mobile)
      if (window.innerWidth <= 768) {
        closeMenu(toggle, nav);
      }
    });
  });
}

/* ============================================================================
   SCROLL DETECTION
   ============================================================================ */

/**
 * Detecta cuando hay scroll y mejora la sombra del header
 */
function setupScrollDetection(elements: HeaderElements): void {
  const { header } = elements;

  if (!header) return;

  let lastScrollY = 0;
  let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

  window.addEventListener(
    'scroll',
    () => {
      lastScrollY = window.scrollY;

      // Debounce para mejorar rendimiento
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (lastScrollY > 0) {
          header?.classList.add('is-scrolled');
        } else {
          header?.classList.remove('is-scrolled');
        }
      }, 10);
    },
    { passive: true }
  );

  // Chequeo inicial
  if (window.scrollY > 0) {
    header.classList.add('is-scrolled');
  }
}

/* ============================================================================
   ACTIVE LINK DETECTION
   ============================================================================ */

/**
 * Marca el link activo según la ruta actual
 */
function updateActiveLink(elements: HeaderElements): void {
  const { links } = elements;
  const currentPath = window.location.pathname;

  links.forEach((link) => {
    const href = link.getAttribute('href') || '';
    const dataRoute = link.getAttribute('data-route') || '';
    const isActive =
      currentPath === href || currentPath === dataRoute || href === currentPath;

    if (isActive) {
      link.classList.add('site-header__link--active');
      // Opcional: añadir aria-current para accesibilidad
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('site-header__link--active');
      link.removeAttribute('aria-current');
    }
  });
}

/* ============================================================================
   CLEANUP (si es necesario para hot reload)
   ============================================================================ */

/**
 * Limpia los event listeners (útil para dev con HMR)
 */
export function cleanupHeaderNavigation(): void {
  const elements = getHeaderElements();
  const { toggle, nav } = elements;

  if (toggle) {
    toggle.replaceWith(toggle.cloneNode(true));
  }

  if (nav) {
    nav.classList.remove('is-active');
  }

  document.body.style.overflow = '';
}

/**
 * INTEGRACIÓN EN main.ts:
 * 
 * import { setupHeaderNavigation } from './scripts/headerNavigation';
 * 
 * document.addEventListener('DOMContentLoaded', () => {
 *   setupHeaderNavigation();
 *   // ... resto de inicialización
 * });
 * 
 * // Si usas HMR (hot module replacement):
 * if (import.meta.hot) {
 *   import.meta.hot.accept('./scripts/headerNavigation', (module) => {
 *     cleanupHeaderNavigation();
 *     if (module) {
 *       module.setupHeaderNavigation();
 *     }
 *   });
 * }
 */