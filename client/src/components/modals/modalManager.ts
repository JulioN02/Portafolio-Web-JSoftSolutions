import { renderModal } from "../ui/modal";

const MODAL_SELECTOR = ".modal-overlay";

type OpenModalParams<T> = {
  id: string;
  items: T[];
  getId: (item: T) => string;
  getTitle: (item: T) => string;
  renderContent: (item: T) => string;
};

export function openModal<T>({
  id,
  items,
  getId,
  getTitle,
  renderContent,
}: OpenModalParams<T>): void {
  // 🔒 Solo un modal activo
  if (document.querySelector(MODAL_SELECTOR)) return;

  const item = items.find((item) => getId(item) === id);

  if (!item) {
    console.warn("Modal item not found:", id);
    return;
  }

  const modalHTML = renderModal({
    title: getTitle(item),
    content: renderContent(item),
  });

  document.body.insertAdjacentHTML("beforeend", modalHTML);

  attachModalEvents();
}

function attachModalEvents(): void {
  const overlay = document.querySelector(
    MODAL_SELECTOR
  ) as HTMLElement | null;

  if (!overlay) return;

  const closeButton = overlay.querySelector(
    ".modal-close"
  ) as HTMLElement | null;

  const closeModal = () => {
    overlay.remove();
  };

  closeButton?.addEventListener("click", closeModal);

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeModal();
    }
  });
}
