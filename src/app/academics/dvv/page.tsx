import { AcademicsShell, DocumentGrid } from "../AcademicsShell";
import styles from "../academicsPages.module.css";

const thStyle: React.CSSProperties = {
  padding: "12px 16px", textAlign: "left", color: "#fff", fontSize: 13,
  fontWeight: 950, background: "#172033", textTransform: "uppercase", letterSpacing: "0.04em"
};
const tdStyle: React.CSSProperties = {
  padding: "12px 16px", borderBottom: "1px solid var(--border-color)",
  color: "var(--para-color)", fontSize: 14, fontWeight: 600
};
const tdLabel: React.CSSProperties = { ...tdStyle, color: "#14213d", fontWeight: 850 };

function DocTable({ title, items }: { title: string; items: [string, string][] }) {
  if (items.length === 0) return null;
  return (
    <div className={styles.tablePanel} style={{ marginTop: 24 }}>
      <h3 style={{ color: "#14213d", fontSize: 18, fontWeight: 850, marginBottom: 14 }}>{title}</h3>
      <table style={{ width: "100%", minWidth: 600, borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ ...thStyle, width: 60 }}>S.No.</th>
            <th style={thStyle}>Title</th>
            <th style={{ ...thStyle, width: 120, textAlign: "center" }}>Link</th>
          </tr>
        </thead>
        <tbody>
          {items.map(([label, href], i) => (
            <tr key={i}>
              <td style={tdStyle}>{i + 1}</td>
              <td style={tdLabel}>{label}</td>
              <td style={{ ...tdStyle, textAlign: "center" }}>
                <a href={href} target="_blank" rel="noreferrer"
                  style={{ color: "var(--main-color)", fontWeight: 950, fontSize: 13, textDecoration: "none" }}>
                  View Link
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function DvvPage() {
  return (
    <AcademicsShell activePath="/academics/dvv" title="DVV">
      <div className={styles.introPanel}>
        <span className="d-inline-flex text-uppercase" style={{color: 'var(--main-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em'}}>Data Validation</span>
        <h2>DVV (Data Validation & Verification)</h2>
        <p>The Data Validation and Verification (DVV) process is a critical component of the NAAC accreditation framework. It involves the verification of data submitted by the institution through the submission of supporting documents and evidence. The DVV process ensures the authenticity and accuracy of the institutional data submitted to NAAC.</p>
      </div>

      <DocTable title="5.1.4 - The institution adopts the following for redressal of student grievances including sexual harassment and ragging cases" items={[
        ["Anti Ragging Committee", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image88fcb8fed8544ec7a97332a8b97ea9db57vghx5d4j7gjmqbhikd2c.pdf"],
        ["Internal Complaint Committee", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image2d249e1ddf1d429cb896d1a5a6b0e18dpmf6ws2rs1bw68p9k5kyl.pdf"],
        ["Grievance Redressal Committee", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagee372a2d739a84aea8facd5c1cd81b42ci4sfyrufj7b6ngrhqjrgeo.pdf"],
        ["Women's Cell", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image844f1a9b30264c9e85161ca8cfe2a434ga9zy8juqptyf7o26ogyo.pdf"],
        ["The Circular/web-link/committee report", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imageeb60ed381df945b694ab2a1c5e90b0d2p0uk7q4mbbgy6g6wh4ha0a.pdf"],
        ["Minutes of the meetings/Report of grievance from the concerned committee", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image7d371b1373aa4eca83eb2a710202e349s1222l84tqqc5q29aa3b.pdf"],
        ["Proof of constitution of Internal cases committees/Grievances Committee formation/other committees as per UGC norms", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image8210e6b0aaf54cb9a8dd5373a12c47d5dt1hcl46i6gjdy6buqvtd.pdf"],
      ]} />

      <DocTable title="2.1.1 - Number of seats filled year wise during last five years (Only first year admissions)" items={[
        ["2.1.1.1 - Data template as prescribed by NAAC", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagee638c0bad2454d23bb54b9ead22ac56fpqh84rrslxoszh0hkblfq.xlsx"],
        ["University affiliation letter", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagef04dadfb82ce4a6fb1d42f6caa568389y4hniem5tkrwx78rvbef1.pdf"],
        ["AICTE Affiliation letter for last five years", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image63d507a2f55f497b9eae721eacf0c0cfoxl2rblmmsjub1kbhplj2b.pdf"],
        ["Approved Admission list for academic year 2022-23", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image5aaadf7132b4497ca05e3613f7d015f91cn4zmbu6mm2b8w1n7p9ui.pdf"],
        ["Approved Admission list for academic year 2021-22", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image836cb8114e334c00b70c7c399a2ae99f3mpfnoa2au9e64fqw9i86h.pdf"],
        ["Approved Admission list for academic year 2020-21", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagef836421acd8c49139e47ba2c9955d7963lez40emxufgow1ed8guf.pdf"],
        ["Approved Admission list for academic year 2019-20", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image9d33123fd2684962b6f6aefa1ab1417ber1en2oqli4w69zb2opd.pdf"],
        ["Approved Admission list for academic year 2018-19", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image75fa15ee73b74ee88b609dd38688eaa82qkgvkh2oy7augw4tlalt4.pdf"],
        ["2.1.1.1 Number of Students admitted year wise during last five years", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image6c1df59c093f4d6797a6c57bc59f90003yfr99ag7pbof5qaeyqdb.pdf"],
      ]} />

      <DocTable title="University Affiliation Letter" items={[
        ["Affiliation letter for B.TECH 2022-23", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image410d13f2e2ec41eb848b7b696e33b037hy0z9zfmqcvlotezyi6ch.pdf"],
        ["Affiliation letter for BBA/BCA 2022-23", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagefe10234c937e4dffaf49f8889d5701067x11eozc314r4fmzj1w3q.pdf"],
        ["Affiliation letter for B.TECH 2021-22", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagef1479a3abfd245c8b0522019c18e568be8z64p4mc55kbigft6uxls.pdf"],
        ["Affiliation letter for B.TECH 2020-21", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image7efeda4fc67640709260ae144df39855iac9lwj61abjmu4q27nbe9.pdf"],
        ["Affiliation letter for B.TECH 2019-20", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image7a86c7db20814c289d189c9c9b0c552b54b9g8tre72pkum94sjbo.pdf"],
        ["Affiliation letter for B.TECH 2018-19", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image3d1431b736774f21be3de2873d7dfa392kejklz03nz6gxizmv635p.pdf"],
      ]} />

      <DocTable title="2.6.3 Pass percentage of Students during last five years" items={[
        ["Clarification for non-matching of final year students with IIQA filled up by the Institution", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image56e9f53f000b42cb8fa37540e37ea49d9o2cgyafj0c8x8ltx9tqm5.pdf"],
        ["Pass percentage Students in Academic Year 2022-23", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagec502d82bb8fd4ac2b7cade3cae7a10712b7cwmttap893e2fyyv91k.pdf"],
        ["Pass percentage Students in Academic Year 2021-22", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image26df9c9f38da443d88345c2cdf226de2e5n0smyp8etcuyz1dez6q.pdf"],
        ["Pass percentage Students in Academic Year 2020-21", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagedc62a2a849824177b25b449b70877aecuvcd9e2n1rhzarallt3uc.pdf"],
        ["Pass percentage Students in Academic Year 2019-20", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image0431d1f5ef424fa4802f7167efe36ffcbvmmd8u5dvwxrzzqhoupw.pdf"],
        ["Pass percentage Students in Academic Year 2018-19", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image860b281c55884d96864f2febe1f0093ezkfzbwc99lsy2ohgztmr3.pdf"],
        ["Combined pass percentage", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imageff96394cdad649478e1b233196edef8bom8o6403qagz22a4e4p9tf.pdf"],
        ["Pass percentage of last five years", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image48be3245202e428aa9428f3d980baf55f9i9ocw3vxwnh3j56gwcgs.pdf"],
      ]} />

      <DocTable title="Percentage of students qualifying in state/national/international level examinations during the last five years" items={[
        ["Manisha Jaishwal Gate Score Card", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image54e8dc99c318463eabbc53e8c74f1466cpek43clnnef91b96up5ob.pdf"],
        ["Himanshu Kumar GATE Score Card", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image86ff33b85ca64946970c3116282b10b6pz1rwds7zh3p4r5wxdtai.pdf"],
        ["Harsh Kumar GATE Score Card", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagea1898c39df4d4acda4a5c42f29a9e53avh22pxkj5r5ay5hncqw8a.pdf"],
        ["Sourav Kumar GATE Score Card", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagef7e53b782e0e4c5dbfe87d95f5227e4eqesw2e18pn9gmg95kymeym.pdf"],
        ["Suman Kumar Railway", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imageb642e9a934214a3a89504361993bb6ccr607zm84pcqokzifha043.pdf"],
        ["Rajnish Arya Railway", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagee9907ceb235947d0a4565c7a840d6e8dtm1m0kmgi8mac3rvj9uoq.pdf"],
        ["Asmita Kumari GATE Score Card", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image1cb22e7e7f224dad98014b48e1a8c746p078nb07xxnwp7dwr4il3g.pdf"],
      ]} />

      <DocTable title="No. of functional MoU with institutions/industries, on job training - last 5 years" items={[
        ["3.5.1 Data template as prescribed by NAAC", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image6422d99029534b83a397830631c4266cgznqqjngaatx74vt52ar4c.xlsx"],
        ["MOU with Power Integrated Solution", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image6d9aac476c6c4b5ebca4b507d140df456iz9l1xopj90dk5wu889l.pdf"],
        ["MOU with Drobozone Innovative Centre Pvt. Ltd.", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image6cce268fb0704c2ea452b721a0a2ded9eobt9z27mjnlxss0gxa95h.pdf"],
        ["MOU with NIELIT", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image98d51b8553ae41c0abaff0848558f90cmh162ienmjoicgaa62buf.pdf"],
        ["Workshop on MATLAB Based Power Electronics and Drive", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image4415d4fc391c445e91d467d29786509at596spsjn6dzn7g2n6mtn.pdf"],
        ["Workshop on Mechatronics and Industrial Drive and Automation", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagee583d7f1ea7b4c7fba15a75fef9a9c88c9gqs01i1hrdcwv831hoi.pdf"],
        ["Workshop on Real Time Embedded System and Its Application", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image09ab5b3b5db14ff88645436907b0c01asulyx49mn1dy64ddnmjmok.pdf"],
        ["Workshop on PCB Design and Application", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image97feb3eb848543629937b88bcf84b453rb5pb4cuf3ia62sxnplf.pdf"],
        ["Workshop on PV Based Renewable Energy and Its Application", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagecf47d05d1ea740ff9ca019d2bb7b4870f80tp181kd6m9qbef61q2.pdf"],
        ["Workshop on CODE-A-THON", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image657c5ad7bf944b8da44e350d1fbcc534ok3hs5rjnnjl3aeeicte6f.pdf"],
        ["Workshop on Robotic and Coding Workshop", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image6f0acc6f37474fdba33725e1461230926wyqxeay1ntzo46wdj8gk.pdf"],
        ["List of activities Conducted under each MOU", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image9bd3f894f72845d59a07b3790c5072bbz75zw9fzpyqs2mj7l9pxpf.pdf"],
      ]} />

      <DocTable title="Workshops" items={[
        ["Certificate Course on Skill Development", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image7a570fa18b4a47b4a38b6fb06790f092cukzwak0i7hn1syf7hn1f.pdf"],
        ["Workshop on MATLAB-Based Power Electronics and Drives", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imaged684fcab2e174a6b949a31ba5dab9d5czqhp3u0v088zivs4y7m2r.pdf"],
        ["National Seminar on Cyber Security and Cyber Forensics", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image65a7135a0d9041fb9db81a259d6cae3abnsncbnst9dh4oruhjzqqm.pdf"],
        ["Workshop on Mechatronics and Industrial Drive and Automation", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image5b9ebf70fbb74df983918a3f2b0e62b6pwy9my5abfb7pjtp9jtlf.pdf"],
        ["Course on Aptitude Development", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image73f7472c653f421786316c85b71a6796ysek9xc4cfs1ui0snas.pdf"],
        ["Regional Level Student Convention", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image1b3960d96adc4bc6a7e2772df37afed8krc1xf1uf7futeoibx7d.pdf"],
        ["Workshop on Solid Works", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imaged5ee6507add446faac1b7fe1152e22e5l32yhf9dpgbunlom5pxw48.pdf"],
        ["Workshop on Real Time Embedded System and Its Applications", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imaged75bd26a65c6439196cf942acd09a25b6vzfdsdlhpem7ece7l2wh.pdf"],
        ["Seminar on Recent Advancement in Wireless Communication", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imageb736f97cff964da7add0f741f923ab23exbwl4zjnxqb57n7h3o5n6.pdf"],
        ["Workshop on PCB Design & Application", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image2c8d83c3118e43a494abae520913a8bepvpnmth9tcfcc7ug9ful3t.pdf"],
        ["CSI-Bihar Student Convention Theme: Blockchain", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image6aa8e7452d18454bba6afa685533c4a5y0ehrn3gzqxvdtoc2r727.pdf"],
        ["Application of Engg. In Biomedical & Agriculture", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image5d76b75f2dda4d86bdbb0209e1dfa338eookvfdc0qv2v2ikj34iff.pdf"],
        ["Webinar on E-Governance for National Development", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagef99aaeb398a1411899e5930172038bafx85gd0hkhtb1fdah69zzvo.pdf"],
        ["Workshop on Introduction to Machine Learning", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagec2deba3234aa4cfc8f3e740df89ff143hsr3q53t9bvdv8akd21e.pdf"],
        ["Role of Communication Skills in Career Development", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image2825dd3051454ae19de94b51c550cad9v4mr5ntyzkimpjir2q6b1r.pdf"],
        ["Workshop on Capacity Building Program on Life Skills", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image469d6ef09f764f68beacd67b52b8380brvwylifs8587psrbwbvgun.pdf"],
      ]} />

      <DocTable title="3.1 Expenditure excluding salary component year wise during the last five years" items={[
        ["Data template as prescribed by NAAC", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image29eca6ba61974945944575bb679fa6d9s2juqj1zy1ede04h1senqb.xlsx"],
        ["Expenditure and Highlight the salary component", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagea8d71dd4c55e4fd8890fb32c94112ad51pem9wgsxcjjquygiitxc.pdf"],
        ["CA Certificate having details of Total Expenditure", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagee94c5eb07813425993bba932d92aa465ndezlkvekl40053l9i421.pdf"],
      ]} />

      <DocTable title="Physical facilities and academic support facilities excluding salary component" items={[
        ["Data template as prescribed by NAAC", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagedefa3cd819534690a998e30b31a7ef375g61oaf6exl95gn62itwi.xlsx"],
        ["Audited statement for the repair and maintenance of physical facilities and AMC for Academic facility for the last five years", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image6e5de33ed13d49ea96257335bdf5bc1ci9s3vk8kudr7rbz3oal21v.pdf"],
        ["Audit report certificate from C.A highlighting the expenditure statement incurred on maintenance", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image362fdfb505ca45f7ba4c26b3ca42545epsdbfhvbg6mzupvigr2f4.pdf"],
      ]} />

      <DocTable title="Expenditure for infrastructure development and augmentation excluding salary" items={[
        ["Data template as prescribed by NAAC", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image0dab66565a4d48bd8e22635fa3695ebdcdedmn2lu4m89et06ncqql.xlsx"],
        ["For infrastructure augmentation during last five years", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imageb8a50ec2f5cb4799b4274f304d978c22iqxsk3o5tsgaelzkklyjkh.pdf"],
        ["Audit report certificate from C.A highlighting the expenditure excluding salary for infrastructure augmentation", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image06b80b7f91ee4d5fb53934e4940e64dctasopje3fgdjsaqu4js3l.pdf"],
      ]} />

      <DocTable title="7.1.2 - Institution Facilities & Initiatives" items={[
        ["Alternate Sources of Energy and Energy Conservation Measures", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagee655c7df4c594f64b3204eca9dbc8a68kwccxcahao8luhvy6fiw0c.pdf"],
        ["Management of the Various Types of Degradable and Non-Degradable Waste", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image4be2bd6802f943a797cbd175b4cdf175tcu9dyzwjlsg4wg5xepiob.pdf"],
        ["Water Conservation", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagede026d98115244feadd7e668bf98820e9mglm0wbgefcu080h24mph.pdf"],
        ["Green Campus Initiatives", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image51a47486cc2f456abaaef603ac7dfbb1siim20trdys2h72vq9hl8c.pdf"],
        ["Disabled-friendly, Barrier Free Environment", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagee57e50b2e6eb414a8487f6cb2ae444be1d7pavnszfjkyy7uc7hpas.pdf"],
        ["Policy Document (The Green Campus)", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagefae43b493e2743958738a9c8eaac3d1ea79clo2leetrp0coi13hi.pdf"],
        ["Policy Document (Environment and Energy Usage)", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image3698ccea6f2846168c56568ee03ee2183ml9ls9nyohhs3w6wnpi4d.pdf"],
      ]} />

      <DocTable title="7.1.3 - Quality Audits on Environment and Energy" items={[
        ["Audit Report with Clear Geo-tagged Photo", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagedd739b2229b24249887d126646eafd43qawxswwndza1qyqyuzupl8.pdf"],
        ["Auditor Government Recognition Certificate/Letter", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image0fb411229dc4470cb46e8bb8bd095d8f043nqlroi7n3hdqjcmp5jww.pdf"],
        ["Certificate from the External Accredited Auditing Agency", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image5730bd7d2f434904a6991feeeed89845hht80p3g78o72wefpr6ir8.pdf"],
        ["Policy Document on Environment and Energy Usage", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image6a212d43faba452b98705b7a863ffacdk6hcon8uxbl2j2r7iyjmtp.pdf"],
        ["Action Taken Report and Achievement Report as Clear and Green Campus Initiatives", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image73a3181779be4224a024c6350ae7f4847yeyrq2n3pnnclc7p9rj9g.pdf"],
        ["Audit Report", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image0969771a8675419ba843ff4050f76430pkdw4yyp6ukvpq3t4em54.pdf"],
        ["Beyond the Campus Environmental Promotion Activities", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagedb24520bfc0343fdabd8e5075dc658449sv0eggw8eqv0x5j1wp47e.pdf"],
      ]} />

      <DocTable title="Feedback System" items={[
        ["Sample Feedback Forms from Stakeholders", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image0e224c5056004d6b901d3900d7f3f34du46jnsh3bie2gdqp2nlmkv.pdf"],
        ["Feedback Analysis & Action Taken Report", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imageb54f8628ee1745c9912baeee178b0e56xw5b5000u2b5ucobrrgg.pdf"],
        ["Communication Letter with Affiliating University Regarding Feedback", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imaged00f322e98bc4a3f847fac5f257b93aab4mj8wl4k7sqsux9tpiv8l.pdf"],
      ]} />
    </AcademicsShell>
  );
}