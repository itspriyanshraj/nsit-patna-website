import { DocumentGrid, InstitutionShell, pdfLinks, styles } from "../InstitutionShell";

export const metadata = {
  title: "Statutory Committees | NSIT Patna",
};

const documents = [
  ["Women's Cell", pdfLinks.womenCell],
  ["Minority Cell", pdfLinks.minorityCell],
  ["Internal Complaint Committee", pdfLinks.internalComplaint],
  ["Anti-Ragging Committee", pdfLinks.antiRaggingCommittee],
  ["Anti Ragging Squad", pdfLinks.antiRaggingSquad],
  ["Grievance Redressal Committee", pdfLinks.grievanceCommittee],
  ["OBC Committee", pdfLinks.obcCell],
  ["SC/ST Committee", pdfLinks.scStCommittee],
  ["Institution-Industry Cell", pdfLinks.industryCell],
  ["Research & Development Cell", pdfLinks.researchCell],
];

export default function StatutoryCommitteesPage() {
  return (
    <InstitutionShell activePath="/institution/statutory-committees" title="Statutory Committees">
      <section className={styles.panel}>
        <span className="d-inline-flex text-uppercase" style={{color: 'var(--main-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em'}}>Official Committees</span>
        <h2>Statutory Committees</h2>
        <p>
          Click any committee below to open the official PDF document directly, as listed on the
          NSIT website.
        </p>
      </section>
      <DocumentGrid documents={documents} />
    </InstitutionShell>
  );
}
