import type { CourseData } from "../components/course-detail-template"
import { getFacilitator } from "@/app/data/facilitators"

const melvin = getFacilitator("melvin-lim");
const yurong = getFacilitator("ong-yu-rong");

export const courseData: CourseData = {
  id: 29,
  title: "Rising Stars or Hidden Gems?",
  slug: "rising-stars-or-hidden-gems",
  level: "All Levels",
  duration: "1 hour 1 minute",
  category: "Webinar",
  price: "Free",
  image: "/rising-stars-or-hidden-gems.jpg", // Updated image path
  featured: true,
  tags: ["Condo","Webinar"],
  rating: 0,
  students: 8,
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
    : [],
  lastUpdated: "10/09/2024",
  description:
    "In Singapore's mature property market, finding genuine opportunities requires looking beyond the obvious. This webinar explores emerging neighborhoods and overlooked property segments that may offer superior investment potential. Property experts Melvin Lim and Ong Yu Rong share their methodology for identifying 'rising stars' and 'hidden gems' in the market, helping you discover opportunities that others might miss.",
  whatYouWillLearn: [
    "Understand how to identify emerging neighborhoods before they become mainstream",
    "Learn to recognize the signs of an area poised for growth and appreciation",
    "Develop frameworks for evaluating overlooked property segments",
    "Understand the impact of infrastructure developments on property values",
    "Learn how to assess the risk-reward profile of emerging opportunities",
    "Discover strategies for early entry into promising areas",
    "Understand how demographic shifts create new property hotspots",
    "Learn to distinguish between temporary trends and fundamental shifts",
  ],
  curriculum: [
    {
      title: "Opportunity Identification Framework",
      lessons: [
        "Defining 'Rising Stars' and 'Hidden Gems'",
        "Indicators of Emerging Property Hotspots",
        "Common Misconceptions About Property Potential",
        "Risk Assessment for Non-Mainstream Investments",
        "Balancing Established Areas with Emerging Opportunities",
      ],
    },
    {
      title: "Neighborhood Analysis",
      lessons: [
        "Infrastructure Development Impact Analysis",
        "Commercial and Retail Growth Indicators",
        "School and Amenity Development Patterns",
        "Demographic Shift Identification",
        "Gentrification Patterns and Early Indicators",
      ],
    },
    {
      title: "Property Segment Opportunities",
      lessons: [
        "Overlooked Property Types with Potential",
        "Older Properties with Rejuvenation Potential",
        "Niche Market Segments and Their Appeal",
        "Identifying Undervalued Property Characteristics",
        "Future Lifestyle Trends and Their Property Implications",
      ],
    },
    {
      title: "Case Studies and Implementation",
      lessons: [
        "Success Stories: Past 'Rising Stars' Analysis",
        "Current Opportunities in Singapore's Market",
        "Due Diligence for Non-Mainstream Investments",
        "Entry and Exit Strategy Considerations",
        "Building a Portfolio with Both Stability and Growth Potential",
      ],
    },
  ],
  highlights: [
    "Exclusive analysis of emerging neighborhoods",
    "Proprietary methodology for opportunity identification",
    "Interactive maps of growth corridors and hotspots",
    "Case studies of successful 'hidden gem' investments",
    "Access to research on infrastructure development plans",
    "Q&A session with property experts",
    "Post-webinar resources and reference materials",
  ],
  requirements: [
    "Basic understanding of Singapore's property market",
    "Interest in property investment opportunities",
    "Open mindset to non-mainstream investment approaches",
  ],
  targetAudience: [
    "Property investors looking beyond prime districts",
    "First-time investors seeking value opportunities",
    "Experienced investors looking to diversify their portfolio",
    "Homebuyers open to emerging neighborhoods",
    "Property enthusiasts interested in market trends",
    "Anyone seeking to understand Singapore's evolving property landscape",
  ],
  reviews: [
    {
      name: "Jason Teo",
      rating: 5,
      date: "December 2022",
      comment:
        "This webinar opened my eyes to opportunities I hadn't considered. The framework for evaluating emerging areas is practical and has already helped me identify a few interesting prospects.",
    },
  ],
}
