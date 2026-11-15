import html from "../assets/icons/skills/html-icon.svg?url";
import css from "../assets/icons/skills/css-icon.svg?url";
import javascript from "../assets/icons/skills/javascript-icon.svg?url";
import react from "../assets/icons/skills/react-icon.svg?url";
import nextjs from "../assets/icons/skills/nextjs-icon.svg?url";
import tailwind from "../assets/icons/skills/tailwind-icon.svg?url";
import nodejs from "../assets/icons/skills/nodejs-icon.svg?url";
import typescript from "../assets/icons/skills/typescript-icon.svg?url";
import python from "../assets/icons/skills/python-icon.svg?url";
import java from "../assets/icons/skills/java-icon.svg?url";
import c from "../assets/icons/skills/c-icon.svg?url";
import cpp from "../assets/icons/skills/cpp-icon.svg?url";
import php from "../assets/icons/skills/php-icon.svg?url";
import fastapi from "../assets/icons/skills/fastapi-icon.svg?url";
import postgresql from "../assets/icons/skills/postgresql-icon.svg?url";
import docker from "../assets/icons/skills/docker-icon.svg?url";
import githubactions from "../assets/icons/skills/githubactions-icon.svg?url";
import claudecode from "../assets/icons/skills/claudecode-icon.svg?url";
import cursor from "../assets/icons/skills/cursor-icon.svg?url";
import n8n from "../assets/icons/skills/n8n-icon.svg?url";
import wordpress from "../assets/icons/skills/wordpress-icon.svg?url";

const SKILL_ICONS = {
  html,
  css,
  javascript,
  react,
  nextjs,
  tailwind,
  nodejs,
  typescript,
  python,
  java,
  c,
  cpp,
  php,
  fastapi,
  postgresql,
  docker,
  githubactions,
  claudecode,
  cursor,
  n8n,
  wordpress,
} as const;

export type SkillIconKey = keyof typeof SKILL_ICONS;

/** URL dell'icona, risolto a build time: il markup è statico, niente JS. */
export function skillIconUrl(key: string | undefined | null) {
  if (!key || !Object.hasOwn(SKILL_ICONS, key)) {
    return null;
  }

  return SKILL_ICONS[key as SkillIconKey];
}
