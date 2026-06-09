import { SectionShell } from "../../components/SectionShell";

const admissionLinks = [
  ["Why Choose NSIT?", "/admission/why-choose"],
  ["Prospectus", "/admission/prospectus"],
  ["Fee Structure", "/admission/fee-structure"],
  ["Eligibility Criteria", "/admission/eligibility"],
  ["Virtual Tour", "/admission/virtual-tour"],
  ["Contact Details", "/admission/contact-details"],
];

export const metadata = {
  title: "Prospectus - Admission - NSIT",
  description: "Download NSIT prospectus for various programmes",
};

export default function Page() {
  return (
    <SectionShell section="Admission" activePath="/admission/prospectus" title="Prospectus" links={admissionLinks}>
      <div style={{
        borderRadius: 16, overflow: 'hidden', marginBottom: 0,
        background: 'linear-gradient(135deg, #14213d 0%, #1f305a 100%)',
        padding: 'clamp(48px,6vw,80px)',
        textAlign: 'center',
      }}>
        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Prospectus</span>
        <h2 style={{ margin: '12px 0 0', fontSize: 'clamp(28px,3.5vw,42px)', lineHeight: 1.1, fontWeight: 900, color: '#fff' }}>Coming Soon</h2>
        <p style={{ marginTop: 10, color: 'rgba(255,255,255,0.6)', fontSize: 15, fontWeight: 500 }}>
          The prospectus will be available for download shortly.
        </p>
      </div>
    </SectionShell>
  );
}
