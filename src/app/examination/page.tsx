import { AcademicsShell } from "../academics/AcademicsShell";
import styles from "../academics/academicsPages.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Examination Schedule & Results",
  description: "Examination schedule, results, and academic calendar information for students at NSIT Patna.",
};

const academicsLinks = [
  ["Courses", "/academics/courses"],
  ["Syllabus", "/academics/syllabus"],
  ["Examination", "/examination"],
  ["Academic Calendar", "/academic_calender"],
  ["Course Outcomes", "/courseoutcomes"],
  ["Activity Reports", "/activity-reports"],
  ["Student's Counsellor", "/academics/students-counsellor"],
  ["NAAC", "/naac"],
  ["DVV", "/dvv"],
  ["AQAR", "/aqar"],
];

export default function ExaminationPage() {
  return (
    <AcademicsShell activePath="/examination" title="Examination">
      <div style={{
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        padding: "80px 20px", textAlign: "center",
      }}>
        <span style={{
          fontSize: 48, fontWeight: 950, color: "var(--main-color)", lineHeight: 1, marginBottom: 16,
        }}>
          &#8593;
        </span>
        <h2 style={{ fontSize: 32, fontWeight: 950, color: "var(--heading-color)", margin: 0 }}>
          Coming Soon
        </h2>
        <p style={{ marginTop: 10, fontSize: 15, color: "var(--para-color)", fontWeight: 600, maxWidth: 420 }}>
          Examination section is under development. Details will be available shortly.
        </p>
      </div>
    </AcademicsShell>
  );
}
