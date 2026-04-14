import type { Product } from "../../data/products";

export function renderProductDetail(product: Product): string {
  return `
    <section class="product-detail">
      <header class="detail-header">
        <h2>${product.title}</h2>
      </header>

      <div class="detail-content">
        <p>${product.description}</p>

        <ul class="detail-meta">
          <li><strong>Tipo:</strong> ${formatType(product.type)}</li>
          <li><strong>Estado:</strong> ${formatStatus(product.status)}</li>
        </ul>
      </div>
    </section>
  `;
}

function formatType(type: Product["type"]): string {
  return type === "free" ? "Gratuito" : "De pago";
}

function formatStatus(status: Product["status"]): string {
  return status === "available" ? "Disponible" : "En desarrollo";
}
