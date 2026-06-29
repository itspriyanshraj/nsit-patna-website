import { SectionShell } from "../components/SectionShell";

const admissionLinks = [
  ["Why Choose NSIT?", "/admission/why-choose"],
  ["Prospectus", "/admission/prospectus"],
  ["Fee Structure", "/admission/fee-structure"],
  ["Eligibility Criteria", "/admission/eligibility"],
  ["Virtual Tour", "/admission/virtual-tour"],
  ["Contact Details", "/admission/contact-details"],
];

const programs = [
  { title: "B.Tech", subtitle: "Computer Science & Engineering, Civil, EEE, ECE, Mechanical, Applied Science", icon: "⚙", color: "var(--main-color)" },
  { title: "Diploma", subtitle: "Civil Engineering, Electrical & Electronics Engineering, Mechanical Engineering", icon: "🔧", color: "#e67e22" },
  { title: "BCA", subtitle: "Bachelor of Computer Applications — 3 Years", icon: "💻", color: "#2ecc71" },
  { title: "BBA", subtitle: "Bachelor of Business Administration — 3 Years", icon: "📊", color: "#3498db" },
];

export const metadata = {
  title: "Admission",
  description: "Admission process and programs offered at NSIT",
};

export default function Page() {
  return (
    <SectionShell section="Admission" activePath="/admission" title="Admission" links={admissionLinks}>
      <div style={{
        background: `linear-gradient(135deg, rgba(23,32,51,0.88) 0%, rgba(23,32,51,0.72) 100%), url(https://www.nsit.in/Content/assets/c_images/about_img/about-us.jpg) center/cover no-repeat`,
        borderRadius: 12, padding: 'clamp(40px,6vw,72px)', color: '#fff', marginBottom: 28,
        position: 'relative', overflow: 'hidden',
      }}>
        <span style={{ color: 'var(--main-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Admission 2025-26</span>
        <h2 style={{ margin: '10px 0 0', fontSize: 'clamp(32px,4.2vw,54px)', lineHeight: 1.08, fontWeight: 900, color: '#fff' }}>Admission Process</h2>
        <p style={{ marginTop: 16, fontSize: 16, fontWeight: 600, lineHeight: 1.85, maxWidth: 680, opacity: 0.92 }}>
          NSIT offers admission to various undergraduate and diploma programmes based on merit and entrance examination.
          Candidates must appear for the BPTPIA entrance exam conducted by the institute.
          The admission process is transparent, merit-based, and follows government reservation policies.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 28 }}>
        {programs.map((p) => (
          <div key={p.title} style={{
            background: 'var(--white-color)', border: '1px solid var(--border-color)',
            borderRadius: 10, padding: '28px 24px', position: 'relative',
            boxShadow: '0 12px 30px rgba(23,32,51,0.06)',
            borderTop: `4px solid ${p.color}`,
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: 12, background: `${p.color}15`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 22, marginBottom: 14, color: p.color,
            }}>{p.icon}</div>
            <h3 style={{ margin: 0, fontSize: 20, fontWeight: 850, color: '#14213d' }}>{p.title}</h3>
            <p style={{ margin: '8px 0 0', fontSize: 14, color: 'var(--para-color)', fontWeight: 600, lineHeight: 1.6 }}>{p.subtitle}</p>
          </div>
        ))}
      </div>

      <div style={{
        background: 'var(--white-color)', border: '1px solid var(--border-color)',
        borderRadius: 10, padding: 'clamp(24px,3.5vw,40px)',
        boxShadow: '0 12px 30px rgba(23,32,51,0.06)',
      }}>
        <span style={{ color: 'var(--main-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Quick Links</span>
        <p style={{ margin: '10px 0 0', color: 'var(--para-color)', fontSize: 15, fontWeight: 600, lineHeight: 1.8 }}>
          For detailed information, explore the{" "}
          <a href="/admission/prospectus" style={{ color: 'var(--main-color)', fontWeight: 950, textDecoration: 'underline' }}>Prospectus</a>,
          {" "}<a href="/admission/fee-structure" style={{ color: 'var(--main-color)', fontWeight: 950, textDecoration: 'underline' }}>Fee Structure</a>,{" "}
          <a href="/admission/eligibility" style={{ color: 'var(--main-color)', fontWeight: 950, textDecoration: 'underline' }}>Eligibility Criteria</a>,{" "}
          and take a{" "}<a href="/admission/virtual-tour" style={{ color: 'var(--main-color)', fontWeight: 950, textDecoration: 'underline' }}>Virtual Tour</a>.
        </p>
      </div>
    </SectionShell>
  );
}
