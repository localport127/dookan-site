// app/portal/invoices/new/page.tsx

export default function NewInvoicePage() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: 24, fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 28, fontWeight: 900, margin: 0 }}>Create New Invoice</h1>
      <p style={{ marginTop: 10, color: "#6b7280", lineHeight: 1.6 }}>
        This page is ready. Next step: connect it with your invoice create API.
      </p>

      <div
        style={{
          marginTop: 16,
          padding: 14,
          borderRadius: 14,
          border: "1px solid #e5e7eb",
          background: "#fff",
        }}
      >
        <div style={{ fontWeight: 900, color: "#065f46" }}>Quick Actions</div>

        <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a
            href="/portal"
            style={{
              padding: "10px 12px",
              borderRadius: 12,
              border: "1px solid #e5e7eb",
              background: "#fff",
              color: "#111827",
              fontWeight: 900,
              textDecoration: "none",
            }}
          >
            Back to Portal
          </a>

          <a
            href="/admin/invoices"
            style={{
              padding: "10px 12px",
              borderRadius: 12,
              border: "1px solid #10b981",
              background: "#10b981",
              color: "#fff",
              fontWeight: 900,
              textDecoration: "none",
            }}
          >
            Admin Invoices
          </a>
        </div>
      </div>
    </main>
  );
}