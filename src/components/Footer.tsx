import { MessageCircle, Mail, Instagram, MapPin } from "lucide-react";
import logo from "../assets/logo.png";
import { linksSite } from "../data/linksData";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const footerServices = [
    "Serigrafia em Sacarias de Café",
    "Design e Vetorização",
    "Armazenamento de Sacarias",
    "Logística e Entrega",
    "Consultoria Personalizada",
    "Venda de Sacarias de café",
  ];

  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-8 sm:px-16 md:px-20 lg:px-24">
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src={logo}
                alt="logomarca de marcelo silk screen"
                className="object-contain h-12"
              />
            </div>

            <div className="flex space-x-4">
              <a
                href="https://wa.me/5535999322602"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="mailto:marcelo@marcelosilkscreen.com.br"
                className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/marcelosilk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-primary">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {linksSite.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-primary">
              Nossos Serviços
            </h4>
            <ul className="space-y-3">
              {footerServices.map((service, index) => (
                <li key={index} className="text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-primary">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MessageCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">WhatsApp</p>
                  <a
                    href="https://wa.me/5535999322602"
                    className="text-white hover:text-primary transition-colors duration-300"
                  >
                    (35) 99932-2602
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Email</p>
                  <a
                    href="mailto:marcelo@marcelosilkscreen.com.br"
                    className="text-white hover:text-primary transition-colors duration-300"
                  >
                    marcelo@marcelosilkscreen.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Localização</p>
                  <p className="text-white">Areado - Minas Gerais</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} Marcelo Silk Screen. Todos os direitos reservados.
            </p>
            <div className="text-center">
              <p className="text-sm text-gray-500 italic text-center ">
                "Transformando sacarias de café em obras de arte desde 2006"
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
