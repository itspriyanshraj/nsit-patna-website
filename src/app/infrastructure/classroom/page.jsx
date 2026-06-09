import { SectionShell } from "../../components/SectionShell";
import { infrastructureLinks } from "../infrastructureLinks";
import styles from "../infrastructurePages.module.css";

export const metadata = {
  title: "Classroom | NSIT Patna",
};

export default function ClassroomPage() {
  return (
    <SectionShell section="Infrastructure" activePath="/infrastructure/classroom" title="Classroom" links={infrastructureLinks}>
      <div className={styles.heading}>
        <span>Infrastructure</span>
        <h2>SmartClass: College Learning Hubs</h2>
      </div>

      <div className={styles.panel}>
        <div className={styles.splitAlt}>
          <div className={styles.splitMedia}>
            <img src="https://www.nsit.in/Content/assets/c_images/nsit_images/nsitclassroom.png" alt="NSIT Classroom" />
          </div>
          <div className={styles.panelBody}>
            <p>
              Today with the help of Internet, one can easily obtain the college degree. There is a big debate whether online classrooms are beneficial or not. In this regard, there are many people who argue that online classrooms are very good. But on the other hand, many people are against these virtual classes. On the other hand, most of the students found traditional classroom most convenient because they think that it is better to learn when listening to someone speak instead of just reading online. College education also helps us in developing our skills in reasoning, reflection, tolerance and communication. With the help of these skills, we can easily resolve the conflicts as well as can solve the crisis that may occur in the course of a personal or professional life. College education can help a student in understanding the viewpoints of other people.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
