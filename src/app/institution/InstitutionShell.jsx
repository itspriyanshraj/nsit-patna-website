import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import styles from "./institutionPages.module.css";

const institutionLinks = [
  ["About Us", "/institution/about-us"],
  ["Message", "/institution/message"],
  ["Vision & Mission", "/institution/vision-mission"],
  ["Statutory Committees", "/institution/statutory-committees"],
  ["IQAC", "/institution/iqac"],
  ["Approval", "/institution/approval"],
  ["NSIT Clubs", "/institution/nsit-clubs"],
  ["AICTE Mandatory Disclosure", "/institution/aicte-mandatory-disclosure"],
  ["Governing Body", "/institution/governing-body"],
  ["Online Students Grivance Redressal", "/institution/online-students-grivance-redressal"],
];

export const whyNsit =
  "NSIT has the huge infrastructure of approximately 4 lakh sq. ft of built up area on approximately 11 Acres of Land at Amhara, Bihta, Patna. NSIT offers the education with the latest Technologies available in the present area. (i.e. Wi-Fi Campus, Computer Centre, Digital Library etc).";

export const pdfLinks = {
  womenCell: "https://cdn.academist.app/Cloud/cdnclg/8/Website/Academics/womencell2026.pdf",
  minorityCell: "https://www.nsit.in/Content/assets/c_images/StatutoryCummitteespdf/Minority-Cell.pdf",
  internalComplaint: "https://cdn.academist.app/Cloud/cdnclg/8/Website/Academics/ICCommittee2026.pdf",
  antiRaggingCommittee: "https://cdn.academist.app/Cloud/cdnclg/8/Website/Academics/AntiRaggingCommittee2026.pdf",
  antiRaggingSquad: "https://cdn.academist.app/Cloud/cdnclg/8/Website/Academics/AntiRaggingSquad2026.pdf",
  grievanceCommittee: "https://cdn.academist.app/Cloud/cdnclg/8/Website/Academics/GRCommittee2026.pdf",
  obcCell: "https://www.nsit.in/Content/assets/c_images/StatutoryCummitteespdf/OBC-Cell.pdf",
  scStCommittee: "https://cdn.academist.app/Cloud/cdnclg/8/Website/Academics/SCST2026.pdf",
  industryCell: "https://cdn.academist.app/Cloud/cdnclg/8/Website/Academics/IndustryInstitutionCell2026.pdf",
  researchCell: "https://www.nsit.in/Content/assets/c_images/StatutoryCummitteespdf/R-And-D_Cell.pdf",
  iqacCommittee: "https://cdn.academist.app/Cloud/cdnclg/8/Website/Academics/IQACRecontitution2026.pdf",
  iqacVisionMission: "https://cdn.academist.app/Cloud/cdnclg/8/Website/Notice/IQAC-Vision-and-Mission.pdf",
  iqacMeeting: "https://cdn.academist.app/Cloud/cdnclg/8/Website/Notice/IQAC_Meeting.pdf",
  stepOne: "https://cdn.academist.app/Cloud/cdnclg/8/Website/Notice/step1pdf.pdf",
  yogVidya: "https://cdn.academist.app/Cloud/cdnclg/8/Website/Notice/YOGVIDYACLUB.pdf",
  sportsClub: "https://cdn.academist.app/Cloud/cdnclg/8/Website/Notice/Sports_Club.pdf",
  culturalClub: "https://cdn.academist.app/Cloud/cdnclg/8/Website/Notice/Cultural_Committee.pdf",
  mandatoryPartOne: "https://cdn.academist.app/Cloud/cdnclg/8/Website/Academics/AICTEApprovalPart12627pdf.pdf",
  mandatoryPartTwo: "https://cdn.academist.app/Cloud/cdnclg/8/Website/Academics/AICTEApprovalPart22627pdf.pdf",
  eoaCurrent: "https://cdn.dotplus.in/Cloud/Academist/nsitpdf/AICTE_EOA_2025-26.pdf",
  governingBody: "https://cdn.academist.app/Cloud/cdnclg/8/Website/Academics/BOGPDF2026.pdf",
};

