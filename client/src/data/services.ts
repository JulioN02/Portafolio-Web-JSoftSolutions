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
    title: "Página Web Profesional",
    description:
      "Una web diseñada para que tu negocio se vea serio, sea fácil de encontrar y convierta visitas en clientes reales.",
    details:
      "Muchos negocios pierden clientes porque no tienen presencia digital o la que tienen no genera confianza.",
    includes: [
      "Diseño adaptado a tu tipo de negocio",
      "Versión móvil y escritorio",
      "Secciones: servicios, contacto, ubicación",
      "Optimización básica para buscadores (SEO)",
      "Entrega funcional lista para usar",
    ],
  },
  {
    id: "admin-software",
    title: "Panel Administrativo Personalizado",
    description:
      "Un sistema interno hecho específicamente para lo que tu negocio necesita gestionar: clientes, reservas, inventario, seguimiento. Lo que tú defines, yo lo construyo.",
    details:
      "Operar con hojas de cálculo, papel o herramientas genéricas que no encajan genera errores, pérdida de tiempo y caos.",
    includes: [
      "Análisis de tu flujo operativo actual",
      "Panel con acceso por usuario y contraseña",
      "Módulos según tu tipo de negocio",
      "Interfaz simple, sin curva de aprendizaje",
      "Soporte post-entrega (alcance acordado)",
    ],
  },
];
