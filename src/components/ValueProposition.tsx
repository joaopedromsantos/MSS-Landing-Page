import { Coffee } from "lucide-react";
import { propositionData } from "../data/propositionData";

export function ValueProposition() {

  const features = propositionData;

  return (
    <section id="value-proposition" className="py-20 bg-white-bg">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 md:px-20 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6">
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
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-2xl border border-transparent hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
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
