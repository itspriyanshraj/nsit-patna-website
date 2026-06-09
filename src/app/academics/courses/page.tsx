import { AcademicsShell } from "../AcademicsShell";
import styles from "../academicsPages.module.css";

const programs = [
  {
    title: "B.Tech",
    duration: "4 Years (8 Semesters)",
    branches: [
      "Computer Science & Engineering",
      "Civil Engineering",
      "Electrical & Electronics Engineering",
      "Electronics & Communication Engineering",
      "Mechanical Engineering",
      "Applied Science",
    ],
  },
  {
    title: "Diploma",
    duration: "3 Years (6 Semesters)",
    branches: [
      "Civil Engineering",
      "Electrical & Electronics Engineering",
      "Mechanical Engineering",
    ],
  },
  {
    title: "BCA",
    duration: "3 Years (6 Semesters)",
    branches: ["Bachelor of Computer Applications"],
  },
  {
    title: "BBA",
    duration: "3 Years (6 Semesters)",
    branches: ["Bachelor of Business Administration"],
  },
];

export default function CoursesPage() {
  return (
    <AcademicsShell activePath="/academics/courses" title="Courses">
      <div className={styles.introPanel}>
        <span className="d-inline-flex text-uppercase" style={{color: 'var(--main-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em'}}>Academic Programs</span>
        <h2>Programs Offered at NSIT</h2>
        <p>
          Netaji Subhas Institute of Technology offers a diverse range of undergraduate and
          diploma programs designed to equip students with the knowledge, skills, and
          competencies required to excel in their chosen fields. All programs follow the
          semester system and are affiliated with Aryabhatta Knowledge University (AKU) /
          Bihar Engineering University (BEU) and approved by AICTE.
        </p>
      </div>

      <div className={styles.programGrid}>
        {programs.map((p) => (
          <div className={styles.programCard} key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.duration}</p>
            <ul>
              {p.branches.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.panel} style={{ padding: "clamp(26px, 4vw, 44px)" }}>
        <span className="d-inline-flex text-uppercase" style={{color: 'var(--main-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em'}}>Intake & Eligibility</span>
        <h2>Admission Criteria</h2>
        <p>
          Admission to B.Tech programs is through BCECE / JEE Main counselling conducted
          by the competent authority. Diploma admissions are through BCECE board
          counselling. BCA and BBA admissions are based on merit as per university norms.
          Eligible candidates must have passed 10+2 with relevant subjects from a
          recognised board.
        </p>
      </div>
    </AcademicsShell>
  );
}
