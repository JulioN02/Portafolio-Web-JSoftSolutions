import { openServiceModal } from "./serviceModal";
import { openProductModal } from "./productModal";
import { openTemplateModal } from "./templateModal";

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

  // 🔹 Product
  const productId = target.getAttribute("data-product-id");
  if (productId) {
    openProductModal(productId);
    return;
  }

  // 🔹 Template
  const templateId = target.getAttribute("data-template-id");
  if (templateId) {
    openTemplateModal(templateId);
    return;
  }
}
