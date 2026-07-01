import { SectionShell } from "../components/SectionShell";

const placementLinks = [
  ["About T & P", "/about-traing-placement"],
  ["Placement Statistics", "/placement-statistics"],
  ["Our Recruiters", "/our-recruiters"],
];

export const metadata = {
  title: "About T & P | NSIT Patna",
};

const programs = [
  { name: "CRT", full: "Campus Recruitment Training", desc: "Live campus recruitment training solution to prepare students for placements. Aims at eliminating the disconnect between industry and academia.", img: "https://www.nsit.in/Content/assets/c_images/AboutTandP/nsit_recruitment_training.jpg" },
  { name: "SDC", full: "Soft Skill Development Cell", desc: "Shortcut to experience — giving the right inputs to bring the workforce up the learning curve in a fast, cost-effective and timely manner.", img: "https://www.nsit.in/Content/assets/c_images/AboutTandP/softSkills.jpg" },
  { name: "RDC", full: "Research & Development Cell", desc: "Training designed for all three types of learners using Power Point, movie clips, role plays, business cases, games and activities.", img: "https://www.nsit.in/Content/assets/c_images/AboutTandP/rd.jpg" },
  { name: "EDC", full: "Entrepreneurship Development Cell", desc: "Creates awareness and promotes entrepreneurship culture — to create job creators, not job seekers.", img: "https://www.nsit.in/Content/assets/c_images/AboutTandP/mission-education.jpg" },
  { name: "CEC", full: "Continuous Evaluation Center", desc: "In-house ERP with online testing platform to keep synchronized progress records of every individual student.", img: "" },
];

