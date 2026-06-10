"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaBookOpen,
  FaBuildingColumns,
  FaCalendarDays,
  FaChartLine,
  FaCheck,
  FaComputer,
  FaEnvelope,
  FaFileLines,
  FaGlobe,
  FaLink,
  FaLocationDot,
  FaPhone,
  FaQuoteLeft,
  FaStar,
  FaTelegram,
  FaUser,
  FaUsers,
  FaVideo,
} from "react-icons/fa6";
import styles from "./page.module.css";

const slides = [
  {
    image: "/bann1.png",
    eyebrow: "Welcome To NSIT",
    title: "Netaji Subhas Institute of Technology, Patna",
    text: "Approved by AICTE, New Delhi and recognized by Department of Science & Technology, Government of Bihar.",
  },
  {
    image: "/bann2.png",
    eyebrow: "Amhara, Bihta",
    title: "A modern technical campus near Bihta Railway Station",
    text: "NSIT has approximately 4 lakh sq. ft. of built-up infrastructure on around 11 acres of land.",
  },
  {
    image: "/bann3.png",
    eyebrow: "Academics",
    title: "B.Tech, Diploma, BBA and BCA programs",
    text: "A practical academic ecosystem with Wi-Fi campus, computer centre, digital library and labs.",
  },
  {
    image: "/ban4.png",
    eyebrow: "Campus Life",
    title: "Learning spaces built for practical technical education",
    text: "A focused environment for academic growth, labs, projects and student development.",
  },
  {
    image: "/ban5.png",
    eyebrow: "Admissions Open",
    title: "Start your NSIT journey with the right guidance",
    text: "Connect with the admissions team for courses, eligibility and campus visit support.",
  },
];

const stats = [
  { value: "2007", label: "Established" },
  { value: "4L+", label: "Sq. Ft. Infrastructure" },
  { value: "11+", label: "Acres Campus" },
  { value: "C-43568", label: "AISHE Code" },
];

const features = [
  "Approved by AICTE, New Delhi",
  "Recognized by Department of Science & Technology, Government of Bihar",
  "Affiliated to Aryabhatta Knowledge University, Patna",
  "Affiliated to State Board of Technical Education, Patna",
  "Wi-Fi campus, computer centre and digital library",
  "Campus located about 2 km from Bihta Railway Station",
];

const successCards = [
  {
    title: "Fundamentals",
    text: "College fundamentals are essential for academic success and personal growth.",
    icon: <FaBookOpen />,
  },
  {
    title: "Skill",
    text: "Critical thinking, communication, research and adaptability help students move with confidence.",
    icon: <FaStar />,
  },
  {
    title: "Best Projects",
    text: "Projects showcase student creativity, problem-solving and academic excellence.",
    icon: <FaComputer />,
  },
  {
    title: "Top Placements",
    text: "Top placements highlight competence, preparation and promising career outcomes.",
    icon: <FaChartLine />,
  },
];

const placements = [
  { company: "Collabera", package: "1.8 LPA", selected: "7", logo: "/placement/collabera.png" },
  { company: "Grifeo", package: "3.5 LPA", selected: "18", logo: "/placement/grifeo.png" },
  { company: "Okaya Infocom", package: "1.8 LPA", selected: "5", logo: "/placement/okaya.png" },
  { company: "Wioska Moldings", package: "2.16 LPA", selected: "2", logo: "/placement/wioska.png" },
];

const placementSlides = [...placements, ...placements];

const recruiters = [
  { name: "Airtel", logo: "/placement/airtel.png" },
  { name: "Azio Corp", logo: "/placement/azio.png" },
  { name: "Aloha Technology", logo: "/placement/aloha.png" },
  { name: "AsproIT", logo: "/placement/asproit.png" },
  { name: "Bajaj", logo: "/placement/bajaj.png" },
  { name: "Baryons", logo: "/placement/baryons.png" },
];

const recruiterSlides = [...recruiters, ...recruiters];

