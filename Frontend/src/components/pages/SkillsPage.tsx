import SkillGroupCard from "../ui/SkillGroupCard";
import Reveal from "../ui/Reveal";
import { skillGroups } from "../../lib/skills";
import { certificates } from "../../lib/certificates";
import CertificateCard from "../ui/CertificateCard";
const GROUP_ORDER = ["backend", "AI", "frontend", "tooling", "foundations"];

// Ordina secondo GROUP_ORDER, ma tiene in coda i gruppi non elencati: un id
// nuovo aggiunto a skills.ts non sparisce più dalla pagina.
const orderOf = (id: string) => {
  const position = GROUP_ORDER.indexOf(id);
  return position === -1 ? GROUP_ORDER.length : position;
};

const groups = [...skillGroups].sort((a, b) => orderOf(a.id) - orderOf(b.id));

function SkillsPage() {
  return (
    <>
      <section
        id="competenze"
        className="section-pad scroll-mt-header mx-auto max-w-7xl xl:max-w-[88rem]"
        aria-labelledby="skills-heading"
      >
        <Reveal className="skills-intro">
          <div className="skills-intro__head">
            <p className="section-label">Competenze</p>
            <h1
              id="skills-heading"
              className="section-heading mt-3 max-w-[16ch]"
            >
              Stack personale
            </h1>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-6 md:mt-24">
          {groups.map((group, index) => (
            <Reveal
              key={group.id}
              delay={80 + index * 80}
              className={"skills-layout__item"}
            >
              <SkillGroupCard group={group} featured={group.id === "backend"} />
            </Reveal>
          ))}
        </div>
      </section>
      <section
        id="certificati"
        className="section-pad mx-auto max-w-7xl pt-0 xl:max-w-[88rem]"
        aria-labelledby="certifications-heading"
      >
        <Reveal className="skills-intro">
          <div className="skills-intro__head">
            <h2
              id="certifications-heading"
              className="section-heading mt-3 max-w-[16ch]"
            >
              Certificazioni
            </h2>
          </div>
        </Reveal>
        <div className="flex flex-row gap-6 md:mt-24">
          {certificates.map((certificate) => (
            <Reveal key={certificate.id} className={"skills-layout__item"}>
              <CertificateCard certificate={certificate} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

export default SkillsPage;
