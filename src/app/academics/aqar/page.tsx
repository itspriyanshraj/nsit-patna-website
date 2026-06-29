import { AcademicsShell } from "../AcademicsShell";
import styles from "../academicsPages.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AQAR - Annual Quality Assurance Reports",
  description: "Annual Quality Assurance Reports (AQAR) of NSIT Patna submitted to NAAC. Download AQAR documents for various years.",
};

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

export default function AqarPage() {
  return (
    <AcademicsShell activePath="/academics/aqar" title="AQAR">
      <div className={styles.introPanel}>
        <span className="d-inline-flex text-uppercase" style={{color: 'var(--main-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em'}}>Quality Assurance</span>
        <h2>Annual Quality Assurance Report (AQAR)</h2>
        <p>
          The Annual Quality Assurance Report (AQAR) is submitted by the Internal Quality
          Assurance Cell (IQAC) to NAAC every year. It provides a comprehensive overview
          of the institution&apos;s performance across all seven NAAC criteria, highlighting
          achievements, improvements, and quality initiatives undertaken during the
          academic year.
        </p>
        <p>
          NSIT has consistently submitted its AQAR to NAAC within the stipulated timeline.
          The reports document the institute&apos;s continuous journey towards academic
          excellence, infrastructure development, research output, and overall
          institutional growth.
        </p>
      </div>

      <DocTable title="IQAC" items={[
        ["IQAC - Vision & Mission", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image5206035ee1a848269e045a6a731fdd6dipq99yotwcl7s1eu5eh1e.pdf"],
        ["IQAC Committee", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagea037b198cfe746f893622613d693f0bdc9jrxdc041bribww681ok.pdf"],
        ["IQAC Minutes of Meeting", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image047ef31d307548f5be377916bea48379hir4d32jnqjdd5zktdnb.pdf"],
      ]} />

      <DocTable title="Student Enrollment and Profile" items={[
        ["B.Tech- CE Enrolment report", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image10e268b161ae4116ac1bab0dbd1c9037gbqyw2vqzpp578hg7x5x24.pdf"],
        ["B.Tech- ME Enrolment report", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image8291d58133f2464d8df98b06bc9564b9rujxdn0s4skp92n2y6zh48.pdf"],
        ["B.Tech- EEE Enrolment Report", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image081256b8e8224d0a862dc5f0a4157687v079x0gng3mb5jxsdjx8w.pdf"],
        ["B.Tech- ECE Enrolment Report", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image0b934bd951ca400486861619a8026ca8plroszjsqkrzagyab18uzb.pdf"],
        ["B.Tech-CSE Enrolment Report", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagec066b60ee57d4b16b9455b118a2ec40fqf2pt237bg2a2pu2qqj5a.pdf"],
        ["BBA Enrolment Report", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image1c205e01216f4091b3ea9504bd09fb1ae7emhybiplbvrq5j7rxhu.pdf"],
        ["BCA Enrolment Report", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image91c7cd688cfa489097d570e988ddfb11r0j0mjcwpkojh212fdtj.pdf"],
        ["Letter issued by Science and Technology Dept", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image11afb1c39e144107acc8f20e7552d985wmef00fy0idroie8n79vya.pdf"],
        ["List of students admitted in academic year 2023-24.", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image81e1f5ee33f942d295b619cc419d8029llwz1pl6i4bld27im5ksa.pdf"],
        ["Number of seats earmarked for reserved category as per GOI/ State Govt. rule during the year.", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image27bbaf69470045ae8a8519693f06fdffpipnnkhudden6c32s0ewj9.pdf"],
      ]} />

      <DocTable title="3.1.3 - Number of Seminars/conferences/workshops conducted by the institution during the year 2023-24" items={[
        ["Course on Aptitude Development", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image6ca821fb0a724e0f98787c54efdc7d88ms8zwn96wm9hj6leci9nsg.pdf"],
        ["One Week Workshop on PCB Design", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image3c1ee94c93b745e498710297155f0955f5qto80p9jmrjca7dbx4p.pdf"],
        ["Course on Recent advancement in civil engineering construction materials", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image51a34fc54bc3474aaa9234572bda5043hxslpusdb8quczqnz95olg.pdf"],
        ["Skill Development Program", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image6a532e5eec3a4391a9676e16c43b4b2fte1mgvibk2gam9cf3pv0s.pdf"],
        ["Robotic and Coding Workshop", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image13e87441b6b54bbb85cc7d31379b16b0va6nmoz3ctgnwn4h40jiv.pdf"],
        ["Embedded systems on Arduino", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image4f70d2ec86724fa68ff3d31b0c8408a0ch1gerjos6gzmcs9mkqz4.pdf"],
        ["PYTHON ON RP2040", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagec25faf5ec08f446f9969e61c24f0a831d9aysf9awyea9p4dka4fw7.pdf"],
      ]} />

      <DocTable title="1.1.1 Curricular Planning and Implementation" items={[
        ["Effective curriculum delivery through a well planned and documented process", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagea1b7c9b31ae24bbc83e86cbdfef05016tslnqszhu1ky2zoasv9goh.pdf"],
      ]} />

      <DocTable title="MOU" items={[
        ["Quality Austria Central Asia Pvt. Ltd.", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image11f8c2a539654050870f6bb4005a10bbqdrm0njiuk89nlompl8i.pdf"],
        ["Rapidsoft Technologies, Gurgaon", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imageb0387ea5e44f44749bc6266ac18df84d4jvz6bviqo5r0riiw3qsm.pdf"],
        ["Medhavi Aspire Pvt Ltd", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagee3f50e1a895c42ee896b594c773d1c01g8bh0fgzkh9omcklcflm6a.pdf"],
        ["Taxtron Technologies P Ltd. Uttar Pradesh", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image069dca02fed3410d946cacc411677a688jhhfp8kw38vtvr99p29k.pdf"],
        ["ENGINEERS CONCEPT", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image7c16f1fd92a3466a86f3847ded6e47c9p1dc8s9670qoaynr6qph9.pdf"],
        ["TAXTRON TECHNOLOGIES PVT LTD. selected list", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagedb3f2c884678485abe2b6b131e1fda720cn9b2iu0pr5bo46w5nmi7q.pdf"],
        ["MEDHAVI ASPIRE PVT LTD SELECTED LIST", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image38734aadd8f343ea86c0de807f04eb69w2tv6s3ysrdryixbeb7q6.pdf"],
        ["RAPIDSOFT TECHNOLOGIES, GURGAON LETTER", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image35d521b844bb480887ab129646b442ac628ujwdz6h64nlr2qqgf8a.pdf"],
        ["Field Trip", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image31f3752d4f0549d39efbcd497406e6f0muqcpcbng9mi51sagiy7yd.pdf"],
        ["Faculty Exchange", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image7606eee3db634fb882c1a04f589c871fd48uzthaxrzgav16h91fh.pdf"],
      ]} />

      <DocTable title="5.3.3 - Number of sports and cultural events/competitions in which students of the Institution participated during the year" items={[
        ["Soft copy of circular/brochure", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image5e90b071f0de480dbf7338b525cc34e5uwcpsdmkzb071fgyh7x5n4.pdf"],
        ["List of events along with the list of participants", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagec1ac0018ce2943c5be3dc3e976ef3da0iu1czbzp7q5ycxgz17zwg.xlsx"],
        ["Photo & Certificate of all events", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image2d47bc2934b1424a8379eb5cf52450db2yel2xegl9c204hv5udw75.pdf"],
      ]} />

      <DocTable title="The mechanism of internal/external assessment is transparent, and the grievance redressal system is time bound and efficient" items={[
        ["Internal Exam Process", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image96fad35f9f934659b6412ba0235f5df8su1tkqlg0p1qegcapw9e.pdf"],
        ["Assignment Evaluation", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image0afcc91fbeb14036b4131312a809a67755lphb5e0zrby4p8bdc6xm.pdf"],
        ["Project Evaluation Process", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image5df7b0eefaee45f69b2a4bde4f9b10835edmlgf8eghn5ohkxk0o6s.pdf"],
        ["University Exam Process (Letter to the University)", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image65bb2e0a754443b59ae2bec8bdb86383tkaldemi0ef64mh5yjyeuv.pdf"],
        ["Academic Calendar", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image4916affb5e4e426bbf4a2c2cb1137d69hquzch8vcfp3i5anik5z7q.pdf"],
        ["Class Committee Meeting", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imageb38170ac258b41bdae84c4a2eb8afa295ir8dngv0e9ov0lkzxg6zo.pdf"],
        ["Sample Copy", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagec274ce1ea09e45249970f44c311680f3jc5of0f4c3yef6spcmfbn.pdf"],
        ["Mentor Mentee", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image8baa7b0c6f6240348ef8a2e7e658c091xw05i1uo2few1jxkjq5ze.pdf"],
      ]} />

      <DocTable title="6.5.3" items={[
        ["IQAC MOM", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image7685f0d9a1c84b2b929b0c9444719c53y03letglllejvty9ant9kf.pdf"],
        ["Action taken report", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagea7e3fb0c9cef4db98a8d6ba2bab328dbru74hhsjy0ikhxmffrbeg.pdf"],
        ["Academic and administrative audit", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image11bc80b9a41a431aad99db5f6acbc844vrg6crffuyjumdzbayfth.pdf"],
        ["Quality Assurance initiatives of the induction", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image9adad8c213494709a46968c2cacdf41bqj79ofgi89siuqguskn0q.pdf"],
      ]} />

      <DocTable title="5.1.5" items={[
        ["Internal Complaint Committee", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagef0992903560448cf8531f467dd636e454sti6uetmurkc8q3m3kir.pdf"],
        ["Anti-Ragging Committee", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagece77960d122a4c388217e69e8352a576zj9jzzlrs9am4d3204sy7.pdf"],
        ["Minority Cell", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image5d35dcb63372413d8efaa41abe52450e51uuodm0bqhqhg2ok2xhfh.pdf"],
        ["Women Cell", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image133b0ae3738d4345981d68c716f68f4balxtnoxe2zr3o74tmsiuhq.pdf"],
        ["SC & ST Cell", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image133b0ae3738d4345981d68c716f68f4balxtnoxe2zr3o74tmsiuhq.pdf"],
      ]} />

      <DocTable title="7.1.1" items={[
        ["Measures initiated by the Institution for the promotion of gender equity during the year", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image1be20f2953b743b7926d23ed0e0b33d3rikw9n766pdt7ub2iucni.pdf"],
        ["7.1.3", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image4f2a52cd9ff04404b73d1c7fd675764awk0tmtielvznofolwm5r.pdf"],
      ]} />

      <DocTable title="2.7.1 Students Satisfaction Survey" items={[
        ["Students Satisfaction Survey 2023-24", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imageccff27fdc50a464ea2cd738abae8b3c79t7l3sa0kynetmfj4nmat.pdf"],
      ]} />

      <DocTable title="Institution facilitates students' representation and engagement" items={[
        ["Institution Facilitates Students' Representation And Engagement", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image797109311e404afcad020e913264b7cen247qjipj9jmhjhtr75f.pdf"],
      ]} />

      <DocTable title="1.4 Feedback System" items={[
        ["1.4.1 Feedback Action Report", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagecc9be5742e5c4fd9bc02218f9c4ba9eb9i0htsbo0fm0n3uhgx5ymk.pdf"],
        ["1.4.2 Stakeholders Feedback (Students, Teachers, Employers & Alumni)", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image45a59d072f0f4aaca69c33fd3d42685atral21rt3ni05hsec27orgu.pdf"],
      ]} />

      <DocTable title="1.2.1 Number of Programmes in which Choice Based Credit System (CBCS)" items={[
        ["COMBINED SYLLABUS ALL PROGRAMS", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image8a04391f6d8940c8ba8ccecdd36b29b9rrqm3l46vmctx7jjey63m.pdf"],
      ]} />

      <DocTable title="1.3.2 & 1.3.3 Internship" items={[
        ["ECE INTERNSHIP 3RD SEM", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image1c6f74b470cc41eab27ad0ada3af58bfkbr5iyx43fhldqiin2zsag.pdf"],
        ["ECE INTERNSHIP 5TH SEM", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagee239d32b04014f65bc0920a9880d68c8r2bjck76x4qsw3xo96ygc.pdf"],
        ["ECE INTERNSHIP 7TH SEM", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagec198d0ce50b849159ea5a520a9d2260dgwedem569rq6c5l0pmelgk.pdf"],
        ["EEE INTERNSHIP 3RD SEM", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image3cb1051e35b24799891bbd812a48cea4lunovgokrsabdqcx9oxrmk.pdf"],
        ["EEE INTERNSHIP 5TH SEM", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imageb140dd945a474a3590360238590374bbqo14dhomtwkd45y3vmsayv.pdf"],
        ["EEE INTERNSHIP 7TH SEM", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image0a55c9d85d1e4721b86be346543aaacdr2nxiqhlmrv00356bdkd.pdf"],
        ["CSE INTERNSHIP 3RD SEM", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image85d73ed2aaf442838153fc22f20e2d47ktv70ajtik4o0c2dt2b5.pdf"],
        ["CSE INTERNSHIP 5TH SEM", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image1d702436165543e8bdb40ef9d51914b84625h7xufyo0ttfmom5wm3b.pdf"],
        ["CSE INTERNSHIP 7TH SEM", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image7e73e8d01ae44c51bef7d318b38a5edcev6gz5ii88fi5bf5oiowfj.pdf"],
        ["ME INTERNSHIP 3RD SEM", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image18ea5ee8103a4f9298c9c32e6e0955f5c6gy1t2bncotr1rpvvi16g.pdf"],
        ["ME INTERNSHIP 5TH SEM", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagebd05af125d6f469cb6df1b4cb2aa948bsgg5suky94nm99sj5oqt3n.pdf"],
        ["CIVIL INTERNSHIP 3RD SEM", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imaged9ec1e631bf146c691a5b08fa4d9b99etpi0mhya6bof7hu45qqqkh.pdf"],
        ["CIVIL INTERNSHIP 5TH SEM", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image00df4c4d867d415f9d6912f517c9e227oa0gzgu1rjqurkne4g186.pdf"],
        ["CIVIL INTERNSHIP 7TH SEM", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image19b7f3165ac3496490a3f6a5d9eed2e7v5uxsddjgfb62epw0dvvdd.pdf"],
      ]} />

      <DocTable title="3. Academic - Full time teachers during the year & Number of sanctioned posts in the year" items={[
        ["3.1", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagedf379d1034454d0bb0453e8f61fe3fbfldszklnlkbfspoxlwczmo.xlsx"],
        ["3.2", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image924dc83b8bbf4c859cecdb801e0d135d8vusb5eqdieca6xs8qsoe.xlsx"],
      ]} />

      <DocTable title="3.4.1 NIELET MOU Certificate" items={[
        ["ARTIFICIAL INTELLIGENCE", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image3705ff7da2e64aafbb773bf523ee63fel118e37tzyiuu457jsbz4.pdf"],
        ["DATA SCIENCE USING PYTHON PROGRAMMING", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image21bf889387d4470ab9937cfe5fc0456c8x1jyswen9cooms75x452.pdf"],
        ["INTERNET OF THINGS", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagea293c52c61d24a01a4b77c9ac8c44f86ez4r9doixwb1b59n1kbci.pdf"],
        ["MACHINE LEARNING USING PYTHON", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagea6ada5f1c81f454f8660e8d3b45860e791xnwniw1hr6aoysg5qm.pdf"],
      ]} />

      <DocTable title="5.1.1 Scholarship" items={[
        ["List of Students benefited by Government Scholarship", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagede2251e908f74b7ea8ad77c8bf6df1780ej5c5wl781w4vjdvz9svoa.pdf"],
        ["Letter with Supporting documents", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagebb2c449c768c40f5a3a0965cdfd6c3e1xaf7xfh991h423ipx2low3.pdf"],
        ["5.1.1.1 Percentage of students benefited by scholarship", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image1620582974c5498b9834013a72a050724mp58b63izkknsnd3t9gxm.xlsx"],
      ]} />

      <DocTable title="1.2.3 NPTEL 2023-2024" items={[
        ["NPTEL CERTIFICATES 2023-2024", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image813e6dffaf6c46dd9085df8dd2d2dbe6kqdg8rl6mlhyaqmar897n.pdf"],
      ]} />

      <DocTable title="2.4 - Teacher Profile and Quality" items={[
        ["2.4.1 & 2.4.3 - Number of full time teachers against sanctioned posts during the year & Number of years of teaching experience of full time teachers", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image5e54f5b1b290498192ce192797a41e3fdn9zuuwi2zwid3kk1pedqb.xlsx"],
        ["2.4.2 - Number of full time teachers with Ph.D. during the year", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image67a5f7a8f852404aba1443ea63ecfa67qsmspd3p7g140ijbtnuol.xlsx"],
      ]} />

      <DocTable title="4.3.1" items={[
        ["IT INFRASTRUCTURE", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagef3cfd72c3c8b4ab8922cf6b913fbd6285c5nliodw28e01kkecjkuc.pdf"],
      ]} />

      <DocTable title="4.2.4 Library Visitor" items={[
        ["Visitor register scan", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image9ce26aef737a44c38d9b717e33afe67fgcy94hi6zb67cq0ncyo0xc.pdf"],
        ["4.2.4.1", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image67b1b6b380514731953f5d1ecfaa2b61j0x4x8rdgme5kfahdi8k28.pdf"],
      ]} />

      <DocTable title="4.2.2 & 4.2.3" items={[
        ["Books Bill", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image89e851ef235c490d891f8ef1f6636eb8k4pars0oupi4xgyy812xxd.pdf"],
        ["Journal Bill", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imageb169f5c002e846e1a4fd934d41b52ae0oyjnnihuvncrphlq5b7ifh.pdf"],
        ["Delnet Membership Bill", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagea2fa4d8cd6fb4519a15c1bcad58c392cl75gp4ckzxmvea82tjdox.pdf"],
      ]} />

      <DocTable title="2.6.2 - Attainment of Programme outcomes and course outcomes" items={[
        ["Attainment of Program outcomes and course outcomes", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagebc00d1d994d0469693614ca4e817f011ix040gfl41qx1daivd9m0g.pdf"],
      ]} />

      <DocTable title="4.1.3 ICT-enabled facilities" items={[
        ["ICT-enabled facilities", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image4dc3160f1a954b3e925169558adf1868w0vvuinitgcov7co6gc98r.pdf"],
      ]} />

      <DocTable title="5.1.3" items={[
        ["5.1.3 (Soft Skill)", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagefcef7be645464062b373e53820e25ddfxejstophyeiskppctoz35.pdf"],
      ]} />

      <DocTable title="5.1.4" items={[
        ["5.1.4", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image729ecb9358d14d32b6a1ce6568888d0cq7kn4tn536irclqo2rkcd.pdf"],
      ]} />

      <DocTable title="6.1.1" items={[
        ["6.1.1 - The governance of the institution is reflective of and in tune with the vision and mission of the institution", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imaged983c6ea0c3a48278370936ece075ed9vz3d696kzg8pwf2hj1rz1.pdf"],
        ["6.1.2 - The effective leadership is visible in various institutional practices such as decentralization and participative management", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image4064f94a4ccc41e0aab6a6c7eebce56ca14sp83oi456w01vf9ciwi.pdf"],
        ["Academic & Administrative Audit Policy", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagef2afe189aa2840ba84147c7cf9f2a1901v0pgkiyo0aim28shts2syi.pdf"],
      ]} />

      <DocTable title="2.3 - Teaching-Learning Process" items={[
        ["2.3.1 - Student centric methods", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image79bea1cdd36a45baa6753662739074f28ugjeslx4142m46d88dla8.pdf"],
        ["2.3.2 - Teachers use ICT enabled tools for effective teaching-learning process", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image9e695772b9444bc89d4b7dda6f6d8d3f30asjs5b4xzgf57kznim3e.pdf"],
      ]} />

      <DocTable title="2.6.3 - Pass percentage of Students during the year" items={[
        ["2.6.3 - Pass percentage of Students during the year", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagec6d7eba4d141416a9ab390d5fd888063cmzjifi44dhug9jmtc28sq.pdf"],
      ]} />

      <DocTable title="2.2.1 - The institution assesses the learning levels of the students and organizes special Programmes for advanced learners and slow learners" items={[
        ["2.2.1 - The institution assesses the learning levels of the students", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image0cd9e5535ab740d285a21a4ea83fc61f4ocstcgxohpz4bhhovta9q.pdf"],
      ]} />
    </AcademicsShell>
  );
}