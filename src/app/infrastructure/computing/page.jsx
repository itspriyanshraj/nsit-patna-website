import { SectionShell } from "../../components/SectionShell";
import { infrastructureLinks } from "../infrastructureLinks";
import styles from "../infrastructurePages.module.css";

export const metadata = {
  title: "Computing Resource | NSIT Patna",
};

export default function ComputingPage() {
  return (
    <SectionShell section="Infrastructure" activePath="/infrastructure/computing" title="Computing Resource" links={infrastructureLinks}>
      <div className={styles.heading}>
        <span>Infrastructure</span>
        <h2>Empowering Minds: The Computing Resource Hub</h2>
      </div>

      <div className={styles.panel}>
        <div className={styles.split}>
          <div className={styles.panelBody}>
            <h2>Empowering Minds: The Computing Resource Hub</h2>
            <p>
              The computing resources at NSIT include latest servers and workstations, a state of the art campus network and an Internet connection so that the students can leverage the power of IT and experience the e-learning process, which is both informative and interesting. From this year, every student has to be equipped with a laptop and we shall provide round the clock access to intranet as well as internet. Entire academic activities such as e-bulletin board, e-discussion forum, feedback, online leave application, course outline class schedule is made available to the faculty, students and the administration on their desktop. Information Technology is an indispensable resource for the enhancement of the skill of the students.
            </p>
          </div>
          <div className={styles.splitMedia}>
            <img src="https://www.nsit.in/Content/assets/c_images/COMPUTING_RESOURCE/COMPUTINGRESOURCE1.jpg" alt="NSIT Computing Resource" />
          </div>
        </div>
      </div>

      <div className={styles.panel}>
        <div className={styles.splitAlt}>
          <div className={styles.splitMedia}>
            <img src="https://www.nsit.in/Content/assets/c_images/COMPUTING_RESOURCE/COMPUTINGRESOURCE2.png" alt="NSIT Computing Resource" />
          </div>
          <div className={styles.panelBody}>
            <h2>Tech Hub: College Computing Resources</h2>
            <p>
              Information Technology is an indispensable resource for the enhancement of the skill of the students. It is unarguably the defining force of this millennium. The campus of the NSIT is totally equipped with latest technology. The initial focus of being systematically friendly has now resulted in a virtual flood of e-initiatives. Beginning with the up-gradation of infrastructure like Wi-Fi campus, supplemented by workshops, seminars, live projects and setting up a centre for e-business that aims to facilitate industry, academic interface, thus enabling the creation of whole new batch of tech-savvy managers with the skills to integrate technology solutions to workplace environment.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
