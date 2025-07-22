import type { CourseData } from "../components/course-detail-template"
import { getFacilitator } from "@/app/data/facilitators"

const melvin = getFacilitator("melvin-lim");

export const courseData: CourseData = {
  id: 24,
  title: "Landed Property Investment Strategies",
  slug: "landed-property-investment-strategies",
  level: "All Levels",
  duration: "1 hour 17 minutes",
  category: "Webinar",
  price: "Free",
  image: "/landed-property-investment-strategies.jpg",
  featured: true,
  tags: ["Landed", "Webinar"],
  rating: 0,
  students: 9,
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
  lastUpdated: "10/09/2024",
  description:
    "Landed properties represent a unique segment in Singapore's real estate market, offering distinct investment characteristics and opportunities. This webinar delves into specialized strategies for investing in landed properties, covering everything from selection criteria and valuation methods to renovation strategies and long-term wealth building approaches. Whether you're a seasoned investor or considering your first landed property, this session will provide valuable insights into this premium market segment.",
  whatYouWillLearn: [
    "Understand the unique investment characteristics of landed properties",
    "Learn how to identify landed properties with strong appreciation potential",
    "Master valuation techniques specific to landed properties",
    "Develop strategies for financing landed property investments",
    "Understand renovation approaches that maximize property value",
    "Learn about the legal and regulatory aspects of landed property ownership",
    "Discover wealth preservation and growth strategies through landed properties",
    "Understand the tax implications and optimization strategies for landed property investors",
  ],
  curriculum: [
    {
      title: "Landed Property Market Overview",
      lessons: [
        "Current State of Singapore's Landed Property Market",
        "Historical Performance Analysis",
        "Supply Constraints and Future Outlook",
        "Price Trends Across Different Landed Property Types",
        "Comparative Analysis: Landed vs. Non-Landed Investments",
      ],
    },
    {
      title: "Investment Selection Strategy",
      lessons: [
        "Location Analysis for Landed Properties",
        "Property Type Selection: Terrace, Semi-Detached, Bungalow",
        "Land Size and Configuration Considerations",
        "Freehold vs. Leasehold Evaluation",
        "Redevelopment Potential Assessment",
      ],
    },
    {
      title: "Valuation and Financial Analysis",
      lessons: [
        "Landed Property Valuation Methodologies",
        "Land Value vs. Built-Up Value Analysis",
        "Rental Yield Considerations for Landed Properties",
        "Financing Strategies and Loan Structuring",
        "Cash Flow Projection and Management",
      ],
    },
    {
      title: "Value Enhancement Strategies",
      lessons: [
        "Renovation and Rebuilding Approaches",
        "Addition and Alteration (A&A) Planning",
        "Working with Architects and Contractors",
        "Cost Management in Landed Property Projects",
        "ROI Maximization for Enhancement Works",
      ],
    },
  ],
  highlights: [
    "Exclusive analysis of landed property market trends",
    "Case studies of successful landed property investments",
    "Interactive Q&A with landed property expert",
    "Virtual tour of exemplary landed property investments",
    "Downloadable landed property investment checklist",
    "Access to specialized landed property resources",
    "Networking with fellow landed property investors",
  ],
  requirements: [
    "Basic understanding of property investment concepts",
    "Interest in landed property investments",
    "No specific prior experience required",
  ],
  targetAudience: [
    "Property investors interested in diversifying into landed properties",
    "Current non-landed property owners looking to upgrade",
    "High net worth individuals seeking wealth preservation options",
    "Property investors looking for long-term capital appreciation",
    "Homeowners considering landed properties for own stay",
    "Anyone interested in understanding the landed property segment",
  ],
  reviews: [
    {
      name: "Gerald Tan",
      rating: 5,
      date: "May 2023",
      comment:
        "As someone who recently purchased my first landed property, this webinar provided invaluable insights into how to maximize its potential. The section on renovation strategies was particularly useful.",
    },
    {
      name: "Vivian Lim",
      rating: 5,
      date: "April 2023",
      comment:
        "Melvin's expertise in landed properties is evident. The valuation methodologies he shared have already helped me identify a potentially undervalued property in District 15.",
    },
    {
      name: "Michael Wong",
      rating: 5,
      date: "April 2023",
      comment:
        "Comprehensive overview of the landed property market with practical investment strategies. The case studies provided real-world context that was extremely helpful.",
    },
  ],
}
