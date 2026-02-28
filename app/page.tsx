import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { Hero } from "@/components/sections/hero";
import { ParadigmShift } from "@/components/sections/paradigm-shift";
import { HowItWorks } from "@/components/sections/how-it-works";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ParadigmShift />
        <HowItWorks />
      </main>
      <Footer />
    </>
  );
}
