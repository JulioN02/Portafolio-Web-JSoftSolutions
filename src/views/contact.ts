export function renderContactView(): string {
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
            ></textarea>
          </div>

          <button type="submit" class="btn btn-primary">
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
              <a href="mailto:tuemail@dominio.com">
                tuemail@dominio.com
              </a>
            </li>
            <li>
              <strong>LinkedIn:</strong>
              <a href="https://linkedin.com/in/tuusuario" target="_blank">
                linkedin.com/in/tuusuario
              </a>
            </li>
            <li>
              <strong>GitHub:</strong>
              <a href="https://github.com/tuusuario" target="_blank">
                github.com/tuusuario
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  `;
}
