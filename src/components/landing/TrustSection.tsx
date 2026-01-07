import { Building, Users, Award } from "lucide-react";

const trustItems = [
  {
    icon: Building,
    title: "Lloyd's of London",
    description: "Approval in progress for Lloyd's-backed capacity",
    status: "In Progress",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Built by former Munich Re, SimpliSafe, and quantitative finance engineers",
    status: "Verified",
  },
  {
    icon: Award,
    title: "Advisory Board",
    description: "Supported by leading insurance and AI industry advisors",
    status: "Active",
  },
];

const TrustSection = () => {
  return (
    <section className="section-padding gradient-cream">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Trust & Credibility
          </h2>
          <p className="text-muted-foreground text-lg">
            Backed by industry expertise and institutional partnerships.
          </p>
        </div>

        {/* Trust Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {trustItems.map((item, index) => (
            <div 
              key={index}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-navy-deep flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-8 h-8 text-gold" />
              </div>
              <span className="inline-block px-3 py-1 bg-teal-dark/10 text-teal-dark text-xs font-medium rounded-full mb-3">
                {item.status}
              </span>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
