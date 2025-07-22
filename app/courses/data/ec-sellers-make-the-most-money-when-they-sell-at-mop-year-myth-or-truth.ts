import type { CourseData } from "../components/course-detail-template"
import { getFacilitator } from "@/app/data/facilitators"

const melvin = getFacilitator("melvin-lim");

export const courseData: CourseData = {
  id: 3002,
  title: "EC Sellers Make the Most Money when they sell at MOP Year – Myth or Truth?",
  slug: "ec-sellers-make-the-most-money-when-they-sell-at-mop-year-myth-or-truth",
  level: "All Levels",
  duration: "1 hour 25 minutes",
  category: "Webinar",
  price: "Free",
  image: "/PLB-Webinars-ECs-Sellers-Make-the-Most-Money-when-they-sell-at-MOP-Year-Myth-or-Truth-.jpg",
  featured: false,
  tags: ["Webinar", "Condo"],
  rating: 0,
  students: 50,
  instructors: melvin
    ? [
        {
          name: melvin.name,
          image: melvin.image,
          title: melvin.role,
          bio: melvin.bio,
        },
      ]
      :[],
  lastUpdated: "09/01/2025",
  description: "Explore whether EC sellers really make the most money at MOP year or if it's a myth.",
  whatYouWillLearn: ["EC market timing", "MOP year analysis", "Investment myths"],
  curriculum: [
    { title: "EC Market Timing", lessons: ["What is MOP?", "Case studies"] }
  ],
  highlights: ["Expert analysis", "Market insights"],
  requirements: ["Interest in EC investment"],
  targetAudience: ["EC owners", "Investors"],
  reviews: [],
}; 