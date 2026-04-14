import { templates } from "../../data/templates";
import { renderTemplateDetail } from "../sections/templateDetail";
import { openModal } from "./modalManager";

export function openTemplateModal(templateId: string): void {
  openModal({
    id: templateId,
    items: templates,
    getId: (template) => template.id,
    getTitle: (template) => template.title,
    renderContent: renderTemplateDetail,
  });
}
