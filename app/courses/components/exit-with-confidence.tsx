"use client";

import CourseDetailTemplate from "./course-detail-template";
import { courseData } from "../data/exit-with-confidence";

export default function ExitWithConfidence() {
  return <CourseDetailTemplate courseData={courseData} />;
}
