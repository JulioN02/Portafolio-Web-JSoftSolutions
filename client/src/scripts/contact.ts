import { externalLinks } from "../data/links";

export function initContactForm(): void {
  const form = document.getElementById("contact-form") as HTMLFormElement | null;

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailInput = form.querySelector<HTMLInputElement>("#email");
    const subjectInput = form.querySelector<HTMLInputElement>("#subject");
    const messageInput = form.querySelector<HTMLTextAreaElement>("#message");

    if (!emailInput || !subjectInput || !messageInput) return;

    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    if (!email || !subject || !message) {
      alert("Por favor completa todos los campos.");
      return;
    }

    const mailtoLink = buildMailToLink({
      to: externalLinks.email,
      from: email,
      subject,
      message,
    });

    window.location.href = mailtoLink;
  });
}

type MailToParams = {
  to: string;
  from: string;
  subject: string;
  message: string;
};

function buildMailToLink({
  to,
  from,
  subject,
  message,
}: MailToParams): string {
  const body = `
Correo del remitente: ${from}

Mensaje:
${message}
  `.trim();

  return (
    `mailto:${encodeURIComponent(to)}` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`
  );
}
