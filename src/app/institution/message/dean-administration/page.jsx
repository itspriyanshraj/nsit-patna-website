import { InstitutionShell, styles } from "../../InstitutionShell";

export const metadata = {
  title: "Dean Administration | NSIT Patna",
};

export default function DeanAdministrationPage() {
  return (
    <InstitutionShell activePath="/institution/message" title="Message">
      <article className={styles.messageCard}>
        <div className={styles.personImage}>
          <img src="/Dean.png" alt="Mr. Ramakant Singh" className="w-100 h-100" style={{objectFit: 'cover'}} />
        </div>
        <div className={styles.messageBody}>
          <span className="d-inline-flex text-uppercase" style={{padding: '8px 12px', color: 'var(--white-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.06em', background: 'var(--main-color)', borderRadius: 8}}>Dean Administration</span>
          <h2>Mr. Ramakant Singh</h2>
          <p>
            At Netaji Subhas Institute of Technology (NSIT), Patna, we believe that a
            well-organized and student-centric environment is the backbone of any successful
            academic institution. As a Dean (Administration), it is my responsibility and
            privilege to ensure that our systems and facilities support every student&rsquo;s academic
            and personal growth.
          </p>
          <p>
            Our administrative framework is designed to be efficient, transparent, and responsive.
            From admissions to examinations, and from student welfare to campus infrastructure, we
            work tirelessly to create a smooth and supportive experience for all. We understand
            that behind every student is a family&rsquo;s hope and aspiration&mdash;and we strive to honour
            that trust through timely services and structured processes.
          </p>
          <p>
            With a focus on discipline, safety, and continuous improvement, our goal is to provide
            a campus environment where students can thrive without obstacles. We work closely with
            academic departments and management to uphold the vision of inclusive, affordable, and
            excellent education.
          </p>
          <p>Together, let us build a campus that reflects both professionalism and compassion.</p>
          <p>Mr. Ramakant Singh</p>
        </div>
      </article>
    </InstitutionShell>
  );
}
