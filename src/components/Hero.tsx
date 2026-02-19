import { Button } from "@/components/ui/button";
import { ArrowRight, Bold } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary/80 opacity-95" />

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Hitocom
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-fade-in font-bold" style={{ animationDelay: "0.1s" }}>
            Sua solução em mangueiras e conexões industriais no Brasil.
          </p>
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg text-primary-foreground leading-relaxed">
              A Hitocom Mangueiras e Conexões é especializada na venda de mangueiras industriais, hidráulicas, para combustíveis, gases, freio automotivo, ar condicionado, PU, e muito mais, além de conexões de inox, cobre e latão. Com mais de 30 anos de história, oferecemos produtos que garantem desempenho, segurança e a satisfação dos nossos clientes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              onClick={() => window.open("https://wa.me/5511947944777", "_blank")}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-8 py-6 shadow-2xl hover:scale-105 transition-transform"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("produtos")}
              className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 font-bold text-lg px-8 py-6 backdrop-blur-sm"
            >
              Ver Produtos
            </Button>
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};
