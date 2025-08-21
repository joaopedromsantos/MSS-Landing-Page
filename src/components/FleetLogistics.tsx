
import pickupImage from '../assets/fleet/pickup.jpg';
import truckImage from '../assets/fleet/truck.jpg';
import { fleetData } from '../data/fleetData';

export function FleetLogistics() {
  const features = fleetData

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-8 sm:px-16 md:px-20 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Logística e Entrega
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Nossa frota própria garante que suas sacarias sejam entregues com segurança 
            e no prazo certo para suas operações de exportação.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={pickupImage}
                alt="Caminhão da frota Marcelo Silk Screen"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold text-dark mb-2">Caminhonete</h4>
                <p className="text-secondary">Para entregas rápidas e locais.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={truckImage}
                alt="Van da frota Marcelo Silk Screen"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold text-dark mb-2">Caminhão</h4>
                <p className="text-secondary">Para grandes volumes e longas distâncias.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FleetLogistics;