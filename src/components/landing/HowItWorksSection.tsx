import { ClipboardList, Calculator, FileCheck, Activity } from "lucide-react";

const steps = [
  {
    number: "1.",
    icon: ClipboardList,
    title: "AI Risk Assessment",
    description: "Complete our 30-50 structured questions about your organization's AI usage, deployment context, and risk exposure.",
  },
  {
    number: "2.",
    icon: Calculator,
    title: "Underwriting & Risk Scoring",
    description: "Our AI-native underwriting engine evaluates your risk profile using proprietary models and industry benchmarks.",
  },
  {
    number: "3.",
    icon: FileCheck,
    title: "Policy Pricing & Terms",
    description: "Receive customized coverage options with transparent pricing tailored to your specific risk profile.",
  },
  {
    number: "4.",
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
        <div className="text-left mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-cream mb-4 leading-tight">
            How It Works
          </h2>
          <p className="text-cream/70 text-lg">
            From risk assessment to active coverage in four straightforward steps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative group"
              >
                {/* Connector line - connects at the top where number/icon are */}
                {index < steps.length - 1 && (
                  <div 
                    className="hidden lg:block absolute top-8 left-full h-0.5 bg-cream/30 z-0"
                    style={{ 
                      width: '2rem'
                    }}
                  />
                )}
                
                <div className="bg-cream/5 border border-cream/10 rounded-xl p-6 lg:p-8 hover:bg-cream/10 hover:border-cream/20 transition-all duration-300 h-full relative z-10">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-teal-dark/30 flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-6 h-6 text-cream" />
                      </div>
                      <span className="text-gold font-serif font-bold text-3xl leading-none">{step.number}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-cream mb-3 leading-tight">{step.title}</h3>
                  <p className="text-cream/70 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
