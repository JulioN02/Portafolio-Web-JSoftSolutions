export function renderHomeView(): string {
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
        <p>
          Soluciones web diseñadas con criterio técnico y enfoque práctico.
        </p>
      </header>

      <div class="services-list">
        <article class="service-card">
          <h3>Desarrollo Web Profesional</h3>
          <p>
            Sitios web estructurados, escalables y bien organizados
            desde el inicio.
          </p>
        </article>

        <article class="service-card">
          <h3>Landing Pages Estratégicas</h3>
          <p>
            Páginas enfocadas en conversión, claridad del mensaje
            y rendimiento.
          </p>
        </article>

        <article class="service-card">
          <h3>Portafolios y Sitios Corporativos</h3>
          <p>
            Presencia digital profesional para marcas personales
            y empresas.
          </p>
        </article>

        <article class="service-card">
          <h3>Soluciones Web Funcionales</h3>
          <p>
            Herramientas web simples que resuelven problemas concretos.
          </p>
        </article>
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
      <a href="#" class="cta-button">Contacto</a>
    </section>
  `;
}
