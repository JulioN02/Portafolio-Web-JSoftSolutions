/**
 * Header Component
 * Ubicación: src/components/layout/header.ts
 * 
 * Responsabilidad:
 * - Renderizar estructura HTML del header
 * - Proporcionar markup semántico y accesible
 * - Incluir hooks para interacción JavaScript (clases, data-* attrs)
 * 
 * No contiene: lógica de eventos, estilos, comportamientos dinámicos
 */

export function renderHeader(): string {
  return `
    <header class="site-header" role="banner">
      <div class="site-header__inner">
        <!-- Logo / Marca -->
        <a href="/" class="site-header__logo" title="Volver a inicio">
          <span class="site-header__logo-text">J-Soft Solutions</span>
        </a>

        <!-- Toggle Botón para Menú Móvil -->
        <button 
          class="site-header__toggle" 
          aria-label="Abrir menú de navegación"
          aria-expanded="false"
          aria-controls="site-nav"
          type="button"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>

        <!-- Navegación Principal -->
        <nav class="site-nav" id="site-nav">
          <ul class="site-header__nav">
            <li>
              <a 
                href="/" 
                class="site-header__link" 
                data-route="/"
              >
                Marca
              </a>
            </li>
            <li>
              <a 
                href="/services" 
                class="site-header__link" 
                data-route="/services"
              >
                Servicios
              </a>
            </li>
            <li>
              <a 
                href="/products" 
                class="site-header__link" 
                data-route="/products"
              >
                Productos
              </a>
            </li>
            <li>
              <a 
                href="/templates" 
                class="site-header__link" 
                data-route="/templates"
              >
                Plantillas
              </a>
            </li>
            <li>
              <a 
                href="/guarantees" 
                class="site-header__link" 
                data-route="/guarantees"
              >
                Garantías
              </a>
            </li>
            <li>
              <a 
                href="/about" 
                class="site-header__link" 
                data-route="/about"
              >
                Sobre mí
              </a>
            </li>
            <li>
              <a 
                href="/contact" 
                class="site-header__link" 
                data-route="/contact"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  `;
}

/**
 * CAMBIOS REALIZADOS EN ESTA VERSIÓN:
 * 
 * 1. SEMÁNTICA HTML:
 *    ✓ <header role="banner"> → Identifica el header como banner landmark
 *    ✓ <nav id="site-nav"> → Proporciona identificación y referencia ARIA
 *    ✓ <ul><li> → Estructura semántica de lista de navegación
 *    ✓ Eliminado <span> innecesario en logo (opcional: puede tener SVG)
 * 
 * 2. ACCESIBILIDAD:
 *    ✓ aria-label en toggle → Describe la acción
 *    ✓ aria-expanded="false" → Indica estado del menú
 *    ✓ aria-controls="site-nav" → Relación entre toggle y nav
 *    ✓ aria-hidden="true" en spans decorativos
 *    ✓ title en logo → Tooltip al hover
 *    ✓ type="button" explícito
 * 
 * 3. DATA ATTRIBUTES:
 *    ✓ Conservados data-route para routing inteligente
 *    ✓ Permiten JavaScript targetear fácilmente
 * 
 * 4. ESTRUCTURA CLARA:
 *    ✓ Comentarios que explican secciones
 *    ✓ Formato legible y mantenible
 *    ✓ Indentación consistente
 * 
 * 5. PREPARACIÓN PARA CSS:
 *    ✓ Clases BEM claras y reutilizables
 *    ✓ Elementos identificables sin ambigüedad
 *    ✓ Sin clases conflictivas
 * 
 * EXTENSIONES FUTURAS (sin cambiar markup):
 * - Agregar <img> o <svg> dentro del logo
 * - Agregar dropdown menús en li específicos
 * - Agregar badge o contador de notificaciones
 * - Agregar buscador o theme toggle
 */