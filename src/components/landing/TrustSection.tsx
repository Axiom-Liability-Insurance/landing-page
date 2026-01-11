import { Building, Users, Award } from "lucide-react";

const trustItems = [
  {
    icon: Building,
    title: "Market Partnerships",
    description: "Exploring partnerships with leading insurance markets",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Built by insurance and AI industry veterans",
  },
  {
    icon: Award,
    title: "Advisory Board",
    description: "Supported by leading insurance and AI industry advisors",
  },
];

const TrustSection = () => {
  return (
    <section className="section-padding gradient-cream">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-left mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4 leading-tight">
            Trust & Credibility
          </h2>
          <p className="text-muted-foreground text-lg">
            Building the future of AI liability insurance with industry expertise.
          </p>
        </div>

        {/* Trust Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {trustItems.map((item, index) => (
            <div 
              key={index}
              className="card-enterprise text-center group hover:border-teal-dark/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-navy-deep flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-dark transition-colors duration-300">
                <item.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
