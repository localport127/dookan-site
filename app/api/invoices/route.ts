// app/api/invoices/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const invoices = await prisma.invoice.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
    include: { store: true },
  });
  return NextResponse.json({ ok: true, invoices });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  // minimum validation
  if (!body?.storeId || !body?.issueDate) {
    return NextResponse.json(
      { ok: false, error: "storeId and issueDate are required" },
      { status: 400 }
    );
  }

  // NOTE: amounts should be stored in cents (Int) – you already do that.
  const invoice = await prisma.invoice.create({
    data: {
      storeId: body.storeId,
      invoiceNo: body.invoiceNo ?? `INV-${Date.now()}`,
      status: body.status ?? "DRAFT",
      issueDate: new Date(body.issueDate),
      dueDate: body.dueDate ? new Date(body.dueDate) : null,
      currency: body.currency ?? "CAD",
      subtotal: body.subtotal ?? 0,
      taxRate: body.taxRate ?? 13,
      taxAmount: body.taxAmount ?? 0,
      total: body.total ?? 0,
      notes: body.notes ?? null,
      createdById: body.createdById ?? "UNKNOWN", // later: take from session
      invoiceItems: body.items
        ? {
            create: body.items.map((it: any) => ({
              name: String(it.name ?? ""),
              qty: Number(it.qty ?? 1),
              unitPrice: Number(it.unitPrice ?? 0),
              lineTotal: Number(it.lineTotal ?? 0),
            })),
          }
        : undefined,
    },
    include: { invoiceItems: true, store: true },
  });

  return NextResponse.json({ ok: true, invoice });
}