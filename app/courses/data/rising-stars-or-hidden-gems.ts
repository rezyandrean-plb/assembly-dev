import type { CourseData } from "../components/course-detail-template"

export const courseData: CourseData = {
  id: 29,
  title: "Rising Stars or Hidden Gems?",
  slug: "rising-stars-or-hidden-gems",
  level: "All Levels",
  duration: "1 hour",
  category: "condo",
  price: "Free",
  image: "/rising-stars-or-hidden-gems.jpg", // Updated image path
  featured: true,
  tags: ["Condo", "Investment Opportunities", "Webinar"],
  rating: 4.9,
  students: 1050,
  instructors: [
    {
      name: "Melvin Lim",
      image: "/images/instructors/melvin-lim.png",
      bio: "Property Investment Expert with over 15 years of experience",
    },
    {
      name: "Ong Yu Rong",
      image: "/professional-headshot-ong-yu-rong.png",
      bio: "Investment Analyst specializing in real estate market trends",
    },
  ],
  lastUpdated: "November 2022",
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
    {
      name: "Serene Lim",
      rating: 5,
      date: "November 2022",
      comment:
        "Melvin and Yu Rong's insights into infrastructure developments and their impact on property values were invaluable. Their analysis goes much deeper than what you typically find in property seminars.",
    },
    {
      name: "Darren Chong",
      rating: 5,
      date: "November 2022",
      comment:
        "The case studies of past 'rising stars' were fascinating and provided concrete evidence of their methodology's effectiveness. I particularly appreciated the balanced discussion of risks and rewards.",
    },
  ],
}
