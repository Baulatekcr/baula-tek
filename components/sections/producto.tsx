import {
  Activity,
  ArrowLeftRight,
  FileBarChart,
  History,
  LayoutDashboard,
  Users,
} from "lucide-react";
import { Reveal, Eyebrow } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { TurtleMark } from "@/components/logo";

const features = [
  { icon: Activity, t: "Inventario en tiempo real" },
  { icon: ArrowLeftRight, t: "Entradas y salidas" },
  { icon: FileBarChart, t: "Reportes automáticos" },
  { icon: History, t: "Historial de movimientos" },
  { icon: Users, t: "Control multiusuario" },
  { icon: LayoutDashboard, t: "Dashboard administrativo" },
];

export function Producto() {
  return (
    <section id="productos" className="bg-background py-24 md:py-32">
      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Producto principal · Disponible hoy</Eyebrow>
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Baula IMS
            </h2>
            <p className="mt-2 font-display text-lg text-current dark:text-kelp">
              Sistema de Gestión de Inventarios
            </p>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
              Baula IMS permite controlar inventarios, registrar movimientos,
              generar reportes y mejorar la toma de decisiones mediante
              información en tiempo real.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((f) => (
                <li
                  key={f.t}
                  className="flex items-center gap-3 rounded-xl border bg-card px-4 py-3 text-sm transition-colors hover:border-cta/50"
                >
                  <f.icon className="h-4 w-4 shrink-0 text-current dark:text-cta" />
                  {f.t}
                </li>
              ))}
            </ul>

            <a href="#contacto" className="mt-9 inline-block">
              <Button size="lg">Solicitar demostración</Button>
            </a>
          </Reveal>

          {/* Mockups: laptop + móvil */}
          <Reveal delay={0.15} className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-foam to-transparent blur-2xl dark:from-current/20"
            />
            {/* Laptop */}
            <div className="relative rounded-xl border bg-abyss p-2 shadow-2xl">
              <div className="rounded-lg bg-depth p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TurtleMark className="h-5 w-5" />
                    <span className="font-display text-xs tracking-widest text-foam/80">
                      BAULA IMS · PANEL
                    </span>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-foam/20" />
                    <span className="h-2 w-2 rounded-full bg-foam/20" />
                    <span className="h-2 w-2 rounded-full bg-kelp" />
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {["Stock", "Entradas", "Salidas", "Valor"].map((k, i) => (
                    <div key={k} className="rounded-lg bg-abyss/70 p-2.5">
                      <p className="text-[9px] uppercase tracking-wider text-foam/50">
                        {k}
                      </p>
                      <p className="font-display text-sm font-semibold text-foam">
                        {["1 248", "+312", "−287", "₡8.4M"][i]}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-2 space-y-1.5 rounded-lg bg-abyss/70 p-3">
                  {[
                    ["Pechuga de pollo", "84%", "bg-kelp"],
                    ["Papa criolla", "61%", "bg-cta"],
                    ["Limón criollo", "12%", "bg-red-400"],
                  ].map(([n, w, c]) => (
                    <div key={n} className="flex items-center gap-2">
                      <span className="w-28 truncate text-[10px] text-foam/70">
                        {n}
                      </span>
                      <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                        <span
                          className={`block h-full rounded-full ${c}`}
                          style={{ width: w as string }}
                        />
                      </span>
                      <span className="w-8 text-right text-[10px] text-foam/60">
                        {w}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mx-auto h-2 w-2/3 rounded-b-xl bg-depth/80" />

            {/* Móvil */}
            <div className="absolute -bottom-8 -right-2 w-32 animate-drift rounded-2xl border border-white/10 bg-abyss p-1.5 shadow-2xl sm:-right-6 sm:w-36">
              <div className="rounded-xl bg-depth p-3">
                <p className="text-[9px] uppercase tracking-wider text-foam/50">
                  Alerta ROP
                </p>
                <p className="mt-1 text-[11px] font-medium text-foam">
                  Limón criollo bajo el punto de reorden
                </p>
                <span className="mt-2 inline-block rounded-full bg-cta px-2.5 py-1 text-[9px] font-semibold text-abyss">
                  Ordenar ahora
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
