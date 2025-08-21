import { ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";

const Hero = () => {
  const scrollToNext = () => {
    document
      .querySelector("#value-proposition")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center relative overflow-hidden bg-black-primary text-center"
    >
      <div className="relative z-10 container mx-auto px-8 flex flex-col items-center gap-6">
        <div className="animate-fade-in-up animate-[fade-in-up_1s_ease-out]">
          <div className="inline-flex w-48 md:w-60 lg:w-80 xl:w-96 items-center justify-center">
            <img src={logo} alt="Logo" />
          </div>
        </div>

        <div
          className="max-w-4xl mx-auto animate-fade-in-up mb-6"
          style={{ animationDelay: "0.2s" }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transforme Suas
            <span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-white-bg via-primary to-yellow bg-[size:200%_auto] animate-[aurora_3s_linear_infinite_alternate]
            "
            >
              Sacas de Café
            </span>
            em Obras de Arte
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            A primeira impressão de um café especial começa na sacaria. Elevamos
            o padrão da sua marca com uma serigrafia de alta qualidade.
          </p>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-accent cursor-pointer text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span>Solicite um Orçamento</span>
          </button>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-fade-in-up"
        style={{ animationDelay: "0.6s" }}
      >
        <button
          onClick={scrollToNext}
          className="text-gray-400 hover:text-primary transition-colors duration-300 flex flex-col items-center space-y-2 group"
          aria-label="Rolar para a próxima seção"
        >
          <ChevronDown className="h-6 w-6 animate-bounce text-gray-400 group-hover:text-primary cursor-pointer" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
