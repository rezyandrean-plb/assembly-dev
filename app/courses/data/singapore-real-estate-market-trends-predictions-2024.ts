import type { CourseData } from "../components/course-detail-template"

export const courseData: CourseData = {
  id: 2002,
  title: "Singapore Real Estate Market Trends & Predictions 2024",
  slug: "singapore-real-estate-market-trends-predictions-2024",
  level: "All Levels",
  duration: "2 hours",
  category: "Market Trends",
  price: "Free",
  image: "/images/courses/sg-market-trends-2024.jpg",
  featured: false,
  tags: ["Singapore", "Market Trends", "2024"],
  rating: 0,
  students: 0,
  instructors: [
    {
      name: "Melvin Lim",
      image: "/images/instructors/melvin-lim.png",
      bio: "Property Investment Expert with over 15 years of experience",
    },
    {
      name: "Grayce Tan",
      image: "/images/instructors/grayce-tan.png",
      bio: "Property Investment Expert with over 15 years of experience",
    }
  ],
  lastUpdated: "2024-06-01",
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