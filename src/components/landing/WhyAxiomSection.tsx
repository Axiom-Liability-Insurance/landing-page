import { Target, Zap, Brain, Users, Building } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Built for AI Users, Not AI Vendors",
    description: "Coverage designed specifically for companies using AI in their operations, not companies building AI products.",
  },
  {
    icon: Zap,
    title: "First-Mover Advantage",
    description: "Pioneer in a new insurance category — securing capacity before the market tightens.",
  },
  {
    icon: Brain,
    title: "AI-Native Underwriting",
    description: "Proprietary risk modeling that understands modern AI usage patterns and exposure vectors.",
  },
  {
    icon: Users,
    title: "Expert-Built",
    description: "Created by insurance veterans and AI engineers who understand both domains deeply.",
  },
  {
    icon: Building,
    title: "Institutional Partnerships",
    description: "Working towards partnerships with leading insurance markets to provide comprehensive coverage.",
  },
];

const WhyAxiomSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-left mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4 leading-tight">
            Why Enterprises Choose Axiom
          </h2>
          <p className="text-muted-foreground text-lg">
            We're building the insurance infrastructure for the AI-powered enterprise.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-cream/30 backdrop-blur-md border border-cream/40 rounded-xl p-6 hover:bg-cream/40 hover:border-cream/50 transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
            >
              <div className="w-14 h-14 rounded-xl bg-navy-deep flex items-center justify-center mb-5 group-hover:bg-teal-dark transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-cream" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAxiomSection;
