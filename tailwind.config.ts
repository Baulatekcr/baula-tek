import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        abyss: "#071B2B",      // Primary — deep ocean
        depth: "#0D3B4E",      // Secondary
        current: "#117A8B",    // Accent
        cta: "#1FC7D4",        // CTA cyan
        kelp: "#4ED1B5",       // Highlight
        foam: "#D6F5F1",       // Light
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "ocean-rays":
          "radial-gradient(60% 80% at 20% 0%, rgba(31,199,212,0.14) 0%, transparent 60%), radial-gradient(50% 70% at 75% 0%, rgba(78,209,181,0.10) 0%, transparent 55%), linear-gradient(180deg, #071B2B 0%, #0A2537 55%, #071B2B 100%)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-node": {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        drift: "drift 7s ease-in-out infinite",
        "pulse-node": "pulse-node 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
