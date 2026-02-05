"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewStorePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    ownerName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    notes: "",
  });

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/admin/stores", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      alert(data.error || "Failed to create store");
      return;
    }

    router.push("/admin/stores");
    router.refresh();
  }

  return (
    <div style={ui.wrap}>
      <div style={ui.card}>
        <h1 style={ui.h1}>Add Store</h1>

        <form onSubmit={onSubmit} style={{ display: "grid", gap: 10 }}>
          <input name="name" value={form.name} onChange={onChange} placeholder="Store Name *" required style={ui.input} />
          <input name="ownerName" value={form.ownerName} onChange={onChange} placeholder="Owner Name" style={ui.input} />
          <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone" style={ui.input} />
          <input name="email" value={form.email} onChange={onChange} placeholder="Email" style={ui.input} />
          <input name="address" value={form.address} onChange={onChange} placeholder="Address" style={ui.input} />
          <input name="city" value={form.city} onChange={onChange} placeholder="City" style={ui.input} />
          <textarea name="notes" value={form.notes} onChange={onChange} placeholder="Notes" rows={4} style={{ ...ui.input, resize: "vertical" }} />

          <button type="submit" disabled={loading} style={ui.primaryBtn}>
            {loading ? "Saving..." : "Create Store"}
          </button>
        </form>
      </div>
    </div>
  );
}

const ui: Record<string, React.CSSProperties> = {
  wrap: { maxWidth: 760 },
  h1: { margin: "0 0 12px", fontSize: 26, fontWeight: 950, color: "#065f46" },

  card: {
    border: "1px solid #e5e7eb",
    borderRadius: 18,
    padding: 16,
    background: "#ffffff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
  },

  input: {
    width: "100%",
    padding: "12px 12px",
    borderRadius: 12,
    border: "1px solid #e5e7eb",
    background: "#ffffff",
    color: "#111827",
    outline: "none",
  },

  primaryBtn: {
    marginTop: 6,
    background: "#10b981",
    color: "#ffffff",
    padding: "12px 14px",
    borderRadius: 14,
    fontWeight: 950,
    border: "1px solid #059669",
    boxShadow: "0 10px 22px rgba(16,185,129,0.22)",
    cursor: "pointer",
  },
};