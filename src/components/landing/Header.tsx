import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-020-b.png";

const Header = () => {
  const handleJoinWaitlist = () => {
    // Trigger the waitlist dialog from HeroSection
    // We'll use a custom event to communicate between components
    window.dispatchEvent(new CustomEvent('openWaitlist'));
  };

  const handleLearnMore = () => {
    const coverageSection = document.getElementById("coverage");
    if (coverageSection) {
      coverageSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavClick = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-sm border-b border-cream/10">
      <div className="container-narrow section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Axiom" className="h-10 w-auto" />
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={handleNavClick("coverage")} 
              className="text-cream/80 hover:text-cream transition-colors text-sm font-medium cursor-pointer"
            >
              Coverage
            </button>
            <button 
              onClick={handleNavClick("how-it-works")} 
              className="text-cream/80 hover:text-cream transition-colors text-sm font-medium cursor-pointer"
            >
              How It Works
            </button>
            <button 
              onClick={handleNavClick("about")} 
              className="text-cream/80 hover:text-cream transition-colors text-sm font-medium cursor-pointer"
            >
              About
            </button>
            <Link to="/case-studies" className="text-cream/80 hover:text-cream transition-colors text-sm font-medium">
              Case Studies
            </Link>
            <Link to="/workshops" className="text-cream/80 hover:text-cream transition-colors text-sm font-medium">
              Workshops
            </Link>
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <Button variant="heroOutline" size="sm" className="hidden sm:inline-flex" onClick={handleLearnMore}>
              Contact
            </Button>
            <Button variant="hero" size="sm" onClick={handleJoinWaitlist}>
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
