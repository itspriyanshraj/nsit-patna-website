import FeedbackForm, { departments, semesters, academicYears, ratings } from "../../components/FeedbackForm";

export const metadata = {
  title: "Students Satisfaction Survey",
};

const syllabusCoverage = [
  { label: "85% to 100%", color: "#22c55e", bg: "#f0fdf4", icon: "🔥" },
  { label: "70% to 84%", color: "#14b8a6", bg: "#f0fdfa", icon: "✅" },
  { label: "55% to 69%", color: "#3b82f6", bg: "#eff6ff", icon: "📊" },
  { label: "30% to 54%", color: "#f59e0b", bg: "#fffbeb", icon: "📉" },
  { label: "below 30%", color: "#ef4444", bg: "#fef2f2", icon: "⚠️" },
];

const fields = [
  { label: "Name of the Student", name: "Student Name", required: true },
  { type: "row", items: [
    { label: "Contact Number", name: "Contact Number", required: true, col: "col-md-6" },
    { label: "Email Id", name: "Email Id", type: "email", required: true, col: "col-md-6" },
  ]},
  { label: "Register Number", name: "Register Number", required: true },
  { type: "select", label: "Department", name: "Department", options: departments, required: true },
  { type: "select", label: "Semester", name: "Semester", options: semesters, required: true },
  { type: "select", label: "Academic Year", name: "Academic Year", options: academicYears, required: true },
  { label: "Course Name", name: "Course Name", required: true },
  { label: "Course Faculty Name", name: "Faculty Name", required: true },
];

const questions = [
  { text: "Organizes and prepares for every class." },
  { text: "How much of the syllabus was covered in the class?", options: syllabusCoverage },
  { text: "Knowledge level of the faculty." },
  { text: "Effectively encourages discussions on subject manner." },
  { text: "Provides the course outline and study materials before examinations." },
  { text: "Effective communication/deliverance of the subject content." },
  { text: "Faculties inform you about your expected competencies, course outcomes and programme outcomes." },
  { text: "Your mentor does a necessary follow-up with an assigned task to you." },
  { text: "Delivers content beyond the syllabus." },
  { text: "The Faculties use student centric methods, such as experiential learning, participative learning and problem solving methodologies for enhancing learning experiences." },
  { text: "Use of Teaching aids (Blackboard/PPT's) and Innovative Methods." },
  { text: "Provides assistance and counselling on the subjects." },
  { text: "The institution makes effort to engage students in the monitoring, review and continuous quality improvement of the teaching learning process." },
  { text: "Helpful at times of difficulties or challenges (Physical, Emotional, Learning)." },
  { text: "Helpful to achieve the Carrier Goals (Placement, Higher Education etc)." },
  { text: "Helpful for independent thinking and explore new ideas." },
  { text: "Information about the assessment test was communicated clearly." },
  { text: "Make Criteria, Exam Pattern are explained prior to the exam." },
  { text: "Fairness in Assessment of CAT, Internal Exam." },
  { text: "Discuss the Questions and Answers after the Assessments." },
  { text: "Provides feedback/guidance on my progress/performance in a timely manner." },
  { text: "Satisfaction level with your effort in this course." },
  { text: "Depth of Knowledge in this course." },
  { text: "Worked on Projects/Assignments related to this course." },
  { text: "The overall quality of teaching-learning process is." },
];

export default function SatisfactionSurveyPage() {
  return (
    <FeedbackForm
      title="Students Satisfaction Survey"
      fields={fields}
      questions={questions}
    />
  );
}
