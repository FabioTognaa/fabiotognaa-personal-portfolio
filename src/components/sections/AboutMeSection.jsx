import SectionTitle from "../ui/SectionTitle";
import PersonalCard from "../ui/PersonalCard";
import PersonalDescription from "../ui/PersonalDescription";
function AboutMeSection() {
  return (
    <div id="about" className="m-0 scroll-mt-28 p-0">
      <SectionTitle label="About Me" />
      <section className="mt-12 mb-20 px-4 flex flex-col gap-8 md:mx-16 md:mt-16 md:mb-24 md:flex-row md:gap-10 lg:mr-36">
        <PersonalCard />
        <PersonalDescription />
      </section>
    </div>
  );
}
export default AboutMeSection;
