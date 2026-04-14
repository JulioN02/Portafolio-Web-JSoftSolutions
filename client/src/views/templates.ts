import { templates } from "../data/templates";
import { renderTemplateCard } from "../components/cards/templateCard";
import { renderPageHeader } from "../components/sections/pageHeader";
import templatesBg from "../assets/images/templates.png";

export function renderTemplatesView(): string {
  const templatesHTML = templates
    .map((template) =>
      renderTemplateCard({
        id: template.id,
        title: template.title,
        niche: template.niche,
        description: template.description,
      })
    )
    .join("");

  return `
    <section class="page page-templates">
      ${renderPageHeader({
        title: "Plantillas Web",
        description: "Bases reutilizables adaptadas a distintos nichos.",
        bgImage: templatesBg,
      })}

      <div class="page-content templates-list">
        ${templatesHTML}
      </div>
    </section>
  `;
}
