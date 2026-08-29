# J-Soft Solutions — Portafolio Profesional

Sitio web profesional de J-Soft Solutions, desarrollado como carta de presentación para servicios de desarrollo de software y soluciones web para pequeños negocios.

## 🌐 Sitio en Vivo

**https://julion02.github.io/Portafolio-Web-JSoftSolutions**

---

## 📋 Descripción

Portafolio web moderno y profesional que presenta los servicios de desarrollo de software de J-Soft Solutions. El sitio está diseñado para transmitir confianza, profesionalismo y expertise técnico, conectando con clientes potenciales que buscan soluciones digitales para sus negocios.

### Características Principales

- **4 páginas principales**: Inicio, Servicios, Sobre Mí, Contacto
- **9 ejemplos de proyectos** en carrusel interactivo (sistemas de agenda, CRM, inventario, dashboards, landing pages, etc.)
- **4 paquetes de servicios** con precios y descripciones detalladas
- **18 nichos de negocio** atendidos (salones de belleza, veterinarias, academias, tiendas, restaurantes, etc.)
- **CTAs inteligentes** hacia WhatsApp con mensajes personalizados por contexto
- **Diseño responsive** adaptado a mobile, tablet y desktop
- **Optimizado para SEO** y accesibilidad (WCAG AA)

---

## 🛠️ Stack Tecnológico

| Categoría | Tecnología |
|-----------|------------|
| **Frontend** | React 19 + TypeScript |
| **Bundler** | Vite |
| **Estilos** | CSS3 (arquitectura modular) |
| **Despliegue** | GitHub Pages (GitHub Actions) + Netlify (`netlify.toml`) |

### Tecnologías Adicionales

- Node.js 20
- Sistema de diseño propio con variables CSS
- Arquitectura vanilla JavaScript para interactividad

---

## 📁 Estructura del Proyecto

```
/
├── client/                    # Aplicación frontend
│   ├── src/
│   │   ├── assets/           # Recursos estáticos (imágenes, iconos)
│   │   │   └── images/
│   │   │       └── maquetas/  # Mockups de proyectos (desktop + mobile)
│   │   ├── components/        # Componentes reutilizables de UI
│   │   │   ├── layout/       # Header, Footer
│   │   │   └── ui/           # Carousel, etc.
│   │   ├── data/             # Datos estáticos tipados
│   │   │   ├── services.ts   # Paquetes de servicios, nichos, condiciones
│   │   │   ├── social-links.ts # Redes sociales y links de contacto
│   │   │   └── about.ts      # Información del perfil
│   │   ├── scripts/          # Lógica global (navegación SPA)
│   │   ├── styles/           # Estilos CSS modulares
│   │   │   ├── components/   # Estilos de componentes
│   │   │   ├── pages/        # Estilos por página
│   │   │   └── variables.css # Tokens de diseño
│   │   ├── views/            # Vistas principales (SPA)
│   │   │   ├── home.ts       # Página de inicio
│   │   │   ├── services.ts   # Servicios y paquetes
│   │   │   ├── about.ts      # Sobre la empresa
│   │   │   └── contact.ts    # Página de contacto
│   │   └── main.ts           # Punto de entrada
│   ├── public/               # Archivos públicos estáticos
│   │   ├── robots.txt        # Directivas para motores de búsqueda
│   │   └── sitemap.xml       # Mapa del sitio
│   ├── index.html            # HTML principal
│   └── package.json
├── .github/
│   └── workflows/
│       └── deploy.yml        # Pipeline de despliegue automático
└── package.json              # Workspace root (scripts compartidos)
```

---

## 🎨 Sistema de Diseño

### Paleta de Colores

| Rol | Color | Uso |
|-----|-------|-----|
| Azul Base | `#192950` | Fondos principales, header, footer |
| Azul Medio | `#21497B` | Secciones, cards, paneles |
| Azul UI | `#25609D` | Botones primarios, links |
| Verde Acento | `#7CBD68` | Confirmaciones, highlights |
| Verde WCAG | `#3A7D4A` | Texto en verde (contraste accesible) |
| WhatsApp | `#128C7E` | Botón de WhatsApp (contraste 4.5:1) |

### Tipografía

- **Familia**: System UI stack (`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`)
- **Jerarquía**: 5 niveles de tamaño (`text-xs` a `text-5xl`)

---

## ⚙️ Desarrollo

### Requisitos Previos

- Node.js 20+
- npm 9+

### Instalación

```bash
# Instalar dependencias del cliente
cd client && npm install

# O desde la raíz (workspace)
npm install
```

### Scripts Disponibles

```bash
# Desarrollo con hot reload
cd client && npm run dev

# Build de producción
cd client && npm run build

# Preview del build
cd client && npm run preview
```

### Despliegue Automático

El proyecto utiliza **GitHub Actions** para despliegue automático:

1. Cada push a la rama `main` activa el workflow
2. Se instala dependencias y se ejecuta build
3. Los archivos compilados se despliegan a GitHub Pages

**URL de producción**: `https://julion02.github.io/Portafolio-Web-JSoftSolutions`

### Despliegue en Netlify (alternativo)

El proyecto también está configurado para Netlify (`netlify.toml`): build con Vite (`client/dist`), redirección SPA (`/*` → `/index.html`), headers de seguridad (CSP, X-Frame-Options, Referrer-Policy) y cache-control de assets. El `base` de Vite está en `'/'` para este despliegue.

---

## 📱 Páginas

### Inicio (`/`)
- Hero con mensaje principal y CTA
- Resumen de servicios (4 cards)
- Carrusel de proyectos/maquetas
- Sección de nichos atendidos (marquee infinito)
- CTA final hacia WhatsApp

### Servicios (`/services`)
- 4 paquetes de servicios con precios "Desde $X"
- Cada paquete incluye: problema, solución, beneficios, características
- Condiciones generales (8 cards informativas)
- Proceso de trabajo (4 pasos)
- CTA de contacto

### Sobre Mí (`/about`)
- Perfil de J-Soft Solutions
- Perfil de Julio Martinez (fundador)
- Stack tecnológico
- Nichos de especialización
- Redes sociales

### Contacto (`/contact`)
- Tarjetas de contacto directo
- WhatsApp con mensaje predefinido
- LinkedIn, GitHub, Email
- Nota de tiempo de respuesta

---

## 🔐 Seguridad y SEO

### Headers de Seguridad
- CSP (Content Security Policy)
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy

### SEO
- Meta tags completos (title, description, keywords)
- Open Graph tags para redes sociales
- Structured data (JSON-LD) para LocalBusiness
- Canonical URL
- sitemap.xml y robots.txt

### Accesibilidad
- Contraste WCAG AA en todos los colores
- ARIA labels en elementos interactivos
- Navegación por teclado completa
- Focus visible en todos los elementos
- Textos alternativos en imágenes

---

## 📊 Estadísticas del Build

| Métrica | Valor |
|---------|-------|
| Módulos | ~38 |
| CSS | ~70 KB (gzip: 10 KB) |
| JavaScript | ~50 KB (gzip: 13 KB) |
| Imágenes | 18 maquetas optimizadas |

---

## 📝 Licencia

Este proyecto es propiedad de J-Soft Solutions. Todos los derechos reservados.

---

## 🔗 Enlaces

- **Sitio**: https://julion02.github.io/Portafolio-Web-JSoftSolutions
- **LinkedIn**: https://www.linkedin.com/in/julio-nieto-martinez/
- **GitHub**: https://github.com/JulioN02
- **Email**: jsoftsolutions1@gmail.com
- **WhatsApp**: https://wa.me/573122939515
