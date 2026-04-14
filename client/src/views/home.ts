import { services } from "../data/services";
import { nichos } from "../data/about";
import { socialLinks } from "../data/social-links";
import { renderHomeCarousel, initAllCarousels } from "../components/ui/carousel";

const SERVICE_ICONS: Record<string, string> = {
  "clientes-historial": `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>`,
  "agenda-citas": `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>`,
  "mini-crm": `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
  </svg>`,
  "landing-whatsapp": `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>`,
};

const WHY_POINTS = [
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>`,
    title: "Proyectos en 4 semanas",
    text: "Sin tiempos infinitos. Tu solución lista para funcionar en máximo un mes.",
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="12" y1="1" x2="12" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>`,
    title: "Precios accesibles",
    text: "Tarifas justas para pequeños negocios. Pagas por lo que realmente necesitas.",
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>`,
    title: "Soporte incluido",
    text: "No desaparezco después de entregar. Estoy ahí cuando me necesites.",
  },
];

export function renderHomeView(): string {
  const whatsappLink = socialLinks.find((s) => s.name === "whatsapp")?.url ?? "#";

  const servicesCardsHTML = services
    .map(
      (s) => `
    <article class="service-summary-card">
      <div class="service-summary-icon">${SERVICE_ICONS[s.id] ?? ""}</div>
      <h3>${s.title}</h3>
      <p>${s.solution}</p>
      <a href="/services" data-route="/services" class="service-summary-link">Ver detalles →</a>
    </article>
  `
    )
    .join("");

  const nichosHTML = nichos
    .map(
      (n) => `
    <span class="niche-tag">${n}</span>
  `
    )
    .join("");

  const whyHTML = WHY_POINTS.map(
    (p) => `
    <div class="why-card">
      <div class="why-card-icon">${p.icon}</div>
      <h3>${p.title}</h3>
      <p>${p.text}</p>
    </div>
  `
  ).join("");

  return `

    <!-- HERO -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>Soluciones Web que Hacen Crecer tu Negocio</h1>
        <p>Transformo ideas en herramientas digitales que simplifican operaciones y aumentan ventas.</p>
        <a href="/services" data-route="/services" class="cta-button hero-cta">Ver Soluciones</a>
      </div>
    </section>

    <!-- CARRUSEL DE PROYECTOS -->
    ${renderHomeCarousel()}

    <!-- SERVICIOS RESUMEN -->
    <section class="services-section">
      <header>
        <h2>Lo que puedo hacer por ti</h2>
        <p>Sitios web + software administrativo personalizado para salones de belleza, veterinarias, academias, lavanderías y más.</p>
      </header>

      <div class="services-list">
        ${servicesCardsHTML}
      </div>
    </section>

    <!-- NICHOS -->
    <section class="niches-section">
      <h2>¿Para qué tipo de negocios?</h2>
      <p>Trabajo con pequeños negocios que necesitan organizarse por dentro y aparecer en internet.</p>
      <div class="niches-grid">
        ${nichosHTML}
      </div>
    </section>

    <!-- POR QUÉ CONMIGO -->
    <section class="why-section">
      <h2>¿Por qué conmigo?</h2>
      <p>Sin complicaciones. Soluciones que realmente usas todos los días.</p>
      <div class="why-grid">
        ${whyHTML}
      </div>
    </section>

    <!-- CTA FINAL -->
    <section class="cta-section">
      <h2>¿Tienes un proyecto en mente?</h2>
      <p>Cuéntame qué necesitas y te digo cómo puedo ayudarte. Sin compromiso.</p>
      <a href="${whatsappLink}" class="cta-button cta-whatsapp" target="_blank" rel="noopener noreferrer">
        Escríbeme por WhatsApp
      </a>
    </section>
  `;
}

export function initHomeView(): void {
  // Initialize carousel in home page
  initAllCarousels();
}
