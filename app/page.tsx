import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Historia } from "@/components/sections/historia";
import { MisionVision } from "@/components/sections/mision-vision";
import { Producto } from "@/components/sections/producto";
import { Ecosistema } from "@/components/sections/ecosistema";
import { Valores } from "@/components/sections/valores";
import { Baula } from "@/components/sections/baula";
import { CtaFinal } from "@/components/sections/cta-final";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Historia />
        <MisionVision />
        <Producto />
        <Ecosistema />
        <Valores />
        <Baula />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