export const aicteRows = [
  ["2025-2026", "AICTE_EOA 2025-26", pdfLinks.eoaCurrent],
  ["2024-2025", "AICTE_EOA 2024-25", "https://www.nsit.in/Content/assets/c_images/AICTEApproval/AICTE_EOA_2024-25.pdf"],
  ["2023-2024", "AICTE_EOA 2023-24", "https://www.nsit.in/Content/assets/c_images/AICTEApproval/AICTE_EOA_2023-24.pdf"],
  ["2022-2023", "AICTE_EOA 2022-23", "https://www.nsit.in/Content/assets/c_images/AICTEApproval/AICTE_EOA_2022-23.pdf"],
  ["2021-2022", "AICTE_EOA 2021-22", "https://www.nsit.in/Content/assets/c_images/AICTEApproval/AICTE_EOA_2021-22.pdf"],
  ["2020-2021", "AICTE_EOA 2020-21", "https://www.nsit.in/Content/assets/c_images/AICTEApproval/AICTE_EOA_2020-21.pdf"],
  ["2019-2020", "AICTE_EOA 2019-20", "https://www.nsit.in/Content/assets/c_images/AICTEApproval/AICTE_EOA_2019-20.pdf"],
  ["2018-2019", "AICTE_EOA 2018-19", "https://www.nsit.in/Content/assets/c_images/AICTEApproval/AICTE_EOA_2018-19.pdf"],
  ["2017-2018", "AICTE_EOA 2017-18", "https://www.nsit.in/Content/assets/c_images/AICTEApproval/AICTE_EOA_2017-18.pdf"],
  ["2016-2017", "AICTE_EOA 2016-17", "https://www.nsit.in/Content/assets/c_images/AICTEApproval/AICTE_EOA_2016-17.pdf"],
  ["2015-2016", "AICTE_EOA 2015-16", "https://www.nsit.in/Content/assets/c_images/AICTEApproval/AICTE_EOA_2015-16.pdf"],
  ["2014-2015", "AICTE_EOA 2014-15", "https://www.nsit.in/Content/assets/c_images/AICTEApproval/AICTE_EOA_2014-15.pdf"],
  ["2013", "AICTE_LOA 2013", "https://www.nsit.in/Content/assets/c_images/AICTEApproval/AICTE_LOA_2013.pdf"],
];

export const officialImages = {
  aboutMain: "https://www.nsit.in/Content/assets/c_images/about_img/about-us.jpg",
  aboutLogo: "https://www.nsit.in/Content/assets/c_images/nsit_logo/NSIT_logo/nsit-03.png",
  secretary: "https://www.nsit.in/Content/assets/c_images/nsit_sec/msi.png",
  director: "https://cdn.academist.app/Cloud/cdnclg/8/StaffPhoto/NSITDirectorPhotoNew2026.jpeg",
  principal: "https://cdn.academist.app/Cloud/cdnclg/8/StaffPhoto/NSITPrincipalPhoto2026.jpeg",
  deanAdministration: "https://www.nsit.in/Content/assets/c_images/Mr_Ramakant_Singh.jpg",
  vision: "https://www.nsit.in/Content/assets/c_images/nsit_images/VISIONOFTHEINSTITUTION.jpg",
  mission: "https://www.nsit.in/Content/assets/c_images/nsit_images/mission-education.jpg",
};

export function InstitutionShell({ activePath, title, children }) {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className="mb-2">{title}</h1>
          <Breadcrumbs section="The Institute" title={title} />
        </div>
      </section>

      <section className={styles.shell}>
        <aside className={styles.sideNav}>
          <strong className="d-block text-uppercase" style={{ color: "var(--main-color)", fontSize: 13, fontWeight: 950, letterSpacing: "0.08em", marginBottom: 8 }}>The Institute</strong>
          {institutionLinks.map(([label, href]) => (
            <Link className={activePath === href ? styles.active : ""} href={href} key={href}>
              {label}
            </Link>
          ))}
        </aside>
        <div style={{minWidth: 0}}>
          {children}
        </div>
      </section>
    </main>
  );
}

export function DocumentGrid({ documents }) {
  return (
    <div className={styles.docs}>
      {documents.map(([label, href]) => (
        <a href={href} target="_blank" rel="noreferrer" className={styles.docCard} key={label}>
          <span>PDF</span>
          <strong>{label}</strong>
          <small>Click to open document</small>
        </a>
      ))}
    </div>
  );
}

export { styles };
