import { initAboutToggle } from "../scripts/aboutToggle";

export function renderAboutView(): string {
  setTimeout(initAboutToggle, 0);

  return `
    <section class="about-view">
      <header class="about-header">
        <h1>Sobre mí</h1>
        <p>Conoce mi perfil profesional y técnico</p>
      </header>

      <div class="about-selector">
        <button id="profile-professional" class="active">
          Perfil Profesional
        </button>
        <button id="profile-technical">
          Perfil Técnico
        </button>
      </div>

      <div id="about-content" class="about-content"></div>
    </section>
  `;
}
