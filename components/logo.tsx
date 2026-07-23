import { cn } from "@/lib/utils";

/**
 * Tortuga baula estilizada con nodos de circuito.
 * Trazo con gradiente kelp → cta, fiel al manual de marca.
 */
export function TurtleMark({
  className,
  animated = false,
}: {
  className?: string;
  animated?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={cn("h-8 w-8", className)}
    >
      <defs>
        <linearGradient id="baula-g" x1="8" y1="6" x2="56" y2="60">
          <stop offset="0%" stopColor="#4ED1B5" />
          <stop offset="55%" stopColor="#1FC7D4" />
          <stop offset="100%" stopColor="#117A8B" />
        </linearGradient>
      </defs>
      <g stroke="url(#baula-g)" strokeWidth="3" strokeLinecap="round">
        {/* Cabeza */}
        <path d="M32 4c-3 2.5-4.5 5-4.5 7.5 0 2 1.8 3.5 4.5 3.5s4.5-1.5 4.5-3.5C36.5 9 35 6.5 32 4Z" />
        {/* Caparazón (gota) */}
        <path d="M32 16c-8.5 3-13.5 9.5-13.5 18 0 9 5.5 15.5 13.5 18 8-2.5 13.5-9 13.5-18 0-8.5-5-15-13.5-18Z" />
        {/* Aletas delanteras */}
        <path d="M17 22c-4.5-1.5-8.5-1-12 1.5 2 4 5.5 6.5 10.5 7" />
        <path d="M47 22c4.5-1.5 8.5-1 12 1.5-2 4-5.5 6.5-10.5 7" />
        {/* Aletas traseras */}
        <path d="M20 47c-3 1.5-5 4-6 7.5 3 .8 6-.2 8.5-2.5" />
        <path d="M44 47c3 1.5 5 4 6 7.5-3 .8-6-.2-8.5-2.5" />
        {/* Circuitos internos */}
        <path d="M32 50V30" />
        <path d="M25 44v-6l3-3v-4" />
        <path d="M39 44v-6l-3-3v-4" />
      </g>
      <g fill="url(#baula-g)">
        <circle
          cx="32"
          cy="27"
          r="2.6"
          className={animated ? "animate-pulse-node" : undefined}
        />
        <circle
          cx="28"
          cy="28"
          r="2.2"
          className={animated ? "animate-pulse-node [animation-delay:600ms]" : undefined}
        />
        <circle
          cx="36"
          cy="28"
          r="2.2"
          className={animated ? "animate-pulse-node [animation-delay:1200ms]" : undefined}
        />
      </g>
    </svg>
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
