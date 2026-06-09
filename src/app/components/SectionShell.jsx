import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";
import styles from "./sectionShell.module.css";

const isExternal = (href) => href.startsWith("http");

export function SectionShell({ activePath, title, section, links, children }) {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className="mb-2">{title}</h1>
          <Breadcrumbs section={section} title={title} />
        </div>
      </section>

      <section className={styles.shell}>
        <aside className={styles.sideNav}>
          <strong className="d-block text-uppercase" style={{ color: "var(--main-color)", fontSize: 13, fontWeight: 950, letterSpacing: "0.08em", marginBottom: 8 }}>{section}</strong>
          {links.map(([label, href]) =>
            isExternal(href) ? (
              <a href={href} target="_blank" rel="noreferrer" key={href}>
                {label}
              </a>
            ) : (
              <Link className={activePath === href ? styles.active : ""} href={href} key={href}>
                {label}
              </Link>
            )
          )}
        </aside>
        <div style={{minWidth: 0}}>
          {children}
        </div>
      </section>
    </main>
  );
}

export function DocumentGrid({ documents }) {
  return (
    <div className={styles.docs}>
      {documents.map(([label, href]) => (
        <a href={href} target="_blank" rel="noreferrer" className={styles.docCard} key={label}>
          <span>PDF</span>
          <strong>{label}</strong>
          <small>Click to open document</small>
        </a>
      ))}
    </div>
  );
}

export { styles };
