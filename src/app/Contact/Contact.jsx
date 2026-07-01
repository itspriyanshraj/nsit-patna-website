import { HiEnvelope, HiMapPin, HiPaperAirplane, HiPhone } from "react-icons/hi2";
import Breadcrumbs from "../components/Breadcrumbs";
import styles from "./Contact.module.css";

const allContacts = [
  {
    role: "Amhara, Bihta, Patna-801103, Bihar",
    name: "Admission Help Line",
    phone: "7781020349",
    email: "info@nsit.in",
    isLocation: true,
  },
  {
    role: "Principal",
    name: "Dr. Jyotirmayee Dalei",
    phone: "9102403272",
    email: "principal@nsiterp.in",
  },
  {
    role: "Dean Administration",
    name: "Mr. Ramakant Singh",
    phone: "9102403265",
    email: "deanadmin@nsiterp.in",
  },
  {
    role: "Training & Placement Officer",
    name: "Mr. Shekhar Srivastava",
    phone: "9102403270",
    email: "tpo@nsit.in",
  },
  {
    role: "Accounts & IT Department",
    name: "Mr. Sudhir Kumar",
    phone: "7781020353",
    email: "sudhir@nsiterp.in",
  },
  {
    role: "Transport Department",
    name: "Mr. Bablu Ojha",
    phones: ["9102403271", "7781020346"],
    email: null,
  },
  {
    role: "Examination Controller",
    name: "Kaushal Kumar",
    phone: "7781020362",
    email: "exam@nsiterp.in",
  },
  {
    role: "Documents Verification",
    name: "Vikash Kumar",
    phone: "9102403261",
    email: "verification@nsiterp.in",
  },
];

export default function Contact() {
  return (
    <main className={styles.contactPage}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className="mb-2">Contact</h1>
          <Breadcrumbs section="Contact" title="Contact" />
        </div>
      </section>

      <section className="container-xxl pt-4 pb-4" aria-label="Contact information">
        <div className={styles.contactGrid}>
          {allContacts.map((item) => (
            <article className={`${styles.contactCard} h-100`} key={item.role}>
              <span aria-hidden="true">
                {item.isLocation ? <HiMapPin /> : <HiPhone />}
              </span>
              <div>
                <h2>{item.role}</h2>
                <p className={styles.contactName}>{item.name}</p>
                <div className={styles.contactDetails}>
                  {item.isLocation ? (
                    <>
                      <a href="tel:7781020349" className={styles.contactLink}>
                        <HiPhone aria-hidden="true" />7781020349
                      </a>
                      <a href="mailto:info@nsit.in" className={styles.contactLink}>
                        <HiEnvelope aria-hidden="true" />info@nsit.in
                      </a>
                    </>
                  ) : (
                    <>
                      {item.phones ? (
                        item.phones.map((p) => (
                          <a key={p} href={`tel:${p}`} className={styles.contactLink}>
                            <HiPhone aria-hidden="true" />{p}
                          </a>
                        ))
                      ) : (
                        <a href={`tel:${item.phone}`} className={styles.contactLink}>
                          <HiPhone aria-hidden="true" />{item.phone}
                        </a>
                      )}
                      {item.email && (
                        <a href={`mailto:${item.email}`} className={styles.contactLink}>
                          <HiEnvelope aria-hidden="true" />{item.email}
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-xxl pb-5 mb-4">
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-7">
            <div className={`${styles.formPanel} h-100`}>
              <h2>Send us Message</h2>
              <form className="row g-3 mt-2">
                <div className="col-md-6">
                  <label className="form-label">Name</label>
                  <input className="form-control" type="text" placeholder="Your name" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Phone</label>
                  <input className="form-control" type="tel" placeholder="Your phone number" required />
                </div>
                <div className="col-12">
                  <label className="form-label">Email</label>
                  <input className="form-control" type="email" placeholder="your.email@example.com" required />
                </div>
                <div className="col-12">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" placeholder="Write your message here" rows={5} required />
                </div>
                <div className="col-12">
                  <div className={styles.checkboxWrap}>
                    <input className="form-check-input" type="checkbox" id="privacyConsent" required />
                    <label className="form-check-label" htmlFor="privacyConsent">
                      Opt in (By submitting above information, you agree to the <a href="/privacy-policy">Privacy Policy</a> &amp; <a href="/terms">Terms &amp; Conditions</a>.)
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className={styles.submitButton}>
                    <span aria-hidden="true">
                      <HiPaperAirplane />
                    </span>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-5">
            <div className={`${styles.mapBox} h-100`}>
              <iframe
                title="NSIT campus location"
                src="https://maps.google.com/maps?q=Netaji%20Subhas%20Institute%20Of%20Technology%20Amhara%20Bihta%20Patna&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
