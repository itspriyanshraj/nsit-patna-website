import { SectionShell } from "../../components/SectionShell";
import { HiMapPin, HiPaperAirplane } from "react-icons/hi2";

const admissionLinks = [
  ["Why Choose NSIT?", "/admission/why-choose"],
  ["Prospectus", "/admission/prospectus"],
  ["Fee Structure", "/admission/fee-structure"],
  ["Eligibility Criteria", "/admission/eligibility"],
  ["Virtual Tour", "/admission/virtual-tour"],
  ["Contact Details", "/admission/contact-details"],
];

const galleryPhotos = [
  "/gallery/virtual-tour/vt1-clean.jpg",
  "/gallery/virtual-tour/vt2-clean.jpg",
  "/gallery/virtual-tour/vt3-clean.jpg",
  "/gallery/virtual-tour/vt4-clean.jpg",
  "/gallery/virtual-tour/vt5-clean.jpg",
  "/gallery/virtual-tour/vt6-clean.jpg",
  "/gallery/virtual-tour/vt7-clean.jpg",
  "/gallery/virtual-tour/vt8-clean.jpg",
  "/gallery/virtual-tour/vt9-clean.jpg",
  "/gallery/virtual-tour/vt10-clean.jpg",
  "/gallery/virtual-tour/vt11-clean.jpg",
  "/gallery/virtual-tour/vt12-clean.jpg",
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
          <h3 style={{ margin: 0, color: '#14213d', fontSize: 18, fontWeight: 600 }}>Plan Your Visit</h3>
          <p style={{ margin: '10px 0 0', color: 'var(--para-color)', fontSize: 14, fontWeight: 600, lineHeight: 1.7 }}>
            NSIT is located at Amhara, Bihta, Patna — approximately 25 km from Patna city centre
            and 2 km from Bihta railway station. The campus is spread across 11 acres with a built-up
            area of 4 lakh sq. ft.
          </p>
          <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: 'var(--para-color)' }}>
              <HiMapPin style={{ fontSize: 16, color: 'var(--main-color)' }} /> Bihta Railway Station: 2 km
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: 'var(--para-color)' }}>
              <HiPaperAirplane style={{ fontSize: 16, color: 'var(--main-color)' }} /> Patna Airport: ~30 km
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ color: '#14213d', fontSize: 20, fontWeight: 600, margin: '0 0 4px' }}>Campus Gallery</h3>
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
