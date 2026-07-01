import { SectionShell } from "../components/SectionShell";
import { HiCog, HiWrench, HiBookOpen } from "react-icons/hi2";

const admissionLinks = [
  ["Why Choose NSIT?", "/why-Choose-us"],
  ["Prospectus", "/admission/prospectus"],
  ["Fee Structure", "/feestructure"],
  ["Eligibility Criteria", "/eligibilitycriteria"],
  ["Virtual Tour", "/tour"],
  ["Contact Details", "/contactdetails"],
];

const programs = [
  {
    title: "B.Tech Programmes", color: "var(--main-color)", bg: "#fef2f2", icon: <HiCog />,
    items: [
      "10+2 with Physics and Mathematics as compulsory subjects",
      "One of: Chemistry, Computer Science, Electronics, IT, Biology, or Biotechnology",
      "Must appear for the BPTPIA entrance examination conducted by NSIT",
      "Minimum 45% marks in aggregate (40% for reserved categories)",
    ],
  },
  {
    title: "Diploma Programmes", color: "var(--main-color)", bg: "#fef2f2", icon: <HiWrench />,
    items: [
      "Passed 10th standard (Matriculation) from a recognised board",
      "Minimum 35% marks in aggregate",
      "Must appear for the BPTPIA entrance examination",
    ],
  },
  {
    title: "BCA & BBA Programmes", color: "var(--main-color)", bg: "#fef2f2", icon: <HiBookOpen />,
    items: [
      "10+2 from a recognised board in any stream",
      "Minimum 45% marks in aggregate (40% for reserved categories)",
    ],
  },
];

export const metadata = {
  title: "Eligibility Criteria - Admission - NSIT",
  description: "Eligibility criteria for B.Tech, Diploma, BCA, and BBA programmes at NSIT",
};

export default function Page() {
  return (
    <SectionShell section="Admission" activePath="/eligibilitycriteria" title="Eligibility Criteria" links={admissionLinks}>
      <div style={{
        background: 'var(--white-color)', border: '1px solid var(--border-color)',
        borderRadius: 10, padding: 'clamp(24px,3.5vw,40px)', marginBottom: 28,
        boxShadow: '0 12px 30px rgba(23,32,51,0.06)',
      }}>
        <span className="d-inline-flex text-uppercase" style={{ color: 'var(--main-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em' }}>Eligibility</span>
        <h2 style={{ margin: '12px 0 0', color: '#14213d', fontSize: 'clamp(28px,3.7vw,48px)', lineHeight: 1.1 }}>Eligibility Criteria</h2>
        <p style={{ marginTop: 16, color: 'var(--para-color)', fontSize: 16, fontWeight: 600, lineHeight: 1.85 }}>
          Candidates must meet the following eligibility requirements for admission to various programmes at NSIT.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
        {programs.map((p) => (
          <div key={p.title} style={{
            background: p.bg, borderRadius: 12, padding: '30px 26px',
            border: '1px solid var(--border-color)',
            borderTop: `5px solid ${p.color}`,
            boxShadow: '0 10px 24px rgba(23,32,51,0.05)',
          }}>
            <div style={{
              width: 50, height: 50, borderRadius: 12, background: p.color,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 24, color: '#fff', marginBottom: 16,
            }}>{p.icon}</div>
            <h3 style={{ margin: 0, color: '#14213d', fontSize: 20, fontWeight: 600 }}>{p.title}</h3>
            <ul style={{ margin: '14px 0 0', padding: '0 0 0 18px', listStyle: 'none' }}>
              {p.items.map((item, i) => (
                <li key={i} style={{
                  color: 'var(--para-color)', fontSize: 14, fontWeight: 600,
                  lineHeight: 1.7, marginBottom: 8, paddingLeft: 20,
                  position: 'relative',
                }}>
                  <span style={{ position: 'absolute', left: 0, top: 2, color: p.color, fontSize: 18 }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
