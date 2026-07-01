import { redirect } from "next/navigation";

export const metadata = {
  title: "Gallery | NSIT Patna",
  robots: { index: false, follow: true },
};

export default function GalleryPage() {
  redirect("/press-media");
}
