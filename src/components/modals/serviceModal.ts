import { services } from "../../data/services";
import { renderServiceDetail } from "../sections/serviceDetail";
import { openModal } from "./modalManager";

export function openServiceModal(serviceId: string): void {
  openModal({
    id: serviceId,
    items: services,
    getId: (service) => service.id,
    getTitle: (service) => service.title,
    renderContent: renderServiceDetail,
  });
}
