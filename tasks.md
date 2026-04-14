# Tasks: Rediseño Portafolio Web-JSoftSolutions

## Fase 1: Preparación y Limpieza (2-3 horas)

### 1.1 Backup y Git
- [ ] 1.1.1 Crear branch `feat/portfolio-redesign` desde `main`
- [ ] 1.1.2 Commit inicial: "chore: backup antes de rediseño"

### 1.2 Eliminar páginas obsoletas
- [ ] 1.2.1 Eliminar `client/src/views/products.ts`
- [ ] 1.2.2 Eliminar `client/src/views/templates.ts`
- [ ] 1.2.3 Eliminar `client/src/views/guarantees.ts`
- [ ] 1.2.4 Eliminar `client/src/data/products.ts`
- [ ] 1.2.5 Eliminar `client/src/data/templates.ts`
- [ ] 1.2.6 Eliminar `client/src/data/guarantees.ts`
- [ ] 1.2.7 Eliminar `client/src/styles/pages/products.css`
- [ ] 1.2.8 Eliminar `client/src/styles/pages/templates.css`
- [ ] 1.2.9 Eliminar `client/src/styles/pages/guarantees.css`
- [ ] 1.2.10 Eliminar componentes huérfanos: `productCard.ts`, `templateCard.ts`, `productModal.ts`, `templateModal.ts`, `productDetail.ts`, `templateDetail.ts`
- [ ] 1.2.11 Eliminar `serviceDetails.ts` (vista huérfana)

### 1.3 Limpiar imports rotos
- [ ] 1.3.1 Eliminar imports de `products`, `templates`, `guarantees` en `client/src/scripts/navigation.ts`
- [ ] 1.3.2 Eliminar rutas `/products`, `/templates`, `/guarantees` del objeto `routes`
- [ ] 1.3.3 Actualizar tipo `Route` para incluir solo 4 rutas
- [ ] 1.3.4 Eliminar imports de CSS obsoletos en `client/src/styles/main.css`

### 1.4 Actualizar navegación
- [ ] 1.4.1 Reducir header a 4 items: Inicio, Servicios, Sobre mí, Contacto
- [ ] 1.4.2 Cambiar texto "Marca" → "Inicio" en header
- [ ] 1.4.3 Eliminar links de footer a `/products`, `/templates`, `/guarantees`
- [ ] 1.4.4 Actualizar footer con 4 links principales: Inicio, Servicios, Sobre mí, Contacto

---

## Fase 2: Datos y Copywriting (3-4 horas)

### 2.1 Crear estructura de datos de servicios (4 paquetes)
- [ ] 2.1.1 Crear `client/src/data/services.ts` con tipo `Service` expandido (id, title, problem, solution, benefits, includes, price, deliveryTime, niches)
- [ ] 2.1.2 Paquete 1: Sistema de Clientes + Historial (adaptado de Software Pro)
  - Problema: pérdida de datos, seguimiento manual, errores
  - Solución: base de datos centralizada con historial completo
  - Incluir: control de pagos, deudas, facturación simple, inventario básico
  - Precio: 800.000-950.000 COP
  - Entrega: 3 semanas
- [ ] 2.1.3 Paquete 2: Agenda de Citas / Servicios (adaptado de Software Básico)
  - Problema: llamadas constantes, doble reservas, cancelaciones
  - Solución: calendario online con confirmación automática
  - Incluir: agenda de citas, recordatorios por WhatsApp, reportes básicos
  - Precio: 600.000-750.000 COP
  - Entrega: 2 semanas
- [ ] 2.1.4 Paquete 3: Mini CRM de Seguimiento (parte de Software Pro)
  - Problema: leads perdidos, seguimiento inconsistente
  - Solución: panel de control con pipeline de ventas
  - Incluir: dashboard, reportes detallados, notificaciones avanzadas
  - Precio: 800.000-950.000 COP
  - Entrega: 3 semanas
- [ ] 2.1.5 Paquete 4: Landing Page + WhatsApp (adaptado de Visibilidad Express)
  - Problema: presencia digital débil, difícil contacto
  - Solución: página profesional con integración directa a WhatsApp
  - Incluir: landing page responsive, WhatsApp Business, SEO local
  - Precio: 400.000-550.000 COP
  - Entrega: 7-10 días

### 2.2 Crear data de redes sociales
- [ ] 2.2.1 Crear `client/src/data/social-links.ts` con tipo `SocialLink`
- [ ] 2.2.2 Definir: LinkedIn, GitHub, Email, WhatsApp (número)
- [ ] 2.2.3 Placeholder para Instagram y Facebook (comentado o null)
- [ ] 2.2.4 Incluir SVG icons inline para cada red social

### 2.3 Actualizar data de about
- [ ] 2.3.1 Mantener dos perfiles: J-Soft Solutions y Julio Martinez
- [ ] 2.3.2 Agregar sección de redes sociales al perfil profesional
- [ ] 2.3.3 Simplificar copy: misión, visión, enfoque

