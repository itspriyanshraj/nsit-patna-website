import { SectionShell } from "../../components/SectionShell";
import { infrastructureLinks } from "../infrastructureLinks";
import styles from "../infrastructurePages.module.css";

export const metadata = {
  title: "Canteen | NSIT Patna",
};

export default function CanteenPage() {
  return (
    <SectionShell section="Infrastructure" activePath="/infrastructure/canteen" title="Canteen" links={infrastructureLinks}>
      <div className={styles.infoCard}>
        <div className={styles.infoCardHeader}>
          <div className={styles.infoCardIcon}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
          </div>
          <h3 className={styles.infoCardTitle}>Savor the Campus Flavor</h3>
        </div>
        <p className={styles.infoCardText}>
          Being away from home doesn&apos;t necessarily mean you can&apos;t have food that tastes as good as the stuff dished out from mom&apos;s kitchen. The students may not readily agree to that, but the fact is, at NSIT you can have all kinds of food in the canteen. In addition to satisfying, one&apos;s hunger and thirst, lot of serious discussion on topics of current interest happen here. You will find many students revising their interpersonal and communication skills over a cup of tea and coffee.
        </p>
        <img
          src="/images/nsit-canteen-recreated.png"
          alt="NSIT Canteen"
          className={styles.infoCardImage}
          style={{ height: "auto", objectFit: "contain" }}
        />
      </div>
    </SectionShell>
  );
}
