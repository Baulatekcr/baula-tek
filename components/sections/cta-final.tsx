import { ArrowRight, Mail } from "lucide-react";
import { Reveal } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { TurtleMark } from "@/components/logo";

export function CtaFinal() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-abyss py-24 text-foam md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-ocean-rays"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-cta/15 blur-3xl"
      />

      <div className="container relative mx-auto max-w-3xl text-center">
        <Reveal>
          <TurtleMark className="mx-auto h-14 w-14" animated />
          <h2 className="mt-6 text-balance font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            ¿Listo para optimizar tus procesos?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-foam/70">
            Conoce cómo Baula IMS puede ayudar a tu empresa.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="mailto:hola@baulatek.com?subject=Solicitud%20de%20demostraci%C3%B3n%20Baula%20IMS">
              <Button size="lg">
                Solicitar demostración <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            <a href="mailto:hola@baulatek.com">
              <Button size="lg" variant="ghostLight">
                <Mail className="h-4 w-4" /> Contactar
              </Button>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
