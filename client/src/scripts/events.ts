import { openServiceModal } from "../components/modals/serviceModal";

export function registerGlobalEvents(): void {
  document.addEventListener("click", handleGlobalClick);
}

function handleGlobalClick(event: MouseEvent): void {
  const target = event.target as HTMLElement | null;
  if (!target) return;

  // 🔹 Service
  const serviceId = target.getAttribute("data-service-id");
  if (serviceId) {
    openServiceModal(serviceId);
    return;
  }
}
