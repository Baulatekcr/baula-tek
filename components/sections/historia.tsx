import { Reveal, Eyebrow } from "@/components/motion";

const hitos = [
  {
    titulo: "El problema",
    texto:
      "Un restaurante en crecimiento necesitaba dejar atrás el control manual de su inventario: mermas invisibles, compras a ciegas y decisiones sin datos.",
  },
  {
    titulo: "El proyecto",
    texto:
      "Un estudiante de Ingeniería Industrial diseñó un sistema de gestión de inventarios a la medida: consumo automático por receta, alertas de reorden e historial de movimientos.",
  },
  {
    titulo: "La solución real",
    texto:
      "El sistema se implementó en la operación diaria y luego se comercializó. Dejó de ser un proyecto académico y se convirtió en un producto.",
  },
  {
    titulo: "Nace Baula Tek",
    texto:
      "Ese éxito inspiró la creación de una empresa dedicada a construir herramientas tecnológicas que ayuden a las organizaciones a operar de forma más eficiente.",
  },
];

export function Historia() {
  return (
    <section id="nosotros" className="bg-background py-24 md:py-32">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Nuestra historia</Eyebrow>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            De una cocina real a una empresa de tecnología
          </h2>
          <p className="mt-4 text-muted-foreground">
            Baula Tek no nació en una pizarra: nació resolviendo un problema
            operativo verdadero, todos los días, en un negocio verdadero.
          </p>
        </Reveal>

        {/* Ruta de migración: línea punteada que conecta los hitos */}
        <div className="relative mx-auto mt-16 max-w-3xl">
          <div
            aria-hidden="true"
            className="route-line absolute bottom-6 left-[15px] top-2 w-[2px] md:left-1/2 md:-translate-x-1/2"
          />
          <ol className="space-y-12">
            {hitos.map((h, i) => (
              <li key={h.titulo}>
                <Reveal
                  delay={i * 0.08}
                  className={`relative flex gap-6 md:w-1/2 md:gap-0 ${
                    i % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:ml-auto md:pl-12"
                  }`}
                >
                  <span
                    className={`absolute top-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-cta bg-background font-display text-xs font-semibold text-current dark:text-cta max-md:left-0 ${
                      i % 2 === 0
                        ? "md:-right-4 md:left-auto"
                        : "md:-left-4"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <div className="pl-12 md:pl-0">
                    <h3 className="font-display text-lg font-semibold">
                      {h.titulo}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {h.texto}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
