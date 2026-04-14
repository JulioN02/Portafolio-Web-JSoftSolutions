import { renderHeader } from "./components/layout/header";
import { renderFooter } from "./components/layout/footer";
import { initNavigation, navigateTo } from "./scripts/navigation";
import { initHeader } from "./scripts/header";
import { renderHomeView } from "./views/home";

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  const app = document.getElementById("app");
  
  if (!app) {
    throw new Error("App container not found");
  }

  // Renderizar header y footer
  const headerHTML = renderHeader();
  const footerHTML = renderFooter();
  
  app.insertAdjacentHTML("beforebegin", headerHTML);
  app.insertAdjacentHTML("afterend", footerHTML);

  navigateTo(window.location.pathname as any, true);

  // Inicializar funcionalidades
  initHeader();
});

// DOM references
const mainRoot = document.getElementById("site-main");

// Guard clause
if (!mainRoot) {
  throw new Error("Layout root elements not found");
}

// Render layout
mainRoot.innerHTML = renderHomeView();

// Init navigation
initNavigation();

// Initial route
navigateTo(window.location.pathname as any);