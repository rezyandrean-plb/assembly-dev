import type { CourseData } from "../components/course-detail-template"
import { getFacilitator } from "@/app/data/facilitators"

const melvin = getFacilitator("melvin-lim");
const yurong = getFacilitator("ong-yu-rong");
const george = getFacilitator("george-peng");

const courseData: CourseData = {
  id: 1002,
  title: "Property Portfolio Expansion Strategies 2024",
  slug: "property-portfolio-expansion-strategies-2024",
  level: "All Levels",
  duration: "1 hour 59 minutes",
  category: "Investing",
  price: "Free",
  image: "/property-portfolio-expansion-strategies-2024.jpg",
  featured: false,
  tags: ["Investing", "Webinar"],
  rating: 0,
  students: 27,
  instructors: melvin && yurong && george
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
          name: george.name,
          image: george.image,
          title: george.role,
          bio: george.bio,
        },
      ]
    : [],
  lastUpdated: "10 September 2024",
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