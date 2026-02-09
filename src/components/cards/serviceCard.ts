type ServiceCardProps = {
  id: string;
  title: string;
  description: string;
};

export function renderServiceCard(props: ServiceCardProps): string {
  const { id, title, description } = props;

  return `
    <article class="service-card">
      <h3>${title}</h3>
      <p>${description}</p>
      <button
        type="button"
        class="ui-button"
        data-service-id="${id}"
      >
        Ver más
      </button>
    </article>
  `;
}
