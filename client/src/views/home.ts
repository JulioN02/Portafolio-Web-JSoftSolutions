

export function renderHomeView(): string {
  return `
  
    <!-- HERO / PROPUESTA DE VALOR -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>Tu negocio necesita más que una página web.</h1>
        <p>
          Te ayudo a tener presencia profesional en internet
          y las herramientas internas para operar mejor,
          sin complicaciones técnicas de tu parte.
        </p>
      </div>
    </section>

    <!-- SERVICIOS (RESUMEN) -->
    <section class="services-section">
      <header>
        <h2>Dos cosas que tu negocio puede necesitar</h2>
      </header>

      <div class="services-list">
        <article class="service-card">
          <h3>Presencia Web</h3>
          <p>Una web que trabaja por ti mientras tú atiendes tu negocio.<br>Clara, rápida y pensada para que tus clientes te encuentren y confíen en ti desde el primer clic.</p>
          <a href="/services" data-route="/services" class="service-link">→ Ver servicios web</a>
        </article>

        <article class="service-card">
          <h3>Software Administrativo</h3>
          <p>Un panel a tu medida para gestionar clientes, reservas, inventario o lo que tu operación necesite.<br>Sin hojas de cálculo. Sin papel. Sin caos.</p>
          <a href="/services" data-route="/services" class="service-link">→ Ver software administrativo</a>
        </article>
      </div>
    </section>

    <!-- PROPUESTA DIFERENCIAL -->
    <section class="value-section">
      <h2>Entiendo los negocios, no solo el código</h2>
      <p class="value-text">
        Antes de ser desarrollador, coordiné operaciones logísticas durante 7 años. Eso me enseñó algo que no se aprende en un tutorial:
      </p>
      <p class="value-text value-highlight">
        Un sistema funciona cuando resuelve un problema real.
      </p>
      <p>
        Por eso no te vendo tecnología. Te entrego una solución que tiene sentido para tu negocio.
      </p>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <h2>¿Tienes un proyecto en mente?</h2>
      <p>Cuéntame qué necesitas y te digo cómo puedo ayudarte.</p>
      <a href="/contact" data-route="/contact" class="cta-button">Contacto</a>
    </section>
  `;
}
