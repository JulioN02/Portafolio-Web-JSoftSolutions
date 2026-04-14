import { socialLinks } from "../../data/social-links";

export function renderFooter(): string {
  const currentYear = new Date().getFullYear();

  const socialsHTML = socialLinks
    .map(
      (s) => `
    <a 
      href="${s.url}" 
      class="site-footer__social-link" 
      aria-label="${s.label}"
      target="_blank"
      rel="noopener noreferrer"
      title="Visita mi ${s.label}"
    >
      ${s.icon.replace('width="18" height="18"', 'class="site-footer__social-icon" width="18" height="18"')}
    </a>
  `
    )
    .join("");

  return `
    <footer class="site-footer" role="contentinfo">
      <div class="site-footer__inner">
        
        <!-- Sección: Marca y descripción -->
        <div class="site-footer__section site-footer__brand-section">
          <div class="site-footer__brand" title="J-Soft Solutions">
            <span class="site-footer__brand-text">J-Soft Solutions</span>
          </div>
          <p class="site-footer__text">
            Soluciones web + software administrativo personalizado para pequeños negocios.
            Sin complicaciones. Soluciones que realmente usas todos los días.
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
                  href="/about" 
                  class="site-footer__link" 
                  data-route="/about"
                >
                  Sobre mí
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

        <!-- Sección: Redes sociales -->
        <div class="site-footer__section">
          <h3 class="site-footer__title">Contacto</h3>
          <div class="site-footer__socials" role="group" aria-label="Redes sociales">
            ${socialsHTML}
          </div>
        </div>
      </div>

      <!-- Divisor -->
      <div class="site-footer__divider" aria-hidden="true"></div>

      <!-- Sección inferior: Copyright -->
      <div class="site-footer__bottom">
        <p class="site-footer__copyright">
          © ${currentYear} J-Soft Solutions. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  `;
}
