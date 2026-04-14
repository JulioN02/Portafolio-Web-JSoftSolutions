import { professionalProfile, personalProfile } from "../data/about";
import { socialLinks } from "../data/social-links";

export function renderAboutView(): string {
  const socialsHTML = socialLinks
    .map(
      (s) => `
    <a
      href="${s.url}"
      class="about-social-link"
      aria-label="${s.label}"
      target="_blank"
      rel="noopener noreferrer"
      title="${s.label}"
    >
      ${s.icon}
      <span>${s.label}</span>
    </a>
  `
    )
    .join("");

  const professionalSectionsHTML = professionalProfile.sections
    .map(
      (sec) => `
    <div class="about-section">
      <h3>${sec.title}</h3>
      ${sec.paragraphs.map((p) => `<p>${p}</p>`).join("")}
    </div>
  `
    )
    .join("");

  const personalSectionsHTML = personalProfile.sections
    .map(
      (sec) => `
    <div class="about-section">
      <h3>${sec.title}</h3>
      ${sec.paragraphs.map((p) => `<p>${p}</p>`).join("")}
    </div>
  `
    )
    .join("");

  return `
    <section class="about-view">

      <!-- HEADER -->
      <header class="about-header">
        <h1>Sobre mí</h1>
        <p>Te ayudo a que tu negocio aparezca en internet y se organice por dentro.</p>
      </header>

      <!-- J-SOFT SOLUTIONS -->
      <div class="about-profile">
        <div class="about-profile__header">
          <h2>${professionalProfile.name}</h2>
          <p class="about-profile__tagline">${professionalProfile.tagline}</p>
        </div>
        <div class="about-profile__sections">
          ${professionalSectionsHTML}
        </div>
      </div>

      <!-- JULIO MARTINEZ -->
      <div class="about-profile">
        <div class="about-profile__header">
          <h2>${personalProfile.name}</h2>
          <p class="about-profile__tagline">${personalProfile.tagline}</p>
        </div>
        <div class="about-profile__sections">
          ${personalSectionsHTML}
        </div>
      </div>

      <!-- REDES SOCIALES -->
      <div class="about-socials">
        <h2>Encuéntrame en</h2>
        <div class="about-socials-grid">
          ${socialsHTML}
        </div>
      </div>

    </section>
  `;
}
