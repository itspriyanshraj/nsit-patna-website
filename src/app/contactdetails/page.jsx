import { SectionShell } from "../components/SectionShell";
import { HiBuildingLibrary, HiPhone, HiEnvelope, HiClock } from "react-icons/hi2";

const admissionLinks = [
  ["Why Choose NSIT?", "/why-Choose-us"],
  ["Prospectus", "/admission/prospectus"],
  ["Fee Structure", "/feestructure"],
  ["Eligibility Criteria", "/eligibilitycriteria"],
  ["Virtual Tour", "/tour"],
  ["Contact Details", "/contactdetails"],
];

const contacts = [
  { label: "Address", value: "Netaji Subhas Institute of Technology, Amhara, Bihta, Patna – 801118, Bihar", icon: <HiBuildingLibrary /> },
  { label: "Phone", value: "7781020349 / 7781020359 / 9102403261", icon: <HiPhone /> },
  { label: "Email", value: "info@nsit.in", icon: <HiEnvelope /> },
];

export const metadata = {
  title: "Contact Details - Admission - NSIT",
  description: "Contact information for NSIT admission office",
};

export default function Page() {
  return (
    <SectionShell section="Admission" activePath="/contactdetails" title="Contact Details" links={admissionLinks}>
      <div style={{
        borderRadius: 12, overflow: 'hidden', marginBottom: 28,
        background: `linear-gradient(135deg, rgba(23,32,51,0.88) 0%, rgba(23,32,51,0.72) 100%), url(https://www.nsit.in/Content/assets/c_images/about_img/about-us.jpg) center/cover no-repeat`,
        padding: 'clamp(36px,5vw,60px)', textAlign: 'center',
      }}>
        <span style={{ color: 'var(--main-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Contact</span>
        <h2 style={{ margin: '10px 0 0', fontSize: 'clamp(30px,4vw,50px)', lineHeight: 1.08, fontWeight: 900, color: '#fff' }}>Get in Touch</h2>
        <p style={{ marginTop: 12, color: 'rgba(255,255,255,0.85)', fontSize: 16, fontWeight: 600 }}>
          For any admission-related queries, feel free to contact us through the details below.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginBottom: 28 }}>
        {contacts.map((c) => (
          <div key={c.label} style={{
            background: 'var(--white-color)', border: '1px solid var(--border-color)',
            borderRadius: 10, padding: '28px 24px', textAlign: 'center',
            boxShadow: '0 10px 24px rgba(23,32,51,0.06)',
          }}>
            <div style={{
              width: 56, height: 56, borderRadius: 14, background: 'var(--main-color)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 24, color: '#fff', margin: '0 auto 14px',
            }}><span style={{ fontSize: 24 }}>{c.icon}</span></div>
            <span style={{ color: 'var(--main-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{c.label}</span>
            <p style={{ margin: '8px 0 0', color: '#14213d', fontSize: 15, fontWeight: 600, lineHeight: 1.5 }}>{c.value}</p>
          </div>
        ))}
      </div>

      <div style={{ borderRadius: 10, overflow: 'hidden', marginBottom: 28 }}>
        <iframe
          title="NSIT Location"
          src="https://maps.google.com/maps?q=Netaji%20Subhas%20Institute%20Of%20Technology%20Amhara%20Bihta%20Patna&t=&z=15&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
          style={{ width: '100%', height: 380, border: 0 }}
        />
      </div>

      <div style={{
        borderRadius: 10, padding: 'clamp(28px,4vw,48px)',
        background: 'linear-gradient(135deg, var(--main-color) 0%, #d41c32 100%)',
        color: '#fff',
      }}>
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, margin: '0 auto 12px', color: '#fff' }}><HiClock /></div>
          <h3 style={{ margin: 0, fontSize: 22, fontWeight: 600 }}>Admission Helpdesk</h3>
        </div>
        <p style={{ margin: 0, fontSize: 15, fontWeight: 600, lineHeight: 1.8, textAlign: 'center', maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
          The admission helpdesk is available Monday to Saturday, 9:00 AM to 5:00 PM.
          Candidates can also reach out via phone or email for any admission-related assistance.
        </p>
      </div>
    </SectionShell>
  );
}
