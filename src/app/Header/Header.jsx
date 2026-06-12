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
            <a href="/online-payment" className={styles.paymentLink} style={{ cursor: "pointer", fontFamily: "inherit" }}>
              <span aria-hidden="true">₹</span>
              Online Payment
            </a>
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
    </>
  );
}
