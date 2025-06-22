import type { CourseData } from "../components/course-detail-template"
import { getFacilitator } from "@/app/data/facilitators"

const melvin = getFacilitator("melvin-lim");
const yurong = getFacilitator("ong-yu-rong");
const wayne = getFacilitator("wayne-tang");
const joan = getFacilitator("joan-loh");

export const courseData: CourseData = {
  id: 3001,
  title: "2024 Market Trends & Strategies for New Launch & Resale Condos",
  slug: "2024-market-trends-strategies-for-new-launch-resale-condos",
  level: "All Levels",
  duration: "2 hours 7 minutes",
  category: "Webinar",
  price: "Free",
  image: "/Assembly-2023-Webinars-Thumbails-19-scaled.jpg",
  featured: false,
  tags: ["Condo", "Webinar"],
  rating: 0,
  students: 50,
  instructors: melvin && yurong && wayne && joan
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
        {
          name: wayne.name,
          image: wayne.image,
          title: wayne.role,
          bio: wayne.bio,
        },
        {
          name: joan.name,
          image: joan.image,
          title: joan.role,
          bio: joan.bio,
        },
    ]
    :[],
  lastUpdated: "10/09/2024",
  description: "Explore the latest market trends and strategies for new launch and resale condos in 2024.",
  whatYouWillLearn: [
    "Understand 2024 condo market trends",
    "Identify investment opportunities",
    "Develop effective strategies for new launch and resale condos"
  ],
  curriculum: [
    { title: "2024 Market Overview", lessons: ["Key statistics and trends for condos in 2024."] },
    { title: "Investment Strategies", lessons: ["Best practices and strategies for condo investment."] },
    { title: "Case Studies", lessons: ["Real-world examples and lessons learned."] }
  ],
  highlights: [],
  requirements: [],
  targetAudience: [],
  reviews: []
} 