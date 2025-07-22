"use client";

import CourseDetailTemplate from "./course-detail-template";
import { courseData } from "../data/property-strategies-in-2025-amid-rate-cuts";

export default function PropertyStrategiesIn2025AmidRateCuts() {
  const updatedCourseData = {
    ...courseData,
    description: (
      <>
        <p className="font-bold mb-4">
          2025 Is Coming—Is Your Property Strategy Ready?
        </p>
        <p>
          The property market is shifting—interest rates are falling, trends are
          evolving, and opportunities are opening up. But here's the challenge:
          without a clear plan, navigating these changes can feel overwhelming.
          Should you act now or wait for better deals? What's the most brilliant
          move in an unpredictable market?
        </p>
      </>
    ),
  };
  return <CourseDetailTemplate courseData={updatedCourseData} />;
}
