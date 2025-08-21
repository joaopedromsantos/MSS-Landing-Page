import { clientsData } from "../data/clientsData";

export function Clients() {
  const clients = clientsData;

  return (
    <section className="py-20 bg-card overflow-hidden mx-auto">
      <div className="text-center mb-16 px-8 sm:px-16 md:px-20 lg:px-24">
        <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6">
          Nossos Clientes
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-lg text-secondary max-w-3xl mx-auto">
          Mais de 60 empresas e fazendas confiam em nosso trabalho
        </p>
      </div>

      <div className="space-y-8">
        <div className="flex overflow-hidden">
          <div className="flex animate-scroll-left space-x-32">
            {[...clients, ...clients].map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 w-32 h-32 bg-muted rounded-lg flex items-center justify-center"
              >
                <img
                  src={logo.logo || "/placeholder.svg"}
                  alt={logo.name}
                  className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
