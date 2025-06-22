import type { CourseData } from "../components/course-detail-template"
import { getFacilitator } from "@/app/data/facilitators"

const melvin = getFacilitator("melvin-lim");
const beatrice = getFacilitator("beatrice-lim");

export const courseData: CourseData = {
  id: 2001,
  title: "2024 Market Trends & Strategies for Landed Properties",
  slug: "2024-market-trends-strategies-for-landed-properties",
  level: "All Levels",
  duration: "1 hour 19 minutes",
  category: "Webinar",
  price: "Free",
  image: "/2024-market-trends-and-strategies-for-landed-properties.jpg",
  featured: false,
  tags: ["Landed", "Webinar"],
  rating: 0,
  students: 27,
  instructors: melvin && beatrice
    ? [
        {
          name: melvin.name,
          image: melvin.image,
          title: melvin.role,
          bio: melvin.bio,
        },
        {
          name: beatrice.name,
          image: beatrice.image,
          title: beatrice.role,
          bio: beatrice.bio,
        },
        ]
        :[],
  lastUpdated: "10/09/2024",
  description: "Explore the latest market trends and strategies for landed properties in 2024.",
  whatYouWillLearn: [
    "Understand 2024 landed property market trends",
    "Identify investment opportunities",
    "Develop effective strategies for landed properties"
  ],
  curriculum: [
    { title: "2024 Market Overview", lessons: ["Key statistics and trends for landed properties in 2024."] },
    { title: "Investment Strategies", lessons: ["Best practices and strategies for landed property investment."] },
    { title: "Case Studies", lessons: ["Real-world examples and lessons learned."] }
  ],
  highlights: [],
  requirements: [],
  targetAudience: [],
  reviews: []
}