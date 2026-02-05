"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("admin@dookan.ca");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);

  const searchParams = useSearchParams();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);

    const callbackUrl = searchParams.get("callbackUrl") || "/admin"; // ✅ force admin

    const res = await signIn("credentials", {
      email,
      password,
      redirect: true,        // ✅ Let NextAuth redirect
      callbackUrl,           // ✅ Go to /admin (or callbackUrl from middleware)
    });

    // normally won't reach here if redirect:true
    if (res?.error) setErr("Invalid email or password");
  }

  return (
    <main style={{ maxWidth: 420, margin: "60px auto", padding: 20 }}>
      <h1 style={{ fontSize: 28, fontWeight: 900 }}>Admin Login</h1>

      <form onSubmit={onSubmit} style={{ display: "grid", gap: 10, marginTop: 16 }}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          style={{ padding: 12, borderRadius: 12, border: "1px solid #e5e7eb" }}
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          style={{ padding: 12, borderRadius: 12, border: "1px solid #e5e7eb" }}
        />

        {err && <div style={{ color: "crimson", fontWeight: 700 }}>{err}</div>}

        <button
          type="submit"
          style={{
            padding: 12,
            borderRadius: 12,
            border: "1px solid #059669",
            background: "#10b981",
            color: "white",
            fontWeight: 900,
            cursor: "pointer",
          }}
        >
          Sign in
        </button>
      </form>
    </main>
  );
}