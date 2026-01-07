import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import ExposureSection from "@/components/landing/ExposureSection";
import CoverageSection from "@/components/landing/CoverageSection";
import WhyAxiomSection from "@/components/landing/WhyAxiomSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import WhoItsForSection from "@/components/landing/WhoItsForSection";
import TrustSection from "@/components/landing/TrustSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <ExposureSection />
        <CoverageSection />
        <WhyAxiomSection />
        <HowItWorksSection />
        <WhoItsForSection />
        <TrustSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
