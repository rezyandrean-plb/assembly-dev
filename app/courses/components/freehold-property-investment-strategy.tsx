"use client";

import CourseDetailTemplate from "./course-detail-template";
import { courseData } from "../data/freehold-property-investment-strategy";

export default function FreeholdPropertyInvestmentStrategy() {
  return <CourseDetailTemplate courseData={courseData} />;
}
