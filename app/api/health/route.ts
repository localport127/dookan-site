import { prisma } from "@/lib/prisma";

export const runtime = "nodejs"; // IMPORTANT for pg

export async function GET() {
  const now = await prisma.$queryRaw`SELECT NOW()`;
  return Response.json({ ok: true, now });
}