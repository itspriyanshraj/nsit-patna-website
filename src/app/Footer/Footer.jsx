import Image from "next/image";
import styles from "./Footer.module.css";

const quickLinks = [
  "Gallery",
  "Contact",
  "Anti Ragging",
  "NSIT Virtual Tour",
  "AICTE",
  "AKU",
  "Dept. Of Sc. & Tech.",
  "SBTE",
];

const contacts = [
  "Netaji Subhas Institute Of Technology, Amhara, Bihta, Patna - 801118",
  "9102403265",
  "www.nsit.in",
  "info@nsit.in",
  "deanadmin@nsiterp.in",
  "deanadministration@nsiterp.in",
  "tpo@nsit.in",
];

export default function Footer() {
  return (
    <footer className={`${styles.footer} position-relative overflow-visible mt-5`}>
      <div className={`${styles.footerInner} mx-auto`}>
        <section className={`${styles.ctaPanel} position-relative z-2 d-flex align-items-center justify-content-between flex-wrap gap-4 p-4`}>
          <div>
            <span className="d-block mb-1 text-uppercase" style={{ color: "var(--main-color)", fontSize: 12, fontWeight: 800 }}>Admissions & Campus Support</span>
            <h2 className={`${styles.ctaPanelH2} text-white`}>Start your NSIT journey with the right information.</h2>
          </div>
          <a href="#" className="d-inline-flex align-items-center justify-content-center gap-2 text-white fw-bolder text-nowrap" style={{ minHeight: 50, padding: "0 16px 0 7px", background: "var(--main-color)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8, boxShadow: "0 16px 30px rgba(237,28,36,0.24)" }}>
            <span style={{ width: 32, height: 32, display: "grid", placeItems: "center", color: "var(--main-color)", background: "var(--white-color)", borderRadius: 7 }}>✉</span>
            Send Enquiry
            <span style={{ transition: "transform 180ms ease" }}>→</span>
          </a>
        </section>

        <div className={`${styles.footerGrid} mt-4`}>
          <section className={`${styles.brandBlock} d-grid`} style={{ gridTemplateColumns: "92px 1fr", gap: 18 }}>
            <Image
              src="/images/logo-opt.png"
              alt="Netaji Subhas Institute of Technology logo"
              width={92}
              height={92}
              className={styles.footerLogo}
            />
            <div>
              <h3 className="text-white mb-3" style={{ fontSize: 20, lineHeight: 1.2 }}>Netaji Subhas Institute of Technology</h3>
              <p className={styles.brandText}>NSIT has approximately 4 lakh sq. ft. of built-up infrastructure on 11 acres of land at Amhara, Bihta, Patna, with Wi-Fi campus, computer centre, digital library, and modern learning resources.</p>
            </div>
          </section>

          <section>
            <h3 className="text-white mb-3" style={{ fontSize: 20, lineHeight: 1.2 }}>Quick Links</h3>
            <div className={`${styles.linkList} d-grid`} style={{ gap: 10 }}>
              {quickLinks.map((link) => (
                <a href="#" key={link} className="w-fit-content" style={{ color: "var(--muted-light-text-color)", fontSize: 15, lineHeight: 1.75, transition: "color 180ms ease, transform 180ms ease" }}>{link}</a>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-white mb-3" style={{ fontSize: 20, lineHeight: 1.2 }}>Contact Desk</h3>
            <div className={`${styles.contactList} d-grid`} style={{ gap: 10 }}>
              {contacts.map((item) => (
                <a href={item.includes("@") ? `mailto:${item}` : "#"} key={item} className="w-fit-content" style={{ color: "var(--muted-light-text-color)", fontSize: 15, lineHeight: 1.75, transition: "color 180ms ease, transform 180ms ease" }}>{item}</a>
              ))}
            </div>
          </section>

          <section className={`${styles.mapCard} p-3`} style={{ borderRadius: 14 }}>
            <h3 className="text-white mb-3" style={{ fontSize: 20, lineHeight: 1.2 }}>Campus Location</h3>
            <iframe
              title="NSIT location map"
              src="https://maps.google.com/maps?q=Netaji%20Subhas%20Institute%20Of%20Technology%20Amhara%20Bihta%20Patna&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              className="w-100 border-0"
              style={{ minHeight: 210, borderRadius: 10, filter: "saturate(0.9) contrast(0.95)" }}
            />
          </section>
        </div>
      </div>

      <div className={`${styles.footerBottom} d-flex justify-content-between flex-wrap gap-3 mx-auto`}>
        <span className={styles.footerBottomText}>(c) 2026 NSIT All Rights Reserved. | Created by Priyansh</span>
        <span className={styles.footerBottomText}>Privacy Policy | Terms & Conditions | Refund Policy & Security</span>
      </div>
    </footer>
  );
}
