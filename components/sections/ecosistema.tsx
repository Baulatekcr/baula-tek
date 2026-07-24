import {
  Boxes,
  Globe,
  HeartHandshake,
  Network,
  PieChart,
} from "lucide-react";
import { Reveal, Eyebrow } from "@/components/motion";

const etapas = [
  {
    estado: "Disponible hoy",
    tono: "bg-kelp/15 text-kelp border-kelp/30",
    icon: Boxes,
    nombre: "Baula IMS",
    desc: "Control de inventarios con información en tiempo real.",
    activo: true,
  },
  {
    estado: "Disponible hoy",
    tono: "bg-kelp/15 text-kelp border-kelp/30",
    icon: Globe,
    nombre: "Baula Sites",
    desc: "Diseño y desarrollo de landing pages y sitios web profesionales.",
    activo: true,
  },
  {
    estado: "Próximamente",
    tono: "bg-cta/10 text-cta border-cta/30",
    icon: HeartHandshake,
    nombre: "Baula CRM",
    desc: "Gestión de clientes.",
    activo: false,
  },
  {
    estado: "Próximamente",
    tono: "bg-cta/10 text-cta border-cta/30",
    icon: Network,
    nombre: "Baula ERP",
    desc: "Gestión integral empresarial.",
    activo: false,
  },
  {
    estado: "Futuro",
    tono: "bg-foam/10 text-foam/70 border-foam/20",
    icon: PieChart,
    nombre: "Business Intelligence",
    desc: "Dashboards y analítica.",
    activo: false,
  },
];

export function Ecosistema() {
  return (
    <section className="relative overflow-hidden bg-abyss py-24 text-foam md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-ocean-rays opacity-70"
      />
      <div className="container relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="light">Ecosistema Baula</Eyebrow>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Construyendo el futuro
          </h2>
          <p className="mt-4 text-foam/65">
            Como la baula recorre miles de kilómetros con un rumbo claro,
            nuestro ecosistema avanza etapa por etapa: cada producto abre el
            camino del siguiente.
          </p>
        </Reveal>

        {/* Ruta de migración horizontal */}
        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-[7%] right-[7%] top-6 hidden h-[2px] xl:block"
            style={{
              backgroundImage:
                "linear-gradient(to right, #1FC7D4 0 8px, transparent 8px 18px)",
              backgroundSize: "18px 2px",
            }}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {etapas.map((e, i) => (
              <Reveal key={e.nombre} delay={i * 0.08}>
                <article
                  className={`relative h-full rounded-2xl border p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 ${
                    e.activo
                      ? "border-kelp/40 bg-depth/70 shadow-[0_0_50px_-12px_rgba(78,209,181,0.35)]"
                      : "border-white/10 bg-depth/40 hover:border-cta/40"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute -top-[7px] left-1/2 hidden h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 xl:block ${
                      e.activo
                        ? "border-kelp bg-kelp"
                        : "border-cta/60 bg-abyss"
                    }`}
                  />
                  <span
                    className={`inline-block rounded-full border px-3 py-1 text-[11px] font-medium ${e.tono}`}
                  >
                    {e.estado}
                  </span>
                  <e.icon className="mt-5 h-7 w-7 text-cta" />
                  <h3 className="mt-3 font-display text-xl font-semibold">
                    {e.nombre}
                  </h3>
                  <p className="mt-2 text-sm text-foam/60">{e.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
