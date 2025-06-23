import type { CourseData } from "../components/course-detail-template"
import { getFacilitator } from "@/app/data/facilitators"

const melvin = getFacilitator("melvin-lim");

export const courseData: CourseData = {
  id: 22,
  title: "New Launches – Is There Still an Opportunity in 2023?",
  slug: "new-launches-is-there-still-an-opportunity-in-2023",
  level: "All Levels",
  duration: "1 hour 23 minutes",
  category: "condo",
  price: "Free",
  image: "/new-launches-is-there-still-an-opportunity-in-2023.jpg",
  featured: true,
  tags: ["Condo", "Webinar"],
  rating: 0,
  students: 8,
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
    "With rising prices and changing market conditions, many investors are questioning whether new launch condominiums still present viable investment opportunities in 2023. This webinar cuts through the noise to provide a data-driven analysis of the current new launch market in Singapore. Learn how to identify genuine opportunities, avoid potential pitfalls, and make informed decisions in today's competitive landscape.",
  whatYouWillLearn: [
    "Understand the current state of Singapore's new launch market",
    "Analyze price trends and value propositions of recent launches",
    "Identify key factors that determine a successful new launch investment",
    "Learn how to evaluate developer track records and project quality",
    "Understand the impact of land costs on new launch pricing",
    "Discover strategies for selecting units with the best appreciation potential",
    "Learn how to time your entry into new launch projects",
    "Understand financing considerations specific to new launch purchases",
  ],
  curriculum: [
    {
      title: "New Launch Market Overview 2023",
      lessons: [
        "Current State of New Launch Market",
        "Supply Pipeline Analysis",
        "Price Trends Across Different Regions",
        "Take-up Rates and Buyer Profiles",
        "Developer Strategies in the Current Market",
      ],
    },
    {
      title: "Opportunity Analysis Framework",
      lessons: [
        "Defining 'Opportunity' in Today's Context",
        "Price-to-Value Assessment Methodology",
        "Comparative Analysis: New Launch vs. Resale",
        "Growth Corridor Identification",
        "Risk Assessment in New Launch Investments",
      ],
    },
    {
      title: "Case Studies: Success and Failure",
      lessons: [
        "Analysis of Recent Successful Launches",
        "Underperforming Projects and Why They Struggled",
        "Price Appreciation Patterns Post-Launch",
        "Rental Yield Performance of Recent Launches",
        "Exit Strategy Case Studies",
      ],
    },
    {
      title: "Strategic Approach for 2023-2024",
      lessons: [
        "Selection Criteria for New Launch Investments",
        "Timing Strategies in the Current Cycle",
        "Negotiation Approaches with Developers",
        "Financing Optimization for New Launches",
        "Portfolio Integration of New Launch Properties",
      ],
    },
  ],
  highlights: [
    "Exclusive analysis of upcoming launch pipeline",
    "Comparative data on recent launch performance",
    "Interactive Q&A session with property expert",
    "Access to proprietary new launch evaluation tool",
    "Downloadable checklist for new launch assessment",
    "Virtual networking with fellow investors",
    "Post-webinar resources and reference materials",
  ],
  requirements: [
    "Basic understanding of property investment concepts",
    "Interest in new launch condominium investments",
    "No prior experience required",
  ],
  targetAudience: [
    "Property investors considering new launch condominiums",
    "Homebuyers exploring new launch options for own stay",
    "Existing property owners looking to diversify their portfolio",
    "Real estate professionals seeking market insights",
    "Anyone interested in understanding the new launch segment",
  ],
  reviews: [
    {
      name: "Jonathan Teo",
      rating: 5,
      date: "August 2023",
      comment:
        "This webinar provided exactly what I needed - clear, unbiased analysis of whether new launches still make sense in today's market. The case studies were particularly illuminating.",
    },
    {
      name: "Priya Singh",
      rating: 5,
      date: "July 2023",
      comment:
        "Melvin's framework for evaluating new launches is incredibly practical. I've applied it to several projects I was considering and it's helped me narrow down my choices significantly.",
    },
    {
      name: "Kenneth Loh",
      rating: 4,
      date: "July 2023",
      comment:
        "Great content and analysis. Would have appreciated more specific recommendations, but I understand the need to remain objective. The evaluation methodology is solid.",
    },
  ],
}
