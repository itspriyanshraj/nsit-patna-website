import { SectionShell } from "../components/SectionShell";
import styles from "../alumni/alumniPages.module.css";

const alumniLinks = [
  ["NSIT Alumni Association", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Notice/NSITAACBylaws.pdf"],
  ["Vision Mission", "/alumini_vision_mission"],
  ["Executive Committee", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Notice/ExecutiveCommittee.pdf"],
];

export const metadata = {
  title: "Vision Mission | NSIT Patna",
};

export default function VisionMissionPage() {
  return (
    <SectionShell section="Alumni Association" activePath="/alumini_vision_mission" title="Vision Mission" links={alumniLinks}>
      <section className={styles.split}>
        <div className={styles.splitBody}>
          <span className="d-inline-flex text-uppercase" style={{color: 'var(--main-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em'}}>Vision</span>
          <h2>Vision of the Alumni Association</h2>
          <p>
            To build a vibrant, engaged, and globally connected alumni community that upholds the
            values of NSIT and contributes meaningfully to the growth of the institute, its
            students, and society at large.
          </p>
          <p>
            The Alumni Association envisions a world where every NSIT graduate remains a lifelong
            partner in the institute&apos;s journey, fostering a culture of giving back, innovation,
            and excellence across all spheres of professional and personal life.
          </p>
        </div>
        <div className={styles.splitMedia}>
          <img src="https://www.nsit.in/Content/assets/c_images/about_img/about-us.jpg" alt="Vision" />
        </div>
      </section>

      <section className={`${styles.split} ${styles.splitReverse}`}>
        <div className={styles.splitMedia}>
          <img src="https://www.nsit.in/Content/assets/c_images/nsit_images/mission-education.jpg" alt="Mission" />
        </div>
        <div className={styles.splitBody}>
          <span className="d-inline-flex text-uppercase" style={{color: 'var(--main-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em'}}>Mission</span>
          <h2>Mission of the Alumni Association</h2>
          <ul className={styles.list}>
            <li>To foster a strong and active network among NSIT alumni across the globe</li>
            <li>To support the institute in its academic, research, and infrastructural development</li>
            <li>To facilitate mentorship, career guidance, and placement assistance for current students</li>
            <li>To organize events, seminars, and reunions that strengthen alumni bonds</li>
          </ul>
        </div>
      </section>
    </SectionShell>
  );
}
