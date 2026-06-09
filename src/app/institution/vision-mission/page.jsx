import { InstitutionShell, officialImages } from "../InstitutionShell";
import styles from "../institutionPages.module.css";

export default function VisionMissionPage() {
  return (
    <InstitutionShell activePath="/institution/vision-mission" title="Vision & Mission">
      <div className={styles.split}>
        <div className={styles.splitBody}>
          <span className="d-inline-flex text-uppercase" style={{color: 'var(--main-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em'}}>Vision</span>
          <h2>Vision Of The Institution</h2>
          <ul className={`${styles.list} d-grid p-0 list-unstyled mt-4`} style={{gap: '14px'}}>
            <li>The Promoting Body of the Institution is committed to help the Indian industries in enhancing their competitiveness by producing leaders, entrepreneurs, and managers equipped with the diverse state-of-the-art technical knowledge.</li>
            <li>It will contribute towards the professional growth and management of Indian industries in general and industries of Bihar in particular through acquisition of specialized knowledge and skills and by integrating classroom knowledge with practical experience.</li>
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
            <li>To promote Undergraduate, Training and Research in Engineering, Applied Sciences, Management Science, Humanities and Social Sciences with multi-level entry..</li>
            <li>To be an Institute of Co-operative Programs of Education with Industries and R&D Organizations for offering tailor-made Courses.</li>
            <li>To become a Research Institution with focus on Technology Transfer.</li>
            <li>To support a Science and Technology Entrepreneurship Park to promote the Technology Transfer programs.</li>
          </ul>
        </div>
        <div className={styles.splitMedia}>
          <img src={officialImages.mission} alt="Mission" className="w-100 h-100" style={{objectFit: 'cover'}} />
        </div>
      </div>
    </InstitutionShell>
  );
}
