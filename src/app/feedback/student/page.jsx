import FeedbackForm, { departments, semesters, academicYears } from "../../components/FeedbackForm";

export const metadata = {
  title: "Students Feedback",
};

const fields = [
  { label: "Student Name", name: "Student Name", required: true },
  { type: "select", label: "Department", name: "Department", options: departments, required: true },
  { type: "row", items: [
    { type: "select", label: "Semester", name: "Semester", options: semesters, required: true, col: "col-md-6" },
    { type: "select", label: "Academic Year", name: "Academic Year", options: academicYears, required: true, col: "col-md-6" },
  ]},
];

const questions = [
  { text: "The relevance/practicality of the courses (subjects) in the curriculum." },
  { text: "The objectives stated for each of the course." },
  { text: "The outcomes of the electives in terms of their relevance to the specialized streams." },
  { text: "How do you rate the electives offered in relation to the technological advancements." },
  { text: "Content of the course encourages extra learning/self learning." },
  { text: "How do you rate the percentage (number) of courses having practical values." },
  { text: "How do you rate the domain used in the laboratory for designing/performing the experiments." },
];

export default function StudentFeedbackPage() {
  return (
    <FeedbackForm
      title="Students Feedback"
      fields={fields}
      questions={questions}
    />
  );
}
