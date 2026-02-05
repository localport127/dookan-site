"use client";
import { useEffect, useMemo, useRef, useState } from "react";

const IconWhatsApp = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
    <path
      fill="#25D366"
      d="M16 3C9.1 3 3.5 8.6 3.5 15.5c0 2.6.8 5.1 2.2 7.2L4 29l6.6-1.7c2 .9 3.9 1.3 5.4 1.3 6.9 0 12.5-5.6 12.5-12.5S22.9 3 16 3z"
    />
    <path
      fill="#fff"
      d="M23.4 19.6c-.1-.1-1.9-.9-2.2-1s-.5-.1-.8.2-.9 1-1.1 1.2-.4.2-.7.1c-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2.1-.4 0-.6s-.8-1.9-1.1-2.6c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4s-1.2 1.1-1.2 2.7 1.2 3.2 1.3 3.4 2.4 3.8 5.9 5.2c.8.3 1.4.5 1.9.6.8.2 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.3.2-1.4z"
    />
  </svg>
);
import { supabase } from "@/lib/supabase";

// inside component
async function testSupabase() {
  const { data, error } = await supabase.from("invoices").select("*").limit(1);
  console.log("data:", data, "error:", error);
}

const IconMessenger = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
    <path
      fill="#1877F2"
      d="M16 3C9 3 3.5 8.2 3.5 15.2c0 4 1.8 7.4 4.8 9.7v4.1l3.9-2.2c1.2.3 2.5.5 3.8.5 7 0 12.5-5.2 12.5-12.1S23 3 16 3z"
    />
    <path
      fill="#fff"
      d="M10.2 19.7l4.9-7.8c.4-.6 1.2-.8 1.9-.4l3.9 2.9 4.3-2.9-4.9 7.8c-.4.6-1.2.8-1.9.4l-3.9-2.9-4.3 2.9z"
    />
  </svg>
);

const IconFacebook = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
    <path
      fill="#1877F2"
      d="M16 3C9.4 3 4 8.4 4 15s5.4 12 12 12c.7 0 1.4-.1 2.1-.2v-8.4h-2.8V15h2.8v-2.6c0-2.8 1.7-4.4 4.2-4.4 1.2 0 2.5.2 2.5.2v2.7h-1.4c-1.4 0-1.8.9-1.8 1.8V15h3.1l-.5 3.4h-2.6v7.7C25.7 24.2 28 19.9 28 15c0-6.6-5.4-12-12-12z"
    />
    <path
      fill="#fff"
      d="M21.6 26.1v-7.7h2.6l.5-3.4h-3.1v-2.1c0-.9.4-1.8 1.8-1.8h1.4V8.4s-1.3-.2-2.5-.2c-2.5 0-4.2 1.6-4.2 4.4V15h-2.8v3.4h2.8v8.4c.7.1 1.4.2 2.1.2.5 0 1-.0 1.4-.1z"
    />
  </svg>
);

const CONTACT = {
  whatsappNumberIntl: "14374274025",
  phoneDisplay: "+1 (437) 427-4025",
  phoneTel: "+14374274025",
  email: "riaz@dookan.ca",
};

const SOCIAL = {
  facebookPage: "https://www.facebook.com/dookaninc",
  messenger: "https://m.me/dookaninc",
};
const MESSENGER_LINK = SOCIAL.messenger;

type BuyerKey = "grocery" | "restaurant" | "wholesale";

const buyerSegments: { key: BuyerKey; label: string; tagline: string }[] = [
  {
    key: "grocery",
    label: "Grocery Owners",
    tagline: "Fast-moving SKUs, retail-ready packs, weekly replenishment.",
  },
  {
    key: "restaurant",
    label: "Restaurant Owners",
    tagline: "Menu-grade sourcing, consistent supply, kitchen-friendly formats.",
  },
  {
    key: "wholesale",
    label: "Wholesalers",
    tagline: "Volume pricing, mixed loads, schedule-based shipments.",
  },
];

const commodityGroupsByBuyer: Record<
  BuyerKey,
  Array<{
    title: string;
    items: Array<{ name: string; cfia: string; examples: string }>;
  }>
