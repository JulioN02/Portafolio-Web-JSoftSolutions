import { services } from "../data/services";
import { nichos } from "../data/about";
import { socialLinks } from "../data/social-links";
import { renderServicesCarousel, initAllCarousels } from "../components/ui/carousel";

const PROCESS_STEPS = [
  {
    step: "1",
    title: "Me cuentas qué necesitas",
    text: "Sin tecnicismos. Solo dime cómo funciona tu negocio y qué problema quieres resolver.",
  },
  {
    step: "2",
    title: "Te propongo una solución concreta",
    text: "Sin vender más de lo que necesitas. Con alcance claro y definido.",
  },
  {
    step: "3",
    title: "Desarrollo y te mantengo al tanto",
    text: "Avances reales. Comunicación directa. Sin desaparecer a mitad del proyecto.",
  },
  {
    step: "4",
    title: "Entrega y revisión",
    text: "Recibes algo que funciona desde el día uno. Con espacio para ajustes.",
  },
];

export function renderServicesView(): string {
  const whatsappLink = socialLinks.find((s) => s.name === "whatsapp")?.url ?? "#";

  const packagesHTML = services
    .map(
      (s) => `
    <article class="service-package">
      <div class="service-package__header">
        <h3>${s.title}</h3>
      </div>
      <div class="service-package__body">
        <div class="service-package__block service-package__problem">
          <span class="service-package__label">Problema</span>
          <p>${s.problem}</p>
        </div>
        <div class="service-package__block service-package__solution">
          <span class="service-package__label">Solución</span>
          <p>${s.solution}</p>
        </div>
        <div class="service-package__block service-package__benefits">
          <span class="service-package__label">Beneficios</span>
          <p>${s.benefits}</p>
        </div>
        <div class="service-package__includes">
          <span class="service-package__label">Incluye</span>
          <ul>
            ${s.includes.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      </div>
      <div class="service-package__cta">
        <a href="${whatsappLink}" class="cta-button" target="_blank" rel="noopener noreferrer">
          Consultar por WhatsApp
        </a>
      </div>
    </article>
  `
    )
    .join("");

  const nichosHTML = nichos.map((n) => `<span class="niche-tag">${n}</span>`).join("");

  const processHTML = PROCESS_STEPS.map(
    (p) => `
    <div class="process-step">
      <div class="process-step__number">${p.step}</div>
      <h3>${p.title}</h3>
      <p>${p.text}</p>
    </div>
  `
  ).join("");

  return `
    <section class="page page-services">

      <!-- HEADER -->
      <header class="services-page-header">
        <h1>Soluciones que Resuelven Problemas Reales</h1>
        <p>Cada paquete está pensado para resolver un problema específico de tu negocio. Sin rodeos.</p>
      </header>

      <!-- PAQUETES -->
      <div class="services-packages">
        ${packagesHTML}
      </div>

      <!-- CARRUSEL DE EJEMPLOS -->
      ${renderServicesCarousel()}

      <!-- NICHOS -->
      <section class="niches-section">
        <h2>¿Para qué negocios?</h2>
        <p>Trabajo con pequeños negocios que quieren crecer de forma ordenada.</p>
        <div class="niches-grid">
          ${nichosHTML}
        </div>
      </section>

      <!-- PROCESO -->
      <section class="process-section">
        <h2>Así funciona el proceso</h2>
        <div class="process-grid">
          ${processHTML}
        </div>
      </section>

      <!-- CTA FINAL -->
      <section class="cta-section">
        <h2>¿Listo para empezar?</h2>
        <p>Cuéntame qué necesitas y te digo cómo puedo ayudarte.</p>
        <a href="${whatsappLink}" class="cta-button cta-whatsapp" target="_blank" rel="noopener noreferrer">
          Escríbeme por WhatsApp
        </a>
      </section>

    </section>
  `;
}

export function initServicesView(): void {
  // Initialize carousel in services page
  initAllCarousels();
}
