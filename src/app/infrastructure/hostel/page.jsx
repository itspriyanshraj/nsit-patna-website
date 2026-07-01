import { SectionShell } from "../../components/SectionShell";
import { infrastructureLinks } from "../infrastructureLinks";
import styles from "../infrastructurePages.module.css";

export const metadata = {
  title: "Hostel | NSIT Patna",
};

export default function HostelPage() {
  return (
    <SectionShell section="Infrastructure" activePath="/infrastructure/hostel" title="Hostel" links={infrastructureLinks}>
      <div className={styles.infoCard}>
        <div className={styles.infoCardHeader}>
          <div className={styles.infoCardIcon}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </div>
          <h3 className={styles.infoCardTitle}>Your Home Away From Home</h3>
        </div>
        <p className={styles.infoCardText}>
          NSIT hostel is a home away from home. There are separate hostels for boys and girls with round the clock wireless internet and intranet connectivity. Each room has an attached bathroom and fitted with cupboards, chairs, tables, beds, light and power points. A weekly laundry service is provided. Each hostel has its own common room where students can relax and watch television. The college is residential in nature. The arrangement is made to develop brotherhood among the students in order to have peace and harmony in the campus.
        </p>
        <img loading="lazy" src="https://www.nsit.in/Content/assets/c_images/nsit_images/hostal.png" alt="NSIT Hostel" className={styles.infoCardImage} />
      </div>
    </SectionShell>
  );
}
