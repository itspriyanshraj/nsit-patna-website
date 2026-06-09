import { DocumentGrid, InstitutionShell, pdfLinks, styles } from "../InstitutionShell";

export const metadata = {
  title: "NSIT Clubs | NSIT Patna",
};

export default function NsitClubsPage() {
  return (
    <InstitutionShell activePath="/institution/nsit-clubs" title="NSIT Clubs">
      <section className={styles.panel}>
        <span className="d-inline-flex text-uppercase" style={{color: 'var(--main-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em'}}>Student Life</span>
        <h2>NSIT Clubs</h2>
        <p>
          NSIT club documents are linked directly below. Each card opens the respective official PDF
          from the NSIT website.
        </p>
      </section>
      <DocumentGrid
        documents={[
          ["Nsit Step One", pdfLinks.stepOne],
          ["Nsit Yog Vidya", pdfLinks.yogVidya],
          ["Nsit Sports Club", pdfLinks.sportsClub],
          ["Nsit Cultural Club", pdfLinks.culturalClub],
        ]}
      />
    </InstitutionShell>
  );
}
