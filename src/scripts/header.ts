interface HeaderElements {
  header: HTMLElement | null;
  toggle: HTMLButtonElement | null;
  nav: HTMLElement | null;
  links: NodeListOf<HTMLElement>;
  footer: HTMLElement | null;
}

interface ScrollState {
  lastScrollY: number;
  isHeaderVisible: boolean;
  isFooterVisible: boolean;
  scrollTimeout: ReturnType<typeof setTimeout> | null;
}

/**
 * ============================================================================
 * OBTENER ELEMENTOS DEL DOM
 * ============================================================================
 */

function getHeaderElements(): HeaderElements {
  return {
    header: document.querySelector(".site-header"),
    toggle: document.querySelector(".site-header__toggle") as HTMLButtonElement | null,
    nav: document.querySelector(".site-header__nav"),
    links: document.querySelectorAll(".site-header__link") as NodeListOf<HTMLElement>,
    footer: document.querySelector(".site-footer"),
  };
}

/**
 * ============================================================================
 * TOGGLE MENÚ HAMBURGER - FUNCIONALIDAD PRINCIPAL
 * ============================================================================
 */

/**
 * Configura el comportamiento del botón hamburger
 * - Click abre/cierra el menú
 * - Actualiza ARIA attributes
 * - Anima el icono
 */
function setupToggleButton(elements: HeaderElements): void {
  const { toggle, nav } = elements;

  if (!toggle || !nav) {
    console.warn("Header toggle or nav element not found");
    return;
  }

  /**
   * Evento: Click en hamburger
   */
  toggle.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevenir que el click exterior dispare el cierre
    toggleMenu(toggle, nav);
  });
}

/**
 * Alterna el estado del menú (abre/cierra)
 */
function toggleMenu(toggle: HTMLButtonElement, nav: HTMLElement): void {
  const isOpen = toggle.classList.contains("is-active");

  // Toggle clases
  toggle.classList.toggle("is-active");
  nav.classList.toggle("is-active");

  // Actualizar ARIA attributes
  toggle.setAttribute("aria-expanded", String(!isOpen));

  // Controlar scroll del body
  document.body.style.overflow = !isOpen ? "hidden" : "";

  // Animar icono (opcional, si prefieres hacerlo con CSS)
  // updateToggleIconWithCSS(toggle); // Ya se hace con CSS .is-active
}

/**
 * ============================================================================
 * NAVEGACIÓN - CERRAR MENÚ AL HACER CLICK
 * ============================================================================
 */

/**
 * Configura los enlaces para cerrar el menú al hacer click
 */
function setupNavLinks(elements: HeaderElements): void {
  const { toggle, nav, links } = elements;

  if (!links || !toggle || !nav) return;

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      // Solo cerrar en viewports pequeños (donde está visible el hamburger)
      if (window.innerWidth <= 768) {
        closeMenu(toggle, nav);
      }

      // Marcar como activo (para SPA)
      markActiveLink(event.target as HTMLElement, links);
    });
  });
}

/**
 * Cierra el menú de navegación
 */
function closeMenu(toggle: HTMLButtonElement, nav: HTMLElement): void {
  toggle.classList.remove("is-active");
  nav.classList.remove("is-active");
  toggle.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

/**
 * Marca el link actual como activo
 */
function markActiveLink(currentLink: HTMLElement, links: NodeListOf<HTMLElement>): void {
  links.forEach((link) => {
    link.classList.remove("site-header__link--active");
    link.setAttribute("aria-current", "");
  });

  currentLink.classList.add("site-header__link--active");
  currentLink.setAttribute("aria-current", "page");
}

/**
 * ============================================================================
 * CERRAR MENÚ AL HACER CLICK FUERA
 * ============================================================================
 */

/**
 * Configura el cierre del menú al hacer click fuera
 */
function setupClickOutside(elements: HeaderElements): void {
  const { toggle, nav } = elements;

  if (!toggle || !nav) return;

  document.addEventListener("click", (event) => {
    const target = event.target as Node;

    // Cerrar si el click NO es en el toggle ni en el nav
    if (!nav.contains(target) && !toggle.contains(target)) {
      if (toggle.classList.contains("is-active")) {
        closeMenu(toggle, nav);
      }
    }
  });
}

/**
 * ============================================================================
 * SOPORTE PARA TECLA ESC
 * ============================================================================
 */

/**
 * Configura que ESC cierre el menú
 */
function setupEscapeKey(elements: HeaderElements): void {
  const { toggle, nav } = elements;

  if (!toggle || !nav) return;

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.classList.contains("is-active")) {
      closeMenu(toggle, nav);
    }
  });
}

