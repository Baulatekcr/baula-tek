"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TurtleMark } from "@/components/logo";

const bars = [42, 58, 50, 72, 64, 86, 78];

export function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 26 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease: [0.21, 0.6, 0.35, 1], delay },
        };

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-ocean-rays pb-24 pt-36 text-foam md:pb-32 md:pt-44"
    >
      {/* Corrientes marinas sutiles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 12% 30%, rgba(214,245,241,0.5) 50%, transparent 51%), radial-gradient(1px 1px at 35% 65%, rgba(214,245,241,0.35) 50%, transparent 51%), radial-gradient(1.5px 1.5px at 70% 20%, rgba(31,199,212,0.5) 50%, transparent 51%), radial-gradient(1px 1px at 88% 55%, rgba(78,209,181,0.45) 50%, transparent 51%)",
        }}
      />

      <div className="container relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p
            {...fade(0)}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-kelp/30 bg-kelp/10 px-4 py-1.5 font-display text-xs uppercase tracking-[0.28em] text-kelp"
          >
            Desde Costa Rica
          </motion.p>

          <motion.h1
            {...fade(0.1)}
            className="text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Tecnología que{" "}
            <span className="bg-gradient-to-r from-kelp via-cta to-current bg-clip-text text-transparent">
              transforma
            </span>{" "}
            procesos
          </motion.h1>

          <motion.p
            {...fade(0.2)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-foam/70"
          >
            Desarrollamos software empresarial, sistemas de gestión y
            experiencias web que ayudan a las organizaciones a crecer mediante
            tecnología.
          </motion.p>

          <motion.div {...fade(0.3)} className="mt-9 flex flex-wrap gap-4">
            <a href="#productos">
              <Button size="lg">
                Conocer Baula IMS <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            <a href="#contacto">
              <Button size="lg" variant="ghostLight">
                Contactar
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Mockup de dashboard */}
        <motion.div {...fade(0.35)} className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-8 rounded-[2rem] bg-cta/10 blur-3xl"
          />
          <div className="relative animate-drift rounded-2xl border border-white/10 bg-depth/60 p-5 shadow-2xl backdrop-blur-xl">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TurtleMark className="h-6 w-6" animated />
                <span className="font-display text-sm tracking-widest text-foam/80">
                  BAULA IMS
                </span>
              </div>
              <span className="rounded-full bg-kelp/15 px-3 py-1 text-xs text-kelp">
                En tiempo real
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { k: "Artículos", v: "1 248" },
                { k: "Rotación", v: "4.6×" },
                { k: "Alertas ROP", v: "3" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-xl border border-white/10 bg-abyss/60 p-3"
                >
                  <p className="text-[11px] uppercase tracking-wider text-foam/50">
                    {s.k}
                  </p>
                  <p className="mt-1 font-display text-xl font-semibold text-foam">
                    {s.v}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-xl border border-white/10 bg-abyss/60 p-4">
              <p className="mb-3 text-[11px] uppercase tracking-wider text-foam/50">
                Consumo semanal
              </p>
              <div className="flex h-24 items-end gap-2">
                {bars.map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-current to-cta"
                    initial={reduce ? { height: `${h}%` } : { height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
                  />
                ))}
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between rounded-xl border border-kelp/25 bg-kelp/10 px-4 py-3 text-sm">
              <span className="text-foam/80">
                Stock bajo: <strong className="text-foam">Limón criollo</strong>
              </span>
              <span className="text-kelp">Reordenar →</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
