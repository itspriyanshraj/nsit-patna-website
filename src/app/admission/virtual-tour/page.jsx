import { SectionShell } from "../../components/SectionShell";

const admissionLinks = [
  ["Why Choose NSIT?", "/admission/why-choose"],
  ["Prospectus", "/admission/prospectus"],
  ["Fee Structure", "/admission/fee-structure"],
  ["Eligibility Criteria", "/admission/eligibility"],
  ["Virtual Tour", "/admission/virtual-tour"],
  ["Contact Details", "/admission/contact-details"],
];

const galleryPhotos = [
  "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imageb4931853ca2d4f04a5af0196f7f9a1f7o20hhqd7xp6q7b8gc3rki.jpg",
  "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image7ab0f072b86543279c57ea633856ae14rob6vaj71hcfe6lf9jyl.jpg",
  "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imageabb0a5ef25884b188ba8bf2adf0dc937vyxvsp1yg39jui61murql.jpg",
  "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagea889205b2a964bc89f9eb1b5422fa6b6jupbys0p4k9riqanlycin.jpg",
  "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image61e31e95650740298ea328c296e71f47aqfj3ry139kalnc5tvtkn.jpg",
  "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imageb1295408afcf47a7bbda60e0cb7cc141bakry4ynr2r4jjlh0cwayi.jpg",
  "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imageb75d91a6117c49ff9f9aa7d79e8fa3830u9lrcism6ddyr0cwuu5c4.jpg",
  "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imageb1c4859394634bbb95c620f76403eb2fo0ezfy06w5c83fhjm4lbmx.jpg",
  "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image1ec242503a0045dd99ac191c6e7a5142hapfn6sgqqcbcyt2y4c5an.jpg",
  "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image785167c00e504f25922f9b920b3b50406jvu7qjj69h97amugwg1n6.jpg",
  "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image998d1174a2da4f548b114cf0457c5afd5a1m9570xpfecan6ydpou.jpg",
  "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image57b0fb3decdc42108194efd2264c138bo5rw5z1fakplgnstslbgnf.jpg",
];

export const metadata = {
  title: "Virtual Tour - Admission - NSIT",
  description: "360° virtual tour and campus gallery of NSIT located at Amhara, Bihta, Patna",
};

export default function Page() {
  return (
    <SectionShell section="Admission" activePath="/admission/virtual-tour" title="Virtual Tour" links={admissionLinks}>
      <style>{`.gallery-item:hover{transform:scale(1.03);box-shadow:0 8px 24px rgba(0,0,0,0.12)}`}</style>
      <div style={{
        borderRadius: 12, overflow: 'hidden', marginBottom: 28, position: 'relative',
        background: 'linear-gradient(135deg, #14213d 0%, #1f305a 100%)',
        padding: 'clamp(32px,5vw,60px)', minHeight: 200,
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}>
        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em', textTransform: 'uppercase' }}>NSIT Patna</span>
        <h2 style={{ margin: '8px 0 0', fontSize: 'clamp(28px,3.5vw,44px)', lineHeight: 1.08, fontWeight: 900, color: '#fff' }}>Virtual Tour</h2>
        <p style={{ marginTop: 10, color: 'rgba(255,255,255,0.7)', fontSize: 15, fontWeight: 500, maxWidth: 560, lineHeight: 1.6 }}>
          Explore NSIT campus through our 360° virtual tour and gallery — experience our 11-acre campus from anywhere.
        </p>
      </div>

      <div style={{
        borderRadius: 12, overflow: 'hidden', marginBottom: 28,
        border: '1px solid var(--border-color)',
        boxShadow: '0 4px 16px rgba(23,32,51,0.06)',
      }}>
        <iframe
          title="NSIT Virtual Tour"
          src="https://nsit.in/tour/"
          loading="lazy"
          style={{ width: '100%', height: 500, border: 0 }}
        />
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, marginBottom: 32 }}>
        <div style={{ flex: '2 1 500px', borderRadius: 12, overflow: 'hidden' }}>
          <iframe
            title="NSIT Campus Location"
            src="https://maps.google.com/maps?q=Netaji%20Subhas%20Institute%20Of%20Technology%20Amhara%20Bihta%20Patna&t=&z=15&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            style={{ width: '100%', height: 320, border: 0 }}
          />
        </div>

        <div style={{
          flex: '1 1 260px', background: 'var(--white-color)', border: '1px solid var(--border-color)',
          borderRadius: 12, padding: 26, boxShadow: '0 10px 24px rgba(23,32,51,0.06)',
        }}>
          <h3 style={{ margin: 0, color: '#14213d', fontSize: 18, fontWeight: 850 }}>Plan Your Visit</h3>
          <p style={{ margin: '10px 0 0', color: 'var(--para-color)', fontSize: 14, fontWeight: 600, lineHeight: 1.7 }}>
            NSIT is located at Amhara, Bihta, Patna — approximately 25 km from Patna city centre
            and 2 km from Bihta railway station. The campus is spread across 11 acres with a built-up
            area of 4 lakh sq. ft.
          </p>
          <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: 'var(--para-color)' }}>
              <span style={{ fontSize: 16 }}>🚂</span> Bihta Railway Station: 2 km
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: 'var(--para-color)' }}>
              <span style={{ fontSize: 16 }}>✈️</span> Patna Airport: ~30 km
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ color: '#14213d', fontSize: 20, fontWeight: 850, margin: '0 0 4px' }}>Campus Gallery</h3>
        <p style={{ color: 'var(--para-color)', fontSize: 14, fontWeight: 500, margin: '0 0 18px' }}>
          Glimpses of our campus infrastructure and facilities
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
          {galleryPhotos.map((src, i) => (
            <a
              key={i}
              href={src}
              target="_blank"
              rel="noreferrer"
              className="gallery-item"
              style={{
                borderRadius: 10, overflow: 'hidden', height: 180, display: 'block',
                background: `url(${src}) center/cover no-repeat`,
                border: '1px solid var(--border-color)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
