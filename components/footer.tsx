import Link from "next/link";
import { Instagram } from "lucide-react";
import { TurtleMark, Wordmark } from "@/components/logo";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#productos", label: "Productos" },
  { href: "#contacto", label: "Contacto" },
];

const social = [
  { href: "https://www.instagram.com", label: "Instagram", icon: Instagram },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-abyss py-14 text-foam">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2.5">
              <TurtleMark className="h-9 w-9" />
              <Wordmark />
            </div>
            <p className="mt-3 text-sm text-foam/60">
              Tecnología que transforma procesos.
            </p>
            <a
              href="mailto:info@baulatek.com"
              className="mt-2 inline-block text-sm text-foam/70 transition-colors hover:text-cta"
            >
              info@baulatek.com
            </a>
          </div>

          <nav aria-label="Enlaces del sitio">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-foam/70 transition-colors hover:text-cta"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex gap-3">
            {social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foam/20 text-foam/70 transition-colors hover:border-cta hover:text-cta"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-foam/45">
          © {new Date().getFullYear()} Baula Tek. Todos los derechos
          reservados. Hecho en Costa Rica 🇨🇷
        </div>
      </div>
    </footer>
  );
}
