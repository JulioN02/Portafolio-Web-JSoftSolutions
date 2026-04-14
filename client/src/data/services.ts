export type ServicePackage = {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  includes: string[];
  price: string;
  maintenance: string;
  deliveryTime: string;
  idealFor: string;
  popular?: boolean;
};

export const servicePackages: ServicePackage[] = [
  {
    id: "visibilidad-express",
    name: "Paquete 1",
    title: "Visibilidad Express",
    subtitle: "Tu negocio aparece profesional en internet desde el primer día",
    description:
      "Landing page moderna con WhatsApp Business integrado y SEO local para que te encuentren en tu ciudad.",
    includes: [
      "Landing page moderna y atractiva (diseño responsive)",
      "Integración con WhatsApp Business (bot de mensajes automáticos)",
      "Optimización de Google My Business",
      "SEO local básico (para que te encuentren en tu ciudad)",
      "Enlace a tus redes sociales",
    ],
    price: "$400.000 - $550.000",
    maintenance: "$60.000/mes",
    deliveryTime: "7-10 días",
    idealFor: "Quienes solo quieren visibilidad rápida y clientes nuevos por internet",
  },
  {
    id: "software-basico",
    name: "Paquete 2",
    title: "Software Básico",
    subtitle: "El sistema más simple para organizar tu día a día",
    description:
      "Agenda de citas, gestión de clientes y recordatorios automáticos por WhatsApp.",
    includes: [
      "Agenda de citas o servicios",
      "Gestión de clientes y contactos",
      "Recordatorios automáticos por WhatsApp",
      "Reportes básicos de ventas del mes",
      "Login seguro para ti (instancia única)",
    ],
    price: "$600.000 - $750.000",
    maintenance: "$80.000/mes",
    deliveryTime: "2 semanas",
    idealFor: "Negocios que necesitan ordenar citas y pagos sin complicaciones",
  },
  {
    id: "software-pro",
    name: "Paquete 3",
    title: "Software Pro",
    subtitle: "La solución completa para manejar todo tu negocio",
    description:
      "Todo lo del Software Básico + historial completo, facturación, inventario y dashboard profesional.",
    includes: [
      "Todo lo incluido en Software Básico",
      "Historial completo de clientes y servicios",
      "Control de pagos, deudas y facturación simple",
      "Inventario básico (si aplica a tu nicho)",
      "Notificaciones avanzadas y recordatorios",
      "Dashboard bonito y fácil de usar",
      "Reportes detallados (clientes frecuentes, ingresos, etc.)",
    ],
    price: "$800.000 - $950.000",
    maintenance: "$110.000/mes",
    deliveryTime: "3 semanas",
    idealFor: "Negocios que quieren crecer y tener todo bajo control",
  },
  {
    id: "combo-ganador",
    name: "Paquete 4",
    title: "Combo Ganador",
    subtitle: "Lo mejor de los dos mundos: visibilidad + sistema completo",
    description:
      "El paquete más popular. Incluye Visibilidad Express + Software Pro todo en uno.",
    includes: [
      "Paquete Visibilidad Express completo",
      "Paquete Software Pro completo",
      "Precio especial combinado",
      "Todo integrado y funcionando junto",
    ],
    price: "$1.000.000 - $1.200.000",
    maintenance: "$150.000/mes",
    deliveryTime: "3-4 semanas",
    idealFor: "El 70% de los clientes. Te doy todo y sientes que te estoy haciendo un gran favor",
    popular: true,
  },
];

export const nichosNivel1 = [
  "Salones de belleza y peluquerías",
  "Clínicas veterinarias",
  "Academias y centros de formación",
  "Lavanderías y tintorerías",
  "Estudios fotográficos",
  "Gimnasios boutique",
  "Agencias de seguros",
  "Talleres de mecánica",
  "Centros de estética",
  "Escuelas de baile y yoga",
  "Consultorios médicos",
  "Tiendas de repuestos",
  "Panaderías y cafeterías",
  "Joyerías y relojerías",
  "Farmacias pequeñas",
];

export const whyPoints = [
  {
    icon: "clock",
    title: "Proyectos en máximo 4 semanas",
    description: "Sin tiempos infinitos. Tu solución lista para funcionar en el tiempo acordado.",
  },
  {
    icon: "price",
    title: "Precios accesibles",
    description: "Tarifas justas para pequeños negocios reales. Pagas por lo que necesitas.",
  },
  {
    icon: "support",
    title: "Soporte y mantenimiento",
    description: "No desaparezco después de entregar. Estoy ahí cuando me necesites.",
  },
  {
    icon: "unique",
    title: "Sistema propio",
    description: "Instancia única para tu negocio. No compartes con nadie.",
  },
];

export const processSteps = [
  {
    step: "1",
    title: "Me cuentas qué necesitas",
    description: "Sin tecnicismos. Solo dime cómo funciona tu negocio y qué problema quieres resolver.",
  },
  {
    step: "2",
    title: "Te propongo una solución concreta",
    description: "Sin vender más de lo que necesitas. Con alcance claro y definido.",
  },
  {
    step: "3",
    title: "Desarrollo y te mantengo al tanto",
    description: "Avances reales. Comunicación directa. Sin desaparecer a mitad del proyecto.",
  },
  {
    step: "4",
    title: "Entrega y revisión",
    description: "Recibes algo que funciona desde el día uno. Con espacio para ajustes.",
  },
];
