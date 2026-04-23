//* CARD PERSONALE CON AVATAR TESTUALE E LINK PER DOWNLOAD CV
import avatar from "../../assets/tognarelli.svg";
function PersonalCard() {
  return (
    <div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center rounded-lg border border-blue-300 p-4 text-center transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-xl/20 sm:max-w-md md:mx-0">
      <div className="mt-3 flex flex-col items-center gap-2">
        <div className="h-60 w-60 overflow-hidden rounded-full shadow-md ring-2 ring-blue-200 transition-all duration-200 ease-in-out hover:shadow-xl/20">
          <img
            src={avatar}
            alt="Avatar di Fabio Tognarelli"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
      <div className="mt-5 mb-0 p-0">
        <span className="text-2xl font-semibold">Fabio Tognarelli</span>
      </div>
      <div className="m-2">
        <a
          className="m-0 inline-block w-3/4 rounded-full border-2 border-blue-300 px-2.5 py-1 text-center text-lg font-semibold text-[#0a2342] transition-all duration-100 ease-linear hover:scale-105 hover:bg-blue-300 hover:text-gray-100"
          href="/cv-tognarelli-fabio.pdf"
          download="/cv-tognarelli-fabio.pdf"
        >
          Scarica CV
        </a>
      </div>
    </div>
  );
}
export default PersonalCard;
