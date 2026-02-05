import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any).role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const stores = await prisma.store.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ stores });
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any).role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();

  // ✅ IMPORTANT: ownerName spelling exactly matches schema
  const store = await prisma.store.create({
    data: {
      name: body.name,
      ownerName: body.ownerName || null,
      phone: body.phone || null,
      email: body.email || null,
      address: body.address || null,
      city: body.city || null,
      notes: body.notes || null,
    },
  });

  return NextResponse.json({ store }, { status: 201 });
}