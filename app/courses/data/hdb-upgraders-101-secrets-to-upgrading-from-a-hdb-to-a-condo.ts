import type { CourseData } from "../components/course-detail-template"
// import { getFacilitator } from "@/app/data/facilitators"

// const melvin = getFacilitator("melvin-lim");

export const courseData: CourseData = {
  id: 1008,
  title: "HDB Upgraders 101: Secrets to Upgrading from a HDB to a Condo",
  slug: "hdb-upgraders-101-secrets-to-upgrading-from-a-hdb-to-a-condo",
  level: "All Levels",
  duration: "To be announced",
  category: "Workshop",
  price: "$599.00",
  image: "/hdb-upgraders-101-secrets-to-upgrading-from-a-hdb-to-a-condo.jpg",
  featured: false,
  tags: ["Condo", "HDB", "Workshop"],
  rating: 0,
  students: 0,
  instructors: [
    {
      name: "To be announced",
      image: "/images/instructors/placeholder.jpg",
    },
  ],
  lastUpdated: "22/06/2025",
  description: "Essential strategies and tips for HDB owners looking to upgrade to a condominium in Singapore.",
  whatYouWillLearn: [
    "Learn the step-by-step process to upgrade from HDB to condo",
    "Understand financial and market considerations",
    "Avoid common pitfalls",
    "Gain confidence in your upgrade journey"
  ],
  curriculum: [
    {
      title: "Upgrade Planning",
      lessons: ["How to plan your upgrade from HDB to condo."]
    },
    {
      title: "Financial Considerations",
      lessons: ["Budgeting, financing, and cost analysis for upgrading."]
    },
    {
      title: "Market Timing",
      lessons: ["When is the best time to upgrade?"]
    },
    {
      title: "Case Studies",
      lessons: ["Real-life examples of successful HDB to condo upgrades."]
    }
  ],
  highlights: [],
  requirements: [],
  targetAudience: [],
  reviews: []
}