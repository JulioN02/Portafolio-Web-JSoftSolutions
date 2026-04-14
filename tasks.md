# Tasks: Rediseño Portafolio Web-JSoftSolutions

## Fase 1: Preparación y Limpieza (2-3 horas) ✅ COMPLETADA

### 1.1 Backup y Git
- [x] 1.1.1 Crear branch `feat/portfolio-redesign` desde `main`
- [x] 1.1.2 Commit inicial: "chore: backup antes de rediseño"

### 1.2 Eliminar páginas obsoletas
- [x] 1.2.1 Eliminar `client/src/views/products.ts`
- [x] 1.2.2 Eliminar `client/src/views/templates.ts`
- [x] 1.2.3 Eliminar `client/src/views/guarantees.ts`
- [x] 1.2.4 Eliminar `client/src/data/products.ts`
- [x] 1.2.5 Eliminar `client/src/data/templates.ts`
- [x] 1.2.6 Eliminar `client/src/data/guarantees.ts`
- [x] 1.2.7 Eliminar `client/src/styles/pages/products.css`
- [x] 1.2.8 Eliminar `client/src/styles/pages/templates.css`
- [x] 1.2.9 Eliminar `client/src/styles/pages/guarantees.css`
- [x] 1.2.10 Eliminar componentes huérfanos: `productCard.ts`, `templateCard.ts`, `productModal.ts`, `templateModal.ts`, `productDetail.ts`, `templateDetail.ts`
- [x] 1.2.11 Eliminar `serviceDetails.ts` (vista huérfana)

### 1.3 Limpiar imports rotos
- [x] 1.3.1 Eliminar imports de `products`, `templates`, `guarantees` en `client/src/scripts/navigation.ts`
- [x] 1.3.2 Eliminar rutas `/products`, `/templates`, `/guarantees` del objeto `routes`
- [x] 1.3.3 Actualizar tipo `Route` para incluir solo 4 rutas
- [x] 1.3.4 Eliminar imports de CSS obsoletos en `client/src/styles/main.css`
- [x] 1.3.5 (Extra) Limpiar imports huérfanos de `productModal`/`templateModal` en `events.ts`

### 1.4 Actualizar navegación
- [x] 1.4.1 Reducir header a 4 items: Inicio, Servicios, Sobre mí, Contacto
- [x] 1.4.2 Cambiar texto "Marca" → "Inicio" en header
- [x] 1.4.3 Eliminar links de footer a `/products`, `/templates`, `/guarantees`
- [x] 1.4.4 Actualizar footer con 4 links principales: Inicio, Servicios, Sobre mí, Contacto

---

## Fase 2: Datos y Copywriting (3-4 horas)

### 2.1 Crear estructura de datos de servicios (4 paquetes)
- [x] 2.1.1 Crear `client/src/data/services.ts` con tipo `Service` expandido (id, title, problem, solution, benefits, includes, niches)
  - **NO incluir precios ni tiempos de entrega** (decisión del usuario)
- [x] 2.1.2 Paquete 1: Sistema de Clientes + Historial
  - Problema: "Información dispersa en cuadernos, Excel o la memoria. Olvidas quién vino, qué servicio tomó, cuánto pagó."
  - Solución: "Un sistema donde cada cliente tiene su historial completo: servicios, pagos, preferencias y fechas."
  - Beneficios: "Atención personalizada, nunca más olvides un detalle importante, clientes que vuelven."
  - Incluir: control de pagos, deudas, facturación simple, inventario básico
  - Nichos: salones de belleza, veterinarias, academias
- [x] 2.1.3 Paquete 2: Agenda de Citas / Servicios
  - Problema: "Llamadas constantes, doble reservas, cancelaciones de última hora. Tu teléfono no para."
  - Solución: "Un calendario online donde tus clientes reservan solos, con confirmación automática y recordatorios."
  - Beneficios: "Reservas 24/7, menos llamadas, cero conflictos de horario, más tiempo para ti."
  - Incluir: agenda de citas, recordatorios por WhatsApp, reportes básicos
  - Nichos: salones, veterinarias, gimnasios
