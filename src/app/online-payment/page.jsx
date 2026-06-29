import styles from "./online-payment.module.css";

export const metadata = {
  title: "Online Fee Payment Portal",
  description: "Make online fee payments for NSIT Patna. Secure payment portal for tuition and other fees.",
};

export default function OnlinePaymentPage() {
  return (
    <div
      className={styles.wrapper}
      style={{
        minHeight: "100vh",
      }}>
      <div className="container-fluid p-0">
        <div className="row g-0 min-vh-100">
          {/* Left Red Section */}
          <div
            className="col-lg-7 d-none d-lg-flex flex-column position-relative overflow-hidden"
            style={{
              backgroundImage: "url('/images/login-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}>
            <div className={styles.leftContent}>
              <div className={styles.textSection}>
                <h2 className={styles.mainTitle}>NSIT Online Payment</h2>
                <p className={styles.subText}>
                  Secure fee payment portal for students and parents.
                </p>
              </div>
            </div>
            <div className={styles.imageSection}>
              <div className={styles.cardWrapper}>
                <img
                  src="/images/mandala-circle-opt.png?v=1"
                  alt=""
                  className={styles.cardMandala}
                />
                <img
                  src="/images/payment-illustration.png?v=1"
                  alt="Payment"
                  className={styles.productImg}
                />
              </div>
            </div>
            <div className={styles.networkBg}></div>
          </div>

          {/* Payment Section */}
          <div
            className="col-lg-5 d-flex align-items-center justify-content-center position-relative overflow-hidden"
            style={{ background: "#fff" }}>
            <div className={styles.loginBox}>
              <div className="text-center mb-3">
                <img src="/images/logo-opt.png" alt="NSIT" width="150" />
              </div>

              <h3 className={`text-center ${styles.loginTitle}`}>Sign In</h3>
              <p className={`text-center ${styles.loginSubtitle}`}>
                Enter your credentials to access the payment portal
              </p>

              <form className={styles.loginForm}>
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Enter username</label>
                  <input
                    type="text"
                    placeholder="Enter username"
                    className={styles.loginInput}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Enter password</label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className={styles.loginInput}
                  />
                </div>

                <button type="submit" className={styles.loginBtn}>
                  Login
                </button>
              </form>

              <p className={styles.poweredBy}>
                Created By : <strong>Priyansh Raj</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
