

import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JWT } from "next-auth/jwt";

interface UserWithRole {
  id: string;
  email: string;
  role: string;
  access_token: string;
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Replace with actual authentication logic
        const user: UserWithRole = {
          id: "123",
          email: credentials?.email || "",
          role: "user",
          access_token: "your_access_token_here",
        };
        return user ? user : null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          id: (user as UserWithRole).id,
          role: (user as UserWithRole).role,
          access_token: (user as UserWithRole).access_token,
        };
      }
      return token;
    },
    // async session({ session, token }) {
    //   session.user = {
    //     ...session.user,
    //     id: token.id,
    //     role: token.role,
    //     access_token: token.access_token,
    //   };
    //   return session;
    // },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
