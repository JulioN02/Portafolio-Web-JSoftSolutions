export type Template = {
  id: string;
  title: string;
  niche: string;
  description: string;
};

export const templates: Template[] = [
  {
    id: "restaurant-template",
    title: "Plantilla Restaurante",
    niche: "Gastronomía",
    description: "Plantilla web para restaurantes con menú y contacto.",
  },
  {
    id: "abogado-template",
    title: "Plantilla Abogado",
    niche: "Abogacia",
    description: "Plantilla web para Abogados independientes.",
  },
];
