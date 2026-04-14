import { socialLinks } from "../data/social-links";
import contactImage from "../assets/images/contacto.png";

export function renderContactView(): string {
  const contactCardsHTML = socialLinks
    .map((s) => {
      const isWhatsApp = s.name === "whatsapp";
      const isEmail = s.name === "email";
      return `
        <a
          href="${s.url}"
          class="contact-card ${isWhatsApp ? 'contact-card--primary' : ''}"
          aria-label="Contactar por ${s.label}"
          ${isEmail ? "" : 'target="_blank" rel="noopener noreferrer"'}
        >
          <div class="contact-card-icon" aria-hidden="true">${s.icon}</div>
          <div class="contact-card-content">
            <span class="contact-card-label">${s.label}</span>
            <span class="contact-card-value">
              ${isWhatsApp ? "+57 312 293 9515" : isEmail ? "jsoftsolutions1@gmail.com" : `Visitar ${s.label}`}
            </span>
          </div>
          <svg class="contact-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
      `;
    })
    .join("");

  return `
    <section class="page page-contact">
      <!-- HERO CON IMAGEN -->
      <div class="contact-hero">
        <div class="contact-hero-image">
          <img src="${contactImage}" alt="Contacto J-Soft Solutions" loading="lazy">
        </div>
        <div class="contact-hero-content">
          <span class="contact-badge">¿Hablamos?</span>
          <h1>Conectemos</h1>
          <p>¿Tienes un proyecto en mente? Cuéntame qué necesitas y en 5 minutos te digo exactamente cómo puedo ayudarte.</p>
        </div>
      </div>

      <!-- CONTENIDO -->
      <div class="contact-content">
        <div class="contact-cards">
          ${contactCardsHTML}
        </div>

        <div class="contact-info">
          <div class="info-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span>Respondo en menos de 24 horas</span>
          </div>
          <div class="info-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span>Consulta inicial sin compromiso</span>
          </div>
        </div>
      </div>
    </section>
  `;
}
