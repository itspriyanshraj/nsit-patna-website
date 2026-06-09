import Image from "next/image";
import { FaEnvelope, FaLocationDot, FaPaperPlane, FaPhone } from "react-icons/fa6";
import styles from "./Contact.module.css";

const contactCards = [
  {
    label: "Visit Campus",
    value: "Netaji Subhas Institute of Technology, Amhara, Bihta, Patna - 801118",
    icon: <FaLocationDot />,
  },
  {
    label: "Call Admission Desk",
    value: "9102403265, 7781020349",
    icon: <FaPhone />,
  },
  {
    label: "Email Support",
    value: "info@nsit.in",
    icon: <FaEnvelope />,
  },
];

const quickLinks = ["Admissions", "Placement", "Departments", "Campus Visit"];

export default function Contact() {
  return (
    <main className={styles.contactPage}>
      <section className={`container-xxl ${styles.heroWrap}`}>
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-7">
            <div className={`${styles.heroText} h-100`}>
              <span className={styles.eyebrow}>Contact NSIT Patna</span>
              <h1>Reach the right desk without confusion.</h1>
              <p>
                Connect with NSIT for admissions, campus visits, placement support,
                academic queries, and general information.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <a className={styles.primaryButton} href="tel:9102403265">
                  <span aria-hidden="true">
                    <FaPhone />
                  </span>
                  Call Now
                </a>
                <a className={styles.secondaryButton} href="mailto:info@nsit.in">
                  <span aria-hidden="true">
                    <FaEnvelope />
                  </span>
                  Email Us
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className={`${styles.heroVisual} h-100`} aria-label="NSIT contact visual">
              <div className={styles.logoPanel}>
                <Image src="/logo.png" alt="NSIT logo" width={110} height={110} priority />
                <div>
                  <strong>Netaji Subhas Institute of Technology</strong>
                  <small>Amhara, Bihta, Patna</small>
                </div>
              </div>
              <div className={styles.visualCard}>
                <span>Campus Helpdesk</span>
                <strong>Admissions, academics, placement and visitor support</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-xxl pb-4" aria-label="Contact information">
        <div className="row g-3">
          {contactCards.map((item) => (
            <div className="col-lg-4" key={item.label}>
              <article className={`${styles.contactCard} h-100`}>
                <span aria-hidden="true">{item.icon}</span>
                <div>
                  <h2>{item.label}</h2>
                  <p>{item.value}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>

      <section className="container-xxl pb-5 mb-4">
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-7">
            <div className={`${styles.formPanel} h-100`}>
              <span className={styles.eyebrow}>Send A Message</span>
              <h2>Tell us what you need help with.</h2>
              <form className="row g-3 mt-2">
                <div className="col-md-6">
                  <label className="form-label">Full Name</label>
                  <input className="form-control" type="text" placeholder="Your name" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Phone Number</label>
                  <input className="form-control" type="tel" placeholder="Your phone number" />
                </div>
                <div className="col-12">
                  <label className="form-label">Email Address</label>
                  <input className="form-control" type="email" placeholder="your.email@example.com" />
                </div>
                <div className="col-12">
                  <label className="form-label">Query Type</label>
                  <select className="form-select" defaultValue="">
                    <option value="" disabled>
                      Select a department
                    </option>
                    <option>Admission</option>
                    <option>Academics</option>
                    <option>Placement</option>
                    <option>Campus Visit</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="col-12">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" placeholder="Write your message here" rows={5} />
                </div>
                <div className="col-12">
                  <button type="button" className={styles.submitButton}>
                    <span aria-hidden="true">
                      <FaPaperPlane />
                    </span>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-5">
            <aside className="row g-4 h-100">
              <div className="col-12">
                <div className={styles.quickBox}>
                  <span className={styles.eyebrow}>Quick Access</span>
                  <h2>Popular contact topics</h2>
                  <div className="list-group mt-4">
                    {quickLinks.map((link) => (
                      <a className={styles.quickLink} href="#" key={link}>
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-12 flex-grow-1">
                <div className={`${styles.mapBox} h-100`}>
                  <iframe
                    title="NSIT campus location"
                    src="https://maps.google.com/maps?q=Netaji%20Subhas%20Institute%20Of%20Technology%20Amhara%20Bihta%20Patna&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    loading="lazy"
                  />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
