"use client";

import styles from "./online-payment.module.css";

export default function OnlinePaymentPage() {
  return (
    <div className={styles.wrapper}>
      <div className="container-fluid p-0">
        <div className="row g-0 min-vh-100">

          {/* Left Red Section */}
          <div className="col-lg-7 d-none d-lg-flex align-items-center justify-content-center position-relative overflow-hidden" style={{
            background: "linear-gradient(rgba(180,0,0,0.8), rgba(180,0,0,0.85)), url('/images/login-bg.png') center/cover no-repeat",
          }}>
            <div className={styles.leftContent}>
              <h2 className="fw-bold text-white">
                NSIT Online Payment
              </h2>
              <p className="text-white">
                Secure fee payment portal for students and parents.
              </p>
              <div className="text-center mt-5">
                <img src="/images/product.jpg" alt="NSIT" className={styles.productImg} />
              </div>
            </div>
            <div className={styles.networkBg}></div>
          </div>

          {/* Payment Section */}
          <div className="col-lg-5 d-flex align-items-center justify-content-center position-relative overflow-hidden" style={{ background: "#fff" }}>
            <div className={styles.paymentBox}>
              <div className="text-center mb-4">
                <img src="/images/logo.png" alt="NSIT" width="180" />
              </div>

              <h3 className={`text-center ${styles.paymentTitle}`}>
                Online Payment
              </h3>
              <p className="text-center text-muted small mb-4">
                Select your preferred payment method to proceed.
              </p>

              <div className="d-flex flex-column gap-3">
                <a href="https://student.nsit.in/login.aspx" target="_blank" rel="noopener noreferrer" className={styles.paymentCard}>
                  <div className="d-flex align-items-center gap-3">
                    <span className={styles.paymentIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M12 9v6"/><path d="M9 12h6"/>
                      </svg>
                    </span>
                    <div className="flex-grow-1">
                      <div className="fw-bold" style={{ fontSize: 15, color: "#14213d" }}>SBI Collect</div>
                      <div style={{ fontSize: 12, color: "#667085" }}>Pay via State Bank of India</div>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#98a2b3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                    </svg>
                  </div>
                </a>

                <a href="https://student.nsit.in/login.aspx" target="_blank" rel="noopener noreferrer" className={styles.paymentCard}>
                  <div className="d-flex align-items-center gap-3">
                    <span className={styles.paymentIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/>
                      </svg>
                    </span>
                    <div className="flex-grow-1">
                      <div className="fw-bold" style={{ fontSize: 15, color: "#14213d" }}>Debit / Credit Card</div>
                      <div style={{ fontSize: 12, color: "#667085" }}>Visa, Mastercard, RuPay</div>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#98a2b3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                    </svg>
                  </div>
                </a>

                <a href="https://student.nsit.in/login.aspx" target="_blank" rel="noopener noreferrer" className={styles.paymentCard}>
                  <div className="d-flex align-items-center gap-3">
                    <span className={styles.paymentIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M12 9v6"/><path d="M9 12h6"/>
                      </svg>
                    </span>
                    <div className="flex-grow-1">
                      <div className="fw-bold" style={{ fontSize: 15, color: "#14213d" }}>UPI / Mobile Banking</div>
                      <div style={{ fontSize: 12, color: "#667085" }}>Google Pay, PhonePe, Paytm</div>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#98a2b3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                    </svg>
                  </div>
                </a>
              </div>

              <div className={styles.secureBadge}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                Secured with SSL encryption
              </div>
            </div>

            <img src="/images/mandala.png" alt="" className={styles.mandalaImg} />
          </div>
        </div>
      </div>
    </div>
  );
}
