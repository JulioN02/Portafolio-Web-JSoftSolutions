export function renderHeader(): string {
  return `
    <header class="site-header">
      <div class="site-header__inner">
        <a href="/" class="site-header__logo">
          <span>J-Soft Solutions</span>
        </a>

        <button class="site-header__toggle" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav>
          <ul class="site-header__nav">
            <li><a href="/" class="site-header__link" data-route="/">Marca</a></li>
            <li><a href="/services" class="site-header__link" data-route="/services">Servicios</a></li>
            <li><a href="/products" class="site-header__link" data-route="/products">Productos</a></li>
            <li><a href="/templates" class="site-header__link" data-route="/templates">Plantillas</a></li>
            <li><a href="/guarantees" class="site-header__link" data-route="/guarantees">Garantías</a></li>
            <li><a href="/about" class="site-header__link" data-route="/about">Sobre mí</a></li>
            <li><a href="/contact" class="site-header__link" data-route="/contact">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;
}