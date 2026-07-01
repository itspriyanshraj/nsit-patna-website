import { SectionShell } from "../components/SectionShell";

const placementLinks = [
  ["About T & P", "/about-traing-placement"],
  ["Placement Statistics", "/placement-statistics"],
  ["Our Recruiters", "/our-recruiters"],
];

const recruiters = [
  { file: "Airtel.jpg", name: "Airtel" },
  { file: "Alkizen_Egicon.jpg", name: "Alkizen Egicon" },
  { file: "ALOHA_Technology.jpg", name: "Aloha Technology" },
  { file: "Aspro_It.jpg", name: "Aspro IT" },
  { file: "Bajaj.jpg", name: "Bajaj" },
  { file: "Baryons.jpg", name: "Baryons" },
  { file: "Bright_Champs.jpg", name: "Bright Champs" },
  { file: "Byjus.jpg", name: "Byju's" },
  { file: "Capital_via.jpg", name: "Capital Via" },
  { file: "CEAT.jpg", name: "CEAT" },
  { file: "CRTD.jpg", name: "CRTD" },
  { file: "Dalmia.jpg", name: "Dalmia" },
  { file: "Dhoot_transmission.jpg", name: "Dhoot Transmission" },
  { file: "Enaviya.jpg", name: "Enaviya" },
  { file: "EPI.jpg", name: "EPI" },
  { file: "Future_skills.jpg", name: "Future Skills" },
  { file: "Havells.jpg", name: "Havells" },
  { file: "HCL.jpg", name: "HCL" },
  { file: "HIM.jpg", name: "HIM" },
  { file: "IHSMarkit.jpg", name: "IHS Markit" },
  { file: "INDUS_TOWER.jpg", name: "Indus Tower" },
  { file: "ITC.jpg", name: "ITC" },
  { file: "JM.jpg", name: "JM" },
  { file: "Kalpa_Taro.jpg", name: "Kalpa Taro" },
  { file: "KantaFlex.jpg", name: "Kanta Flex" },
  { file: "Knocial.jpg", name: "Knocial" },
  { file: "Koodnest.jpg", name: "Koodnest" },
  { file: "L-T.jpg", name: "L&T" },
  { file: "Maruti_Suzuki.jpg", name: "Maruti Suzuki" },
  { file: "NIIT.jpg", name: "NIIT" },
  { file: "NLMK.jpg", name: "NLMK" },
  { file: "Pentagon_space.jpg", name: "Pentagon Space" },
  { file: "Planet_Spark.jpg", name: "Planet Spark" },
  { file: "Premier_Energies.jpg", name: "Premier Energies" },
  { file: "Prism_Johnson.jpg", name: "Prism Johnson" },
  { file: "Radiant.jpg", name: "Radiant" },
  { file: "Relaxo.jpg", name: "Relaxo" },
  { file: "Renew.jpg", name: "Renew" },
  { file: "Samriddhi.jpg", name: "Samriddhi" },
  { file: "Schoolink.jpg", name: "Schoolink" },
  { file: "sgk.jpg", name: "SGK" },
  { file: "Societe_Generale.jpg", name: "Societe Generale" },
  { file: "Solex.jpg", name: "Solex" },
  { file: "Somerset.jpg", name: "Somerset" },
  { file: "Subros.jpg", name: "Subros" },
  { file: "Talentserve.jpg", name: "Talent Serve" },
  { file: "TCS.jpg", name: "TCS" },
  { file: "Tosha.jpg", name: "Tosha" },
  { file: "Vaibs.jpg", name: "Vaibs" },
  { file: "Venus.jpg", name: "Venus" },
  { file: "Vi.jpg", name: "Vi" },
];

export const metadata = {
  title: "Our Recruiters | NSIT Patna",
};

export default function RecruitersPage() {
  return (
    <SectionShell section="Placement" activePath="/our-recruiters" title="Our Recruiters" links={placementLinks}>
      <div style={{
        borderRadius: 16, overflow: 'hidden',
        background: 'linear-gradient(135deg, var(--button-bg) 0%, #b01419 100%)',
        padding: 'clamp(32px,4vw,56px)',
      }}>
        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Recruiting Partners</span>
        <h2 style={{ margin: '8px 0 0', fontSize: 'clamp(28px,3.5vw,42px)', lineHeight: 1.1, fontWeight: 900, color: '#fff' }}>Our Recruiters</h2>
        <p style={{ marginTop: 10, color: 'rgba(255,255,255,0.65)', fontSize: 15, fontWeight: 500, maxWidth: 640, lineHeight: 1.6 }}>
          Netaji Subhas Institute of Technology has been privileged to have placement partnerships
          with <strong style={{ color: '#fff' }}>{recruiters.length}+</strong> esteemed organizations.
        </p>
      </div>

      <div className="recruiters-grid" style={{
        marginTop: 28,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: 20,
      }}>
        {recruiters.map((r, i) => (
          <div key={i} className="recruiter-card" style={{
            background: 'var(--white-color)',
            border: '1px solid var(--border-color)',
            borderRadius: 14,
            padding: '28px 16px',
            textAlign: 'center',
            boxShadow: '0 4px 16px rgba(23,32,51,0.04)',
            transition: 'transform 220ms ease, box-shadow 220ms ease',
          }}>
            <div style={{ height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
              <img
                src={`/placement/${r.file}`}
                alt={r.name}
                style={{ maxHeight: 88, maxWidth: '100%', objectFit: 'contain', display: 'block' }}
              />
            </div>
            <strong style={{ display: 'block', fontSize: 14, color: 'var(--heading-color)', lineHeight: 1.3 }}>{r.name}</strong>
          </div>
        ))}
      </div>

      <style>{`.recruiter-card:hover{transform:translateY(-4px);box-shadow:0 12px 28px rgba(23,32,51,0.1)}`}</style>
    </SectionShell>
  );
}
