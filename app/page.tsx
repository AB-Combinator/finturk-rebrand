import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { Hero } from "@/components/sections/hero";
import { ParadigmShift } from "@/components/sections/paradigm-shift";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Workflows } from "@/components/sections/workflows";
import { Integrations } from "@/components/sections/integrations";
import { SocialProof } from "@/components/sections/social-proof";
import { Pricing } from "@/components/sections/pricing";
import { CTA } from "@/components/sections/cta";
import { MatrixBackground } from "@/components/shared/matrix-background";

export default function Home() {
  return (
    <>
      <MatrixBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <ParadigmShift />
          <HowItWorks />
          <Workflows />
          <Integrations />
          <SocialProof />
          <Pricing />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
