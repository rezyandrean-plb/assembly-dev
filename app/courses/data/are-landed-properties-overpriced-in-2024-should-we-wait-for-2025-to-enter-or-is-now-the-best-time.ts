import type { CourseData } from "../components/course-detail-template"
import { getFacilitator } from "@/app/data/facilitators"

const melvin = getFacilitator("melvin-lim");
const george = getFacilitator("george-peng");
const beatrice = getFacilitator("beatrice-lim");

export const courseData: CourseData = {
  id: 4003,
  title: "Are Landed Properties Overpriced in 2024? Should we wait for 2025 to Enter or is now the best time?",
  slug: "are-landed-properties-overpriced-in-2024-should-we-wait-for-2025-to-enter-or-is-now-the-best-time",
  level: "All Levels",
  duration: "1 hour 39 minutes",
  category: "Webinar",
  price: "Free",
  image: "/are-landed-properties-overpriced-in-2024-should-we-wait-for-2025-to-enter-or-is-now-the-best-time.jpg",
  featured: false,
  tags: ["Webinar", "Landed"],
  rating: 0,
  students: 25,
  instructors: melvin && george && beatrice
    ? [
        {
          name: melvin.name,
          image: melvin.image,
          title: melvin.role,
          bio: melvin.bio,
        },
        {
          name: george.name,
          image: george.image,
          title: george.role,
          bio: george.bio,
        },
        {
          name: beatrice.name,
          image: beatrice.image,
          title: beatrice.role,
          bio: beatrice.bio,
        },
      ]
    :[],
  lastUpdated: "09/01/2025",
  description: "Analysis of landed property prices in 2024 and whether to buy now or wait for 2025.",
  whatYouWillLearn: ["Landed property pricing", "Market timing", "Investment analysis"],
  curriculum: [
    { title: "Market Analysis", lessons: ["2024 price trends", "2025 forecast"] }
  ],
  highlights: ["Expert analysis", "Market insights"],
  requirements: ["Interest in landed property"],
  targetAudience: ["Investors", "Homebuyers"],
  reviews: [],
}