> = {
  grocery: [
    {
      title: "Fresh Vegetables & Fruits",
      items: [
        {
          name: "Leafy Greens",
          cfia: "Fresh Vegetables / Leafy Greens",
          examples: "Spinach (Palak), Kolmi, Red Amaranth (Fresh)",
        },
        {
          name: "Fresh Vegetables (Other)",
          cfia: "Fresh Vegetables / Other",
          examples: "Gourds, Eggplant, Okra, Green Chili (Fresh)",
        },
        {
          name: "Fresh Fruits (Other)",
          cfia: "Fresh Fruits / Other",
          examples: "Seasonal fruits (availability-based)",
        },
      ],
    },
    {
      title: "Spices, Dry Goods & Pantry",
      items: [
        {
          name: "Spices & Condiments",
          cfia: "Spices, Herbs, Flavours, Condiments, Dressings",
          examples:
            "Turmeric, Chili, Cumin, Coriander, Mixed spices (Retail packs)",
        },
        {
          name: "Grain-derived Foods",
          cfia: "Grain derived foods",
          examples: "Rice items, flour-based goods (as applicable)",
        },
        {
          name: "Packaged / Mixed Grocery",
          cfia: "Foods not otherwise listed / Multiple Foods",
          examples: "Packaged pantry assortment (as applicable)",
        },
        {
          name: "Non-alcoholic Beverages",
          cfia: "Non-alcoholic beverages / Other",
          examples: "Juices / soft drinks (as applicable)",
        },
      ],
    },
    {
      title: "Frozen Fish & Seafood",
      items: [
        {
          name: "Finfish",
          cfia: "Fish and seafood / Finfish",
          examples:
            "Hilsa (Ilish), Rohu, Katla, Pangas (Retail freezer packs)",
        },
        {
          name: "Crustaceans",
          cfia: "Fish and seafood / Crustaceans",
          examples: "Shrimp / Prawn (Frozen)",
        },
        {
          name: "Composite Seafood Products",
          cfia: "Fish and seafood / Composite Fish and Seafood Products",
          examples: "Fish balls, mixed seafood packs (as applicable)",
        },
      ],
    },
    {
      title: "Processed Vegetables",
      items: [
        {
          name: "Processed Vegetables",
          cfia: "Processed Fruits and Vegetables / Processed Vegetables",
          examples: "Frozen vegetables, ready-cut/packed (if available)",
        },
      ],
    },
  ],

  restaurant: [
    {
      title: "Fish & Seafood (Kitchen-ready)",
      items: [
        {
          name: "Finfish",
          cfia: "Fish and seafood / Finfish",
          examples:
            "Hilsa, Rohu, Katla (restaurant-grade frozen, consistent cut)",
        },
        {
          name: "Crustaceans",
          cfia: "Fish and seafood / Crustaceans",
          examples: "Shrimp / Prawn (kitchen-ready)",
        },
        {
          name: "Composite Seafood Products",
          cfia: "Fish and seafood / Composite Fish and Seafood Products",
          examples: "Fish balls, mixed seafood packs (as applicable)",
        },
      ],
    },
    {
      title: "Fresh Vegetables & Leafy Greens",
      items: [
        {
          name: "Leafy Greens",
          cfia: "Fresh Vegetables / Leafy Greens",
          examples: "Daily cooking supply (fresh greens)",
        },
        {
          name: "Fresh Vegetables (Other)",
          cfia: "Fresh Vegetables / Other",
          examples: "Gourds, Eggplant, Okra, Green Chili (Fresh)",
        },
        {
          name: "Fresh Fruits (Other)",
          cfia: "Fresh Fruits / Other",
          examples: "Seasonal fruits (availability-based)",
        },
      ],
    },
    {
      title: "Spices & Condiments (Bulk)",
      items: [
        {
          name: "Spices & Condiments",
          cfia: "Manufactured Foods / Spices, Herbs, Flavours, Condiments, Dressings",
          examples:
            "Bulk packs for kitchen use (turmeric, chili, cumin, coriander, blends)",
        },
        {
          name: "Manufactured Foods (Other)",
          cfia: "Manufactured Foods / Foods not otherwise listed",
          examples: "Packaged items (as applicable)",
        },
      ],
    },
  ],

  wholesale: [
    {
      title: "Volume Fish & Seafood",
      items: [
        {
          name: "Finfish (Bulk)",
          cfia: "Fish and seafood / Finfish",
          examples: "Bulk cartons for distribution",
        },
        {
          name: "Crustaceans (Bulk)",
          cfia: "Fish and seafood / Crustaceans",
          examples: "Frozen shrimp/prawn bulk cartons",
        },
        {
          name: "Composite Seafood Products",
          cfia: "Fish and seafood / Composite Fish and Seafood Products",
          examples: "Mixed seafood packs (as applicable)",
        },
      ],
    },
    {
      title: "Fresh Produce (Mixed Loads)",
      items: [
        {
          name: "Leafy Greens",
          cfia: "Fresh Vegetables / Leafy Greens",
          examples: "Wholesale supply (availability-based)",
        },
        {
          name: "Fresh Vegetables (Other)",
          cfia: "Fresh Vegetables / Other",
          examples: "Gourds, Eggplant, Okra, Green Chili (Fresh)",
        },
        {
          name: "Fresh Fruits (Other)",
          cfia: "Fresh Fruits / Other",
          examples: "Seasonal fruits (availability-based)",
        },
      ],
    },
    {
      title: "Spices, Pantry & Mixed Grocery",
      items: [
        {
          name: "Spices & Condiments (Cartons)",
          cfia: "Manufactured Foods / Spices, Herbs, Flavours, Condiments, Dressings",
          examples: "Wholesale cartons, mixed assortments",
        },
        {
          name: "Grain-derived Foods",
          cfia: "Manufactured Foods / Grain derived foods",
          examples: "Bulk items (as applicable)",
        },
        {
          name: "Multiple Foods",
          cfia: "Manufactured Foods / Multiple Foods",
          examples: "Mixed loads for distribution",
        },
        {
          name: "Processed Vegetables",
          cfia: "Processed Fruits and Vegetables / Processed Vegetables",
          examples: "Frozen volume (if available)",
        },
      ],
    },
  ],
};

