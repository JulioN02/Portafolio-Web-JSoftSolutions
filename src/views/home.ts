import { services } from "../data/services";

export function renderHomeView(): string {
  const featuredServices = services.slice(0, 3);

  const servicesHTML = featuredServices
    .map(
      (service) => `
        <article class="service-card">
          <h3>${service.title}</h3>
          <p>${service.description}</p>
        </article>
      `
    )
    .join("");
  return `
  
    <!-- HERO / PROPUESTA DE VALOR -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>Desarrollo Web con enfoque en estructura y claridad</h1>
        <p>
          En J-Soft Solutions construyo sitios web profesionales,
          mantenibles y alineados con objetivos reales de negocio.
        </p>
      </div>
    </section>

    <!-- SERVICIOS (RESUMEN) -->
    <section class="services-section">
      <header>
        <h2>Servicios</h2>
        <p>Soluciones web diseñadas con criterio técnico y enfoque práctico.</p>
      </header>

      <div class="services-list">
        ${servicesHTML}
      </div>
      <div class="services-footer">
        <a href="/services" data-route="/services" class="cta-button">Ver todos los servicios</a>
      </div>
    </section>

    <!-- PROPUESTA DIFERENCIAL -->
    <section class="value-section">
      <h2>Forma de trabajo</h2>
      <p>
        Cada proyecto parte de una estructura clara, procesos definidos
        y decisiones técnicas conscientes.
      </p>

      <ul>
        <li>Análisis del requerimiento</li>
        <li>Definición de estructura</li>
        <li>Desarrollo ordenado</li>
        <li>Entrega funcional</li>
      </ul>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <h2>¿Tienes un proyecto en mente?</h2>
      <p>Hablemos y definamos la mejor forma de construirlo.</p>
      <a href="/contact" data-route="/contact" class="cta-button">Contacto</a>
    </section>
  `;
}
