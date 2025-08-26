"use client";

import CourseDetailTemplate from "./course-detail-template";
import { courseData } from "../data/landed-property-investment-strategies";

export default function LandedPropertyInvestmentStrategies() {
  return <CourseDetailTemplate courseData={courseData} />;
}
