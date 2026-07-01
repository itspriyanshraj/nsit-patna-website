import { SectionShell } from "../components/SectionShell";
import Link from "next/link";

const placementLinks = [
  ["About T & P", "/placement/about"],
  ["Placement Statistics", "/placement/statistics"],
  ["Our Recruiters", "/placement/recruiters"],
];

export const metadata = {
  title: "Placement & Training",
  description: "NSIT Patna placement cell provides 100% assistance with 70+ recruiting companies. View placement statistics, our recruiters, and training programs.",
};

const stats = [
  { value: "70+", label: "Companies Visited" },
  { value: "500+", label: "Students Placed" },
  { value: "3.5 LPA", label: "Highest Package" },
  { value: "85%", label: "Placement Percentage" },
];

const highlights = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: "CRT Program",
    desc: "Campus Recruitment Training with aptitude, soft skills & technical interview preparation.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <path d="M8 21h8"/><path d="M12 17v4"/>
      </svg>
    ),
    title: "Industry Tie-ups",
    desc: "Long-standing partnerships with 70+ leading companies across multiple sectors.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "100% Assistance",
    desc: "Dedicated placement cell providing end-to-end placement support to every student.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: "Skill Workshops",
    desc: "Regular workshops on resume building, group discussions, and mock interviews.",
  },
];

export default function PlacementPage() {
  return (
    <SectionShell section="Placement" activePath="/placement" title="Placement" links={placementLinks}>
      <section>
        <span className="d-inline-flex text-uppercase" style={{color: 'var(--main-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em'}}>Training &amp; Placement Cell</span>
        <h2>Placement at NSIT</h2>
        <p style={{fontSize: 16, lineHeight: 1.8, maxWidth: 720}}>
          The Training &amp; Placement Cell at Netaji Subhas Institute of Technology is dedicated to
          providing 100% placement assistance to students. The cell works tirelessly to bridge the
          gap between industry and academia, ensuring that students are well-prepared for the
          corporate world.
        </p>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginTop: 36, marginBottom: 44}}>
          {stats.map((s, i) => (
            <div key={i} style={{
              background: 'linear-gradient(135deg, var(--white-color) 0%, #f8fafd 100%)',
              border: '1px solid var(--border-color)',
              borderRadius: 14,
              padding: '32px 16px',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(23,32,51,0.05)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 4,
                background: 'var(--main-color)',
              }}/>
              <strong style={{display: 'block', fontSize: 'clamp(32px,3.2vw,44px)', color: 'var(--heading-color)', lineHeight: 1, marginBottom: 8}}>{s.value}</strong>
              <span style={{fontSize: 13, color: 'var(--para-color)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em'}}>{s.label}</span>
            </div>
          ))}
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20}}>
          {highlights.map((h, i) => (
            <div key={i} style={{
              display: 'flex', gap: 18,
              background: 'var(--white-color)',
              border: '1px solid var(--border-color)',
              borderRadius: 12,
              padding: '24px 22px',
              boxShadow: '0 2px 12px rgba(23,32,51,0.04)',
              transition: 'transform 200ms ease, box-shadow 200ms ease',
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: 12, display: 'grid', placeItems: 'center', flexShrink: 0,
                color: 'var(--main-color)',
                background: 'linear-gradient(135deg, rgba(247,32,57,0.08), rgba(247,32,57,0.02))',
              }}>
                {h.icon}
              </div>
              <div>
                <strong style={{display: 'block', fontSize: 16, color: 'var(--heading-color)', marginBottom: 4}}>{h.title}</strong>
                <p style={{margin: 0, fontSize: 14, color: 'var(--para-color)', lineHeight: 1.6}}>{h.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{display: 'flex', gap: 14, marginTop: 40, flexWrap: 'wrap'}}>
          {placementLinks.map(([label, href]) => (
            <Link key={href} href={href} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 28px',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              background: href === '/placement/about' ? 'var(--main-color)' : 'var(--white-color)',
              color: href === '/placement/about' ? '#fff' : 'var(--heading-color)',
              border: href === '/placement/about' ? 'none' : '1px solid var(--border-color)',
              transition: 'transform 180ms ease, box-shadow 180ms ease',
            }}>
              {label}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          ))}
        </div>
      </section>
    </SectionShell>
  );
}
