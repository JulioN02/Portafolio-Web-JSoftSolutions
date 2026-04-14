export type Service = {
  id: string;
  title: string;
  problem: string;
  solution: string;
  benefits: string;
  includes: string[];
  niches: string[];
};

export const services: Service[] = [
  {
    id: "clientes-historial",
    title: "Sistema de Clientes + Historial",
    problem:
      "Información dispersa en cuadernos, Excel o la memoria. Olvidas quién vino, qué servicio tomó, cuánto pagó.",
    solution:
      "Un sistema donde cada cliente tiene su historial completo: servicios, pagos, preferencias y fechas.",
    benefits:
      "Atención personalizada, nunca más olvides un detalle importante, clientes que vuelven.",
    includes: [
      "Control de pagos y deudas",
      "Facturación simple",
      "Inventario básico",
      "Historial completo por cliente",
    ],
    niches: [
      "Salones de belleza",
      "Veterinarias",
      "Academias",
    ],
  },
  {
    id: "agenda-citas",
    title: "Agenda de Citas / Servicios",
    problem:
      "Llamadas constantes, doble reservas, cancelaciones de última hora. Tu teléfono no para.",
    solution:
      "Un calendario online donde tus clientes reservan solos, con confirmación automática y recordatorios.",
    benefits:
      "Reservas 24/7, menos llamadas, cero conflictos de horario, más tiempo para ti.",
    includes: [
      "Agenda de citas online",
      "Recordatorios por WhatsApp",
      "Reportes básicos",
      "Confirmación automática",
    ],
    niches: [
      "Salones de belleza",
      "Veterinarias",
      "Gimnasios",
    ],
  },
  {
    id: "mini-crm",
    title: "Mini CRM de Seguimiento",
    problem:
      "Leads que preguntan y desaparecen. Seguimiento manual que se te escapa. Oportunidades perdidas.",
    solution:
      "Un panel donde ves cada cliente potencial, su estado y próximos pasos. Nada se te pierde.",
    benefits:
      "Mayor conversión, seguimiento sistemático, ventas que no se escapan.",
    includes: [
      "Dashboard de seguimiento",
      "Reportes detallados",
      "Notificaciones avanzadas",
      "Pipeline de ventas",
    ],
    niches: [
      "Agencias de seguros",
      "Academias",
    ],
  },
  {
    id: "landing-whatsapp",
    title: "Landing Page + WhatsApp",
    problem:
      "Tu negocio no aparece en internet. Los clientes no te encuentran. El boca a boca ya no alcanza.",
    solution:
      "Una página profesional que muestra tu negocio + botón directo a WhatsApp para contacto inmediato.",
    benefits:
      "Credibilidad online, clientes nuevos cada día, contacto fácil y rápido.",
    includes: [
      "Landing page responsive",
      "WhatsApp Business integrado",
      "SEO local",
      "Diseño profesional",
    ],
    niches: [
      "Todos los negocios",
    ],
  },
];
