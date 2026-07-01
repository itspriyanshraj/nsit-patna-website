import { SectionShell } from "../../components/SectionShell";
import { infrastructureLinks } from "../infrastructureLinks";
import styles from "../infrastructurePages.module.css";

export const metadata = {
  title: "Library | NSIT Patna",
};

export default function LibraryPage() {
  return (
    <SectionShell section="Infrastructure" activePath="/infrastructure/library" title="Library" links={infrastructureLinks}>
      <div className={styles.infoCard}>
        <div className={styles.infoCardHeader}>
          <div className={styles.infoCardIcon}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
          </div>
          <h3 className={styles.infoCardTitle}>In Our Compact Library, Curated Resources and Tech Foster Academic Excellence</h3>
        </div>
        <p className={styles.infoCardText}>
          Library is the soul and nerve centre of any academic and research organization. The library of NSIT is located in the heart of the institution and therefore is easily accessible to the departments, classrooms and hostels. The Library occupies a total area of about 10,000 sq. ft. It can accommodate 70 users at a time. The books both technical and general, journals, magazines and their back volumes, DVD&apos;s are available for the use of faculty and students of the institute. NSIT Library also subscribes to 60 National and 19 International reputed journals &amp; Magazines. Library Facility is open to all students and faculty members and is continuously updated with latest books, journals. The Institute always strives to provide the latest and best collection of books, journals, online sources, dissertations etc to the students for course work and research.
        </p>
        <img src="https://www.nsit.in/Content/assets/c_images/library.png" alt="NSIT Library" className={styles.infoCardImage} />
      </div>

      <div className={styles.statGrid}>
        <div className={styles.statCard}>
          <strong>10,000</strong>
          <small>sq. ft</small>
          <em>Total Area</em>
        </div>
        <div className={styles.statCard}>
          <strong>70</strong>
          <small>Users</small>
          <em>Capacity</em>
        </div>
        <div className={styles.statCard}>
          <strong>60</strong>
          <small>Journals</small>
          <em>National</em>
        </div>
        <div className={styles.statCard}>
          <strong>19</strong>
          <small>Journals</small>
          <em>International</em>
        </div>
      </div>
    </SectionShell>
  );
}