// --- Buyer icons (Trusted by Buyers) ---
const BuyerIcon = ({ type }: { type: "grocery" | "restaurant" | "wholesale" }) => {
  const common = { width: 22, height: 22, fill: "#10b981" };

  if (type === "grocery")
    return (
      <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 4h-2l-1 2h16l-1-2h-2M6 8h12l-1.5 9h-9z" />
      </svg>
    );

  if (type === "restaurant")
    return (
      <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 2v20h2v-8h2v8h2v-20h-6zm10 0h-2v10c0 1.1.9 2 2 2v8h2v-8c1.1 0 2-.9 2-2v-10h-4z" />
      </svg>
    );

  return (
    <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 6h18v10h-18zM7 10h4v2h-4zM13 10h4v2h-4z" />
    </svg>
  );
};

// --- Schema.org JSON-LD ---
const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DOOKAN INC",
  url: "https://dookan.ca",
  logo: "https://dookan.ca/logo.png",
  image: "https://dookan.ca/logo.png",
  description:
    "DOOKAN INC is a Canada-based food import company supplying fresh vegetables, fruits, fish & seafood, spices, and processed foods to grocery stores, restaurants, and wholesalers.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "CA",
    addressRegion: "ON",
    addressLocality: "Toronto",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-437-427-4025",
    contactType: "sales",
    areaServed: "CA",
    availableLanguage: ["English"],
  },
  areaServed: {
    "@type": "Country",
    name: "Canada",
  },
  sameAs: ["https://wa.me/14374274025", "https://www.facebook.com/dookaninc"],
};

// --- Hero background pattern ---
const HERO_BG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='260' viewBox='0 0 900 260'%3E%3Cdefs%3E%3CradialGradient id='g' cx='20%25' cy='20%25' r='80%25'%3E%3Cstop offset='0%25' stop-color='%2310b981' stop-opacity='0.18'/%3E%3Cstop offset='55%25' stop-color='%2310b981' stop-opacity='0.08'/%3E%3Cstop offset='100%25' stop-color='%23ffffff' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='900' height='260' fill='url(%23g)'/%3E%3Cg fill='none' stroke='%2310b981' stroke-opacity='0.12'%3E%3Cpath d='M0 210 C 120 160, 220 260, 360 210 S 600 160, 740 210 S 840 260, 900 210'/%3E%3Cpath d='M0 170 C 140 120, 250 220, 390 170 S 630 120, 770 170 S 860 220, 900 170'/%3E%3C/g%3E%3C/svg%3E")`;

