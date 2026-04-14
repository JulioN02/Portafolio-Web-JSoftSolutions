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
   • Placeholder images (SVG inline)
   ════════════════════════════════════════════════════════════════════ */

// ────────────────────────────────────────────────────────────────
// TIPOS
// ────────────────────────────────────────────────────────────────

export type CarouselSlide = {
  id: string;
  title: string;
  description: string;
  /** Color de fondo del placeholder (hex sin #) */
  bgColor: string;
  /** SVG icon inline para el placeholder */
  icon: string;
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
// PLACEHOLDER SLIDES POR DEFECTO (Proyectos/Servicios)
// ────────────────────────────────────────────────────────────────

const PROJECT_SLIDES: CarouselSlide[] = [
  {
    id: "project-1",
    title: "Sistema de Clientes",
    description: "Historial completo, pagos y facturación para salones de belleza.",
    bgColor: "192950",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>`,
  },
  {
    id: "project-2",
    title: "Agenda Online",
    description: "Reservas automáticas y recordatorios por WhatsApp.",
    bgColor: "21497B",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>`,
  },
  {
    id: "project-3",
    title: "Mini CRM",
    description: "Seguimiento de leads y pipeline de ventas organizado.",
    bgColor: "25609D",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="18" y1="20" x2="18" y2="10"/>
      <line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/>
    </svg>`,
  },
  {
    id: "project-4",
    title: "Landing Page",
    description: "Página profesional con WhatsApp integrado para contacto inmediato.",
    bgColor: "3E985D",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>`,
  },
  {
    id: "project-5",
    title: "Control de Inventario",
    description: "Stock en tiempo real con alertas de reposición automática.",
    bgColor: "7CBD68",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
      <line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>`,
  },
  {
    id: "project-6",
    title: "Reportes y Analytics",
    description: "Datos claros para tomar mejores decisiones de negocio.",
    bgColor: "128C7E",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>`,
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
      <div class="carousel-slide__placeholder" style="background-color: #${slide.bgColor}">
        <div class="carousel-slide__icon">${slide.icon}</div>
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
    sectionTitle: "Proyectos y Soluciones",
    sectionSubtitle: "Algunos ejemplos de lo que puedo construir para tu negocio.",
    autoPlayInterval: 5000,
    className: "carousel-section--home",
  });
}

export function renderServicesCarousel(): string {
  return renderCarousel({
    id: "services-examples",
    slides: PROJECT_SLIDES.slice(0, 4),
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