- [x] 2.1.4 Paquete 3: Mini CRM de Seguimiento
  - Problema: "Leads que preguntan y desaparecen. Seguimiento manual que se te escapa. Oportunidades perdidas."
  - Solución: "Un panel donde ves cada cliente potencial, su estado y próximos pasos. Nada se te pierde."
  - Beneficios: "Mayor conversión, seguimiento sistemático, ventas que no se escapan."
  - Incluir: dashboard, reportes detallados, notificaciones avanzadas
  - Nichos: agencias de seguros, academias
- [x] 2.1.5 Paquete 4: Landing Page + WhatsApp
  - Problema: "Tu negocio no aparece en internet. Los clientes no te encuentran. El boca a boca ya no alcanza."
  - Solución: "Una página profesional que muestra tu negocio + botón directo a WhatsApp para contacto inmediato."
  - Beneficios: "Credibilidad online, clientes nuevos cada día, contacto fácil y rápido."
  - Incluir: landing page responsive, WhatsApp Business, SEO local
  - Nichos: todos los negocios

### 2.2 Crear data de redes sociales
- [x] 2.2.1 Crear `client/src/data/social-links.ts` con tipo `SocialLink`
- [x] 2.2.2 Definir: LinkedIn, GitHub, Email, WhatsApp
  - LinkedIn: https://www.linkedin.com/in/julio-nieto-martinez/
  - GitHub: https://github.com/JulioN02
  - Email: jsoftsolutions1@gmail.com
  - WhatsApp: https://wa.me/573122939515
- [x] 2.2.3 **NO incluir Instagram ni Facebook** (cuentas vacías)
- [x] 2.2.4 Incluir SVG icons inline para cada red social

### 2.3 Actualizar data de about
- [x] 2.3.1 Mantener dos perfiles: J-Soft Solutions y Julio Martinez
- [x] 2.3.2 Agregar nichos de clientes exportados al módulo about
- [x] 2.3.3 Simplificar copy: misión, visión, enfoque
  - J-Soft Solutions: "Te ayudo a que tu negocio aparezca en internet y se organice por dentro"
  - Julio Martinez: "Desarrollador de software especializado en soluciones web y sistemas administrativos para pequeños negocios."

---

## Fase 3: Rediseño Core de Páginas (5-6 horas)

### 3.1 Home - Hero y resumen de servicios ✅
- [x] 3.1.1 Actualizar hero: título "Soluciones Web que Hacen Crecer tu Negocio"
- [x] 3.1.2 Subtítulo: "Transformo ideas en herramientas digitales que simplifican operaciones y aumentan ventas"
- [x] 3.1.3 CTA principal: "Ver Soluciones" → `/services`
- [x] 3.1.4 Sección resumen: 4 cards de servicios con iconos
- [x] 3.1.5 Sección nichos: grid de nichos de clientes (salones, veterinarias, academias, etc.)
- [x] 3.1.6 Sección "¿Por qué conmigo?": proyectos en 4 semanas, precios accesibles, soporte incluido
- [x] 3.1.7 CTA final: contacto directo por WhatsApp
- [x] 3.1.8 Actualizar `client/src/styles/pages/home.css` con nuevas secciones

### 3.2 Servicios - Detalle de paquetes ✅
- [x] 3.2.1 Header: "Soluciones que Resuelven Problemas Reales"
- [x] 3.2.2 Renderizar 4 paquetes con estructura: problema → solución → beneficios
- [x] 3.2.3 Sección "¿Para qué negocios?": grid de nichos
- [x] 3.2.4 Sección proceso: 4 pasos (me cuentas → propongo → desarrollo → entrego)
- [x] 3.2.5 CTA por WhatsApp en cada paquete
- [x] 3.2.6 Actualizar `client/src/styles/pages/services.css`

### 3.3 Sobre mí - Simplificado ✅
- [x] 3.3.1 Rediseñar `client/src/views/about.ts` sin toggle complejo
- [x] 3.3.2 Sección J-Soft Solutions: misión, visión (1-2 párrafos)
- [x] 3.3.3 Sección Julio Martinez: experiencia logística 7 años, enfoque
- [x] 3.3.4 Sección redes sociales con iconos (LinkedIn, GitHub, Email, WhatsApp)
- [x] 3.3.5 Actualizar `client/src/styles/pages/about.css`

