import type { Metadata } from "next";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import BottomNav from "./BottomNav/BottomNav";
import PopupModal from "./components/PopupModal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nsit.in"),
  title: {
    default: "NSIT Patna | Netaji Subhas Institute of Technology",
    template: "%s | NSIT Patna",
  },
  description:
    "Netaji Subhas Institute of Technology, Amhara, Bihta, Patna. Explore admissions, academics, infrastructure, approvals, placement support, and campus contact details.",
  keywords: [
    "NSIT Patna",
    "Netaji Subhas Institute of Technology",
    "engineering college Patna",
    "Bihta engineering college",
    "NSIT admission",
    "technical institute Bihar",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", type: "image/x-icon" },
      { url: "/icon.png?v=2", type: "image/png", sizes: "193x193" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: { url: "/icon.png?v=2", type: "image/png", sizes: "193x193" },
  },
  openGraph: {
    title: "NSIT Patna | Netaji Subhas Institute of Technology",
    description:
      "Discover NSIT Patna academics, recognitions, campus infrastructure, placement support, and admissions information.",
    images: ["/images/logo-opt.png"],
    type: "website",
  },
  alternates: {
    canonical: "https://www.nsit.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <BottomNav />
        <PopupModal />
        <Footer />
      </body>
    </html>
  );
}
