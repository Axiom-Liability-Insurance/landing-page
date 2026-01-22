import { Button } from "@/components/ui/button";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Shield, Users, Clock, CheckCircle2, BookOpen, TrendingUp, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Workshops = () => {
  const handlePurchaseTicket = () => {
    // TODO: Link to Stripe checkout page
    console.log("Navigate to Stripe checkout");
  };

  const workshopTopics = [
    {
      icon: AlertTriangle,
      title: "Identifying AI Risks",
      description: "Learn to recognize common AI failure modes including hallucinations, bias, and data leakage risks in enterprise environments."
    },
    {
      icon: Shield,
      title: "Best Practices for AI Safety",
      description: "Implement verification protocols, human-in-the-loop processes, and quality assurance frameworks for AI deployments."
    },
    {
      icon: BookOpen,
      title: "Legal & Compliance Framework",
      description: "Understand liability exposure, regulatory requirements, and how to structure AI use policies that protect your organization."
    },
    {
      icon: TrendingUp,
      title: "Risk Mitigation Strategies",
      description: "Develop comprehensive risk management approaches including monitoring, auditing, and insurance coverage options."
    }
  ];

  const workshopFormat = [
    {
      icon: Clock,
      title: "Duration",
      description: "Half-day workshop (4 hours) with breaks"
    },
    {
      icon: Users,
      title: "Format",
      description: "Interactive sessions with case studies, group exercises, and Q&A"
    },
    {
      icon: CheckCircle2,
      title: "Outcomes",
      description: "Take-home resources, action plans, and certification of completion"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="gradient-navy py-20">
          <div className="container-narrow section-padding">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream mb-6 leading-tight">
                AI Safety Workshops for Corporate Teams
              </h1>
              <p className="text-xl md:text-2xl text-cream/90 mb-8 leading-relaxed">
                Equip your team with the knowledge and tools to deploy AI safely and responsibly
              </p>
              <p className="text-lg text-cream/80 max-w-2xl mx-auto mb-12 leading-relaxed">
                As AI becomes integral to business operations, understanding AI liability risks and implementing proper safeguards is critical. Our workshops provide practical, actionable guidance for corporate employees at all levels.
              </p>
              <Button 
                variant="hero" 
                size="xl" 
                onClick={handlePurchaseTicket}
                className="shadow-xl text-lg px-8 py-6"
              >
                Purchase Workshop Ticket
              </Button>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="py-20 bg-background">
          <div className="container-narrow section-padding">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 leading-tight">
                  What You'll Learn
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive coverage of AI safety principles, risk management, and practical implementation strategies
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {workshopTopics.map((topic, index) => {
                  const Icon = topic.icon;
                  return (
                    <Card key={index} className="card-enterprise">
                      <CardHeader>
                        <div className="flex items-center gap-4 mb-2">
                          <div className="w-12 h-12 rounded-lg bg-navy-deep flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-gold" />
                          </div>
                          <CardTitle className="text-xl font-serif">{topic.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed">
                          {topic.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Workshop Format */}
        <section className="py-20 bg-muted/30">
          <div className="container-narrow section-padding">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 leading-tight">
                  Workshop Format
                </h2>
                <p className="text-lg text-muted-foreground">
                  Designed for maximum engagement and practical application
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {workshopFormat.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card key={index} className="text-center card-enterprise">
                      <CardHeader>
                        <div className="w-16 h-16 rounded-full bg-navy-deep flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-8 h-8 text-gold" />
                        </div>
                        <CardTitle className="text-lg font-serif">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm leading-relaxed">
                          {item.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Attend */}
        <section className="py-20 bg-background">
          <div className="container-narrow section-padding">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 leading-tight">
                  Who Should Attend
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <Card className="card-enterprise">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif">Technical Teams</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      Developers, data scientists, ML engineers, and technical leads responsible for building and deploying AI systems. Learn to implement safety checks and verification protocols.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="card-enterprise">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif">Business Leaders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      Executives, product managers, and decision-makers who need to understand AI risks and make informed choices about AI adoption and governance.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="card-enterprise">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif">Legal & Compliance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      Legal teams, compliance officers, and risk managers who must navigate AI liability, regulatory requirements, and insurance coverage considerations.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="card-enterprise">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif">Operations & Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      Teams managing customer-facing AI tools, support systems, and operational AI deployments who need to identify and respond to AI failures.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-navy">
          <div className="container-narrow section-padding">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream mb-6 leading-tight">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-cream/90 mb-8 leading-relaxed">
                Join our next workshop and empower your team with the knowledge to deploy AI safely and responsibly.
              </p>
              <Button 
                variant="hero" 
                size="xl" 
                onClick={handlePurchaseTicket}
                className="shadow-xl text-lg px-8 py-6"
              >
                Purchase Workshop Ticket
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Workshops;
