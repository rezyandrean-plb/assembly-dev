"use client";

import CourseDetailTemplate from "./course-detail-template";
import { courseData } from "../data/the-art-of-real-estate-investment";

export default function TheArtOfRealEstateInvestment() {
  return <CourseDetailTemplate courseData={courseData} />;
}
