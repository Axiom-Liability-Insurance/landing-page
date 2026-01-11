import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { DollarSign, Users, FileText, TrendingUp, Scale } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  company: string;
  industry: string;
  year: string;
  icon: React.ComponentType<{ className?: string }>;
  overview: string;
  challenge: string;
  impact: {
    financial: string;
    operational: string;
    reputational: string;
  };
  outcome: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "case-1",
    title: "$85,568 in Sanctions for 'Serial Hallucinator' Attorney",
    company: "James Martin Paul (Solo Practitioner)",
    industry: "Legal Services",
    year: "2025",
    icon: Scale,
    overview: "Attorney James Martin Paul, a solo practitioner, systematically used generative AI (including ChatGPT) to develop legal research and arguments across four separate client lawsuits. The AI generated fabricated case citations and manufactured legal quotations that Paul filed in federal court without verification. The court's review revealed that Paul filed numerous pleadings containing AI-generated fabrications across four consolidated federal lawsuits. Defense counsel documented over 121.7 hours of billable time spent responding to Paul's AI-contaminated filings in just two of the four cases. Most egregiously, Paul used AI to generate his Court-mandated response to allegations that he had misused AI.",
    challenge: "The court used exceptionally harsh language, characterizing Paul as a 'serial hallucinator' who engaged in 'repeated, abusive, bad-faith conduct.' Unlike other AI hallucination cases where courts found negligence, this court explicitly rejected Paul's claim that his actions were not in bad faith, stating: 'Paul repeatedly stated at the hearing that he took full accountability for his actions and that they were not taken in bad faith, malicious, or intentional. This Court strongly disagrees; what happened here constitutes repeated, abusive, bad-faith conduct that cannot be recognized as legitimate legal practice and must be deterred.' Paul argued for reduced sanctions of $20,000 payable in installments, citing financial hardship as a solo practitioner with unpaid fees. The court rejected every argument and ordered full payment of $85,567.75 within 90 days—no installment plan.",
    impact: {
      financial: "$85,567.75 in attorney fees and costs (reduced from $112,196.50 after good-faith negotiations), payable in full within 90 days",
      operational: "All AI-contaminated filings required response; court noted 'other sanctions available to the Court were not ordered here'",
      reputational: "Designated as 'serial hallucinator' engaged in 'bad-faith conduct'; potential bar referrals and professional discipline"
    },
    outcome: "The court articulated a critical concern about reducing sanctions for attorneys who engage in repeated AI misconduct: 'Accepting that argument would essentially cap counsel's liability and promote an in for a penny, in for a pound mindset that would only benefit serial hallucinators.' For professional services firms, the exposure multiplies exponentially: a law firm with 50 attorneys handling 1,500 matters annually could face $255,000+ in annual AI sanctions exposure with just a 2% error rate. The court's language reveals that attorneys who use AI repeatedly without adequate safeguards face exponentially higher sanctions than those who make isolated mistakes. Traditional E&O policies contain exclusions that may not cover sanctions imposed on individual attorneys, technology errors, systematic negligence, 'bad faith' conduct, or awards payable to opposing counsel. Paul faces $85,567.75 in personal liability that likely is not covered by any insurance policy. The court's final warning applies to every professional services firm: 'What happened here constitutes repeated, abusive, bad-faith conduct that cannot be recognized as legitimate legal practice and must be deterred.'"
  },
  {
    id: "case-2",
    title: "When Your AI Makes Promises You Can't Keep",
    company: "Air Canada",
    industry: "Airline & Transportation",
    year: "2024",
    icon: FileText,
    overview: "Jake Moffatt's grandmother passed away in Ontario. He visited Air Canada's website to book a bereavement flight and used Air Canada's AI chatbot, which told him passengers could apply for reduced bereavement fares up to 90 days AFTER travel was completed. Based on this information, Moffatt booked full-price tickets (~$1,200 CAD) and traveled to the funeral. After returning, he applied for the bereavement discount as the chatbot had instructed. Air Canada denied the request, pointing to a different page on their website that stated bereavement fares do NOT apply to completed travel. The chatbot had given completely incorrect information.",
    challenge: "Air Canada argued the chatbot was a 'separate legal entity' responsible for its own actions and that Moffatt should have cross-referenced the chatbot's information with other parts of their website. The tribunal rejected Air Canada's arguments entirely, finding that 'It should be obvious to Air Canada that it is responsible for all the information on its website. It makes no difference whether the information comes from a static page or a chatbot.' The tribunal found Air Canada committed 'negligent misrepresentation' and 'did not take reasonable care to ensure its chatbot was accurate.'",
    impact: {
      financial: "$812.02 CAD in damages, interest, and tribunal fees",
      operational: "Air Canada subsequently removed the chatbot from their website",
      reputational: "Legal precedent establishing company liability for AI-generated information"
    },
    outcome: "This case established that companies are fully liable for AI-generated information, AI tools cannot be considered 'separate legal entities,' and customers cannot be expected to verify AI responses against other company sources. The ruling set a critical precedent that standard duty of care applies: companies must ensure AI representations are accurate and not misleading. Traditional E&O policies were written before AI tools existed, and many insurers are now adding AI EXCLUSIONS to avoid this risk. Without specialized AI liability coverage, companies using AI tools are exposed."
  },
  {
    id: "case-3",
    title: "$74,235 in Sanctions for AI-Generated Fake Legal Citations",
    company: "California Court of Appeal",
    industry: "Legal Services",
    year: "2025",
    icon: Scale,
    overview: "Aparna Vashisht-Rota used artificial intelligence tools (including ChatGPT) to draft legal briefs for an appellate case. The AI generated completely fabricated legal authorities that she cited in her court filings without verification. The AI fabricated 3 cases that do not exist at all, 2 real cases but with fabricated quotes and legal language they don't actually contain, fake statutory provisions attributed to California Code of Civil Procedure, and citations that appeared legitimate with proper formatting, case numbers, and judicial language.",
    challenge: "The opposing counsel and the court discovered the fabricated citations when they attempted to verify the legal authorities. The cases either didn't exist in any legal database or didn't contain the language attributed to them. Rota admitted in her court filings that 'she used artificial intelligence tools for parts of her brief' and claimed any citation errors were due to 'inadvertence, not intentional misrepresentation.' The California Court of Appeal was unequivocal in its rejection of the AI defense, stating: 'She may use artificial intelligence tools to prepare briefs, but she must check every citation to make sure the case exists and the citations are correct.'",
    impact: {
      financial: "$74,235 in total sanctions ($59,235 to opposing counsel, $15,000 to the court)",
      operational: "Court resources wasted processing frivolous appeal with fake citations",
      reputational: "Legal precedent establishing professional liability for AI errors cannot be avoided"
    },
    outcome: "This case establishes clear precedent that professional liability for AI errors cannot be avoided by claiming 'the AI did it.' Professionals using AI tools are held to the same standards as if they did the work manually. Verification is mandatory - courts require professionals to verify all AI-generated content before relying on it. For professional services firms, the liability multiplies: a single attorney using AI for briefs faces $74,235 in sanctions, while a law firm using AI for 50 matters per year with even a 5% error rate could face $100K - $500K in malpractice claims per case, plus professional discipline and reputation damage. Traditional E&O policies have limitations for reliance on third-party tools, technology errors, systematic errors affecting multiple clients, and sanctions and penalties (often excluded). Without specialized AI liability coverage, firms using AI tools face uncovered sanctions, gaps in defense cost coverage, and aggregate exposure across multiple matters."
  },
  {
    id: "case-4",
    title: "$35,496 in Sanctions for AI-Generated Fake Citations Across 11 Filings",
    company: "Howie Law Firm & Oliver Law Firm",
    industry: "Legal Services",
    year: "2025",
    icon: Scale,
    overview: "Over the course of several months, a law firm submitted 11 pleadings in federal litigation that relied on artificial intelligence (ChatGPT) for legal research. The AI generated citations that the attorneys filed without verification. The court's independent review identified 28 false or misleading citations across 11 different court filings: 14 completely fabricated cases that do not exist, and 14 real cases with fabricated quotes or incorrect holdings. The fabricated cases included proper formatting, realistic case names, accurate citation style, and plausible legal language—making them appear legitimate to anyone who didn't verify them in legal databases.",
    challenge: "When opposing counsel notified the plaintiffs' attorneys that multiple cited cases could not be located, the law firm filed a Motion to Amend describing the fabricated authorities as 'clerical and formatting errors.' At the show-cause hearing, lead attorney Harrison A. Howie admitted he used ChatGPT 'to make his writing more persuasive,' the program 'changed his citations,' he did not verify them before filing, and none of the 11 pleadings contained required AI disclosure. The court rejected the 'AI defense' and established clear precedent, stating: 'This obligation is absolute. It cannot be outsourced to technology or delegated to co-counsel. The attorney's signature is the personal warranty of truth that anchors the judicial process.'",
    impact: {
      financial: "$35,495.90 total ($29,495.90 in attorney fees + $6,000 in sanctions to individual attorneys)",
      operational: "All 11 pleadings STRICKEN from the record, required to refile with human verification within 60 days",
      reputational: "Public reprimand, 12-month prohibition on local counsel, and precedent establishing organizational liability at every level"
    },
    outcome: "The court found liability at every level: the lead attorney who drafted and signed all pleadings without verification, referring counsel who failed to question accuracy, managing partner who had no AI use policy, and local counsel who never reviewed pleadings. The court established a three-factor test for AI-related professional misconduct: verification and inquiry, candor and correction, and accountability and supervision. The court emphasized: 'Artificial intelligence may explain an error, but it can never excuse one.' For professional services firms, the liability multiplies across multiple matters. A law firm using AI for 50 matters per year with even a 5% error rate could face $100K-$500K in malpractice claims per case, plus professional discipline and reputation damage. Traditional E&O policies have limitations for reliance on third-party tools, technology errors, systematic errors affecting multiple clients, and sanctions and penalties (often excluded). Without specialized AI liability coverage, firms using AI tools face uncovered sanctions, gaps in defense cost coverage, and aggregate exposure across multiple matters."
  },
];

