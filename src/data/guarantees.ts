export type GuaranteeItem = {
  title: string;
  description: string;
};

export const guaranteesIntro: string =
  "Trabajo con un enfoque profesional, transparente y orientado a la entrega de soluciones funcionales, claras y mantenibles.";

export const guaranteesList: GuaranteeItem[] = [
  {
    title: "Código claro y organizado",
    description:
      "El código entregado sigue una estructura definida, con separación de responsabilidades y nombres consistentes, facilitando su comprensión y mantenimiento.",
  },
  {
    title: "Entregables funcionales",
    description:
      "Cada proyecto se entrega en un estado funcional y verificable, cumpliendo con el alcance acordado desde el inicio.",
  },
  {
    title: "Comunicación clara durante el proceso",
    description:
      "Se mantiene comunicación directa y comprensible durante las etapas del proyecto, evitando ambigüedades en requerimientos y entregables.",
  },
  {
    title: "Cumplimiento del alcance definido",
    description:
      "El trabajo se realiza estrictamente sobre el alcance acordado. Cualquier ampliación se evalúa y acuerda antes de su implementación.",
  },
];

export const guaranteesLimits: string[] = [
  "Backend complejo o servicios de servidor",
  "Bases de datos o persistencia avanzada",
  "Sistemas de autenticación",
  "Integraciones externas o automatizaciones",
];
