export function renderHeader(): string {
  return `
    <div class="header-container">
      <div class="brand">
        <span class="brand-name">J-Soft Solutions</span>
      </div>

      <nav class="navigation">
        <ul class="nav-list">
          <li><a href="/" data-route="/">Marca</a></li>
          <li><a href="/services" data-route="/services">Servicios</a></li>
          <li><a href="/products" data-route="/products">Productos</a></li>
          <li><a href="/templates" data-route="/templates">Plantillas</a></li>
          <li><a href="/guarantees" data-route="/guarantees">Garantías</a></li>
          <li><a href="/about" data-route="/about">Sobre mí</a></li>
          <li><a href="/contact" data-route="/contact">Contacto</a></li>
        </ul>
      </nav>
    </div>
  `;
}
