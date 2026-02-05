// app/portal/invoices/new/page.tsx
"use client";

import { useMemo, useState } from "react";

export default function NewInvoicePage() {
  const [storeId, setStoreId] = useState("");
  const [issueDate, setIssueDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [taxRate, setTaxRate] = useState(13);

  const canCreate = useMemo(() => storeId.trim().length > 0, [storeId]);

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: 24, fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 28, fontWeight: 900, margin: 0 }}>Create New Invoice</h1>
      <p style={{ color: "#6b7280", marginTop: 8 }}>
        This is a placeholder UI. Next step: connect to API and save invoice to database.
      </p>

      <div
        style={{
          marginTop: 18,
          border: "1px solid #e5e7eb",
          borderRadius: 16,
          padding: 16,
          background: "#fff",
        }}
      >
        <label style={{ display: "grid", gap: 6, fontWeight: 800 }}>
          Store ID
          <input
            value={storeId}
            onChange={(e) => setStoreId(e.target.value)}
            placeholder="Paste storeId here"
            style={{
              width: "100%",
              padding: "12px 12px",
              borderRadius: 12,
              border: "1px solid #e5e7eb",
              outline: "none",
            }}
          />
        </label>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 12 }}>
          <label style={{ display: "grid", gap: 6, fontWeight: 800 }}>
            Issue Date
            <input
              type="date"
              value={issueDate}
              onChange={(e) => setIssueDate(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 12px",
                borderRadius: 12,
                border: "1px solid #e5e7eb",
                outline: "none",
              }}
            />
          </label>

          <label style={{ display: "grid", gap: 6, fontWeight: 800 }}>
            Tax Rate (%)
            <input
              type="number"
              value={taxRate}
              onChange={(e) => setTaxRate(Number(e.target.value || 0))}
              style={{
                width: "100%",
                padding: "12px 12px",
                borderRadius: 12,
                border: "1px solid #e5e7eb",
                outline: "none",
              }}
            />
          </label>
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
          <button
            type="button"
            disabled={!canCreate}
            onClick={() => alert("Next step: POST /api/invoices")}
            style={{
              padding: "10px 14px",
              borderRadius: 12,
              border: "1px solid #059669",
              background: canCreate ? "#10b981" : "#d1d5db",
              color: "#fff",
              fontWeight: 900,
              cursor: canCreate ? "pointer" : "not-allowed",
            }}
          >
            Create Invoice
          </button>

          <a
            href="/portal"
            style={{
              padding: "10px 14px",
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