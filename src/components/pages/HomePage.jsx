import HomeSection from "../sections/HomeSection";
import AboutMeSection from "../sections/AboutMeSection";
import SkillSection from "../sections/SkillSection";
import StudySection from "../sections/StudySection";
import ContactSection from "../sections/ContactSection";
import ProjectsSection from "../sections/ProjectsSection";

function HomePage() {
  return (
    <>
      <HomeSection />
      <main>
        <AboutMeSection />
        <StudySection />
        <SkillSection />
        <ProjectsSection />
      </main>
      <ContactSection />
    </>
  );
}

export default HomePage;