export default function Page() {
  const [buyer, setBuyer] = useState<BuyerKey>("grocery");
  const [chatOpen, setChatOpen] = useState(false);
  const chatRef = useRef<HTMLDivElement | null>(null);

  const waText = useMemo(() => {
    const label = buyerSegments.find((b) => b.key === buyer)?.label ?? "Buyer";
    return `Hi DOOKAN INC, I am a ${label}. I want to request a quote.`;
  }, [buyer]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!chatOpen) return;
      const target = e.target as Node;

      if (chatRef.current && !chatRef.current.contains(target)) {
        setChatOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [chatOpen]);

  const waLink = `https://wa.me/${CONTACT.whatsappNumberIntl}?text=${encodeURIComponent(
    waText
  )}`;

  return (
    <main style={styles.page}>
      <style jsx global>{`
  .navLink {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    border-radius: 999px;
    transition: transform 160ms ease, background 160ms ease, box-shadow 160ms ease;
  }
  .navLink:hover {
    transform: translateY(-1px);
    background: rgba(16,185,129,0.10);
    box-shadow: 0 10px 22px rgba(16,185,129,0.18);
  }
  .navLink span {
    transition: transform 160ms ease;
  }
  .navLink:hover span {
    transform: scale(1.08);
  }
`}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* Header */}
      <header style={styles.headerWrap}>
        <div style={styles.header}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={styles.logoBox}>
              <img
                src="/logo.png"
                alt="DOOKAN INC - Food Importer in Canada"
                style={{
                  width: 44,
                  height: 44,
                  objectFit: "contain",
                  filter: "contrast(1.15) saturate(1.15)",
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <div style={styles.brandName}>DOOKAN INC</div>
              <div style={styles.brandTagline}>From Source to Global Markets</div>
            </div>
          </div>

          {/* ✅ Header Nav with Icons + Hover */}
          <nav style={styles.nav}>
            <a href="#services" className="navLink" style={styles.navLink}>
              <span style={styles.navIcon}>🛠️</span>
              Services
            </a>

            <a href="#products" className="navLink" style={styles.navLink}>
              <span style={styles.navIcon}>📦</span>
              Products
            </a>

            <a href="#compliance" className="navLink" style={styles.navLink}>
              <span style={styles.navIcon}>🛡️</span>
              Compliance
            </a>

            <a href="#contact" className="navLink" style={styles.navLink}>
              <span style={styles.navIcon}>📞</span>
              Contact
            </a>
{/* ✅ About */}
  <a href="/about" className="navLink" style={styles.navLink}>
    <span style={styles.navIcon}>ℹ️</span> About
  </a>
            
          </nav>
        </div>
      </header>
<button onClick={testSupabase} style={styles.secondaryBtn}>
  Test DB
</button>

      {/* Hero */}
      <section style={styles.section}>
        <div style={styles.heroCard}>
          <div style={{ display: "grid", gap: 10 }}>
            <h1 style={styles.h1}>
              Import partner for{" "}
              <span style={{ color: "#10b981" }}>
                Fresh Produce, Spices & Frozen Fish
              </span>
            </h1>

            <p style={styles.p}>
  DOOKAN INC is a Canada-based import and trade company built on trust, compliance, and long-term supply partnerships. 
</p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
  <a href="#contact" style={styles.primaryBtn}>Request a Quote</a>
  <a href="#products" style={styles.secondaryBtn}>View Products</a>
  <a href="/about" style={styles.secondaryBtn}>About Us</a>
</div>

            {/* Metrics */}
            <div style={styles.metricsGrid}>
              {[
                ["Buyer-first", "Grocery • Restaurant • Wholesale"],
                ["Compliance-first", "CFIA/SFCR aligned categories"],
                ["Cold-chain aware", "Fresh + Frozen handling focus"],
                ["Source transparency", "Consistency & screening mindset"],
              ].map(([t, d]) => (
                <div key={t} style={styles.metricCard}>
                  <div style={{ fontWeight: 950, color: "#065f46" }}>{t}</div>
                  <div
                    style={{
                      color: "#6b7280",
                      fontSize: 13,
                      marginTop: 6,
                      lineHeight: 1.5,
                    }}
                  >
                    {d}
                  </div>
                </div>
              ))}
            </div>

            {/* Trusted strip */}
            <div style={styles.trustedWrap}>
              <div style={styles.trustedLabel}>Trusted by buyers across Canada</div>

              <div style={styles.trustedGrid}>
                <div style={styles.trustedItem}>
                  <BuyerIcon type="grocery" />
                  <span>Grocery Stores</span>
                </div>
                <div style={styles.trustedItem}>
                  <BuyerIcon type="restaurant" />
                  <span>Restaurants</span>
                </div>
                <div style={styles.trustedItem}>
                  <BuyerIcon type="wholesale" />
                  <span>Wholesalers</span>
                </div>
              </div>
            </div>

            {/* Badges + quick stats */}
            <div style={styles.badgeRow}>
              <div style={styles.badgePill}>CFIA / SFCR-aligned categories</div>
              <div style={styles.badgePill}>Fresh + Frozen handling focus</div>
              <div style={styles.badgePill}>
                B2B: Grocery • Restaurant • Wholesale
              </div>
            </div>

            <div style={styles.statsGrid}>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>Multi-category</div>
                <div style={styles.statLabel}>Importer (produce • fish • spices)</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>Buyer-first</div>
                <div style={styles.statLabel}>Quote-ready info capture</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>Fast contact</div>
                <div style={styles.statLabel}>WhatsApp • Phone • Email</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>Traceability</div>
                <div style={styles.statLabel}>Preparedness mindset</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={styles.section}>
        <h2 style={styles.h2}>Services</h2>
        <div style={styles.grid}>
          {[
            ["Import to Canada", "Coordination for sourcing, documentation readiness, and delivery support."],
            ["Sourcing & Procurement", "Supplier screening, consistency focus, and category planning."],
            ["Fresh + Frozen Supply", "Handling guidance for produce and frozen seafood categories."],
            ["B2B Distribution Support", "Support for grocery stores, restaurants, and wholesalers."],
          ].map(([t, d]) => (
            <div key={t} style={styles.card}>
              <div style={{ fontWeight: 900, fontSize: 16, color: "#065f46" }}>
                {t}
              </div>
              <div style={{ color: "#6b7280", fontSize: 14, marginTop: 8, lineHeight: 1.6 }}>
                {d}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" style={styles.section}>
        <h2 style={styles.h2}>Products</h2>
        <div style={{ color: "#6b7280", marginBottom: 14 }}>
          Importing Food — Buyer-friendly categories (CFIA/SFCR aligned)
        </div>

        {/* Buyer Selector */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 12 }}>
          {buyerSegments.map((b) => (
            <button
              key={b.key}
              onClick={() => setBuyer(b.key)}
              style={{
                cursor: "pointer",
                borderRadius: 999,
                padding: "10px 14px",
                fontWeight: 950,
                background: buyer === b.key ? "#10b981" : "#ffffff",
                color: buyer === b.key ? "#ffffff" : "#111827",
                border: buyer === b.key ? "1px solid #059669" : "1px solid #e5e7eb",
                boxShadow: buyer === b.key ? "0 6px 16px rgba(16,185,129,0.25)" : "none",
              }}
            >
              {b.label}
            </button>
          ))}
        </div>

        <div style={{ color: "#059669", marginBottom: 18, fontSize: 13, fontWeight: 800 }}>
          {buyerSegments.find((x) => x.key === buyer)?.tagline}
        </div>

        <div style={styles.grid}>
          {commodityGroupsByBuyer[buyer].map((g) => (
            <div key={g.title} style={styles.card}>
              <div style={{ fontWeight: 950, fontSize: 16, color: "#065f46" }}>
                {g.title}
              </div>

              <div style={{ display: "grid", gap: 10, marginTop: 12 }}>
                {g.items.map((it) => (
                  <div key={it.cfia} style={styles.innerCard}>
                    <div style={{ fontWeight: 950, color: "#111827" }}>{it.name}</div>
                    <div style={{ color: "#6b7280", fontSize: 13, marginTop: 6, lineHeight: 1.6 }}>
                      <b>Examples:</b> {it.examples}
                    </div>
                    <div style={{ color: "#9ca3af", fontSize: 11, marginTop: 8 }}>
                      CFIA/SFCR: {it.cfia}
                    </div>
                  </div>
                ))}
              </div>

              <a href="#contact" style={{ ...styles.primaryBtn, display: "inline-block", marginTop: 14 }}>
                Request Quote
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance */}
      <section id="compliance" style={styles.section}>
        <h2 style={styles.h2}>Compliance</h2>
        <div style={styles.card}>
          <p style={styles.p}>
            We operate with a compliance-first approach aligned with Canadian requirements.
            Documentation summaries and process overviews can be shared on request.
          </p>
          <ul style={{ color: "#6b7280", lineHeight: 1.9, margin: 0, paddingLeft: 18 }}>
            <li>SFCR aligned operations</li>
            <li>Preventive control mindset (PCP-ready)</li>
            <li>Traceability & recall preparedness</li>
            <li>Commodity-specific handling: fresh produce & frozen seafood</li>
          </ul>
        </div>
      </section>

      {/* Contact / Quote */}
      <section id="contact" style={{ ...styles.section, paddingBottom: 110 }}>
        <h2 style={styles.h2}>Contact / Request a Quote</h2>
        <div style={{ color: "#6b7280", marginBottom: 16, lineHeight: 1.6 }}>
          Reach us via WhatsApp, phone, or email—whichever is easiest.
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 14 }}>
          <a href={waLink} target="_blank" rel="noreferrer" style={styles.primaryBtn}>
            WhatsApp Us
          </a>
          <a href={`tel:${CONTACT.phoneTel}`} style={styles.secondaryBtn}>
            Call: {CONTACT.phoneDisplay}
          </a>
          <a
            href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(
              "Quote Request - DOOKAN INC"
            )}&body=${encodeURIComponent(
              "Hi DOOKAN INC,\n\nI would like to request a quote.\n\nBuyer Type:\nProducts:\nQuantity:\nDelivery City:\nFrequency:\n\nThanks,\n"
            )}`}
            style={styles.secondaryBtn}
          >
            Email Us
          </a>
          <a
  href={SOCIAL.messenger}
  target="_blank"
  rel="noreferrer"
  style={styles.secondaryBtn}
>
  Messenger
</a>

        </div>

        <div style={styles.contactGrid}>
          <div style={styles.card}>
            <div style={{ display: "grid", gap: 10 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <input placeholder="Full Name" style={styles.input} />
                <input placeholder="Company Name" style={styles.input} />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <input placeholder="Phone" style={styles.input} />
                <input placeholder="Email" style={styles.input} />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <select value={buyer} onChange={(e) => setBuyer(e.target.value as BuyerKey)} style={styles.input}>
                  <option value="grocery">Grocery Owner</option>
                  <option value="restaurant">Restaurant Owner</option>
                  <option value="wholesale">Wholesaler</option>
                </select>
                <input placeholder="City (e.g., Toronto)" style={styles.input} />
              </div>

              <input placeholder="Products needed (e.g., leafy greens, hilsa, spices...)" style={styles.input} />

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <input placeholder="Estimated Quantity (e.g., 10 cartons / week)" style={styles.input} />
                <select style={styles.input}>
                  <option>Frequency</option>
                  <option>Daily</option>
                  <option>2-3 times/week</option>
                  <option>Weekly</option>
                  <option>Bi-weekly</option>
                  <option>Monthly</option>
                </select>
              </div>

              <textarea
                placeholder="Notes / pack size / cut preference / delivery days"
                rows={4}
                style={{ ...styles.input, resize: "vertical" }}
              />

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a href={waLink} target="_blank" rel="noreferrer" style={styles.primaryBtn}>
                  Send on WhatsApp
                </a>
                <a
                  href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(
                    "Quote Request - DOOKAN INC"
                  )}&body=${encodeURIComponent(
                    `Buyer Type: ${
                      buyerSegments.find((b) => b.key === buyer)?.label
                    }\nProducts:\nQuantity:\nCity:\nFrequency:\nNotes:\n`
                  )}`}
                  style={styles.secondaryBtn}
                >
                  Send by Email
                </a>
              </div>

              <div style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.5 }}>
                Tip: For fastest quote, send product list + quantity + delivery city.
              </div>
            </div>
          </div>

          <div style={styles.card}>
            <div style={{ fontWeight: 950, marginBottom: 10, color: "#065f46" }}>
              Direct Contact
            </div>
            <div style={{ color: "#6b7280", lineHeight: 1.8 }}>
              <div><b>WhatsApp:</b> {CONTACT.phoneDisplay}</div>
              <div><b>Phone:</b> {CONTACT.phoneDisplay}</div>
              <div><b>Email:</b> {CONTACT.email}</div>
            </div>
<div>
  <b>Messenger:</b>{" "}
  <a
    href={SOCIAL.messenger}
    target="_blank"
    rel="noreferrer"
    style={{ color: "#1877F2", fontWeight: 800, textDecoration: "none" }}
  >
    Chat on Facebook
  </a>
</div>

            <div style={{ marginTop: 14, color: "#6b7280", fontSize: 13, lineHeight: 1.6 }}>
              <b>Buyers:</b> Grocery • Restaurant • Wholesale<br />
              <b>Activity:</b> Importing Food (CFIA/SFCR aligned)
            </div>
          </div>
        </div>
      </section>

            {/* Footer */}
       

     
      <footer
       style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "20px 20px 40px",
          color: "#9ca3af",
          fontSize: 12,
          textAlign: "center",
        }} 
      >
       <div>© {new Date().getFullYear()} DOOKAN INC. All rights reserved.</div>

  
      </footer>

      {/* Mobile sticky CTA (optional) */}
      <div className="show-sticky-cta" style={styles.stickyCta}>
        <a href="#contact" style={styles.stickyPrimary}>
          Request Quote
        </a>
        <a href={waLink} target="_blank" rel="noreferrer" style={styles.stickySecondary}>
          WhatsApp
        </a>
      </div>

      {/* ✅ Floating Hover Chat Widget (WhatsApp + Messenger + Facebook) */}
