import Header from "../ui/Header";
import AsideBar from "../ui/AsideBar";
import NavButton from "../ui/NavButton";
function HomeSection() {
  return (
    <section className="relative m-0 h-screen" id="home">
      <Header />
      <AsideBar />
      <div className="flex h-full w-full flex-col items-center justify-center px-6 text-center tracking-wider text-[#0a2342] sm:px-8 md:px-16 md:text-left">
        <h1 className="animate-fade-in-slide-up text-3xl font-semibold opacity-0 delay-500 sm:text-4xl md:mb-3.5 md:text-5xl">
          Ciao, sono Fabio Tognarelli!
        </h1>
        <p className="animate-fade-in-slide-up mt-4 mb-6 text-base font-light opacity-0 delay-700 sm:text-lg md:mb-4">
          Sono uno studente di informatica presso l'università degli studi di
          Pisa. Questo è il mio sito web personale.
        </p>
        <NavButton
          href={"#about"}
          label={"Esplora"}
          className={"mt-18 -translate-x-2 md:mt-4 md:-translate-x-6"}
        />
      </div>
    </section>
  );
}
export default HomeSection;