---

## Fase 3: Rediseño Core de Páginas (5-6 horas)

### 3.1 Home - Hero y resumen de servicios
- [ ] 3.1.1 Actualizar hero: título "Soluciones Web que Hacen Crecer tu Negocio"
- [ ] 3.1.2 Subtítulo: "Transformo ideas en herramientas digitales que simplifican operaciones y aumentan ventas"
- [ ] 3.1.3 CTA principal: "Ver Soluciones" → `/services`
- [ ] 3.1.4 Sección resumen: 4 cards de servicios con iconos
- [ ] 3.1.5 Sección nichos: grid de nichos de clientes (salones, veterinarias, academias, etc.)
- [ ] 3.1.6 Sección "¿Por qué conmigo?": proyectos en 4 semanas, precios accesibles, soporte incluido
- [ ] 3.1.7 CTA final: contacto directo por WhatsApp
- [ ] 3.1.8 Actualizar `client/src/styles/pages/home.css` con nuevas secciones

### 3.2 Servicios - Detalle de paquetes
- [ ] 3.2.1 Header: "Soluciones que Resuelven Problemas Reales"
- [ ] 3.2.2 Renderizar 4 paquetes con estructura: problema → solución → beneficios → precio
- [ ] 3.2.3 Cada paquete expandible o con modal de detalles
- [ ] 3.2.4 Sección "¿Para qué negocios?": grid de nichos
- [ ] 3.2.5 Sección proceso: 4 pasos (me cuentas → propongo → desarrollo → entrego)
- [ ] 3.2.6 CTA por WhatsApp en cada paquete
- [ ] 3.2.7 Actualizar `client/src/styles/pages/services.css`

### 3.3 Sobre mí - Simplificado
- [ ] 3.3.1 Rediseñar `client/src/views/about.ts` sin toggle complejo
- [ ] 3.3.2 Sección J-Soft Solutions: misión, visión (1-2 párrafos)
- [ ] 3.3.3 Sección Julio Martinez: experiencia logística 7 años, enfoque
- [ ] 3.3.4 Sección redes sociales con iconos (LinkedIn, GitHub, Email, WhatsApp)
- [ ] 3.3.5 Actualizar `client/src/styles/pages/about.css`

### 3.4 Contacto - Sin formulario
- [ ] 3.4.1 Rediseñar `client/src/views/contact.ts`: eliminar formulario
- [ ] 3.4.2 Título: "Conectemos"
- [ ] 3.4.3 Subtítulo: "¿Tienes un proyecto en mente? Hablemos"
- [ ] 3.4.4 Tarjetas de contacto: WhatsApp (botón directo), Email, LinkedIn, GitHub
- [ ] 3.4.5 Nota: "Respondo en menos de 24 horas"
- [ ] 3.4.6 Actualizar `client/src/styles/pages/contact.css`

### 3.5 Footer - Con redes sociales
- [ ] 3.5.1 Actualizar `client/src/components/layout/footer.ts`
- [ ] 3.5.2 Agregar iconos de redes sociales desde `social-links.ts`
- [ ] 3.5.3 Incluir WhatsApp e Instagram (si el usuario proporciona)
- [ ] 3.5.4 Actualizar `client/src/styles/components/footer.css`

---

## Fase 4: Carrusel y Componentes UI (2-3 horas)

### 4.1 Crear componente carrusel
- [ ] 4.1.1 Crear `client/src/components/ui/carousel.ts`
- [ ] 4.1.2 Implementar carrusel vanilla JS con auto-play
- [ ] 4.1.3 Controles: prev/next, indicadores de posición
- [ ] 4.1.4 Responsive: 1 imagen en mobile, 2-3 en desktop
- [ ] 4.1.5 Crear `client/src/styles/components/carousel.css`
- [ ] 4.1.6 Placeholder images inicialmente (usuario proporcionará después)

### 4.2 Integrar carrusel en páginas
- [ ] 4.2.1 Home: carrusel de proyectos/servicios en hero o sección dedicada
- [ ] 4.2.2 Servicios: carrusel de ejemplos por paquete (placeholders)
- [ ] 4.2.3 Lazy loading de imágenes

---

## Fase 5: Mejoras Técnicas (3-4 horas)

### 5.1 SEO
- [ ] 5.1.1 Actualizar `client/index.html`: lang="es"
- [ ] 5.1.2 Meta description: "J-Soft Solutions - Desarrollo de soluciones web profesionales para pequeños negocios"
- [ ] 5.1.3 Meta keywords: desarrollo web, sistemas de gestión, CRM, agenda de citas
- [ ] 5.1.4 Open Graph tags: og:title, og:description, og:type
- [ ] 5.1.5 Canonical URL
- [ ] 5.1.6 Structured data (JSON-LD) para LocalBusiness

