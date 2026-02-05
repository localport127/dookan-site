import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
        if (
          credentials?.email === "admin@dookan.ca" &&
          credentials?.password === "admin123"
        ) {
          return {
            id: "1",
            name: "Admin",
            email: "admin@dookan.ca",
          };
        }
        return null;
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },
};
// lib/auth.ts
import { SignJWT, jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.AUTH_SECRET || "");

export type AuthTokenPayload = {
  sub: string; // userId
  email: string;
  role: "ADMIN" | "STORE";
  storeId?: string | null;
};

export async function signAuthToken(payload: AuthTokenPayload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);
}

export async function verifyAuthToken(token: string) {
  const { payload } = await jwtVerify(token, secret);
  return payload as unknown as AuthTokenPayload & { exp: number; iat: number };
}