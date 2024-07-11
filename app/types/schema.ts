import { z } from 'zod';

export const loginSchema = z.object({
 email: z
  .string()
  .trim()
  .min(1, { message: 'Digite o seu e-mail!' })
  .email({ message: 'E-mail inválido' }),
 password: z
  .string()
  .trim()
  .min(1, { message: 'Digite sua senha' })
  .min(6, { message: 'A senha deve ter no mínimo 6 caracteres' }),
});