const testimonials = [
  {
    name: "Kundan Kumar",
    text: "Getting Placed in a top it company has always been my dream and NSIT has made this dream true. Thanks to the department of CSE and training and placement wit...",
  },
  {
    name: "Abhishek Prakash",
    text: "Coming to this college was one of the best decisions I've made. The labs are well-equipped, and the faculty doesn't just teach from textbooks \u2014 they push us to solve real-worl...",
  },
  {
    name: "Suryansh Verma",
    text: "It's not just about books and grades here. I was part of the robotics club, and we built prototypes that went on to win at national hackathons. There's genuine support for extracurricular ...",
  },
  {
    name: "Priyanka Kumari",
    text: "I came from a small town, unsure if I could keep up. But the mentorship here helped me find my footing. From extra academic support to career counseling, they helped me level...",
  },
];

const testimonialSlides = [...testimonials, ...testimonials];

const notices = [
  {
    date: "May-30, 2026",
    text: "Follow us on INSTAGRAM for event updates. Click here to follow",
  },
  {
    date: "MAR-08, 2022",
    text: "Click here to download the standard template for resume|CV",
  },
  {
    date: "May-30, 2026",
    text: "Click Here To Download STUDENTS ATTENDANCE UNDERTAKING FORM",
  },
];

const usefulLinks = [
  "IQAC - VISION & MISSION IQAC - VISION & MISSION",
  "Hostel Related Enquiry 9905650961, 7870034062, 6201315981",
  "IQAC: INTERNAL QUALITY ASSURANCE CELL",
  "TRAINING/INTERNSHIP LETTER REQUEST FORM <-------Click here to download the form",
  "NSIT EXAMS NEWS <-----Click here to join our examination telegram channel for all exam related updates.",
];

const courseLinks = [
  { name: "B-Tech", subjects: ["CSE", "EEE", "ECE", "ME", "CE"] },
  { name: "Diploma", subjects: ["CSE", "EEE", "ECE", "ME", "CE"] },
  { name: "BBA", subjects: ["Finance", "Marketing", "HR", "Business Analytics"] },
  { name: "BCA", subjects: ["Programming", "Database", "Web Development", "Networking"] },
];

const telegramLinks = [
  {
    title: "TELEGRAM Link for B.Tech 1st Year 2023 session students",
    text: "Click here to subscribe",
    icon: <FaTelegram />,
    badge: "New",
  },
  {
    title: "TRAINING/INTERNSHIP LETTER REQUEST FORM",
    text: "Click here to subscribe",
    icon: <FaFileLines />,
    badge: "New",
  },
  {
    title: "NSIT EXAMS NEWS",
    text: "Click here to join our examination telegram channel for all exam related updates.",
    icon: <FaTelegram />,
  },
  {
    title: "NSIT TRAINING & PLACEMENTS NEWS",
    text: "Click here to subscribe to our telegram channel for latest news regarding training programs and placement drives",
    icon: <FaTelegram />,
  },
  {
    title: "NSIT CAMPUS Virtual Tour",
    text: "",
    icon: <FaVideo />,
  },
  {
    title: "Student's Login",
    text: "",
    icon: <FaUser />,
    action: true,
    href: "#",
  },
  {
    title: "Teacher's Login",
    text: "",
    icon: <FaBuildingColumns />,
    action: true,
    outline: true,
    href: "/teacher-login",
  },
];

const approvals = [
  { src: "/NAAC.png", label: "NAAC" },
  { src: "/AICTE.png", label: "AICTE" },
  { src: "/BEU.png", label: "BEU" },
  { src: "/AKU.png", label: "AKU" },
  { src: "/SBTE.png", label: "SBTE" },
  { src: "/AISHE.png", label: "AISHE" },
];

