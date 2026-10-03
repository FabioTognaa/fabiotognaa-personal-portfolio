export type ImageAsset = {
  src: string;
  srcSet: string;
  sizes: string;
  width?: number;
  height?: number;
};

export type Direction = {
  label: string;
  text: string;
};

export type ExperienceEntryData = {
  id: string;
  logo: ImageAsset;
  logoAlt: string;
  company: string;
  ruolo: string;
  place: string;
  period: string;
  summary: string;
  highlights?: readonly string[];
};

export type StudyEntryData = {
  id: string;
  logo: ImageAsset;
  logoAlt: string;
  school: string;
  place: string;
  period: string;
  degree: string;
  details?: readonly string[];
};

export type CertificateLink = {
  label: string;
  href: string;
};

export type Certificate = {
  id: string;
  title: string;
  summary?: string;
  links: readonly CertificateLink[];
};

export type SkillItem = {
  label: string;
  icon?: string;
};

export type SkillGroup = {
  id: string;
  title: string;
  summary: string;
  items: readonly SkillItem[];
};

export type ProjectStatus = "coming-soon" | "published";

export type StackTag = {
  label: string;
  icon?: string;
};

export type ProjectMention = {
  label: string;
  link: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  context?: string;
  stack: readonly StackTag[];
  github?: string;
  link?: string;
  mentions?: readonly ProjectMention[];
  status?: ProjectStatus;
};

export type NavItem = {
  label: string;
  href: string;
};

export type HeaderCta = {
  label: string;
  href: string;
  download: string;
  type: "download";
};

export type SocialLink = {
  href: string;
  label: string;
};

export type ContactField = "name" | "email" | "message";

export type ContactFormValues = Record<ContactField, string>;

export type ContactFieldErrors = Partial<Record<ContactField, string>>;

export type ContactStatus = "idle" | "sending" | "success" | "error";
