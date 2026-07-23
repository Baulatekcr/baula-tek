# Baula Tek — Landing Page

Landing page corporativa de **Baula Tek**, construida con Next.js 15, TypeScript, Tailwind CSS y Framer Motion.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript** estricto
- **Tailwind CSS 3.4** con tokens de marca (`abyss`, `depth`, `current`, `cta`, `kelp`, `foam`)
- **shadcn/ui** (patrón de componentes: `components/ui/button.tsx` con CVA)
- **Framer Motion** — reveals al hacer scroll, respeta `prefers-reduced-motion`
- **next-themes** — modo oscuro (clase `dark`, toggle en navbar)
- **lucide-react** — iconografía

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Abrir http://localhost:3000

Para producción:

```bash
npm run build
npm start
```

## Estructura

```
app/
  layout.tsx        # Fuentes (Space Grotesk + Inter), SEO, ThemeProvider
  page.tsx          # Composición de secciones
  globals.css       # Variables de tema claro/oscuro, utilidades
components/
  navbar.tsx        # Sticky, menú móvil, toggle de tema
  footer.tsx
  logo.tsx          # Tortuga baula en SVG (TurtleMark) + Wordmark
  motion.tsx        # <Reveal> y <Eyebrow> reutilizables
  ui/button.tsx     # Botón estilo shadcn (CVA)
  sections/         # hero, historia, mision-vision, producto,
                    # ecosistema, valores, baula, cta-final
public/
  brand-board.png   # Manual de marca de referencia
```

## Personalización rápida

- **Colores**: `tailwind.config.ts` → `theme.extend.colors`
- **Correo de contacto**: buscar `hola@baulatek.com` en `cta-final.tsx`
- **Redes sociales**: `components/footer.tsx`
- **Dominio para SEO/OG**: `metadataBase` en `app/layout.tsx`
