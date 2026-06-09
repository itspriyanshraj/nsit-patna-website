import { SectionShell } from "../../components/SectionShell";
import { infrastructureLinks } from "../infrastructureLinks";
import styles from "../infrastructurePages.module.css";

export const metadata = {
  title: "Gallery | NSIT Patna",
};

export default function GalleryPage() {
  return (
    <SectionShell section="Infrastructure" activePath="/infrastructure/gallery" title="Gallery" links={infrastructureLinks}>
      <div className={styles.heading}>
        <span>Infrastructure</span>
        <h2>Campus Gallery</h2>
      </div>

      <div className={styles.panel} style={{ textAlign: 'center', padding: '80px 20px' }}>
        <div style={{ fontSize: 48, marginBottom: 16, opacity: 0.2 }}>🚧</div>
        <h2 style={{ color: '#14213d', fontSize: 26, fontWeight: 950, margin: 0 }}>Coming Soon</h2>
        <p style={{ color: 'var(--para-color)', fontSize: 15, fontWeight: 600, marginTop: 10, maxWidth: 400, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
          We&apos;re curating a collection of campus moments. Check back soon!
        </p>
      </div>
    </SectionShell>
  );
}
