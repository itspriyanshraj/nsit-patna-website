"use client";

import { useState } from "react";
import { FaUser, FaLock, FaWhatsapp, FaMobileScreen } from "react-icons/fa6";

const GREEN = "#25D366";

export default function TeacherLoginContent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [otpMethod, setOtpMethod] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [isWhatsapp, setIsWhatsapp] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    window.open("https://student.nsit.in/login.aspx", "_blank");
  };

  const handleOtpClick = (method) => {
    setIsWhatsapp(method === "whatsapp");
    setOtpMethod(method);
    setShowOtp(true);
    setOtpSent(false);
    setOtp("");
  };

  const handleSendOtp = () => {
    setOtpSent(true);
  };

  const handleVerifyOtp = () => {
    alert("OTP Verified Successfully!");
    setShowOtp(false);
    setOtp("");
    setOtpSent(false);
    setMobile("");
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #0f0f1a 0%, #1a0a0a 50%, #0d0d0d 100%)",
      backgroundImage: "url('/images/login-bg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: 20,
      position: "relative",
    }}>
      <div style={{
        position: "absolute", inset: 0, background: "rgba(0,0,0,0.7)", pointerEvents: "none",
      }} />
      <div style={{
        position: "relative", zIndex: 1, width: "100%", maxWidth: 440,
      }}>
        <div style={{
          background: "#fff", borderRadius: 20, padding: "40px 32px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        }}>
          <div className="text-center mb-4">
            <img src="/images/logo-opt.png" alt="NSIT" width="130" style={{ marginBottom: 12 }} />
            <h3 style={{ fontWeight: 850, fontSize: 22, color: "#1a1a2e" }}>Teacher Login</h3>
            <p style={{ color: "#666", fontSize: 14, margin: "4px 0 0" }}>
              Sign in to access the teacher portal
            </p>
          </div>

          <form onSubmit={handleSignIn}>
            <div style={{ marginBottom: 18 }}>
              <label style={{ display: "block", marginBottom: 6, fontWeight: 700, fontSize: 13, color: "#333" }}>
                <FaUser style={{ marginRight: 6, color: "var(--main-color)" }} />
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{
                  width: "100%", padding: "12px 16px", borderRadius: 12, border: "2px solid #e0e0e0",
                  fontSize: 14, outline: "none", transition: "border-color .2s",
                  background: "#f8f9fa",
                }}
                onFocus={(e) => e.target.style.borderColor = "var(--main-color)"}
                onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
              />
            </div>

            <div style={{ marginBottom: 24 }}>
              <label style={{ display: "block", marginBottom: 6, fontWeight: 700, fontSize: 13, color: "#333" }}>
                <FaLock style={{ marginRight: 6, color: "var(--main-color)" }} />
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: "100%", padding: "12px 16px", borderRadius: 12, border: "2px solid #e0e0e0",
                  fontSize: 14, outline: "none", transition: "border-color .2s",
                  background: "#f8f9fa",
                }}
                onFocus={(e) => e.target.style.borderColor = "var(--main-color)"}
                onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%", padding: "14px", borderRadius: 12, border: "none",
                background: "var(--main-color)", color: "#fff", fontSize: 16, fontWeight: 850,
                cursor: "pointer", transition: "opacity .2s",
              }}
              onMouseEnter={(e) => e.target.style.opacity = "0.9"}
              onMouseLeave={(e) => e.target.style.opacity = "1"}
            >
              Sign In
            </button>
          </form>

          <div style={{ marginTop: 28 }}>
            <p style={{ textAlign: "center", color: "#888", fontSize: 13, fontWeight: 600, marginBottom: 14 }}>
              Get OTP on
            </p>
            <div className="row g-3">
              <div className="col-6">
                <button
                  onClick={() => handleOtpClick("sms")}
                  style={{
                    width: "100%", padding: "12px", borderRadius: 12,
                    border: "2px solid var(--main-color)", background: "transparent",
                    color: "var(--main-color)", fontWeight: 700, fontSize: 14,
                    cursor: "pointer", display: "flex", alignItems: "center",
                    justifyContent: "center", gap: 8, transition: "all .2s",
                  }}
                  onMouseEnter={(e) => { e.target.style.background = "var(--main-color)"; e.target.style.color = "#fff"; }}
                  onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.color = "var(--main-color)"; }}
                >
                  <FaMobileScreen /> SMS
                </button>
              </div>
              <div className="col-6">
                <button
                  onClick={() => handleOtpClick("whatsapp")}
                  style={{
                    width: "100%", padding: "12px", borderRadius: 12,
                    border: `2px solid ${GREEN}`, background: "transparent",
                    color: GREEN, fontWeight: 700, fontSize: 14,
                    cursor: "pointer", display: "flex", alignItems: "center",
                    justifyContent: "center", gap: 8, transition: "all .2s",
                  }}
                  onMouseEnter={(e) => { e.target.style.background = GREEN; e.target.style.color = "#fff"; }}
                  onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.color = GREEN; }}
                >
                  <FaWhatsapp /> WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showOtp && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            display: "flex", alignItems: "flex-start", justifyContent: "center",
            paddingTop: "10vh",
            background: "rgba(0,0,0,0.6)",
            animation: "fadeIn 0.2s ease",
          }}
          onClick={() => setShowOtp(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff", borderRadius: 20, padding: "36px 32px",
              maxWidth: 400, width: "90%",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              animation: "slideDown 0.3s ease",
              borderTop: `4px solid ${isWhatsapp ? GREEN : "var(--main-color)"}`,
            }}
          >
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <div style={{
                width: 56, height: 56, borderRadius: "50%",
                background: isWhatsapp ? GREEN : "var(--main-color)",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 12px", color: "#fff", fontSize: 24,
              }}>
                {isWhatsapp ? <FaWhatsapp /> : <FaMobileScreen />}
              </div>
              <h4 style={{ fontWeight: 850, fontSize: 18, color: "#1a1a2e", margin: 0 }}>
                {isWhatsapp ? "WhatsApp OTP" : "SMS OTP"}
              </h4>
              <p style={{ color: "#666", fontSize: 13, margin: "4px 0 0" }}>
                Enter your registered mobile number
              </p>
            </div>

            {!otpSent ? (
              <>
                <div style={{ marginBottom: 18 }}>
                  <label style={{ display: "block", marginBottom: 6, fontWeight: 700, fontSize: 13, color: "#333" }}>
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter 10-digit mobile number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    maxLength={10}
                    style={{
                      width: "100%", padding: "12px 16px", borderRadius: 12, border: "2px solid #e0e0e0",
                      fontSize: 14, outline: "none", background: "#f8f9fa",
                    }}
                    onFocus={(e) => e.target.style.borderColor = isWhatsapp ? GREEN : "var(--main-color)"}
                    onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
                  />
                </div>
                <button
                  onClick={handleSendOtp}
                  style={{
                    width: "100%", padding: "14px", borderRadius: 12, border: "none",
                    background: isWhatsapp ? GREEN : "var(--main-color)", color: "#fff",
                    fontSize: 15, fontWeight: 850, cursor: "pointer",
                  }}
                >
                  Send OTP
                </button>
              </>
            ) : (
              <>
                <div style={{ marginBottom: 18 }}>
                  <label style={{ display: "block", marginBottom: 6, fontWeight: 700, fontSize: 13, color: "#333" }}>
                    Enter OTP
                  </label>
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={6}
                    style={{
                      width: "100%", padding: "12px 16px", borderRadius: 12, border: "2px solid #e0e0e0",
                      fontSize: 14, outline: "none", background: "#f8f9fa",
                      textAlign: "center", letterSpacing: 8,
                    }}
                    onFocus={(e) => e.target.style.borderColor = isWhatsapp ? GREEN : "var(--main-color)"}
                    onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
                  />
                </div>
                <button
                  onClick={handleVerifyOtp}
                  style={{
                    width: "100%", padding: "14px", borderRadius: 12, border: "none",
                    background: isWhatsapp ? GREEN : "var(--main-color)", color: "#fff",
                    fontSize: 15, fontWeight: 850, cursor: "pointer",
                  }}
                >
                  Verify OTP
                </button>
              </>
            )}

            <button
              onClick={() => setShowOtp(false)}
              style={{
                width: "100%", padding: "12px", borderRadius: 12, border: "2px solid #e0e0e0",
                background: "transparent", color: "#666", fontSize: 14, fontWeight: 700,
                cursor: "pointer", marginTop: 10,
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
