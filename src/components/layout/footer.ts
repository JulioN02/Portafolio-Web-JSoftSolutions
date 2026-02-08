export function renderFooter(): string {
  return `
    <div class="footer-container">
      <div class="footer-brand">
        <p>© ${new Date().getFullYear()} J-Soft Solutions</p>
      </div>

      <div class="footer-links">
        <a href="#" aria-label="GitHub">GitHub</a>
        <a href="#" aria-label="LinkedIn">LinkedIn</a>
      </div>
    </div>
  `;
}
