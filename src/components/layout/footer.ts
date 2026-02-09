export function renderFooter(): string {
  return `
    <footer class="site-footer">
      <div class="site-footer__inner">
        <div class="site-footer__section">
          <div class="site-footer__brand">
            <span>J-Soft Solutions</span>
          </div>
          <p class="site-footer__text">Soluciones digitales innovadoras para tu negocio</p>
        </div>

        <div class="site-footer__section">
          <h3 class="site-footer__title">Enlaces</h3>
          <ul class="site-footer__links">
            <li><a href="#" class="site-footer__link">Servicios</a></li>
            <li><a href="#" class="site-footer__link">Productos</a></li>
            <li><a href="#" class="site-footer__link">Contacto</a></li>
          </ul>
        </div>

        <div class="site-footer__section">
          <h3 class="site-footer__title">Síguenos</h3>
          <div class="site-footer__socials">
            <a href="#" class="site-footer__social-link" aria-label="GitHub">GitHub</a>
            <a href="#" class="site-footer__social-link" aria-label="LinkedIn">LinkedIn</a>
          </div>
        </div>
      </div>

      <div class="site-footer__divider"></div>

      <div class="site-footer__bottom">
        <p class="site-footer__copyright">© ${new Date().getFullYear()} J-Soft Solutions. Todos los derechos reservados.</p>
        <div class="site-footer__legal">
          <a href="#" class="site-footer__legal-link">Privacidad</a>
          <a href="#" class="site-footer__legal-link">Términos</a>
        </div>
      </div>
    </footer>
  `;
}