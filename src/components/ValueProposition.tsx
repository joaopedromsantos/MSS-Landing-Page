import { Coffee, Palette, Shield, Truck } from "lucide-react";

const ValueProposition = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Tintas Duráveis e Atóxicas",
      description:
        "Utilizamos tintas de alta fixação, atóxicas e duráveis, para garantir a longevidade e a segurança do seu produto.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Criação e Design Profissional",
      description:
        "Criamos ou vetorizamos sua arte e desenvolvemos o design completo da sacaria.",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Logística de Coleta e Entrega",
      description:
        "Coletamos a sacaria, realizamos o serviço e devolvemos ao seu endereço, com total agilidade.",
    },
  ];

  return (
    <section id="value-proposition" className="py-20 bg-white-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            A Arte por Trás do Seu Café
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Para exportadores de café, a impressão em sacarias não é apenas
            decoração – é agregar valor, estabelecer identidade de marca e
            contar a história única do seu produto no mercado global.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <div className="text-primary">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">
                {feature.title}
              </h3>
              <p className="text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center p-8 rounded-2xl bg-primary/5 border border-primary/20">
          <div className="flex items-center justify-center mb-6">
            <Coffee className="w-12 h-12 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-dark mb-4">
            Seu Café, Sua Marca, Sua História
          </h3>
          <p className="text-secondary max-w-3xl mx-auto">
            Cada sacaria de café estampada é uma oportunidade de comunicar
            qualidade, origem e valores da sua marca. Invista na diferenciação
            que seu café merece no mercado internacional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
