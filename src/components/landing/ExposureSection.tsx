import { Quote, DollarSign } from "lucide-react";

const ExposureSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            AI Mistakes Are Already Costing Companies
          </h2>
          <p className="text-muted-foreground text-lg">
            The liabilities are real, current, and growing. Companies are learning the hard way that AI errors have consequences.
          </p>
        </div>

        {/* Case Study Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative card-enterprise bg-navy-deep text-cream overflow-hidden">
            {/* Quote decoration */}
            <Quote className="absolute top-6 right-6 w-16 h-16 text-cream/10" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 bg-gold/20 text-gold text-sm font-medium rounded-full">
                  Case Study
                </span>
                <span className="text-cream/60 text-sm">2024</span>
              </div>

              <p className="text-xl md:text-2xl font-serif text-cream/95 leading-relaxed mb-8">
                "A major professional services firm used AI to draft a government report. The AI hallucinated citations and fabricated sources. The firm refunded $290,000 and suffered public reputational damage."
              </p>

              <div className="flex flex-col sm:flex-row gap-6 pt-6 border-t border-cream/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <p className="text-cream/60 text-sm">Direct Financial Loss</p>
                    <p className="text-cream font-semibold text-lg">$290,000</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <Quote className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-cream/60 text-sm">Insurance Coverage</p>
                    <p className="text-cream font-semibold text-lg">$0 — Excluded</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExposureSection;
