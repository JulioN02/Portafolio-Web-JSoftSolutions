import { renderHomeView } from "../views/home";
import { renderServicesView, initServicesView} from "../views/services";
import { renderProductsView } from "../views/products";
import { renderTemplatesView } from "../views/templates";
import { renderGuaranteesView } from "../views/guarantees";
import { renderAboutView } from "../views/about";
import { renderContactView } from "../views/contact";
import { initContactForm } from "../scripts/contact";
import { renderServiceDetailView } from "../views/serviceDetails";

//DEFINICIÓN DE RUTAS
type Route = "/" | "/services" | "/products" | "/templates" | "/guarantees" | "/about" | "/contact";

type RouteConfig = {
  render: () => string;
  onMount?: () => void;
};

const routes: Record<Route, RouteConfig> = {
  "/": {
    render: renderHomeView,
  },
  "/services": {
    render: renderServicesView,
    onMount: initServicesView,
  },
  "/products": {
    render: renderProductsView,
  },
  "/templates": {
    render: renderTemplatesView,
  },
  "/guarantees": {
    render: renderGuaranteesView,
  },
  "/about": {
    render: renderAboutView,
  },
  "/contact": {
    render: renderContactView,
    onMount: initContactForm,
  },
};


//Funcion principal de navegacion
export function navigateTo(path: Route): void {
  const mainRoot = document.getElementById("site-main");

  if (!mainRoot) {
    throw new Error("Main container not found");
  }

  const route = routes[path];

  if (!route) {
    console.warn(`Route not found: ${path}`);
    mainRoot.innerHTML = "<h2>Página no encontrada</h2>";
    return;
  }

  mainRoot.innerHTML = route.render();
  history.pushState({}, "", path);

  // 🔹 Hook post-render
  route.onMount?.();

  reattachNavigationListeners();
}
/**
 * Reattach listeners a todos los elementos [data-route]
 * Se ejecuta después de cada cambio de vista
 */
function reattachNavigationListeners(): void {
  const navLinks = document.querySelectorAll("[data-route]");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const path = (event.currentTarget as HTMLElement).dataset.route as Route;
      navigateTo(path);
    });
  });
}


//Inicializacion de navegacion
export function initNavigation(): void {
  const navLinks = document.querySelectorAll("[data-route]");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const path = (event.currentTarget as HTMLElement).dataset.route as Route;
      navigateTo(path);
    });
  });

  // ✅ Inicializar con Home por defecto
  let currentPath = (window.location.pathname as Route) || "/";
  
  // Si la ruta actual no existe en routes, usar Home
  if (!routes[currentPath]) {
    currentPath = "/";
    history.replaceState({}, "", "/");
  }
  
  navigateTo(currentPath);

  // Manejar back/forward del navegador
  window.addEventListener("popstate", () => {
    let path = (window.location.pathname as Route) || "/";
    
    // Si la ruta no existe, usar Home
    if (!routes[path]) {
      path = "/";
    }
    
    navigateTo(path);
  });
}


export function handleNavigation(): void {
  const root = document.getElementById("app");
  if (!root) return;

  const hash = location.hash || "#/";

  if (hash === "#/services") {
    navigateTo("/services");
    return;
  }

  if (hash.startsWith("#/services/")) {
    const serviceId = hash.replace("#/services/", "");
    root.innerHTML = renderServiceDetailView(serviceId);
    return;
  }
}
