import { openServiceModal } from "./serviceModal";

export function initServiceInteractions(): void {
  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;

    if (target.matches(".service-card-action")) {
      const serviceId = target.dataset.serviceId;

      if (serviceId) {
        openServiceModal(serviceId);
      }
    }
  });
}
