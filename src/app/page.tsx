import type { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "NSIT Patna | Netaji Subhas Institute of Technology",
  description:
    "Netaji Subhas Institute of Technology, Amhara, Bihta, Patna. Explore admissions, academics, infrastructure, approvals, placement support, and campus contact details.",
};

export default function Home() {
  return <HomeContent />;
}
