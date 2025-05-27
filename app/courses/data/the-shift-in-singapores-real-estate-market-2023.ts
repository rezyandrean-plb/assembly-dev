import type { CourseData } from "../components/course-detail-template"

export const courseData: CourseData = {
  id: 21,
  title: "The Shift in Singapore's Real Estate Market 2023",
  slug: "the-shift-in-singapores-real-estate-market-2023",
  level: "All Levels",
  duration: "1 hour",
  category: "market trends",
  price: "Free",
  image: "/the-shift-in-singapores-real-estate-market-2023.jpg",
  featured: true,
  tags: ["Market Trends", "Webinar", "2023"],
  rating: 4.7,
  students: 1250,
  instructors: [
    {
      name: "Melvin Lim",
      image: "/images/instructors/melvin-lim.png",
      bio: "Property Investment Expert with over 15 years of experience",
    },
  ],
  lastUpdated: "June 2023",
  description:
    "This free webinar explores the significant shifts in Singapore's real estate market in 2023. As the property landscape continues to evolve post-pandemic, understanding these changes is crucial for investors, homeowners, and potential buyers. Join property expert Melvin Lim as he analyzes current trends, predicts future movements, and provides actionable insights to navigate this dynamic market.",
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
  reviews: [
    {
      name: "Sarah Tan",
      rating: 5,
      date: "July 2023",
      comment:
        "Incredibly insightful webinar that helped me understand the current market dynamics. Melvin presents complex information in an accessible way. Highly recommended!",
    },
    {
      name: "David Lim",
      rating: 4,
      date: "June 2023",
      comment:
        "Great overview of the market situation. The Q&A session was particularly valuable as Melvin addressed specific concerns about my investment property.",
    },
    {
      name: "Michelle Wong",
      rating: 5,
      date: "June 2023",
      comment:
        "As a first-time homebuyer, this webinar gave me the confidence to make informed decisions. The segment on government policies was especially helpful.",
    },
  ],
}