<div
  style={styles.chatWrap}
  onMouseEnter={() => setChatOpen(true)}
  onMouseLeave={() => setChatOpen(false)}
>
  {/* Panel */}
  {chatOpen && (
    <div style={styles.chatPanel}>
      <div style={styles.chatPanelTitle}>Chat with DOOKAN INC</div>

      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        style={styles.chatItem}
        onClick={() => setChatOpen(false)}
      >
        <span style={styles.chatIcon}>
          <IconWhatsApp />
        </span>
        <div style={{ display: "grid" }}>
          <span style={styles.chatItemTitle}>WhatsApp</span>
          <span style={styles.chatItemSub}>Fastest response</span>
        </div>
      </a>

      <a
        href={SOCIAL.messenger}
        target="_blank"
        rel="noreferrer"
        style={styles.chatItem}
        onClick={() => setChatOpen(false)}
      >
        <span style={styles.chatIcon}>
          <IconMessenger />
        </span>
        <div style={{ display: "grid" }}>
          <span style={styles.chatItemTitle}>Messenger</span>
          <span style={styles.chatItemSub}>Facebook chat</span>
        </div>
      </a>

      <a
        href={SOCIAL.facebookPage}
        target="_blank"
        rel="noreferrer"
        style={styles.chatItem}
        onClick={() => setChatOpen(false)}
      >
        <span style={styles.chatIcon}>
          <IconFacebook />
        </span>
        <div style={{ display: "grid" }}>
          <span style={styles.chatItemTitle}>Facebook Page</span>
          <span style={styles.chatItemSub}>Visit our page</span>
        </div>
      </a>
    </div>
  )}

  {/* Floating Button */}
  <button type="button" style={styles.chatFab} aria-label="Chat options">
    💬 Chat
  </button>
