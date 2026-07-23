import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Logo oficial de Baula Tek: tortuga baula con circuitos,
 * extraído del manual de marca (public/logo.png, fondo transparente).
 * Se mantiene la prop `animated` por compatibilidad con las secciones.
 */
export function TurtleMark({
  className,
  animated = false,
}: {
  className?: string;
  animated?: boolean;
}) {
  return (
    <Image
      src="/logo.png"
      alt=""
      aria-hidden="true"
      width={520}
      height={457}
      priority
      className={cn(
        "h-8 w-8 object-contain",
        animated && "animate-drift",
        className
      )}
    />
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display text-lg font-semibold tracking-[0.18em]",
        className
      )}
    >
      BAULA<span className="ml-1.5 font-light text-cta">TEK</span>
    </span>
  );
}
