import FeedbackForm, { departments, semesters, academicYears } from "../../components/FeedbackForm";

export const metadata = {
  title: "Parents Feedback",
};

const fields = [
  { label: "Name Of The Parent", name: "Parent Name", required: true },
  { label: "Student Name", name: "Student Name", required: true },
  { label: "Relationship of Parents with Student", name: "Relationship", required: true },
  { type: "select", label: "Department", name: "Department", options: departments, required: true },
  { type: "select", label: "Semester", name: "Semester", options: semesters, required: true },
  { type: "select", label: "Academic Year", name: "Academic Year", options: academicYears, required: true },
];

const questions = [
  { text: "The curriculum has been designed to make students industry ready by imparting analytical and reasoning, language and soft skills and addition to technical competencies as desired by the industry." },
  { text: "Holistic development of students is ensured by participation of students in various sports, cultural and co-curricular activities organized throughout the year." },
  { text: "Students are sensitized towards cross cutting issues like gender, equality, environment and sustainability, ethics and values etc., through relevant courses in the curriculum as well as through community service/projects." },
  { text: "The academic flexibility embedded in the curriculum provides opportunities to students to pursue their interest by choosing from a vast number of pathways/electives from own area/specialization as well as from other areas." },
  { text: "Courses in the curriculum promote Entrepreneurship and students are encouraged and supported to initiate startups by Startup school mentorship." },
  { text: "The curriculum is outcome based and the expected outcomes, through various courses are attained." },
];

export default function ParentsFeedbackPage() {
  return (
    <FeedbackForm
      title="Parents Feedback Form"
      fields={fields}
      questions={questions}
    />
  );
}
