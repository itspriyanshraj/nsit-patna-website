import { SectionShell } from "../components/SectionShell";

const placementLinks = [
  ["About T & P", "/about-traing-placement"],
  ["Placement Statistics", "/placement-statistics"],
  ["Our Recruiters", "/our-recruiters"],
];

export const metadata = {
  title: "Placement Statistics | NSIT Patna",
};

export default function PlacementStatisticsPage() {
  return (
    <SectionShell section="Placement" activePath="/placement-statistics" title="Placement Statistics" links={placementLinks}>
      <div style={{
        borderRadius: 16, overflow: 'hidden',
        background: 'linear-gradient(135deg, var(--button-bg) 0%, #b01419 100%)',
        padding: 'clamp(32px,4vw,56px)',
      }}>
        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em', textTransform: 'uppercase' }}>NSIT Placement 2023-24</span>
        <h2 style={{ margin: '8px 0 0', fontSize: 'clamp(28px,3.5vw,42px)', lineHeight: 1.1, fontWeight: 900, color: '#fff' }}>Placement Statistics</h2>
        <p style={{ marginTop: 10, color: 'rgba(255,255,255,0.65)', fontSize: 15, fontWeight: 500, maxWidth: 640, lineHeight: 1.6 }}>
          Placement statistics for the academic year 2023-24 at Netaji Subhas Institute of Technology.
        </p>
      </div>

      <div style={{ marginTop: 28, borderRadius: 14, overflow: 'hidden', border: '1px solid var(--border-color)' }}>
        <iframe
          src="https://www.nsit.in/Content/assets/c_images/nsit_EEE_Course_pdf/Placement_Statistics_2023-24.pdf"
          width="100%"
          height="900"
          style={{ border: 0, display: 'block' }}
          title="Placement Statistics 2023-24 PDF"
        />
      </div>
    </SectionShell>
  );
}
