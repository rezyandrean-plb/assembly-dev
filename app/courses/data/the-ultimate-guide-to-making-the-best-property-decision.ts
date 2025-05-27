import type { CourseData } from "../components/course-detail-template"
import { getInstructors } from "@/app/data/instructors"

const courseData: CourseData = {
  id: 1003,
  title: "The Ultimate Guide to Making the Best Property Decision",
  slug: "the-ultimate-guide-to-making-the-best-property-decision",
  level: "All Levels",
  duration: "2 hours",
  category: "Property Decision Making",
  price: "Free",
  image: "/images/courses/property-decision-guide.jpg",
  featured: false,
  tags: ["Decision Making", "Property Investment", "Market Analysis"],
  rating: 0,
  students: 0,
  instructors: getInstructors ? getInstructors(["melvin-lim"]) : [],
  lastUpdated: "2024-06-01",
  description: "A comprehensive guide to making informed and strategic property decisions in Singapore's real estate market.",
  whatYouWillLearn: [
    "Make informed property decisions",
    "Understand market dynamics",
    "Develop a strategic approach to property selection",
    "Create a sustainable property investment plan"
  ],
  curriculum: [
    {
      title: "Understanding Your Goals",
      lessons: ["Identifying and aligning your property goals with your financial objectives."]
    },
    {
      title: "Market Analysis",
      lessons: ["Analyzing current market conditions and future trends."]
    },
    {
      title: "Property Selection",
      lessons: ["Criteria for selecting the right property type and location."]
    },
    {
      title: "Financial Planning",
      lessons: ["Budgeting and financing strategies for your property purchase."]
    }
  ],
  highlights: [],
  requirements: [],
  targetAudience: [],
  reviews: []
}

export default courseData 