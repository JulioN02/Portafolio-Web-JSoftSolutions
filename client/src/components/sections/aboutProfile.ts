import { AboutProfile } from "../../data/about";

export function renderAboutProfile(profile: AboutProfile): string {
  return profile.sections
    .map(
      (section) => `
      <section class="about-section">
        <h3>${section.title}</h3>
        ${section.paragraphs.map(p => `<p>${p}</p>`).join("")}
      </section>
    `
    )
    .join("");
}
