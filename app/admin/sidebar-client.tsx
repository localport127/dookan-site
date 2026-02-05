"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const items = [
  { href: "/admin", label: "Dashboard", icon: "📊" },
  { href: "/admin/stores", label: "Stores", icon: "🏪" },
  { href: "/admin/invoices", label: "Invoices", icon: "🧾" },
];

export default function AdminSidebarClient() {
  const pathname = usePathname();

  return (
    <div style={{ display: "grid", gap: 10 }}>
      <div style={ui.sidebarTitle}>Admin Menu</div>

      <div style={{ display: "grid", gap: 8 }}>
        {items.map((it) => {
          const active =
            pathname === it.href || (it.href !== "/admin" && pathname.startsWith(it.href));

          return (
            <Link
              key={it.href}
              href={it.href}
              style={{
                ...ui.navItem,
                ...(active ? ui.navItemActive : null),
              }}
            >
              <span style={ui.navIcon}>{it.icon}</span>
              <span>{it.label}</span>
            </Link>
          );
        })}
      </div>

      <div style={ui.divider} />

      <Link href="/" style={ui.secondaryLink}>
        🌐 Website Home
      </Link>

      <button
        type="button"
        onClick={() => signOut({ callbackUrl: "/login" })}
        style={ui.logoutBtn}
      >
        🚪 Logout
      </button>
    </div>
  );
}

const ui: Record<string, React.CSSProperties> = {
  sidebarTitle: {
    fontWeight: 950,
    color: "#065f46",
    fontSize: 13,
    padding: "6px 8px",
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },

  navItem: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    textDecoration: "none",
    color: "#111827",
    fontWeight: 900,
    border: "1px solid #e5e7eb",
    borderRadius: 14,
    padding: "10px 12px",
    background: "#ffffff",
  },

  navItemActive: {
    border: "1px solid rgba(16,185,129,0.35)",
    background: "rgba(16,185,129,0.10)",
    boxShadow: "0 8px 18px rgba(16,185,129,0.12)",
    color: "#065f46",
  },

  navIcon: { width: 24, textAlign: "center" },

  divider: {
    height: 1,
    background: "#e5e7eb",
    margin: "6px 0",
  },

  secondaryLink: {
    textDecoration: "none",
    color: "#065f46",
    fontWeight: 900,
    border: "1px solid rgba(16,185,129,0.25)",
    background: "rgba(16,185,129,0.08)",
    padding: "10px 12px",
    borderRadius: 14,
    textAlign: "center",
  },

  logoutBtn: {
    marginTop: 2,
    background: "#111827",
    color: "#ffffff",
    padding: "12px 12px",
    borderRadius: 14,
    fontWeight: 950,
    border: "1px solid #0b0b0b",
    cursor: "pointer",
    boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
  },
};