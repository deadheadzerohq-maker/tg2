import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: 480, padding: 24 }}>
        <h1 style={{ fontSize: 32, marginBottom: 16 }}>TenderGuard</h1>
        <p style={{ marginBottom: 24 }}>
          Unlimited carrier vetting for freight brokers. Paste a DOT or MC number and get an instant risk score,
          authority status, and insurance check.
        </p>
        <Link href="/app">
          <button
            style={{
              padding: "10px 20px",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              fontWeight: 600
            }}
          >
            Enter dashboard
          </button>
        </Link>
        <p style={{ marginTop: 32, fontSize: 12, opacity: 0.7 }}>
          Technology platform only. Not a licensed freight broker or money transmitter. We do not hold freight dollars.
        </p>
      </div>
    </main>
  );
}
