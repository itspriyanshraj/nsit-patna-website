import { SectionShell } from "../../components/SectionShell";
import { infrastructureLinks } from "../infrastructureLinks";
import styles from "../infrastructurePages.module.css";

export const metadata = {
  title: "Library | NSIT Patna",
};

export default function LibraryPage() {
  return (
    <SectionShell section="Infrastructure" activePath="/infrastructure/library" title="Library" links={infrastructureLinks}>
      <div className={styles.heading}>
        <span>Infrastructure</span>
        <h2>In Our Compact Library, Curated Resources and Tech Foster Academic Excellence</h2>
      </div>

      <div className={styles.panel}>
        <div className={styles.split}>
          <div className={styles.panelBody}>
            <p>
              Library is the soul and nerve centre of any academic and research organization. The library of NSIT is located in the heart of the institution and therefore is easily accessible to the departments, classrooms and hostels. The Library occupies a total area of about 10,000 sq. ft. It can accommodate 70 users at a time. The books both technical and general, journals, magazines and their back volumes, DVD&apos;s are available for the use of faculty and students of the institute. NSIT Library also subscribes to 60 National and 19 International reputed journals &amp; Magazines. Library Facility is open to all students and faculty members and is continuously updated with latest books, journals. The Institute always strives to provide the latest and best collection of books, journals, online sources, dissertations etc to the students for course work and research.
            </p>
          </div>
          <div className={styles.splitMedia}>
            <img src="https://www.nsit.in/Content/assets/c_images/library.png" alt="NSIT Library" />
          </div>
        </div>
      </div>

      <div className={styles.featureStrip}>
        <span><strong>10,000</strong><small>sq. ft</small><em>Total Area</em></span>
        <span><strong>70</strong><small>Users</small><em>Capacity</em></span>
        <span><strong>60</strong><small>Journals</small><em>National</em></span>
        <span><strong>19</strong><small>Journals</small><em>International</em></span>
      </div>
    </SectionShell>
  );
}
