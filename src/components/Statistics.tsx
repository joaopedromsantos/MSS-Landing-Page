import { statisticsData } from "../data/statisticsData";

export function Statistics() {
  
  const stats = statisticsData;

  return (
    <section className="py-20 bg-black-primary relative overflow-hidden">      
      <div className="container mx-auto px-8 sm:px-16 md:px-20 lg:px-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Números que Falam por Si
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
           Anos de excelência na serigrafia de sacas de café, 
            construindo confiança e qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${stat.color} mb-6 shadow-lg`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              
              <div className="mb-4">
                <div className="text-4xl md:text-6xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-primary">
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