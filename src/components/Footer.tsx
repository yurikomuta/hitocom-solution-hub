import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/logo-hitocom.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <img src={logo} alt="Hitocom Logo" className="h-16 w-auto mb-4 " />
            <p className="text-background/80 leading-relaxed mb-4">
              Há mais de 30 anos fornecendo soluções completas em mangueiras e conexões industriais para todo o Brasil. Qualidade, experiência e compromisso com nossos clientes.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-background/80">(11) 94794-4777</p>
                  <p className="text-background/80">(11) 4437-9699</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-background/80">vendas@hitocom.com.br</p>
              </div>
            </div>
          </div>

          {/* Address and Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Localização</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-background/80">
                  Avenida Queiros dos Santos, 1992<br />
                  Santo André - SP, 09015-311
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-background/80">Segunda a Sexta | 8h às 17h</p>
                  <p className="text-background/80">Sábado | 8h às 12h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {currentYear} Hitocom Mangueiras e Conexões. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <button className="text-background/60 hover:text-accent transition-colors">
                Política de Privacidade
              </button>
              <button className="text-background/60 hover:text-accent transition-colors">
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
