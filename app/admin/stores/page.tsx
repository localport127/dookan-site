// app/admin/stores/page.tsx
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { redirect } from "next/navigation";
import type { CSSProperties } from "react";

type StoreRow = {
  id: string;
  name: string;
  ownerName?: string | null; // schema-তে থাকলেও Prisma types sync না হলে safe
  phone?: string | null;
  email?: string | null;
  address?: string | null;
  city?: string | null;
  notes?: string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};

export default async function StoresPage() {
  const session = await getServerSession(authOptions);

  // ✅ protect admin
  if (!session || (session.user as any)?.role !== "ADMIN") {
    redirect("/login?callbackUrl=/admin/stores");
  }

  // ✅ NOTE: cast to keep TS happy even if prisma types are not fully regenerated yet
  const stores = (await prisma.store.findMany({
    orderBy: { createdAt: "desc" },
  })) as unknown as StoreRow[];

  return (
    <main style={ui.wrap}>
      <div style={ui.topRow}>
        <h1 style={ui.h1}>Stores</h1>
        <Link href="/admin/stores/new" style={ui.primaryBtn}>
          + Add Store
        </Link>
      </div>

      <div style={ui.card}>
        {stores.length === 0 ? (
          <div style={{ color: "#6b7280" }}>
            No stores yet. Click “Add Store”.
          </div>
        ) : (
          stores.map((s: StoreRow) => (
            <div key={s.id} style={ui.row}>
              <div style={ui.rowTitle}>{s.name}</div>

              <div style={ui.meta}>
                Owner: {s.ownerName ?? "-"} • City: {s.city ?? "-"} • Phone:{" "}
                {s.phone ?? "-"}
              </div>

              {(s.email || s.address || s.notes) && (
                <div style={ui.meta2}>
                  {s.email ? <span>Email: {s.email}</span> : null}
                  {s.address ? <span> • Address: {s.address}</span> : null}
                  {s.notes ? <span> • Notes: {s.notes}</span> : null}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </main>
  );
}

const ui: Record<string, CSSProperties> = {
  wrap: {
    maxWidth: 1000,
    margin: "0 auto",
    padding: 24,
    display: "grid",
    gap: 14,
    fontFamily: "system-ui",
  },

  topRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    flexWrap: "wrap",
  },

  h1: { margin: 0, fontSize: 28, fontWeight: 950 },

  primaryBtn: {
    background: "#10b981",
    color: "#ffffff",
    padding: "10px 14px",
    borderRadius: 14,
    fontWeight: 900,
    textDecoration: "none",
    border: "1px solid #059669",
    boxShadow: "0 10px 22px rgba(16,185,129,0.22)",
    display: "inline-block",
  },

  card: {
    border: "1px solid #e5e7eb",
    borderRadius: 18,
    padding: 16,
    background: "#ffffff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
    display: "grid",
    gap: 12,
  },

  row: {
    border: "1px solid #e5e7eb",
    borderRadius: 14,
    padding: 12,
    background: "#f9fafb",
  },

  rowTitle: {
    fontWeight: 950,
    color: "#065f46",
    fontSize: 16,
  },

  meta: {
    color: "#6b7280",
    fontSize: 13,
    marginTop: 6,
    lineHeight: 1.5,
  },

  meta2: {
    color: "#6b7280",
    fontSize: 12,
    marginTop: 8,
    lineHeight: 1.5,
  },
};