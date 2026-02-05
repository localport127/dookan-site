import type { ReactNode } from "react";
import Link from "next/link";
import AdminSidebarClient from "./sidebar-client";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <main style={styles.page}>
      {/* Top bar */}
      <header style={styles.headerWrap}>
        <div style={styles.header}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={styles.logoBox}>
              <img
                src="/logo.png"
                alt="DOOKAN INC"
                style={{ width: 40, height: 40, objectFit: "contain" }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <div style={styles.brandName}>DOOKAN INC</div>
              <div style={styles.brandTagline}>Admin Panel</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Link href="/" style={styles.topLink}>Go to Website</Link>
          </div>
        </div>
      </header>

      {/* Body */}
      <div style={styles.shell}>
        {/* Sidebar (client: for Logout) */}
        <aside style={styles.sidebar}>
          <AdminSidebarClient />
        </aside>

        {/* Content */}
        <section style={styles.content}>
          {children}
        </section>
      </div>

      <footer style={styles.footer}>
        © {new Date().getFullYear()} DOOKAN INC. All rights reserved.
      </footer>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    fontFamily: "system-ui",
    minHeight: "100vh",
    color: "#0b0b0b",
    backgroundColor: "#ffffff",
    backgroundImage:
      "radial-gradient(900px 420px at 20% 0%, rgba(16,185,129,0.10), transparent 60%), radial-gradient(900px 420px at 80% 0%, rgba(16,185,129,0.08), transparent 60%)",
    backgroundRepeat: "no-repeat",
  },

  headerWrap: {
    borderBottom: "1px solid #e5e7eb",
    position: "sticky",
    top: 0,
    backdropFilter: "blur(10px)",
    background: "rgba(255,255,255,0.85)",
    zIndex: 20,
  },
  header: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "16px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 18,
  },

  logoBox: {
    width: 52,
    height: 52,
    borderRadius: 14,
    background: "#ffffff",
    display: "grid",
    placeItems: "center",
    border: "1px solid rgba(16,185,129,0.25)",
    boxShadow: "0 10px 24px rgba(0,0,0,0.10)",
    padding: 6,
  },

  brandName: {
    fontSize: 22,
    fontWeight: 950,
    letterSpacing: 1.2,
    color: "#065f46",
    textTransform: "uppercase",
  },
  brandTagline: {
    fontSize: 12,
    marginTop: 4,
    letterSpacing: 0.6,
    textTransform: "uppercase",
    color: "#6b7280",
    fontWeight: 700,
  },

  topLink: {
    color: "#065f46",
    textDecoration: "none",
    fontWeight: 900,
    border: "1px solid rgba(16,185,129,0.25)",
    background: "rgba(16,185,129,0.08)",
    padding: "10px 12px",
    borderRadius: 14,
  },

  shell: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "18px 20px 30px",
    display: "grid",
    gridTemplateColumns: "280px 1fr",
    gap: 14,
    alignItems: "start",
  },

  sidebar: {
    position: "sticky",
    top: 92,
    border: "1px solid #e5e7eb",
    borderRadius: 18,
    background: "#ffffff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
    padding: 12,
  },

  content: {
    border: "1px solid #e5e7eb",
    borderRadius: 18,
    background: "#ffffff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
    padding: 16,
    minHeight: 520,
  },

  footer: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "16px 20px 30px",
    color: "#9ca3af",
    fontSize: 12,
    textAlign: "center",
  },
};