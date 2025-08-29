import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { linksSite } from "../data/linksData";
import logo from "../assets/logo.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      } ${isHeaderVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button
            className="flex items-center space-x-3 cursor-pointer duration-300 transform hover:scale-105"
            onClick={() => scrollToSection("#hero")}
          >
            <img
              src={logo}
              alt="Logomarca de Marcelo Silk Screen"
              className="object-contain h-6 sm:h-8"
            />
          </button>

          <nav className="hidden xl:flex items-center space-x-8">
            {linksSite.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`cursor-pointer font-medium transition-colors duration-300 hover:text-primary ${
                  isScrolled ? "text-dark" : "text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden xl:flex">
            <button
              onClick={() => scrollToSection("#contact")}
              className="bg-accent text-white px-6 py-2 rounded-full font-medium hover:bg-red-600 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Solicite um Orçamento
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`xl:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? "text-dark" : "text-white"
            }`}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {linksSite.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-dark hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#contact")}
              className="w-full bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-red-600 transition-colors duration-300 cursor-pointer"
            >
              Solicite um Orçamento
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
