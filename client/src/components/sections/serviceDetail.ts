import { Service } from "../../data/services";

export function renderServiceDetail(service: Service): string {
  const includesHTML = service.includes
    .map((item) => `<li>${item}</li>`)
    .join("");

  return `
    <section class="service-detail">
      <p>${service.details}</p>

      <h4>¿Qué incluye?</h4>
      <ul>
        ${includesHTML}
      </ul>
    </section>
  `;
}
