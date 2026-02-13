import { services } from "../data/services";
import { renderPageHeader } from "../components/sections/pageHeader";
import { renderServiceCard } from "../components/cards/serviceCard";
import servicesBg from "../assets/images/servicesHome.png";

export function renderServicesView(): string {
  const servicesHTML = services
    .map((service) =>
      renderServiceCard({
        id: service.id,
        title: service.title,
        description: service.description,
      })
    )
    .join("");

  return `
    <section class="page page-services">
      ${renderPageHeader({
        title: "Servicios",
        description: "Soluciones web diseñadas con criterio técnico y enfoque práctico.",
        bgImage: servicesBg,
      })}

      <div class="page-content services-list">
        ${servicesHTML}
      </div>
    </section>
  `;
}

export function initServicesView(): void {
  const container = document.querySelector(".services-list");

  if (!container) return;

  container.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;

    if (!target.matches("button[data-service-id]")) return;

    const serviceId = target.getAttribute("data-service-id");
    if (!serviceId) return;

    location.hash = `#/services/${serviceId}`;
  });
}

