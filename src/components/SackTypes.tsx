import { CheckCircle } from "lucide-react";
import { sackData } from "../data/sackData";

export function SackTypes() {
  const sackTypes = sackData;

  return (
    <section id="sack-types" className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-8 sm:px-16 md:px-20 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4">
            Tipos de Sacarias
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Trabalhamos com diversos tipos de sacarias para 30 ou 60 Kg.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sackTypes.map((sack) => {
            const Icon = sack.icon;
            return (
              <div
                key={sack.id}
                className={`relative group bg-white overflow-hidden rounded-xl p-8 flex flex-col border-2 border-transparent ${sack.borderColor} shadow-xl ${sack.shadowColor} transition-all duration-300 hover:-translate-y-2`}
              >
                <div className={`absolute -top-10 -right-10 w-36 h-36 ${sack.iconColor} opacity-5`}>
                  <Icon className="w-full h-full" strokeWidth={1} />
                </div>

                <div className="mb-6 bg-gray-100 p-4 rounded-full w-fit">
                  <Icon className={`w-8 h-8 ${sack.iconColor}`} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6 z-10">
                  {sack.name}
                </h3>

                <ul className="space-y-3 text-left z-10 text-gray-700">
                  {sack.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SackTypes;