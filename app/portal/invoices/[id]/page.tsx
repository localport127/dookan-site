// app/portal/invoices/[id]/page.tsx

export default function Page({ params }: { params: { id: string } }) {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1 style={{ margin: 0 }}>Invoice Details</h1>
      <p style={{ marginTop: 12 }}>
        Invoice ID: <b>{params.id}</b>
      </p>
    </main>
  );
}