import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  const handleJoinWaitlist = () => {
    window.dispatchEvent(new CustomEvent('openWaitlist'));
  };

  const handleLearnMore = () => {
    const coverageSection = document.getElementById("coverage");
    if (coverageSection) {
      coverageSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="section-padding gradient-navy">
      <div className="container-narrow">
        <div className="text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-cream mb-6 leading-tight">
            AI Adoption Shouldn't Be a Liability
          </h2>
          <p className="text-cream/70 text-lg mb-10 max-w-xl">
            Get ahead of AI risk with comprehensive coverage designed for how enterprises actually use AI today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group" onClick={handleJoinWaitlist}>
              Join Waitlist
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl" onClick={handleLearnMore}>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
