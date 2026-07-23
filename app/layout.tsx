import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://baulatek.com"),
  title: {
    default: "Baula Tek — Tecnología que transforma procesos",
    template: "%s · Baula Tek",
  },
  description:
    "Desarrollamos soluciones digitales para optimizar operaciones, automatizar procesos y ayudar a las empresas a tomar mejores decisiones. Conoce Baula IMS, nuestro sistema de gestión de inventarios.",
  keywords: [
    "Baula Tek",
    "Baula IMS",
    "gestión de inventarios",
    "software empresarial",
    "Costa Rica",
    "transformación digital",
  ],
  openGraph: {
    title: "Baula Tek — Tecnología que transforma procesos",
    description:
      "Soluciones digitales para optimizar operaciones y tomar mejores decisiones. Conoce Baula IMS.",
    locale: "es_CR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${display.variable} ${body.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
