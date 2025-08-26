"use client";

import CourseDetailTemplate from "./course-detail-template";
import { courseData } from "../data/master-new-launch-selection";

export default function MasterNewLaunchSelection() {
  return <CourseDetailTemplate courseData={courseData} />;
}
