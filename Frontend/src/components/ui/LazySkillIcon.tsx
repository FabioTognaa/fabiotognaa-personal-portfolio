import { useLazySkillIcon } from "../../hooks/useLazySkillIcon";

/** Icona skill caricata solo quando entra in viewport. */
function LazySkillIcon({ iconKey }: { iconKey?: string }) {
  const { ref, src } = useLazySkillIcon(iconKey, Boolean(iconKey));
  const isPhp = iconKey === "php";
  const size = isPhp ? 18 : 14;

  if (!iconKey) {
    return null;
  }

  return (
    <span
      ref={ref}
      className={`inline-flex shrink-0 items-center justify-center opacity-80 ${isPhp ? "h-[1.125rem] w-[1.125rem]" : "h-3.5 w-3.5"}`}
      aria-hidden
    >
      {src ? (
        <img
          src={src}
          alt=""
          className="h-full w-full object-contain"
          width={size}
          height={size}
          loading="lazy"
          decoding="async"
        />
      ) : null}
    </span>
  );
}

export default LazySkillIcon;
