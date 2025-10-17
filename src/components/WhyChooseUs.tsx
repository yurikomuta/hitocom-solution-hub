import { Award, Clock, Shield, Truck, Users, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const differentials = [
  {
    icon: Award,
    title: "Mais de 30 Anos de Experiência",
    description: "Três décadas de expertise e conhecimento no mercado de mangueiras e conexões industriais.",
  },
  {
    icon: Shield,
    title: "Produtos de Alta Qualidade",
    description: "Apenas produtos certificados e testados para garantir máxima durabilidade e segurança.",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Equipe especializada pronta para auxiliar na escolha ideal para sua aplicação.",
  },
  {
    icon: Wrench,
    title: "Expertise em Diversos Segmentos",
    description: "Soluções completas para indústria, agricultura, construção civil e muito mais.",
  },
  {
    icon: Truck,
    title: "Entrega Rápida e Eficiente",
    description: "Logística otimizada para atender todo o Brasil com agilidade e pontualidade.",
  },
  {
    icon: Clock,
    title: "Pronto Atendimento",
    description: "Estoque completo e atendimento ágil para suas necessidades urgentes.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por Que Escolher a Hitocom?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Confiança, qualidade e excelência no atendimento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="border-2 border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
