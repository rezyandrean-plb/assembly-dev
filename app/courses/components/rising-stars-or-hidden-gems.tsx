"use client";

import CourseDetailTemplate from "../components/course-detail-template";
import { courseData } from "../data/rising-stars-or-hidden-gems";

export default function RisingStarsOrHiddenGems() {
  return <CourseDetailTemplate courseData={courseData} data-oid="g.:tnzj" />;
}
