import type { Metadata } from "next";
import PressMediaContent from "./PressMediaContent";

export const metadata: Metadata = {
  title: "Gallery || Netaji Subhas Institute of Technology, Patna",
  description: "Photo gallery of Netaji Subhas Institute of Technology, Patna — campus events, activities and more.",
};

export default function PressMediaPage() {
  return <PressMediaContent />;
}
