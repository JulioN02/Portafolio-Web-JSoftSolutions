import { servicePackages, nichosNivel1, nichosNivel2, whyPoints } from "../data/services";
import { createWhatsAppLink, whatsappMessages } from "../data/social-links";
import { renderHomeCarousel, initAllCarousels } from "../components/ui/carousel";
import heroImage from "../assets/images/heroinicio.png";

const PACKAGE_ICONS: Record<string, string> = {
  "visibilidad-express": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  "software-basico": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  "software-pro": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
  "combo-ganador": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
};

const WHY_ICONS: Record<string, string> = {
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  price: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  support: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  unique: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
};

export function renderHomeView(): string {
  const whatsappLink = createWhatsAppLink(whatsappMessages.general);

  const packagesHTML = servicePackages
    .map((pkg) => `
      <article class="package-card ${pkg.popular ? 'package-card--popular' : ''}">
        ${pkg.popular ? '<span class="package-badge">Más Popular</span>' : ''}
        <div class="package-icon">${PACKAGE_ICONS[pkg.id] ?? ""}</div>
        <span class="package-name">${pkg.name}</span>
        <h3 class="package-title">${pkg.title}</h3>
        <p class="package-subtitle">${pkg.subtitle}</p>
        <div class="package-price">${pkg.price}</div>
        <a href="/services" data-route="/services" class="btn btn-primary">Ver detalles</a>
      </article>
    `)
    .join("");

  // Fila 1 - va hacia la izquierda
  const nichosRow1HTML = nichosNivel1
    .map((n) => `<span class="niche-marquee-item">${n}</span>`)
    .join("");
  const nichosRow1Content = nichosRow1HTML + nichosRow1HTML;

  // Fila 2 - va hacia la derecha (dirección contraria)
  const nichosRow2HTML = nichosNivel2
    .map((n) => `<span class="niche-marquee-item">${n}</span>`)
    .join("");
  const nichosRow2Content = nichosRow2HTML + nichosRow2HTML;

  const whyHTML = whyPoints
    .map((p) => `
      <div class="why-card">
        <div class="why-card-icon">${WHY_ICONS[p.icon] ?? ""}</div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
      </div>
    `)
    .join("");

  return `
    <!-- HERO -->
    <section class="hero-section" aria-label="Introducción" style="background-image: url('${heroImage}');">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-badges">
          <span class="hero-badge">Ingeniero de Sistemas</span>
          <span class="hero-badge">Desarrollador de Software</span>
        </div>
        <h1>¿Quieres que más clientes te encuentren y tu negocio funcione con orden?</h1>
        <p class="hero-subtitle"><span class="text-highlight">Página web moderna</span> + <span class="text-highlight">software administrativo</span> personalizado para salones de belleza, barberías, veterinarias, academias, lavanderías y más negocios locales.</p>
        <p class="hero-description">Fácil de usar. Sin complicaciones. <span class="text-highlight">Resultados desde el primer día.</span></p>
        <div class="hero-ctas">
          <a href="${whatsappLink}" class="btn btn-whatsapp btn-large" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Quiero mi sistema personalizado
          </a>
          <a href="/services" data-route="/services" class="btn btn-outline btn-large">Ver paquetes</a>
        </div>
      </div>
    </section>

    <!-- CARRUSEL -->
    ${renderHomeCarousel()}

    <!-- SERVICIOS -->
    <section class="packages-section" aria-label="Paquetes de servicios">
      <header class="section-header">
        <h2>Elige el paquete que mejor se adapte a tu negocio</h2>
        <p>4 opciones claras. Sin paquetes raros ni funciones que no usarás.</p>
      </header>

      <div class="packages-grid">
        ${packagesHTML}
      </div>
    </section>

    <!-- NICHOS - MARQUEE INFINITO -->
    <section class="niches-section">
      <div class="section-header">
        <h2>¿Para qué negocios?</h2>
        <p>Estos son los negocios con los que trabajo mejor. ¿El tuyo no está? Contáctame igual.</p>
      </div>
      <div class="niches-marquee-wrapper">
        <!-- Fila 1: izquierda a derecha -->
        <div class="niches-marquee">
          <div class="niches-marquee-content nichos-row-1">
            ${nichosRow1Content}
          </div>
        </div>
        <!-- Fila 2: derecha a izquierda (dirección contraria) -->
        <div class="niches-marquee">
          <div class="niches-marquee-content nichos-row-2">
            ${nichosRow2Content}
          </div>
        </div>
      </div>
    </section>

    <!-- POR QUÉ CONMIGO -->
    <section class="why-section">
      <div class="section-header">
        <h2>¿Por qué trabajar conmigo?</h2>
        <p>Sin complicaciones. Soluciones que realmente usas todos los días.</p>
      </div>
      <div class="why-grid">
        ${whyHTML}
      </div>
    </section>

    <!-- CTA FINAL -->
    <section class="cta-section" aria-label="Llamada a la acción">
      <div class="cta-content">
        <h2>¿Quieres que tu negocio deje de depender solo del boca a boca?</h2>
        <p>Mándame un mensaje por WhatsApp ahora y en 5 minutos te digo exactamente qué paquete te conviene.</p>
        <a href="${whatsappLink}" class="btn btn-whatsapp btn-large" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Escribir por WhatsApp
        </a>
      </div>
    </section>
  `;
}

export function initHomeView(): void {
  initAllCarousels();
}
