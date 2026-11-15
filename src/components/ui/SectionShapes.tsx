const VARIANTS = {
  1: [
    "border-accent/20 absolute -top-12 -right-8 h-[26rem] w-[26rem] border",
    "border-accent/15 absolute top-[16%] -left-24 h-[34rem] w-56 border",
    "border-accent/25 absolute top-[34%] right-[14%] h-40 w-40 border",
    "border-accent/15 absolute bottom-[30%] left-[6%] h-48 w-[32rem] border",
    "border-accent/20 absolute -right-16 bottom-[12%] h-[26rem] w-[26rem] border",
    "border-accent/20 absolute bottom-[-6rem] left-[28%] h-72 w-72 border",
  ],
  2: [
    "border-accent/25 absolute -top-16 left-[14%] h-[24rem] w-[24rem] border",
    "border-accent/15 absolute top-[28%] -right-24 h-[30rem] w-64 border",
    "border-accent/20 absolute top-[8%] right-[22%] h-32 w-32 border",
    "border-accent/15 absolute bottom-[18%] -left-16 h-56 w-[28rem] border",
    "border-accent/20 absolute -bottom-20 right-[10%] h-[22rem] w-[22rem] border",
  ],
  3: [
    "border-accent/20 absolute -top-10 right-[18%] h-[20rem] w-[20rem] border",
    "border-accent/15 absolute top-[30%] -left-20 h-[26rem] w-48 border",
    "border-accent/25 absolute top-[52%] right-[8%] h-44 w-44 border",
    "border-accent/15 absolute bottom-[24%] left-[20%] h-40 w-[26rem] border",
    "border-accent/20 absolute -bottom-16 -right-12 h-[24rem] w-[24rem] border",
  ],
  // Densità: grappoli concentrici e sovrapposti invece di forme sparse.
  4: [
    // Grappolo in alto a destra: tre quadrati concentrici sfalsati.
    "border-accent/20 absolute -top-16 right-[6%] h-[30rem] w-[30rem] border",
    "border-accent/25 absolute -top-6 right-[12%] h-[18rem] w-[18rem] border",
    "border-accent/30 absolute top-6 right-[18%] h-32 w-32 border",
    "border-accent/35 absolute top-14 right-[22%] h-14 w-14 border",
    // Grappolo a metà pagina a sinistra: rettangoli sovrapposti a croce.
    "border-accent/15 absolute top-[38%] -left-24 h-[30rem] w-[28rem] border",
    "border-accent/25 absolute top-[46%] -left-6 h-40 w-72 border",
    "border-accent/30 absolute top-[52%] left-[8%] h-24 w-24 border",
    // Grappolo in basso: nido di quadrati che scende fuori dal bordo.
    "border-accent/20 absolute -bottom-24 right-[26%] h-[28rem] w-[28rem] border",
    "border-accent/25 absolute -bottom-10 right-[32%] h-[16rem] w-[16rem] border",
    "border-accent/30 absolute bottom-4 right-[36%] h-24 w-24 border",
    "border-accent/15 absolute bottom-[18%] left-[42%] h-20 w-[20rem] border",
  ],
} as const;

/** Forme geometriche decorative in filigrana: solo estetica, niente semantica. */
function SectionShapes({ variant = 1 }: { variant?: 1 | 2 | 3 | 4 }) {
  // Su schermi stretti il layer viene scalato verso il centro per non finire fuori dai bordi.
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 origin-center scale-[0.62] overflow-hidden sm:scale-80 md:scale-100"
    >
      {VARIANTS[variant].map((className) => (
        <div key={className} className={className} />
      ))}
    </div>
  );
}

export default SectionShapes;
