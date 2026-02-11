import { initAboutToggle } from "../scripts/aboutToggle";

export function renderAboutView(): string {
  const html = `
    <section class="about-view">
      <header class="about-header">
        <h1>J-Soft Solutions · Ingeniería Web Estructurada</h1>
          <p>
            J-Soft Solutions es la expresión de una visión técnica aplicada al desarrollo web.
            Como desarrollador Fullstack, construyo soluciones con arquitectura clara,
            separación por capas y enfoque en escalabilidad, combinando frontend, backend y modelo de datos
            en sistemas coherentes y mantenibles.
          </p>
      </header>


      <div class="about-selector">
        <button 
          id="profile-professional" 
          class="about-btn active" 
          data-profile="professional">
          J-Soft Solution
        </button>

        <button 
          id="profile-technical" 
          class="about-btn" 
          data-profile="technical">
          Julio Manuel Martinez
        </button>
      </div>

      <div id="about-content" class="about-content"></div>
    </section>
  `;

  queueMicrotask(() => {
    initAboutToggle();
  });

  return html;
}
