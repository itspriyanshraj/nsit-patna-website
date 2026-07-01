"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./popupModal.module.css";

const HIDDEN_ROUTES = ["/online-payment", "/teacher-login"];

export default function PopupModal() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (HIDDEN_ROUTES.includes(pathname)) return;
    const shown = sessionStorage.getItem("popupShown");
    if (shown) return;
    sessionStorage.setItem("popupShown", "true");
    const timer = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timer);
  }, [pathname]);

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={handleClose}>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <div className={styles.banner}>
          <div className={styles.leftPanel}>
            <div className={styles.logoArea}>
              <Image src="/images/logo-opt-v3.png" alt="NSIT" width={50} height={50} priority />
            </div>
            <div className={styles.collegeName}>
              <h2 className={styles.nameMain}>Netaji Subhas Institute of Technology</h2>
              <span className={styles.nameAccredit}>NAAC Accredited | ISO 9001:2008 Certified</span>
            </div>
            <span className={styles.badge}>ADMISSIONS 2026-27</span>
            <h2 className={styles.heading}>Admission Open</h2>
            <h2 className={styles.heading2}>2026-27</h2>

            <div className={styles.courseBox}>
              <span className={styles.courseLabel}>PROGRAMS OFFERED</span>
              <p className={styles.courseText}>B.Tech (CSE, ECE, ME, CE) | Diploma (Engg.)</p>
              <p className={styles.courseText}>BBA | BCA | MBA | MCA</p>
            </div>

            <div className={styles.features}>
              <span>✓ Approved by AICTE, New Delhi</span>
              <span>✓ Affiliated to AKU & SBTE</span>
              <span>✓ NAAC Accredited</span>
              <span>✓ ISO 9001:2008 Certified</span>
            </div>

            <div className={styles.contactBox}>
              <span>📞 9102403265 | 7781020349 | 7781020359</span>
              <span>✉ info@nsit.in | 🌐 www.nsit.in</span>
            </div>

            <Link href="/enquiry" className={styles.cta} onClick={handleClose}>
              Apply Now →
            </Link>
          </div>

          <div className={styles.rightPanel}>
            <div className={styles.building}>
              <div className={styles.roof} />
              <div className={styles.floor}>
                {[...Array(6)].map((_, i) => (
                  <div key={`w1-${i}`} className={styles.window} />
                ))}
              </div>
              <div className={styles.floor}>
                {[...Array(6)].map((_, i) => (
                  <div key={`w2-${i}`} className={`${styles.window} ${styles.windowDim}`} />
                ))}
              </div>
              <div className={styles.door} />
              <div className={styles.ground} />
              <div className={styles.treeLeft} />
              <div className={styles.treeRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
