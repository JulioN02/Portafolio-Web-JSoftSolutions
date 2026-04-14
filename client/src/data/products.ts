export type Product = {
  id: string;
  title: string;
  description: string;
  type: "free" | "paid";
  status: "available" | "in-progress";
};

export const products: Product[] = [
  {
    id: "qr-generator",
    title: "Generador de QR",
    description: "Herramienta web para generar códigos QR personalizados.",
    type: "free",
    status: "available",
  },
];
