//* CARD DEI LINGUAGGI DI PROGRAMMAZIONE SEZIONE SKILLS

function SkillCard({ title, description, icons }) {
  return (
    <div className="mx-auto h-full max-w-lg overflow-hidden rounded-xl border border-blue-900 bg-transparent shadow-md transition-all duration-200 ease-in-out hover:shadow-xl/20">
      <div className="flex h-full flex-col md:flex-row">
        <div className="flex flex-row items-center justify-around gap-3 border-b border-blue-900 p-4 md:border-b-0 md:border-r md:shrink-0 md:flex-col md:justify-center">
          {icons.map((icon) => (
            <img
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              className="mb-2 h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
            />
          ))}
        </div>
        <div className="p-6 pt-0 text-center md:p-8 md:pt-5 md:text-left">
          <h2 className="mt-2 block text-2xl font-medium leading-tight md:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-sm md:mt-4 md:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
}
export default SkillCard;
