"use client";

import { motion } from "framer-motion";
import { FaMoneyBillWave, FaBook, FaFileInvoiceDollar, FaBus, FaHotel, FaTshirt, FaCheckCircle } from "react-icons/fa";

const feeData = [
  {
    icon: FaMoneyBillWave,
    title: "Admission Fee (Non-Refundable, One-time)",
    rows: [
      { label: "Diploma", value: "₹ 5000 + ₹ 500 (BPTPIA Exam Form) = ₹ 5500" },
      { label: "B.Tech", value: "₹ 15000 + ₹ 500 (BPTPIA Exam Form) = ₹ 15500" },
      { label: "BBA / BCA", value: "₹ 5000" },
    ],
  },
  {
    icon: FaFileInvoiceDollar,
    title: "Semester Fee",
    rows: [
      { label: "Diploma", value: "₹ 30000/semester (6 semesters) = ₹ 180000" },
      { label: "B.Tech (CSE)", value: "₹ 50000/semester (8 semesters) = ₹ 400000" },
      { label: "B.Tech (Other Branches)", value: "₹ 45000/semester (8 semesters) = ₹ 360000" },
      { label: "BBA / BCA", value: "₹ 22000/semester (6 semesters) = ₹ 132000" },
    ],
  },
  {
    icon: FaBook,
    title: "Book Bank and Stationery",
    rows: [
      { label: "", value: "₹ 1000 (approx) for book bank (all subject books to be issued and returned after semester)" },
      { label: "", value: "₹ 300 (approx) for practical notebooks (per semester) for all courses" },
    ],
  },
  {
    icon: FaFileInvoiceDollar,
    title: "Examination Fee",
    rows: [
      { label: "Registration Fee", value: "B.Tech — As per Bihar Engineering University | BBA/BCA — As per AKU | Diploma — As per SBTE" },
      { label: "Internal Exam Fee", value: "₹ 1000 per semester" },
      { label: "External Exam Form Fee", value: "B.Tech — As per Bihar Engineering University | BBA/BCA — As per AKU | Diploma — As per SBTE" },
    ],
  },
  {
    icon: FaBus,
    title: "Transportation Fee (if required, per year)",
    routes: [
      ["Patna", "₹ 18,000"],
      ["Danapur", "₹ 15,000"],
      ["Arwal", "₹ 18,000"],
      ["Bikram", "₹ 10,000"],
      ["Paliganj", "₹ 15,000"],
      ["Ara", "₹ 15,000"],
      ["Dulhin Bazaar", "₹ 12,000"],
    ],
  },
  {
    icon: FaHotel,
    title: "Hostel Facility with Mess Fee (if required, per year)",
    rows: [
      { label: "", value: "₹ 84,000 (₹ 42,000 x 2 to be paid semester wise) — Hostel to be allotted on yearly basis only" },
    ],
  },
  {
    icon: FaTshirt,
    title: "Uniform Fee",
    rows: [
      { label: "", value: "₹ 8,000 (2 Shirts, 2 Trousers, 1 Coat, 1 Tie, 1 Hoodie & 1 T-Shirt)" },
    ],
  },
];

const requiredDocs = [
  "10 Colour Passport size student's photo",
  "2 Colour Passport size parent's photo",
  "10th Mark sheet + Pass certificate – Original + 5 copies of each",
  "12th Mark sheet + Pass certificate – Original + 5 copies of each",
  "ITI/Diploma Mark sheet – Original + 5 copies",
  "SLC/CLC/TC – original to be submitted during time of admission | – Original + 5 copies",
  "Migration Certificate - original to be submitted during time of admission | – Original + 5 copies",
  "Aadhar card (Student & Father) copy – 5 copies",
  "Residential certificate – 5 copies",
  "Caste certificate (for OBC/EBC/SC/ST) – 5 copies",
  "Character Certificate",
  "EWS certificate and DQ certificate – if applicable",
  "Anti-Ragging Affidavit (Student & Parent)",
];

export default function FeeContent() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          background: "linear-gradient(135deg, #14213d 0%, #1f305a 100%)",
          borderRadius: 12, padding: "28px 30px", color: "#fff",
          boxShadow: "0 8px 28px rgba(20,33,61,0.2)",
        }}
      >
        <h2 style={{ fontSize: "clamp(22px,3vw,32px)", fontWeight: 900, margin: 0, color: "#fff" }}>Fee Structure 2025-26</h2>
        <p style={{ marginTop: 8, color: "rgba(255,255,255,0.75)", fontSize: 14, fontWeight: 600 }}>Affordable quality education with modern facilities</p>
      </motion.div>

      {feeData.map((item, idx) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
          style={{ overflowX: "auto", borderRadius: 10, border: "1px solid var(--border-color)", boxShadow: "0 4px 16px rgba(23,32,51,0.06)" }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 500 }}>
            <thead>
              <tr>
                <th colSpan={2} style={{
                  background: "var(--main-color)", color: "#fff", fontWeight: 950,
                  padding: "14px 20px", textAlign: "left", fontSize: 14,
                  textTransform: "uppercase", letterSpacing: "0.06em", borderBottom: "none",
                }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                    <item.icon style={{ fontSize: 16 }} />
                    {item.title}
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {item.rows?.map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f8f9fb" }}>
                  {row.label && (
                    <td style={{ padding: "12px 20px", color: "#14213d", fontWeight: 850, whiteSpace: "nowrap", borderBottom: "1px solid var(--border-color)", fontSize: 14 }}>{row.label}</td>
                  )}
                  <td colSpan={row.label ? 1 : 2} style={{ padding: "12px 20px", color: "var(--para-color)", fontWeight: 600, fontSize: 14, borderBottom: "1px solid var(--border-color)" }}>{row.value}</td>
                </tr>
              ))}
              {item.routes && (
                <tr style={{ background: "#fff" }}>
                  <td style={{ padding: "12px 20px", fontSize: 14, borderBottom: "none" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 6 }}>
                      {item.routes.map(([from, fee]) => (
                        <div key={from} style={{ display: "flex", justifyContent: "space-between", padding: "6px 8px", borderBottom: "1px solid #f0f0f0", borderRadius: 4, background: "#fafafa" }}>
                          <span style={{ color: "#14213d", fontWeight: 700, fontSize: 14 }}>{from}</span>
                          <span style={{ color: "var(--main-color)", fontWeight: 900, fontSize: 14 }}>{fee}</span>
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: feeData.length * 0.08, ease: "easeOut" }}
        style={{ borderRadius: 10, border: "1px solid var(--border-color)", boxShadow: "0 4px 16px rgba(23,32,51,0.06)" }}
      >
        <div style={{
          background: "var(--main-color)", color: "#fff", fontWeight: 950,
          padding: "14px 20px", fontSize: 14, textTransform: "uppercase",
          letterSpacing: "0.06em", display: "flex", alignItems: "center", gap: 8,
        }}>
          <FaCheckCircle style={{ fontSize: 16 }} />
          Documents Required
        </div>
        <div style={{ padding: "16px 20px" }}>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
            {requiredDocs.map((doc, i) => (
              <motion.li
                key={doc}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.04, ease: "easeOut" }}
                style={{ display: "flex", gap: 10, fontSize: 14, fontWeight: 600, color: "var(--para-color)", lineHeight: 1.65 }}
              >
                <span style={{ color: "var(--main-color)", marginTop: 3, minWidth: 16 }}>▸</span>
                {doc}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
