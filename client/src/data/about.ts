export type AboutProfileType = "professional" | "personal";

export interface AboutSection {
  title: string;
  paragraphs: string[];
}

export interface AboutProfile {
  type: AboutProfileType;
  name: string;
  tagline: string;
  sections: AboutSection[];
}

export const professionalProfile: AboutProfile = {
  type: "professional",
  name: "J-Soft Solutions",
  tagline: "Te ayudo a que tu negocio aparezca en internet y se organice por dentro",
  sections: [
    {
      title: "Misión",
      paragraphs: [
        "Crear herramientas digitales que simplifiquen operaciones y hagan crecer negocios.",
      ],
    },
    {
      title: "Visión",
      paragraphs: [
        "Ser el aliado tecnológico de emprendedores que valoran la eficiencia.",
      ],
    },
    {
      title: "Enfoque",
      paragraphs: [
        "Sitios web + software administrativo personalizado para salones de belleza, veterinarias, academias, lavanderías y más.",
        "Sin complicaciones. Soluciones que realmente usas todos los días.",
      ],
    },
  ],
};

export const personalProfile: AboutProfile = {
  type: "personal",
  name: "Julio Martinez",
  tagline: "Desarrollador de software especializado en soluciones web y sistemas administrativos para pequeños negocios.",
  sections: [
    {
      title: "Mi historia",
      paragraphs: [
        "Antes de programar, coordiné operaciones logísticas durante 7 años. Eso me dio algo que va más allá del código: entender cómo funciona un negocio por dentro.",
      ],
    },
    {
      title: "Stack técnico",
      paragraphs: [
        "TypeScript, Node.js, Express y PostgreSQL para construir sistemas seguros, estables y mantenibles.",
        "No uso frameworks de moda. Uso lo que funciona y lo que dura.",
      ],
    },
  ],
};

/** @deprecated Use personalProfile instead. Kept for backward compat until Phase 3. */
export const technicalProfile: AboutProfile = personalProfile;

export const nichos = [
  "Salones de belleza, peluquerías y estilistas",
  "Clínicas veterinarias pequeñas",
  "Academias, centros de idiomas y cursos particulares",
  "Lavanderías y tintorerías",
  "Estudios fotográficos y videógrafos",
  "Gimnasios boutique / CrossFit pequeños",
  "Agencias de seguros pequeñas",
];
