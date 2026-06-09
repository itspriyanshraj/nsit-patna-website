import { InstitutionShell, styles } from "../InstitutionShell";

export const metadata = {
  title: "Message | NSIT Patna",
};

export default function MessagePage() {
  return (
    <InstitutionShell activePath="/institution/message" title="Message">
      <div className="d-grid" style={{gap: '22px'}}>
        <article className={styles.messageCard} id="member-secretary">
          <div className={styles.personImage}>
            <img src="/Secretary.png" alt="M.M.Singh" className="w-100 h-100" style={{objectFit: 'cover'}} />
          </div>
          <div className={styles.messageBody}>
            <span className="d-inline-flex text-uppercase" style={{padding: '8px 12px', color: 'var(--white-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.06em', background: 'var(--main-color)', borderRadius: 8}}>Member Secretary</span>
            <h2>M.M. Singh</h2>
            <p>
              I feel proud and happy to introduce to you NSIT and welcome you to this institution.
              Technology Education has been always effluents pursuit and always to be studied by
              migrating from Bihar to other States. Even today this is strongly believed. But is it
              that the Technocrats is to be made outside the Bihar & found only amongst the people
              of the affluent class of the society? Is it their prerogative only? Many of the great
              people whom we adore have come up from the middle class family. History is witness to
              it. Then why Engineering education should be made so expensive that it becomes cost
              prohibitive for children coming from the rural and middle-income group.
            </p>
            <p>
              An urge to help the under privileged with a good alternative at a very reasonable and
              affordable cost Sitwanto Devi Mahila Kalyan Sansthan has instituted Netaji Subhas
              Institute of Technology at Patna where no compromise in the quality of education as
              well as we also concentrate on total enhancement of the students will be made not
              withstanding the fact that technology education in Bihar is at par excellence.
            </p>
          </div>
        </article>

        <article className={styles.messageCard} id="director-message">
          <div className={styles.personImage}>
            <img src="/Director.png" alt="Dr. Raghubir Sharan Sharma" className="w-100 h-100" style={{objectFit: 'cover'}} />
          </div>
          <div className={styles.messageBody}>
            <span className="d-inline-flex text-uppercase" style={{padding: '8px 12px', color: 'var(--white-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.06em', background: 'var(--main-color)', borderRadius: 8}}>Director</span>
            <h2>Dr. Raghubir Sharan Sharma</h2>
            <div className={styles.quote}>
              “Great institutions are not built by chance—they are built by vision, purpose, and
              people committed to excellence.”
            </div>
            <p>
              It gives me immense pleasure to welcome you to Netaji Subhas Institute of Technology
              (NSIT), Patna. Our institution was founded with a clear and powerful mission—to make
              quality technical education accessible and affordable for the youth of Bihar and
              beyond.
            </p>
            <p>
              For far too long, talented students from our state had to migrate to other regions in
              pursuit of engineering education. NSIT was established to change that narrative—to
              ensure that opportunities for learning, growth, and innovation are available right
              here, at home.
            </p>
            <p>
              We firmly believe that excellence in education is not the privilege of a few, but a
              right that must be extended to all, irrespective of background. Under the visionary
              leadership of our Chairman, NSIT strives to nurture potential, build confidence, and
              transform students into industry-ready professionals and responsible citizens.
            </p>
            <p>
              At NSIT, we blend academic rigor with personality development, professional training,
              and ethical grounding. Our faculty, infrastructure, and industry linkages are all
              focused on one goal: to empower our students to meet global standards and make a mark
              in the world.
            </p>
            <p>Let us move forward together—towards a brighter, more self-reliant Bihar.</p>
            <p>Dr. Raghubir Sharan Sharma</p>
          </div>
        </article>

        <article className={styles.messageCard} id="principal-message">
          <div className={styles.personImage}>
            <img src="/Principal.png" alt="Dr. Jyotirmayee Dalei" className="w-100 h-100" style={{objectFit: 'cover'}} />
          </div>
          <div className={styles.messageBody}>
            <span className="d-inline-flex text-uppercase" style={{padding: '8px 12px', color: 'var(--white-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.06em', background: 'var(--main-color)', borderRadius: 8}}>Principal</span>
            <h2>Dr. Jyotirmayee Dalei</h2>
            <p>
              At the heart of every great institution lies a strong academic foundation—and at
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

        <article className={styles.messageCard} id="dean-administration">
          <div className={styles.personImage}>
            <img src="/Dean.png" alt="Mr. Ramakant Singh" className="w-100 h-100" style={{objectFit: 'cover'}} />
\          </div>
          <div className={styles.messageBody}>
            <span className="d-inline-flex text-uppercase" style={{padding: '8px 12px', color: 'var(--white-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.06em', background: 'var(--main-color)', borderRadius: 8}}>Dean Administration</span>
            <h2>Mr. Ramakant Singh</h2>
            <p>
              At Netaji Subhas Institute of Technology (NSIT), Patna, we believe that a
              well-organized and student-centric environment is the backbone of any successful
              academic institution. As a Dean (Administration), it is my responsibility and
              privilege to ensure that our systems and facilities support every student’s academic
              and personal growth.
            </p>
            <p>
              Our administrative framework is designed to be efficient, transparent, and responsive.
              From admissions to examinations, and from student welfare to campus infrastructure, we
              work tirelessly to create a smooth and supportive experience for all. We understand
              that behind every student is a family’s hope and aspiration—and we strive to honour
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
      </div>
    </InstitutionShell>
  );
}
