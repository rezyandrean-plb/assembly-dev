import type { CourseData } from "../components/course-detail-template"
import { getInstructors } from "@/app/data/instructors"

export const courseData: CourseData = {
  id: 1001,
  title: "Live Debate - Choosing Your Path in Singapore Property: BTO vs Resale HDB",
  slug: "live-debate-choosing-your-path-in-singapore-property-bto-vs-resale-hdb",
  level: "All Levels",
  duration: "2 hours",
  category: "Property Comparison",
  price: "Free",
  image: "/images/courses/bto-vs-resale-hdb-debate.jpg",
  featured: false,
  tags: ["Property Comparison", "HDB", "Live Debate"],
  rating: 0,
  students: 0,
  instructors: getInstructors ? getInstructors(["melvin-lim"]) : [],
  lastUpdated: "2024-06-01",
  description: "A live debate exploring the pros and cons of BTO versus Resale HDB flats for Singaporean homebuyers.",
  whatYouWillLearn: [
    "Understand the differences between BTO and resale HDB",
    "Learn from expert perspectives",
    "Make informed homebuying decisions",
    "Develop a clear decision-making framework"
  ],
  curriculum: [
    {
      title: "BTO Analysis",
      lessons: ["Advantages and disadvantages of buying a BTO flat."]
    },
    {
      title: "Resale HDB Analysis",
      lessons: ["Pros and cons of purchasing a resale HDB flat."]
    },
    {
      title: "Comparative Analysis",
      lessons: ["Direct comparison of BTO and resale HDB in terms of cost, location, and flexibility."]
    },
    {
      title: "Decision Framework",
      lessons: ["How to decide which option is best for your needs."]
    }
  ],
  highlights: [],
  requirements: [],
  targetAudience: [],
  reviews: []
}