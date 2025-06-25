import type { CourseData } from "../components/course-detail-template"
import { getFacilitator } from "@/app/data/facilitators"

const melvin = getFacilitator("melvin-lim");
const joan = getFacilitator("joan-loh");

const courseData: CourseData = {
  id: 1003,
  title: "The Ultimate Guide to Making the Best Property Decision",
  slug: "the-ultimate-guide-to-making-the-best-property-decision",
  level: "All Levels",
  duration: "1 hour 8 minutes",
  category: "Condo",
  price: "Free",
  image: "/the-ultimate-guide-to-making-the-best-property-decision.jpg",
  featured: false,
  tags: ["Condo", "Webinar"],
  rating: 0,
  students: 43,
  instructors: melvin && joan 
    ? [
        {
          name: melvin.name,
          image: melvin.image,
          title: melvin.role,
          bio: melvin.bio,
        },
        {
          name: joan.name,
          image: joan.image,
          title: joan.role,
          bio: joan.bio,
        },
      ]
    : [],
  lastUpdated: "10/09/2024",
  description: "A comprehensive guide to making informed and strategic property decisions in Singapore's real estate market.",
  whatYouWillLearn: [
    "Make informed property decisions",
    "Understand market dynamics",
    "Develop a strategic approach to property selection",
    "Create a sustainable property investment plan"
  ],
  curriculum: [
    {
      title: "Understanding Your Goals",
      lessons: ["Identifying and aligning your property goals with your financial objectives."]
    },
    {
      title: "Market Analysis",
      lessons: ["Analyzing current market conditions and future trends."]
    },
    {
      title: "Property Selection",
      lessons: ["Criteria for selecting the right property type and location."]
    },
    {
      title: "Financial Planning",
      lessons: ["Budgeting and financing strategies for your property purchase."]
    }
  ],
  highlights: [],
  requirements: [],
  targetAudience: [],
  reviews: []
}

export default courseData 