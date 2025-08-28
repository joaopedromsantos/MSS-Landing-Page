import { clientsData } from "../data/clientsData";

export function Clients() {
  const clients = clientsData;

  return (
    <section id="clients" className="py-20 bg-white overflow-hidden mx-auto">
      <div className="text-center mb-16 px-8 sm:px-16 md:px-20 lg:px-24">
        <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6">
          Nossos Parceiros de Sucesso
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-lg text-secondary max-w-3xl mx-auto">
          Conheça algumas das dezenas de empresas e fazendas que confiam em nosso trabalho
        </p>
      </div>

      <div className="space-y-8">
        <div className="flex overflow-hidden">
          <div className="flex animate-scroll-left-fast space-x-24 sm:space-x-32">
            {[...clients, ...clients].map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 w-32 h-32 bg-muted rounded-lg flex items-center justify-center"
              >
                {logo.logo && logo.logo.trim().startsWith("<svg") ? (
                  <div
                    className="object-contain opacity-60 hover:opacity-100 transition-opacity w-full h-full"
                    dangerouslySetInnerHTML={{ __html: logo.logo }}
                  />
                ) : (
                  <img
                    src={logo.logo || "/placeholder.svg"}
                    className="object-contain opacity-60 hover:opacity-100 transition-opacity h-24"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
