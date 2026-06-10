"use client";

import { useState } from "react";
import { FaUser, FaLock, FaWhatsapp, FaMobileScreen, FaHeadset } from "react-icons/fa6";

const GREEN = "#25D366";

export default function TeacherLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [otpMethod, setOtpMethod] = useState("whatsapp");
  const [showOtp, setShowOtp] = useState(false);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [isWhatsapp, setIsWhatsapp] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    window.open("https://student.nsit.in/login.aspx", "_blank");
  };

  const handleVerifyOtpClick = () => {
    setIsWhatsapp(otpMethod === "whatsapp");
    setShowOtp(true);
    setMobile("");
    setOtp("");
    setOtpSent(false);
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (mobile.length === 10) setOtpSent(true);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      window.open("https://student.nsit.in/login.aspx", "_blank");
      setShowOtp(false);
    }
  };

  const openOtpModal = (whatsapp = false) => {
    setIsWhatsapp(whatsapp);
    setShowOtp(true);
    setMobile("");
    setOtp("");
    setOtpSent(false);
  };

  const accent = isWhatsapp ? GREEN : "var(--main-color)";
  const bgLight = isWhatsapp ? "#f0fdf4" : "#fef2f2";
  const borderLight = isWhatsapp ? "#bbf7d0" : "#fecaca";
  const title = isWhatsapp ? "Login with WhatsApp" : "Login With OTP";

  return (
    <section style={{
      minHeight: "100vh", display: "flex", fontFamily: "Inter, sans-serif",
    }}>
      {/* Left Panel - Info */}
      <div style={{
        flex: 1, display: "flex", flexDirection: "column", position: "relative",
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        color: "#fff", padding: "48px 40px", overflow: "hidden",
      }} className="d-none d-lg-flex">
        <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column" }}>
          <div>
            <div style={{ fontWeight: 900, fontSize: 26, letterSpacing: -0.5 }}>
              <span style={{ color: "#e94560" }}>Acade</span>mist ERP
            </div>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 2, letterSpacing: 0.5 }}>
              Best college management erp software
            </p>
          </div>

          <div style={{ marginTop: "auto", marginBottom: "auto", maxWidth: 400 }}>
            <h2 style={{ fontSize: 34, fontWeight: 900, lineHeight: 1.15, margin: "0 0 6px 0" }}>
              Everything you need<br />for your College.
            </h2>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: 28 }}>
              A cloud-based college management ERP with 50+ fully customisable modules - connecting admissions, academics, finance, examination, hostel and biometric integrations under one trusted platform.
            </p>

            {[
              "Attendance & Academic",
              "Fee & Finance Module",
              "Examination & Results",
              "Staff & Payroll",
              "Parent & Student Comm.",
              "Hostel & Transport",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#e94560", flexShrink: 0 }} />
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.85)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div style={{
        flex: 1, display: "flex", flexDirection: "column", justifyContent: "center",
        alignItems: "center", padding: "40px 24px", background: "#f8fafc", position: "relative",
      }}>
        <div style={{
          position: "absolute", top: 20, right: 28, display: "flex", alignItems: "center", gap: 6,
          color: "#64748b", fontSize: 12, fontWeight: 600,
        }}>
          <FaHeadset style={{ fontSize: 14 }} />
          Need help? <a href="tel:+917781020349" style={{ color: "var(--main-color)", textDecoration: "none", fontWeight: 700 }}>Contact Support</a>
        </div>

        <div style={{ width: "100%", maxWidth: 380 }}>
          <div style={{ marginBottom: 28 }}>
            <h1 style={{ fontSize: 22, fontWeight: 900, color: "#0f172a", margin: "0 0 4px 0", letterSpacing: -0.3 }}>
              Secure Sign In
            </h1>
            <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>
              Welcome back. Sign in to access your Academist ERP dashboard and services.
            </p>
          </div>

          <form onSubmit={handleSignIn}>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#0f172a", marginBottom: 5 }}>
                <FaUser style={{ marginRight: 6, fontSize: 11, color: "var(--main-color)" }} />
                Username
              </label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username" required
                style={{
                  width: "100%", padding: "12px 14px", borderRadius: 8,
                  border: "1.5px solid #e2e8f0", fontSize: 14, outline: "none",
                  background: "#fff", color: "#0f172a",
                }}
                onFocus={(e) => e.target.style.borderColor = "var(--main-color)"}
                onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
              />
            </div>

            <div style={{ marginBottom: 22 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#0f172a", marginBottom: 5 }}>
                <FaLock style={{ marginRight: 6, fontSize: 11, color: "var(--main-color)" }} />
                Password
              </label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password" required
                style={{
                  width: "100%", padding: "12px 14px", borderRadius: 8,
                  border: "1.5px solid #e2e8f0", fontSize: 14, outline: "none",
                  background: "#fff", color: "#0f172a",
                }}
                onFocus={(e) => e.target.style.borderColor = "var(--main-color)"}
                onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
              />
            </div>

            <div style={{ marginBottom: 22 }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#0f172a", margin: "0 0 8px 0" }}>
                Choose how you want to receive your OTP
              </p>
              <div style={{ display: "flex", gap: 20 }}>
                <label style={{
                  display: "flex", alignItems: "center", gap: 8, cursor: "pointer",
                  fontSize: 13, color: "#475569", fontWeight: 500,
                }}>
                  <input type="radio" name="otpMethod" checked={otpMethod === "whatsapp"}
                    onChange={() => setOtpMethod("whatsapp")}
                    style={{ accentColor: GREEN, width: 16, height: 16, cursor: "pointer" }} />
                  <FaWhatsapp style={{ fontSize: 16, color: GREEN }} />
                  WhatsApp
                </label>
                <label style={{
                  display: "flex", alignItems: "center", gap: 8, cursor: "pointer",
                  fontSize: 13, color: "#475569", fontWeight: 500,
                }}>
                  <input type="radio" name="otpMethod" checked={otpMethod === "sms"}
                    onChange={() => setOtpMethod("sms")}
                    style={{ accentColor: "var(--main-color)", width: 16, height: 16, cursor: "pointer" }} />
                  <FaMobileScreen style={{ fontSize: 14, color: "var(--main-color)" }} />
                  SMS
                </label>
              </div>
            </div>

            <button type="submit" style={{
              width: "100%", padding: "14px", background: "var(--main-color)", color: "#fff",
              border: "none", borderRadius: 8, fontSize: 14, fontWeight: 800,
              cursor: "pointer", marginBottom: 10,
              boxShadow: "0 8px 24px rgba(237,28,36,0.25)",
            }}>
              Sign in to Portal
            </button>

            <button type="button" onClick={handleVerifyOtpClick} style={{
              width: "100%", padding: "13px", background: "#fff", color: "var(--main-color)",
              border: "2px solid var(--main-color)", borderRadius: 8, fontSize: 14, fontWeight: 800,
              cursor: "pointer", transition: "all 180ms ease",
            }}
              onMouseEnter={(e) => { e.target.style.background = "var(--main-color)"; e.target.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.target.style.background = "#fff"; e.target.style.color = "var(--main-color)"; }}
            >
              Verify OTP
            </button>
          </form>

          <p style={{ textAlign: "center", marginTop: 28, fontSize: 10, color: "#94a3b8" }}>
            Created by <strong style={{ color: "#0f172a" }}>Priyansh Raj</strong>
          </p>
        </div>
      </div>

      {/* OTP Modal */}
      {showOtp && (
        <div onClick={() => setShowOtp(false)} style={{
          position: "fixed", inset: 0, zIndex: 99999, background: "rgba(0,0,0,0.6)",
          display: "flex", alignItems: "center", justifyContent: "center", padding: 16,
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{
            background: "#fff", borderRadius: 16, width: "100%", maxWidth: 400,
            boxShadow: "0 24px 80px rgba(0,0,0,0.35)", overflow: "hidden",
          }}>
            <div style={{
              background: accent, padding: "18px 28px",
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <h3 style={{ color: "#fff", fontSize: 17, fontWeight: 900, margin: 0 }}>
                {isWhatsapp ? <FaWhatsapp style={{ marginRight: 10, fontSize: 18 }} /> : <FaMobileScreen style={{ marginRight: 10, fontSize: 18 }} />}
                {title}
              </h3>
              <button onClick={() => setShowOtp(false)} style={{
                background: "rgba(255,255,255,0.2)", border: "none", color: "#fff",
                width: 32, height: 32, borderRadius: "50%", cursor: "pointer",
                fontSize: 16, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center",
              }}>&times;</button>
            </div>

            <div style={{ padding: "24px 28px 28px" }}>
              {!otpSent ? (
                <form onSubmit={handleSendOtp}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#14213d", marginBottom: 6 }}>
                    Reg. Mobile No <span style={{ color: accent }}>*</span>
                  </label>
                  <div style={{ display: "flex", gap: 8, marginBottom: 18 }}>
                    <select style={{
                      padding: "11px 6px", border: "1.5px solid #e2e8f0", borderRadius: 8,
                      fontSize: 13, fontWeight: 600, background: "#fff", outline: "none", color: "#14213d",
                    }}>
                      <option>+91</option>
                    </select>
                    <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)}
                      placeholder="Enter Reg. Mobile No" required maxLength={10}
                      style={{
                        flex: 1, padding: "11px 14px", border: "1.5px solid #e2e8f0", borderRadius: 8,
                        fontSize: 14, outline: "none", color: "#14213d",
                      }}
                      onFocus={(e) => e.target.style.borderColor = accent}
                      onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
                    />
                  </div>
                  <button type="submit" style={{
                    width: "100%", padding: "12px", background: accent, color: "#fff",
                    border: "none", borderRadius: 8, fontSize: 14, fontWeight: 800,
                    cursor: "pointer",
                    boxShadow: `0 8px 20px ${isWhatsapp ? "rgba(37,211,102,0.3)" : "rgba(237,28,36,0.3)"}`,
                  }}>
                    Send OTP
                  </button>
                  <div style={{ textAlign: "center", marginTop: 14 }}>
                    <span style={{ fontSize: 12, color: "#667085" }}>or </span>
                    <button type="button" onClick={() => openOtpModal(!isWhatsapp)}
                      style={{
                        color: isWhatsapp ? "var(--main-color)" : GREEN, fontWeight: 700, fontSize: 13,
                        background: "none", border: "none", cursor: "pointer",
                      }}>
                      {isWhatsapp ? "Login with OTP" : "Login with WhatsApp"}
                    </button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleVerifyOtp}>
                  <div style={{
                    background: bgLight, border: `1px solid ${borderLight}`, borderRadius: 10,
                    padding: "14px 16px", marginBottom: 14, textAlign: "center",
                  }}>
                    <div style={{ fontWeight: 700, fontSize: 13, color: "#14213d" }}>
                      OTP Sent to <span style={{ color: accent }}>+91 {mobile}</span>
                    </div>
                    <button type="button" onClick={() => setOtpSent(false)}
                      style={{ background: "none", border: "none", color: accent, fontWeight: 600, fontSize: 12, cursor: "pointer", marginTop: 4 }}>
                      Change Number
                    </button>
                  </div>
                  <p style={{ fontSize: 11, color: "#98a2b3", marginBottom: 14, textAlign: "center", lineHeight: 1.4 }}>
                    If there are any changes to your registered mobile number, please contact your institute.
                  </p>
                  <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP" required maxLength={6}
                    style={{
                      width: "100%", padding: "12px 14px", border: "1.5px solid #e2e8f0", borderRadius: 8,
                      fontSize: 18, outline: "none", textAlign: "center", letterSpacing: 10, fontWeight: 800,
                      marginBottom: 16, color: "#14213d",
                    }}
                    onFocus={(e) => e.target.style.borderColor = accent}
                    onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
                  />
                  <div style={{ display: "flex", gap: 10 }}>
                    <button type="submit" style={{
                      flex: 1, padding: "12px", background: accent, color: "#fff",
                      border: "none", borderRadius: 8, fontSize: 14, fontWeight: 800,
                      cursor: "pointer",
                      boxShadow: `0 8px 20px ${isWhatsapp ? "rgba(37,211,102,0.3)" : "rgba(237,28,36,0.3)"}`,
                    }}>
                      Submit
                    </button>
                    <button type="button" onClick={() => window.open("https://student.nsit.in/login.aspx", "_blank")} style={{
                      flex: 1, padding: "12px", background: "#fff", color: accent,
                      border: `2px solid ${accent}`, borderRadius: 8, fontSize: 14, fontWeight: 800,
                      cursor: "pointer",
                    }}>
                      Login
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