</div>


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
  
  chatWrap: {
  position: "fixed",
  right: 18,
  bottom: 18,
  zIndex: 90,
},


chatFab: {
  width: 64,
  height: 64,
  borderRadius: 999,
  border: "1px solid #059669",
  background: "#10b981",
  color: "#ffffff",
  fontWeight: 950,
  cursor: "pointer",
  boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
},

chatPanel: {
  position: "absolute",
  right: 0,
  bottom: 74,
  width: 270,
  background: "rgba(255,255,255,0.98)",
  border: "1px solid #e5e7eb",
  borderRadius: 18,
  padding: 10,
  boxShadow: "0 18px 48px rgba(0,0,0,0.18)",
},

chatPanelTitle: {
  fontWeight: 950,
  color: "#065f46",
  fontSize: 13,
  padding: "6px 8px 8px",
},

chatItem: {
  display: "flex",
  alignItems: "center",
  gap: 10,
  padding: "10px 12px",
  borderRadius: 14,
  textDecoration: "none",
  color: "#111827",
  fontWeight: 900,
  border: "1px solid transparent",
  transition: "transform .15s ease, background .15s ease, border-color .15s ease",
},

chatIcon: {
  width: 40,
  height: 40,
  borderRadius: 12,
  background: "#ffffff",
  border: "1px solid #e5e7eb",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 8px 18px rgba(0,0,0,0.06)",
},

