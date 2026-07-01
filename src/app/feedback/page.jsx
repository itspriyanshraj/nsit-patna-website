"use client";

import { HiArrowRight, HiAcademicCap, HiUsers, HiUserGroup, HiClipboardDocumentCheck } from "react-icons/hi2";
import Breadcrumbs from "../components/Breadcrumbs";

const feedbackTypes = [
  { title: "Students Feedback", href: "/feedback/student", icon: <HiAcademicCap /> },
  { title: "Alumni Feedback", href: "/feedback/alumni", icon: <HiUsers /> },
  { title: "Parents Feedback", href: "/feedback/parents", icon: <HiUserGroup /> },
  { title: "Teachers Feedback", href: "/feedback/teacher", icon: <HiUserGroup /> },
  { title: "Students Satisfaction Survey Feedback", href: "/feedback/satisfaction-survey", icon: <HiClipboardDocumentCheck /> },
];

export default function FeedbackPage() {
  return (
    <main style={{ color: "var(--heading-color)", background: "var(--bg-color)" }}>
      <section style={{
        position: "relative", minHeight: "auto", overflow: "hidden",
        color: "var(--heading-color)",
        background: "linear-gradient(135deg, rgba(247, 32, 57, 0.08), transparent 42%), linear-gradient(180deg, #ffffff 0%, #f6f8fb 100%)",
        borderBottom: "1px solid var(--border-color)",
      }}>
        <div style={{
          position: "relative", zIndex: 1,
          width: "min(1320px, calc(100% - 48px))",
          margin: "0 auto", padding: "42px 0 48px",
        }}>
          <h1 className="mb-2" style={{
            maxWidth: 900, margin: "14px 0 0",
            color: "#071225", fontSize: "clamp(38px, 5vw, 64px)",
            lineHeight: 1.02, letterSpacing: 0,
          }}>Feedback</h1>
          <Breadcrumbs section="Feedback" title="Feedback" />
        </div>
      </section>

      <section style={{
        width: "min(1320px, calc(100% - 48px))",
        margin: "0 auto", padding: "60px 0 92px",
      }}>
        <div style={{ marginBottom: 36 }}>
          <span style={{
            color: "var(--main-color)", fontSize: 12, fontWeight: 950,
            letterSpacing: "0.08em", textTransform: "uppercase",
          }}>Feedback Forms</span>
          <h2 style={{
            margin: "8px 0 0", color: "#14213d",
            fontSize: "clamp(26px, 3vw, 40px)", lineHeight: 1.15,
          }}>Choose a Feedback Type</h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 18,
        }}>
          {feedbackTypes.map((item) => (
            <a
              key={item.title}
              href={item.href}
              style={{
                display: "block", textDecoration: "none", borderRadius: 14,
                padding: "28px 22px", background: "rgba(247, 32, 57, 0.04)",
                border: "2px solid transparent",
                transition: "all .25s ease",
                position: "relative", overflow: "hidden",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "var(--main-color)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 28px -8px rgba(247, 32, 57, 0.5)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: 12,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "var(--main-color)", color: "#fff",
                fontSize: 22, marginBottom: 18,
                boxShadow: "0 4px 12px rgba(247, 32, 57, 0.4)",
              }}>
                {item.icon}
              </div>
              <h3 style={{
                margin: 0, fontSize: 16, fontWeight: 600,
                color: "var(--heading-color)", lineHeight: 1.3,
              }}>{item.title}</h3>
              <div style={{
                marginTop: 16, display: "flex", alignItems: "center",
                gap: 8, color: "var(--main-color)", fontSize: 13,
                fontWeight: 600, textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}>
                <span>Give Feedback</span>
                <HiArrowRight style={{ fontSize: 12 }} />
              </div>
              <div style={{
                position: "absolute", top: -20, right: -20,
                width: 80, height: 80, borderRadius: "50%",
                background: "rgba(247, 32, 57, 0.05)", pointerEvents: "none",
              }} />
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
