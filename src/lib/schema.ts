import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(3, 'O nome precisa ter no mínimo 3 caracteres.'),
  email: z.string().email('Por favor, insira um e-mail válido.'),
  phone: z.string().min(10, 'O telefone precisa ter no mínimo 10 dígitos.'),
  company: z.string().optional(),
  message: z.string().min(10, 'A mensagem precisa ter no mínimo 10 caracteres.'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;