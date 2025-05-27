"use client"

import CourseDetailTemplate from "../components/course-detail-template"
import { courseData } from "../data/condo-investment-workshop"

export default function CondoInvestmentWorkshop() {
  return <CourseDetailTemplate courseData={courseData} />
}
