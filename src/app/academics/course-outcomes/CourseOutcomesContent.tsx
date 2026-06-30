"use client";

import { AcademicsShell } from "../AcademicsShell";
import styles from "../academicsPages.module.css";

const MAIN = "var(--main-color)";
const MAIN_RGB = "247, 32, 57";

const branches = [
  { name: "Computer Science & Engineering", code: "CSE", pdf: "https://cdn.academist.app/Cloud/cdnclg/8/Website/Academics/CO_CSE.pdf" },
  { name: "Civil Engineering", code: "CE", pdf: "https://cdn.academist.app/Cloud/cdnclg/8/Website/Academics/CO_Civil.pdf" },
  { name: "Electrical & Electronics Engineering", code: "EEE", pdf: "https://cdn.academist.app/Cloud/cdnclg/8/Website/Academics/CO_EEE.pdf" },
  { name: "Electronics & Communication Engineering", code: "ECE", pdf: "https://cdn.academist.app/Cloud/cdnclg/8/Website/Academics/CO_ECE.pdf" },
  { name: "Mechanical Engineering", code: "ME", pdf: "https://cdn.academist.app/Cloud/cdnclg/8/Website/Academics/CO_ME.pdf" },
];

export default function CourseOutcomesContent() {
  return (
    <AcademicsShell activePath="/academics/course-outcomes" title="Course Outcomes">
      <div className={styles.introPanel}>
        <span className="d-inline-flex text-uppercase" style={{color: 'var(--main-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em'}}>Outcomes</span>
        <h2>Course Outcomes (CO)</h2>
      </div>

      <div style={{
        display: "flex", alignItems: "center", gap: 18, marginTop: 32, marginBottom: 32,
        padding: "24px 28px", borderRadius: 16,
        background: "linear-gradient(135deg, var(--main-color) 0%, var(--button-bg) 50%, #991b1b 100%)",
        boxShadow: "0 8px 28px rgba(247,32,57,0.25)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: -30, right: -30, width: 120, height: 120, borderRadius: "50%",
          background: "rgba(255,255,255,0.06)", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -40, left: 80, width: 160, height: 160, borderRadius: "50%",
          background: "rgba(255,255,255,0.04)", pointerEvents: "none",
        }} />
        <img src="/images/logo-opt-v3.png" alt="NSIT" style={{
          width: 48, height: 48, borderRadius: 12,
          background: "rgba(255,255,255,0.18)", padding: 6, flexShrink: 0,
        }} />
        <div>
          <strong style={{ fontSize: 18, color: "#fff", display: "block", lineHeight: 1.3 }}>Under Graduate Courses</strong>
          <p style={{ margin: "4px 0 0", fontSize: 13, color: "rgba(255,255,255,.75)", fontWeight: 600 }}>
            Select a branch to view its Course Outcomes document
          </p>
        </div>
      </div>

      <div style={{ display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}>
        {branches.map((b) => (
          <a
            href={b.pdf}
            target="_blank"
            rel="noreferrer"
            key={b.code}
            style={{
              display: "block", textDecoration: "none", borderRadius: 14,
              padding: "24px 20px", background: `rgba(${MAIN_RGB}, 0.04)`,
              border: "2px solid transparent", transition: "all .25s ease",
              position: "relative", overflow: "hidden",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = MAIN;
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = `0 12px 28px -8px rgba(${MAIN_RGB}, 0.5)`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "transparent";
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{
              width: 48, height: 48, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center",
              background: MAIN, color: "#fff", fontSize: 14, fontWeight: 950, marginBottom: 14,
              boxShadow: `0 4px 12px rgba(${MAIN_RGB}, 0.4)`,
            }}>
              {b.code}
            </div>
            <h3 style={{ margin: 0, fontSize: 15, fontWeight: 850, color: "var(--heading-color)", lineHeight: 1.3 }}>
              B.Tech - {b.name}
            </h3>
            <p style={{ margin: "8px 0 0", fontSize: 13, color: "var(--para-color)", fontWeight: 600 }}>
              View Course Outcomes &rarr;
            </p>
            <div style={{
              position: "absolute", top: -20, right: -20, width: 80, height: 80, borderRadius: "50%",
              background: `rgba(${MAIN_RGB}, 0.05)`, pointerEvents: "none",
            }} />
          </a>
        ))}
      </div>
    </AcademicsShell>
  );
}
