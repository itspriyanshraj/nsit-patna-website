import type { Metadata } from "next";
import CourseOutcomesContent from "../academics/course-outcomes/CourseOutcomesContent";

export const metadata: Metadata = {
  title: "Course Outcomes",
  description: "Download course outcomes (CO) for B.Tech programs at NSIT Patna including CSE, Civil, EEE, ECE, and ME branches.",
};

export default function CourseOutcomesPage() {
  return <CourseOutcomesContent />;
}
