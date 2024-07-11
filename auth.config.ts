import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
 pages: {
  error: '/login',
  signIn: '/login',
  signOut: '/login',
 },
 callbacks: {
    // INCLUIR ID NA SESSION DO NEXT AUTH. POR PADRÃO É SÓ EMAIL E PASS
    async jwt({ token, user }) {
        if (user) {
          token.id = user?.id?.toString(); // Garante que id é string
        }
        return token;
      },
      async session({ session, token }) {
        if (token && typeof token.id === 'string') {
          session.user.id = token.id;
        }
        return session;
      },
    
    // SEM ISSO, O REDIRECIONAMENTO DE PAGINAS FICA CERTO,MAS A URL NO NAVEGADOR FICA ERRADA
    async redirect({ url, baseUrl }) {
        if (url == baseUrl+"/login") {
            return baseUrl + '/teams';
        }

        return baseUrl+"/login"
    },
    authorized({ auth }) {
    const isAuthenticated = !!auth?.user;

    return isAuthenticated;
    },
 },
 providers: [],
} satisfies NextAuthConfig;
