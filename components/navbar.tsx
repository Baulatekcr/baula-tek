"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { TurtleMark, Wordmark } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#productos", label: "Productos" },
  { href: "#vision", label: "Visión" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-abyss/85 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="container flex h-16 items-center justify-between">
        <Link
          href="#inicio"
          className="flex items-center gap-2.5 text-white"
          aria-label="Baula Tek — Inicio"
        >
          <TurtleMark className="h-9 w-9" />
          <Wordmark />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm text-foam/75 transition-colors hover:text-cta"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a href="#contacto">
            <Button>Solicitar demostración</Button>
          </a>
        </div>

        <button
          className="rounded-md p-2 text-foam lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-abyss/95 backdrop-blur-xl lg:hidden">
          <ul className="container flex flex-col gap-1 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-foam/85 hover:bg-white/5 hover:text-cta"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 flex items-center gap-3 px-3">
              <ThemeToggle />
              <a href="#contacto" className="flex-1" onClick={() => setOpen(false)}>
                <Button className="w-full">Solicitar demostración</Button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
