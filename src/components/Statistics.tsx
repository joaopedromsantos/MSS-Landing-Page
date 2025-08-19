import { Calendar, Package, Building2 } from 'lucide-react';

const Statistics = () => {
  const stats = [
    {
      icon: Calendar,
      number: '19',
      unit: 'Anos de Experiência',
      color: 'bg-yellow',
    },
    {
      icon: Package,
      number: '+3M',
      unit: 'Sacas Estampadas',
      color: 'bg-accent',
    },
    {
      icon: Building2,
      number: '+60',
      unit: 'Empresas Atendidas',
      color: 'bg-secondary',
    },
  ];

  return (
    <section className="py-20 bg-black-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-coffee-texture"></div>
      <div className="absolute inset-0 bg-black-primary opacity-90"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Números que Falam por Si
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Duas décadas de excelência na serigrafia de sacas de café, 
            construindo confiança e qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${stat.color} mb-6 shadow-lg`}>
                <stat.icon className="h-10 w-10 text-white" />
              </div>
              
              <div className="mb-4">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-2xl font-semibold text-primary">
                  {stat.unit}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Statistics;