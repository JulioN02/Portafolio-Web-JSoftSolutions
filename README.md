# J-Soft Solutions — Web System

J-Soft Solutions es un sistema web profesional orientado a la presentación de servicios y soluciones de desarrollo de software.  
El proyecto está concebido como un **sistema estructurado y escalable**, no como una landing aislada, y prioriza claridad arquitectónica, orden del código y coherencia entre marca, contenido y estructura técnica.

Este repositorio representa la **base funcional y organizativa del sistema**, sobre la cual se continúan refinando aspectos visuales y de experiencia de usuario.

## Enfoque del Sistema

El proyecto está desarrollado como un **monolito frontend estructurado**, utilizando tecnologías web estándar y un enfoque modular que facilita el mantenimiento y la evolución progresiva del sistema.

Principios que guían el desarrollo:

- Separación clara de responsabilidades
- Organización por capas semánticas
- Código legible y mantenible
- Preparación para crecimiento funcional futuro
- Coherencia entre estructura técnica y propuesta de valor

No se utilizan frameworks de frontend en esta etapa. El renderizado y la navegación se gestionan mediante lógica propia, priorizando comprensión del flujo y control del sistema.

## Stack Tecnológico Actual

- HTML5
- CSS3 (estructurado por responsabilidad)
- JavaScript
- TypeScript (uso fundamental)
- Vite como herramienta de desarrollo y bundling

El stack está definido para garantizar una base sólida antes de incorporar capas adicionales de complejidad.

## Arquitectura del Proyecto

La arquitectura del sistema está organizada para reflejar de forma explícita las responsabilidades de cada parte del código.

### Estructura base

/src
|- assets → Recursos visuales (imágenes, íconos)
|- styles → Estilos CSS organizados por responsabilidad
|- components → Componentes reutilizables de UI y layout
|- views → Vistas principales del sistema
|- data → Datos estructurados estáticos
|- scripts → Lógica global (navegación, utilidades)
|- main.ts → Punto de entrada de la aplicación

Esta estructura permite escalar el sistema sin introducir acoplamiento innecesario ni desorden progresivo.

## Sistema de Vistas y Navegación

El sitio funciona mediante un sistema de vistas renderizadas dinámicamente, sin recarga completa de página.

Las vistas actualmente definidas son:

- Home
- Services
- Products
- Templates
- Guarantees
- About
- Contact

Cada vista cuenta con su propio archivo y puede inicializar lógica específica únicamente cuando es renderizada, manteniendo control y eficiencia en la ejecución del sistema.

## Sistema de Estilos (Estado Actual)

El sistema de estilos ya cuenta con una **estructura de archivos CSS definida y organizada**, orientada a mantener orden y separación de responsabilidades visuales.

Actualmente:

- La estructura de estilos está creada y alineada con la arquitectura del proyecto.
- La estilización visual se encuentra en **fase de refinamiento**.
- Los estilos se pulirán y mejorarán progresivamente siguiendo la **Guía de Identidad, Estilo y Diseño de J-Soft Solutions**.

Esto permite trabajar sobre una base ordenada, evitando retrabajo o reestructuración futura del CSS.

## Identidad y Lineamientos

El diseño visual y la comunicación del sistema se rigen por una guía específica de identidad, que define:

- Posicionamiento técnico de la marca
- Uso semántico del color
- Jerarquía visual
- Principios de composición
- Coherencia con el perfil de ingeniería del proyecto

Todas las decisiones de UI y estilización se alinean con estos lineamientos para mantener consistencia y profesionalismo.

## Estado del Proyecto

El proyecto se encuentra en una fase donde:

- La arquitectura base está definida y consolidada.
- La estructura del sistema es estable.
- La navegación y el renderizado de vistas están implementados.
- La estilización se encuentra en proceso de ajuste y mejora visual.

El enfoque actual es **refinar y fortalecer lo existente**, no redefinir la base del sistema.

## Propósito del Repositorio

Este repositorio funciona como:

- Base técnica del sitio web de J-Soft Solutions
- Evidencia de criterio arquitectónico y organización de código
- Punto de partida para evolución funcional y visual del sistema

El proyecto está diseñado para crecer de forma controlada y coherente, manteniendo siempre claridad técnica y estructural.
