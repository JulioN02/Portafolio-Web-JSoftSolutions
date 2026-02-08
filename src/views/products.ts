import { products } from "../data/products";
import { renderProductCard } from "../components/cards/productCard";
import { renderPageHeader } from "../components/sections/pageHeader";

export function renderProductsView(): string {
  const productsHTML = products
    .map((product) =>
      renderProductCard({
        id: product.id,
        title: product.title,
        description: product.description,
      })
    )
    .join("");

  return `
    <section class="page page-products">
      ${renderPageHeader({
        title: "Productos",
        description: "Herramientas web funcionales listas para usar.",
      })}

      <div class="page-content products-list">
        ${productsHTML}
      </div>
    </section>
  `;
}
