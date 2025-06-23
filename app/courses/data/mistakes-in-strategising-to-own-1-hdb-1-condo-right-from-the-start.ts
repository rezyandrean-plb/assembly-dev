import type { CourseData } from "../components/course-detail-template"
import { getFacilitator } from "@/app/data/facilitators"

const melvin = getFacilitator("melvin-lim");

export const courseData = {
  id: 4001,
  title: "Mistakes in Strategising to Own 1 HDB + 1 Condo Right From the Start",
  slug: "mistakes-in-strategising-to-own-1-hdb-1-condo-right-from-the-start",
  level: "All Levels",
  duration: "1 hour 36 minutes",
  category: "Webinar",
  price: "Free",
  image: "/mistakes-in-strategising-to-own-1-hdb-1-condo-right-from-the-start.jpg",
  featured: false,
  tags: ["Webinar", "HDB", "Condo"],
  rating: 0,
  students: 129,
  instructors: melvin
    ? [
    {
      name: melvin.name,
      image: melvin.image,
      title: melvin.role,
      bio: melvin.bio,
    },
  ]
  :[],
  lastUpdated: "09/01/2025",
  description: "Learn the common mistakes and best strategies for owning both an HDB and a Condo in Singapore.",
  whatYouWillLearn: ["HDB & Condo ownership", "Strategic planning", "Avoiding pitfalls"],
  curriculum: [
    { title: "Common Mistakes", lessons: ["What to avoid", "Case studies"] }
  ],
  highlights: ["Expert advice", "Real-world examples"],
  requirements: ["Interest in property investment"],
  targetAudience: ["Investors", "Homebuyers"],
  reviews: [],
}; 