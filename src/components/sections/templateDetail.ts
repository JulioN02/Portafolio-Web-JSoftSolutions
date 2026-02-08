import type { Template } from "../../data/templates";

export function renderTemplateDetail(template: Template): string {
  return `
    <section class="template-detail">
      <header class="detail-header">
        <h2>${template.title}</h2>
        <small class="detail-niche">${template.niche}</small>
      </header>

      <div class="detail-content">
        <p>${template.description}</p>
      </div>
    </section>
  `;
}
