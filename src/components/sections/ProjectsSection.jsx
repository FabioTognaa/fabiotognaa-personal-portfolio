import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";

//*SEZIONE DEI MIEI PROGETTI PERSONALI
function ProjectsSection() {
  //? MODIFICA I DATI IN BASE ALLA STRUTTURA DELLA FUTURA CARD PER I PROGETTI
  const projects = [
    {
      id: 1,
      title: "",
      description: "Project Description 1",
      link: "",
    },
    { id: 2, title: "", description: "Project Description 2", link: "" },
    {
      id: 3,
      title: "",
      description: "Project Description 3",
      link: "",
    },
  ];

  return (
    <div id="projects" className="mt-16 mb-20 scroll-mt-28 px-4 md:mt-24 md:px-16">
      <SectionTitle label="Projects" />
      <section className="mt-10">
        <div className="flex flex-col items-center justify-around gap-6 md:flex-row md:gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
export default ProjectsSection;
