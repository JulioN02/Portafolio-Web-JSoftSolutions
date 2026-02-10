import { externalLinks } from "../data/links";

// 🔹 Función para escapar caracteres HTML
function escapeHtml(text: string): string {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

export function renderContactView(): string {
  const emailLink = externalLinks.getEmailLink();
  const githubUrl = escapeHtml(externalLinks.github);
  const linkedinUrl = escapeHtml(externalLinks.linkedin);
  const email = escapeHtml("jsoftsolutions1@gmail.com");

  return `
    <section class="page page-contact">
      <header class="page-header">
        <h1>Contacto</h1>
        <p>
          ¿Tienes un proyecto, una idea o una oportunidad profesional?
          Puedes escribirme directamente o usar el formulario.
        </p>
      </header>

      <div class="page-content contact-content">
        <form id="contact-form" class="contact-form">
          <div class="form-group">
            <label for="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tu@email.com"
              required
              autocomplete="email"
            />
          </div>

          <div class="form-group">
            <label for="subject">Asunto</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Asunto del mensaje"
              required
              autocomplete="off"
              maxlength="100"
            />
          </div>

          <div class="form-group">
            <label for="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Cuéntame brevemente sobre tu idea o necesidad"
              required
              maxlength="1000"
            ></textarea>
          </div>

          <button type="submit" class="ui-button">
            Enviar mensaje
          </button>

          <p class="form-note">
            El mensaje se enviará usando tu cliente de correo.
          </p>
        </form>

        <aside class="contact-channels">
          <h2>Otros canales</h2>
          <ul>
            <li>
              <strong>Email:</strong>
              <a href="${emailLink}" rel="noopener noreferrer">
                ${email}
              </a>
            </li>
            <li>
              <strong>LinkedIn:</strong>
              <a href="${linkedinUrl}" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/julio-nieto-martinez/
              </a>
            </li>
            <li>
              <strong>GitHub:</strong>
              <a href="${githubUrl}" target="_blank" rel="noopener noreferrer">
                github.com/JulioN02
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  `;
}