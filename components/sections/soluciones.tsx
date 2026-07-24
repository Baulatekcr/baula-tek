import {
  Globe,
  Building2,
  BriefcaseBusiness,
  Search,
  MonitorSmartphone,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { Reveal, Eyebrow } from "@/components/motion";
import { Button } from "@/components/ui/button";

const servicios = [
  {
    icon: Globe,
    t: "Baula Sites",
    d: "Diseño de landing pages modernas y optimizadas.",
  },
  {
    icon: Building2,
    t: "Sitios Corporativos",
    d: "Webs profesionales para empresas.",
  },
  {
    icon: BriefcaseBusiness,
    t: "Portafolios Profesionales",
    d: "Presencia digital para profesionales independientes.",
  },
  {
    icon: Search,
    t: "Optimización SEO",
    d: "Buenas prácticas para mejorar visibilidad en buscadores.",
  },
  {
    icon: MonitorSmartphone,
    t: "Diseño Responsive",
    d: "Experiencia perfecta en móvil, tablet y escritorio.",
  },
  {
    icon: Wrench,
    t: "Mantenimiento Web",
    d: "Actualizaciones y soporte continuo.",
  },
];

export function Soluciones() {
  return (
    <section id="soluciones" className="bg-muted py-24 md:py-32">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Servicios</Eyebrow>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Soluciones Digitales
          </h2>
          <p className="mt-4 text-muted-foreground">
            Además de nuestros productos, ayudamos a empresas y emprendedores a
            construir su presencia digital.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((s, i) => (
            <Reveal key={s.t} delay={(i % 3) * 0.08}>
              <article className="group h-full rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cta/50 hover:shadow-lg">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-foam text-current transition-colors group-hover:bg-gradient-to-br group-hover:from-current group-hover:to-cta group-hover:text-white dark:bg-depth dark:text-kelp">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">
                  {s.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.d}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* CTA destacado */}
        <Reveal delay={0.15} className="mt-12">
          <article className="relative overflow-hidden rounded-2xl border border-cta/30 bg-abyss p-8 text-foam shadow-[0_18px_60px_-20px_rgba(17,122,139,0.45)] md:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-ocean-rays opacity-80"
            />
            <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h3 className="font-display text-2xl font-semibold sm:text-3xl">
                  ¿Necesitas una página web?
                </h3>
                <p className="mt-3 max-w-xl text-foam/70">
                  Creamos sitios modernos, rápidos y diseñados para convertir
                  visitantes en clientes.
                </p>
              </div>
              <a href="mailto:info@baulatek.com?subject=Solicitud%20de%20cotizaci%C3%B3n%20%E2%80%94%20Baula%20Sites">
                <Button size="lg">
                  Solicitar Cotización <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
