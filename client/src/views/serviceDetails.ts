import { services } from "../data/services";

export function renderServiceDetailView(serviceId: string): string {
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return `<p>Servicio no encontrado</p>`;
  }

  return `
    <section class="page page-service-detail">
      <header style="margin-bottom: 2rem;">
        <h1>${service.title}</h1>
        <p style="font-size: 1.2rem; opacity: 0.9;">${service.description}</p>
      </header>

      <section class="service-problem" style="margin-bottom: 2rem;">
        <h3>Problema que resuelve</h3>
        <p>${service.details}</p>
      </section>

      <section class="service-includes">
        <h3>Qué incluye la versión base</h3>
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
