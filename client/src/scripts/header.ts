// scripts/header.ts

/**
 * Interface simplificada según tus fundamentos de TS
 */
interface HeaderElements {
  header: HTMLElement | null;
  toggle: HTMLButtonElement | null;
  nav: HTMLElement | null;
  links: NodeListOf<HTMLAnchorElement>;
}

function getHeaderElements(): HeaderElements {
  return {
    header: document.querySelector(".site-header"),
    toggle: document.querySelector(".site-header__toggle") as HTMLButtonElement | null,
    // IMPORTANTE: Seleccionamos el ID site-nav para que coincida con el CSS
    nav: document.getElementById("site-nav"), 
    links: document.querySelectorAll(".site-header__link") as NodeListOf<HTMLAnchorElement>,
  };
}

/**
 * Maneja el estado visual del menú
 */
function toggleMenu(isOpen: boolean, elements: HeaderElements): void {
  const { toggle, nav } = elements;
  if (!toggle || !nav) return;

  toggle.classList.toggle("is-active", isOpen);
  nav.classList.toggle("is-active", isOpen);
  toggle.setAttribute("aria-expanded", String(isOpen));
  document.body.style.overflow = isOpen ? "hidden" : "";
}

/**
 * Resalta el link actual basado en la URL
 */
export function updateActiveLink(): void {
  const currentPath = window.location.pathname;
  const links = document.querySelectorAll(".site-header__link");

  links.forEach((link) => {
    const route = link.getAttribute("data-route") || link.getAttribute("href");
    if (route === currentPath) {
      link.classList.add("site-header__link--active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("site-header__link--active");
      link.removeAttribute("aria-current");
    }
  });
}

export function initHeader(): void {
  const elements = getHeaderElements();
  const { header, toggle, nav, links } = elements;

  if (!header || !toggle || !nav) return;

  // 1. Evento Toggle
  toggle.addEventListener("click", () => {
    const willOpen = !toggle.classList.contains("is-active");
    toggleMenu(willOpen, elements);
  });

  // 2. Cerrar al clickear links (Mobile)
  links.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) toggleMenu(false, elements);
    });
  });

  // 3. Lógica de Scroll (Sombra y Ocultar)
  let lastScrollY = window.scrollY;
  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    
    // Sombra
    header.classList.toggle("is-scrolled", currentScrollY > 10);

    // Ocultar/Mostrar (Hide on scroll down)
    if (currentScrollY > 100 && currentScrollY > lastScrollY) {
      header.classList.add("is-hidden");
    } else {
      header.classList.remove("is-hidden");
    }
    lastScrollY = currentScrollY;
  }, { passive: true });

  updateActiveLink();
}