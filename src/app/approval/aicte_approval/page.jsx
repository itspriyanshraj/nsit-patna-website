import { InstitutionShell, aicteRows, styles } from "../../institution/InstitutionShell";

export const metadata = {
  title: "Approval | NSIT Patna",
};

export default function ApprovalPage() {
  return (
    <InstitutionShell activePath="/approval/aicte_approval" title="Approval">
      <section className={styles.panel}>
        <span className="d-inline-flex text-uppercase" style={{color: 'var(--main-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em'}}>AICTE Approval</span>
        <h2>AICTE Approval</h2>
        <p>Year-wise AICTE approval documents are listed below.</p>
      </section>
      <section className={styles.tablePanel}>
        <table>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Year</th>
              <th>Documents</th>
            </tr>
          </thead>
          <tbody>
            {aicteRows.map(([year, label, href], index) => (
              <tr key={label}>
                <td>{index + 1}</td>
                <td>{year}</td>
                <td>
                  <a href={href} target="_blank" rel="noreferrer">
                    {label}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </InstitutionShell>
  );
}