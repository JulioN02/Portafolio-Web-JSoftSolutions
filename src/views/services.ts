import { services } from "../data/services";
import { renderPageHeader } from "../components/sections/pageHeader";
import { renderServiceCard } from "../components/cards/serviceCard";

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
      })}

      <div class="page-content services-list">
        ${servicesHTML}
      </div>
    </section>
  `;
}
