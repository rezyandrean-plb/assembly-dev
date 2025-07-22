import type { CourseData } from "../components/course-detail-template"
import { getFacilitator } from "@/app/data/facilitators"

const yurong = getFacilitator("ong-yu-rong");
const grayce = getFacilitator("grayce-tan");

export const courseData: CourseData = {
  id: 2003,
  title: "Maximizing Your Property Investment",
  slug: "maximizing-your-property-investment",
  level: "All Levels",
  duration: "1 hour 8 minutes",
  category: "Webinar",
  price: "Free",
  image: "/maximizing-your-property-investment.jpg",
  featured: false,
  tags: ["Webinar", "HDB"],
  rating: 0,
  students: 16,
  instructors: yurong && grayce
    ? [
    {
      name: yurong.name,
      image: yurong.image,
      title: yurong.role,
      bio: yurong.bio,
    },
    {
      name: grayce.name,
      image: grayce.image,
      title: grayce.role,
      bio: grayce.bio,
    },
  ]
  : [],
  lastUpdated: "10/09/2024",
  description: "Learn strategies to maximize returns on your property investment.",
  whatYouWillLearn: ["Maximizing returns", "Investment strategies", "Property management"],
  curriculum: [
    { title: "Maximizing Returns", lessons: ["Key strategies", "Case studies"] }
  ],
  highlights: ["Expert tips", "Real-world examples"],
  requirements: ["Interest in property investment"],
  targetAudience: ["Investors", "Homeowners"],
  reviews: [],
}; 