export default function AboutTPPage() {
  return (
    <SectionShell section="Placement" activePath="/about-traing-placement" title="About T &amp; P" links={placementLinks}>
      <div style={{
        borderRadius: 16, overflow: 'hidden',
        background: 'linear-gradient(135deg, var(--button-bg) 0%, #b01419 100%)',
        padding: 'clamp(32px,4vw,56px)',
      }}>
        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Training &amp; Placement Cell</span>
        <h2 style={{ margin: '8px 0 0', fontSize: 'clamp(28px,3.5vw,42px)', lineHeight: 1.1, fontWeight: 900, color: '#fff' }}>About Training &amp; Placement</h2>
        <p style={{ marginTop: 10, color: 'rgba(255,255,255,0.65)', fontSize: 15, fontWeight: 500, maxWidth: 640, lineHeight: 1.6 }}>
          A bridge between you and your first job — fostering collaboration with industry for breakthrough discoveries and continuous innovation.
        </p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center', marginTop: 28 }}>
        <div style={{ flex: '1 1 300px' }}>
          <h3 style={{ color: '#14213d', fontSize: 22, fontWeight: 600, margin: 0 }}>A Bridge between you and your first job</h3>
          <p style={{ marginTop: 12, color: 'var(--para-color)', fontSize: 15, fontWeight: 500, lineHeight: 1.8 }}>
            Welcome to the Training and Placement Cell of Netaji Subhas Institute of Technology. At Training and Placement Cell, we foster a climate where collaboration with industry thrives, generating breakthrough discoveries that can support continuous innovation and growth.
          </p>
          <p style={{ marginTop: 12, color: 'var(--para-color)', fontSize: 15, fontWeight: 500, lineHeight: 1.8 }}>
            With a perfect track record of very productive relationships with organizations of all sizes, from startups, growth stage to successful enterprises, our institutions provide the students perfect blend of technical education, soft skills development, and entrepreneurial mindset to make them industry ready.
          </p>
        </div>
        <div style={{ flex: '0 0 auto', borderRadius: 14, overflow: 'hidden', boxShadow: '0 12px 40px rgba(23,32,51,0.12)', width: 'clamp(240px,28vw,380px)' }}>
          <img loading="lazy" src="https://www.nsit.in/Content/assets/c_images/AboutTandP/bridge-jobs.jpg" alt="Bridge between you and your first job" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center', marginTop: 40, flexDirection: 'row-reverse' }}>
        <div style={{ flex: '1 1 300px' }}>
          <h3 style={{ color: '#14213d', fontSize: 22, fontWeight: 600, margin: 0 }}>Activities Under Training &amp; Placement Office</h3>
          <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ background: '#fff', border: '1px solid var(--border-color)', borderRadius: 10, padding: '14px 18px' }}>
              <strong style={{ color: '#14213d', fontSize: 14 }}>JOB PLACEMENTS :</strong>
              <p style={{ margin: '6px 0 0', color: 'var(--para-color)', fontSize: 14, fontWeight: 500, lineHeight: 1.7 }}>
                The Institute has already developed a long lasting relationship with various industries of repute through its Placement Cell. A large number of students have already been placed through the institutes Placement Cell. Training &amp; Placement Cell of Netaji Subhas Institute of Technology is fully functional and dedicated to 100% Placement assistance to students.
              </p>
            </div>
            <div style={{ background: '#fff', border: '1px solid var(--border-color)', borderRadius: 10, padding: '14px 18px' }}>
              <strong style={{ color: '#14213d', fontSize: 14 }}>NSIT SKILL CARFT :</strong>
              <p style={{ margin: '6px 0 0', color: 'var(--para-color)', fontSize: 14, fontWeight: 500, lineHeight: 1.7 }}>
                The Sole motto of the department is to provide students a huge platform to get placed according to their interest and skill set. To infuse confidence in students every year the department organizes this event in which a real time scenario of interviews is created where students learn the tricks to crack interviews.
              </p>
            </div>
            <div style={{ background: '#fff', border: '1px solid var(--border-color)', borderRadius: 10, padding: '14px 18px' }}>
              <strong style={{ color: '#14213d', fontSize: 14 }}>CORPORATE in CAMPUS :</strong>
              <p style={{ margin: '6px 0 0', color: 'var(--para-color)', fontSize: 14, fontWeight: 500, lineHeight: 1.7 }}>
                Following the vision to provide the highly skilled engineers to corporate, NSIT has come up with a unique methodology to bring corporate on campus. This cell has collaborated with reputed companies where students are trained by corporate in real time scenario with latest technologies and according to the specific needs of the companies.
              </p>
            </div>
          </div>
        </div>
        <div style={{ flex: '0 0 auto', borderRadius: 14, overflow: 'hidden', boxShadow: '0 12px 40px rgba(23,32,51,0.12)', width: 'clamp(240px,28vw,380px)' }}>
          <img loading="lazy" src="https://www.nsit.in/Content/assets/c_images/AboutTandP/NSIT_Flagship_Training.jpg" alt="NSIT Flagship Training" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
      </div>

      <div style={{ marginTop: 40, borderRadius: 14, border: '1px solid var(--border-color)', overflow: 'hidden', background: '#fff' }}>
        <div style={{ background: 'linear-gradient(135deg, #14213d 0%, #1f305a 100%)', color: '#fff', padding: '20px 24px' }}>
          <h3 style={{ color: '#fff', fontSize: 20, fontWeight: 600, margin: 0 }}>Rojgar Utsav-2015</h3>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, padding: 24 }}>
          <div style={{ flex: '0 0 auto', borderRadius: 12, overflow: 'hidden', width: 'clamp(200px,25vw,340px)' }}>
            <img loading="lazy" src="https://www.nsit.in/Content/assets/c_images/AboutTandP/Rojgar_utsav.jpg" alt="Rojgar Utsav 2015" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          <div style={{ flex: '1 1 300px' }}>
            <p style={{ margin: 0, color: 'var(--para-color)', fontSize: 15, fontWeight: 500, lineHeight: 1.8 }}>
              Netaji Subhas Institute of Engineering &amp; Technology in association with Youth Campus organized a mega job fair at its Campus on 20 &amp; 21 March, 2015. It was a mega event focused on career improvisation of the youth of Bihar. Couple of thousand of Students participated in this job fair to grab their dream job. This event got accolades from all sectors of Industry and Academia. The platform was provided to the students of Bihar to launch their ambition in the Industrial arena. It was a noble endeavor by NSIT for the youth of Bihar and the management has promised to organize such events in the future.
            </p>
            <p style={{ marginTop: 14, fontStyle: 'italic', color: 'var(--para-color)', fontSize: 14, fontWeight: 600 }}>
              Journey has just begun — many milestones to conquer...
            </p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 40 }}>
        <h3 style={{ color: '#14213d', fontSize: 22, fontWeight: 600, margin: '0 0 6px' }}>NSIT Flagship Training Program</h3>
        <p style={{ color: 'var(--para-color)', fontSize: 15, fontWeight: 500, lineHeight: 1.8, margin: 0 }}>
          This Flagship Training programme is a cluster of well researched and oriented training modules. These modules are aimed at enhancing the employability of the enrolled students. The modules are designed to cater the needs of students from various academic backgrounds and take them on a common platform of employability test.
        </p>
        <p style={{ color: '#14213d', fontSize: 15, fontWeight: 600, marginTop: 16 }}>The complete programme is divided into 5 different sets:</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 10, marginTop: 12 }}>
          {programs.map((p) => (
            <div key={p.name} style={{ background: '#fff', border: '1px solid var(--border-color)', borderRadius: 10, padding: '14px 16px', textAlign: 'center' }}>
              <strong style={{ display: 'block', color: 'var(--main-color)', fontSize: 18 }}>{p.name}</strong>
              <span style={{ display: 'block', color: '#14213d', fontSize: 12, fontWeight: 700, marginTop: 4 }}>{p.full}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 20 }}>
        {programs.map((p, i) => (
          <div key={p.name} style={{
            display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center',
            flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
            background: '#fff', border: '1px solid var(--border-color)', borderRadius: 14,
            padding: 24, overflow: 'hidden',
          }}>
            {p.img && (
              <div style={{ flex: '0 0 auto', borderRadius: 10, overflow: 'hidden', width: 'clamp(200px,22vw,300px)' }}>
                <img loading="lazy" src={p.img} alt={p.full} style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            )}
            <div style={{ flex: '1 1 280px' }}>
              <strong style={{ color: 'var(--main-color)', fontSize: 13, letterSpacing: '0.05em' }}>{p.name}</strong>
              <h4 style={{ color: '#14213d', fontSize: 18, fontWeight: 600, margin: '4px 0 8px' }}>{p.full}</h4>
              <p style={{ margin: 0, color: 'var(--para-color)', fontSize: 14, fontWeight: 500, lineHeight: 1.8 }}>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 40, borderRadius: 14, border: '1px solid var(--border-color)', overflow: 'hidden', background: '#fff' }}>
        <div style={{ background: 'linear-gradient(135deg, #14213d 0%, #1f305a 100%)', color: '#fff', padding: '20px 24px' }}>
          <h3 style={{ color: '#fff', fontSize: 18, fontWeight: 600, margin: 0 }}>Continuous Evaluation Center</h3>
        </div>
        <div style={{ padding: 24 }}>
          <p style={{ margin: 0, color: 'var(--para-color)', fontSize: 15, fontWeight: 500, lineHeight: 1.8 }}>
            Last but not the least all the hard work done on the training goes in vain if we don&apos;t keep a track on the progress. So we have our in-house Enterprise Resource Planning Software inbuilt with an online testing platform to keep a synchronized progress record of every individual student. CEC provides the data required by Placement Department to co-ordinate with the companies and conduct placement drives.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
