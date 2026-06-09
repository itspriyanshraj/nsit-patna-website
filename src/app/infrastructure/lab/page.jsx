import { SectionShell } from "../../components/SectionShell";
import { infrastructureLinks } from "../infrastructureLinks";
import styles from "../infrastructurePages.module.css";

export const metadata = {
  title: "Lab | NSIT Patna",
};

const labImages = [
  { src: "https://www.nsit.in/Content/assets/c_images/nsit_lab/l1.jpg", label: "Lab Main" },
  { src: "https://www.nsit.in/Content/assets/c_images/nsit_lab/l2.png", label: "Computer Lab" },
  { src: "https://www.nsit.in/Content/assets/c_images/nsit_lab/l3.png", label: "Workshop" },
  { src: "https://www.nsit.in/Content/assets/c_images/nsit_lab/l4.png", label: "Electronics Lab" },
  { src: "https://www.nsit.in/Content/assets/c_images/nsit_lab/l5.png", label: "Machine Shop" },
  { src: "https://www.nsit.in/Content/assets/c_images/nsit_lab/l7.png", label: "Lab Equipment" },
  { src: "https://www.nsit.in/Content/assets/c_images/nsit_lab/I8.png", label: "Student Work" },
];

export default function LabPage() {
  return (
    <SectionShell section="Infrastructure" activePath="/infrastructure/lab" title="Lab" links={infrastructureLinks}>
      <div className={styles.heading}>
        <span>Infrastructure</span>
        <h2>Empowering Minds: The Computing Resource Hub</h2>
      </div>

      <div className={styles.panel}>
        <div className={styles.split}>
          <div className={styles.panelBody}>
            <p>
              NSIT has a fully fledged product development laboratory. The lab has all facilities which provide a clear cut idea of the processes behind the Electronic Product Design. The lab caters to the requirement of students for carrying out mini-project and major project in the department itself. NSIT has an exclusive workshop facility for practical as well as project work and is equipped with modern machines and equipments. Students can perform practices in carpentry, welding, sheet metal, foundry, bench work and fitter shop. Machine shop is equipped with lathe machine, shaper machine, milling machine, drilling machine, and grinding machine. In addition, efficient and strong technical assistance is available to students and faculty for providing expert help.
            </p>
          </div>
          <div className={styles.splitMedia}>
            <img src="https://www.nsit.in/Content/assets/c_images/nsit_lab/labmain.jpg" alt="NSIT Lab" />
          </div>
        </div>
      </div>

      <h3 className={styles.sectionTitle}>Project Gallery</h3>

      <div className={styles.galleryGrid}>
        {labImages.map((item, i) => (
          <figure key={i}>
            <img src={item.src} alt={item.label} />
            <figcaption className={styles.caption}>{item.label}</figcaption>
          </figure>
        ))}
      </div>
    </SectionShell>
  );
}
