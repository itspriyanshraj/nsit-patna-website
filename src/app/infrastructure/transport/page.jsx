import { SectionShell } from "../../components/SectionShell";
import { infrastructureLinks } from "../infrastructureLinks";
import styles from "../infrastructurePages.module.css";

export const metadata = {
  title: "Transport | NSIT Patna",
};

const routes = [
  { no: 1, buses: 1, route: "Gola Road to NSIT Via Maner" },
  { no: 2, buses: 1, route: "Ashiyana More to NSIT Via Khagual, Shiwala" },
  { no: 3, buses: 3, route: "Patna Golghar to NSIT Via Dakbunglow, Shiwala" },
  { no: 4, buses: 1, route: "Patna Golghar to NSIT Via Kurji, Sagunamore, Shiwala" },
  { no: 5, buses: 1, route: "Patna Golghar to NSIT Via Incometax, Anishabad, Jagdevpath, Shiwala" },
  { no: 6, buses: 1, route: "Arwal to NSIT Via Paliganj, Bikram, Arwal" },
];

export default function TransportPage() {
  return (
    <SectionShell section="Infrastructure" activePath="/infrastructure/transport" title="Transport" links={infrastructureLinks}>
      <div className={styles.heading}>
        <span>Infrastructure</span>
        <h2>Campus Transport</h2>
      </div>

      <div className={styles.panel}>
        <div className={styles.splitAlt}>
          <div className={styles.splitMedia}>
            <img src="https://www.nsit.in/Content/assets/c_images/nsit_images/nsitransport.jpg" alt="NSIT Bus" />
          </div>
          <div className={styles.panelBody}>
            <p>
              The college has its own fleet of buses to cater to the transportation needs of its students, staff members and visiting guests. These buses serve as the link between the campus and the city. The college provides transport facility to the faculties, students and support staffs from the city to the college campus and back in working days and special occasions.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.routeTable}>
        <table>
          <thead>
            <tr>
              <th>Route No</th>
              <th>No of Buses</th>
              <th>Route</th>
            </tr>
          </thead>
          <tbody>
            {routes.map((r) => (
              <tr key={r.no}>
                <td>{r.no}</td>
                <td>{r.buses}</td>
                <td>{r.route}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionShell>
  );
}
