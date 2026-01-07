import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-deep/95 backdrop-blur-sm border-b border-cream/10">
      <div className="container-narrow section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-gold" />
            <span className="text-2xl font-serif font-bold text-cream">Axiom</span>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#coverage" className="text-cream/80 hover:text-cream transition-colors text-sm font-medium">
              Coverage
            </a>
            <a href="#how-it-works" className="text-cream/80 hover:text-cream transition-colors text-sm font-medium">
              How It Works
            </a>
            <a href="#about" className="text-cream/80 hover:text-cream transition-colors text-sm font-medium">
              About
            </a>
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <Button variant="heroOutline" size="sm" className="hidden sm:inline-flex">
              Contact
            </Button>
            <Button variant="hero" size="sm">
              Request Coverage
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
