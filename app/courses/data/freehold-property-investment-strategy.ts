import type { CourseData } from "../components/course-detail-template"
import { getFacilitator } from "@/app/data/facilitators"

const melvin = getFacilitator("melvin-lim");
const yurong = getFacilitator("ong-yu-rong");

export const courseData: CourseData = {
  id: 28,
  title: "Freehold Property Investment Strategy",
  slug: "freehold-property-investment-strategy",
  level: "All Levels",
  duration: "1 hour 11 minutes",
  category: "Webinar",
  price: "Free",
  image: "/freehold-property-investment-strategy.jpg", // Updated image path
  featured: false,
  tags: ["Landed", "Condo", "Webinar"],
  rating: 0,
  students: 14,
  instructors: melvin && yurong
    ? [
        {
          name: melvin.name,
          image: melvin.image,
          title: melvin.role,
          bio: melvin.bio,
        },
        {
          name: yurong.name,
          image: yurong.image,
          title: yurong.role,
          bio: yurong.bio,
        },
      ]
      :[],
  lastUpdated: "10/09/2024",
  description:
    "Freehold properties represent a distinct investment category in Singapore's real estate market, offering unique advantages and considerations. This webinar explores specialized strategies for investing in freehold properties, examining their historical performance, value proposition, and optimal positioning within an investment portfolio. Property experts Melvin Lim and Ong Yu Rong provide data-driven insights to help you determine if and how freehold properties should feature in your investment strategy.",
  whatYouWillLearn: [
    "Understand the true value proposition of freehold vs. leasehold properties",
    "Learn how to evaluate freehold property investments beyond the tenure premium",
    "Analyze historical performance data of freehold properties across market cycles",
    "Develop strategies for identifying undervalued freehold opportunities",
    "Understand the impact of age on freehold property values",
    "Learn about financing considerations specific to freehold properties",
    "Discover optimal holding periods for freehold investments",
    "Understand how to integrate freehold properties into a diversified portfolio",
  ],
  curriculum: [
    {
      title: "Freehold Property Fundamentals",
      lessons: [
        "Understanding Freehold Tenure: Legal and Practical Implications",
        "Types of Freehold Properties in Singapore",
        "Freehold vs. Leasehold: Beyond the Basic Comparison",
        "The Psychology of Freehold Ownership",
        "Historical Context of Freehold Properties in Singapore",
      ],
    },
    {
      title: "Investment Performance Analysis",
      lessons: [
        "Historical Price Trends of Freehold vs. Leasehold",
        "The Freehold Premium: Myth vs. Reality",
        "Impact of Property Age on Freehold Value",
        "Rental Yield Considerations for Freehold Properties",
        "Resale Market Dynamics for Aging Freehold Properties",
      ],
    },
    {
      title: "Strategic Investment Approaches",
      lessons: [
        "Identifying Value in the Freehold Market",
        "Neighborhood Analysis for Freehold Investments",
        "Evaluating Redevelopment Potential",
        "En Bloc Potential Assessment",
        "Holding Period Optimization for Freehold Properties",
      ],
    },
    {
      title: "Portfolio Integration and Case Studies",
      lessons: [
        "Balancing Freehold and Leasehold in Your Portfolio",
        "Financing Strategies for Freehold Acquisitions",
        "Case Studies: Successful Freehold Investment Stories",
        "Risk Management in Freehold Investments",
        "Future Outlook for Freehold Property Values",
      ],
    },
  ],
  highlights: [
    "Exclusive analysis of freehold property performance data",
    "Interactive comparison tools for freehold vs. leasehold evaluation",
    "Case studies of successful freehold investment strategies",
    "Access to proprietary research on freehold property trends",
    "Q&A session with freehold investment experts",
    "Downloadable freehold investment checklist",
    "Post-webinar resources and reference materials",
  ],
  requirements: [
    "Basic understanding of property investment concepts",
    "Interest in freehold property investments",
    "No specific prior knowledge required",
  ],
  targetAudience: [
    "Property investors considering freehold acquisitions",
    "Current property owners evaluating tenure considerations",
    "Long-term investors focused on wealth preservation",
    "Investors developing a diversified property portfolio",
    "Homebuyers weighing freehold vs. leasehold options",
    "Anyone interested in understanding freehold property dynamics",
  ],
  reviews: [
    {
      name: "Vincent Loh",
      rating: 5,
      date: "January 2023",
      comment:
        "This webinar challenged many of my assumptions about freehold properties. The data-driven approach helped me see beyond the emotional appeal to the actual investment merits.",
    },
    {
      name: "Grace Tan",
      rating: 4,
      date: "December 2022",
      comment:
        "Very informative session that provided a balanced view of freehold investments. The section on aging freehold properties was particularly insightful.",
    },
    {
      name: "Kelvin Ng",
      rating: 5,
      date: "December 2022",
      comment:
        "Melvin and Yu Rong presented complex market data in an accessible way. Their analysis of historical performance across different market cycles was eye-opening.",
    },
  ],
}