const approvalSlides = [...approvals, ...approvals];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeCourse, setActiveCourse] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className={`${styles.homePage} overflow-x-clip`} style={{ color: "var(--heading-color)", background: "#f6f8fb" }}>
      <section className={`${styles.heroSection} position-relative overflow-hidden`} style={{ minHeight: "clamp(560px, 56.25vw, 790px)", color: "var(--white-color)", background: "#172033" }} aria-label="NSIT highlights">
        <div className={styles.heroSlide} style={{opacity: 1, transition: 'opacity 0.8s ease'}}>
          <Image
            src={slides[activeSlide].image}
            alt={slides[activeSlide].title}
            fill
            priority={activeSlide === 0}
            sizes="100vw"
          />
        </div>

        <div className={styles.heroOverlay} />
        <div className={`container-xxl ${styles.heroContent} d-flex align-items-center position-relative`} style={{ zIndex: 2, paddingTop: 70, paddingBottom: 86 }}>
          <div
            key={slides[activeSlide].title}
            className={styles.heroCopy}
          >
            <span className="d-inline-flex align-items-center gap-2 text-uppercase fw-bolder" style={{ color: "#ffcf5b", fontSize: 12, letterSpacing: "0.08em" }}>{slides[activeSlide].eyebrow}</span>
            <h1 className={styles.heroH1}>{slides[activeSlide].title}</h1>
            <p className={styles.heroCopyP}>{slides[activeSlide].text}</p>
            <div className={`d-flex flex-wrap gap-2 ${styles.heroActions}`}>
              <a href="/contact" className={`${styles.primaryBtn} d-inline-flex align-items-center justify-content-center gap-2`}>
                Apply For Admisson
                <FaArrowRight aria-hidden="true" />
              </a>
              <a href="tel:7781020349" className={`${styles.secondaryBtn} d-inline-flex align-items-center justify-content-center gap-2`}>
                <FaPhone aria-hidden="true" />
                Contact us
              </a>
            </div>
          </div>
        </div>

        <div className={`${styles.sliderControls} position-absolute d-flex gap-2`} style={{ left: "50%", bottom: 34, zIndex: 3, transform: "translateX(-50%)" }} aria-label="Slider controls">
          {slides.map((slide, index) => (
            <button
              type="button"
              key={slide.image}
              className={index === activeSlide ? styles.activeDot : undefined}
              onClick={() => setActiveSlide(index)}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className={`container-xxl ${styles.quickFacts} position-relative`} style={{ zIndex: 4 }} aria-label="NSIT quick facts">
        {stats.map((item) => (
          <article className={styles.statCard} key={item.label}>
            <strong className="d-block" style={{ color: "#ed1c24", fontSize: "clamp(30px, 3.4vw, 44px)", lineHeight: 1 }}>{item.value}</strong>
            <span className="d-block fw-bolder" style={{ marginTop: 10, color: "#14213d" }}>{item.label}</span>
          </article>
        ))}
      </section>

      <section className={`container-xxl ${styles.noticeStrip}`}>
        <div className={styles.infoHubHeader}>
          <span className="d-inline-flex align-items-center gap-2 text-uppercase fw-bolder" style={{ color: "#ed1c24", fontSize: 12, letterSpacing: "0.08em" }}>Student Updates</span>
          <h2 className={styles.infoHubHeaderH2}>Useful links, notices and official telegram updates.</h2>
        </div>

        <div className={styles.infoHub}>
          <section className={styles.infoColumn} aria-labelledby="useful-links-title">
            <div className={styles.infoRowTitle}>
              <span className={styles.infoRowTitleIcon}><FaLink aria-hidden="true" /></span>
              <div>
                <h3 id="useful-links-title">Useful Links</h3>
              </div>
            </div>
            <div className={styles.linkStack}>
              {usefulLinks.map((link) => (
                <a href="#" className={styles.resourceCard} key={link}>
                  <FaGlobe aria-hidden="true" />
                  <span>{link}</span>
                </a>
              ))}
            </div>
          </section>

          <section className={styles.infoColumn} aria-labelledby="news-title">
            <div className={styles.infoRowTitle}>
              <span className={styles.infoRowTitleIcon}><FaBookOpen aria-hidden="true" /></span>
              <div>
                <h3 id="news-title">News & Notice Board</h3>
              </div>
            </div>
            <div className={styles.newsList}>
              {notices.map((notice, index) => (
                <article className={styles.newsCard} key={`${notice.date}-${index}`}>
                  <strong className="d-inline-flex align-items-center gap-2 text-uppercase fw-bolder" style={{ color: "#98a2b3", fontSize: 13, marginTop: 15 }}>
                    <FaCalendarDays aria-hidden="true" style={{ color: "var(--main-color)" }} />
                    {notice.date}
                  </strong>
                  <p className={styles.newsCardP}>{notice.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.infoColumn} aria-labelledby="telegram-title">
            <div className={styles.infoRowTitle}>
              <span className={styles.infoRowTitleIcon}><FaUsers aria-hidden="true" /></span>
              <div>
                <h3 id="telegram-title">Telegram & Access Links</h3>
              </div>
            </div>
            <div className={styles.telegramGrid}>
                {telegramLinks.map((link) => (
                <a
                  href={link.href || "#"}
                  className={`${styles.telegramCard} ${link.action ? styles.telegramAction : ""} ${link.outline ? styles.telegramOutline : ""}`}
                  key={link.title}
                >
                  {link.icon}
                  <span>
                    <strong>
                      {link.title}
                      {link.badge ? <em>{link.badge}</em> : null}
                    </strong>
                    {link.text ? <small>{link.text}</small> : null}
                  </span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </section>

<section className={`container-xxl ${styles.courseQuickSection}`}>
        <div className={styles.courseQuickGrid}>
          {courseLinks.map((course, index) => (
            <a
              href="/contact"
              className={`${styles.courseQuickCard} ${index === activeCourse ? styles.courseQuickCardActive : ""}`}
              key={course.name}
              onMouseEnter={() => setActiveCourse(index)}
            >
              <div className="d-flex align-items-center justify-content-between gap-3">
                <span className={styles.courseIcon}>
                  <FaFileLines aria-hidden="true" />
                </span>
                <FaArrowRight aria-hidden="true" className={styles.courseArrow} />
              </div>
              <strong className="d-block fw-bolder" style={{ marginTop: 20, fontSize: 22, lineHeight: 1.1 }}>{course.name}</strong>
              <small className="d-block fw-bolder" style={{ marginTop: 8, color: "#667085", fontSize: 13, lineHeight: 1.3 }}>Subjects available</small>
              <div
                className={styles.courseSubjectBox}
                aria-label={`${course.name} subjects`}
              >
                <span>Subjects</span>
                {course.subjects.map((subject) => (
                  <small key={subject}>{subject}</small>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

              
      <section className={styles.aboutSection}>
        <div className="container-xxl">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className={styles.aboutMedia}>
                <Image src="/nsit-student.jpg" alt="NSIT campus life" fill sizes="(max-width: 991px) 100vw, 50vw" />
              </div>
            </div>
            <div className="col-lg-6">
              <span className="d-inline-flex align-items-center gap-2 text-uppercase fw-bolder" style={{ color: "#ed1c24", fontSize: 12, letterSpacing: "0.08em" }}>About College</span>
              <h2 className={styles.aboutSectionH2}>Technical education with infrastructure, approvals and student support.</h2>
              <p className={styles.aboutSectionP}>
                Netaji Subhas Institute of Technology, two kilometers away from Bihta
                Railway Station, has been established at Amhara in Patna district. It is
                approved by AICTE, New Delhi and recognized by Department of Science &
                Technology, Government of Bihar, affiliated to Aryabhatta Knowledge
                University Patna and State Board of Technical Education, Patna.
              </p>
              <p className={styles.aboutSectionP}>
                NSIT offers education with the latest technologies available in the
                present area, including Wi-Fi campus, computer centre and digital library.
              </p>
              <div className={styles.featureList}>
                {features.map((item) => (
                  <span key={item} className="d-flex align-items-start gap-2 fw-bolder" style={{ color: "#14213d", lineHeight: 1.5 }}>
                    <FaCheck aria-hidden="true" style={{ flex: "0 0 auto", marginTop: 4, color: "#ed1c24" }} />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


       <section className={styles.placementShowcase}>
        <div className="container-xxl">
          <div className={styles.centerSectionHeader}>
            <span className="d-inline-flex align-items-center gap-2 text-uppercase fw-bolder" style={{ color: "var(--main-color)", fontSize: 12, letterSpacing: "0.08em" }}>Placement</span>
            <h2 className={styles.centerSectionHeaderH2}>Our Placement</h2>
          </div>
          <div className="row g-4 g-xl-5 align-items-center">
            <div className="col-lg-4">
              <div className={styles.placementShowcaseIntro}>
                <h2 className={styles.placementShowcaseIntroH2}>NSIT Placement 2023-24</h2>
              </div>
            </div>
            <div className="col-lg-8">
              <div className={styles.placementLogoSlider} aria-label="NSIT Placement 2023-24 company slider">
                <div className={styles.placementLogoTrack}>
                  {placementSlides.map((item, index) => (
                    <article className={styles.placementLogoCard} key={`${item.company}-${index}`}>
                      <div className={styles.placementLogoBox}>
                        <Image src={item.logo} alt={`${item.company} logo`} width={180} height={90} loading="eager" />
                      </div>
                      <strong className="d-block" style={{ color: "#14213d", fontSize: 14, lineHeight: 1.35, marginTop: 14 }}>Package : {item.package}</strong>
                      <span className="d-block fw-bolder" style={{ color: "#667085", marginTop: 8 }}>Total Selection : {item.selected}</span>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.successSection}>
        <div className="container-xxl">
          <div className={styles.sectionHeader}>
            <span className="d-inline-flex align-items-center gap-2 text-uppercase fw-bolder" style={{ color: "var(--main-color)", fontSize: 12, letterSpacing: "0.08em" }}>How To Get Success</span>
            <h2 className={styles.sectionHeaderH2}>Important steps for student growth.</h2>
          </div>
          <div className={styles.successGrid}>
            {successCards.map((item, index) => (
              <article className={styles.successCard} key={item.title}>
                <strong className="text-uppercase fw-bolder" style={{ color: "var(--main-color)", fontSize: 13 }}>Step {String(index + 1).padStart(2, "0")}</strong>
                <span className="d-grid place-items-center" style={{ width: 54, height: 54, marginTop: 22, color: "var(--white-color)", background: "#ed1c24",display: "grid",placeItems: "center", borderRadius: 8, fontSize: 24 }}>{item.icon}</span>
                <h3 className={styles.successCardH3}>{item.title}</h3>
                <p className={styles.successCardP}>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.recruiterSection}>
        <div className="container-xxl">
          <div className={styles.centerSectionHeader}>
            <span className="d-inline-flex align-items-center gap-2 text-uppercase fw-bolder" style={{ color: "var(--main-color)", fontSize: 12, letterSpacing: "0.08em" }}>Recruitment</span>
            <h2 className={styles.centerSectionHeaderH2}>Our Recruiters</h2>
          </div>
          <div className={styles.recruiterSlider} aria-label="Recruiter logo slider">
            <div className={styles.recruiterTrack}>
              {recruiterSlides.map((item, index) => (
                <article className={styles.recruiterCard} key={`${item.name}-${index}`}>
                  <Image src={item.logo} alt={`${item.name} logo`} width={210} height={105} loading="eager" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.testimonialSection}>
        <div className="container-xxl">
          <div className={styles.centerSectionHeader}>
            <span className="d-inline-flex align-items-center gap-2 text-uppercase fw-bolder" style={{ color: "var(--main-color)", fontSize: 12, letterSpacing: "0.08em" }}>Students Testimonials</span>
            <h2 className={styles.centerSectionHeaderH2}>What Our Students Say</h2>
          </div>
          <div className={styles.testimonialSlider} aria-label="Student testimonial slider">
            <div className={styles.testimonialTrack}>
              {testimonialSlides.map((item, index) => (
                <article className={styles.testimonialCard} key={`${item.name}-${index}`}>
                  <div className="d-flex align-items-center justify-content-between gap-3">
                    <h3 className={styles.testimonialTopH3}>{item.name}</h3>
                    <Image src="/placement/google.png" alt="Google logo" width={56} height={56} className="flex-shrink-0" style={{ objectFit: "contain" }} loading="eager" />
                  </div>
                  <p className={styles.testimonialCardP}>
                    <FaQuoteLeft aria-hidden="true" style={{ marginRight: 10, color: "#ed1c24", fontSize: 17 }} />
                    {item.text} <a href="#" className="fw-bolder" style={{ color: "#ed1c24" }}>Read more</a>
                  </p>
                  <div className="d-flex gap-2" style={{ color: "#ffa400", marginTop: 28 }} aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <FaStar aria-hidden="true" key={starIndex} />
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.approvalSection}>
        <div className="container-xxl">
          <div className={styles.approvalBand}>
            <div className={styles.approvalIntro}>
              <span className="d-inline-flex align-items-center gap-2 text-uppercase fw-bolder" style={{ color: "#ed1c24", fontSize: 12, letterSpacing: "0.08em" }}>Recognitions</span>
              <strong className="d-block" style={{ color: "var(--heading-color)", fontSize: 50, lineHeight: 1.0 }}>Affiliations & Approvals</strong>
            </div>
            <div className={styles.approvalSlider} aria-label="Affiliations and approvals logo slider">
              <div className={styles.approvalTrack}>
                {approvalSlides.map((item, index) => (
                  <article className={styles.approvalCard} key={`${item.label}-${index}`}>
                    <Image src={item.src} alt={`${item.label} logo`} width={72} height={72} loading="eager" />
                    <strong className="d-block fw-bolder" style={{ color: "#14213d", marginTop: 10 }}>{item.label}</strong>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`container-xxl ${styles.visitSection}`}>
        <div className={styles.visitPanel}>
          <div>
            <span className="d-inline-flex align-items-center gap-2 text-uppercase fw-bolder" style={{ color: "#ed1c24", fontSize: 12, letterSpacing: "0.08em" }}>Meet Us Here</span>
            <h2 className={styles.visitPanelH2}>Admissions, campus visit and academic guidance in one place.</h2>
            <p className={styles.visitPanelP}>
              Connect with Netaji Subhas Institute of Technology for courses, eligibility,
              documents, campus visit and placement information.
            </p>
          </div>
          <div className={`d-flex flex-wrap gap-2 ${styles.visitActions}`}>
            <a href="/contact" className={`${styles.primaryBtn} d-inline-flex align-items-center justify-content-center gap-2`}>
              <FaEnvelope aria-hidden="true" />
              Contact Helpdesk
            </a>
            <a href="tel:9102403265" className={`${styles.darkBtn} d-inline-flex align-items-center justify-content-center gap-2`}>
              <FaPhone aria-hidden="true" />
              9102403265
            </a>
          </div>

          <div className={`${styles.visitMeta} d-flex flex-wrap`} style={{ gap: "12px 22px" }}>
            <span className="d-inline-flex align-items-center gap-2 fw-bolder" style={{ color: "#14213d" }}>
              <FaLocationDot aria-hidden="true" style={{ color: "#ed1c24" }} />
              Netaji Subhas Institute Of Technology, Amhara, Bihta, Patna - 801118
            </span>
            <span className="d-inline-flex align-items-center gap-2 fw-bolder" style={{ color: "#14213d" }}>
              <FaUsers aria-hidden="true" style={{ color: "#ed1c24" }} />
              info@nsit.in | tpo@nsit.in
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
