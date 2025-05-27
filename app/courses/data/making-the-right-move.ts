import type { CourseData } from "../components/course-detail-template"

export const courseData: CourseData = {
  id: 23,
  title: "Making the Right Move",
  slug: "making-the-right-move",
  level: "All Levels",
  duration: "1 hour",
  category: "hdb",
  price: "Free",
  image: "/making-the-right-move.jpg",
  featured: false,
  tags: ["HDB", "Strategy", "Webinar"],
  rating: 4.6,
  students: 920,
  instructors: [
    {
      name: "Melvin Lim",
      image: "/images/instructors/melvin-lim.png",
      bio: "Property Investment Expert with over 15 years of experience",
    },
  ],
  lastUpdated: "May 2023",
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
      name: "Jasmine Tay",
      rating: 5,
      date: "June 2023",
      comment:
        "This webinar came at the perfect time for my family. We were debating between upgrading to a condo or a larger HDB, and the decision framework presented helped us clarify our priorities.",
    },
    {
      name: "Raymond Ng",
      rating: 4,
      date: "May 2023",
      comment:
        "Very practical advice on the logistics of buying and selling simultaneously. The financial planning section was particularly helpful in understanding what we could realistically afford.",
    },
    {
      name: "Siti Aminah",
      rating: 5,
      date: "May 2023",
      comment:
        "As someone approaching MOP, this webinar provided exactly the guidance I needed. The section on timing considerations was eye-opening and helped me adjust my timeline.",
    },
  ],
}
