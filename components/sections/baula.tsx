import { Reveal, Eyebrow } from "@/components/motion";
import { TurtleMark } from "@/components/logo";

const rasgos = [
  {
    t: "Adaptabilidad",
    d: "La baula prospera en aguas frías y cálidas por igual. Nuestras soluciones se adaptan a cada operación, no al revés.",
  },
  {
    t: "Resiliencia",
    d: "Una especie que ha sobrevivido más de 100 millones de años. Construimos sistemas robustos, pensados para durar.",
  },
  {
    t: "Evolución",
    d: "Cada generación mejora a la anterior. Cada versión de nuestros productos también.",
  },
  {
    t: "Visión de largo plazo",
    d: "La baula navega miles de kilómetros con un destino claro. Crecemos de forma sostenible, sin perder el rumbo.",
  },
];

export function Baula() {
  return (
    <section className="bg-muted py-24 md:py-32">
      <div className="container grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="relative mx-auto max-w-sm">
          <div
            aria-hidden="true"
            className="absolute -inset-10 rounded-full bg-gradient-to-br from-cta/15 to-kelp/10 blur-3xl"
          />
          <div className="relative flex aspect-square items-center justify-center rounded-full border border-cta/20 bg-card shadow-inner">
            <div className="absolute inset-6 rounded-full border border-dashed border-cta/25" />
            <TurtleMark className="h-44 w-44 animate-drift sm:h-52 sm:w-52" animated />
          </div>
          <p className="mt-6 text-center font-display text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Dermochelys coriacea · Costa Rica
          </p>
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow>Identidad</Eyebrow>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Inspirados por la tortuga baula
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              La baula es la tortuga marina más grande del planeta y una de las
              navegantes más extraordinarias de la naturaleza. Anida en las
              costas de Costa Rica y representa todo lo que queremos ser como
              empresa.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {rasgos.map((r, i) => (
              <Reveal key={r.t} delay={i * 0.08}>
                <div className="border-l-2 border-cta/50 pl-4">
                  <h3 className="font-display font-semibold">{r.t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {r.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
