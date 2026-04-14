import logo from "../../assets/icons/LogoJSS.png";

export function renderHeader(): string {
  return `
    <header class="site-header" role="banner">
      <div class="site-header__inner">
        <!-- Logo / Marca -->
        <a href="/" class="site-header__logo" title="Volver a inicio">
          <img 
            src="${logo}" 
            alt="Logo J-Soft Solutions" 
            class="site-header__logo-img"
            width="40"
            height="40"
            fetchpriority="high"
          />
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
        <nav class="site-nav" id="site-nav" aria-label="Navegación principal">
          <ul class="site-header__nav">
            <li>
              <a 
                href="/" 
                class="site-header__link" 
                data-route="/"
              >
                Inicio
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