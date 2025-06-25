import type { CourseData } from "../components/course-detail-template"
import { getFacilitator } from "@/app/data/facilitators"

const melvin = getFacilitator("melvin-lim");
const phyllis = getFacilitator("phyllis-goh");

export const courseData: CourseData = {
  id: 2001,
  title: "Entry Price Analysis for 5 Upcoming New Launches",
  slug: "entry-price-analysis-for-5-upcoming-new-launches",
  level: "All Levels",
  duration: "1 hour 46 minutes",
  category: "Webinar",
  price: "Free",
  image: "/entry-price-analysis-for-5-upcoming-new-launches.jpg",
  featured: false,
  tags: ["Condo", "Webinar"],
  rating: 0,
  students: 60,
  instructors: melvin && phyllis
    ? [
        {
          name: melvin.name,
          image: melvin.image,
          title: melvin.role,
          bio: melvin.bio,
        },
        {
          name: phyllis.name,
          image: phyllis.image,
          title: phyllis.role,
          bio: phyllis.bio,
        },
      ]
      :[],
  lastUpdated: "10/03/2025",
  description: "Learn how to analyze entry prices for upcoming new launches in Singapore.",
  whatYouWillLearn: ["Entry price analysis", "New launch comparison", "Investment decision making"],
  curriculum: [
    { title: "Entry Price Fundamentals", lessons: ["What is entry price?", "Why it matters"] },
    { title: "Case Studies", lessons: ["5 upcoming launches", "Comparative analysis"] }
  ],
  highlights: ["Real-world examples", "Expert insights"],
  requirements: ["Interest in property investment"],
  targetAudience: ["Investors", "Homebuyers"],
  reviews: [],
}; 