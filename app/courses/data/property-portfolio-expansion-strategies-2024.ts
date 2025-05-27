import type { CourseData } from "../components/course-detail-template"
import { getInstructors } from "@/app/data/instructors"

const courseData: CourseData = {
  id: 1002,
  title: "Property Portfolio Expansion Strategies 2024",
  slug: "property-portfolio-expansion-strategies-2024",
  level: "Intermediate",
  duration: "2 hours",
  category: "Investment Strategy",
  price: "Free",
  image: "/property-portfolio-expansion-strategies-2024.jpg",
  featured: false,
  tags: ["Portfolio Management", "Investment Strategy", "Market Analysis"],
  rating: 0,
  students: 0,
  instructors: [
    {
      name: "Melvin Lim",
      image: "/images/instructors/melvin-lim.png",
    },
    {
      name: "Ong Yu Rong",
      image: "/images/instructors/yu-rong.png",
    },
    {
      name: "George Peng",
      image: "/images/instructors/george-peng.png",
    },
  ],
  lastUpdated: "2024-06-01",
  description: "Learn advanced strategies for expanding your property portfolio in 2024's market conditions.",
  whatYouWillLearn: [
    "Learn advanced portfolio expansion techniques",
    "Understand market timing and opportunity identification",
    "Develop risk management strategies",
    "Create a sustainable portfolio growth plan"
  ],
  curriculum: [
    {
      title: "Introduction",
      lessons: ["Overview of property portfolio expansion strategies in 2024's market context."]
    },
    {
      title: "Market Analysis",
      lessons: ["Understanding current market conditions and opportunities for portfolio expansion."]
    },
    {
      title: "Strategy Development",
      lessons: ["Developing effective strategies for portfolio growth and diversification."]
    },
    {
      title: "Risk Management",
      lessons: ["Managing risks associated with portfolio expansion and market volatility."]
    }
  ],
  highlights: [],
  requirements: [],
  targetAudience: [],
  reviews: []
}

export default courseData 