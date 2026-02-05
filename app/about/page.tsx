"use client";

import { useMemo } from "react";

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

const schemaOrgAbout = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DOOKAN INC",
  url: "https://dookan.ca",
  logo: "https://dookan.ca/logo.png",
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
  sameAs: [SOCIAL.facebookPage],
};

const HERO_BG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='260' viewBox='0 0 900 260'%3E%3Cdefs%3E%3CradialGradient id='g' cx='20%25' cy='20%25' r='80%25'%3E%3Cstop offset='0%25' stop-color='%2310b981' stop-opacity='0.18'/%3E%3Cstop offset='55%25' stop-color='%2310b981' stop-opacity='0.08'/%3E%3Cstop offset='100%25' stop-color='%23ffffff' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='900' height='260' fill='url(%23g)'/%3E%3Cg fill='none' stroke='%2310b981' stroke-opacity='0.12'%3E%3Cpath d='M0 210 C 120 160, 220 260, 360 210 S 600 160, 740 210 S 840 260, 900 210'/%3E%3Cpath d='M0 170 C 140 120, 250 220, 390 170 S 630 120, 770 170 S 860 220, 900 170'/%3E%3C/g%3E%3C/svg%3E")`;

export default function AboutPage() {
  const waText = useMemo(() => {
    return "Hi DOOKAN INC, I want to know more about your import services and request a quote.";
  }, []);

  const waLink = `https://wa.me/${CONTACT.whatsappNumberIntl}?text=${encodeURIComponent(
    waText
  )}`;

  return (
    <main style={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgAbout) }}
      />

      {/* Header (same vibe) */}
      <header style={styles.headerWrap}>
        <div style={styles.header}>
          <a href="/" style={{ textDecoration: "none" }}>
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
          </a>

          <nav style={styles.nav}>
            <a href="/#services" style={styles.navLink}>
              <span style={styles.navIcon}>🛠️</span>Services
            </a>
            <a href="/#products" style={styles.navLink}>
              <span style={styles.navIcon}>📦</span>Products
            </a>
            <a href="/#compliance" style={styles.navLink}>
              <span style={styles.navIcon}>🛡️</span>Compliance
            </a>
            <a href="/#contact" style={styles.navLink}>
              <span style={styles.navIcon}>📞</span>Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero (same card style) */}
      <section style={styles.section}>
        <div style={styles.heroCard}>
          <div style={{ display: "grid", gap: 10 }}>
            <h1 style={styles.h1}>
              About{" "}
              <span style={{ color: "#10b981" }}>
                DOOKAN INC
              </span>
            </h1>

            <p style={styles.p}>
              DOOKAN INC is a Canada-based import partner focused on compliant sourcing and
              reliable supply for <b>fresh vegetables & fruits</b>, <b>spices & pantry goods</b>,
              and <b>frozen fish & seafood</b>—supporting grocery stores, restaurants, and wholesalers.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
              <a href="/#contact" style={styles.primaryBtn}>Request a Quote</a>
              <a href="/" style={styles.secondaryBtn}>Back to Home</a>
              <a href={waLink} target="_blank" rel="noreferrer" style={styles.secondaryBtn}>
                WhatsApp
              </a>
            </div>

            <div style={styles.badgeRow}>
              <div style={styles.badgePill}>Canada-based B2B importer</div>
              <div style={styles.badgePill}>Compliance-first mindset</div>
              <div style={styles.badgePill}>Fresh + Frozen handling focus</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content blocks (same card/grid UI) */}
      <section style={styles.section}>
        <div style={styles.grid}>
          <div style={styles.card}>
            <div style={styles.cardTitle}>What we do</div>
            <div style={styles.cardText}>
              We connect trusted sources with Canadian markets—helping buyers get
              consistent supply with buyer-friendly packaging, planned shipments,
              and documentation readiness.
            </div>

            <ul style={styles.ul}>
              <li>Fresh produce & leafy greens planning</li>
              <li>Frozen fish & seafood (cold-chain aware)</li>
              <li>Spices, pantry & mixed grocery loads</li>
              <li>Support for grocery, restaurant & wholesale buyers</li>
            </ul>
          </div>

          <div style={styles.card}>
            <div style={styles.cardTitle}>Why buyers choose us</div>
            <div style={styles.cardText}>
              We focus on the things buyers care about most: reliability, quality,
              and clear communication—so your operations stay smooth.
            </div>

            <div style={{ display: "grid", gap: 10, marginTop: 12 }}>
              {[
                ["Buyer-first planning", "Quote-ready, clear product + quantity + city workflow."],
                ["Consistency mindset", "Supplier screening and repeatable sourcing."],
                ["Compliance-first", "Aligned approach with CFIA/SFCR categories."],
                ["Fast response", "WhatsApp + email + Messenger options available."],
              ].map(([t, d]) => (
                <div key={t} style={styles.innerCard}>
                  <div style={{ fontWeight: 950, color: "#065f46" }}>{t}</div>
                  <div style={{ color: "#6b7280", fontSize: 13, marginTop: 6, lineHeight: 1.6 }}>
                    {d}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.card}>
            <div style={styles.cardTitle}>Our promise</div>
            <div style={styles.cardText}>
              We aim to be a long-term partner—not just a supplier. You’ll get clear timelines,
              consistent updates, and buyer-friendly delivery planning.
            </div>

            <div style={{ marginTop: 14, display: "grid", gap: 10 }}>
              <div style={styles.innerCard}>
                <div style={{ fontWeight: 950, color: "#111827" }}>Quality & transparency</div>
                <div style={styles.smallText}>Clear product details, handling notes, and honest availability.</div>
              </div>
              <div style={styles.innerCard}>
                <div style={{ fontWeight: 950, color: "#111827" }}>Supply planning</div>
                <div style={styles.smallText}>Weekly/daily replenishment support based on your buyer type.</div>
              </div>
              <div style={styles.innerCard}>
                <div style={{ fontWeight: 950, color: "#111827" }}>Responsiveness</div>
                <div style={styles.smallText}>Fastest responses via WhatsApp; Messenger available too.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact mini-card */}
      <section style={{ ...styles.section, paddingBottom: 110 }}>
        <div style={styles.card}>
          <div style={styles.cardTitle}>Contact</div>
          <div style={styles.cardText}>
            Want pricing, availability, or shipment planning? Message us with your product list + quantity + delivery city.
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
            <a href={waLink} target="_blank" rel="noreferrer" style={styles.primaryBtn}>
              WhatsApp
            </a>
            <a href={SOCIAL.messenger} target="_blank" rel="noreferrer" style={styles.secondaryBtn}>
              Messenger
            </a>
            <a
              href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(
                "About DOOKAN INC - Quote Request"
              )}`}
              style={styles.secondaryBtn}
            >
              Email
            </a>
            <a href={`tel:${CONTACT.phoneTel}`} style={styles.secondaryBtn}>
              Call
            </a>
          </div>
        </div>
      </section>

      {/* Footer centered */}
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
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "8px 10px",
    borderRadius: 12,
  },
  navIcon: { fontSize: 16, lineHeight: 1 },

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
  p: { color: "#374151", maxWidth: 860, margin: 0, fontSize: 17, lineHeight: 1.75 },

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
  cardTitle: { fontWeight: 950, fontSize: 16, color: "#065f46" },
  cardText: { color: "#6b7280", fontSize: 14, marginTop: 8, lineHeight: 1.7 },

  innerCard: {
    border: "1px solid #e5e7eb",
    borderRadius: 14,
    padding: 12,
    background: "#f9fafb",
  },
  smallText: { color: "#6b7280", fontSize: 13, marginTop: 6, lineHeight: 1.6 },

  ul: { color: "#6b7280", lineHeight: 1.9, margin: "10px 0 0", paddingLeft: 18 },

  footer: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "20px 20px 40px",
    color: "#9ca3af",
    fontSize: 12,
    textAlign: "center",
  },
};
