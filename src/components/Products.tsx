import { Card, CardContent } from "@/components/ui/card";
import mangueiraPU1 from "@/assets/mangueira-pu-1.jpg";
import mangueiraPU2 from "@/assets/mangueira-pu-2.webp";
import mangueiraHidraulicaMacho from "@/assets/mangueira-hidraulica-macho.jpg";
import mangueiraHidraulicaFemea from "@/assets/mangueira-hidraulica-femea.jpg";
import mangueirasHidraulicas from "@/assets/mangueiras-hidraulicas.png";
import mangueiraIndustrial from "@/assets/mangueira-industrial.jpg";

const products = [
  {
    title: "Mangueiras Hidráulicas",
    description: "Mangueiras de alta pressão para sistemas hidráulicos industriais. Resistentes e duráveis, ideais para máquinas pesadas e equipamentos industriais.",
    image: mangueirasHidraulicas,
  },
  {
    title: "Mangueiras de Poliuretano (PU)",
    description: "Tubos de poliuretano flexíveis e resistentes à abrasão. Perfeitos para sistemas pneumáticos, automação industrial e transporte de materiais.",
    image: mangueiraPU1,
  },
  {
    title: "Conexões Hidráulicas",
    description: "Conexões de inox, cobre e latão para sistemas hidráulicos. Disponíveis em diversos tipos: macho, fêmea, joelhos e adaptadores.",
    image: mangueiraHidraulicaMacho,
  },
  {
    title: "Mangueiras Industriais",
    description: "Linha completa de mangueiras para combustíveis, gases, freio automotivo e ar condicionado. Certificadas e testadas para máxima segurança.",
    image: mangueiraIndustrial,
  },
  {
    title: "Montagem e Crimpagem",
    description: "Serviço especializado de montagem e crimpagem de mangueiras sob medida. Equipamentos modernos para garantir conexões perfeitas e seguras.",
    image: mangueiraHidraulicaFemea,
  },
  {
    title: "Tubos Especiais",
    description: "Tubos de poliuretano em diversas cores e diâmetros. Flexibilidade excepcional e resistência a produtos químicos e variações de temperatura.",
    image: mangueiraPU2,
  },
];

export const Products = () => {
  return (
    <section id="produtos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos Produtos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Qualidade e variedade para atender todas as suas necessidades industriais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-border/50"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
