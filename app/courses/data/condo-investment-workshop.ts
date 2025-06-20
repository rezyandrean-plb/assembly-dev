import type { CourseData } from "../components/course-detail-template"
import { getFacilitator } from "@/app/data/facilitators"

const melvin = getFacilitator("melvin-lim");

export const courseData: CourseData = {
  id: 3,
  title: "Condo Investment Workshop: Building a Profitable Property Portfolio with Confidence",
  slug: "condo-investment-workshop",
  level: "All Levels",
  duration: "7 hours 33 minutes",
  category: "Condo",
  price: "$899.00",
  image: "/images/condo-investment-workshop-building-a-profitable-property-portfolio-with-confidence.jpg",
  featured: true,
  tags: ["Condo"],
  rating: 0,
  students: 22,
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
  lastUpdated: "20 June 2025",
  description: `This comprehensive workshop is designed for property investors looking to build or expand their condominium portfolio in Singapore's competitive market. Through a combination of expert instruction, case studies, and hands-on exercises, you'll develop the skills and confidence to identify, analyze, and acquire profitable condo investments.

The workshop covers everything from market analysis and property valuation to financing strategies and portfolio management. You'll learn how to evaluate potential investments, negotiate effectively, and build a diversified portfolio that generates consistent returns.

By the end of this program, you'll have a personalized investment plan and the knowledge to execute it successfully in Singapore's dynamic property market.`,
  whatYouWillLearn: [
    "Confidently analyze and evaluate potential condo investments using professional criteria",
    "Create detailed financial projections to assess investment viability",
    "Develop effective negotiation strategies to secure properties at favorable terms",
    "Build a diversified condo portfolio aligned with your financial goals",
    "Implement professional portfolio management techniques to maximize returns",
  ],
  curriculum: [
    {
      title: "Module 1: Singapore Condo Market Fundamentals",
      lessons: [
        "Current market trends and forecasts",
        "Understanding different condo segments (CCR, RCR, OCR)",
        "Supply and demand dynamics in different regions",
        "Impact of government policies on the condo market",
      ],
    },
    {
      title: "Module 2: Investment Property Selection Criteria",
      lessons: [
        "Location analysis and future growth potential",
        "Property attributes that drive rental demand",
        "Developer reputation and quality assessment",
        "New launch vs. resale comparison",
      ],
    },
    {
      title: "Module 3: Financial Analysis for Condo Investments",
      lessons: [
        "Calculating total acquisition costs",
        "Rental yield analysis and projections",
        "Cash flow modeling and sensitivity analysis",
        "Tax implications and optimization strategies",
      ],
    },
    {
      title: "Module 4: Financing Strategies",
      lessons: [
        "Mortgage options and selection criteria",
        "Leveraging for portfolio growth",
        "Managing interest rate risks",
        "Loan-to-value optimization techniques",
      ],
    },
    {
      title: "Module 5: Portfolio Building Strategies",
      lessons: [
        "Diversification strategies for risk management",
        "Balancing new launches and resale properties",
        "Upgrading and refinancing for portfolio growth",
        "Exit strategies and timing considerations",
      ],
    },
  ],
  highlights: [
    "Personalized feedback on your investment strategy",
    "Real-world case studies of successful condo investments",
    "Interactive financial modeling workshops",
    "Exclusive market reports and analysis",
  ],
  requirements: [
    "Basic understanding of property investment concepts",
    "Access to a computer for financial modeling exercises",
  ],
  targetAudience: [
    "Property investors looking to start or expand their condo portfolio",
    "Homeowners considering investment properties for passive income",
    "Real estate professionals seeking to deepen their investment knowledge",
  ],
  reviews: [],
}
