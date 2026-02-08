type ModalProps = {
  title: string;
  content: string;
};

export function renderModal(props: ModalProps): string {
  const { title, content } = props;

  return `
    <div class="modal-overlay">
      <div class="modal">
        <header class="modal-header">
          <h3>${title}</h3>
          <button type="button" class="modal-close">×</button>
        </header>

        <div class="modal-content">
          ${content}
        </div>
      </div>
    </div>
  `;
}
