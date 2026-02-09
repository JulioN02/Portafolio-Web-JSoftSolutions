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
      title: "Quién soy",
      paragraphs: [
        "Soy Ingeniero de Sistemas en formación y desarrollador web enfocado en construir soluciones digitales claras, funcionales y mantenibles.",
        "Mi transición de la logística al desarrollo de software me permitió trasladar una mentalidad orientada a procesos, control y resultados reales."
      ]
    },
    {
      title: "Qué hago",
      paragraphs: [
        "Desarrollo sitios web profesionales, portafolios y soluciones web funcionales pensadas para resolver necesidades reales de negocio.",
        "Trabajo con estructuras claras, alcances definidos y enfoque en mantenibilidad, no solo en apariencia visual."
      ]
    },
    {
      title: "Cómo trabajo",
      paragraphs: [
        "Analizo el requerimiento antes de escribir código.",
        "Defino estructura, alcance y entregables desde el inicio.",
        "Mantengo comunicación clara durante todo el proceso."
      ]
    },
    {
      title: "Para quién",
      paragraphs: [
        "Emprendedores y profesionales que necesitan presencia web clara.",
        "Negocios que requieren soluciones web simples pero bien construidas."
      ]
    }
  ]
};

export const technicalProfile: AboutProfile = {
  type: "technical",
  sections: [
    {
      title: "Perfil técnico",
      paragraphs: [
        "Desarrollador Fullstack Junior con bases sólidas en ingeniería de software, arquitectura y modelado de datos.",
        "Formación en Ingeniería de Sistemas (UNAD) y enfoque en aplicaciones web escalables."
      ]
    },
    {
      title: "Stack principal",
      paragraphs: [
        "JavaScript (V8, closures, event loop)",
        "TypeScript (tipado fundamental)",
        "HTML, CSS",
        "Git y GitHub",
        "Vite como tooling principal"
      ]
    },
    {
      title: "Enfoque técnico",
      paragraphs: [
        "Separación clara de responsabilidades.",
        "Arquitecturas simples extensibles.",
        "Código legible, mantenible y escalable."
      ]
    },
    {
      title: "Experiencia previa",
      paragraphs: [
        "7 años en coordinación logística y operativa.",
        "Gestión de procesos, datos, inventarios y resolución de problemas bajo presión.",
        "Experiencia transferida directamente al diseño de sistemas."
      ]
    },
    {
      title: "Objetivo profesional",
      paragraphs: [
        "Posición Junior / Entry-Level.",
        "Aprendizaje continuo.",
        "Participación en proyectos reales con impacto."
      ]
    }
  ]
};
