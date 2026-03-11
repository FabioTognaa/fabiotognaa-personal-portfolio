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

function SkillPill({ label }) {
  return (
    <span className="inline-flex items-center rounded-full border border-blue-200/70 bg-white/70 px-3 py-1 text-xs font-medium text-slate-900 shadow-sm shadow-blue-100/50 backdrop-blur-sm transition-all duration-150 ease-out hover:-translate-y-0.5 hover:border-[#0a2342] hover:bg-[#0a2342] hover:text-white hover:shadow-md hover:shadow-blue-300/60 md:text-sm cursor-default">
      {label}
    </span>
  );
}

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

        <div className="grid gap-8 md:grid-cols-3">
          {/* Colonna 1: Cosa uso per il frontend */}
          <div className="flex flex-col gap-4 rounded-2xl border border-blue-200/70 bg-white/60 p-6 shadow-md shadow-blue-100/60 backdrop-blur-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:border-blue-300/90 hover:shadow-xl/50">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <img src={htmlIcon} alt="HTML5" className="h-8 w-8" />
                <img src={cssIcon} alt="CSS3" className="h-8 w-8" />
                <img src={jsIcon} alt="JavaScript" className="h-8 w-8" />
              </div>
            </div>
            <h2 className="text-lg font-semibold text-slate-900 md:text-xl">
              Frontend Web
            </h2>
            <p className="text-sm text-slate-700 md:text-base">
              <span className="font-semibold">HTML</span>,{" "}
              <span className="font-semibold">CSS</span> e{" "}
              <span className="font-semibold">JavaScript</span> per creare
              interfacce pulite, responsive e curate nei dettagli.
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <SkillPill label="HTML5 semantico" />
              <SkillPill label="CSS moderno" />
              <SkillPill label="Responsive design" />
            </div>
          </div>

          {/* Colonna 2: React & UI moderne */}
          <div className="flex flex-col gap-4 rounded-2xl border border-blue-200/70 bg-white/60 p-6 shadow-md shadow-blue-100/60 backdrop-blur-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:border-blue-300/90 hover:shadow-xl/50">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <img src={reactIcon} alt="React" className="h-8 w-8" />
                <img src={tailwindIcon} alt="Tailwind CSS" className="h-8 w-8" />
              </div>
            </div>
            <h2 className="text-lg font-semibold text-slate-900 md:text-xl">
              React & UI moderne
            </h2>
            <p className="text-sm text-slate-700 md:text-base">
              Componenti riutilizzabili, gestione dello stato e interfacce
              moderne costruite con{" "}
              <span className="font-semibold">React</span> e{" "}
              <span className="font-semibold">Tailwind CSS</span>.
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <SkillPill label="React" />
              <SkillPill label="Tailwind CSS" />
              <SkillPill label="Single Page Application" />
            </div>
          </div>

          {/* Colonna 3: Back-End & strumenti */}
          <div className="flex flex-col gap-5 rounded-2xl border border-blue-200/70 bg-white/60 p-6 shadow-md shadow-blue-100/60 backdrop-blur-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:border-blue-300/90 hover:shadow-xl/50">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <img
                    src={nodeIcon}
                    alt="Node.js"
                    className="h-8 w-8 object-contain"
                  />
                  <img
                    src={pythonIcon}
                    alt="Python"
                    className="h-8 w-8 object-contain"
                  />
                  <img src={gitIcon} alt="Git" className="h-6 w-6" />
                </div>
              </div>
              <h2 className="text-lg font-semibold text-slate-900 md:text-xl">
                Back-End & strumenti
              </h2>
              <p className="text-sm text-slate-700 md:text-base">
                <span className="font-semibold">Node.js</span> e{" "}
                <span className="font-semibold">Python</span> per piccoli
                progetti, script e API, insieme a{" "}
                <span className="font-semibold">Git</span> per il versionamento
                del codice e la collaborazione.
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <SkillPill label="Node.js" />
                <SkillPill label="Python" />
                <SkillPill label="Git" />
              </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-200/70 to-transparent" />

            <div className="space-y-2">
              <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
                Basi di programmazione
              </p>
              <p className="text-[11px] text-slate-600 md:text-xs">
                Conoscenze in C, C++ e Java acquisite in contesti didattici,
                utili per strutture dati, algoritmi e comprensione dei
                fondamenti della programmazione.
              </p>
              <div className="mt-1 flex items-center gap-2">
                <img src={javaIcon} alt="Java" className="h-4 w-4" />
                <img src={cppIcon} alt="C++" className="h-4 w-4" />
                <img src={cIcon} alt="C" className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default SkillSection;
