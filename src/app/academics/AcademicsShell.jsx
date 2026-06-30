"use client";

import Link from "next/link";
import { motion } from "framer-motion";
const isExternal = (href) => href.startsWith("http");
import { FaFilePdf } from "react-icons/fa";
import Breadcrumbs from "../components/Breadcrumbs";
import styles from "./academicsPages.module.css";

const academicsLinks = [
  ["Courses", "/academics/courses" ],
  ["Syllabus", "/academics/syllabus"],
  ["Examination", "/academics/examination"],
  ["Academic Calendar", "/academics/academic-calender"],
  ["Course Outcomes", "/academics/course-outcomes"],
  ["Activity Reports", "/academics/activity-reports"],
  ["Student's Counsellor", "/academics/students-counsellor"],
  ["NAAC", "/academics/naac"],
  ["DVV", "/academics/dvv"],
  ["AQAR", "/academics/aqar"],
];

export function AcademicsShell({ activePath, title, children }) {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroInner}>
          <motion.h1
            className="mb-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {title}
          </motion.h1>
          <Breadcrumbs section="Academics" title={title} />
        </div>
      </section>

      <section className={styles.shell}>
        <aside className={styles.sideNav}>
          <strong className="d-block text-uppercase" style={{ color: "var(--main-color)", fontSize: 13, fontWeight: 950, letterSpacing: "0.08em", marginBottom: 8 }}>Academics</strong>
          {academicsLinks.map(([label, href]) =>
            isExternal(href) ? (
              <a className={styles.navLink} href={href} target="_blank" rel="noreferrer" key={href}>
                <span>{label}</span>
              </a>
            ) : (
              <Link
                className={`${styles.navLink} ${activePath === href ? styles.active : ""}`}
                href={href}
                key={href}
              >
                <span>{label}</span>
              </Link>
            )
          )}
        </aside>
        <motion.div
          style={{minWidth: 0}}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </section>
    </main>
  );
}

export function DocumentGrid({ documents, columns = 3 }) {
  return (
    <div className={styles.docs} style={{ "--cols": columns }}>
      {documents.map(([label, href], idx) => (
        <motion.a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={styles.docCard}
          key={label}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.05, ease: "easeOut" }}
          whileHover={{ y: -6 }}
        >
          <span className={styles.docBadge}>
            <FaFilePdf />
            <i>PDF</i>
          </span>
          <span className={styles.docBody}>
            <strong>{label}</strong>
            <small>
              <span className={styles.downloadIcon}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              </span>
              Download PDF
            </small>
          </span>
        </motion.a>
      ))}
    </div>
  );
}

export function SectionPanel({ label, title, children, icon: Icon }) {
  return (
    <motion.div
      className={styles.panel}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {Icon && (
        <div className={styles.panelIconWrap}>
          <Icon className={styles.panelIcon} />
        </div>
      )}
      {label && <span className="d-inline-flex text-uppercase" style={{color: 'var(--main-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em'}}>{label}</span>}
      {title && <h2>{title}</h2>}
      {children}
    </motion.div>
  );
}

export function IntroPanel({ label, title, children }) {
  return (
    <motion.div
      className={styles.introPanel}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {label && <span className="d-inline-flex text-uppercase" style={{color: 'var(--main-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em'}}>{label}</span>}
      {title && <h2>{title}</h2>}
      {children}
    </motion.div>
  );
}

export { styles };