chatItemTitle: {
  fontWeight: 950,
  color: "#111827",
  lineHeight: 1.1,
},

chatItemSub: {
  fontSize: 12,
  color: "#6b7280",
  marginTop: 2,
},

chatMainBtn: {
  background: "#10b981",
  color: "#ffffff",
  padding: "12px 14px",
  borderRadius: 999,
  fontWeight: 950,
  border: "1px solid #059669",
  boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
  cursor: "pointer",
},



chatBadge: {
  width: 34,
  height: 34,
  borderRadius: 12,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#f9fafb",
  border: "1px solid #e5e7eb",
  fontWeight: 950,
  fontSize: 12,
},


 

  

    headerWrap: {
      borderBottom: "1px solid #e5e7eb",
      position: "sticky",
      top: 0,
      backdropFilter: "blur(10px)",
      background: "rgba(255,255,255,0.85)",
      zIndex: 10,
    },
    header: {
      maxWidth: 1100,
      margin: "0 auto",
      padding: "18px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 18,
    },

    logoBox: {
      width: 54,
      height: 54,
      borderRadius: 14,
      background: "#ffffff",
      display: "grid",
      placeItems: "center",
      border: "1px solid rgba(16,185,129,0.25)",
      boxShadow: "0 10px 24px rgba(0,0,0,0.10)",
      padding: 6,
    },

    brandName: {
      fontSize: "clamp(22px, 4vw, 30px)",
      fontWeight: 950,
      letterSpacing: 1.2,
      color: "#065f46",
      lineHeight: 1,
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

    nav: {
      display: "flex",
      gap: 8,
      fontSize: 14,
      color: "#111827",
      flexWrap: "wrap",
      justifyContent: "flex-end",
      alignItems: "center",
    },

    navLink: {
      color: "inherit",
      textDecoration: "none",
      fontWeight: 900,
    },

    navIcon: {
      fontSize: 16,
      lineHeight: 1,
    },

    socialIcon: {
      width: 34,
      height: 34,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      background: "#ffffff",
      border: "1px solid #e5e7eb",
      boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
    },
footer: {
  maxWidth: 1100,
  margin: "0 auto",
  padding: "20px 20px 40px",
  color: "#9ca3af",
  fontSize: 12,
  display: "grid",
  gap: 10,
  justifyItems: "center",
},

footerLinks: {
  display: "flex",
  gap: 10,
  alignItems: "center",
},

footerLink: {
  color: "#6b7280",
  textDecoration: "none",
  fontWeight: 800,
},

    footerSocialIcon: {
      width: 36,
      height: 36,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      background: "#ffffff",
      border: "1px solid #e5e7eb",
      boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
    },

    section: { maxWidth: 1100, margin: "0 auto", padding: "34px 20px" },

    heroCard: {
      border: "1px solid #e5e7eb",
      borderRadius: 22,
      padding: 22,
      backgroundColor: "#ffffff",
      backgroundImage: `${HERO_BG}, linear-gradient(180deg, rgba(16,185,129,0.10), rgba(255,255,255,1))`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },

    h1: { fontSize: 46, margin: 0, lineHeight: 1.05, letterSpacing: -0.6 },
    h2: { margin: "0 0 14px" },
    p: { color: "#374151", maxWidth: 760, margin: 0, fontSize: 17, lineHeight: 1.75 },

    primaryBtn: {
      background: "#10b981",
      color: "#ffffff",
      padding: "12px 16px",
      borderRadius: 14,
      fontWeight: 900,
      textDecoration: "none",
      border: "1px solid #059669",
      boxShadow: "0 10px 22px rgba(16,185,129,0.22)",
      display: "inline-block",
      textAlign: "center",
    },

    secondaryBtn: {
      border: "1px solid #e5e7eb",
      color: "#111827",
      padding: "12px 16px",
      borderRadius: 14,
      fontWeight: 900,
      textDecoration: "none",
      background: "#ffffff",
      display: "inline-block",
      textAlign: "center",
    },

    metricsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
      gap: 12,
      marginTop: 18,
    },

    metricCard: {
      border: "1px solid #e5e7eb",
      borderRadius: 16,
      padding: 14,
      background: "#ffffff",
      boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: 14,
    },

    card: {
      border: "1px solid #e5e7eb",
      borderRadius: 18,
      padding: 16,
      background: "#ffffff",
      boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
    },

    innerCard: {
      border: "1px solid #e5e7eb",
      borderRadius: 14,
      padding: 12,
      background: "#f9fafb",
    },

    contactGrid: {
      display: "grid",
      gridTemplateColumns: "1.2fr 0.8fr",
      gap: 14,
      alignItems: "start",
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

    

    trustedWrap: {
      marginTop: 18,
      paddingTop: 14,
      borderTop: "1px solid #e5e7eb",
      display: "grid",
      gap: 10,
    },
    trustedLabel: {
      fontSize: 13,
      color: "#6b7280",
      fontWeight: 700,
    },
    trustedGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
      gap: 12,
    },
    trustedItem: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 12px",
      borderRadius: 14,
      background: "#f9fafb",
      border: "1px solid #e5e7eb",
      fontWeight: 800,
      color: "#065f46",
    },

    badgeRow: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      marginTop: 14,
    },
    badgePill: {
      fontSize: 12,
      fontWeight: 800,
      color: "#065f46",
      background: "rgba(16,185,129,0.10)",
      border: "1px solid rgba(16,185,129,0.25)",
      padding: "8px 10px",
      borderRadius: 999,
    },
    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
      gap: 12,
      marginTop: 14,
    },
    statCard: {
      border: "1px solid #e5e7eb",
      borderRadius: 16,
      padding: 14,
      background: "#ffffff",
      boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
    },
    statNumber: {
      fontWeight: 950,
      color: "#065f46",
      letterSpacing: -0.2,
    },
    statLabel: {
      marginTop: 6,
      fontSize: 13,
      color: "#6b7280",
      lineHeight: 1.5,
    },

    stickyCta: {
      position: "fixed",
      left: 12,
      right: 12,
      bottom: 12,
      display: "none",
      gap: 10,
      zIndex: 60,
      padding: 10,
      borderRadius: 18,
      background: "rgba(255,255,255,0.92)",
      border: "1px solid #e5e7eb",
      boxShadow: "0 14px 36px rgba(0,0,0,0.14)",
      backdropFilter: "blur(10px)",
    },
    stickyPrimary: {
      flex: 1,
      textAlign: "center",
      background: "#10b981",
      color: "#ffffff",
      padding: "12px 14px",
      borderRadius: 14,
      fontWeight: 950,
      textDecoration: "none",
      border: "1px solid #059669",
    },
    stickySecondary: {
      width: 120,
      textAlign: "center",
      background: "#ffffff",
      color: "#111827",
      padding: "12px 14px",
      borderRadius: 14,
      fontWeight: 950,
      textDecoration: "none",
      border: "1px solid #e5e7eb",
    },
  };
