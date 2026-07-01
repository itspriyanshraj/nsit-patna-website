import { SectionShell } from "../../components/SectionShell";
import { infrastructureLinks } from "../infrastructureLinks";
import styles from "../infrastructurePages.module.css";

export const metadata = {
  title: "Computing Resource | NSIT Patna",
};

export default function ComputingPage() {
  return (
    <SectionShell section="Infrastructure" activePath="/infrastructure/computing" title="Computing Resource" links={infrastructureLinks}>
      <div className={styles.infoCard}>
        <div className={styles.infoCardHeader}>
          <div className={styles.infoCardIcon}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
          </div>
          <h3 className={styles.infoCardTitle}>Empowering Minds: The Computing Resource Hub</h3>
        </div>
        <p className={styles.infoCardText}>
          The computing resources at NSIT include latest servers and workstations, a state of the art campus network and an Internet connection so that the students can leverage the power of IT and experience the e-learning process, which is both informative and interesting. From this year, every student has to be equipped with a laptop and we shall provide round the clock access to intranet as well as internet. Entire academic activities such as e-bulletin board, e-discussion forum, feedback, online leave application, course outline class schedule is made available to the faculty, students and the administration on their desktop.
        </p>
        <img loading="lazy" src="https://www.nsit.in/Content/assets/c_images/COMPUTING_RESOURCE/COMPUTINGRESOURCE1.jpg" alt="NSIT Computing Resource" className={styles.infoCardImage} />
      </div>

      <div className={styles.infoCard}>
        <div className={styles.infoCardHeader}>
          <div className={styles.infoCardIcon}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
          </div>
          <h3 className={styles.infoCardTitle}>Tech Hub: College Computing Resources</h3>
        </div>
        <p className={styles.infoCardText}>
          Information Technology is an indispensable resource for the enhancement of the skill of the students. It is unarguably the defining force of this millennium. The campus of the NSIT is totally equipped with latest technology. The initial focus of being systematically friendly has now resulted in a virtual flood of e-initiatives. Beginning with the up-gradation of infrastructure like Wi-Fi campus, supplemented by workshops, seminars, live projects and setting up a centre for e-business that aims to facilitate industry, academic interface, thus enabling the creation of whole new batch of tech-savvy managers with the skills to integrate technology solutions to workplace environment.
        </p>
        <img loading="lazy" src="https://www.nsit.in/Content/assets/c_images/COMPUTING_RESOURCE/COMPUTINGRESOURCE2.png" alt="NSIT Computing Resource" className={styles.infoCardImage} />
      </div>
    </SectionShell>
  );
}
