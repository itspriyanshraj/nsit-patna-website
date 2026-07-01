import FeedbackForm, { departments, academicYears, ratings } from "../../components/FeedbackForm";

export const metadata = {
  title: "Alumni Feedback",
};

const employmentStatus = [
  { label: "Government Employed", color: "#22c55e", bg: "#f0fdf4", icon: "🏛️" },
  { label: "Private Sector", color: "#14b8a6", bg: "#f0fdfa", icon: "💼" },
  { label: "Self-employed", color: "#3b82f6", bg: "#eff6ff", icon: "🚀" },
  { label: "Unemployed", color: "#f59e0b", bg: "#fffbeb", icon: "📋" },
  { label: "Pursuing higher Education", color: "#8b5cf6", bg: "#f5f3ff", icon: "🎓" },
  { label: "Undergoing Training", color: "#ec4899", bg: "#fdf2f8", icon: "📚" },
];

const fields = [
  { label: "Student Name", name: "Student Name", required: true },
  { label: "Register Number", name: "Register Number", required: true },
  { type: "select", label: "Department", name: "Department", options: departments, required: true },
  { label: "Year of Graduation", name: "Year of Graduation", required: true },
  { label: "Current Address", name: "Current Address", required: true },
  { type: "row", items: [
    { label: "Contact Number", name: "Contact Number", required: true, col: "col-md-6" },
    { label: "Email Id", name: "Email Id", type: "email", required: true, col: "col-md-6" },
  ]},
  { label: "Name and address of the company where you employed", name: "Company Details", required: true },
  { label: "Name and contact address of the employer (Your intimated Head)", name: "Employer Details", required: true },
];

const questions = [
  { text: "Curriculum meets prerequisite and basic knowledge required for the career.", options: employmentStatus },
  { text: "Usefulness of learning experience in career." },
  { text: "Electives offered in relation to the technological advancements." },
  { text: "The new course (subjects) introduced meet contemporary (existing) requirements." },
  { text: "Design of the courses (subjects) encourages/motivates extra learning or self learning." },
  { text: "How do you rate the competencies/outcomes in relation to the course contents." },
];

export default function AlumniFeedbackPage() {
  return (
    <FeedbackForm
      title="Alumni Feedback"
      fields={fields}
      questions={questions}
    />
  );
}
