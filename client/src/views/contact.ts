import { socialLinks } from "../data/social-links";

export function renderContactView(): string {
  const contactCardsHTML = socialLinks
    .map(
      (s) => `
    <a
      href="${s.url}"
      class="contact-card"
      ${s.name === "email" ? "" : 'target="_blank" rel="noopener noreferrer"'}
    >
      <div class="contact-card__icon">${s.icon}</div>
      <div class="contact-card__info">
        <span class="contact-card__label">${s.label}</span>
        <span class="contact-card__value">${s.name === "email" ? "jsoftsolutions1@gmail.com" : `Ir a ${s.label}`}</span>
      </div>
      <svg class="contact-card__arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <line x1="5" y1="12" x2="19" y2="12"/>
        <polyline points="12 5 19 12 12 19"/>
      </svg>
    </a>
  `
    )
    .join("");

  return `
    <section class="page page-contact">

      <header class="contact-page-header">
        <h1>Conectemos</h1>
        <p>¿Tienes un proyecto en mente? Hablemos.</p>
      </header>

      <div class="contact-cards">
        ${contactCardsHTML}
      </div>

      <p class="contact-response-note">Respondo en menos de 24 horas.</p>

    </section>
  `;
}