const CaseStudies = () => {
  const [activeSection, setActiveSection] = useState<string>(caseStudies[0].id);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for header

      for (let i = caseStudies.length - 1; i >= 0; i--) {
        const section = sectionRefs.current[caseStudies[i].id];
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(caseStudies[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = sectionRefs.current[id];
    if (section) {
      const headerOffset = 100;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container-narrow section-padding">
          {/* Page Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Case Studies
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Real-world examples of AI-related liabilities and their impact on organizations. These cases illustrate the protection gap in traditional insurance coverage.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Table of Contents - Sidebar */}
            <aside className="lg:w-64 lg:flex-shrink-0">
              <div className="sticky top-24">
                <nav className="space-y-2">
                  <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    Contents
                  </h2>
                  {caseStudies.map((study) => {
                    const Icon = study.icon;
                    return (
                      <button
                        key={study.id}
                        onClick={() => scrollToSection(study.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-start gap-3 ${
                          activeSection === study.id
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        <Icon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span className="text-sm font-medium leading-tight">{study.title}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Case Studies Content */}
            <div className="flex-1 space-y-24">
              {caseStudies.map((study) => {
                const Icon = study.icon;
                return (
                  <section
                    key={study.id}
                    id={study.id}
                    ref={(el) => {
                      if (el) {
                        sectionRefs.current[study.id] = el;
                      }
                    }}
                    className="scroll-mt-24"
                  >
                    <div className="card-enterprise">
                      {/* Case Study Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 rounded-lg bg-navy-deep flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-gold" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                              {study.title}
                            </h2>
                            <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                              {study.year}
                            </span>
                          </div>
                          <p className="text-muted-foreground">
                            <span className="font-medium">{study.company}</span> • {study.industry}
                          </p>
                        </div>
                      </div>

                      {/* Overview */}
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold text-foreground mb-3">Overview</h3>
                        <p className="text-muted-foreground leading-relaxed">{study.overview}</p>
                      </div>

                      {/* Challenge */}
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold text-foreground mb-3">Challenge</h3>
                        <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                      </div>

                      {/* Impact */}
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold text-foreground mb-4">Impact</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="p-4 bg-muted/50 rounded-lg">
                            <p className="text-xs font-medium text-muted-foreground mb-1">Financial</p>
                            <p className="text-sm text-foreground font-semibold">{study.impact.financial}</p>
                          </div>
                          <div className="p-4 bg-muted/50 rounded-lg">
                            <p className="text-xs font-medium text-muted-foreground mb-1">Operational</p>
                            <p className="text-sm text-foreground font-semibold">{study.impact.operational}</p>
                          </div>
                          <div className="p-4 bg-muted/50 rounded-lg">
                            <p className="text-xs font-medium text-muted-foreground mb-1">Reputational</p>
                            <p className="text-sm text-foreground font-semibold">{study.impact.reputational}</p>
                          </div>
                        </div>
                      </div>

                      {/* Outcome */}
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3">Insurance Outcome</h3>
                        <p className="text-muted-foreground leading-relaxed">{study.outcome}</p>
                      </div>
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
