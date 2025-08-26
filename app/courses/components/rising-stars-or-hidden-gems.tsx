"use client";

import CourseDetailTemplate from "./course-detail-template";
import { courseData } from "../data/rising-stars-or-hidden-gems";

export default function RisingStarsOrHiddenGems() {
  return <CourseDetailTemplate courseData={courseData} />;
}
