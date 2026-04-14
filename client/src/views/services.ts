import { services } from "../data/services";
import { renderPageHeader } from "../components/sections/pageHeader";
import { renderServiceCard } from "../components/cards/serviceCard";
import servicesBg from "../assets/images/servicesHome.png";

export function renderServicesView(): string {
  const servicesHTML = services
    .map((service) =>
      renderServiceCard({
        id: service.id,
        title: service.title,
        description: service.description,
      })
    )
    .join("");

  return `
    <section class="page page-services">
      ${renderPageHeader({
        title: "Servicios",
        description: `
          Trabajo con pequeñas empresas y locales que quieren crecer de forma ordenada.<br><br>
          Ofrezco dos tipos de soluciones: presencia web profesional y software administrativo hecho a la medida de tu operación.<br><br>
          Sin sobrecomplicar. Sin cobrar lo que no necesitas.
        `,
        bgImage: servicesBg,
      })}

      <div class="page-content services-list">
        ${servicesHTML}
      </div>

      <!-- SECCIÓN — Cómo trabajo -->
      <section class="process-section" style="padding: 4rem 2rem; max-width: 1000px; margin: 0 auto;">
        <h2 style="text-align: center; margin-bottom: 3rem;">Así funciona el proceso</h2>
        
        <div class="process-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem;">
          <div class="process-step">
            <h3>1. Me cuentas qué necesitas</h3>
            <p>Sin tecnicismos. Solo dime cómo funciona tu negocio y qué problema quieres resolver.</p>
          </div>
          
          <div class="process-step">
            <h3>2. Te propongo una solución concreta</h3>
            <p>Sin vender más de lo que necesitas. Con alcance claro y precio definido.</p>
          </div>
          
          <div class="process-step">
            <h3>3. Desarrollo y te mantengo al tanto</h3>
            <p>Avances reales. Comunicación directa. Sin desaparecer a mitad del proyecto.</p>
          </div>
          
          <div class="process-step">
            <h3>4. Entrega y revisión</h3>
            <p>Recibes algo que funciona desde el día uno. Con espacio para ajustes dentro del alcance.</p>
          </div>
        </div>
      </section>
    </section>
  `;
}

export function initServicesView(): void {
  const container = document.querySelector(".services-list");

  if (!container) return;

  container.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;

    if (!target.matches("button[data-service-id]")) return;

    const serviceId = target.getAttribute("data-service-id");
    if (!serviceId) return;

    location.hash = `#/services/${serviceId}`;
  });
}

