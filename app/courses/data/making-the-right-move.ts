import type { CourseData } from "../components/course-detail-template"
import { getFacilitator } from "@/app/data/facilitators"

const melvin = getFacilitator("melvin-lim");

export const courseData: CourseData = {
  id: 23,
  title: "Making the Right Move",
  slug: "making-the-right-move",
  level: "All Levels",
  duration: "1 hour 9 minutes",
  category: "Webinar",
  price: "Free",
  image: "/making-the-right-move.jpg",
  featured: false,
  tags: ["HDB", "Webinar"],
  rating: 5.0,
  students: 18,
  instructors: melvin
    ? [
        {
          name: melvin.name,
          image: melvin.image,
          title: melvin.role,
          bio: melvin.bio,
        },
      ]
    : [],
  lastUpdated: "10/09/2024",
  description:
    "In Singapore's dynamic property market, timing and strategy are everything. This webinar focuses on helping HDB owners make informed decisions about their next property move. Whether you're considering upgrading, right-sizing, or simply relocating, this session will provide you with a structured approach to evaluate your options and execute your move with confidence.",
  whatYouWillLearn: [
    "Understand the optimal timing for your property move based on market cycles",
    "Learn how to evaluate if upgrading, right-sizing, or relocating is right for you",
    "Develop a financial framework for assessing affordability and sustainability",
    "Understand the implications of various HDB policies on your move",
    "Learn strategies for managing the logistics of buying and selling simultaneously",
    "Discover how to maximize the value of your current property before selling",
    "Understand the tax implications of different moving strategies",
    "Learn how to create a personalized property movement plan",
  ],
  curriculum: [
    {
      title: "Assessing Your Current Position",
      lessons: [
        "Evaluating Your Current Property's Value and Potential",
        "Understanding Your Financial Position and Constraints",
        "Clarifying Your Goals and Priorities",
        "Timing Considerations: MOP, Age, and Market Cycle",
        "Family Needs Assessment and Future Planning",
      ],
    },
    {
      title: "Exploring Your Options",
      lessons: [
        "Upgrading Pathways: HDB to Condo, HDB to Larger HDB",
        "Right-sizing Strategies for Empty Nesters",
        "Relocation Opportunities: Emerging Neighborhoods",
        "Investment-Oriented Moves vs. Lifestyle Improvements",
        "Comparative Analysis Framework for Decision Making",
      ],
    },
    {
      title: "Financial Planning for Your Move",
      lessons: [
        "CPF Usage Optimization Strategies",
        "Loan Structuring and Interest Rate Considerations",
        "Cash Outlay Management and Budgeting",
        "Tax Planning: ABSD, SSD, and BSD Strategies",
        "Long-term Financial Impact Assessment",
      ],
    },
    {
      title: "Execution Strategy",
      lessons: [
        "Buy First or Sell First? Strategic Considerations",
        "Negotiation Tactics for Both Buying and Selling",
        "Managing Timelines and Contingencies",
        "Working with Agents, Bankers, and Lawyers",
        "Post-Move Financial Management",
      ],
    },
  ],
  highlights: [
    "Interactive decision-making framework",
    "Real case studies of successful property moves",
    "Live Q&A session with property expert",
    "Downloadable property move planning toolkit",
    "Access to exclusive market data and insights",
    "Post-webinar consultation opportunity",
    "Community of fellow property movers for support",
  ],
  requirements: [
    "Basic understanding of Singapore's property market",
    "Preferably current property owners considering their next move",
    "No specific prior knowledge required",
  ],
  targetAudience: [
    "HDB owners approaching or past their Minimum Occupation Period (MOP)",
    "Homeowners considering upgrading to private property",
    "Empty nesters thinking about right-sizing",
    "Families looking to relocate to different neighborhoods",
    "Property owners unsure about their next property move",
    "Anyone interested in strategic property movement in Singapore",
  ],
  reviews: [
    {
      name: "Gilbert Tan",
      rating: 5,
      date: "3 months ago",
      comment:
        "Great content",
    },
  ],
}
