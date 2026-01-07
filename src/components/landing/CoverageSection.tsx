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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            AI Liability Insurance — Built for Enterprise Use
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive coverage designed specifically for companies actively using AI in their business operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Coverage List */}
          <div className="card-enterprise">
            <h3 className="text-xl font-serif font-semibold text-foreground mb-6">What We Cover</h3>
            <ul className="space-y-4">
              {coverageItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-dark/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-teal-dark" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Policy Snapshot */}
          <div>
            <h3 className="text-xl font-serif font-semibold text-foreground mb-6">Policy Snapshot</h3>
            <div className="grid grid-cols-2 gap-4">
              {policyCards.map((card, index) => (
                <div key={index} className="card-enterprise text-center">
                  <div className="w-10 h-10 rounded-lg bg-navy-deep/10 flex items-center justify-center mx-auto mb-3">
                    <card.icon className="w-5 h-5 text-navy-deep" />
                  </div>
                  <p className="text-muted-foreground text-sm mb-1">{card.label}</p>
                  <p className="text-2xl font-serif font-bold text-foreground">{card.value}</p>
                  <p className="text-muted-foreground text-sm">{card.sublabel}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
