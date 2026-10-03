const ICON_LOADERS = {
  html: () => import("../assets/icons/skills/html-icon.svg"),
  css: () => import("../assets/icons/skills/css-icon.svg"),
  javascript: () => import("../assets/icons/skills/javascript-icon.svg"),
  react: () => import("../assets/icons/skills/react-icon.svg"),
  nextjs: () => import("../assets/icons/skills/nextjs-icon.svg"),
  tailwind: () => import("../assets/icons/skills/tailwind-icon.svg"),
  nodejs: () => import("../assets/icons/skills/nodejs-icon.svg"),
  typescript: () => import("../assets/icons/skills/typescript-icon.svg"),
  python: () => import("../assets/icons/skills/python-icon.svg"),
  java: () => import("../assets/icons/skills/java-icon.svg"),
  c: () => import("../assets/icons/skills/c-icon.svg"),
  cpp: () => import("../assets/icons/skills/cpp-icon.svg"),
  php: () => import("../assets/icons/skills/php-icon.svg"),
  fastapi: () => import("../assets/icons/skills/fastapi-icon.svg"),
  postgresql: () => import("../assets/icons/skills/postgresql-icon.webp"),
  docker: () => import("../assets/icons/skills/docker-icon.svg"),
  githubactions: () => import("../assets/icons/skills/githubactions-icon.svg"),
  claudecode: () => import("../assets/icons/skills/claudecode-icon.svg"),
  cursor: () => import("../assets/icons/skills/cursor-icon.webp"),
  n8n: () => import("../assets/icons/skills/n8n-icon.svg"),
  wordpress: () => import("../assets/icons/skills/wordpress-icon.svg"),
};

export type SkillIconKey = keyof typeof ICON_LOADERS;

const iconCache = new Map<SkillIconKey, string>();
const iconRequests = new Map<SkillIconKey, Promise<string | null>>();

function isSkillIconKey(key: string): key is SkillIconKey {
  return Object.prototype.hasOwnProperty.call(ICON_LOADERS, key);
}

export function loadSkillIcon(key: string | undefined | null) {
  if (!key || !isSkillIconKey(key)) {
    return Promise.resolve(null);
  }

  const cached = iconCache.get(key);
  if (cached) {
    return Promise.resolve(cached);
  }

  const pending = iconRequests.get(key);
  if (pending) {
    return pending;
  }

  const request = ICON_LOADERS[key]()
    .then((mod) => {
      const src = mod.default;
      iconCache.set(key, src);
      return src;
    })
    .catch(() => null)
    .finally(() => {
      iconRequests.delete(key);
    });

  iconRequests.set(key, request);
  return request;
}
