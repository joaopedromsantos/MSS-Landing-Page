// Arquivo: /api/send-email.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";

interface FormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== "POST") {
    return response
      .status(405)
      .json({ message: "Apenas o método POST é permitido" });
  }

  try {
    const formData: FormData = request.body;
    const apiKey = process.env.VITE_API_KEY as string;
    const apiUrl = process.env.VITE_API_URL as string;

    const apiResponse = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
      body: JSON.stringify({
        subject: `Contato de ${formData.name}`,
        body: `
            Nome: ${formData.name}\n
            Email: ${formData.email}\n
            Telefone: ${formData.phone}\n
            Empresa: ${formData.company || "Não informado"}\n
            ---
            Mensagem:\n
            ${formData.message}
        `,
      }),
    });

    if (!apiResponse.ok) {
      throw new Error(
        `A API externa respondeu com o status: ${apiResponse.status}`
      );
    }

    return response.status(200).json({ message: "Email enviado com sucesso!" });
  } catch (error: unknown) {
    console.error(error);
    const message =
      error instanceof Error ? error.message : "Ocorreu um erro desconhecido.";
    return response.status(500).json({ message });
  }
}
