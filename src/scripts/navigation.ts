import { renderHomeView } from "../views/home";
import { renderServicesView } from "../views/services";
import { renderProductsView } from "../views/products";
import { renderTemplatesView } from "../views/templates";
import { renderGuaranteesView } from "../views/guarantees";
import { renderAboutView } from "../views/about";
import { renderContactView } from "../views/contact";

//DEFINICIÓN DE RUTAS
type Route = "/" | "/services" | "/products" | "/templates" | "/guarantees" | "/about" | "/contact";

const routes: Record<Route, () => string> = {
  "/": renderHomeView,
  "/services": renderServicesView,
  "/products": renderProductsView,
  "/templates": renderTemplatesView,
  "/guarantees": renderGuaranteesView,
  "/about": renderAboutView,
  "/contact": renderContactView,
};


//Funcion principal de navegacion
export function navigateTo(path: Route): void {
  const mainRoot = document.getElementById("site-main");

  if (!mainRoot) {
    throw new Error("Main container not found");
  }

  const viewRenderer = routes[path];

  if (!viewRenderer) {
    console.warn(`Route not found: ${path}`);
    mainRoot.innerHTML = "<h2>Página no encontrada</h2>";
    return;
  }

  mainRoot.innerHTML = viewRenderer();
  history.pushState({}, "", path);
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

  // Manejar back/forward del navegador
  window.addEventListener("popstate", () => {
    const currentPath = window.location.pathname as Route;
    navigateTo(currentPath);
  });
}
