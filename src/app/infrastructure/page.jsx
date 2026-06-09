import { SectionShell } from "../components/SectionShell";
import { infrastructureLinks } from "./infrastructureLinks";

export const metadata = {
  title: "Infrastructure | NSIT Patna",
};

const facilities = [
  { title: "Library", desc: "Vast collection of books, journals, and digital resources spread across 10,000 sq. ft.", img: "https://www.nsit.in/Content/assets/c_images/nsit_images/VISIONOFTHEINSTITUTION.jpg", label: "10K sq.ft" },
  { title: "Computing Resource", desc: "Latest servers, workstations, and high-speed internet for e-learning.", img: "https://www.nsit.in/Content/assets/c_images/nsit_images/VISIONOFTHEINSTITUTION.jpg", label: "24x7 Access" },
  { title: "Labs", desc: "State-of-the-art laboratories for Computer Science, Engineering, Physics & Chemistry.", img: "https://www.nsit.in/Content/assets/c_images/nsit_images/VISIONOFTHEINSTITUTION.jpg", label: "6 Labs" },
  { title: "Classrooms", desc: "Smart classrooms with modern digital teaching aids and comfortable furniture.", img: "https://www.nsit.in/Content/assets/c_images/nsit_images/VISIONOFTHEINSTITUTION.jpg", label: "Smart Class" },
  { title: "Hostel", desc: "Separate hostels for boys and girls with round-the-clock Wi-Fi and amenities.", img: "https://www.nsit.in/Content/assets/c_images/nsit_images/VISIONOFTHEINSTITUTION.jpg", label: "500+ Rooms" },
  { title: "Canteen", desc: "Hygienic and nutritious food with separate seating for students and staff.", img: "https://www.nsit.in/Content/assets/c_images/nsit_images/VISIONOFTHEINSTITUTION.jpg", label: "Hygienic" },
  { title: "Gallery", desc: "Campus life captured through photographs of events, labs, and facilities.", img: "https://www.nsit.in/Content/assets/c_images/nsit_images/VISIONOFTHEINSTITUTION.jpg", label: "Moments" },
  { title: "Transport", desc: "Bus routes connecting Patna, Bihta, and surrounding areas to campus.", img: "https://www.nsit.in/Content/assets/c_images/nsit_images/VISIONOFTHEINSTITUTION.jpg", label: "Fleet" },
];

export default function InfrastructurePage() {
  return (
    <SectionShell section="Infrastructure" activePath="/infrastructure" title="Infrastructure" links={infrastructureLinks}>
      <div style={{position: 'relative', borderRadius: 12, overflow: 'hidden', height: 340, marginBottom: 0}}>
        <img
          src="https://www.nsit.in/Content/assets/c_images/about_img/about-us.jpg"
          alt="NSIT Campus"
          className="w-100 h-100"
          style={{objectFit: 'cover', borderRadius: 12}}
        />
        <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(23,32,51,0.78) 0%, rgba(23,32,51,0.18) 100%)', borderRadius: 12, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'clamp(24px,3vw,40px)'}}>
          <span style={{color: 'var(--main-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8}}>NSIT Patna</span>
          <h2 style={{color: '#fff', fontSize: 'clamp(28px,3.7vw,48px)', lineHeight: 1.1, margin: 0}}>Campus &amp; Facilities</h2>
          <p style={{color: 'rgba(255,255,255,0.82)', fontSize: 16, fontWeight: 600, lineHeight: 1.85, marginTop: 10, maxWidth: 640}}>
            NSIT has a huge infrastructure of approximately 4 lakh sq. ft of built up area on approximately 11 Acres of Land at Amhara, Bihta, Patna.
          </p>
        </div>
      </div>

      <div className="d-grid" style={{gap: 20, gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', marginTop: 28}}>
        {facilities.map(f => (
          <div key={f.title} style={{background: 'var(--white-color)', border: '1px solid var(--border-color)', borderRadius: 10, overflow: 'hidden', boxShadow: '0 16px 34px rgba(23,32,51,0.08)', transition: 'transform 220ms ease, box-shadow 220ms ease'}}>
            <div style={{height: 170, overflow: 'hidden', position: 'relative'}}>
              <img src={f.img} alt={f.title} className="w-100 h-100" style={{objectFit: 'cover'}} />
              <span style={{position: 'absolute', top: 12, left: 12, padding: '4px 12px', background: 'var(--main-color)', color: '#fff', fontSize: 11, fontWeight: 950, borderRadius: 4, letterSpacing: '0.04em', textTransform: 'uppercase'}}>{f.label}</span>
            </div>
            <div style={{padding: '18px 20px 22px'}}>
              <h3 style={{margin: 0, color: '#14213d', fontSize: 18, fontWeight: 950}}>{f.title}</h3>
              <p style={{margin: '8px 0 0', color: 'var(--para-color)', fontSize: 14, fontWeight: 600, lineHeight: 1.6}}>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
