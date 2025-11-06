import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo size="small" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("services")} className="hover:text-blue-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("cases")} className="hover:text-blue-600 transition-colors">
              Case Studies
            </button>
            <button onClick={() => scrollToSection("team")} className="hover:text-blue-600 transition-colors">
              Team
            </button>
            <Button onClick={() => scrollToSection("contact")}>Get in Touch</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            <button onClick={() => scrollToSection("services")} className="text-left hover:text-blue-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("cases")} className="text-left hover:text-blue-600 transition-colors">
              Case Studies
            </button>
            <button onClick={() => scrollToSection("team")} className="text-left hover:text-blue-600 transition-colors">
              Team
            </button>
            <Button onClick={() => scrollToSection("contact")} className="w-full">Get in Touch</Button>
          </nav>
        )}
      </div>
    </header>
  );
}