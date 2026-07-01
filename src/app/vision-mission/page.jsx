import { InstitutionShell, officialImages } from "../institution/InstitutionShell";
import styles from "../institution/institutionPages.module.css";

export const metadata = {
  title: "Vision & Mission | NSIT Patna",
};

export default function VisionMissionPage() {
  return (
    <InstitutionShell activePath="/vision-mission" title="Vision & Mission">
      <div className={styles.split}>
        <div className={styles.splitBody}>
          <span className="d-inline-flex text-uppercase" style={{color: 'var(--main-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em'}}>Vision</span>
          <h2>Vision Of The Institution</h2>
          <ul className={`${styles.list} d-grid p-0 list-unstyled mt-4`} style={{gap: '14px'}}>
            <li>The Promoting Body of the Institution is committed to help the Indian industries...</li>
            <li>It will contribute towards the professional growth and management of Indian industries...</li>
            <li>It will encourage creativity, innovations, and quality in all its endeavors.</li>
          </ul>
        </div>
        <div className={styles.splitMedia}>
          <img src={officialImages.vision} alt="Vision" className="w-100 h-100" style={{objectFit: 'cover'}} />
        </div>
      </div>

      <div className={styles.split}>
        <div className={styles.splitBody}>
          <span className="d-inline-flex text-uppercase" style={{color: 'var(--main-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em'}}>Mission</span>
          <h2>Mission of The Institution</h2>
          <ul className={`${styles.list} d-grid p-0 list-unstyled mt-4`} style={{gap: '14px'}}>
            <li>To promote Undergraduate, Training and Research in Engineering...</li>
            <li>To be an Institute of Co-operative Programs of Education with Industries...</li>
            <li>To become a Research Institution with focus on Technology Transfer.</li>
            <li>To support a Science and Technology Entrepreneurship Park...</li>
          </ul>
        </div>
        <div className={styles.splitMedia}>
          <img src={officialImages.mission} alt="Mission" className="w-100 h-100" style={{objectFit: 'cover'}} />
        </div>
      </div>
    </InstitutionShell>
  );
}