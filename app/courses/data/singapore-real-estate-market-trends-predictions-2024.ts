import type { CourseData } from "../components/course-detail-template"
import { getFacilitator } from "@/app/data/facilitators"

const melvin = getFacilitator("melvin-lim");
const grayce = getFacilitator("grayce-tan");

export const courseData: CourseData = {
  id: 2002,
  title: "Singapore Real Estate Market Trends & Predictions 2024",
  slug: "singapore-real-estate-market-trends-predictions-2024",
  level: "All Levels",
  duration: "1 hour 41 minutes",
  category: "Webinar",
  price: "Free",
  image: "/singapore-real-estate-market-trends-predictions-2024.jpg",
  featured: false,
  tags: ["Webinar", "Market Trends"],
  rating: 0,
  students: 46,
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
  lastUpdated: "10/09/2024",
  description: "A comprehensive overview of Singapore's real estate market trends and predictions for 2024.",
  whatYouWillLearn: [
    "Analyze Singapore's 2024 real estate market",
    "Understand key drivers and risks",
    "Gain insights for investment decisions"
  ],
  curriculum: [
    { title: "2024 Market Overview", lessons: ["Key statistics and trends for Singapore real estate in 2024."] },
    { title: "Predictions & Forecasts", lessons: ["Expert predictions for the coming year."] },
    { title: "Investment Insights", lessons: ["How to use market data for better decisions."] }
  ],
  highlights: [],
  requirements: [],
  targetAudience: [],
  reviews: []
}