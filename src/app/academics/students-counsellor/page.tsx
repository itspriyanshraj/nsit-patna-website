import { AcademicsShell } from "../AcademicsShell";
import styles from "../academicsPages.module.css";
import type { Metadata } from "next";
import { FaFilePdf } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Student's Counsellor",
  description: "Find your academic counsellor at NSIT Patna. Contact details for B.Tech, Diploma, BCA, and BBA program counsellors.",
};

const counsellors = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Chief Counsellor",
    programs: "B.Tech (All Branches)",
    contact: "rajesh.kumar@nsit.in",
  },
  {
    name: "Ms. Sunita Sharma",
    role: "Academic Counsellor",
    programs: "Diploma (All Branches)",
    contact: "sunita.sharma@nsit.in",
  },
  {
    name: "Mr. Amit Singh",
    role: "Career Counsellor",
    programs: "BCA & BBA",
    contact: "amit.singh@nsit.in",
  },
  {
    name: "Dr. Priya Verma",
    role: "Personal Counsellor",
    programs: "All Programs (Girl Students)",
    contact: "priya.verma@nsit.in",
  },
];

const counsellorDocs = [
  ["Student's Counsellor 2026", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Academics/StudentCounselor2026.pdf"],
  ["Anti-Ragging Committee", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Academics/AntiRaggingCommittee2026.pdf"],
  ["Grievance Redressal Committee", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Academics/GRCommittee2026.pdf"],
  ["Women's Cell", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Academics/womencell2026.pdf"],
];

export default function StudentsCounsellorPage() {
  return (
    <AcademicsShell activePath="/academics/students-counsellor" title="Student's Counsellor">
      <div className={styles.introPanel}>
        <span className="d-inline-flex text-uppercase" style={{color: 'var(--main-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em'}}>Guidance</span>
        <h2>Student&apos;s Counsellor</h2>
        <p>
          The Student Counselling Cell at NSIT provides guidance and support to students
          on academic, personal, and career-related matters. The counsellors help students
          navigate challenges, make informed decisions, and achieve their full potential
          during their time at the institute.
        </p>
      </div>

      <div className={styles.panel} style={{ padding: "clamp(26px, 4vw, 44px)" }}>
        <span className="d-inline-flex text-uppercase" style={{color: 'var(--main-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em'}}>Our Counsellors</span>
        <h2>Meet Your Counsellors</h2>
        <div className={styles.programGrid}>
          {counsellors.map((c) => (
            <div className={styles.advisorCard} key={c.name}>
              <h3>{c.name}</h3>
              <p>{c.role}</p>
              <p style={{ marginTop: 8, fontSize: 13, fontWeight: 700, color: "var(--main-color)" }}>
                {c.programs}
              </p>
              <p style={{ marginTop: 4, fontSize: 13, fontWeight: 600 }}>
                {c.contact}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.panel} style={{ padding: "clamp(26px, 4vw, 44px)" }}>
        <span className="d-inline-flex text-uppercase" style={{color: 'var(--main-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em'}}>Services</span>
        <h2>Counselling Services</h2>
        <p>
          The cell offers a range of services including academic guidance, career
          counselling, personal counselling, stress management, and grievance redressal.
          Students are encouraged to reach out to their respective counsellors during
          designated hours. All counselling sessions are confidential.
        </p>
        <div className={styles.docs}>
          {counsellorDocs.map(([label, href]) => (
            <a href={href} target="_blank" rel="noreferrer" className={styles.docCard} key={label}>
              <span className={styles.docBadge}>
                <FaFilePdf />
                <i>PDF</i>
              </span>
              <span className={styles.docBody}>
                <strong>{label}</strong>
                <small>
                  <span className={styles.downloadIcon}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  </span>
                  Open Document
                </small>
              </span>
            </a>
          ))}
        </div>
      </div>
    </AcademicsShell>
  );
}
