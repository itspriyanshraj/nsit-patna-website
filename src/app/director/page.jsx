import { InstitutionShell, styles } from "../institution/InstitutionShell";

export const metadata = {
  title: "Director's Message | NSIT Patna",
};

export default function DirectorMessagePage() {
  return (
    <InstitutionShell activePath="/director" title="Message">
      <article className={styles.messageCard}>
        <div className={styles.personImage}>
          <img src="/Director.png" alt="Dr. Raghubir Sharan Sharma" className="w-100 h-100" style={{objectFit: 'cover'}} />
        </div>
        <div className={styles.messageBody}>
          <span className="d-inline-flex text-uppercase" style={{padding: '8px 12px', color: 'var(--white-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.06em', background: 'var(--main-color)', borderRadius: 8}}>Director</span>
          <h2>Dr. Raghubir Sharan Sharma</h2>
          <div className={styles.quote}>
            &ldquo;Great institutions are not built by chance&mdash;they are built by vision, purpose, and
            people committed to excellence.&rdquo;
          </div>
          <p>
            It gives me immense pleasure to welcome you to Netaji Subhas Institute of Technology
            (NSIT), Patna. Our institution was founded with a clear and powerful mission&mdash;to make
            quality technical education accessible and affordable for the youth of Bihar and
            beyond.
          </p>
          <p>
            For far too long, talented students from our state had to migrate to other regions in
            pursuit of engineering education. NSIT was established to change that narrative&mdash;to
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
          <p>Let us move forward together&mdash;towards a brighter, more self-reliant Bihar.</p>
          <p>Dr. Raghubir Sharan Sharma</p>
        </div>
      </article>
    </InstitutionShell>
  );
}