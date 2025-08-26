"use client";

import CourseDetailTemplate from "./course-detail-template";
import { courseData } from "../data/landed-buyer-investing";

export default function LandedBuyerInvesting() {
  return <CourseDetailTemplate courseData={courseData} />;
}
