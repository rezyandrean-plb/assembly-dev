"use client";

import CourseDetailTemplate from "../components/course-detail-template";
import { courseData } from "../data/the-art-of-real-estate-investment";

export default function TheArtOfRealEstateInvestment() {
  return <CourseDetailTemplate courseData={courseData} data-oid="d5pm5.x" />;
}
