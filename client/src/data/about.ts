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
        "Soy Julio, desarrollador de software especializado en soluciones web y sistemas administrativos para pequeños negocios.",
        "Antes de programar, coordiné operaciones logísticas durante 7 años. Eso me dio algo que va más allá del código: entender cómo funciona un negocio por dentro."
      ]
    },
    {
      title: "Qué construyo",
      paragraphs: [
        "Trabajo con TypeScript, Node.js, Express y PostgreSQL para construir sistemas seguros, estables y mantenibles.",
        "No uso frameworks de moda. Uso lo que funciona y lo que dura."
      ]
    },
    {
      title: "Para quién trabajo",
      paragraphs: [
        "Para dueños de negocios que quieren crecer con herramientas que realmente les sirvan, sin depender de soluciones genéricas que no encajan con su operación."
      ]
    }
  ]
};

export const technicalProfile: AboutProfile = {
  type: "technical",
  sections: [
    {
      title: "Stack Técnico y Filosofía",
      paragraphs: [
        "Mi enfoque se basa en la simplicidad y la robustez. Utilizo TypeScript como base para asegurar la integridad de los datos y Node.js para un backend escalable.",
        "Aplico mi experiencia previa en logística para diseñar modelos de bases de datos (PostgreSQL) que reflejen procesos del mundo real de manera eficiente.",
        "Priorizo la mantenibilidad sobre la tendencia. Mi objetivo es entregar software que tu negocio pueda usar por años sin complicaciones."
      ]
    }
  ]
};
