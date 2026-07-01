import FeedbackForm, { departments, academicYears } from "../../components/FeedbackForm";

export const metadata = {
  title: "Teacher Feedback",
};

const fields = [
  { label: "Name", name: "Name", required: true },
  { type: "select", label: "Select Program", name: "Program", options: departments, required: true },
  { type: "select", label: "Session", name: "Session", options: academicYears, required: true },
];

const questions = [
  { text: "The learning objectives are precise and appropriate to the program." },
  { text: "The curriculum and syllabus are well organized and suitable to the program." },
  { text: "The text books/reference books are well suited to the course." },
  { text: "How do you rate the competencies/outcomes in relation to the course contents." },
  { text: "Provision to update curriculum time to time." },
  { text: "How do you rate the applicability of the domains and the tools used for designing the experiments in terms of existing practices in the industries." },
  { text: "The curriculum has a good balance between theory and practical." },
  { text: "How do you rate the elective courses in relation to the technological advancements." },
];

export default function TeacherFeedbackPage() {
  return (
    <FeedbackForm
      title="Teacher Feedback"
      fields={fields}
      questions={questions}
    />
  );
}
