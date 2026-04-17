/* ════════════════════════════════════════════════════════════════════
   CAROUSEL.TS - Carrusel de imágenes vanilla JS
   JSoft Solutions - Portfolio Redesign Phase 4

   Características:
   • Vanilla JS (sin librerías externas)
   • Auto-play opcional con pausa en hover
   • Controles prev/next + indicadores de posición (dots)
   • Responsive (mobile: 1 slide, tablet: 2, desktop: 3)
   • Transiciones suaves con CSS
   • Accesible (ARIA labels, navegación por teclado)
   • Imágenes reales de maquetas (desktop + mobile superpuesto)
   ════════════════════════════════════════════════════════════════════ */

// ────────────────────────────────────────────────────────────────
// IMPORTS - Imágenes de maquetas
// ────────────────────────────────────────────────────────────────

import agendaDesktop from "../../assets/images/maquetas/agenda-desktop.png";
import agendaMobile from "../../assets/images/maquetas/agenda-mobile.png";
import crmDesktop from "../../assets/images/maquetas/crm-desktop.png";
import crmMobile from "../../assets/images/maquetas/crm-mobile.png";
import inventarioDesktop from "../../assets/images/maquetas/inventario-desktop.png";
import inventarioMobile from "../../assets/images/maquetas/inventario-mobile.png";
import dashboardDesktop from "../../assets/images/maquetas/dashboard-desktop.png";
import dashboardMobile from "../../assets/images/maquetas/dashboard-mobile.png";
import formularioDesktop from "../../assets/images/maquetas/formulario-desktop.png";
import formularioMobile from "../../assets/images/maquetas/formulario-mobile.png";
import landingDesktop from "../../assets/images/maquetas/landing-desktop.png";
import landingMobile from "../../assets/images/maquetas/landing-mobile.png";
import trackingDesktop from "../../assets/images/maquetas/tracking-desktop.png";
import trackingMobile from "../../assets/images/maquetas/tracking-mobile.png";
import administracionDesktop from "../../assets/images/maquetas/administracion-desktop.png";
import administracionMobile from "../../assets/images/maquetas/administracion-mobile.png";
import facturacionDesktop from "../../assets/images/maquetas/facturacion-desktop.png";
import facturacionMobile from "../../assets/images/maquetas/facturacion-mobile.png";

// ────────────────────────────────────────────────────────────────
// TIPOS
// ────────────────────────────────────────────────────────────────

export type CarouselSlide = {
  id: string;
  title: string;
  description: string;
  /** Imagen desktop (horizontal) */
  desktopImage: string;
  /** Imagen mobile (vertical) */
  mobileImage: string;
};

export type CarouselConfig = {
  /** Identificador único del carrusel (para múltiples instancias) */
  id: string;
  /** Slides a mostrar */
  slides: CarouselSlide[];
  /** Título de la sección del carrusel */
  sectionTitle?: string;
  /** Subtítulo de la sección */
  sectionSubtitle?: string;
  /** Auto-play: intervalo en ms (0 = desactivado, default: 5000) */
  autoPlayInterval?: number;
  /** Clase CSS adicional para la sección */
  className?: string;
};

// ────────────────────────────────────────────────────────────────
// SLIDES POR DEFECTO (9 ejemplos de sistemas)
// ────────────────────────────────────────────────────────────────

const PROJECT_SLIDES: CarouselSlide[] = [
  {
    id: "agenda",
    title: "Agenda",
    description: "Reservas automáticas, horarios en tiempo real y recordatorios por WhatsApp.",
    desktopImage: agendaDesktop,
    mobileImage: agendaMobile,
  },
  {
    id: "crm",
    title: "Registro e Historial",
    description: "Ficha completa con datos personales, historial de servicios y preferencias.",
    desktopImage: crmDesktop,
    mobileImage: crmMobile,
  },
  {
    id: "inventario",
    title: "Control de Inventario",
    description: "Stock actualizado al instante, alertas de productos bajos y control de entradas y salidas.",
    desktopImage: inventarioDesktop,
    mobileImage: inventarioMobile,
  },
  {
    id: "dashboard",
    title: "Dashboard",
    description: "Vista general del negocio con gráficos de ventas, clientes e ingresos.",
    desktopImage: dashboardDesktop,
    mobileImage: dashboardMobile,
  },
  {
    id: "formulario",
    title: "Formulario",
    description: "Captura de datos organizada, campos personalizados y exportación a reportes.",
    desktopImage: formularioDesktop,
    mobileImage: formularioMobile,
  },
  {
    id: "landing",
    title: "Página Web",
    description: "Página moderna responsive, optimizada para SEO y botón de WhatsApp integrado.",
    desktopImage: landingDesktop,
    mobileImage: landingMobile,
  },
  {
    id: "tracking",
    title: "Seguimiento de Pedidos",
    description: "Estado del pedido en cada etapa, notificaciones y registro completo.",
    desktopImage: trackingDesktop,
    mobileImage: trackingMobile,
  },
  {
    id: "administracion",
    title: "Administración",
    description: "Gestión centralizada de usuarios, permisos y configuraciones del sistema.",
    desktopImage: administracionDesktop,
    mobileImage: administracionMobile,
  },
  {
    id: "facturacion",
    title: "Facturación",
    description: "Generación de facturas, control de deudas, historial de pagos y caja simplificada.",
    desktopImage: facturacionDesktop,
    mobileImage: facturacionMobile,
  },
];

