import type { CourseData } from "../components/course-detail-template"
import { getFacilitator } from "@/app/data/facilitators"

const melvin = getFacilitator("melvin-lim");
const jesley = getFacilitator("jesley-lim");
const junwei = getFacilitator("lee-jun-wei");
const ramzi = getFacilitator("ramzi-razak");
const yanyan = getFacilitator("loong-yanyan");

export const courseData: CourseData = {
  id: 3002,
  title: "Live Debate - Resale HDB VS Resale Condo",
  slug: "live-debate-resale-hdb-vs-resale-condo",
  level: "All Levels",
  duration: "2 hours 17 minutes",
  category: "Webinar",
  price: "Free",
  image: "/live-debate-resale-hdb-vs-resale-condo.jpg",
  featured: false,
  tags: ["HDB", "Condo", "Webinar"],
  rating: 0,
  students: 8,
  instructors: melvin && jesley && junwei && ramzi && yanyan
    ? [
        {
          name: melvin.name,
          image: melvin.image,
          title: melvin.role,
          bio: melvin.bio,
        },
        {
          name: jesley.name,
          image: jesley.image,
          title: jesley.role,
          bio: jesley.bio,
        },
        {
          name: junwei.name,
          image: junwei.image,
          title: junwei.role,
          bio: junwei.bio,
        },
        {
          name: ramzi.name,
          image: ramzi.image,
          title: ramzi.role,
          bio: ramzi.bio,
        },
        {
          name: yanyan.name,
          image: yanyan.image,
          title: yanyan.role,
          bio: yanyan.bio,
        },
      ]
    : [],
  lastUpdated: "09/01/2025",
  description: "A live debate comparing the pros and cons of resale HDBs and resale condos for Singaporean homebuyers.",
  whatYouWillLearn: [
    "Understand the differences between resale HDB and resale condo",
    "Learn from expert perspectives",
    "Make informed homebuying decisions"
  ],
  curriculum: [
    { title: "Resale HDB Analysis", lessons: ["Advantages and disadvantages of buying a resale HDB."] },
    { title: "Resale Condo Analysis", lessons: ["Pros and cons of purchasing a resale condo."] },
    { title: "Comparative Analysis", lessons: ["Direct comparison of resale HDB and resale condo in terms of cost, location, and flexibility."] }
  ],
  highlights: [],
  requirements: [],
  targetAudience: [],
  reviews: []
} 