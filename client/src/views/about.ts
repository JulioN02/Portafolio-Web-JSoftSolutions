import sobreMiImage from "../assets/images/sobremi.png";

export function renderAboutView(): string {
  return `
    <section class="about-view">
      <!-- HERO SECTION -->
      <div class="about-hero">
        <div class="about-hero-content">
          <div class="about-badges">
            <span class="about-badge">Ingeniero de Sistemas</span>
            <span class="about-badge">Desarrollador de Software</span>
          </div>
          <h1>Hola, soy Julio Martínez</h1>
          <p class="about-lead">Ingeniero de Sistemas y Desarrollador de Software, especializado en crear soluciones tecnológicas para pequeños negocios.</p>
          <p class="about-description">Combino mi formación académica en Ingeniería de Sistemas con años de experiencia coordinando operaciones logísticas. Eso me dio algo que va más allá del código: <strong>entender cómo funciona un negocio por dentro</strong>. Ahora aplico ese conocimiento para crear herramientas digitales que realmente resuelven problemas.</p>
        </div>
        <div class="about-hero-image">
          <img src="${sobreMiImage}" alt="Julio Martínez - Ingeniero de Sistemas y Desarrollador de Software" loading="lazy">
        </div>
      </div>

      <!-- QUE HAGO -->
      <div class="about-what-i-do">
        <h2>¿Qué hago en J-Soft Solutions?</h2>
        <div class="about-cards about-cards--two">
          <div class="about-card">
            <div class="about-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            </div>
            <h3>Desarrollo Web</h3>
            <p>Sitios web profesionales, landing pages y sistemas administrativos personalizados con tecnologías modernas y buenas prácticas.</p>
          </div>
          <div class="about-card">
            <div class="about-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <h3>Software a Medida</h3>
            <p>Sistemas de gestión, agendas de citas, control de inventario y todo lo que tu negocio necesite para organizarse y crecer.</p>
          </div>
        </div>
      </div>

      <!-- MI ENFOQUE -->
      <div class="about-approach">
        <div class="about-approach-content">
          <h2>Mi enfoque</h2>
          <ul class="about-approach-list">
            <li><strong>Sin tecnicismos innecesarios</strong> — Hablamos como personas normales, no como robots.</li>
            <li><strong>Soluciones que realmente usas</strong> — No te vendo funciones que no necesitas.</li>
            <li><strong>Comunicación directa</strong> — Trabajas conmigo, no con un equipo anónimo.</li>
            <li><strong>Entregas puntuales</strong> — Lo prometido en el tiempo acordado.</li>
            <li><strong>Soporte real</strong> — No desaparezco después de entregar.</li>
          </ul>
        </div>
      </div>

      <!-- STACK -->
      <div class="about-stack">
        <h2>Mi Stack Tecnológico</h2>
        <div class="stack-tags">
          <span class="stack-tag stack-tag--primary">TypeScript</span>
          <span class="stack-tag stack-tag--primary">Node.js</span>
          <span class="stack-tag stack-tag--primary">React</span>
          <span class="stack-tag stack-tag--primary">Express</span>
          <span class="stack-tag stack-tag--primary">NestJS</span>
          <span class="stack-tag stack-tag--secondary">PostgreSQL</span>
          <span class="stack-tag stack-tag--secondary">MongoDB</span>
          <span class="stack-tag stack-tag--secondary">Docker</span>
          <span class="stack-tag stack-tag--secondary">Azure</span>
        </div>
        <p class="stack-note">Tecnologías modernas, estables y escalables. Nada de modas pasajeras.</p>
      </div>
    </section>
  `;
}
