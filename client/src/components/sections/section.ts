type SectionProps = {
  title?: string;
  content: string;
};

export function renderSection(props: SectionProps): string {
  const { title, content } = props;

  return `
    <section class="section">
      ${title ? `<h2>${title}</h2>` : ""}
      <div class="section-content">
        ${content}
      </div>
    </section>
  `;
}
