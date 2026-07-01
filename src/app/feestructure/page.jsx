import { SectionShell } from "../components/SectionShell";
import FeeContent from "../admission/fee-structure/FeeContent";

const admissionLinks = [
  ["Why Choose NSIT?", "/why-Choose-us"],
  ["Prospectus", "/admission/prospectus"],
  ["Fee Structure", "/feestructure"],
  ["Eligibility Criteria", "/eligibilitycriteria"],
  ["Virtual Tour", "/tour"],
  ["Contact Details", "/contactdetails"],
];

export const metadata = {
  title: "Fee Structure - Admission - NSIT",
  description: "Fee structure for B.Tech, Diploma, BCA, and BBA programmes at NSIT",
};

export default function Page() {
  return (
    <SectionShell section="Admission" activePath="/feestructure" title="Fee Structure" links={admissionLinks}>
      <FeeContent />
    </SectionShell>
  );
}
