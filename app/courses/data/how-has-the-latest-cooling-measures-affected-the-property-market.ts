import { CourseData } from "../types"
import { getFacilitator } from "@/app/data/facilitators"

const melvin = getFacilitator("melvin-lim");
const yurong = getFacilitator("ong-yu-rong");

const courseData: CourseData = {
  id: 1005,
  title: "How has the latest Cooling Measures affected the Property Market?",
  slug: "how-has-the-latest-cooling-measures-affected-the-property-market",
  level: "All Levels",
  duration: "1 hour 21 minutes",
  category: "Market Analysis",
  price: "Free",
  image: "/images/courses/cooling-measures.jpg",
  featured: false,
  tags: ["Market Trends", "Webinar"],
  rating: 0,
  students: 15,
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
  lastUpdated: "10 September 2024",
  description: "An in-depth analysis of the latest property cooling measures and their impact on Singapore's real estate market.",
  whatYouWillLearn: [
    "Understand the latest cooling measures",
    "Analyze their impact on property values",
    "Develop effective investment strategies",
    "Make informed property decisions"
  ],
  curriculum: [
    {
      title: "Latest Cooling Measures",
      lessons: ["Overview of the most recent property cooling measures implemented."]
    },
    {
      title: "Market Impact Analysis",
      lessons: ["How these measures have affected different property segments."]
    },
    {
      title: "Investment Strategies",
      lessons: ["Adapting investment strategies to the new market conditions."]
    },
    {
      title: "Future Outlook",
      lessons: ["Predicting market trends under the new cooling measures."]
    }
  ],
  highlights: [],
  requirements: [],
  targetAudience: [],
  reviews: []
}

export default courseData 