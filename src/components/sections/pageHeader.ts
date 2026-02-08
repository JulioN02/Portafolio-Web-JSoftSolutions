type PageHeaderProps = {
  title: string;
  description?: string;
};

export function renderPageHeader(props: PageHeaderProps): string {
  const { title, description } = props;

  return `
    <header class="page-header">
      <h1>${title}</h1>
      ${description ? `<p>${description}</p>` : ""}
    </header>
  `;
}
