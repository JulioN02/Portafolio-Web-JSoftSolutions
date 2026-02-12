import { renderHomeView } from "../views/home";
import { renderServicesView, initServicesView } from "../views/services";
import { renderProductsView } from "../views/products";
import { renderTemplatesView } from "../views/templates";
import { renderGuaranteesView } from "../views/guarantees";
import { renderAboutView } from "../views/about";
import { renderContactView } from "../views/contact";
import { initContactForm } from "../scripts/contact";
import { updateActiveLink } from "./header"; // <-- Nuevo import

// ============================
// ROUTES
// ============================

type Route =
  | "/"
  | "/services"
  | "/products"
  | "/templates"
  | "/guarantees"
  | "/about"
  | "/contact";

type RouteConfig = {
  render: () => string;
  onMount?: () => void;
};

const routes: Record<Route, RouteConfig> = {
  "/": { render: renderHomeView },
  "/services": {
    render: renderServicesView,
    onMount: initServicesView,
  },
  "/products": { render: renderProductsView },
  "/templates": { render: renderTemplatesView },
  "/guarantees": { render: renderGuaranteesView },
  "/about": { render: renderAboutView },
  "/contact": {
    render: renderContactView,
    onMount: initContactForm,
  },
};

// ============================
// NAVIGATION CORE
// ============================

let currentRoute: Route | null = null;

export function navigateTo(path: Route, replace = false): void {
  if (currentRoute === path) return;

  const mainRoot = document.getElementById("site-main");
  if (!mainRoot) throw new Error("Main container not found");

  const route = routes[path];

  currentRoute = path;
  mainRoot.innerHTML = route.render();
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
      
      // Backup para navegadores antiguos o contenedores específicos
      document.documentElement.scrollTop = 0;
      mainRoot.scrollTop = 0; 
    });
  });
  
  window.scrollTo(0, 0);
  replace
    ? history.replaceState({}, "", path)
    : history.pushState({}, "", path);

  route.onMount?.();
  
  // Sincronizar el header con la nueva ruta
  updateActiveLink();
}

// ============================
// LINK INTERCEPTION
// ============================

function handleLinkClick(event: Event): void {
  const target = event.target as HTMLElement;
  const path = target
    .closest("[data-route]")
    ?.getAttribute("data-route") as Route | null;

  if (!path) return;

  event.preventDefault();
  navigateTo(path);
}

// ============================
// INIT
// ============================

export function initNavigation(): void {
  document.addEventListener("click", handleLinkClick);

  let path = window.location.pathname as Route;
  if (!routes[path]) path = "/";

  navigateTo(path, true);

  window.addEventListener("popstate", () => {
    const path = window.location.pathname as Route;
    navigateTo(routes[path] ? path : "/", true);
  });
}
