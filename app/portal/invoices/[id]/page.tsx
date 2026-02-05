// app/portal/invoices/[id]/page.tsx
export default function InvoiceDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 28, fontWeight: 900, marginBottom: 10 }}>
        Invoice Details
      </h1>

      <div
        style={{
          padding: 14,
          borderRadius: 14,
          border: "1px solid #e5e7eb",
          background: "#fff",
        }}
      >
        <div style={{ fontWeight: 800 }}>Invoice ID</div>
        <div style={{ marginTop: 6, color: "#374151" }}>{params.id}</div>

        <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a
            href={`/api/invoices/${params.id}/pdf`}
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
            Download PDF
          </a>

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
        </div>
      </div>
    </main>
  );
}