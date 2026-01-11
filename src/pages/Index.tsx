import { useEffect, useRef } from "react";
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
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ticking = false;
    
    const getMaxScroll = () => {
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      return Math.max(0, documentHeight - windowHeight);
    };
    
    const clampScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = getMaxScroll();
      
      // Clamp to boundaries immediately
      if (scrollTop < 0) {
        window.scrollTo({ top: 0, behavior: 'auto' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        return;
      }
      
      if (scrollTop > maxScroll) {
        window.scrollTo({ top: maxScroll, behavior: 'auto' });
        document.documentElement.scrollTop = maxScroll;
        document.body.scrollTop = maxScroll;
        return;
      }
    };
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          clampScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Also handle on resize to recalculate
    const handleResize = () => {
      clampScroll();
    };

    // Use scroll event
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    // Initial clamp
    clampScroll();
    
    // Also clamp on a timer to catch momentum scrolling (more frequent)
    const intervalId = setInterval(() => {
      clampScroll();
    }, 8); // ~120fps for better momentum catch
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col" style={{ overflowX: 'hidden' }}>
      <Header />
      <main className="flex-1">
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
      <Footer ref={footerRef} />
    </div>
  );
};

export default Index;
