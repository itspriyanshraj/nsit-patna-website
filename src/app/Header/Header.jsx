"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { navItems } from "../navData";
import styles from "./Header.module.css";

const recognitions = [
  { title: "NAAC", subtitle: "Accredited Institute", image: "/NAAC.png" },
  { title: "AKU", subtitle: "Aryabhatta Knowledge University", image: "/AKU.png" },
  { title: "AICTE", subtitle: "Approved Institute", image: "/AICTE.png" },
  { title: "BEU", subtitle: "Bihar Engineering University", image: "/BEU.png" },
  { title: "SBTE", subtitle: "State Board of Technical Education", image: "/SBTE.png" },
  { title: "AISHE", subtitle: "Higher Education Survey", image: "/AISHE.png" },
];

function DropdownItems({ items, level = 0, onClose }) {
  const [activeIndex, setActiveIndex] = useState(null);

  if (level === 1) {
    const activeItem = activeIndex !== null ? items[activeIndex] : null;

    return (
      <div className={styles.subDropdown} onMouseLeave={() => setActiveIndex(null)}>
        {items.map((item, idx) => (
          <div
            className={styles.dropdownItem}
            key={item.label}
            onMouseEnter={() => item.items ? setActiveIndex(idx) : setActiveIndex(null)}
          >
            <a className={item.items ? styles.dropdownTrigger : undefined} href={item.href || "#"} target={item.href?.endsWith('.pdf') ? '_blank' : undefined} rel={item.href?.endsWith('.pdf') ? 'noreferrer' : undefined}>
              <span>{item.label}</span>
              {item.items ? <span aria-hidden="true" className={styles.submenuArrow}>{"\u25B8"}</span> : null}
            </a>
          </div>
        ))}
        {activeItem?.items && (
          <div className={`${styles.subDropdown2} ${styles.subDropdown2Visible}`}>
            {activeItem.items.map((sub) => (
              <div className={styles.dropdownItem} key={sub.label}>
                <a href={sub.href || "#"} target={sub.href?.endsWith('.pdf') ? '_blank' : undefined} rel={sub.href?.endsWith('.pdf') ? 'noreferrer' : undefined}>
                  <span>{sub.label}</span>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={level === 0 ? styles.dropdown : styles.subDropdown2}>
      {items.map((item) => (
        <div className={styles.dropdownItem} key={item.label}>
          <a
            className={item.items ? styles.dropdownTrigger : undefined}
            href={item.href || "#"}
          >
            <span>{item.label}</span>
            {item.items ? <span aria-hidden="true" className={styles.submenuArrow}>{"\u25B8"}</span> : null}
          </a>
          {item.items ? <DropdownItems items={item.items} level={level + 1} onClose={onClose} /> : null}
        </div>
      ))}
    </div>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hideDrop, setHideDrop] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const hoveredRef = useRef(false);
  const scrollingLogos = [...recognitions, ...recognitions];
  const handleClose = () => { setHideDrop(true); setIsOpen(false); };

  return (
    <>
      <header className={styles.header}>
      <div className={styles.topStrip}>
        <div className={`${styles.inner} d-flex align-items-center justify-content-between`} style={{ gap: 24, minHeight: 38, fontSize: 14 }}>
          <div className="d-flex align-items-center flex-wrap gap-3" style={{ padding: 12 }}>
            <a href="mailto:info@nsit.in" className={styles.contactEmail}>info@nsit.in</a>
            <span className={styles.contactPhone}>7781020349, 7781020359, 9102403261</span>
          </div>
          <div className="d-flex align-items-center flex-wrap gap-3" style={{ padding: 12 }}>
            <button onClick={() => setShowPayment(true)} className={styles.paymentLink} style={{ cursor: "pointer", fontFamily: "inherit" }}>
              <span aria-hidden="true">₹</span>
              Online Payment
            </button>
            <a href="/teacher-login" className={styles.loginLink}>
              <span aria-hidden="true">↗</span>
              Teacher Login
            </a>
          </div>
        </div>
      </div>

      <div className={styles.identityBand}>
        <div className={`${styles.inner} ${styles.identityGrid}`}>
          <a className={`${styles.brand} d-flex align-items-center`} style={{ gap: 16 }} href="#" aria-label="NSIT home">
            <Image src="/logo.png" alt="NSIT logo" width={82} height={82} priority className={styles.brandLogo} />
            <span className={styles.brandText}>
              <strong>Netaji Subhas Institute of Technology</strong>
              <small>Amhara, Bihta, Patna - 801118</small>
            </span>
          </a>

          <div className={styles.logoScroller} aria-label="Institute recognitions">
            <div className={styles.logoTrack}>
              {scrollingLogos.map((item, index) => (
                <div className={styles.recognitionCard} key={`${item.title}-${index}`}>
                  <Image src={item.image} alt="" width={54} height={54} loading="eager" className={styles.recogLogo} />
                  <span className={styles.recogText}>
                    <strong>{item.title}</strong>
                    <small>{item.subtitle}</small>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      </header>

      <nav
        className={`${styles.navShell} ${isOpen ? styles.navOpen : ""} ${hideDrop ? styles.hideDropdown : ""}`}
        onMouseEnter={() => { if (!hoveredRef.current) { hoveredRef.current = true; setHideDrop(false); } }}
        onMouseLeave={() => { hoveredRef.current = false; setHideDrop(false); }}
        aria-label="Main navigation"
      >
        <div className={`${styles.inner} d-flex align-items-center justify-content-between`} style={{ gap: 8, minHeight: 58 }}>
          <input
            className={styles.menuCheck}
            type="checkbox"
            id="primary-navigation-toggle"
            checked={isOpen}
            onChange={(event) => { setIsOpen(event.target.checked); if (event.target.checked) setHideDrop(false); }}
          />
          <label
            className={styles.menuToggle}
            htmlFor="primary-navigation-toggle"
            role="button"
            tabIndex={0}
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setIsOpen((current) => !current);
              }
            }}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <strong className={styles.menuText}>Menu</strong>
            <strong className={styles.closeText}>Close</strong>
          </label>

          <div className={styles.navLinks} id="primary-navigation">
            {navItems.map((item) => (
              <div className={styles.navItem} key={item.label}>
                <a
                  className={item.items ? styles.navTrigger : undefined}
                  href={item.href || "#"}
                  onClick={(event) => {
                    if (item.items) {
                      event.preventDefault();
                      return;
                    }
                    handleClose();
                  }}
                >
                  <span>{item.label}</span>
                  {item.items ? <span aria-hidden="true" className={styles.dropdownArrow}>{"\u25BE"}</span> : null}
                </a>
                {item.items ? <DropdownItems items={item.items} onClose={handleClose} /> : null}
              </div>
            ))}
          </div>
          <Link href="/enquiry" className={styles.enquiryButton}>
            <span aria-hidden="true">{"\u2709"}</span>
            Enquiry Now
            <span aria-hidden="true">{"\u2192"}</span>
          </Link>
        </div>
      </nav>

      {showPayment && (
        <div onClick={() => setShowPayment(false)} style={{
          position: "fixed", inset: 0, zIndex: 999999, background: "rgba(0,0,0,0.6)",
          display: "flex", alignItems: "center", justifyContent: "center", padding: 16,
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{
            background: "#fff", borderRadius: 16, width: "100%", maxWidth: 400,
            boxShadow: "0 24px 80px rgba(0,0,0,0.35)", overflow: "hidden",
          }}>
            <div style={{
              background: "var(--main-color)", padding: "18px 28px",
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <h3 style={{ color: "#fff", fontSize: 17, fontWeight: 900, margin: 0 }}>
                <span style={{ marginRight: 10, fontSize: 18 }}>₹</span>
                Online Payment
              </h3>
              <button onClick={() => setShowPayment(false)} style={{
                background: "rgba(255,255,255,0.2)", border: "none", color: "#fff",
                width: 32, height: 32, borderRadius: "50%", cursor: "pointer",
                fontSize: 16, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center",
              }}>&times;</button>
            </div>
            <div style={{ padding: "28px", textAlign: "center" }}>
              <p style={{ fontSize: 13, color: "#64748b", marginBottom: 20, lineHeight: 1.6 }}>
                You are being redirected to the secure NSIT payment gateway for online fee payment.
              </p>
              <a href="https://student.nsit.in/login.aspx" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-block", width: "100%", padding: "14px", background: "var(--main-color)", color: "#fff",
                border: "none", borderRadius: 8, fontSize: 14, fontWeight: 800, textDecoration: "none",
                boxShadow: "0 8px 20px rgba(237,28,36,0.3)",
              }}
                onMouseEnter={(e) => { e.target.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.target.style.transform = "translateY(0)"; }}
              >
                Proceed to Payment
              </a>
              <button onClick={() => setShowPayment(false)} style={{
                display: "block", width: "100%", padding: "12px", background: "none", color: "#64748b",
                border: "none", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", marginTop: 8,
              }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
