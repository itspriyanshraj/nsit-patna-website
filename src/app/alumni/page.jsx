import { SectionShell, DocumentGrid } from "../components/SectionShell";
import styles from "./alumniPages.module.css";

const alumniLinks = [
  ["NSIT Alumni Association", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Notice/NSITAACBylaws.pdf"],
  ["Vision Mission", "/alumni/vision-mission"],
  ["Executive Committee", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Notice/ExecutiveCommittee.pdf"],
];

export const metadata = {
  title: "NSIT Alumni Association | NSIT Patna",
};

export default function AlumniPage() {
  return (
    <SectionShell section="Alumni Association" activePath="/alumni" title="NSIT Alumni Association" links={alumniLinks}>
      <div className={styles.heroWrap}>
        <div className={styles.heroBg}>
          <img src="https://www.nsit.in/Content/assets/c_images/nsit_images/VISIONOFTHEINSTITUTION.jpg" alt="NSIT Campus" />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className="d-inline-flex text-uppercase" style={{color: 'var(--main-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em'}}>Alumni Association</span>
          <h2>NSIT Alumni Association</h2>
          <p>
            The NSIT Alumni Association serves as a vital bridge between the institute and its
            alumni, fostering lifelong connections and mutual growth. It aims to engage alumni in
            the holistic development of the institute and create a strong network of professionals
            who contribute to society and the nation.
          </p>
        </div>
      </div>

      <section style={{marginTop: 22}}>
        <span className={styles.sectionTitle}>Objectives</span>
        <h2 className={styles.sectionHeading}>Our Objectives</h2>
        <div className={styles.objectivesGrid}>
          <div className={styles.objectiveCard}>
            <span className={styles.objectiveNum}>01</span>
            <div className={styles.objectiveText}>
              <h4>Connect &amp; Engage</h4>
              <p>To connect all the Alumni members with the Alma Mater and foster lifelong bonds.</p>
            </div>
          </div>
          <div className={styles.objectiveCard}>
            <span className={styles.objectiveNum}>02</span>
            <div className={styles.objectiveText}>
              <h4>News &amp; Updates</h4>
              <p>To update Alumni members about the activities of NSIT and the Alumni association with a quarterly news bulletin.</p>
            </div>
          </div>
          <div className={styles.objectiveCard}>
            <span className={styles.objectiveNum}>03</span>
            <div className={styles.objectiveText}>
              <h4>Mentorship</h4>
              <p>To facilitate mentorship and career guidance programs for current students and fellow alumni.</p>
            </div>
          </div>
          <div className={styles.objectiveCard}>
            <span className={styles.objectiveNum}>04</span>
            <div className={styles.objectiveText}>
              <h4>Institute Growth</h4>
              <p>To support the institute in its academic, research, and infrastructural development initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{marginTop: 22}}>
        <span className={styles.sectionTitle}>Documents</span>
        <h2 className={styles.sectionHeading}>Alumni Documents</h2>
        <div className={styles.docs}>
          <a href="https://cdn.academist.app/Cloud/cdnclg/8/Website/Notice/NSITAACBylaws.pdf" target="_blank" rel="noreferrer" className={styles.docCard}>
            <span>PDF</span>
            <strong>NSIT Alumni Association Bylaws</strong>
            <small>Click to open document</small>
          </a>
          <a href="https://cdn.academist.app/Cloud/cdnclg/8/Website/Academics/BOGPDF2026.pdf" target="_blank" rel="noreferrer" className={styles.docCard}>
            <span>PDF</span>
            <strong>Executive Committee 2026</strong>
            <small>Click to open document</small>
          </a>
          <a href="https://cdn.academist.app/Cloud/cdnclg/8/Website/Notice/IQAC-Vision-and-Mission.pdf" target="_blank" rel="noreferrer" className={styles.docCard}>
            <span>PDF</span>
            <strong>IQAC - Vision &amp; Mission</strong>
            <small>Click to open document</small>
          </a>
        </div>
      </section>
    </SectionShell>
  );
}
