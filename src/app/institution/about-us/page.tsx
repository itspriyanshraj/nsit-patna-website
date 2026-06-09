import Image from "next/image";
import { InstitutionShell, styles } from "../InstitutionShell";

export const metadata = {
  title: "About Us | NSIT Patna",
};

export default function AboutUsPage() {
  return (
    <InstitutionShell activePath="/institution/about-us" title="About Us">
      <section className={styles.introGrid}>
        <div className={styles.media}>
          <Image src="/vertical.png" alt="About NSIT" fill style={{objectFit: 'cover'}} loading="lazy" />
        </div>
        <div className={styles.introBody}>
          <span className="d-inline-flex text-uppercase" style={{color: 'var(--main-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em'}}>19+ Years of Success in the Field of Education</span>
          <h2>Leading in Excellence Since 2007</h2>
          <p>
            Netaji Subhas Institute of Technology established in 2007, with first batch started in
            2008 has its magnificent campus at Amhara in the district of Patna, Bihar. The nearest
            railway station is Bihta about 2 kilometers from the institute campus and about 25 KM
            from Patna A railway junction the state capital and major business and Educational hub
            of the state.
          </p>
          <p>
            Bihta is the industrial hub and blessings nerve centre of the entire state of Bihar. The
            neighboring States being Jharkhand and Uttar Pradesh with a large number of small medium
            and large industries inputs, offering and feedback facilitating to finetuning the
            programs of the institute to suit the specific requirement of the industries.
          </p>
          <p>
            NSIT, A Degree level Engineering Institute has become a &apos;&apos;An effective source of
            Technocrats to the nation&apos;&apos;. With its unique infrastructural facilities of 4,00,000
            Sq.Ft. of built up area on approximately 18 acres of green lustre land at Amhara, Bihta,
            Patna, Ambience at the campus serve and Ashram like.
          </p>
          <div className={`${styles.featureStrip} d-grid mt-4`} style={{gap: '14px', gridTemplateColumns: 'repeat(3,1fr)'}}>
            <span>Established in 2007</span>
            <span>4,00,000 Sq.Ft. Built-up Area</span>
            <span>Amhara, Bihta, Patna</span>
          </div>
        </div>
      </section>
      <section className={styles.split}>
        <div className={styles.splitBody}>
          <span className="d-inline-flex text-uppercase" style={{color: 'var(--main-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em'}}>NSIT Patna</span>
          <h2>About NSIT</h2>
          <p>
            The original NSIT visual identity from the institute page is retained here while the
            page layout has been redesigned to match this website.
          </p>
        </div>
        <div className={`${styles.splitMedia} ${styles.logoMedia}`}>
          <img src="/logo.png" alt="NSIT" className="w-100 h-100" style={{objectFit: 'contain', padding: 34, background: '#ffffff'}} />
        </div>
      </section>
    </InstitutionShell>
  );
}
