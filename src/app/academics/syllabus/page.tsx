import { AcademicsShell, DocumentGrid } from "../AcademicsShell";
import styles from "../academicsPages.module.css";

const syllabusDocs = [
  ["B.Tech CSE Syllabus", "https://www.nsit.in/Content/assets/c_images/Syllabus/BTech_CSE_Syllabus.pdf"],
  ["B.Tech Civil Syllabus", "https://www.nsit.in/Content/assets/c_images/Syllabus/BTech_Civil_Syllabus.pdf"],
  ["B.Tech EEE Syllabus", "https://www.nsit.in/Content/assets/c_images/Syllabus/BTech_EEE_Syllabus.pdf"],
  ["B.Tech ECE Syllabus", "https://www.nsit.in/Content/assets/c_images/Syllabus/BTech_ECE_Syllabus.pdf"],
  ["B.Tech ME Syllabus", "https://www.nsit.in/Content/assets/c_images/Syllabus/BTech_ME_Syllabus.pdf"],
  ["B.Tech Applied Science Syllabus", "https://www.nsit.in/Content/assets/c_images/Syllabus/BTech_AS_Syllabus.pdf"],
  ["Diploma Civil Syllabus", "https://www.nsit.in/Content/assets/c_images/Syllabus/Diploma_Civil_Syllabus.pdf"],
  ["Diploma EEE Syllabus", "https://www.nsit.in/Content/assets/c_images/Syllabus/Diploma_EEE_Syllabus.pdf"],
  ["Diploma ME Syllabus", "https://www.nsit.in/Content/assets/c_images/Syllabus/Diploma_ME_Syllabus.pdf"],
  ["BCA Syllabus", "https://www.nsit.in/Content/assets/c_images/Syllabus/BCA_Syllabus.pdf"],
  ["BBA Syllabus", "https://www.nsit.in/Content/assets/c_images/Syllabus/BBA_Syllabus.pdf"],
];

export default function SyllabusPage() {
  return (
    <AcademicsShell activePath="/academics/syllabus" title="Syllabus">
      <div className={styles.introPanel}>
        <span className="d-inline-flex text-uppercase" style={{color: 'var(--main-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em'}}>Curriculum</span>
        <h2>Syllabus & Scheme</h2>
        <p>
          The syllabus for all programs is prescribed by the affiliating university —
          Aryabhatta Knowledge University (AKU) / Bihar Engineering University (BEU).
          The curriculum is designed to meet industry standards and includes theory,
          practicals, projects, and elective courses. Click on the links below to
          download the detailed syllabus for each program.
        </p>
      </div>

      <DocumentGrid documents={syllabusDocs} />

      <div className={styles.tablePanel}>
        <table>
          <thead>
            <tr>
              <th>Program</th>
              <th>Scheme</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>B.Tech (All Branches)</td>
              <td>AKU / BEU Scheme 2022 onwards</td>
              <td><a href="https://www.nsit.in/Content/assets/c_images/Syllabus/BTech_Common_Scheme.pdf" target="_blank" rel="noreferrer">View Scheme</a></td>
            </tr>
            <tr>
              <td>Diploma (All Branches)</td>
              <td>SBTE Scheme</td>
              <td><a href="https://www.nsit.in/Content/assets/c_images/Syllabus/Diploma_Common_Scheme.pdf" target="_blank" rel="noreferrer">View Scheme</a></td>
            </tr>
            <tr>
              <td>BCA</td>
              <td>AKU Scheme</td>
              <td><a href="https://www.nsit.in/Content/assets/c_images/Syllabus/BCA_Scheme.pdf" target="_blank" rel="noreferrer">View Scheme</a></td>
            </tr>
            <tr>
              <td>BBA</td>
              <td>AKU Scheme</td>
              <td><a href="https://www.nsit.in/Content/assets/c_images/Syllabus/BBA_Scheme.pdf" target="_blank" rel="noreferrer">View Scheme</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </AcademicsShell>
  );
}
