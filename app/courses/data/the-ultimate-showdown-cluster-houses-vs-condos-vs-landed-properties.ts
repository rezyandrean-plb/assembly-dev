import type { CourseData } from "../components/course-detail-template"
import { getFacilitator } from "@/app/data/facilitators"

const melvin = getFacilitator("melvin-lim");
const yurong = getFacilitator("ong-yu-rong");

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
  instructors: melvin && yurong
    ? [
        {
          name: melvin.name,
          image: melvin.image,
          title: melvin.role,
          bio: melvin.bio,
        },
        {
          name: yurong.name,
          image: yurong.image,
          title: yurong.role,
          bio: yurong.bio,
        },
      ]
    : [],
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
