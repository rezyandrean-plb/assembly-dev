import type { CourseData } from "../components/course-detail-template"
import { getFacilitator } from "@/app/data/facilitators"

const melvin = getFacilitator("melvin-lim");

export const courseData: CourseData = {
  id: 3003,
  title: "How to Strategise from a Condo Portfolio into a Landed Portfolio",
  slug: "how-to-strategise-from-a-condo-portfolio-into-a-landed-portfolio",
  level: "All Levels",
  duration: "1 hour 13 minutes",
  category: "Webinar",
  price: "Free",
  image: "/how-to-strategise-from-a-condo-portfolio-into-a-landed-portfolio.jpg",
  featured: false,
  tags: ["Landed", "Webinar"],
  rating: 0,
  students: 36,
  instructors: melvin
    ? [
        {
          name: melvin.name,
          image: melvin.image,
          title: melvin.role,
          bio: melvin.bio,
        }
      ]
    : [],  
  lastUpdated: "09/01/2025",
  description: "Learn how to transition your property investments from condos to landed properties with effective strategies.",
  whatYouWillLearn: [
    "Understand the differences between condo and landed investments",
    "Learn strategies for transitioning your portfolio",
    "Make informed investment decisions"
  ],
  curriculum: [
    { title: "Condo Portfolio Analysis", lessons: ["Reviewing your current condo investments."] },
    { title: "Transition Strategies", lessons: ["Steps and considerations for moving into landed properties."] },
    { title: "Landed Portfolio Planning", lessons: ["Building and managing a landed property portfolio."] }
  ],
  highlights: [],
  requirements: [],
  targetAudience: [],
  reviews: []
} 