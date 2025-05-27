import type { CourseData } from "../components/course-detail-template"
import { getInstructor } from "@/app/data/instructors"

export const courseData: CourseData = {
  id: 1,
  title: "Strategic Property Investment",
  slug: "strategic-property-investment",
  level: "Advanced",
  duration: "32 hours 15 minutes",
  category: "real-estate",
  price: "$1,299",
  image: "/singapore-skyline-investment.png",
  featured: true,
  tags: ["Investment", "Strategy", "Finance"],
  rating: 4.8,
  students: 1243,
  instructors: [
    {
      ...getInstructor("sarah-chen"),
      title: "Senior Property Investment Specialist",
    },
  ],
  lastUpdated: "October 2023",
  description:
    "Master the art of property investment in Singapore's competitive market with data-driven strategies and financial modeling techniques. This comprehensive course will guide you through the entire investment process, from market analysis to portfolio optimization.",
  whatYouWillLearn: [
    "Analyze Singapore's property market trends and identify investment opportunities",
    "Develop sophisticated financial models to evaluate property investments",
    "Create a diversified property portfolio strategy",
    "Navigate regulatory frameworks and optimize tax strategies",
    "Implement risk management techniques specific to property investment",
    "Leverage data analytics for property market forecasting",
  ],
  curriculum: [
    {
      title: "Foundations of Property Investment",
      lessons: [
        "Singapore Property Market Overview",
        "Investment Fundamentals and Principles",
        "Risk and Return in Property Investment",
      ],
    },
    {
      title: "Market Analysis Techniques",
      lessons: [
        "Demographic Analysis and Demand Forecasting",
        "Location Analysis and Valuation",
        "Market Cycle Identification",
      ],
    },
    {
      title: "Financial Modeling for Property",
      lessons: [
        "Cash Flow Projection and Analysis",
        "Financing Structures and Leverage",
        "ROI and Performance Metrics",
      ],
    },
    {
      title: "Portfolio Strategy Development",
      lessons: ["Diversification Principles", "Asset Allocation Strategies", "Portfolio Optimization Techniques"],
    },
    {
      title: "Regulatory and Tax Considerations",
      lessons: [
        "Singapore Property Regulations",
        "Tax Planning for Property Investors",
        "Compliance and Legal Frameworks",
      ],
    },
    {
      title: "Advanced Investment Strategies",
      lessons: [
        "Value-Add Investment Approaches",
        "Distressed Property Opportunities",
        "Commercial vs. Residential Investment",
      ],
    },
  ],
  highlights: [
    "Live Q&A sessions with industry experts",
    "Real-world case studies from Singapore's property market",
    "Exclusive access to investment analysis tools",
    "Networking opportunities with fellow investors",
  ],
  requirements: [
    "Basic understanding of investment principles",
    "Familiarity with financial concepts (ROI, cash flow, etc.)",
    "Access to spreadsheet software (Excel, Google Sheets, etc.)",
  ],
  targetAudience: [
    "Aspiring property investors looking to enter the Singapore market",
    "Current property owners wanting to optimize their investment strategy",
    "Real estate professionals seeking to enhance their market analysis skills",
    "Financial advisors who want to better understand property investment",
  ],
  reviews: [
    {
      name: "Michael Tan",
      rating: 5,
      date: "2 months ago",
      comment:
        "This course exceeded my expectations. The financial modeling techniques taught here have completely transformed how I evaluate property investments. The instructor's explanations are clear and the practical examples make it easy to apply the concepts to real-world scenarios.",
    },
    {
      name: "Priya Sharma",
      rating: 5,
      date: "3 months ago",
      comment:
        "As someone new to property investment, I found this course incredibly valuable. It provides a comprehensive overview of Singapore's property market and equips you with the tools to make informed investment decisions. The section on regulatory frameworks was particularly helpful.",
    },
    {
      name: "David Wong",
      rating: 4,
      date: "1 month ago",
      comment:
        "Great course with lots of practical insights. I've been investing in properties for a few years, but this course taught me several new strategies that I hadn't considered before. The only reason I'm giving 4 stars instead of 5 is that I would have liked more content on commercial property investment.",
    },
  ],
}
