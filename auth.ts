import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { checkPass } from './app/utils/utils';

async function getUser(email: string, password: string): Promise<any> {

  const UserAPIURL = `${process.env.API_URL}/users/email`;
  const response = await fetch(UserAPIURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });
  const user = await response.json()

  

  const checkedPass = checkPass(password, user.password)

  if (!checkedPass) return null;

  return user
}

export const { auth, signIn, signOut, handlers: { GET, POST },} = NextAuth({
  ...authConfig,
  providers: [    
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        const user = await getUser(
          credentials.email as string,
          credentials.password as string
        );

        return user ?? null;
      },
    }),
  ],
});

