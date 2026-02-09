type TemplateCardProps = {
  id: string;
  title: string;
  niche: string;
  description: string;
};

export function renderTemplateCard({
  id,
  title,
  niche,
  description,
}: TemplateCardProps): string {
  return `
    <article class="card template-card">
      <h3>${title}</h3>
      <small>${niche}</small>
      <p>${description}</p>
      <button data-template-id="${id}" class="ui-button">
        Ver más
      </button>
    </article>
  `;
}
