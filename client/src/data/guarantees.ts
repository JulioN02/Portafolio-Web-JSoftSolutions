export type GuaranteeItem = {
  title: string;
  description: string;
};

export const guaranteesIntro: string =
  "Cómo trabajo y qué puedes esperar";

export const guaranteesList: GuaranteeItem[] = [
  {
    title: "Alcance claro desde el inicio",
    description:
      "Antes de escribir una línea de código, acordamos exactamente qué incluye el proyecto. Sin sorpresas al final.",
  },
  {
    title: "Entrega funcional, no promesas",
    description:
      "Lo que te entrego funciona desde el día uno. No maquetas. No prototipos sin terminar.",
  },
  {
    title: "Comunicación directa en todo el proceso",
    description:
      "Siempre sabes en qué punto está tu proyecto. Sin desapariciones. Sin respuestas en 5 días.",
  },
  {
    title: "Ajustes post-entrega incluidos",
    description:
      "Dentro del alcance acordado, tienes espacio para revisar y ajustar.",
  },
];

export const guaranteesLimits: string[] = [
  "Contabilidad o gestión fiscal",
  "Integraciones con sistemas de pago complejos",
  "Mantenimiento indefinido sin acuerdo previo",
];
