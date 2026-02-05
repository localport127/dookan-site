// app/api/invoices/[id]/pdf/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  return NextResponse.json({ ok: true, invoiceId: id, pdf: false });
}