import {
  professionalProfile,
  personalProfile,
  AboutProfileType
} from "../data/about";
import { renderAboutProfile } from "../components/sections/aboutProfile";

let currentProfile: AboutProfileType = "professional";

export function initAboutToggle(): void {
  const professionalBtn = document.getElementById("profile-professional");
  const personalBtn = document.getElementById("profile-personal");
  const contentContainer = document.getElementById("about-content");

  if (!professionalBtn || !personalBtn || !contentContainer) return;

  const render = () => {
    contentContainer.innerHTML =
      currentProfile === "professional"
        ? renderAboutProfile(professionalProfile)
        : renderAboutProfile(personalProfile);

    professionalBtn.classList.toggle("active", currentProfile === "professional");
    personalBtn.classList.toggle("active", currentProfile === "personal");
  };

  professionalBtn.addEventListener("click", () => {
    currentProfile = "professional";
    render();
  });

  personalBtn.addEventListener("click", () => {
    currentProfile = "personal";
    render();
  });

  render(); // render inicial
}
