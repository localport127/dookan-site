// lib/auth-options.ts
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const email = credentials?.email?.toLowerCase().trim();
        const password = credentials?.password;

        if (!email || !password) return null;

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user || !user.password) return null;

        const ok = await bcrypt.compare(password, user.password);
        if (!ok) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.name ?? "User",
          role: user.role,
          storeId: user.storeId ?? null,
        } as any;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        (token as any).role = (user as any).role;
        (token as any).storeId = (user as any).storeId ?? null;
        (token as any).uid = (user as any).id;
      }
      return token;
    },

    async session({ session, token }) {
      (session.user as any).role = (token as any).role;
      (session.user as any).storeId = (token as any).storeId ?? null;
      (session.user as any).id = (token as any).uid ?? null;
      return session;
    },

    // ✅ ADD THIS
    async redirect({ url, baseUrl }) {
  if (url === baseUrl || url === `${baseUrl}/`) {
    return `${baseUrl}/admin`;
  }
  if (url.startsWith(baseUrl)) return url;
  return baseUrl;
}
  },

  pages: { signIn: "/login" },
};
