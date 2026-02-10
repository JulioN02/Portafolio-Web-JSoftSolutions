import { services } from "../data/services";

export function renderServiceDetailView(serviceId: string): string {
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return `<p>Servicio no encontrado</p>`;
  }

  return `
    <section class="page page-service-detail">
      <header>
        <h1>${service.title}</h1>
        <p>${service.details}</p>
      </header>

      <section>
        <h3>Qué incluye</h3>
        <ul>
          ${service.includes.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>

      <a href="#/contact" class="cta-button">
        Solicitar este servicio
      </a>
    </section>
  `;
}
