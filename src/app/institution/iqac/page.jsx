import { DocumentGrid, InstitutionShell, pdfLinks, styles } from "../InstitutionShell";

export const metadata = {
  title: "IQAC | NSIT Patna",
};

export default function IqacPage() {
  return (
    <InstitutionShell activePath="/institution/iqac" title="IQAC">
      <section className={styles.panel}>
        <span className="d-inline-flex text-uppercase" style={{color: 'var(--main-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em'}}>Internal Quality Assurance Cell</span>
        <h2>IQAC</h2>
        <p>
          The Internal Quality Assurance Cell documents are available below. Click any item to open
          the original PDF directly.
        </p>
      </section>
      <DocumentGrid
        documents={[
          ["IQAC Committee", pdfLinks.iqacCommittee],
          ["IQAC - Vision & Mission", pdfLinks.iqacVisionMission],
          ["IQAC - Minutes of Meetings", pdfLinks.iqacMeeting],
        ]}
      />
    </InstitutionShell>
  );
}
