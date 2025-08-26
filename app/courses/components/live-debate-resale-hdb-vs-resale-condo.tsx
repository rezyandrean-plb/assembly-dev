"use client";

import CourseDetailTemplate from "./course-detail-template";
import { courseData } from "../data/live-debate-resale-hdb-vs-resale-condo";

export default function LiveDebateResaleHDBVsResaleCondo() {
  return <CourseDetailTemplate courseData={courseData} />;
}
