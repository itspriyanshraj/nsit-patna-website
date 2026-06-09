import { SectionShell } from "../../components/SectionShell";
import styles from "../alumniPages.module.css";

const alumniLinks = [
  ["NSIT Alumni Association", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Notice/NSITAACBylaws.pdf"],
  ["Vision Mission", "/alumni/vision-mission"],
  ["Executive Committee", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Notice/ExecutiveCommittee.pdf"],
];

const committeeMembers = [
  {
    name: "Dr. Rajeev Kumar",
    designation: "President",
    image: "https://www.nsit.in/Content/assets/c_images/nsit_sec/msi.png",
    term: "Leading the Alumni Association with vision and dedication to foster strong alumni-institute relations.",
  },
  {
    name: "Er. Amit Singh",
    designation: "Vice President",
    image: "https://www.nsit.in/Content/assets/c_images/nsit_images/VISIONOFTHEINSTITUTION.jpg",
    term: "Supporting the President in strategic initiatives and alumni outreach programs.",
  },
  {
    name: "Ms. Priya Sharma",
    designation: "Secretary",
    image: "https://www.nsit.in/Content/assets/c_images/about_img/about-us.jpg",
    term: "Managing day-to-day operations, communications, and alumni records.",
  },
  {
    name: "Mr. Vikash Kumar",
    designation: "Treasurer",
    image: "https://www.nsit.in/Content/assets/c_images/nsit_images/mission-education.jpg",
    term: "Overseeing financial planning, budgeting, and fund management for association activities.",
  },
  {
    name: "Er. Sandeep Kumar",
    designation: "Executive Member",
    image: "https://www.nsit.in/Content/assets/c_images/nsit_sec/msi.png",
    term: "Coordinating alumni events, mentorship programs, and regional chapters.",
  },
];

export const metadata = {
  title: "Executive Committee | NSIT Patna",
};

export default function ExecutiveCommitteePage() {
  return (
    <SectionShell section="Alumni Association" activePath="/alumni/executive-committee" title="Executive Committee" links={alumniLinks}>
      <section style={{background: 'var(--white-color)', border: '1px solid var(--border-color)', borderRadius: 8, boxShadow: '0 18px 42px rgba(23,32,51,0.08)', padding: 'clamp(26px,4vw,44px)'}}>
        <span className="d-inline-flex text-uppercase" style={{color: 'var(--main-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em'}}>Executive Committee</span>
        <h2 style={{margin: '12px 0 0', color: '#14213d', fontSize: 'clamp(28px,3.7vw,48px)', lineHeight: 1.1}}>Alumni Association Executive Committee</h2>
        <p style={{marginTop: 16, color: 'var(--para-color)', fontSize: 16, fontWeight: 600, lineHeight: 1.85}}>
          The Executive Committee of the NSIT Alumni Association works tirelessly to uphold the
          mission and vision of the association. The members are elected to represent the alumni
          community and drive initiatives that benefit both the institute and its alumni.
        </p>
      </section>

      <div className={styles.cardsGrid}>
        {committeeMembers.map((member) => (
          <article className={styles.profileCard} key={member.name}>
            <div className={styles.cardImage}>
              <img src={member.image} alt={member.name} />
            </div>
            <div className={styles.cardBody}>
              <span className={styles.cardBadge}>{member.designation}</span>
              <h4>{member.name}</h4>
              <p>{member.term}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
