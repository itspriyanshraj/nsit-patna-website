import { SectionShell } from "../../components/SectionShell";
import { infrastructureLinks } from "../infrastructureLinks";
import styles from "../infrastructurePages.module.css";

export const metadata = {
  title: "Canteen | NSIT Patna",
};

export default function CanteenPage() {
  return (
    <SectionShell section="Infrastructure" activePath="/infrastructure/canteen" title="Canteen" links={infrastructureLinks}>
      <div className={styles.heading}>
        <span>Infrastructure</span>
        <h2>Savor the Campus Flavor: Culinary Delights at Our College Canteen</h2>
      </div>

      <div className={styles.panel}>
        <div className={styles.splitAlt}>
          <div className={styles.splitMedia}>
            <img src="https://www.nsit.in/Content/assets/c_images/nsit_images/nsitcanteen.png" alt="NSIT Canteen" />
          </div>
          <div className={styles.panelBody}>
            <p>
              Being away from home doesn&apos;t necessarily mean you can&apos;t have food that tastes as good as the stuff dished out from mom&apos;s kitchen. The students may not readily agree to that, but the fact is, at NSIT you can have all kinds of food in the canteen. In addition to satisfying, one&apos;s hunger and thirst, lot of serious discussion on topics of current interest happen here. You will find many students revising their interpersonal and communication skills over a cup of tea and coffee.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.highlightCard} style={{ marginTop: 22 }}>
        <div style={{ maxWidth: 220, margin: '0 auto', textAlign: 'center' }}>
          <img src="https://www.nsit.in/Content/assets/c_images/nsit_images/meal-lunch-removebg-preview.png" alt="NSIT Canteen Meal" style={{ width: '100%', display: 'block' }} />
        </div>
        <p style={{ margin: '14px 0 0', color: 'var(--para-color)', fontSize: 15, fontWeight: 600, lineHeight: 1.8, fontStyle: 'italic', textAlign: 'center' }}>
          Tasty and hygienic food is prepared in the canteen for the students, faculty and staff. The canteen is open on all working days.
        </p>
      </div>
    </SectionShell>
  );
}
