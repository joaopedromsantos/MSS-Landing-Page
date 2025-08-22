import { MapPin } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { contactData } from "../../data/contactData";

export function Contact() {

  

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-8 sm:px-16 md:px-20 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Pronto para dar vida às suas sacas de café? Entre em contato conosco
            e vamos criar algo incrível juntos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              {contactData.map((contact, index) => (
                <a
                  key={index}
                  href={contact.action}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-r ${contact.color} flex items-center justify-center shadow-md`}
                    >
                      <contact.icon className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-dark group-hover:text-primary transition-colors duration-300">
                        {contact.title}
                      </h4>
                      <p className="text-secondary text-sm md:text-md group-hover:text-dark transition-colors duration-300 break-all">
                        {contact.info}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <h4 className="text-xl font-bold text-dark">
                    Nossa Localização
                  </h4>
                </div>
              </div>

              <div className="w-full h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d928.906930421814!2d-46.15860300325417!3d-21.365174597274514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b5e3390aea179b%3A0x8aeb640d99fc3fe8!2sMARCELO%20SILK%20SCREEN%20%2F%20SACARIAS%20DE%20CAF%C3%89S!5e0!3m2!1spt-BR!2sbr!4v1755751110520!5m2!1spt-BR!2sbr"
                  width="600"
                  height="450"
                  className="w-full h-full border-0"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
