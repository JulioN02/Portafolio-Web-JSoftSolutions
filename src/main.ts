import { renderHeader } from "./components/layout/header";
import { renderFooter } from "./components/layout/footer";
import { initNavigation, navigateTo } from "./scripts/navigation";

// DOM references
const headerRoot = document.getElementById("site-header");
const mainRoot = document.getElementById("site-main");
const footerRoot = document.getElementById("site-footer");

// Guard clause
if (!headerRoot || !mainRoot || !footerRoot) {
  throw new Error("Layout root elements not found");
}

// Render layout
headerRoot.innerHTML = renderHeader();
footerRoot.innerHTML = renderFooter();

// Init navigation
initNavigation();

// Initial route
navigateTo(window.location.pathname as any);