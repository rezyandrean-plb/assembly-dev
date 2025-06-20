import type { CourseData } from "@/app/types/course"
import { getFacilitator } from "@/app/data/facilitators"

const melvin = getFacilitator("melvin-lim");

export const courseData: CourseData = {
  id: 10001,
  title: "The Shift in Singapore's Real Estate Market 2023",
  slug: "the-shift-in-singapores-real-estate-market-2023",
  level: "All Levels",
  duration: "1 hour 15 minutes",
  category: "Market Trends",
  price: "Free",
  image: "/the-shift-in-singapores-real-estate-market-2023.jpg",
  featured: true,
  tags: ["Market Trends", "Webinar"],
  rating: 0,
  students: 7,
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
  lastUpdated: "10 September 2024",
  description: `In 2020, Singapore's real estate market experienced a strong bull run, characterised by a substantial and sustained increase in select property values. This was anticipated by PropertyLimBrothers, resulting in a strong investment portfolio for our clients.

So what's in 2023? PropertyLimBrothers forecasts macro shifts in the market which will undoubtedly drive the way we invest in real estate. Join Melvin Lim, CEO and Co-founder of PropertyLimBrothers, as he shares about the risks and opportunities in the next wave of real estate trends.`,
  whatYouWillLearn: [
    "Understand the key factors driving Singapore's property market in 2023",
    "Analyze the impact of recent government cooling measures",
    "Identify emerging trends in different property segments (HDB, condo, landed)",
    "Recognize opportunities in the current market environment",
    "Learn how interest rate changes are affecting property financing",
    "Understand the influence of foreign investment on local property prices",
    "Discover which neighborhoods are showing the strongest growth potential",
    "Gain insights into how to position yourself in the current market",
  ],
  curriculum: [
    {
      title: "Market Overview 2023",
      lessons: [
        "Current State of Singapore's Property Market",
        "Key Statistics and Price Trends",
        "Comparison with Pre-Pandemic Market",
        "Supply and Demand Analysis",
        "Transaction Volume Insights",
      ],
    },
    {
      title: "Government Policies and Their Impact",
      lessons: [
        "Recent Cooling Measures Analysis",
        "ABSD and Its Effects on Different Buyer Segments",
        "Loan-to-Value Limits and Borrowing Constraints",
        "HDB Policy Changes and Market Effects",
        "Upcoming Policy Directions to Watch",
      ],
    },
    {
      title: "Segment Analysis",
      lessons: [
        "HDB Resale Market Trends",
        "Private Non-Landed Residential Market",
        "Landed Property Segment Performance",
        "Commercial and Industrial Property Outlook",
        "Rental Market Dynamics",
      ],
    },
    {
      title: "Future Outlook and Strategies",
      lessons: [
        "Price Projection for Remainder of 2023",
        "Medium-Term Market Outlook (2024-2025)",
        "Strategies for Different Buyer Profiles",
        "Investment Opportunities in the Current Market",
        "Risk Management in Uncertain Times",
      ],
    },
  ],
  highlights: [
    "Live Q&A session with property expert Melvin Lim",
    "Access to exclusive market research data",
    "Downloadable market report PDF",
    "Real-time case studies of recent transactions",
    "Networking opportunity with other property enthusiasts",
    "Certificate of participation",
    "Follow-up resources and reading materials",
  ],
  requirements: [
    "Basic understanding of property terms and concepts",
    "Interest in Singapore's real estate market",
    "No prior knowledge or experience required",
  ],
  targetAudience: [
    "Property investors looking to understand current market conditions",
    "Homeowners considering selling or upgrading",
    "First-time homebuyers planning their purchase",
    "Real estate professionals seeking market insights",
    "Anyone interested in Singapore's property market trends",
  ],
  reviews: [  ],
}
