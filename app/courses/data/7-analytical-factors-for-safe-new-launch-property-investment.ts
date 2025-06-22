import type { CourseData } from "../components/course-detail-template"
import { getFacilitator } from "@/app/data/facilitators"

const yurong = getFacilitator("ong-yu-rong");
const george = getFacilitator("george-peng");

export const courseData: CourseData = {
  id: 2002,
  title: "7 Analytical Factors for Safe New Launch Property Investment",
  slug: "7-analytical-factors-for-safe-new-launch-property-investment",
  level: "All Levels",
  duration: "1 hour 8 minutes",
  category: "Webinar",
  price: "Free",
  image: "/7-analytical-factors-for-safe-property-investment.jpg",
  featured: false,
  tags: ["Investing", "Webinar"],
  rating: 0,
  students: 26,
  instructors: yurong && george
    ? [
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
        :[],
  lastUpdated: "10/09/2024",
  description: "Discover the 7 key factors to analyze before investing in a new launch property.",
  whatYouWillLearn: ["Analytical frameworks", "Risk assessment", "Investment safety"],
  curriculum: [
    { title: "Introduction to Analytical Factors", lessons: ["Overview of 7 factors"] },
    { title: "Application", lessons: ["Case studies", "Practical analysis"] }
  ],
  highlights: ["Expert frameworks", "Real-world application"],
  requirements: ["Interest in property investment"],
  targetAudience: ["Investors", "Homebuyers"],
  reviews: [],
}; 