import Header from "../ui/Header";
import AsideBar from "../ui/AsideBar";
function HomeSection() {
  return (
    <section className="relative m-0 h-screen" id="home">
      <Header />
      <AsideBar />
      <div className="flex h-full w-full flex-col items-center justify-center px-6 text-center tracking-wider text-[#0a2342] sm:px-8 md:px-16 md:text-left">
        <h1 className="animate-fade-in-slide-up text-3xl font-semibold opacity-0 delay-500 sm:text-4xl md:mb-3.5 md:text-5xl">
          Ciao, sono Fabio Tognarelli!
        </h1>
        <p className="animate-fade-in-slide-up mt-4 mb-6 text-sm font-light opacity-0 delay-700 md:mb-4 md:text-lg">
          Sono uno studente di informatica presso l'università degli studi di
          Pisa. Questo è il mio sito web personale.
        </p>
        <a
          href="#about"
          className="mt-4 -translate-x-2 rounded-full border border-blue-400 px-7 py-2.5 text-base font-semibold tracking-wide text-[#0a2342] no-underline transition-all duration-150 ease-out hover:-translate-y-0.5 hover:bg-[#0a2342] hover:text-white active:translate-y-0 active:scale-95"
        >
          Esplora
        </a>
      </div>
    </section>
  );
}
export default HomeSection;
