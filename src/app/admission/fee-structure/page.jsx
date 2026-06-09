import { SectionShell } from "../../components/SectionShell";
import FeeContent from "./FeeContent";

const admissionLinks = [
  ["Why Choose NSIT?", "/admission/why-choose"],
  ["Prospectus", "/admission/prospectus"],
  ["Fee Structure", "/admission/fee-structure"],
  ["Eligibility Criteria", "/admission/eligibility"],
  ["Virtual Tour", "/admission/virtual-tour"],
  ["Contact Details", "/admission/contact-details"],
];

export const metadata = {
  title: "Fee Structure - Admission - NSIT",
  description: "Fee structure for B.Tech, Diploma, BCA, and BBA programmes at NSIT",
};

export default function Page() {
  return (
    <SectionShell section="Admission" activePath="/admission/fee-structure" title="Fee Structure" links={admissionLinks}>
      <FeeContent />
    </SectionShell>
  );
}
