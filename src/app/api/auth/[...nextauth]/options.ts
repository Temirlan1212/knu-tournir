import CredentialsProvider from "next-auth/providers/credentials";
import { DefaultSession, NextAuthOptions } from "next-auth";

declare module "next-auth" {
  interface User {
    email?: string | null;
    reason?: string | null;
  }
}

declare module "next-auth" {
  interface Session {
    user?: {
      email?: string | null;
      reason?: string | null;
    } & DefaultSession["user"];
  }
}

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Username",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        const { password, email } = credentials as any;

        try {
          const res = await fetch("https://restful-booker.herokuapp.com/auth", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            cache: "no-cache",
          });
          const user = await res.json();
          return user;
        } catch (error: any) {
          throw new Error(error);
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.email = "tima@gmail.com";
        token.reason = user.reason;
      }

      return Promise.resolve(token);
    },
    async session({ session, token, user }) {
      session.user = token;
      return Promise.resolve(session);
    },
  },
  session: {
    maxAge: 60 * 60 * 24,
  },
  pages: {
    signIn: "/login",
  },
};
