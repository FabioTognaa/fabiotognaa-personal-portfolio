import jsIcon from "../../assets/javascript-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import tailwindIcon from "../../assets/tailwind-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import nodeIcon from "../../assets/nodejs-icon.svg";
import pythonIcon from "../../assets/python-icon.svg";
import javaIcon from "../../assets/java-icon.svg";
import cppIcon from "../../assets/cpp-icon.svg";
import cIcon from "../../assets/c-icon.svg";
import gitIcon from "../../assets/github-icon.svg";
import SectionTitle from "../ui/SectionTitle";
import SkillCard from "../ui/SkillCard";

const skills = [
  {
    id: 1,
    title: "Frontend Web",
    icons: [
      { src: htmlIcon, alt: "HTML5" },
      { src: cssIcon, alt: "CSS3" },
      { src: jsIcon, alt: "JavaScript" },
    ],
    level: "Intermediate",
    description:
      "HTML, CSS e JavaScript per creare interfacce pulite, responsive e curate nei dettagli.",
    tags: ["HTML5 semantico", "CSS moderno", "Responsive design"],
  },
  {
    id: 2,
    title: "React & UI moderne",
    icons: [
      { src: reactIcon, alt: "React" },
      { src: tailwindIcon, alt: "Tailwind CSS" },
    ],
    level: "Intermediate",
    description:
      "Componenti riutilizzabili, gestione dello stato e interfacce moderne costruite con React e Tailwind CSS.",
    tags: ["React", "Tailwind CSS", "Single Page Application"],
  },
  {
    id: 3,
    title: "Back-End & Versioning",
    icons: [
      { src: nodeIcon, alt: "Node.js" },
      { src: pythonIcon, alt: "Python" },
      { src: gitIcon, alt: "Git" },
    ],
    level: "Intermediate",
    description:
      "Node.js e Python per piccoli progetti, script e API, insieme a Git per il versionamento del codice e la collaborazione.",
    tags: ["Node.js", "Git"],
  },
  {
    id: 4,
    title: "Basi di programmazione",
    icons: [
      { src: javaIcon, alt: "Java" },
      { src: cIcon, alt: "C" },
      { src: cppIcon, alt: "C++" },
    ],
    level: "School",
    description:
      "Conoscenze in C, C++ e Java acquisite in contesti didattici, utili per strutture dati, algoritmi e comprensione dei fondamenti della programmazione.",
    tags: ["Java", "C", "C++"],
  },
];

function SkillSection() {
  return (
    <div id="skills" className="scroll-mt-28">
      <SectionTitle label="Skills" />
      <section className="mt-10 mb-16 px-4 md:mx-16 md:mt-0 md:mb-20">
        <p className="mt-10 mb-10 text-center text-base font-light text-slate-800 md:mt-20 md:mb-16 md:text-xl">
          Un focus chiaro sul frontend moderno, con una base solida di
          programmazione generale e un percorso in crescita su tecnologie
          moderne per il web.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </section>
    </div>
  );
}
export default SkillSection;
