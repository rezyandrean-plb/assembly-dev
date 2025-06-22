import type { CourseData } from "../components/course-detail-template"
import { getFacilitator } from "@/app/data/facilitators"

const melvin = getFacilitator("melvin-lim");
const grayce = getFacilitator("grayce-tan");
const joan = getFacilitator("joan-loh");
const sebastian = getFacilitator("sebastian-lau");
const lyndon = getFacilitator("lyndon-leong");

export const courseData: CourseData = {
  id: 1001,
  title: "Live Debate - Choosing Your Path in Singapore Property: BTO vs Resale HDB",
  slug: "live-debate-choosing-your-path-in-singapore-property-bto-vs-resale-hdb",
  level: "All Levels",
  duration: "2 hours 15 minutes",
  category: "Webinar",
  price: "Free",
  image: "/Assembly-2023-Webinars-Thumbnails-15-scaled.jpg",
  featured: false,
  tags: ["HDB", "Webinar"],
  rating: 0,
  students: 16,
  instructors: melvin && grayce && joan && sebastian && lyndon
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
        {
          name: joan.name,
          image: joan.image,
          title: joan.role,
          bio: joan.bio,
        },
        {
          name: sebastian.name,
          image: sebastian.image,
          title: sebastian.role,
          bio: sebastian.bio,
        },
        {
          name: lyndon.name,
          image: lyndon.image,
          title: lyndon.role,
          bio: lyndon.bio,
        },
      ]
    : [],
  lastUpdated: "10/09/2024",
  description: "A live debate exploring the pros and cons of BTO versus Resale HDB flats for Singaporean homebuyers.",
  whatYouWillLearn: [
    "Understand the differences between BTO and resale HDB",
    "Learn from expert perspectives",
    "Make informed homebuying decisions",
    "Develop a clear decision-making framework"
  ],
  curriculum: [
    {
      title: "BTO Analysis",
      lessons: ["Advantages and disadvantages of buying a BTO flat."]
    },
    {
      title: "Resale HDB Analysis",
      lessons: ["Pros and cons of purchasing a resale HDB flat."]
    },
    {
      title: "Comparative Analysis",
      lessons: ["Direct comparison of BTO and resale HDB in terms of cost, location, and flexibility."]
    },
    {
      title: "Decision Framework",
      lessons: ["How to decide which option is best for your needs."]
    }
  ],
  highlights: [],
  requirements: [],
  targetAudience: [],
  reviews: []
}