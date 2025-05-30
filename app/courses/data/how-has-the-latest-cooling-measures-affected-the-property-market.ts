import { CourseData } from "../types"
import { getInstructors } from "@/app/data/instructors"

const courseData: CourseData = {
  id: 1005,
  title: "How has the latest Cooling Measures affected the Property Market?",
  slug: "how-has-the-latest-cooling-measures-affected-the-property-market",
  level: "All Levels",
  duration: "2 hours",
  category: "Market Analysis",
  price: "Free",
  image: "/images/courses/cooling-measures.jpg",
  featured: false,
  tags: ["Market Analysis", "Policy Impact", "Property Investment"],
  rating: 0,
  students: 0,
  instructors: getInstructors ? getInstructors(["melvin-lim"]) : [],
  lastUpdated: "2024-06-01",
  description: "An in-depth analysis of the latest property cooling measures and their impact on Singapore's real estate market.",
  whatYouWillLearn: [
    "Understand the latest cooling measures",
    "Analyze their impact on property values",
    "Develop effective investment strategies",
    "Make informed property decisions"
  ],
  curriculum: [
    {
      title: "Latest Cooling Measures",
      lessons: ["Overview of the most recent property cooling measures implemented."]
    },
    {
      title: "Market Impact Analysis",
      lessons: ["How these measures have affected different property segments."]
    },
    {
      title: "Investment Strategies",
      lessons: ["Adapting investment strategies to the new market conditions."]
    },
    {
      title: "Future Outlook",
      lessons: ["Predicting market trends under the new cooling measures."]
    }
  ],
  highlights: [],
  requirements: [],
  targetAudience: [],
  reviews: []
}

export default courseData 