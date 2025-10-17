import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-hitocom.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Hitocom Logo" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("produtos")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contato
            </button>
          </nav>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-lg"
            >
              Peça um Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-4 animate-fade-in">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors font-medium text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("produtos")}
              className="text-foreground hover:text-primary transition-colors font-medium text-left"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-colors font-medium text-left"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors font-medium text-left"
            >
              Contato
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold w-full"
            >
              Peça um Orçamento
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};
