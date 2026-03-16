//* CARD DEI LINGUAGGI DI PROGRAMMAZIONE SEZIONE SKILLS

function SkillCard({ skill }) {
  const { title, icons, description, tags } = skill;
  return (
    <div className="relative flex h-full flex-col rounded-lg p-6 shadow-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl">
      {/* Icone della card */}
      
        <div className="mb-4 flex items-center gap-3">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="transition-transform duration-200 hover:scale-110"
            >
              <img
                src={icon.src}
                alt={icon.alt}
                className="h-8 w-auto max-w-[3rem] object-contain"
              />
            </div>
          ))}
        </div>
      

      {/* Title */}
      <h3 className="text-card-foreground mb-10 text-xl font-bold tracking-tight ">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground mb-10 leading-relaxed">
        {description}
      </p>

      {/* tags  */}
      <div className="mt-auto flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <div
            key={index}
            className={
              "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground w-fit shrink-0 cursor-pointer overflow-hidden rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium whitespace-nowrap text-slate-700 transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:bg-slate-100 focus"
            }
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}
export default SkillCard;
