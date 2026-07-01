import { InstitutionShell, styles } from "../institution/InstitutionShell";

export const metadata = {
  title: "Member Secretary | NSIT Patna",
};

export default function MemberSecretaryPage() {
  return (
    <InstitutionShell activePath="/seceretary-desk" title="Message">
      <article className={styles.messageCard}>
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
            that the Technocrats is to be made outside the Bihar &amp; found only amongst the people
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
    </InstitutionShell>
  );
}