/**
 * ============================================================================
 * SCROLL LOGIC - HIDE/SHOW HEADER Y FOOTER
 * ============================================================================
 */

/**
 * Inicializa la lógica de scroll (hide/show header y footer)
 */
function initScrollLogic(header: HTMLElement | null, footer: HTMLElement | null): void {
  if (!header) {
    console.warn("Header element not found for scroll logic");
    return;
  }

  // Estado de scroll
  const scrollState: ScrollState = {
    lastScrollY: 0,
    isHeaderVisible: true,
    isFooterVisible: footer !== null, // Si no hay footer, no hacer nada
    scrollTimeout: null,
  };

  /**
   * Evento: Scroll del usuario
   * Maneja:
   * - Show/hide header en scroll up/down
   * - Show/hide footer cuando se llega al final
   */
  window.addEventListener(
    "scroll",
    () => {
      // Debounce de 50ms para mejor performance
      if (scrollState.scrollTimeout) {
        clearTimeout(scrollState.scrollTimeout);
      }

      scrollState.scrollTimeout = setTimeout(() => {
        updateScrollState(scrollState, header, footer);
      }, 50);
    },
    { passive: true } // Performance: el listener no llama preventDefault()
  );

  // Actualizar estado inicial
  updateScrollState(scrollState, header, footer);
}

/**
 * Actualiza el estado del scroll y aplica cambios visuales
 */
function updateScrollState(
  state: ScrollState,
  header: HTMLElement,
  footer: HTMLElement | null
): void {
  const currentScrollY = window.scrollY;
  const scrollDirection = currentScrollY > state.lastScrollY ? "down" : "up";

  // Lógica del header: hide en scroll down, show en scroll up
  updateHeaderVisibility(state, header, scrollDirection);

  // Lógica del footer: show cuando se acerca al final
  if (footer) {
    updateFooterVisibility(state, footer);
  }

  state.lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
}

/**
 * Controla la visibilidad del header según dirección de scroll
 */
function updateHeaderVisibility(
  state: ScrollState,
  header: HTMLElement,
  scrollDirection: "up" | "down"
): void {
  // No hide el header si estamos muy cerca del top
  const threshold = 50;

  if (scrollDirection === "down" && state.isHeaderVisible && window.scrollY > threshold) {
    header.classList.add("is-hidden");
    state.isHeaderVisible = false;
  } else if (scrollDirection === "up" && !state.isHeaderVisible) {
    header.classList.remove("is-hidden");
    state.isHeaderVisible = true;
  }
}

/**
 * Controla la visibilidad del footer (muestra cuando se acerca al final)
 */
function updateFooterVisibility(state: ScrollState, footer: HTMLElement): void {
  const scrollPercentage =
    (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

  // Mostrar footer cuando falta 15% para llegar al final (85% scrolleado)
  const threshold = 85;

  if (scrollPercentage >= threshold && !state.isFooterVisible) {
    footer.classList.remove("is-hidden");
    state.isFooterVisible = true;
  } else if (scrollPercentage < threshold && state.isFooterVisible) {
    footer.classList.add("is-hidden");
    state.isFooterVisible = false;
  }
}

/**
 * ============================================================================
 * FUNCIÓN PRINCIPAL DE INICIALIZACIÓN
 * ============================================================================
 */

/**
 * Inicializa todas las funcionalidades del header
 * Punto de entrada única para todas las setup functions
 */
export function initHeader(): void {
  // Obtener elementos del DOM
  const elements = getHeaderElements();

  // Validar que al menos existan header y toggle
  if (!elements.header || !elements.toggle || !elements.nav) {
    console.warn("Required header elements not found");
    return;
  }

  // Setup funcionalidades
  setupToggleButton(elements);     // Click en hamburger
  setupNavLinks(elements);         // Click en links
  setupClickOutside(elements);     // Click fuera
  setupEscapeKey(elements);        // Tecla ESC
  initScrollLogic(elements.header, elements.footer); // Scroll logic

  console.log("Header initialized successfully");
}

/**
 * ============================================================================
 * CLEANUP (para hot reload en desarrollo)
 * ============================================================================
 */

/**
 * Limpia los event listeners y estados
 * Útil para HMR (Hot Module Replacement)
 */
export function cleanupHeader(): void {
  const elements = getHeaderElements();
  const { toggle, nav } = elements;

  if (toggle && nav) {
    // Remover clases de estado
    toggle.classList.remove("is-active");
    nav.classList.remove("is-active");

    // Reset body overflow
    document.body.style.overflow = "";

    // Reset ARIA
    toggle.setAttribute("aria-expanded", "false");
  }
}