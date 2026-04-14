type CTAButtonProps = {
  label: string;
  route: string;
};

export function renderCTAButton(props: CTAButtonProps): string {
  const { label, route } = props;

  return `
    <a href="${route}" data-route="${route}" class="cta-button">
      ${label}
    </a>
  `;
}
