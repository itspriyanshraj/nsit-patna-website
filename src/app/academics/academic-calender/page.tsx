import { AcademicsShell } from "../AcademicsShell";
import styles from "../academicsPages.module.css";

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const semesterEvents = {
  even: [
    ["Commencement of Classes", "First week of January"],
    ["Mid-Semester Tests", "Second week of March"],
    ["End-Semester Examinations", "Last week of May"],
    ["Result Declaration", "Within 45 days of exams"],
    ["Summer Break", "June - July"],
  ],
  odd: [
    ["Commencement of Classes", "First week of August"],
    ["Mid-Semester Tests", "Second week of October"],
    ["End-Semester Examinations", "Last week of December"],
    ["Result Declaration", "Within 45 days of exams"],
    ["Winter Break", "Last week of December"],
  ],
};

const archiveDocs = [
  ["Session 2023-24 Odd Sem", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Notice/SESSION_2023-24_ODD_SEM.pdf"],
  ["Session 2023-24 4th/6th/1st Sem", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Notice/SESSION_2023-24_4TH_6TH_1ST_SEM.pdf"],
  ["Batch 2022-26 2nd Sem", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Notice/BATCH_2022-26_SECOND_SEM.pdf"],
  ["Batch 2022-26 3rd Sem", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Notice/BATCH_2022-26_3RD_SEM.pdf"],
  ["Batch 2019-23 8th Sem", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Notice/BATCH_2019-23_8TH_SEM.pdf"],
  ["2022-23 Even Sem", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Notice/22-23even.pdf"],
  ["2021-22 Even Sem", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Notice/21-22even.pdf"],
  ["2021-22 Odd Sem", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Notice/21-22odd.pdf"],
  ["2020-21 Even Sem", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Notice/20-21even.pdf"],
  ["2020-21 Odd Sem", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Notice/20-21odd.pdf"],
  ["2019-20 Even Sem", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Notice/19-20even.pdf"],
  ["2019-20 Odd Sem", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Notice/19-20odd.pdf"],
  ["2018-19 Odd Sem", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Notice/18-19odd.pdf"],
];

function ArchiveIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/>
    </svg>
  );
}

export default function AcademicCalenderPage() {
  return (
    <AcademicsShell activePath="/academics/academic-calender" title="Academic Calender">
      <div className={styles.calendarWrap}>

        <div className={styles.annualBar}>
          <h3>Annual Overview — Session 2025-26</h3>
          <div className={styles.monthTrack}>
            {months.map((m, i) => (
              <div className={styles.monthCell} key={m}>
                <span className={styles.monthLabel}>{m}</span>
                <div className={`${styles.monthBar} ${i < 6 ? styles.even : styles.odd} ${(i === 4 || i === 5 || i === 11) ? styles.exam : ""}`} />
              </div>
            ))}
          </div>
          <div className={styles.legendStrip}>
            <span className={styles.legendItem}>
              <span className={styles.legendDot} style={{background: "var(--main-color)"}} />
              Even Semester (Jan-Jun)
            </span>
            <span className={styles.legendItem}>
              <span className={styles.legendDot} style={{background: "var(--main-dark-color)"}} />
              Odd Semester (Jul-Dec)
            </span>
            <span className={styles.legendItem}>
              <span className={styles.legendDot} style={{background: "var(--highlight-color)"}} />
              Examination Period
            </span>
          </div>
        </div>

        <div className={styles.semesterGrid}>
          <div className={styles.semCard}>
            <div className={`${styles.semCardHead} ${styles.evenHead}`}>
              <div className={styles.semIcon}>E</div>
              <div className={styles.semTitle}>
                <h4>Even Semester</h4>
                <small>January – June</small>
              </div>
            </div>
            <div className={styles.semBody}>
              <div className={styles.timeline}>
                {semesterEvents.even.map(([event, period], i) => (
                  <div className={`${styles.timelineItem} ${styles.evenEvent}`} key={event}>
                    <div className={styles.timelineDotWrap}>
                      <div className={styles.timelineDot} />
                      {i < semesterEvents.even.length - 1 && <div className={styles.timelineLine} />}
                    </div>
                    <div className={styles.timelineContent}>
                      <strong>{event}</strong>
                      <span>{period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.semCard}>
            <div className={`${styles.semCardHead} ${styles.oddHead}`}>
              <div className={styles.semIcon}>O</div>
              <div className={styles.semTitle}>
                <h4>Odd Semester</h4>
                <small>July – December</small>
              </div>
            </div>
            <div className={styles.semBody}>
              <div className={styles.timeline}>
                {semesterEvents.odd.map(([event, period], i) => (
                  <div className={`${styles.timelineItem} ${styles.oddEvent}`} key={event}>
                    <div className={styles.timelineDotWrap}>
                      <div className={styles.timelineDot} />
                      {i < semesterEvents.odd.length - 1 && <div className={styles.timelineLine} />}
                    </div>
                    <div className={styles.timelineContent}>
                      <strong>{event}</strong>
                      <span>{period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.archiveSection}>
          <div className={styles.archiveHead}>
            <h3><ArchiveIcon /> Calendar Archive</h3>
            <span>{archiveDocs.length} documents</span>
          </div>
          <div className={styles.archiveBody}>
            {archiveDocs.map(([label, href]) => (
              <a href={href} target="_blank" rel="noreferrer" className={styles.archiveRow} key={label}>
                <span className={styles.archiveBadge}>PDF</span>
                <span className={styles.archiveLabel}>{label}</span>
                <span className={styles.archiveAction}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download
                </span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </AcademicsShell>
  );
}
