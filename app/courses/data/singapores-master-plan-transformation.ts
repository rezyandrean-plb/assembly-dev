import { CourseData } from "../types"
import { getInstructors } from "@/app/data/instructors"

const courseData: CourseData = {
  id: 1004,
  title: "Singapore's Master Plan Transformation",
  slug: "singapores-master-plan-transformation",
  level: "All Levels",
  duration: "2 hours",
  category: "Urban Planning",
  price: "Free",
  image: "/images/courses/master-plan-transformation.jpg",
  featured: false,
  tags: ["Urban Planning", "Development", "Property Investment"],
  rating: 0,
  students: 0,
  instructors: getInstructors ? getInstructors(["melvin-lim"]) : [],
  lastUpdated: "2024-06-01",
  description: "Understanding Singapore's urban development plans and their impact on property values and investment opportunities.",
  whatYouWillLearn: [
    "Understand Singapore's urban development strategy",
    "Identify emerging property hotspots",
    "Make informed investment decisions",
    "Plan for long-term property value appreciation"
  ],
  curriculum: [
    {
      title: "Master Plan Overview",
      lessons: ["Understanding Singapore's long-term urban development strategy."]
    },
    {
      title: "Key Transformations",
      lessons: ["Major development projects and their impact on different regions."]
    },
    {
      title: "Investment Opportunities",
      lessons: ["Identifying property investment opportunities based on development plans."]
    },
    {
      title: "Future Outlook",
      lessons: ["Predicting future property trends based on planned developments."]
    }
  ],
  highlights: [],
  requirements: [],
  targetAudience: [],
  reviews: []
}

export default courseData 