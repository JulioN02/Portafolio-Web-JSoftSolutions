export type AboutProfileType = "professional" | "technical";

export interface AboutSection {
  title: string;
  paragraphs: string[];
}

export interface AboutProfile {
  type: AboutProfileType;
  sections: AboutSection[];
}

export const professionalProfile: AboutProfile = {
  type: "professional",
  sections: [
    {
      title: "Quiénes somos",
      paragraphs: [
        "J-Soft Solutions es la marca que convierte ideas en soluciones web claras, funcionales y escalables. Combinamos ingeniería aplicada y atención al detalle para que cada proyecto refleje profesionalismo y confiabilidad.",
        "Nuestra propuesta se centra en simplificar la presencia digital de emprendedores, profesionales y empresas, ofreciendo sitios web que transmiten confianza desde el primer clic.",
        "Nos enfocamos en resultados medibles y experiencia de usuario, asegurando que cada proyecto no solo cumpla su función, sino que también destaque por su estructura y diseño coherente."
      ]
    },
    {
      title: "Qué hacemos",
      paragraphs: [
        "Diseñamos y desarrollamos soluciones web estratégicas: landing pages, portafolios, sitios corporativos y sistemas funcionales que resuelven problemas reales de negocio.",
        "Nuestros proyectos integran arquitectura clara, escalabilidad y buenas prácticas de desarrollo, garantizando mantenibilidad y rendimiento a largo plazo.",
        "Cada solución busca impactar positivamente la visibilidad y credibilidad de nuestros clientes en línea, alineando tecnología, diseño y objetivos comerciales."
      ]
    },
    {
      title: "Cómo trabajamos",
      paragraphs: [
        "Escuchamos las necesidades del cliente y definimos un plan claro de acción, asegurando que cada decisión técnica tenga un propósito estratégico.",
        "Aplicamos un flujo integral: entendimiento → diseño → desarrollo → prueba → entrega, manteniendo comunicación constante y documentación accesible.",
        "Nuestra metodología combina ingeniería, diseño coherente y enfoque en experiencia de usuario, equilibrando estética y funcionalidad para generar confianza inmediata."
      ]
    },
    {
      title: "Para quién",
      paragraphs: [
        "Emprendedores, profesionales y pequeñas empresas que buscan presencia web profesional, confiable y orientada a resultados.",
        "Clientes que valoran claridad, transparencia y soluciones adaptables al crecimiento futuro de su negocio.",
        "Aquellos que desean transformar su marca en línea con sitios estructurados, escalables y funcionales, sin complicaciones técnicas innecesarias."
      ]
    },
    {
      title: "Nuestra propuesta de valor",
      paragraphs: [
        "Convertimos requerimientos en soluciones web estructuradas, seguras y escalables.",
        "Cada proyecto parte de arquitectura clara, decisiones técnicas justificadas y diseño coherente.",
        "Entregamos productos digitales que transmiten confianza, mejoran presencia online y permiten crecimiento futuro sin rehacer desde cero."
      ]
    }
  ]
};


export const technicalProfile: AboutProfile = {
  type: "technical",
  sections: [
    {
      title: "Resumen Profesional",
      paragraphs: [
        "Desarrollador Fullstack Junior (React / Node.js) y estudiante de Ingeniería de Sistemas en la UNAD, enfocado en construir aplicaciones web escalables, mantenibles y profesionalmente solidas.",
        "Combino fundamentos de ingeniería de software, arquitectura de sistemas y modelado de datos con un enfoque práctico en soluciones web eficientes y bien estructuradas.",
        "Trabajo integrando pensamiento lógico, criterio arquitectónico y atención a la calidad de código, priorizando siempre la escalabilidad y la experiencia del usuario."
      ]
    },
    {
      title: "Filosofía de Trabajo",
      paragraphs: [
        "Aplico ingeniería aplicada en todas las capas del desarrollo web: interfaz de usuario, lógica de negocio y persistencia de datos.",
        "Enfoque en procesos estructurados y mantenibles: diseño de arquitectura, modularidad, control de versiones y buenas prácticas de desarrollo.",
        "Desarrollo con mentalidad fullstack: planifico, implemento y documento soluciones integrales.",
        "Iteración y mejora continua: aprendo y adapto nuevas tecnologías, optimizando desempeño y escalabilidad en cada proyecto."
      ]
    },
    {
      title: "Competencias Técnicas",
      paragraphs: [
        "Lenguajes Core: JavaScript (V8, closures, Event Loop), TypeScript (tipado fundamental).",
        "En aprendizaje y uso progresivo: Frontend (React, Tailwind CSS) / Backend (Node.js, Express)",
        "Marcado y estilo: HTML5, CSS3.",
        "Control de versiones: Git / GitHub.",
        "Gestión de dependencias: NPM.",
        "Construcción y desarrollo rápido: Vite.js (HMR y builds rápidos).",
        "Arquitectura: Monolítico modular para proyectos iniciales; Cliente–Servidor (API REST + SPA) para aplicaciones complejas; SPA para UX rica; Sitios estáticos para landing pages."
      ]
    },
    {
      title: "Bases de Datos y Modelado",
      paragraphs: [
        "Fundamentos sólidos en SQL y modelado relacional.",
        "Preparado para implementación con PostgreSQL."
      ]
    },
    {
      title: "Profundidad Técnica",
      paragraphs: [
        "Comprensión del motor V8 de JavaScript: JIT, closures, scope y Event Loop.",
        "Manipulación eficiente del DOM y estructuras de datos.",
        "Implementación de asincronismo no bloqueante.",
        "Criterio arquitectónico de proyectos: diseño modular, escalable y mantenible."
      ]
    },
    {
      title: "Proyectos y Experiencia Práctica",
      paragraphs: [
        "Desarrollo de Landing Pages, portafolios y sitios corporativos con foco en diseño limpio y experiencia de usuario.",
        "Implementación de soluciones web funcionales con integraciones front-back progresivas.",
        "Documentación de procesos técnicos, decisiones de arquitectura y resultados verificables."
      ]
    },
    {
      title: "Aprendizaje y Evolución",
      paragraphs: [
        "Actualmente profundizo en Node.js, Express y React/Tailwind para integraciones fullstack completas.",
        "Formación continua en Ingeniería de Software, fundamentos web y backend, siguiendo roadmap de desarrollo profesional"
      ]
    },
    {
      title: "Experiencia Previa",
      paragraphs: [
        "7 años en coordinación logística y operativa.",
        "Gestión de procesos, datos, inventarios y resolución de problemas bajo presión.",
        "Experiencia transferida directamente al diseño de sistemas."
      ]
    },
    {
      title: "Objetivo Profesional",
      paragraphs: [
        "Posición Junior / Entry-Level.",
        "Aprendizaje continuo.",
        "Participación en proyectos reales con impacto."
      ]
    }
  ]
};
