import { Check, Shield, DollarSign, Calendar, FileText } from "lucide-react";

const coverageItems = [
  "AI hallucinations in client-facing or internal work",
  "AI-driven professional negligence",
  "Algorithmic bias & discrimination claims",
  "AI-generated IP infringement",
  "Enterprise AI usage liability (not just AI vendors)",
];

const policyCards = [
  {
    icon: Shield,
    label: "Coverage",
    value: "$1M – $10M",
    sublabel: "per policy",
  },
  {
    icon: DollarSign,
    label: "Premiums",
    value: "$75K – $500K",
    sublabel: "annually",
  },
  {
    icon: FileText,
    label: "Deductible",
    value: "$25K – $100K",
    sublabel: "per claim",
  },
  {
    icon: Calendar,
    label: "Term",
    value: "12 months",
    sublabel: "renewable",
  },
];

const CoverageSection = () => {
  return (
    <section id="coverage" className="section-padding gradient-cream">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-left mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4 leading-tight">
            AI Liability Insurance — Built for Enterprise Use
          </h2>
          <p className="text-muted-foreground text-lg">
            Coverage designed specifically for companies actively using AI in their business operations. Currently in development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Coverage List */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-8">What We Cover</h3>
            <div className="card-enterprise">
              <ul className="space-y-5">
                {coverageItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-lg bg-teal-dark/15 flex items-center justify-center flex-shrink-0 mt-0.5 border border-teal-dark/20">
                      <Check className="w-4 h-4 text-teal-dark" />
                    </div>
                    <span className="text-foreground leading-relaxed pt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Policy Snapshot */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-8">Planned Coverage</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {policyCards.map((card, index) => (
                <div key={index} className="card-enterprise text-center hover:border-teal-dark/30 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-navy-deep/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-dark/10 group-hover:border group-hover:border-teal-dark/20 transition-all duration-300">
                    <card.icon className="w-6 h-6 text-navy-deep group-hover:text-teal-dark transition-colors duration-300" />
                  </div>
                  <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide mb-2">{card.label}</p>
                  <p className="text-xl font-serif font-bold text-foreground mb-1 whitespace-nowrap">{card.value}</p>
                  <p className="text-muted-foreground text-xs">{card.sublabel}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-xs text-left italic leading-relaxed">
              Pricing and terms are subject to change as we develop our product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
