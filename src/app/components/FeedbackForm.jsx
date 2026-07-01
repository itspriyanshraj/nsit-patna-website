"use client";

import { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";

const departments = [
  "--Choose option--",
  "B.Tech (Civil Engineering)",
  "B.Tech (Computer Science & Engineering)",
  "B.Tech (Electronics & Communication Engineering)",
  "B.Tech (Electrical & Electronics Engineering)",
  "B.Tech (Mechanical Engineering)",
  "Diploma (Civil Engineering)",
  "Diploma (Electrical & Electronics Engineering)",
  "Diploma (Mechanical Engineering)",
  "BCA",
  "BBA",
];

const semesters = [
  "--Choose option--",
  "1st Semester",
  "2nd Semester",
  "3rd Semester",
  "4th Semester",
  "5th Semester",
  "6th Semester",
  "7th Semester",
  "8th Semester",
];

const academicYears = [
  "--Choose option--",
  "2020-2023",
  "2020-2024",
  "2021-2025",
  "2021-2024",
  "2022-2025",
  "2022-2026",
  "2023-2026",
  "2023-2027",
  "2024-2027",
  "2024-2028",
  "2025-2029",
  "2025-2028",
  "2026-2029",
  "2026-2030",
];

const ratings = [
  { label: "Excellent", color: "#22c55e", bg: "#f0fdf4", icon: "★" },
  { label: "Very Good", color: "#14b8a6", bg: "#f0fdfa", icon: "★" },
  { label: "Good", color: "#3b82f6", bg: "#eff6ff", icon: "★" },
  { label: "Average", color: "#f59e0b", bg: "#fffbeb", icon: "★" },
  { label: "Poor", color: "#ef4444", bg: "#fef2f2", icon: "★" },
];

const selectStyle = {
  width: "100%", minHeight: 48, padding: "0 16px",
  border: "1px solid var(--border-color)", borderRadius: 8,
  font: "inherit", fontSize: 14, fontWeight: 600,
  color: "#14213d", background: "#f7f9fc", boxSizing: "border-box",
  appearance: "none",
  backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 14px center",
};

const inputStyle = {
  ...selectStyle, background: "#fff",
};

const labelStyle = {
  fontSize: 14, fontWeight: 600, color: "#14213d",
  marginBottom: 6, display: "block",
};

export { departments, semesters, academicYears, ratings, selectStyle, inputStyle, labelStyle };

export default function FeedbackForm({
  title,
  breadcrumbTitle,
  fields,
  questions,
  extraRatingOptions,
}) {
  const [answers, setAnswers] = useState({});

  const handleRating = (qIndex, value) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: value }));
  };

  return (
    <main style={{ color: "var(--heading-color)", background: "var(--bg-color)" }}>
      <style>{`
        @media (max-width: 600px) {
          .feedback-row { grid-template-columns: 1fr !important; }
          .rating-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 400px) {
          .rating-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
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
          }}>{title}</h1>
          <Breadcrumbs section="Feedback" title={breadcrumbTitle || title} />
        </div>
      </section>

      <section style={{
        width: "min(900px, calc(100% - 48px))",
        margin: "0 auto", padding: "60px 0 92px",
      }}>
        <a href="/feedback" style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          color: "var(--main-color)", fontSize: 13, fontWeight: 950,
          textTransform: "uppercase", letterSpacing: "0.05em",
          textDecoration: "none", marginBottom: 24,
        }}>
          <span style={{ fontSize: 16 }}>&larr;</span> Back to Feedback Types
        </a>

        <div style={{
          background: "#fff", border: "1px solid var(--border-color)",
          borderRadius: 12, padding: "clamp(28px, 3.5vw, 44px)",
          boxShadow: "0 18px 42px rgba(23, 32, 51, 0.08)",
        }}>
          <form action="mailto:info@nsit.in" method="post" encType="text/plain" style={{ display: "grid", gap: 22 }}>
            {fields.map((field, i) => {
              if (field.type === "row") {
                return (
                  <div key={i} className="feedback-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                    {field.items.map((item, j) => (
                      <div key={j}>
                        <label style={labelStyle}>{item.label} {item.required && <span style={{ color: "var(--main-color)" }}>*</span>}</label>
                        {item.type === "select" ? (
                          <select name={item.name} style={selectStyle} required={item.required}>
                            {item.options.map((o) => (
                              <option key={o} value={o === "--Choose option--" ? "" : o} disabled={o === "--Choose option--"}>{o}</option>
                            ))}
                          </select>
                        ) : (
                          <input type={item.type || "text"} name={item.name} style={inputStyle} placeholder={item.placeholder} required={item.required} />
                        )}
                      </div>
                    ))}
                  </div>
                );
              }
              if (field.type === "select") {
                return (
                  <div key={i}>
                    <label style={labelStyle}>{field.label} {field.required && <span style={{ color: "var(--main-color)" }}>*</span>}</label>
                    <select name={field.name} style={selectStyle} required={field.required}>
                      {field.options.map((o) => (
                        <option key={o} value={o === "--Choose option--" ? "" : o} disabled={o === "--Choose option--"}>{o}</option>
                      ))}
                    </select>
                  </div>
                );
              }
              if (field.type === "textarea") {
                return (
                  <div key={i}>
                    <label style={labelStyle}>{field.label}</label>
                    <textarea name={field.name} rows={4} style={{ ...selectStyle, background: "#fff", padding: "12px 16px", resize: "vertical" }} placeholder={field.placeholder} />
                  </div>
                );
              }
              return (
                <div key={i}>
                  <label style={labelStyle}>{field.label} {field.required && <span style={{ color: "var(--main-color)" }}>*</span>}</label>
                  <input type={field.type || "text"} name={field.name} style={inputStyle} placeholder={field.placeholder} required={field.required} />
                </div>
              );
            })}

            <div style={{ marginTop: 8 }}>
              {questions.map((q, qIndex) => {
                const options = q.options || (extraRatingOptions && q.useExtra ? extraRatingOptions : null) || ratings;
                return (
                  <div key={qIndex} style={{
                    padding: "20px 0",
                    borderBottom: qIndex < questions.length - 1 ? "1px solid var(--border-color)" : "none",
                  }}>
                    <p style={{
                      margin: 0, fontSize: 15, fontWeight: 600,
                      color: "#14213d", lineHeight: 1.5, marginBottom: 14,
                    }}>{`${qIndex + 1}. ${q.text}`}</p>
                    <div className="rating-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12 }}>
                      {options.map((r) => {
                        const isSelected = answers[qIndex] === r.label;
                        const c = r.color || "#3b82f6";
                        const bg = r.bg || "#eff6ff";
                        return (
                          <label
                            key={r.label}
                            style={{
                              display: "flex", flexDirection: "column", alignItems: "center",
                              padding: "18px 10px", borderRadius: 14, textAlign: "center",
                              background: isSelected ? c : bg,
                              border: `2px solid ${isSelected ? c : "transparent"}`,
                              cursor: "pointer", transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
                              position: "relative", overflow: "hidden",
                              boxShadow: isSelected ? `0 8px 24px -4px ${c}55` : "none",
                              transform: isSelected ? "scale(1.05)" : "scale(1)",
                            }}
                            onMouseEnter={e => {
                              if (!isSelected) {
                                e.currentTarget.style.borderColor = c;
                                e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
                                e.currentTarget.style.boxShadow = `0 10px 28px -6px ${c}44`;
                              }
                            }}
                            onMouseLeave={e => {
                              if (!isSelected) {
                                e.currentTarget.style.borderColor = "transparent";
                                e.currentTarget.style.transform = "scale(1)";
                                e.currentTarget.style.boxShadow = "none";
                              }
                            }}
                          >
                            <input
                              type="radio"
                              name={`question_${qIndex}`}
                              value={r.label}
                              checked={isSelected}
                              onChange={() => handleRating(qIndex, r.label)}
                              style={{ display: "none" }}
                              required
                            />
                            <div style={{
                              width: 32, height: 32, borderRadius: "50%",
                              display: "flex", alignItems: "center", justifyContent: "center",
                              fontSize: 18, marginBottom: 8,
                              background: isSelected ? "rgba(255,255,255,0.3)" : `${c}20`,
                              color: isSelected ? "#fff" : c,
                              transition: "all 0.3s ease",
                            }}>
                              {r.icon || "★"}
                            </div>
                            <span style={{
                              fontSize: 12, fontWeight: 600, lineHeight: 1.3,
                              color: isSelected ? "#fff" : "var(--heading-color)",
                            }}>{r.label}</span>
                            {isSelected && (
                              <>
                                <div style={{
                                  position: "absolute", top: -20, right: -20,
                                  width: 60, height: 60, borderRadius: "50%",
                                  background: "rgba(255,255,255,0.15)", pointerEvents: "none",
                                }} />
                                <div style={{
                                  position: "absolute", bottom: -15, left: -15,
                                  width: 45, height: 45, borderRadius: "50%",
                                  background: "rgba(255,255,255,0.1)", pointerEvents: "none",
                                }} />
                              </>
                            )}
                          </label>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: 4 }}>
              <button type="submit" style={{
                background: "var(--main-color)", color: "#fff",
                padding: "14px 44px", fontWeight: 950, border: 0,
                borderRadius: 8, fontSize: 14, cursor: "pointer",
                boxShadow: "0 10px 24px rgba(247, 32, 57, 0.22)",
                transition: "all 0.2s ease",
              }}>Submit</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
