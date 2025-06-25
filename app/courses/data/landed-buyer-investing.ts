import type { CourseData } from "../components/course-detail-template"
// import { getFacilitator } from "@/app/data/facilitators"

// const melvin = getFacilitator("melvin-lim");

export const courseData: CourseData = {
  id: 30,
  title: "Landed Buyer Investing",
  slug: "landed-buyer-investing",
  level: "All Levels",
  duration: "To be determined",
  category: "Masterclass",
  price: "$2,899.00",
  image: "/landed-buyer-investing.jpg",
  featured: true,
  tags: ["Landed", "Masterclass"],
  rating: 0,
  students: 0,
  instructors: [
    {
      name: "To be announced",
      image: "/images/instructors/placeholder.jpg",
    },
  ],
  lastUpdated: "23/06/2025",
  description:
    "This comprehensive masterclass is designed specifically for investors and homebuyers interested in Singapore's landed property market. Landed properties represent a unique segment with different considerations, regulations, and investment dynamics compared to condominiums or HDBs. This course provides in-depth knowledge and practical strategies for navigating this exclusive market segment, whether you're looking to invest or find your dream landed home.",
  whatYouWillLearn: [
    "Understand the different types of landed properties in Singapore and their characteristics",
    "Learn how to evaluate landed properties for investment potential",
    "Master the unique legal and regulatory aspects of landed property ownership",
    "Develop strategies for financing landed property purchases",
    "Learn how to assess renovation potential and costs for landed homes",
    "Understand the tax implications specific to landed properties",
    "Discover strategies for identifying undervalued landed opportunities",
    "Create a comprehensive plan for landed property acquisition",
  ],
  curriculum: [
    {
      title: "Landed Property Fundamentals",
      lessons: [
        "Types of Landed Properties: Terrace, Semi-Detached, Bungalow, GCB",
        "Freehold vs. Leasehold Landed Properties",
        "Landed Property Regulations and Restrictions",
        "Foreigner Eligibility for Landed Property",
        "Historical Performance of Landed Properties",
      ],
    },
    {
      title: "Landed Property Valuation",
      lessons: [
        "Land Size vs. Built-Up Area Considerations",
        "Location Analysis for Landed Properties",
        "Evaluating Renovation Potential",
        "Age and Condition Assessment",
        "Comparative Market Analysis for Landed Homes",
      ],
    },
    {
      title: "Financing Landed Properties",
      lessons: [
        "Loan Considerations for Landed Properties",
        "Down Payment Requirements and Strategies",
        "Navigating Higher Purchase Prices",
        "Cash Flow Planning for Landed Ownership",
        "Refinancing Strategies for Landed Homes",
      ],
    },
    {
      title: "Renovation and Development",
      lessons: [
        "Assessing Renovation Requirements and Costs",
        "Understanding URA Guidelines for Landed Properties",
        "Rebuilding vs. Renovating Analysis",
        "Working with Architects and Contractors",
        "Maximizing Built-Up Potential",
      ],
    },
    {
      title: "Investment Strategies",
      lessons: [
        "Rental Market for Landed Properties",
        "Capital Appreciation Strategies",
        "Value-Add Opportunities in Landed Homes",
        "Holding Period Optimization",
        "Exit Strategies for Landed Investments",
      ],
    },
    {
      title: "Neighborhood Analysis",
      lessons: [
        "Prime Landed Estates in Singapore",
        "Emerging Landed Neighborhoods",
        "Infrastructure and Amenity Considerations",
        "School Proximity and Education Planning",
        "Community Aspects of Landed Living",
      ],
    },
    {
      title: "Due Diligence and Acquisition",
      lessons: [
        "Property History and Title Investigation",
        "Land Survey and Boundary Issues",
        "Technical Inspections for Landed Properties",
        "Negotiation Strategies for Landed Purchases",
        "Working with Specialized Landed Agents",
      ],
    },
    {
      title: "Ownership and Management",
      lessons: [
        "Maintenance Considerations for Landed Properties",
        "Security Planning for Landed Homes",
        "Managing Larger Properties Efficiently",
        "Tax Planning for Landed Property Owners",
        "Estate Planning for Landed Assets",
      ],
    },
  ],
  highlights: [
    "Comprehensive 8-hour masterclass on landed property investment",
    "Guidance from specialists in Singapore's landed property market",
    "Exclusive market data on landed property transactions",
    "Virtual tours of different landed property types",
    "Detailed case studies of successful landed investments",
    "Personalized landed property acquisition roadmap",
    "Access to a network of landed property specialists",
    "Post-course support and consultation",
  ],
  requirements: [
    "Basic understanding of property investment principles",
    "Financial readiness for landed property consideration",
    "Interest in Singapore's landed property market",
    "Computer or mobile device with internet access",
  ],
  targetAudience: [
    "Investors looking to diversify into landed properties",
    "Homebuyers considering upgrading to landed homes",
    "Property owners planning to rebuild or renovate landed properties",
    "High-net-worth individuals exploring luxury property options",
    "Property agents wanting to specialize in landed properties",
    "Anyone interested in understanding Singapore's landed property market",
  ],
  reviews: [],
}
