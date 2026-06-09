"use client";
import { AcademicsShell } from "../AcademicsShell";
import styles from "../academicsPages.module.css";

const activityDocs = [
  ["KRUST 2025 - Technical and Cultural Fest - 25 & 26 April 2025", "https://cdn.academist.app/Cloud/8/website/documents/KRUST2025.pdf"],
  ["Career Guidance Session 2026", "https://cdn.academist.app/Cloud/8/website/documents/CGSNActivity.pdf"],
  ["Student's Induction Program 2025", "https://cdn.academist.app/Cloud/8/website/documents/Student-Induction-Program-2025.pdf"],
  ["1 Day AI App Development Hackathon", "https://cdn.academist.app/Cloud/8/website/documents/1-Day-AI-App-Development-Hackathon.pdf"],
  ["Bootcamp on 3D Printing and Additive Manufacturing Technology", "https://cdn.academist.app/Cloud/8/website/documents/Bootcamp-on-3D-Printing-and-Additive-Manufacturing-Technology.pdf"],
  ["National Sports Day Celebration 2025", "https://cdn.academist.app/Cloud/8/website/documents/National-Sports-Day-Celebration-2025.pdf"],
  ["A 7-days Workshop on AUTOCAD-2025", "https://cdn.academist.app/Cloud/cdnclg/8/website/Notice/autocadnsit2026.pdf"],
  ["National Science Day - 28 Feb 2026", "https://cdn.academist.app/Cloud/cdnclg/8/website/Notice/NSD2026.pdf"],
  ["Turning Blueprints into Landmark - An Expert Talk Series 2026 by Dept. of Civil Engineering", "https://cdn.academist.app/Cloud/cdnclg/8/website/Notice/TBL2026.pdf"],
  ["Industrial Visit of B.Tech students to Sone (Indrapuri) Barrage under Water Resource and Irrigation Department, Rohtas, Bihar", "https://cdn.academist.app/Cloud/8/website/documents/IndustrialVisitBtech.pdf"],
  ['Faculty Development Program on "Semiconductor Devices & Layout Design" --- Date 23 Feb 2026 to 26 Feb 2026', "https://cdn.academist.app/Cloud/8/website/documents/FDPSEMICONDUCTOR2026.pdf"],
  ["Seminar on Career Opportunity in Python Programming, Embedded Systems, and Internet of Things (IoT)", "https://cdn.academist.app/Cloud/8/website/documents/PythonSeminar26.pdf"],
];

const categories = ["Fest", "Career", "Induction", "Hackathon", "Workshop", "Sports", "Training", "Science", "Expert Talk", "Industrial Visit", "FDP", "Seminar"];

export default function ActivityReportsPage() {
  return (
    <AcademicsShell activePath="/academics/activity-reports" title="Activity Reports">
      <div className={styles.introPanel}>
        <span className="d-inline-flex text-uppercase" style={{color: 'var(--main-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em'}}>Reports</span>
        <h2>Activity Reports</h2>
      </div>

      <div className={styles.docs} style={{ "--cols": 2 } as React.CSSProperties}>
        {activityDocs.map(([label, href], i) => (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            key={i}
            className={styles.docCard}
            style={{ minHeight: 240 }}
          >
            <span className={styles.docBadge}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
              </svg>
              {categories[i]}
            </span>
            <span className={styles.docBody} style={{ paddingBottom: 18 }}>
              <strong style={{ WebkitLineClamp: 4 }}>{label}</strong>
              <small>
                <span className={styles.downloadIcon}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                </span>
                Download PDF
              </small>
            </span>
          </a>
        ))}
      </div>
    </AcademicsShell>
  );
}