import type { CourseData } from "../components/course-detail-template"
import { getInstructors } from "@/app/data/instructors"

export const courseData: CourseData = {
  id: 1007,
  title: "The Ultimate Showdown: Cluster Houses vs. Condos vs. Landed Properties",
  slug: "the-ultimate-showdown-cluster-houses-vs-condos-vs-landed-properties",
  level: "All Levels",
  duration: "2 hours",
  category: "Property Comparison",
  price: "Free",
  image: "/images/courses/ultimate-showdown.jpg",
  featured: false,
  tags: ["Cluster Houses", "Condos", "Landed Properties", "Comparison"],
  rating: 0,
  students: 0,
  instructors: [
    ...getInstructors(["melvin-lim"]),
    {
      name: "Ong Yu Rong",
      image: "/professional-headshot-ong-yu-rong.png",
      bio: "Ong Yu Rong brings data-driven insights to property analysis, with expertise in market trends and valuation.",
    },
  ],
  lastUpdated: "2024-06-01",
  description: "A comprehensive comparison of cluster houses, condominiums, and landed properties for Singaporean property buyers and investors.",
  whatYouWillLearn: [
    "Understand the differences between cluster houses, condos, and landed properties",
    "Make informed property purchase decisions",
    "Learn from expert analysis",
    "Develop a clear property investment strategy"
  ],
  curriculum: [
    {
      title: "Cluster Houses Overview",
      lessons: ["Features, pros, and cons of cluster houses."]
    },
    {
      title: "Condo Overview",
      lessons: ["Features, pros, and cons of condominiums."]
    },
    {
      title: "Landed Properties Overview",
      lessons: ["Features, pros, and cons of landed properties."]
    },
    {
      title: "Comparative Analysis",
      lessons: ["Direct comparison of all three property types."]
    }
  ],
  highlights: [],
  requirements: [],
  targetAudience: [],
  reviews: []
}
