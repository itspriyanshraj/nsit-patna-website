"use client";

import { FaLandmark, FaCreditCard, FaMobileScreen, FaArrowRight, FaShield } from "react-icons/fa6";

export default function OnlinePaymentPage() {
  return (
    <section style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative",
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
    }}>
      <div style={{
        position: "relative", zIndex: 1, width: "100%", maxWidth: 500, margin: "0 16px",
        background: "#fff", borderRadius: 14, padding: "44px 36px",
        boxShadow: "0 24px 64px rgba(0,0,0,0.3)",
      }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <h1 style={{ fontSize: 22, fontWeight: 900, color: "#0f172a", margin: "0 0 4px 0" }}>
            Online Payment
          </h1>
          <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>
            NSIT Fee Payment Portal
          </p>
        </div>

        <div style={{ marginBottom: 24 }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "#0f172a", marginBottom: 10 }}>
            Select Payment Method
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <a href="https://student.nsit.in/login.aspx" target="_blank" rel="noopener noreferrer" style={{
              display: "flex", alignItems: "center", gap: 14,
              padding: "16px 18px", border: "2px solid #e2e8f0", borderRadius: 10,
              textDecoration: "none", color: "#0f172a", transition: "all 180ms ease",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--main-color)"; e.currentTarget.style.background = "#fef2f2"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.background = "#fff"; }}
            >
              <FaLandmark style={{ fontSize: 24, color: "var(--main-color)" }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, fontSize: 14 }}>SBI Collect</div>
                <div style={{ fontSize: 11, color: "#64748b" }}>Pay via State Bank of India</div>
              </div>
              <FaArrowRight style={{ color: "#94a3b8", fontSize: 14 }} />
            </a>
            <a href="https://student.nsit.in/login.aspx" target="_blank" rel="noopener noreferrer" style={{
              display: "flex", alignItems: "center", gap: 14,
              padding: "16px 18px", border: "2px solid #e2e8f0", borderRadius: 10,
              textDecoration: "none", color: "#0f172a", transition: "all 180ms ease",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--main-color)"; e.currentTarget.style.background = "#fef2f2"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.background = "#fff"; }}
            >
              <FaCreditCard style={{ fontSize: 22, color: "var(--main-color)" }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, fontSize: 14 }}>Debit / Credit Card</div>
                <div style={{ fontSize: 11, color: "#64748b" }}>Visa, Mastercard, RuPay</div>
              </div>
              <FaArrowRight style={{ color: "#94a3b8", fontSize: 14 }} />
            </a>
            <a href="https://student.nsit.in/login.aspx" target="_blank" rel="noopener noreferrer" style={{
              display: "flex", alignItems: "center", gap: 14,
              padding: "16px 18px", border: "2px solid #e2e8f0", borderRadius: 10,
              textDecoration: "none", color: "#0f172a", transition: "all 180ms ease",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#25D366"; e.currentTarget.style.background = "#f0fdf4"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.background = "#fff"; }}
            >
              <FaMobileScreen style={{ fontSize: 24, color: "#25D366" }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, fontSize: 14 }}>UPI / Mobile Banking</div>
                <div style={{ fontSize: 11, color: "#64748b" }}>Google Pay, PhonePe, Paytm</div>
              </div>
              <FaArrowRight style={{ color: "#94a3b8", fontSize: 14 }} />
            </a>
          </div>
        </div>

        <div style={{
          background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 8,
          padding: "12px 14px", display: "flex", alignItems: "center", gap: 10,
        }}>
          <FaShield style={{ fontSize: 16, color: "var(--main-color)", flexShrink: 0 }} />
          <span style={{ fontSize: 11, color: "#64748b", lineHeight: 1.4 }}>
            Your payment is processed through a secure SSL encrypted gateway.
          </span>
        </div>
      </div>
    </section>
  );
}
