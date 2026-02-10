/**
 * Footer Component
 * Ubicación: src/components/layout/footer.ts
 * 
 * Responsabilidad:
 * - Renderizar estructura HTML del footer
 * - Proporcionar markup semántico y accesible
 * - Incluir hooks para navegación y datos dinámicos
 * 
 * No contiene: lógica de eventos, estilos, comportamientos dinámicos
 */

export function renderFooter(): string {
  const currentYear = new Date().getFullYear();

  return `
    <footer class="site-footer" role="contentinfo">
      <div class="site-footer__inner">
        
        <!-- Sección: Marca y descripción -->
        <div class="site-footer__section site-footer__brand-section">
          <div class="site-footer__brand" title="J-Soft Solutions">
            <span class="site-footer__brand-text">J-Soft Solutions</span>
          </div>
          <p class="site-footer__text">
            Soluciones digitales innovadoras para tu negocio. 
            Especializado en arquitectura de software escalable y desarrollo web moderno.
          </p>
        </div>

        <!-- Sección: Enlaces principales -->
        <div class="site-footer__section">
          <h3 class="site-footer__title">Enlaces</h3>
          <nav aria-label="Enlaces del footer">
            <ul class="site-footer__links">
              <li>
                <a 
                  href="/" 
                  class="site-footer__link" 
                  data-route="/"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a 
                  href="/services" 
                  class="site-footer__link" 
                  data-route="/services"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a 
                  href="/products" 
                  class="site-footer__link" 
                  data-route="/products"
                >
                  Productos
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  class="site-footer__link" 
                  data-route="/contact"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Sección: Información -->
        <div class="site-footer__section">
          <h3 class="site-footer__title">Información</h3>
          <ul class="site-footer__links">
            <li>
              <a 
                href="/about" 
                class="site-footer__link" 
                data-route="/about"
              >
                Sobre mí
              </a>
            </li>
            <li>
              <a 
                href="/guarantees" 
                class="site-footer__link" 
                data-route="/guarantees"
              >
                Garantías
              </a>
            </li>
            <li>
              <a 
                href="/templates" 
                class="site-footer__link" 
                data-route="/templates"
              >
                Plantillas
              </a>
            </li>
          </ul>
        </div>

        <!-- Sección: Redes sociales -->
        <div class="site-footer__section">
          <h3 class="site-footer__title">Sígueme</h3>
          <div class="site-footer__socials" role="group" aria-label="Redes sociales">
            <a 
              href="https://github.com" 
              class="site-footer__social-link" 
              aria-label="GitHub - Sígueme en GitHub"
              target="_blank"
              rel="noopener noreferrer"
              title="Visita nuestro GitHub"
            >
              <svg 
                class="site-footer__social-icon" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com" 
              class="site-footer__social-link" 
              aria-label="LinkedIn - Sígueme en LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              title="Visita nuestro LinkedIn"
            >
              <svg 
                class="site-footer__social-icon" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.807 0-9.725h3.554v1.378c.43-.664 1.199-1.61 2.920-1.61 2.134 0 3.731 1.395 3.731 4.397v5.56zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.771-1.71 1.958-1.71 1.187 0 1.914.757 1.941 1.71 0 .951-.754 1.71-1.984 1.71zm1.581 11.597H3.635V9.727h3.283v10.725zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="https://twitter.com" 
              class="site-footer__social-link" 
              aria-label="Twitter - Sígueme en Twitter"
              target="_blank"
              rel="noopener noreferrer"
              title="Visita nuestro Twitter"
            >
              <svg 
                class="site-footer__social-icon" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9-5 9-5z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Divisor -->
      <div class="site-footer__divider" aria-hidden="true"></div>

      <!-- Sección inferior: Copyright y Legal -->
      <div class="site-footer__bottom">
        <p class="site-footer__copyright">
          © ${currentYear} J-Soft Solutions. Todos los derechos reservados.
        </p>
        <nav class="site-footer__legal" aria-label="Enlaces legales">
          <a 
            href="/privacy" 
            class="site-footer__legal-link"
            title="Política de privacidad"
          >
            Privacidad
          </a>
          <a 
            href="/terms" 
            class="site-footer__legal-link"
            title="Términos de servicio"
          >
            Términos
          </a>
          <a 
            href="/cookies" 
            class="site-footer__legal-link"
            title="Política de cookies"
          >
            Cookies
          </a>
        </nav>
      </div>
    </footer>
  `;
}

/**
 * ============================================================================
 * CAMBIOS REALIZADOS EN ESTA VERSIÓN
 * ============================================================================
 * 
 * 1. SEMÁNTICA HTML:
 *    ✓ role="contentinfo" en <footer>
 *    ✓ <nav> con aria-label en secciones de links
 *    ✓ aria-hidden="true" en elementos decorativos
 *    ✓ Estructura clara con comentarios HTML
 * 
 * 2. ACCESIBILIDAD:
 *    ✓ aria-label en links sociales descriptivos
 *    ✓ title attributes en enlaces
 *    ✓ Atributos para links externos (target, rel)
 *    ✓ SVG con aria-hidden (no redundante con aria-label)
 *    ✓ role="group" en sección de redes sociales
 * 
 * 3. ESTRUCTURA:
 *    ✓ data-route en enlaces internos (para SPA)
 *    ✓ 4 secciones claramente separadas
 *    ✓ Links organizados por categoría
 *    ✓ Año dinámico con new Date().getFullYear()
 * 
 * 4. MEJORAS DE UX:
 *    ✓ Descripción más completa de la marca
 *    ✓ SVG icons en lugar de texto en redes
 *    ✓ target="_blank" + rel="noopener noreferrer" en redes
 *    ✓ Title attributes para tooltips
 *    ✓ Nueva sección de Información
 *    ✓ Link a Cookies policy
 * 
 * 5. SEO Y SEMÁNTICA:
 *    ✓ Mejor estructura de contenido
 *    ✓ Más enlaces internos (ayuda crawling)
 *    ✓ Mejor jerarquía (h3 para títulos)
 *    ✓ Mejor descripción de marca
 * 
 * ============================================================================
 * COMPATIBILIDAD
 * ============================================================================
 * 
 * ✓ Trabaja con footer.css v2.0
 * ✓ Mantiene clases BEM existentes
 * ✓ Compatible con JavaScript actual
 * ✓ Sin dependencias externas
 * ✓ SVG inline (sin requests adicionales)
 */