import { SectionShell } from "../../components/SectionShell";
import { infrastructureLinks } from "../infrastructureLinks";
import styles from "../infrastructurePages.module.css";

export const metadata = {
  title: "Hostel | NSIT Patna",
};

export default function HostelPage() {
  return (
    <SectionShell section="Infrastructure" activePath="/infrastructure/hostel" title="Hostel" links={infrastructureLinks}>
      <div className={styles.heading}>
        <span>Infrastructure</span>
        <h2>Your Home Away From Home: College Hostel Living</h2>
      </div>

      <div className={styles.panel}>
        <div className={styles.split}>
          <div className={styles.panelBody}>
            <p>
              NSIT hostel is a home away from home. There are separate hostels for boys and girls with round the clock wireless internet and intranet connectivity. Each room has an attached bathroom and fitted with cupboards, chairs, tables, beds, light and power points. A weekly laundry service is provided. Each hostel has its own common room where students can relax and watch television. The college is residential in nature. The arrangement is made to develop brotherhood among the students in order to have peace and harmony in the campus.
            </p>
          </div>
          <div className={styles.splitMedia}>
            <img src="https://www.nsit.in/Content/assets/c_images/nsit_images/hostal.png" alt="NSIT Hostel" />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
