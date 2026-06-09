import { DocumentGrid, InstitutionShell, pdfLinks, styles } from "../InstitutionShell";

export const metadata = {
  title: "AICTE Mandatory Disclosure | NSIT Patna",
};

export default function AicteMandatoryDisclosurePage() {
  return (
    <InstitutionShell
      activePath="/institution/aicte-mandatory-disclosure"
      title="AICTE Mandatory Disclosure"
    >
      <section className={styles.panel}>
        <span className="d-inline-flex text-uppercase" style={{color: 'var(--main-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em'}}>Mandatory Disclosure</span>
        <h2>AICTE Mandatory Disclosure</h2>
        <p>Click below to open the official mandatory disclosure PDFs directly.</p>
      </section>
      <DocumentGrid
        documents={[
          ["Existing Institution Application Report Part-1", pdfLinks.mandatoryPartOne],
          ["Existing Institution Application Report Part-2", pdfLinks.mandatoryPartTwo],
          ["EOA- Current Academic Year", pdfLinks.eoaCurrent],
        ]}
      />
    </InstitutionShell>
  );
}
