import { skillIconUrl } from "../../lib/skill-icons";

/** Icona skill: URL risolto a build time, lazy load delegato al browser. */
function LazySkillIcon({ iconKey }: { iconKey?: string }) {
  const src = skillIconUrl(iconKey);
  const isPhp = iconKey === "php";
  const size = isPhp ? 18 : 14;

  if (!src) {
    return null;
  }

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center ${isPhp ? "h-[1.125rem] w-[1.125rem]" : "h-3.5 w-3.5"}`}
      aria-hidden
    >
      <img
        src={src}
        alt=""
        className="h-full w-full object-contain"
        width={size}
        height={size}
        loading="lazy"
        decoding="async"
      />
    </span>
  );
}

export default LazySkillIcon;
