import type { CourseData } from "../components/course-detail-template"
import { getFacilitator } from "@/app/data/facilitators"

const melvin = getFacilitator("melvin-lim");
const grayce = getFacilitator("grayce-tan");

const courseData: CourseData = {
  id: 1004,
  title: "Singapore's Master Plan Transformation",
  slug: "singapores-master-plan-transformation",
  level: "All Levels",
  duration: "57 minutes",
  category: "Marketing Trends",
  price: "Free",
  image: "/images/courses/master-plan-transformation.jpg",
  featured: false,
  tags: ["Marketing Trends", "Webinar"],
  rating: 0,
  students: 24,
  instructors: melvin && grayce
    ? [
        {
          name: melvin.name,
          image: melvin.image,
          title: melvin.role,
          bio: melvin.bio,
        },
        {
          name: grayce.name,
          image: grayce.image,
          title: grayce.role,
          bio: grayce.bio,
        },
      ]
    : [],
  lastUpdated: "10 September 2024",
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