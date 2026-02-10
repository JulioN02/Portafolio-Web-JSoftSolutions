export type Service = {
  id: string;
  title: string;
  description: string;
  details: string;
  includes: string[];
};

export const services: Service[] = [
  {
    id: "web-development",
    title: "Desarrollo Web Profesional",
    description:
      "Sitios web estructurados, mantenibles y diseñados con criterio técnico.",
    details:
      "Desarrollo de sitios web con una base sólida, pensados para crecer y mantenerse en el tiempo.",
    includes: [
      "Análisis del requerimiento",
      "Definición de estructura",
      "Desarrollo frontend",
      "Diseño responsive",
      "Entrega funcional",
    ],
  },
  {
    id: "landing-pages",
    title: "Landing Pages Estratégicas",
    description:
      "Páginas enfocadas en conversión, claridad del mensaje y rendimiento.",
    details:
      "Landing pages diseñadas para comunicar un mensaje claro y guiar al usuario a una acción concreta.",
    includes: [
      "Estructura orientada a conversión",
      "Mensaje claro",
      "Optimización básica de rendimiento",
    ],
  }
];
