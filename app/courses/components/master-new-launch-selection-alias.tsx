import CourseDetailTemplate from "./course-detail-template"
import { courseData } from "../data/master-new-launch-selection-alias"

export default function MasterNewLaunchSelectionAlias() {
  return <CourseDetailTemplate courseData={courseData} />
}
