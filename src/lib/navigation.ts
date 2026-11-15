import { CV_PATH, CV_FILENAME } from "./static-assets";
import type { HeaderCta, NavItem, SocialLink } from "./types";

export const siteNav = [
  { label: "Home", href: "/" },
  { label: "Chi sono", href: "/about" },
  { label: "Percorso", href: "/studies" },
  { label: "Competenze", href: "/skills" },
  { label: "Progetti", href: "/projects" },
  { label: "Contatto", href: "/contact" },
] satisfies NavItem[];

export const headerCta = {
  label: "Scarica CV",
  href: CV_PATH,
  download: CV_FILENAME,
  type: "download",
} satisfies HeaderCta;

export const socialLinks = [
  {
    href: "https://www.linkedin.com/in/fabio-tognarelli",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/FabioTognaa",
    label: "GitHub",
  },
  {
    href: "https://www.instagram.com/fabiotognarellii",
    label: "Instagram",
  },
] satisfies SocialLink[];
