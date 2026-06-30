import type { Metadata } from "next";
import Link from "next/link";
import styles from "./sitemap.module.css";

export const metadata: Metadata = {
  title: "Complete Site Map",
  description: "Complete sitemap of NSIT Patna website. Browse all pages including academics, admissions, infrastructure, placement, and more.",
};

const categories = [
  {
    label: "Home",
    links: [
      { label: "Homepage", href: "/" },
      { label: "Contact Us", href: "/contact" },
      { label: "Enquiry", href: "/enquiry" },
      { label: "Online Payment", href: "/online-payment" },
      { label: "Teacher Login", href: "/teacher-login" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
  {
    label: "The Institute",
    links: [
      { label: "About Us", href: "/institution/about-us" },
      { label: "Member Secretary", href: "/institution/message/member-secretary" },
      { label: "Director's Message", href: "/institution/message/director-message" },
      { label: "Principal's Message", href: "/institution/message/principal-message" },
      { label: "Dean Administration", href: "/institution/message/dean-administration" },
      { label: "Vision & Mission", href: "/institution/vision-mission" },
      { label: "Statutory Committees", href: "/institution/statutory-committees" },
      { label: "IQAC", href: "/institution/iqac" },
      { label: "Approval", href: "/institution/approval" },
      { label: "NSIT Clubs", href: "/institution/nsit-clubs" },
      { label: "AICTE Mandatory Disclosure", href: "/institution/aicte-mandatory-disclosure" },
      { label: "Governing Body", href: "https://cdn.academist.app/Cloud/cdnclg/8/Website/Academics/BOGPDF2026.pdf" },
      { label: "Online Students Grievance Redressal", href: "/institution/online-students-grivance-redressal" },
    ],
  },
  {
    label: "Academics",
    links: [
      { label: "Courses", href: "/academics/courses" },
      { label: "Syllabus", href: "/academics/syllabus" },
      { label: "Examination", href: "/academics/examination" },
      { label: "Academic Calendar", href: "/academics/academic-calender" },
      { label: "Course Outcomes", href: "/academics/course-outcomes" },
      { label: "Activity Reports", href: "/academics/activity-reports" },
      { label: "Student's Counsellor", href: "/academics/students-counsellor" },
      { label: "NAAC", href: "/academics/naac" },
      { label: "DVV", href: "/academics/dvv" },
      { label: "AQAR", href: "/academics/aqar" },
    ],
  },
  {
    label: "Admission",
    links: [
      { label: "Admission Home", href: "/admission" },
      { label: "Why Choose NSIT?", href: "/admission/why-choose" },
      { label: "Prospectus", href: "/admission/prospectus" },
      { label: "Fee Structure", href: "/admission/fee-structure" },
      { label: "Eligibility Criteria", href: "/admission/eligibility" },
      { label: "Virtual Tour", href: "/admission/virtual-tour" },
      { label: "Contact Details", href: "/admission/contact-details" },
    ],
  },
  {
    label: "Placement",
    links: [
      { label: "Placement Home", href: "/placement" },
      { label: "About T & P", href: "/placement/about" },
      { label: "Placement Statistics", href: "/placement/statistics" },
      { label: "Our Recruiters", href: "/placement/recruiters" },
    ],
  },
  {
    label: "Infrastructure",
    links: [
      { label: "Infrastructure Home", href: "/infrastructure" },
      { label: "Library", href: "/infrastructure/library" },
      { label: "Computing Resource", href: "/infrastructure/computing" },
      { label: "Lab", href: "/infrastructure/lab" },
      { label: "Classroom", href: "/infrastructure/classroom" },
      { label: "Hostel", href: "/infrastructure/hostel" },
      { label: "Canteen", href: "/infrastructure/canteen" },
      { label: "Gallery", href: "/infrastructure/gallery" },
      { label: "Transport", href: "/infrastructure/transport" },
    ],
  },
  {
    label: "More",
    links: [
      { label: "Alumni Association", href: "/alumni" },
      { label: "Alumni Vision Mission", href: "/alumni/vision-mission" },
      { label: "Press & Media", href: "/press-media" },
      { label: "Feedback", href: "/feedback" },
      { label: "Career", href: "/career" },
      { label: "Student Feedback", href: "/feedback/student" },
      { label: "Alumni Feedback", href: "/feedback/alumni" },
      { label: "Parents Feedback", href: "/feedback/parents" },
      { label: "Teacher Feedback", href: "/feedback/teacher" },
      { label: "Satisfaction Survey", href: "/feedback/satisfaction-survey" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.badge}>SITEMAP</span>
          <h1>Site Map</h1>
          <p className={styles.heroDesc}>
            Browse all pages on the NSIT Patna website. Use this page to quickly find
            the information you need.
          </p>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {categories.map((cat) => (
            <div className={styles.card} key={cat.label}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                  </svg>
                </span>
                <h2>{cat.label}</h2>
              </div>
              <div className={styles.links}>
                {cat.links.map((link) => {
                  const isExternal = link.href.startsWith("http");
                  if (isExternal) {
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.link}
                      >
                        <span>{link.label}</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.externalIcon}>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                      </a>
                    );
                  }
                  return (
                    <Link href={link.href} className={styles.link} key={link.href}>
                      <span>{link.label}</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.arrowIcon}>
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
