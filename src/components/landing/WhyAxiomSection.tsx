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
    title: "Lloyd's-Backed Capacity",
    description: "Path to securing coverage backed by the world's most trusted insurance marketplace.",
  },
];

const WhyAxiomSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
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
              className="group"
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
