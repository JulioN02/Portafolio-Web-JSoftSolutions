import { servicePackages, nichosNivel1, processSteps } from "../data/services";
import { socialLinks } from "../data/social-links";
import { renderServicesCarousel, initAllCarousels } from "../components/ui/carousel";
import servicesImage from "../assets/images/servicios.png";

const PACKAGE_ICONS: Record<string, string> = {
  "visibilidad-express": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  "software-basico": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  "software-pro": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
  "combo-ganador": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
};

export function renderServicesView(): string {
  const whatsappLink = socialLinks.find((s) => s.name === "whatsapp")?.url ?? "#";

  const packagesHTML = servicePackages
    .map((pkg) => `
      <article class="service-detail-card ${pkg.popular ? 'service-detail-card--popular' : ''}">
        <div class="service-detail-header">
          ${pkg.popular ? '<span class="popular-badge">Más Popular</span>' : ''}
          <div class="service-detail-icon">${PACKAGE_ICONS[pkg.id] ?? ""}</div>
          <span class="service-detail-package">${pkg.name}</span>
          <h2 class="service-detail-title">${pkg.title}</h2>
          <p class="service-detail-subtitle">${pkg.subtitle}</p>
        </div>
        
        <div class="service-detail-body">
          <p class="service-detail-description">${pkg.description}</p>
          
          <div class="service-detail-includes">
            <h4>Incluye:</h4>
            <ul>
              ${pkg.includes.map((item) => `<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>${item}</li>`).join("")}
            </ul>
          </div>
          
          <div class="service-detail-meta">
            <div class="meta-item">
              <span class="meta-label">Inversión:</span>
              <span class="meta-value price">${pkg.price}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Mantenimiento:</span>
              <span class="meta-value">${pkg.maintenance}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Entrega:</span>
              <span class="meta-value">${pkg.deliveryTime}</span>
            </div>
          </div>
          
          <div class="service-detail-ideal">
            <strong>Ideal para:</strong> ${pkg.idealFor}
          </div>
        </div>
        
        <div class="service-detail-footer">
          <a href="${whatsappLink}" class="btn btn-whatsapp btn-full" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Consultar este paquete
          </a>
        </div>
      </article>
    `)
    .join("");

  const nichosHTML = nichosNivel1.map((n) => `<span class="niche-tag">${n}</span>`).join("");

  const processHTML = processSteps
    .map((p) => `
      <div class="process-step">
        <div class="process-step-number">${p.step}</div>
        <div class="process-step-content">
          <h3>${p.title}</h3>
          <p>${p.description}</p>
        </div>
      </div>
    `)
    .join("");

  return `
    <section class="page page-services">
      <!-- HERO CON IMAGEN -->
      <div class="services-hero">
        <div class="services-hero-image">
          <img src="${servicesImage}" alt="Servicios J-Soft Solutions" loading="lazy">
        </div>
        <div class="services-hero-content">
          <h1>Soluciones que Resuelven Problemas Reales</h1>
          <p>4 paquetes claros. Sin rodeos. Elige el que mejor se adapte a tu negocio.</p>
        </div>
      </div>

      <!-- PAQUETES -->
      <div class="services-packages-grid">
        ${packagesHTML}
      </div>

      <!-- CARRUSEL -->
      ${renderServicesCarousel()}

      <!-- NICHOS -->
      <section class="niches-section">
        <div class="section-header">
          <h2>¿Para qué negocios?</h2>
          <p>Estos son los negocios con los que trabajo mejor.</p>
        </div>
        <div class="niches-grid">
          ${nichosHTML}
        </div>
      </section>

      <!-- PROCESO -->
      <section class="process-section">
        <div class="section-header">
          <h2>Así funciona el proceso</h2>
          <p>4 pasos simples desde que me contactas hasta que tienes tu sistema funcionando.</p>
        </div>
        <div class="process-grid">
          ${processHTML}
        </div>
      </section>

      <!-- CTA FINAL -->
      <section class="cta-section">
        <div class="cta-content">
          <h2>¿Listo para empezar?</h2>
          <p>Cuéntame qué necesitas y te digo exactamente qué paquete te conviene.</p>
          <a href="${whatsappLink}" class="btn btn-whatsapp btn-large" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Escribir por WhatsApp
          </a>
        </div>
      </section>
    </section>
  `;
}

export function initServicesView(): void {
  initAllCarousels();
}
