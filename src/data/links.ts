export type ExternalLinks = {
  github: string;
  linkedin: string;
  email: string;
  getEmailLink: () => string;
};

const emailUser = "jsoftsolutions1";
const emailDomain = "gmail.com";

export const externalLinks: ExternalLinks = {
  github: "https://github.com/JulioN02",
  linkedin: "https://www.linkedin.com/in/julio-nieto-martinez/",
  email: `${emailUser}@${emailDomain}`,
  getEmailLink: () => `mailto:${emailUser}@${emailDomain}`,
};