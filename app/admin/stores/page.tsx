import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { redirect } from "next/navigation";

export default async function StoresPage() {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any).role !== "ADMIN") redirect("/login");

  const stores = await prisma.store.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div style={{ display: "grid", gap: 14 }}>
      <div style={ui.topRow}>
        <h1 style={ui.h1}>Stores</h1>
        <Link href="/admin/stores/new" style={ui.primaryBtn}>+ Add Store</Link>
      </div>

      <div style={ui.card}>
        {stores.map((s) => (
          <div key={s.id} style={ui.row}>
            <div style={{ fontWeight: 950, color: "#065f46" }}>{s.name}</div>
            <div style={ui.meta}>
              Owner: {s.ownerName || "-"} • City: {s.city || "-"} • Phone: {s.phone || "-"}
            </div>
          </div>
        ))}

        {stores.length === 0 && (
          <div style={{ color: "#6b7280" }}>No stores yet. Click “Add Store”.</div>
        )}
      </div>
    </div>
  );
}

const ui: Record<string, React.CSSProperties> = {
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

  meta: { color: "#6b7280", fontSize: 13, marginTop: 6, lineHeight: 1.5 },
};