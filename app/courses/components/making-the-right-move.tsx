"use client";

import CourseDetailTemplate from "../components/course-detail-template";
import { courseData } from "../data/making-the-right-move";

export default function MakingTheRightMove() {
  return <CourseDetailTemplate courseData={courseData} />;
}
