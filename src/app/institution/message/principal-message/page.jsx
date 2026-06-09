import { InstitutionShell, styles } from "../../InstitutionShell";

export const metadata = {
  title: "Principal's Message | NSIT Patna",
};

export default function PrincipalMessagePage() {
  return (
    <InstitutionShell activePath="/institution/message" title="Message">
      <article className={styles.messageCard}>
        <div className={styles.personImage}>
          <img src="/Principal.png" alt="Dr. Jyotirmayee Dalei" className="w-100 h-100" style={{objectFit: 'cover'}} />
        </div>
        <div className={styles.messageBody}>
          <span className="d-inline-flex text-uppercase" style={{padding: '8px 12px', color: 'var(--white-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.06em', background: 'var(--main-color)', borderRadius: 8}}>Principal</span>
          <h2>Dr. Jyotirmayee Dalei</h2>
          <p>
            At the heart of every great institution lies a strong academic foundation&mdash;and at
            Netaji Subhas Institute of Technology (NSIT), Patna, we are proud to offer just that.
            As the Dean (Academic), I am pleased to be part of an institution that stands for
            affordable, inclusive, and high-quality technical education.
          </p>
          <p>
            Our academic philosophy goes beyond textbooks and examinations. We aim to nurture
            analytical thinking, creativity, and adaptability among students so they can meet the
            demands of the ever-evolving professional world. With well-structured programs,
            experienced faculty, and a focus on hands-on learning, we ensure our students receive
            a well-rounded education.
          </p>
          <p>
            We recognize the potential that lies in every student, especially those who have
            limited access to resources. It is our duty to unlock that potential through guidance,
            discipline, and opportunity. NSIT is a place where learning meets purpose, and dreams
            take shape.
          </p>
          <p>
            I invite all students to make the most of their academic journey and rise as empowered
            professionals and responsible citizens.
          </p>
          <p>Dr. Jyotirmayee Dalei</p>
        </div>
      </article>
    </InstitutionShell>
  );
}
