type ProductCardProps = {
  id: string;
  title: string;
  description: string;
};

export function renderProductCard({
  id,
  title,
  description,
}: ProductCardProps): string {
  return `
    <article class="card product-card">
      <h3>${title}</h3>
      <p>${description}</p>
      <button data-product-id="${id}" class="ui-button">
        Ver más
      </button>
    </article>
  `;
}
