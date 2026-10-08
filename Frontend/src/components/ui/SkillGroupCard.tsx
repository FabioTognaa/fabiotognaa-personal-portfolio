import LazySkillIcon from "./LazySkillIcon";
import type { SkillGroup } from "../../lib/types";

function SkillGroupCard({ group }: { group: SkillGroup; featured?: boolean }) {
  return (
    <article
      className={`skill-card surface-panel relative flex h-full flex-col overflow-hidden p-6 md:p-8`}
    >
      <header className="skill-card__header relative">
        <h2 className="skill-card__title">{group.title}</h2>
        <p className="skill-card__summary">{group.summary}</p>
      </header>

      <ul
        className="skill-card__tags relative mt-auto flex flex-wrap pt-5"
        aria-label={`Competenze: ${group.title}`}
      >
        {group.items.map((item) => {
          return (
            <li key={item.label}>
              <span className="skill-tag">
                <LazySkillIcon iconKey={item.icon} />
                <span>{item.label}</span>
              </span>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export default SkillGroupCard;