// ────────────────────────────────────────────────────────────────
// RENDER
// ────────────────────────────────────────────────────────────────

export function renderCarousel(config: CarouselConfig): string {
  const {
    id,
    slides,
    sectionTitle,
    sectionSubtitle,
    className = "",
  } = config;

  const slidesHTML = slides
    .map(
      (slide, index) => `
    <div class="carousel-slide"
         role="group"
         aria-roledescription="slide"
         aria-label="${index + 1} de ${slides.length}"
         data-slide-index="${index}">
      <div class="carousel-slide__images">
        <div class="carousel-slide__image-desktop">
          <img src="${slide.desktopImage}" alt="${slide.title} - Vista desktop" loading="lazy">
        </div>
        <div class="carousel-slide__image-mobile">
          <img src="${slide.mobileImage}" alt="${slide.title} - Vista mobile" loading="lazy">
        </div>
      </div>
      <div class="carousel-slide__content">
        <h3 class="carousel-slide__title">${slide.title}</h3>
        <p class="carousel-slide__description">${slide.description}</p>
      </div>
    </div>
  `
    )
    .join("");

  const dotsHTML = slides
    .map(
      (_slide, index) => `
    <button class="carousel-dot${index === 0 ? " carousel-dot--active" : ""}"
            type="button"
            role="tab"
            aria-selected="${index === 0 ? "true" : "false"}"
            aria-label="Ir al slide ${index + 1}"
            data-carousel-dot="${index}"
            data-carousel-id="${id}">
    </button>
  `
    )
    .join("");

  const headerHTML =
    sectionTitle || sectionSubtitle
      ? `
    <header class="carousel-header">
      ${sectionTitle ? `<h2 class="carousel-header__title">${sectionTitle}</h2>` : ""}
      ${sectionSubtitle ? `<p class="carousel-header__subtitle">${sectionSubtitle}</p>` : ""}
    </header>
  `
      : "";

  return `
    <section class="carousel-section ${className}" data-carousel-id="${id}">
      ${headerHTML}
      <div class="carousel"
           role="region"
           aria-roledescription="carrusel"
           aria-label="${sectionTitle || "Galería de proyectos"}">

        <!-- Contenedor de slides -->
        <div class="carousel-track" data-carousel-track="${id}">
          ${slidesHTML}
        </div>

        <!-- Controles prev/next -->
        <button class="carousel-nav carousel-nav--prev"
                type="button"
                aria-label="Slide anterior"
                data-carousel-prev="${id}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <button class="carousel-nav carousel-nav--next"
                type="button"
                aria-label="Slide siguiente"
                data-carousel-next="${id}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>

        <!-- Indicadores de posición (dots) -->
        <div class="carousel-dots" role="tablist" aria-label="Slides del carrusel">
          ${dotsHTML}
        </div>
      </div>
    </section>
  `;
}

// ────────────────────────────────────────────────────────────────
// PRESETS - Configuraciones predefinidas
// ────────────────────────────────────────────────────────────────

export function renderHomeCarousel(): string {
  return renderCarousel({
    id: "home-projects",
    slides: PROJECT_SLIDES,
    sectionTitle: "Ejemplos de Sistemas",
    sectionSubtitle: "Algunos ejemplos de lo que puedo construir para tu negocio.",
    autoPlayInterval: 5000,
    className: "carousel-section--home",
  });
}

export function renderServicesCarousel(): string {
  return renderCarousel({
    id: "services-examples",
    slides: PROJECT_SLIDES.slice(0, 6),
    sectionTitle: "Ejemplos de Soluciones",
    sectionSubtitle: "Cada paquete se adapta a las necesidades reales de tu negocio.",
    autoPlayInterval: 6000,
    className: "carousel-section--services",
  });
}

