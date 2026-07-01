import { AcademicsShell } from "../academics/AcademicsShell";
import styles from "../academics/academicsPages.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NAAC Accreditation Documents",
  description: "NAAC accreditation documents and reports for NSIT Patna. Download IQAC, SSR, and related NAAC documents.",
};

const academicsLinks = [
  ["Courses", "/academics/courses"],
  ["Syllabus", "/academics/syllabus"],
  ["Examination", "/examination"],
  ["Academic Calendar", "/academic_calender"],
  ["Course Outcomes", "/courseoutcomes"],
  ["Activity Reports", "/activity-reports"],
  ["Student's Counsellor", "/academics/students-counsellor"],
  ["NAAC", "/naac"],
  ["DVV", "/dvv"],
  ["AQAR", "/aqar"],
];

const edcDocs: [string, string][] = [
  ["Entrepreneurship Development Cell", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image9c4d9a68c0f548b7a6cda51891f66d40hjw510zmbpj4eww6jx02g4.pdf"],
];

const phdDocs: [string, string][] = [
  ["Copies of Ph.D./D.Sc / D.Litt./ L.L.D awarded by UGC recognized universities", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image307e0b90b1ec4200b1eef3be07138ad2qtzvu6x9h7pteutsc61bhr.pdf"],
];

const statutoryDocs: [string, string][] = [
  ["Statutory Committees", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image505d235fc6d44ebb9d7ad510f5141986riyw7k8chkl3266gug8mq9.pdf"],
];

const selfDeclarationDocs: [string, string][] = [
  ["NAAC: Self Declaration", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image089995f2909746b28fd90efdd69c1df8xrm8u5cz838r3tfchi4un.pdf"],
];

const complianceDocs: [string, string][] = [
  ["NAAC: Statement of Compliance", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image7eb0d2775d164092adb43c173f2aa993xl5xue6mf5mb6wdwfblae.pdf"],
];

const welfareDocs: [string, string][] = [
  ["Maternity leave availed", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagedc86b6059fc34f2da47fb3644606518ahbsao6bnql4h0d0va8yte.pdf"],
  ["Faculty Incentives", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image6d2d065bc69345b7bd06f50accf14331jinyevdqns1dn2cw2ptvf.pdf"],
  ["FPADS Policy statement", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagee5cb6dfef2c84d3a926c905c32d9e6e6p5073zznk5q41ssun2fn43.pdf"],
  ["FPADS flow chart", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image61f6dce4f3284f98b640d8f89c830846q956k5ol29auivokam4fy.pdf"],
  ["FPADS sample form", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagee21d13dff0e242f9b5142b924b443191g3otrfs0zqsz3gdai0uzdr.pdf"],
  ["FPADS - Filled form", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image908ebb07ff5741d6aba1209f6f6b1e5fh2cytevhmlj9xgcdllifd.pdf"],
  ["FPADS report 2018-2022", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image851fccfc75ac432d81fa424cc6a77aec3qk29pk3wz42xcihtvpi2t.pdf"],
  ["Effective welfare measures", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagec9910b74908d4c2381f16b51b7f8f2dea41nsl7ynsu9k21bw7naqd.pdf"],
  ["Performance Appraisal System", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image0a9cd98620e845b58f4ff9888b34877fsn25w45vr26grayixwnzw.pdf"],
];

const mouDocs: [string, string][] = [
  ["Power Integrated Solutions, 2018", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagef2ff52db5d23427bb1efbf5d33761bf3se8d809efd4jahop8js1.pdf"],
  ["NIELIT, 2023", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image090938a9822d49d2b159b322207a6ed7u6q9far2sa2xcnqsoc2a.pdf"],
  ["Ultra Tech Cement Limited, 2023", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image3dbe5b9cac2c4356bc6ecf91e3ef5b2fxx9r3i07a8lfuzzwysmh7p.pdf"],
  ["Power Integrated Solutions, 2023", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image01a1e2f3960d4c669c3b27d21e0b3893k5m42eca9j97kyulhi0f8h.pdf"],
  ["Drobozone Innovative Centre Pvt Ltd, 2023", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imageb27fe8d615674d009c7d79d89c31623e5s3kx09xcikav8yikaenei.pdf"],
  ["Civil Guruji Private Limited, 2023", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image70f7b234dc3540d8bc6b14a0368302323qngzo9f5thk5w9ywzveq.pdf"],
  ["Model Certificate 5 years with links", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imageebcc749dbb754a16bf75cce93603114fi5s6azffyvxhhx2h2i8kb.pdf"],
];

const strategyDocs: [string, string][] = [
  ["Administration", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image1afce06c139e4468ad22da52df3d9b3d0ztlwie8mor76yy65irufs.pdf"],
  ["Finance & Accounts", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image891bf88f76c94b19a4d2e52ed1e67e68u552rasvheru3vmuny6yc.pdf"],
  ["Student Admission & Support", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image0aac4886c9f1489dae45a0a1dc65f1bd49srmfrh2iyv29h7b3t8c.pdf"],
  ["Examination", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image8c21c570682445fe81686577368ef0398culr8asn9r5xevwvm34i9.pdf"],
  ["Invoice", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image3e4fc4a69a6947859559319757216183zir8dp1mhwe00joam7ds5.pdf"],
  ["Academic Audit Policy", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imageb2500e22bd0f411f8fd12af00b45af78o81v316obsengirjuhgnbk.pdf"],
  ["Consultancy Rules and Norms", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image768f27788e2a417282638b20aa1f5188d9yuq4wm66j9bv1a9n2xhq.pdf"],
  ["e-Governance policy", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imaged7818e68a84e49699e3331de0cf2b5497303dpi0bbjlot4pp9f19.pdf"],
  ["Entrepreneurship Development policy", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image176e99943a3742b5acd5bc4f772f727fca0kwnbdna9cs06unaa8g.pdf"],
  ["Feedback Policy", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image2d87862fb1ab4dcd8a8ccd8175adc5ca6njnsp4w7pliuj97uimgmk.pdf"],
  ["HR Policy", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagec745b6885e44471bac08a2a8a08926e9juovb8tg5svr1r7knugbe.pdf"],
  ["Internal Examination policy", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image1bf36da7e71c4fd7b936a2baeb01791f03kdhw8v8ub44cijkylx6x9.pdf"],
  ["Internship Policy", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imageeab0665c38e54c71bcc6ab7e4fdc0f4cfkwu6t7xjw3hz1mcmh6yw.pdf"],
  ["Performance Appraisal Policy", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image51660e97f82941a99d61743ebea436c46n7gq4yag0jlu7uklqomjo.pdf"],
  ["Placement Policy", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image8482776324fd4ad1b606bea2e530d3a3u8rtkfkqbqlo47wokhquta.pdf"],
  ["Organogram", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image609c2e59d5204c83971f1b1d2c2fc5c2pqbqe7z1low4kh6mj9l3.pdf"],
  ["Decentralization with sign", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image3adb2aaaf4cd4275b14b77138ae61a5f63rxcikis6fr7cd58hz43c.pdf"],
  ["6.2.1", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagea53dbde3c2874502a408ab264f586ce2li66tl487ddf4qpn5qmp6v.pdf"],
];

const publicationDocs: [string, string][] = [
  ["Research papers in the Journals notified on UGC CARE", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imageb5ae2e3a5708416ba2294fa9c7b029e6xgle3t8v6ei0kj33pne1avq.pdf"],
  ["Books and chapters in edited volumes/books published and papers published in national/international conference proceedings", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagec3a3a9fbe057481a93939a51ba6c0336uzg6toatcgyh9hqukiksc.pdf"],
];

const fdpDocs: [string, string][] = [
  ["FDP", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image7e1c79ea422a42b7ac4ea891308e5698sd6alp0lpqh4cnazc9nw3x.pdf"],
];

const governanceDocs: [string, string][] = [
  ["Dissemination of vision and mission", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image62a40bd1a84b4d368ebeab9fe5abc542twuzijsx7fq6n0h063mpih.pdf"],
  ["Mapping of vision", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagec96a13c864844ee681e04197c49b019a3th1bnz2xo4m4qf52o2u9i.pdf"],
  ["Decentralization", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image8a70cdc3fdc94b138f9a2571072e87c6b4xjt72cltflw8184rwkk.pdf"],
  ["Mentor-mentee", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image69a1834d169647ff8899f5138c6629dfk0c57i77sr2tf61vcsvsr.pdf"],
];

const addonDocs: [string, string][] = [
  ["Add on/Workshop/Seminar - 2022-23", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image3615e7d057ff4f8a8ffd7c110f811ec9uop9v62rffpv41oohlcggm.pdf"],
  ["Add on/Workshop/Seminar - 2021-22", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image5f49fedeac514fe8a749b06de049f7c1xne0wjlaeucev6sz0kyo9v.pdf"],
  ["Add on/Workshop/Seminar - 2020-21", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image9cc09ac4f8854bfdbbb4752e5f3092a6knibf938y93y1xfa64rhv.pdf"],
  ["Add on/Workshop/Seminar - 2019-20", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image22bfb07121ca474b8b6a25c539114b1884qynujb5ewpxhimkp4iq.pdf"],
  ["Add on/Workshop/Seminar - 2018-19", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image7263a7093b0f441c966537c6038e32c8umm56y2foohqy9dmpi2mj.pdf"],
];

const iqacDocs: [string, string][] = [
  ["IQAC: Minutes of Meeting 1 and 2", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagea16127b6d5fa492a956100e09f0af687d4e7i6ls8os08sz4pwbboe.pdf"],
];

const stepOneDocs: [string, string][] = [
  ["NSIT Step One Club", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image2f69328b491e40f697ab65b55a599254ywfim4c0mnlwmk3ihw4dpe.pdf"],
];

const yogVidyaDocs: [string, string][] = [
  ["NSIT Yog Vidya Club", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image94076ed726b642d9a83dada3d1745bcc16qvi3owwprhkk40iwq1o.pdf"],
];

const internshipEceDocs: [string, string][] = [
  ["Internship II (2018-2022)", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imageb683a87248e241c1bffaa545012c5a67lv5p9vx51nrvnuupf1ejs8.pdf"],
  ["Internship III (2018-2022)", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image36f8c524dcb142b2a6eadaf778731c61pgxfnuwy7fktjcyy7k79.pdf"],
  ["Internship II (2019-2023)", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagecf57661d514d4d76926ba3ae759ee3f2rppxrvsm4ummqkwy4tt2.pdf"],
  ["Internship III (2019-2023)", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image260ad27a616445b893e8fc23c512dbb8ed04chz607w0l0lv1kc53yg.pdf"],
  ["Internship I (2020-2024)", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image7faa69eb9ee542848dda74b2d87c7643r1sd51uinmpjtb7guq1ah.pdf"],
  ["Internship II (2020-2024)", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image9bbcf6ef71b5421c813c1278cb7b8b88siy7ve8wvtlyl1umv90mt.pdf"],
  ["Internship I (2021-2025)", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagef08f15f8b46f4e86896fbbb1b7fb8655zmqpde0v2yt3oyzs7opk8r.pdf"],
];

const internshipCivilDocs: [string, string][] = [
  ["Document 1 (2018-2022)", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imageff0712789ddd44dd8a103a9fb1c96138yn9ps7dtx8rd38rkgjm23f.pdf"],
  ["Document 2 (2019-2023)", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image91b603d8511943489e2ee293c3248e69ktky4uhh82o3yhz9fifwjh.pdf"],
];

const internshipCseDocs: [string, string][] = [
  ["Internship (2018-2022)", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image79dc97b39c364c1dbf0797d096bae022bhosvck7kkljzk7k0tn91k.pdf"],
  ["Project (2018-2022)", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imageb5fcb6945a304850b137f746841b2c1bbt7y2eq5a9rtffjm0ctzi.pdf"],
  ["Internship (2019-2023)", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image3d5b174eeb964d42962cb3676e0c7d680e71nf8hbyyd0b8q73kvfoeb.pdf"],
  ["Project (2019-2023)", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagee77c4d4656f74fe88d2e493ec208898ba7p7c13z82mebg3a3fa38s.pdf"],
  ["Internship (2020-2024)", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagec59d8288407342d5a2c48f924248e36fwg1kbkns36rrdn9wzjvjo.pdf"],
];

const internshipMeDocs: [string, string][] = [
  ["Internship 2018-2022", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imaged7deb52386204a84a2b7199da598f017lnn05yp0mqj5k50n6fvmy.pdf"],
  ["Internship 2019-2023", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image93f706b5271a4cf3b181df0d9c659491gssce5vbi0d29d36k2opnm.pdf"],
  ["Internship 2020-2024", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagea4e9b3621949475498e36eb2345e6dbczks0vdugnjrl4c3i0zcrt8.pdf"],
  ["Internship 2021-2025", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image23a40ee4f3d94c5d9ea0cc8d7c9298cdw500qcbkjmpu0se5tpbyq.pdf"],
];

const internshipEeeDocs: [string, string][] = [
  ["Internship 2018-2022", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imageb3cc5e2664ac4bf9a7b0ec607972c7b441ao1nillvmtzy1aa588ae.pdf"],
  ["Internship 2019-2023", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image438ea5faef6347d9b4895f5f5b41778algbjdwu0hgy9qv5fbulq.pdf"],
  ["Internship 2020-2024", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image6547950c2ec0491d99fcbca0df16bae6hrcgd7iuwfh0d6we7gouf3.pdf"],
  ["Internship 2021-2025", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagebeb68da381e846b082032be75d595efc3i5thq3qy3d9wjjfv3rtco.pdf"],
];

const facilityDocs: [string, string][] = [
  ["Alternative sources and energy conservation measures", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image62cc4eda2bf34e0393bee8c83b6525957pk803pqzmdecr5hf317q.pdf"],
  ["Measurement of various types of degradable and non degradable waste", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imageb6105fa1d69045d7bcff2ae76be741b21xt0wzekkepqthxhaoz3z.pdf"],
  ["Water Conservation", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imageea13b6451241401cb36c05149b41c241vo7jjh0jw5h0jwo66dyj4jo.pdf"],
  ["Green Campus Initiative", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image187726c73acc489da9504b4088ced6edee1abx3vy7ake4sw7qarm.pdf"],
  ["Disabled-friendly, barrier free environment", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagec3287930b9ac4ec89ead4aca90892f07wqfsdqszxjkhvk3wvic0ql.pdf"],
  ["Cover page with links", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imageeffd1763312144d3a0aaa47087ae7f45i73a25peljr0bh4lc6bc2ac.pdf"],
];

const guidanceDocs: [string, string][] = [
  ["Soft Skill", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image5448e0cbc43a463892e206ba1df00c6e1dzg4dzzxzw6jnzc17yzzp.pdf"],
  ["How to Prepare for GATE", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image578b7a6c745f49a090c4a8351e6b48096q8jowtcjicelud4c2gjs6.pdf"],
  ["Placement Today", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image06620f65a9a34df5b21459fc310a69c1jy7lzg0jybho40j1wiyxzh.pdf"],
  ["Placement Induction Program", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image69020bfaa85b425e8ca4e3696122afc8x9qmbss3wjnk2p1qpr6ry.pdf"],
  ["Aptitude Training", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image190c43e19d9e4ad2ae3e3fac772f252c81y9auyb8g2dmwoqq9phyp.pdf"],
  ["Enhancing Logical Reasoning", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image6164c97fec17468a8fc7967069f77af0srdyde88kia12fxiyt22nh.pdf"],
];

const edcProductDocs: [string, string][] = [
  ["List of products developed by EDC Cell", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image36206eea2d0b42998f0917db76ea2c46k27smq8m7mkdg6aa4y7t98.pdf"],
];

const edcActivityDocs: [string, string][] = [
  ["Activities under Entrepreneurship Development cell (EDC)", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagec6d2f9db30854828a8745a91748d48a7mgibhcilkzw4hq3tlb9gp.pdf"],
];

const sportsDocs: [string, string][] = [
  ["2018-2019", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imageabdc08f5e5144911b63191a6a0dfd19b3ogbevkemr1san22iz0gvs.pdf"],
  ["2019-2020", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagef6be48b1dcda44b5a51b9518a5ade7dfspaf7nv391jbicjbwxzh1u.pdf"],
  ["2021-2022", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imageb8f7cddec3774b968895197f04c559bcpf09ivxk7gg012cjaykcu0ed.pdf"],
  ["2022-2023", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image344f01f8942c406482e8d330920fd78fzbsj9zxlzz7l9ac4juwyf9.pdf"],
];

const infraDocs: [string, string][] = [
  ["Infrastructure and Learning Resources", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagee91c54e3e6cf41da9be83c9eff670677glyudg2p6e9ynfftvdpo4.pdf"],
];

const culturalDocs: [string, string][] = [
  ["18-19", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imagefba3ad58bd4b4807b19d53ba5490b5705uttpfv2h1uvo48e3b5r2o.pdf"],
  ["19-20", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imaged247600db49b4a6b9ed457f3b2b4487898d2xk3rrig6h7a6ty0qx2.pdf"],
  ["21-22", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imageea2e03da289c48899019f995fc07193clrnhofww34nw7mliw06w6.pdf"],
  ["22-23", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image582e2b95a9f14427b6e7042be9f12a7dfes2cnerryb02knv9xygh8n.pdf"],
];

const trainingDocs: [string, string][] = [
  ["Training & Placement 1", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image562685d008db4aef9e00887747c13840jay6y6hjvldlrqb79ktxd.pdf"],
  ["Training & Placement 2", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Imageab3167bf79b54709aacab63e354f5975m9oyyw1knao2gwndh1ru3q.pdf"],
  ["Training & Placement 3", "https://cdn.academist.app/Cloud/cdnclg/8/Website/Gallery/Image0a96632ccb8546f58b60109f6e6fe7ac79fqaoysbfe2pob0h0y7k5.pdf"],
];

const thStyle: React.CSSProperties = {
  padding: "12px 16px", textAlign: "left", color: "#fff", fontSize: 13,
  fontWeight: 950, background: "#172033", textTransform: "uppercase", letterSpacing: "0.04em"
};
const tdStyle: React.CSSProperties = {
  padding: "12px 16px", borderBottom: "1px solid var(--border-color)",
  color: "var(--para-color)", fontSize: 14, fontWeight: 600
};
const tdLabel: React.CSSProperties = { ...tdStyle, color: "#14213d", fontWeight: 600 };

function DocTable({ title, items }: { title: string; items: [string, string][] }) {
  if (items.length === 0) return null;
  return (
    <div className={styles.tablePanel} style={{ marginTop: 24 }}>
      <h3 style={{ color: "#14213d", fontSize: 18, fontWeight: 600, marginBottom: 14 }}>{title}</h3>
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

export default function NaacPage() {
  return (
    <AcademicsShell activePath="/naac" title="NAAC">
      <div className={styles.introPanel}>
        <span className="d-inline-flex text-uppercase" style={{color: 'var(--main-color)', fontSize: 12, fontWeight: 950, letterSpacing: '0.08em'}}>Accreditation</span>
        <h2>NAAC Accreditation</h2>
        <p>Netaji Subhas Institute of Technology is accredited by the National Assessment and Accreditation Council (NAAC), an autonomous body established by the University Grants Commission (UGC) of India to assess and accredit higher education institutions. The NAAC peer team visited the campus and evaluated the institution across seven criteria.</p>
      </div>

      <DocTable title="EDC - Entrepreneurship Development Cell" items={edcDocs} />
      <DocTable title="Copies of Ph.D./D.Sc / D.Litt./ L.L.D awarded by UGC recognized universities" items={phdDocs} />
      <DocTable title="Statutory Committees" items={statutoryDocs} />
      <DocTable title="NAAC: Self Declaration" items={selfDeclarationDocs} />
      <DocTable title="NAAC: Statement of Compliance" items={complianceDocs} />
      <DocTable title="Effective Welfare Measures and Performance Appraisal System" items={welfareDocs} />
      <DocTable title="MOUs" items={mouDocs} />
      <DocTable title="Strategy Development and Deployment" items={strategyDocs} />
      <DocTable title="Publication" items={publicationDocs} />
      <DocTable title="FDP Participation" items={fdpDocs} />
      <DocTable title="The Institutional Governance and Leadership" items={governanceDocs} />
      <DocTable title="Add on / Workshop / Seminar" items={addonDocs} />
      <DocTable title="IQAC: Constitution and Minutes of Meeting 1 and 2" items={iqacDocs} />
      <DocTable title="NSIT STEP ONE CLUB" items={stepOneDocs} />
      <DocTable title="NSIT YOG VIDYA CLUB" items={yogVidyaDocs} />
      <DocTable title="Internship / Project - ECE" items={internshipEceDocs} />
      <DocTable title="Internship / Project - Civil" items={internshipCivilDocs} />
      <DocTable title="Internship / Project - CSE" items={internshipCseDocs} />
      <DocTable title="Internship / Project - ME" items={internshipMeDocs} />
      <DocTable title="Internship / Project - EEE" items={internshipEeeDocs} />
      <DocTable title="Institutional Facilities and Initiatives" items={facilityDocs} />
      <DocTable title="Guidance for Competitive Examination and Career" items={guidanceDocs} />
      <DocTable title="List of Products Developed by EDC Cell" items={edcProductDocs} />
      <DocTable title="Activities under Entrepreneurship Development Cell (EDC)" items={edcActivityDocs} />
      <DocTable title="Sports and Cultural Events" items={sportsDocs} />
      <DocTable title="Infrastructure and Learning Resources" items={infraDocs} />
      <DocTable title="Cultural Fest and Participation" items={culturalDocs} />
      <DocTable title="Training & Placements" items={trainingDocs} />
    </AcademicsShell>
  );
}
