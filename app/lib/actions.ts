'use server';

import { AuthError } from 'next-auth';
import { signIn, signOut } from '@/auth';
import { loginSchema } from '@/app/types/schema';

const defaultValues = {
 email: '',
 password: '',
};

export async function login(prevState: any, formData: FormData) {
  try {
    const email = formData.get('email');
    const password = formData.get('password');

    const validatedFields = loginSchema.safeParse({
      email: email,
      password: password,
    });

    if (!validatedFields.success) {
      return {
        message: 'validation error',
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    await signIn('credentials', formData);

    return {
      message: 'success',
      errors: {},
    };

  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
        return {
          message: 'credentials error',
          errors: {
            ...defaultValues,
            credentials: 'E-mail ou senha incorretos',
          },
        };
        case 'CallbackRouteError': //VERIFICAR NOVAMENTE. FORCEI A BARRA AQUI!
          return {
            message: 'credentials error',
            errors: {
            ...defaultValues,
            credentials: 'E-mail ou senha incorretos',
          },
          }
        default:
        return {
          message: 'unknown error',
          errors: {
            ...defaultValues,
            unknown: 'Erro desconhecido',
          },
        };
      }
    }
    throw error;
  }
}

export async function logout() {
 await signOut();
}