### 5.2 Accesibilidad
- [ ] 5.2.1 Verificar contraste WCAG AA en todas las páginas
- [ ] 5.2.2 Agregar ARIA labels a iconos de redes sociales
- [ ] 5.2.3 Asegurar navegación por teclado
- [ ] 5.2.4 Textos alternativos en imágenes
- [ ] 5.2.5 Skip link al contenido principal

### 5.3 Rendimiento
- [ ] 5.3.1 Lazy loading de imágenes con `loading="lazy"`
- [ ] 5.3.2 CSS crítico inline (hero section)
- [ ] 5.3.3 Preconnect a fuentes externas (si aplica)
- [ ] 5.3.4 Optimizar tamaño de imágenes (WebP si es posible)

### 5.4 Limpieza de código
- [ ] 5.4.1 Eliminar `initContactForm` de scripts/contact.ts (ya no hay formulario)
- [ ] 5.4.2 Eliminar `aboutToggle.ts` si se simplifica la página about
- [ ] 5.4.3 Eliminar imports no utilizados en `main.ts`
- [ ] 5.4.4 Eliminar `serviceModal.ts` y `modalManager.ts` si no se usan
- [ ] 5.4.5 Verificar que no queden imports rotos

---

## Fase 6: Testing y Verificación (2-3 horas)

### 6.1 Verificación visual
- [ ] 6.1.1 Probar navegación completa (4 páginas)
- [ ] 6.1.2 Verificar responsive: mobile, tablet, desktop
- [ ] 6.1.3 Verificar carrusel funciona correctamente
- [ ] 6.1.4 Verificar links de redes sociales abren correctamente

### 6.2 Verificación técnica
- [ ] 6.2.1 Build sin errores: `npm run build`
- [ ] 6.2.2 Console sin errores en navegador
- [ ] 6.2.3 Lighthouse score > 90 (Performance, Accessibility, SEO)
- [ ] 6.2.4 Validar HTML (sin errores críticos)

### 6.3 Checklist de contenido
- [ ] 6.3.1 Los 4 paquetes de servicios están presentes con precios
- [ ] 6.3.2 Los nichos de clientes están listados
- [ ] 6.3.3 Las redes sociales (LinkedIn, GitHub, Email, WhatsApp) funcionan
- [ ] 6.3.4 El copywriting es profesional y persuasivo
- [ ] 6.3.5 Los CTAs apuntan a WhatsApp correctamente

---

## Fase 7: Deploy y Documentación (1-2 horas)

### 7.1 Pre-deploy
- [ ] 7.1.1 Commit final con todos los cambios
- [ ] 7.1.2 Merge a `main` (o PR si es workflow)
- [ ] 7.1.3 Tag de versión (ej: v2.0.0-redesign)

### 7.2 Post-deploy
- [ ] 7.2.1 Verificar sitio en producción
- [ ] 7.2.2 Probar links de WhatsApp en producción
- [ ] 7.2.3 Actualizar README.md si es necesario

---

## Resumen de Estimación

| Fase | Horas Estimadas | Tareas |
|------|----------------|--------|
| Fase 1: Preparación | 2-3h | 14 tareas |
| Fase 2: Datos y Copy | 3-4h | 12 tareas |
| Fase 3: Rediseño Core | 5-6h | 20 tareas |
| Fase 4: Carrusel | 2-3h | 8 tareas |
| Fase 5: Mejoras Técnicas | 3-4h | 16 tareas |
| Fase 6: Testing | 2-3h | 12 tareas |
| Fase 7: Deploy | 1-2h | 5 tareas |
| **Total** | **18-25h** | **87 tareas** |

---

## Notas Importantes

1. **Precios**: Incluir precios y tiempos de entrega solo si el usuario confirma
2. **Instagram/Facebook**: Pendientes de que el usuario proporcione URLs
3. **Imágenes**: Usar placeholders hasta que el usuario proporcione imágenes reales
4. **Mantenimiento mensual**: Mencionar como servicio adicional, no incluir en precios de paquetes
5. **WhatsApp API**: Verificar si se necesita API real o solo link directo

---

## Orden de Implementación Recomendado

1. **Fase 1** (Preparación) → Primero limpiar para tener base limpia
2. **Fase 2** (Datos) → Definir contenido antes de implementar UI
3. **Fase 3** (Core) → Implementar las 4 páginas principales
4. **Fase 4** (Carrusel) → Componente UI opcional pero valioso
5. **Fase 5** (Técnicas) → Mejoras después de que todo funcione
6. **Fase 6** (Testing) → Verificar antes de deploy
7. **Fase 7** (Deploy) → Lanzar cuando todo esté listo

---

**Próximo paso**: Aprobar este plan y comenzar con la Fase 1 (Preparación y Limpieza).
