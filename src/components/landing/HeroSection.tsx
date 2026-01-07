import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-navy overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-navy-deep/40 to-navy-deep/90" />

      <div className="relative z-10 container-narrow section-padding pt-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream/10 border border-cream/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-cream/90 text-sm font-medium">Enterprise AI Liability Insurance</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream leading-tight mb-6 text-balance">
            AI Is Already in Your Business.{" "}
            <span className="text-gradient-gold">The Liability Isn't Covered.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-cream/80 max-w-2xl mb-10 leading-relaxed">
            Traditional insurance excludes AI hallucinations, bias, IP infringement, and AI-driven professional negligence. Axiom insures the gap.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl">
              Request Coverage
            </Button>
            <Button variant="heroOutline" size="xl">
              Get an AI Risk Assessment
            </Button>
          </div>

          {/* Trust indicator */}
          <div className="mt-16 pt-8 border-t border-cream/10">
            <p className="text-cream/50 text-sm mb-4">Trusted by risk-conscious enterprises</p>
            <div className="flex items-center gap-8 opacity-60">
              <span className="text-cream font-medium">Fortune 500 Clients</span>
              <span className="text-cream/30">|</span>
              <span className="text-cream font-medium">Lloyd's Market Access</span>
              <span className="text-cream/30">|</span>
              <span className="text-cream font-medium">$10M+ Coverage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
