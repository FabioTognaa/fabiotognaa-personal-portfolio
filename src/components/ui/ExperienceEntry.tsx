import Reveal from "./Reveal";
import type { ExperienceEntryData } from "../../lib/types";

function ExperienceEntry({
  entry,
  index,
}: {
  entry: ExperienceEntryData;
  index: number;
}) {
  const highlights = entry.highlights ?? [];
  const hasHighlights = highlights.length > 0;

  return (
    <Reveal
      as="li"
      delay={index * 100}
      className="grid gap-4 sm:gap-6 md:grid-cols-[auto_1fr] md:items-start md:gap-x-8"
    >
      <div className="flex shrink-0 items-start md:pt-5">
        <img
          src={entry.logo.src}
          srcSet={entry.logo.srcSet}
          sizes={entry.logo.sizes}
          alt={entry.logoAlt}
          className="study-logo h-11 w-auto max-w-30 object-contain md:h-12"
          width={120}
          height={48}
          loading="lazy"
          decoding="async"
        />
      </div>

      <article className="surface-panel p-6 pt-4 md:p-8 md:pt-5">
        <h3 className="font-display text-ink mt-2 text-xl font-bold md:text-2xl">
          {entry.company}
        </h3>
        <p className="text-ink-soft mt-1 text-sm">{entry.place}</p>
        <ul className="mt-4 list-none space-y-4 p-0">
          {entry.roles.map((role, i) => {
            const isLast = i === entry.roles.length - 1;
            return (
              <li key={`${role.ruolo}-${role.period}`} className="relative pl-5">
                <span
                  aria-hidden
                  className="bg-accent absolute top-2 left-0 h-1.5 w-1.5 rounded-full"
                />
                {!isLast && (
                  <span
                    aria-hidden
                    className="bg-line absolute top-4.5 bottom-[-1rem] left-[2.5px] w-px"
                  />
                )}
                <p className="experience-role text-ink text-base font-semibold md:text-lg">
                  {role.ruolo}
                </p>
                <p className="text-accent text-xs font-semibold tracking-wider uppercase">
                  {role.period}
                </p>
              </li>
            );
          })}
        </ul>
        <p className="text-ink-muted mt-4 text-base leading-relaxed">
          {entry.summary}
        </p>

        {hasHighlights && (
          <ul className="border-line/80 text-ink-muted mt-5 space-y-2 border-t pt-4 text-sm leading-relaxed">
            {highlights.map((line) => (
              <li key={line} className="flex gap-2.5">
                <span
                  className="bg-accent mt-2 h-1 w-1 shrink-0 rounded-full"
                  aria-hidden
                />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        )}
      </article>
    </Reveal>
  );
}

export default ExperienceEntry;
