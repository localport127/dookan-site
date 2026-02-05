// app/portal/invoices/[id]/page.tsx

type Props = {
  params: { id: string };
};

export default function PortalInvoiceDetailsPage({ params }: Props) {
  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 24, fontWeight: 900 }}>Invoice Details</h1>

      <p style={{ marginTop: 8, color: "#6b7280" }}>
        Invoice ID: <b>{params.id}</b>
      </p>

      <div style={{ marginTop: 16, padding: 16, border: "1px solid #e5e7eb", borderRadius: 12 }}>
        <p style={{ margin: 0, color: "#374151" }}>
          Page is working. Next step: fetch invoice data from DB and show items.
        </p>
      </div>
    </main>
  );
}