import polypropyleneSackImage from '../assets/sacks/poli.jpg';
import juteSackImage from '../assets/sacks/juta.jpg'; 
import paperSackImage from '../assets/sacks/papel.jpg'; 

const SackTypes = () => {
  const sackTypes = [
    {
      id: 1,
      name: 'Sacas de Polipropileno',
      image: polypropyleneSackImage,
    },
    {
      id: 2,
      name: 'Sacas de Juta',
      image: juteSackImage,
    },
    {
      id: 3,
      name: 'Sacas de Papel',
      image: paperSackImage,
    },
  ];

  return (
    <section id="sack-types" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Tipos de Sacas
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Trabalhamos com diversos tipos de sacarias 30 ou 60 Kg.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {sackTypes.map((sack) => (
            <div 
              key={sack.id}
              className="group text-center transform transition-transform duration-300 hover:scale-105"
            >
              <div className="relative w-full h-80 mb-4 overflow-hidden rounded-lg shadow-lg">
                <img
                  src={sack.image}
                  alt={`Imagem de ${sack.name}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-700">
                {sack.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SackTypes;