import { ClipboardList, Calculator, FileCheck, Activity } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "AI Risk Assessment",
    description: "Complete our 30-50 structured questions about your organization's AI usage, deployment context, and risk exposure.",
  },
  {
    number: "02",
    icon: Calculator,
    title: "Underwriting & Risk Scoring",
    description: "Our AI-native underwriting engine evaluates your risk profile using proprietary models and industry benchmarks.",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Policy Pricing & Terms",
    description: "Receive customized coverage options with transparent pricing tailored to your specific risk profile.",
  },
  {
    number: "04",
    icon: Activity,
    title: "Ongoing Risk Monitoring",
    description: "Continuous assessment and policy adjustments as your AI usage evolves and regulations change.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding gradient-navy">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream mb-4">
            How It Works
          </h2>
          <p className="text-cream/70 text-lg">
            From risk assessment to active coverage in four straightforward steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-cream/20 -translate-x-1/2" />
              )}
              
              <div className="bg-cream/5 border border-cream/10 rounded-xl p-6 hover:bg-cream/10 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-gold font-serif font-bold text-2xl">{step.number}</span>
                  <div className="w-10 h-10 rounded-lg bg-teal-dark/30 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-cream" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-cream mb-2">{step.title}</h3>
                <p className="text-cream/60 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
