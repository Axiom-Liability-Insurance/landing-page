import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import heroBg from "@/assets/cover-00.png";

const HeroSection = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Listen for custom event from other components
  useEffect(() => {
    const handleOpenWaitlist = () => {
      setIsWaitlistOpen(true);
    };
    window.addEventListener('openWaitlist', handleOpenWaitlist);
    return () => window.removeEventListener('openWaitlist', handleOpenWaitlist);
  }, []);

  const handleJoinWaitlist = () => {
    setIsWaitlistOpen(true);
  };

  const handleLearnMore = () => {
    const coverageSection = document.getElementById("coverage");
    if (coverageSection) {
      coverageSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSubmitWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Waitlist submission:", { email, company });
    setSubmitted(true);
    setTimeout(() => {
      setIsWaitlistOpen(false);
      setEmail("");
      setCompany("");
      setSubmitted(false);
    }, 2000);
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center gradient-navy overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-98"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Gradient Overlay - Very light to preserve background image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/20" />

        <div className="relative z-10 container-narrow section-padding pt-32">
          <div className="max-w-5xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-[1rem] bg-cream/30 backdrop-blur-md border border-cream/40 mb-10 shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-cream font-semibold text-sm drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] [text-shadow:_0_1px_3px_rgba(0,0,0,0.8)]">Enterprise AI Liability Insurance</span>
            </div>

            {/* Headline */}
            <div className="mb-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-[1.15] mb-6">
                <div className="text-cream mb-4 drop-shadow-[0_3px_12px_rgba(0,0,0,0.6)] [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)]">
                  AI Is Already in Your Business.
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-cream drop-shadow-[0_3px_12px_rgba(0,0,0,0.6)] [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)]">The Liability</span>
                  <span className="px-4 py-2 bg-cream/30 backdrop-blur-sm text-navy-deep rounded-lg font-bold shadow-[0_4px_16px_rgba(0,0,0,0.3)] border border-cream/40">
                    Isn't Covered.
                  </span>
                </div>
              </h1>
            </div>

            {/* Subheadline */}
            <div className="max-w-2xl mb-12">
              <p className="text-lg md:text-xl text-cream leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] [text-shadow:_0_1px_4px_rgba(0,0,0,0.7)]">
                Traditional insurance excludes AI hallucinations, bias, IP infringement, and AI-driven professional negligence. Axiom insures the gap.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button variant="hero" size="xl" onClick={handleJoinWaitlist} className="shadow-xl">
                Join Waitlist
              </Button>
              <Button 
                variant="heroOutline" 
                size="xl" 
                onClick={handleLearnMore} 
                className="!bg-cream/30 backdrop-blur-md !border-cream/40 hover:!bg-cream/40 shadow-lg text-cream"
              >
                Learn More
              </Button>
            </div>

            {/* Early stage indicator */}
            <div className="max-w-2xl pt-8 border-t border-cream/30">
              <p className="text-cream text-sm font-semibold mb-2 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] [text-shadow:_0_1px_2px_rgba(0,0,0,0.6)]">Currently in development</p>
              <p className="text-cream/95 text-sm leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">
                We're building the future of AI liability insurance. Join us as we develop comprehensive coverage for enterprise AI risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Dialog */}
      <Dialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Join the Waitlist</DialogTitle>
            <DialogDescription>
              Be among the first to know when Axiom AI Liability Insurance becomes available.
            </DialogDescription>
          </DialogHeader>
          {submitted ? (
            <div className="py-8 text-center">
              <div className="text-4xl mb-4">✓</div>
              <p className="text-lg font-semibold text-foreground mb-2">Thank you!</p>
              <p className="text-sm text-muted-foreground">
                We'll notify you when we launch.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmitWaitlist} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company Name (Optional)</Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Your Company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Join Waitlist
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HeroSection;
