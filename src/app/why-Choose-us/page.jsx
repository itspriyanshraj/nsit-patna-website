import { SectionShell } from "../components/SectionShell";

const admissionLinks = [
  ["Why Choose NSIT?", "/why-Choose-us"],
  ["Prospectus", "/admission/prospectus"],
  ["Fee Structure", "/feestructure"],
  ["Eligibility Criteria", "/eligibilitycriteria"],
  ["Virtual Tour", "/tour"],
  ["Contact Details", "/contactdetails"],
];

export const metadata = {
  title: "Why Choose NSIT? | NSIT Patna",
  description: "Discover why NSIT is the right choice — AICTE approved, NAAC accredited, modern infrastructure, experienced faculty, placement support, and more.",
};

export default function Page() {
  return (
    <SectionShell section="Admission" activePath="/why-Choose-us" title="Why Choose NSIT?" links={admissionLinks}>
      <div style={{ borderRadius: 14, overflow: "hidden", marginBottom: 20 }}>
        <img src="https://www.nsit.in/Content/assets/images/why-choose-us-1.jpg" alt="Why Choose NSIT" style={{ width: "100%", display: "block" }} />
      </div>
      <div style={{ borderRadius: 14, overflow: "hidden" }}>
        <img src="https://www.nsit.in/Content/assets/images/why-choose-us-2.jpg" alt="Why Choose NSIT" style={{ width: "100%", display: "block" }} />
      </div>
    </SectionShell>
  );
}
