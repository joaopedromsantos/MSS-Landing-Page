export function History() {
  return (
    <section id="history" className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-8 sm:px-16 md:px-20 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Nossa História
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="text-center lg:text-left">
            
            <div className="space-y-6 text-lg text-gray-500 max-w-2xl mx-auto lg:mx-0">
              <p>
                Nossa história começa com a paixão de Marcelo Sebastião dos Santos,
                que, natural de Areado-MG, dedica-se à arte da serigrafia desde os 17
                anos. Em 2006, o que era um pequeno negócio familiar em um cômodo de
                6m² transformou-se oficialmente na Marcelo Silk Screen.
              </p>
              <p>
                Hoje, com milhões de sacarias estampadas, transformamos cada saca em uma
                poderosa ferramenta de marketing. Não apenas estampamos; agregamos valor,
                contamos a história do seu produto e garantimos que a primeira
                impressão do seu café seja tão excepcional quanto o seu sabor.
              </p>
            </div>
          </div>

          <div className="relative group w-full max-w-2xl mx-auto lg:max-w-none">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-amber-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            <div className="relative aspect-video rounded-xl shadow-2xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/JZqHtSUduGg"
                title="Marcação de sacarias de cafés!!"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default History;