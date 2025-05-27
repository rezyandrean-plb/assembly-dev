"use client"

import CourseDetailTemplate from "../components/course-detail-template"
import { courseData } from "../data/condo-investment-workshop-building-a-profitable-property-portfolio-with-confidence"

export default function CondoInvestmentWorkshop() {
  return <CourseDetailTemplate courseData={courseData} />
}
