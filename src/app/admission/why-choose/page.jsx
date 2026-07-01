import { SectionShell } from "../../components/SectionShell";
import { HiBellAlert, HiBookOpen, HiStar, HiAcademicCap } from "react-icons/hi2";

const admissionLinks = [
  ["Why Choose NSIT?", "/admission/why-choose"],
  ["Prospectus", "/admission/prospectus"],
  ["Fee Structure", "/admission/fee-structure"],
  ["Eligibility Criteria", "/admission/eligibility"],
  ["Virtual Tour", "/admission/virtual-tour"],
  ["Contact Details", "/admission/contact-details"],
];

const quickStats = [
  { icon: <HiBellAlert />, value: "70-80%", label: "Placement Rate" },
  { icon: <HiBookOpen />, value: "70,000+", label: "Books in Library" },
  { icon: <HiStar />, value: "₹10 LPA+", label: "Top Salary Package" },
  { icon: <HiAcademicCap />, value: "1:1", label: "Mentorship Ratio" },
];

const sections = [
  {
    title: "1. Academic Excellence & Accreditation",
    items: [
      "NSIT is AICTE-approved & NAAC-accredited, ensuring high academic standards.",
      "Offers Diploma, B.Tech, M.Tech (Proposed), BBA and BCA programs in cutting-edge fields.",
      "Well-structured curriculum aligned with industry trends and emerging technologies.",
      "Few Centre of Excellence inside the campus.",
    ],
  },
  {
    title: "2. Exceptional Placement & Career Support",
    items: [
      "Consistently achieves 70-80% placement rates with top MNCs.",
      "Graduates secure high salary packages, with top offers exceeding ₹10 LPA.",
      "Strong industry tie-ups with Microsoft, Ultratech, Suviksan Inc. and more.",
      "Dedicated Training & Placement Cell offers resume-building, mock interviews & coding boot camps.",
    ],
  },
  {
    title: "3. Industry-Focused Learning & Practical Exposure",
    items: [
      "State-of-the-art labs for AI, IoT, Robotics, and Cybersecurity.",
      "Tie-ups with Tech Incubators & Research Centers for real-world projects.",
      "Internship & Industry Connect Programs with leading tech companies.",
      "Hands-on learning through live projects, hackathons, and industrial visits.",
    ],
  },
  {
    title: "4. World-Class Infrastructure & Campus Facilities",
    items: [
      "Smart classrooms & fully-equipped labs with modern technology.",
      "Central Library with 70,000+ books, e-journals & research papers.",
      "On-campus hostel & mess facilities with a safe, student-friendly environment.",
      "Lush green campus with modern amenities like cafeterias, playgrounds, and recreational areas.",
    ],
  },
  {
    title: "5. Research & Innovation Opportunities",
    items: [
      "Encourages patents, research papers, and tech startups.",
      "Collaborations with premium institutes such as IITs, NITs, and NIELIT.",
      "Students regularly win awards in Smart India Hackathon, SIH, and National-Level competitions.",
    ],
  },
  {
    title: "6. Expert Faculty & Mentorship",
    items: [
      "Faculty includes PhD holders from IITs, NITs, and top institutions.",
      "1:1 Mentorship programs to guide students in academics & career paths.",
      "Faculty involvement in national & international research projects.",
    ],
  },
  {
    title: "7. Holistic Development: Beyond Academics",
    items: [
      "Active participation in cultural, sports, and technical fests.",
      "Annual Tech Fest, Robotics Competitions & Coding Challenges to enhance skills.",
      "Entrepreneurship cell (E-Cell) and Research & Development Cell (R&D Cell) for startups and funding support.",
      "Various clubs – AI Club, Robotics Club, Coding Club, Sports Club, and more.",
    ],
  },
  {
    title: "8. Affordable & Value-for-Money Education",
    items: [
      "Lower fee structure compared to private universities with similar offerings.",
      "Education loans & financial aid options available under Students Credit Card Scheme through state government.",
    ],
  },
  {
    title: "9. Strong Alumni Network & Career Growth",
    items: [
      "NSIT alumni are working in Fortune 500 companies, Indian startups, and government organizations.",
      "Regular alumni interactions, mentorship sessions, and networking opportunities.",
      "Graduates have strong career progression, with many becoming CXOs, entrepreneurs, and industry leaders.",
    ],
  },
];

const bulletPoints = [
  "High placements & industry collaborations.",
  "Cutting-edge curriculum & hands-on learning.",
  "Affordable quality education with scholarships.",
  "Safe & vibrant campus with excellent infrastructure.",
  "Exposure to global opportunities & career growth.",
  "High Teacher Student ratio.",
];

export const metadata = {
  title: "Why Choose NSIT? - Admission - NSIT",
  description: "Discover why NSIT is the right choice — AICTE approved, NAAC accredited, modern infrastructure, experienced faculty, placement support, and more.",
};

export default function Page() {
  return (
    <SectionShell section="Admission" activePath="/admission/why-choose" title="Why Choose NSIT?" links={admissionLinks}>
      <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
        <div style={{
          background: "linear-gradient(135deg, #14213d 0%, #1f305a 100%)",
          borderRadius: 14, padding: "36px 32px", color: "#fff",
          boxShadow: "0 8px 28px rgba(20,33,61,0.2)",
        }}>
          <h2 style={{ fontSize: "clamp(22px,3vw,32px)", fontWeight: 900, margin: "0 0 18px", color: "#fff" }}>Why Choose NSIT?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 10 }}>
            {bulletPoints.map((b) => (
              <div key={b} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <span style={{ color: "var(--main-color)", fontSize: 18 }}>▸</span>
                <span style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.5, color: "rgba(255,255,255,0.92)" }}>{b}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 14 }}>
          {quickStats.map((s) => (
            <div key={s.label} style={{
              background: "var(--white-color)", border: "1px solid var(--border-color)",
              borderRadius: 10, padding: "20px", textAlign: "center",
              boxShadow: "0 4px 14px rgba(23,32,51,0.06)",
            }}>
              <span style={{ fontSize: 32, color: "var(--main-color)" }}>{s.icon}</span>
              <div style={{ fontSize: 22, fontWeight: 900, color: "var(--main-color)", marginTop: 6 }}>{s.value}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--para-color)" }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {sections.map((sec) => (
            <div key={sec.title} style={{
              background: "var(--white-color)", border: "1px solid var(--border-color)",
              borderRadius: 10, padding: "22px 24px",
              borderLeft: "4px solid var(--main-color)",
              boxShadow: "0 4px 16px rgba(23,32,51,0.05)",
            }}>
              <h3 style={{ margin: "0 0 12px", fontSize: 17, fontWeight: 600, color: "#14213d" }}>{sec.title}</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                {sec.items.map((item) => (
                  <li key={item} style={{ display: "flex", gap: 10, fontSize: 14, fontWeight: 600, lineHeight: 1.6, color: "var(--para-color)" }}>
                    <span style={{ color: "var(--main-color)", marginTop: 2, minWidth: 6 }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
