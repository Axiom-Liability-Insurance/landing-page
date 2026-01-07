import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="section-padding gradient-navy">
      <div className="container-narrow">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream mb-6">
            AI Adoption Shouldn't Be a Liability
          </h2>
          <p className="text-cream/70 text-lg mb-10 max-w-xl mx-auto">
            Get ahead of AI risk with comprehensive coverage designed for how enterprises actually use AI today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group">
              Request Coverage
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Talk to Underwriting
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
