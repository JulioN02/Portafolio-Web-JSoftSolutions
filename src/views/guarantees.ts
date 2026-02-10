import {
  guaranteesIntro,
  guaranteesList,
  guaranteesLimits,
} from "../data/guarantees";

export function renderGuaranteesView(): string {
  return `
    <section class="page page-guarantees">
      <header class="page-header">
        <h1>Garantías y forma de trabajo</h1>
        <p>${guaranteesIntro}</p>
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

        <section class="guarantees-limits">
          <h2>Alcances y límites</h2>
          <ul>
            ${guaranteesLimits
              .map((limit) => `<li>${limit}</li>`)
              .join("")}
          </ul>
        </section>
      </div>
    </section>
  `;
}
