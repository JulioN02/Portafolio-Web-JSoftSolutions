type PageHeaderProps = {
  title: string;
  description?: string;
  bgImage?: string;
};

export function renderPageHeader(props: PageHeaderProps): string {
  const { title, description, bgImage } = props;

  const style = bgImage ? `style="--header-bg: url('${bgImage}')"` : "";
  const className = `page-header ${bgImage ? "has-bg" : ""}`;

  return `
    <header class="${className}" ${style}>
      <div class="header-content">
        <h1>${title}</h1>
        ${description ? `<p>${description}</p>` : ""}
      </div>
    </header>
  `;
}
