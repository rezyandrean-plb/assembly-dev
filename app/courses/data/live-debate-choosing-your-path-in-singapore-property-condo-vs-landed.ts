import type { CourseData } from "../components/course-detail-template"
import { getFacilitator } from "@/app/data/facilitators"

const melvin = getFacilitator("melvin-lim");
const yurong = getFacilitator("ong-yu-rong");
const shawntay = getFacilitator("shawn-tay");
const george = getFacilitator("george-peng");
const gavin = getFacilitator("gavin-chan");

export const courseData: CourseData = {
  id: 1006,
  title: "Live Debate - Choosing Your Path in Singapore Property: Condo vs Landed",
  slug: "live-debate-choosing-your-path-in-singapore-property-condo-vs-landed",
  level: "All Levels",
  duration: "2 hours",
  category: "Property Comparison",
  price: "Free",
  image: "/images/courses/condo-vs-landed-debate.jpg",
  featured: false,
  tags: ["Property Comparison", "Investment Strategy", "Live Debate"],
  rating: 0,
  students: 0,
  instructors: melvin && yurong && shawntay && george && gavin
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
          name: shawntay.name,
          image: shawntay.image,
          title: shawntay.role,
          bio: shawntay.bio,
        },
        {
          name: george.name,
          image: george.image,
          title: george.role,
          bio: george.bio,
        },
        {
          name: gavin.name,
          image: gavin.image,
          title: gavin.role,
          bio: gavin.bio,
        },
      ]
    : [],
  lastUpdated: "2024-06-01",
  description: "An engaging debate comparing the pros and cons of investing in condominiums versus landed properties in Singapore.",
  whatYouWillLearn: [
    "Understand key differences between condo and landed investments",
    "Learn from expert perspectives",
    "Make informed investment decisions",
    "Develop a clear investment strategy"
  ],
  curriculum: [
    {
      title: "Condo Investment Analysis",
      lessons: ["Comprehensive analysis of condominium investment opportunities."]
    },
    {
      title: "Landed Property Analysis",
      lessons: ["Detailed examination of landed property investment potential."]
    },
    {
      title: "Comparative Analysis",
      lessons: ["Direct comparison of investment returns, risks, and opportunities."]
    },
    {
      title: "Investment Decision Framework",
      lessons: ["Framework for making the right choice based on your goals."]
    }
  ],
  highlights: [],
  requirements: [],
  targetAudience: [],
  reviews: []
}