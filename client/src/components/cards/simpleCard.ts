type SimpleCardProps = {
  title: string;
  description: string;
};

export function renderSimpleCard(props: SimpleCardProps): string {
  const { title, description } = props;

  return `
    <article class="simple-card">
      <h3>${title}</h3>
      <p>${description}</p>
    </article>
  `;
}
