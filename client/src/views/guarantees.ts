import {
  guaranteesIntro,
  guaranteesList,
  guaranteesLimits,
} from "../data/guarantees";

export function renderGuaranteesView(): string {
  return `
    <section class="page page-guarantees">
      <header class="page-header">
        <h1>${guaranteesIntro}</h1>
      </header>

      <div class="page-content">
        <section class="guarantees-list">
          ${guaranteesList
            .map(
              (item) => `
                <article class="guarantee-item">
                  <h3>${item.title}</h3>
                  <p>${item.description}</p>
                </article>
              `
            )
            .join("")}
        </section>

        <section class="guarantees-limits" style="margin-top: 3rem; background: rgba(0,0,0,0.03); padding: 2rem; border-radius: 8px;">
          <h2 style="margin-bottom: 1rem;">Qué NO incluye (transparencia):</h2>
          <ul style="margin-bottom: 2rem;">
            ${guaranteesLimits
              .map((limit) => `<li>— ${limit}</li>`)
              .join("")}
          </ul>
          <p style="font-weight: bold; font-style: italic;">Transparencia = confianza.</p>
        </section>
      </div>
    </section>
  `;
}