### 3.4 Contacto - Sin formulario ✅
- [x] 3.4.1 Rediseñar `client/src/views/contact.ts`: eliminar formulario
- [x] 3.4.2 Título: "Conectemos"
- [x] 3.4.3 Subtítulo: "¿Tienes un proyecto en mente? Hablemos"
- [x] 3.4.4 Tarjetas de contacto: WhatsApp (botón directo), Email, LinkedIn, GitHub
- [x] 3.4.5 Nota: "Respondo en menos de 24 horas"
- [x] 3.4.6 Actualizar `client/src/styles/pages/contact.css`

### 3.5 Footer - Con redes sociales ✅
- [x] 3.5.1 Actualizar `client/src/components/layout/footer.ts`
- [x] 3.5.2 Agregar iconos de redes sociales desde `social-links.ts`
- [x] 3.5.3 Actualizar `client/src/styles/components/footer.css`

---

## Fase 4: Carrusel y Componentes UI (2-3 horas) ✅ COMPLETADA

### 4.1 Crear componente carrusel
- [x] 4.1.1 Crear `client/src/components/ui/carousel.ts`
- [x] 4.1.2 Implementar carrusel vanilla JS con auto-play
- [x] 4.1.3 Controles: prev/next, indicadores de posición
- [x] 4.1.4 Responsive: 1 imagen en mobile, 2-3 en desktop
- [x] 4.1.5 Crear `client/src/styles/components/carousel.css`
- [x] 4.1.6 Placeholder images inicialmente (usuario proporcionará después)

### 4.2 Integrar carrusel en páginas
- [x] 4.2.1 Home: carrusel de proyectos/servicios en hero o sección dedicada
- [x] 4.2.2 Servicios: carrusel de ejemplos por paquete (placeholders)
- [x] 4.2.3 Lazy loading de imágenes

---

## Fase 5: Mejoras Técnicas (3-4 horas) ✅ COMPLETADA

### 5.1 SEO
- [x] 5.1.1 Actualizar `client/index.html`: lang="es"
- [x] 5.1.2 Meta description: "J-Soft Solutions - Desarrollo de soluciones web profesionales para pequeños negocios"
- [x] 5.1.3 Meta keywords: desarrollo web, sistemas de gestión, CRM, agenda de citas
- [x] 5.1.4 Open Graph tags: og:title, og:description, og:type
- [x] 5.1.5 Canonical URL
- [x] 5.1.6 Structured data (JSON-LD) para LocalBusiness

### 5.2 Accesibilidad
- [x] 5.2.1 Verificar contraste WCAG AA en todas las páginas (arreglados verdes, WhatsApp CTA)
- [x] 5.2.2 Agregar ARIA labels a iconos de redes sociales
- [x] 5.2.3 Asegurar navegación por teclado (focus-visible, carousel keyboard nav)
- [x] 5.2.4 Skip link al contenido principal + aria-labels en nav/sections
- [x] 5.2.5 Textos alternativos en imágenes (logo con alt, width, height, fetchpriority)

### 5.3 Rendimiento
- [x] 5.3.1 Lazy loading de imágenes con `loading="lazy"` (N/A - sin imágenes below-the-fold)
- [x] 5.3.2 Logo con fetchpriority="high" y dimensiones explícitas
- [x] 5.3.3 Preconnect a fuentes externas (N/A - usa system-ui, sin fuentes externas)
- [x] 5.3.4 Optimizar tamaño de imágenes (pendiente: usuario proporcionará imágenes reales)

### 5.4 Limpieza de código
- [x] 5.4.1 Eliminar `initContactForm` y `contact.ts` (ya no hay formulario)
- [x] 5.4.2 Eliminar `aboutToggle.ts` (about simplificado sin toggle)
- [x] 5.4.3 Eliminar imports no utilizados en `main.ts` (events, services, contactForm)
- [x] 5.4.4 Eliminar `serviceModal.ts`, `modalManager.ts`, `modal.ts`, `serviceDetail.ts`, `aboutProfile.ts`, `pageHeader.ts`, `section.ts`, `headerNavigation.ts`, `links.ts`
- [x] 5.4.5 Eliminar CSS de modales de `ui.css`
- [x] 5.4.6 Eliminar @deprecated fields de `services.ts` y `about.ts`
- [x] 5.4.7 Verificar que no queden imports rotos (build exitoso)

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
