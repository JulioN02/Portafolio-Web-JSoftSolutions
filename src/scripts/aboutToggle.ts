import {
  professionalProfile,
  technicalProfile,
  AboutProfileType
} from "../data/about";
import { renderAboutProfile } from "../components/sections/aboutProfile";

let currentProfile: AboutProfileType = "professional";

export function initAboutToggle(): void {
  const professionalBtn = document.getElementById("profile-professional");
  const technicalBtn = document.getElementById("profile-technical");
  const contentContainer = document.getElementById("about-content");

  if (!professionalBtn || !technicalBtn || !contentContainer) return;

  const render = () => {
    contentContainer.innerHTML =
      currentProfile === "professional"
        ? renderAboutProfile(professionalProfile)
        : renderAboutProfile(technicalProfile);

    professionalBtn.classList.toggle("active", currentProfile === "professional");
    technicalBtn.classList.toggle("active", currentProfile === "technical");
  };

  professionalBtn.addEventListener("click", () => {
    currentProfile = "professional";
    render();
  });

  technicalBtn.addEventListener("click", () => {
    currentProfile = "technical";
    render();
  });

  render(); // render inicial
}