// ────────────────────────────────────────────────────────────────
// LÓGICA INTERACTIVA (init)
// ────────────────────────────────────────────────────────────────

export function initCarousel(carouselId: string): void {
  const track = document.querySelector<HTMLElement>(
    `[data-carousel-track="${carouselId}"]`
  );
  const prevBtn = document.querySelector<HTMLElement>(
    `[data-carousel-prev="${carouselId}"]`
  );
  const nextBtn = document.querySelector<HTMLElement>(
    `[data-carousel-next="${carouselId}"]`
  );
  const dots = document.querySelectorAll<HTMLElement>(
    `[data-carousel-id="${carouselId}"][data-carousel-dot]`
  );

  if (!track || !prevBtn || !nextBtn || dots.length === 0) return;

  // Non-null aliases for use in closures (guaranteed by guard above)
  const _track: HTMLElement = track;
  const _prevBtn: HTMLElement = prevBtn;
  const _nextBtn: HTMLElement = nextBtn;

  const slides = _track.querySelectorAll<HTMLElement>(".carousel-slide");
  const totalSlides = slides.length;
  let currentIndex = 0;
  let autoPlayTimer: ReturnType<typeof setInterval> | null = null;
  let isHovered = false;

  // Determinar slides visibles según viewport
  function getVisibleSlides(): number {
    const width = window.innerWidth;
    if (width >= 1024) return 3;
    if (width >= 768) return 2;
    return 1;
  }

  // Calcular el índice máximo permitido
  function getMaxIndex(): number {
    const visible = getVisibleSlides();
    return Math.max(0, totalSlides - visible);
  }

  // Mover el carrusel
  function goToSlide(index: number): void {
    const maxIndex = getMaxIndex();
    currentIndex = Math.max(0, Math.min(index, maxIndex));

    // Calcular porcentaje de desplazamiento
    const visible = getVisibleSlides();
    const slideWidth = 100 / visible;
    const offset = currentIndex * slideWidth;

    _track.style.transform = `translateX(-${offset}%)`;

    // Actualizar dots
    dots.forEach((dot, i) => {
      const isActive = i === currentIndex;
      dot.classList.toggle("carousel-dot--active", isActive);
      dot.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    // Actualizar botones de navegación
    _prevBtn.setAttribute("aria-disabled", currentIndex === 0 ? "true" : "false");
    _nextBtn.setAttribute(
      "aria-disabled",
      currentIndex >= maxIndex ? "true" : "false"
    );
  }

  function nextSlide(): void {
    const maxIndex = getMaxIndex();
    goToSlide(currentIndex >= maxIndex ? 0 : currentIndex + 1);
  }

  function prevSlide(): void {
    const maxIndex = getMaxIndex();
    goToSlide(currentIndex <= 0 ? maxIndex : currentIndex - 1);
  }

  // Auto-play
  function startAutoPlay(): void {
    stopAutoPlay();
    autoPlayTimer = setInterval(() => {
      if (!isHovered) nextSlide();
    }, 5000);
  }

  function stopAutoPlay(): void {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  }

  // Event listeners
  _prevBtn.addEventListener("click", () => {
    prevSlide();
    // Reiniciar auto-play después de interacción manual
    startAutoPlay();
  });

  _nextBtn.addEventListener("click", () => {
    nextSlide();
    startAutoPlay();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      goToSlide(index);
      startAutoPlay();
    });
  });

  // Pausar auto-play en hover
  const carouselEl = _track.closest(".carousel");
  if (carouselEl) {
    carouselEl.addEventListener("mouseenter", () => {
      isHovered = true;
    });
    carouselEl.addEventListener("mouseleave", () => {
      isHovered = false;
    });
  }

  // Navegación por teclado
  const carousel = _track.closest(".carousel");
  if (carousel) {
    carousel.addEventListener("keydown", (e: Event) => {
      const keyEvent = e as KeyboardEvent;
      if (keyEvent.key === "ArrowLeft") {
        prevSlide();
        startAutoPlay();
      } else if (keyEvent.key === "ArrowRight") {
        nextSlide();
        startAutoPlay();
      }
    });
  }

  // Recalcular en resize
  let resizeTimeout: ReturnType<typeof setTimeout>;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      goToSlide(Math.min(currentIndex, getMaxIndex()));
    }, 150);
  });

  // Inicializar
  goToSlide(0);
  startAutoPlay();
}

// Inicializar todos los carruseles de la página actual
export function initAllCarousels(): void {
  document.querySelectorAll<HTMLElement>("[data-carousel-id]").forEach((section) => {
    const id = section.getAttribute("data-carousel-id");
    if (id) initCarousel(id);
  });
}
