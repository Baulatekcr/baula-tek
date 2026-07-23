import { Compass, Telescope } from "lucide-react";
import { Reveal, Eyebrow } from "@/components/motion";

const cards = [
  {
    icon: Compass,
    titulo: "Misión",
    texto:
      "Desarrollar soluciones tecnológicas innovadoras que permitan a las organizaciones optimizar sus procesos, mejorar la toma de decisiones y potenciar su crecimiento mediante herramientas digitales accesibles y de alto valor.",
  },
  {
    icon: Telescope,
    titulo: "Visión",
    texto:
      "Convertirnos en una empresa referente en el desarrollo de soluciones empresariales en Costa Rica y Centroamérica, impulsando la transformación digital de las organizaciones a través de tecnología práctica, confiable y escalable.",
  },
];

export function MisionVision() {
  return (
    <section id="vision" className="bg-muted py-24 md:py-32">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Rumbo</Eyebrow>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Hacia dónde nadamos
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.titulo} delay={i * 0.1}>
              <article className="group h-full rounded-2xl border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cta/50 hover:shadow-[0_18px_50px_-20px_rgba(17,122,139,0.35)]">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-current to-cta text-white">
                  <c.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold">
                  {c.titulo}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {c.texto}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
