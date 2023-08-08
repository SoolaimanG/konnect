import NextAuth, { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "@/Functions";
import bcrypt from "bcrypt";
import {
  findUserByEmail,
  findUserByUsernameAndPassword,
} from "@/Functions/func";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: "",
      clientSecret: "",
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credential) {
        await connectDB();
        const user = await findUserByUsernameAndPassword(
          credential?.username as string
        );

        console.log(user);

        if (!user) {
          throw new Error("Incorrect username");
        }

        const comparingPassword = await bcrypt.compare(
          credential?.password as string,
          user?.password
        );

        if (comparingPassword) {
          return user;
        } else {
          throw new Error("Incorrect password");
        }
      },
    }),
  ],
  callbacks: {
    async session({ session }) {
      const user = await findUserByEmail(session?.user?.email as string);
      session.user = user;
      return session;
    },
    async jwt({ token, user }) {
      user && (token.user = user);
      return token;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 5,
  },
  pages: {
    signIn: "/auth/login",
    verifyRequest: "/auth/verify-email",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
