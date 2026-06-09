import { DocumentGrid, InstitutionShell, pdfLinks, styles } from "../InstitutionShell";

export const metadata = {
  title: "Governing Body | NSIT Patna",
};

export default function GoverningBodyPage() {
  return (
    <InstitutionShell activePath="/institution/governing-body" title="Governing Body">
      <section className={styles.panel}>
        <span className="d-inline-flex text-uppercase" style={{color: 'var(--main-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em'}}>Institution Governance</span>
        <h2>Governing Body</h2>
        <p>The official Governing Body document is available below.</p>
      </section>
      <DocumentGrid documents={[["Governing Body", pdfLinks.governingBody]]} />
    </InstitutionShell>
  );
}
