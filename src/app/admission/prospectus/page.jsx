import { SectionShell } from "../../components/SectionShell";

const admissionLinks = [
  ["Why Choose NSIT?", "/why-Choose-us"],
  ["Prospectus", "/admission/prospectus"],
  ["Fee Structure", "/feestructure"],
  ["Eligibility Criteria", "/eligibilitycriteria"],
  ["Virtual Tour", "/tour"],
  ["Contact Details", "/contactdetails"],
];

export const metadata = {
  title: "Prospectus | NSIT Patna",
  description: "Download NSIT prospectus for various programmes",
};

export default function Page() {
  return (
    <SectionShell section="Admission" activePath="/admission/prospectus" title="Prospectus" links={admissionLinks}>
      <div style={{
        borderRadius: 16, overflow: 'hidden',
        background: 'linear-gradient(135deg, var(--button-bg) 0%, #b01419 100%)',
        padding: 'clamp(32px,4vw,56px)',
      }}>
        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Prospectus</span>
        <h2 style={{ margin: '8px 0 0', fontSize: 'clamp(28px,3.5vw,42px)', lineHeight: 1.1, fontWeight: 900, color: '#fff' }}>NSIT Prospectus 2026</h2>
        <p style={{ marginTop: 10, color: 'rgba(255,255,255,0.65)', fontSize: 15, fontWeight: 500, maxWidth: 640, lineHeight: 1.6 }}>
          Download the official NSIT prospectus for admission to B.Tech, Diploma, BBA, and BCA programmes.
        </p>
        <a
          href="https://cdn.academist.app/Cloud/cdnclg/8/Website/Notice/NSITProspectus2026.pdf"
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 18,
            padding: '12px 28px', background: '#fff', color: '#14213d', borderRadius: 8,
            fontWeight: 700, fontSize: 14, textDecoration: 'none',
            boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
          }}
        >
          Download Prospectus
        </a>
      </div>

      <div style={{ marginTop: 28, borderRadius: 14, overflow: 'hidden', border: '1px solid var(--border-color)' }}>
        <iframe
          src="https://cdn.academist.app/Cloud/cdnclg/8/Website/Notice/NSITProspectus2026.pdf"
          width="100%"
          height="900"
          style={{ border: 0, display: 'block' }}
          title="NSIT Prospectus 2026 PDF"
        />
      </div>
    </SectionShell>
  );
}
