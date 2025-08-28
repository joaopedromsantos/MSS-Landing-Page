import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "../../lib/schema";
import { Send } from "lucide-react";
import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export function ContactForm() {
  const [formStatus, setFormStatus] = useState({ message: "", type: "" });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setFormStatus({ message: "...", type: "info" });

    try {
      const response = await fetch(`${API_URL}/send-email`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_API_KEY,
        },
        body: JSON.stringify({
          subject: `Contato de ${data.name} - ${
            data.company || "Pessoa Física"
          }`,
          body: `
            Nome: ${data.name}\n
            Email: ${data.email}\n
            Telefone: ${data.phone}\n
            Empresa: ${data.company || "Não informado"}\n
            ---
            Mensagem:\n
            ${data.message}
          `,
        }),
      });

      if (!response.ok) {
        throw new Error("Falha no envio do e-mail.");
      }

      setFormStatus({
        message: "Mensagem enviada com sucesso! Obrigado.",
        type: "success",
      });
    } catch (error) {
      console.error(error);
      setFormStatus({
        message: "Ocorreu um erro ao enviar. Tente novamente mais tarde.",
        type: "error",
      });
    }
  };

return (
  <div className="bg-white rounded-2xl shadow-lg p-8">
    <h3 className="text-2xl font-bold text-dark mb-6">
      Solicite seu Orçamento
    </h3>

    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">Nome *</label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
            placeholder="Seu nome completo"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">Telefone *</label>
          <input
            type="tel"
            id="phone"
            {...register("phone")}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
            placeholder="(35) 99999-9999"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">Email *</label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
            placeholder="seu@email.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-dark mb-2">Empresa/Fazenda</label>
          <input
            type="text"
            id="company"
            {...register("company")}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
            placeholder="Nome da empresa"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">Mensagem *</label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
          placeholder="Descreva seu projeto..."
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent text-white px-6 py-4 rounded-lg font-semibold hover:bg-red-600 transition-all duration-300 transform hover:scale-[1.02] shadow-lg flex items-center justify-center space-x-2 disabled:bg-gray-400"
      >
        <Send className="h-5 w-5" />
        <span>{isSubmitting ? "Enviando..." : "Enviar Solicitação"}</span>
      </button>

      {formStatus.message && (
        <p className={`text-center text-sm font-medium ${
          formStatus.type === "success" ? "text-green-600" :
          formStatus.type === "error" ? "text-red-600" : "text-gray-600"
        }`}>
          {formStatus.message}
        </p>
      )}
    </form>
  </div>
);
}
