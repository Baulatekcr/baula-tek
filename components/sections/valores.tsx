import {
  Lightbulb,
  Handshake,
  TrendingUp,
  ShieldCheck,
  Minimize2,
  Award,
} from "lucide-react";
import { Reveal, Eyebrow } from "@/components/motion";

const valores = [
  {
    icon: Lightbulb,
    t: "Innovación",
    d: "Buscamos formas nuevas y mejores de resolver problemas reales.",
  },
  {
    icon: Handshake,
    t: "Compromiso",
    d: "Acompañamos a cada cliente hasta que la solución funciona en su operación.",
  },
  {
    icon: TrendingUp,
    t: "Mejora continua",
    d: "Cada versión aprende de la anterior: medimos, ajustamos y evolucionamos.",
  },
  {
    icon: ShieldCheck,
    t: "Confianza",
    d: "Datos protegidos, sistemas estables y comunicación transparente.",
  },
  {
    icon: Minimize2,
    t: "Simplicidad",
    d: "Herramientas potentes que cualquier equipo puede usar desde el primer día.",
  },
  {
    icon: Award,
    t: "Excelencia técnica",
    d: "Código limpio, arquitectura sólida y estándares de nivel profesional.",
  },
];

export function Valores() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Valores</Eyebrow>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Lo que guía cada línea de código
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {valores.map((v, i) => (
            <Reveal key={v.t} delay={(i % 3) * 0.08}>
              <article className="group h-full rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cta/50 hover:shadow-lg">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-foam text-current transition-colors group-hover:bg-gradient-to-br group-hover:from-current group-hover:to-cta group-hover:text-white dark:bg-depth dark:text-kelp">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">
                  {v.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.d}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
