import { InstitutionShell, styles } from "../InstitutionShell";

export const metadata = {
  title: "Online Students Grievance Redressal | NSIT Patna",
};

export default function OnlineStudentsGrievanceRedressalPage() {
  return (
    <InstitutionShell
      activePath="/institution/online-students-grivance-redressal"
      title="Online Students Grievance Redressal"
    >
      <section className={styles.formPanel}>
        <span className="d-inline-flex text-uppercase" style={{color: 'var(--main-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em'}}>Student Support</span>
        <h2>Online Students Grievance Redressal</h2>
        <p>Student Name, Course, Nature of Grievance, Class Roll No., Contact Number, Details, Upload File and Submit.</p>
        <form className={styles.form}>
          <label>
            Student Name *
            <input type="text" placeholder="Name of the Student*" />
          </label>
          <label>
            Course *
            <select defaultValue="">
              <option value="" disabled>
                Select
              </option>
              <option>B.Tech (Civil Engineering)</option>
              <option>B.Tech (Computer Science & Engineering)</option>
              <option>B.Tech (Electronics & Communication Engineering)</option>
              <option>B.Tech (Electrical & Electronics Engineering)</option>
              <option>B.Tech (Mechanical Engineering)</option>
              <option>Diploma (Civil Engineering)</option>
              <option>Diploma (Electrical & Electronics Engineering)</option>
              <option>Diploma (Mechanical Engineering)</option>
              <option>BCA</option>
              <option>BBA</option>
            </select>
          </label>
          <label>
            Nature of Grievance *
            <select defaultValue="">
              <option value="" disabled>
                Select
              </option>
              <option>Academic</option>
              <option>Harassment</option>
              <option>Facility</option>
              <option>Others</option>
            </select>
          </label>
          <label>
            Class Roll No. *
            <input type="text" placeholder="Roll number*" />
          </label>
          <label>
            Contact Number *
            <input type="tel" placeholder="Contact Number*" />
          </label>
          <label className={styles.full}>
            Details
            <textarea rows="6" />
          </label>
          <label className={styles.full}>
            Upload File
            <input type="file" />
          </label>
          <button type="button">Submit</button>
        </form>
      </section>
    </InstitutionShell>
  );
}
