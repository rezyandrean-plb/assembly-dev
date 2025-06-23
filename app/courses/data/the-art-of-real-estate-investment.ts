import type { CourseData } from "../components/course-detail-template"
import { getFacilitator } from "@/app/data/facilitators"

const melvin = getFacilitator("melvin-lim");
const yurong = getFacilitator("ong-yu-rong");

export const courseData: CourseData = {
  id: 25,
  title: "The Art of Real Estate Investment",
  slug: "the-art-of-real-estate-investment",
  level: "All Levels",
  duration: "1 hour 43 minutes",
  category: "Webinar",
  price: "Free",
  image: "/the-art-of-real-estate-investment.jpg",
  featured: true,
  tags: ["Condo", "Webinar"],
  rating: 0,
  students: 15,
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
    "Real estate investment is both a science and an art. While data analysis forms the foundation, successful investors also master the nuanced art of timing, negotiation, and strategic decision-making. This webinar explores the artistic elements of property investment that often separate good returns from exceptional ones. Join property experts Melvin Lim and Ong Yu Rong as they share insights gained from decades of experience navigating Singapore's complex property market.",
  whatYouWillLearn: [
    "Understand how to read market signals beyond the obvious data points",
    "Learn the art of property selection based on both tangible and intangible factors",
    "Master negotiation techniques that can significantly impact your investment returns",
    "Develop intuition for timing market entry and exit",
    "Learn how to identify emerging trends before they become mainstream",
    "Understand the psychology of different market participants",
    "Discover how to build relationships that create investment opportunities",
    "Learn how to balance analytical thinking with creative problem-solving in property investment",
  ],
  curriculum: [
    {
      title: "Beyond the Numbers: The Investor's Mindset",
      lessons: [
        "Developing an Investor's Eye for Property",
        "Balancing Analysis with Intuition",
        "Pattern Recognition in Market Movements",
        "Psychological Aspects of Investment Decision-Making",
        "Building Conviction in Your Investment Thesis",
      ],
    },
    {
      title: "The Art of Property Selection",
      lessons: [
        "Identifying Properties with 'X-Factor' Potential",
        "Evaluating Neighborhood Evolution Patterns",
        "Assessing Lifestyle Trends and Their Impact on Property Values",
        "Design Elements That Drive Premium Valuations",
        "Spotting the Diamond in the Rough",
      ],
    },
    {
      title: "Mastering Negotiation and Deal-Making",
      lessons: [
        "Understanding Seller Motivations and Leverage Points",
        "Creating Win-Win Scenarios in Negotiations",
        "Timing Your Offers for Maximum Impact",
        "Negotiation Tactics for Different Market Conditions",
        "Building Relationships with Agents and Sellers",
      ],
    },
    {
      title: "Strategic Timing and Portfolio Management",
      lessons: [
        "Reading Market Sentiment and Momentum",
        "Contrarian Investment Approaches",
        "Portfolio Construction for Different Market Phases",
        "Balancing Diversification with Conviction",
        "Creating Your Personal Investment Philosophy",
      ],
    },
  ],
  highlights: [
    "Real-world case studies of artistic investment decisions",
    "Interactive discussion with experienced investors",
    "Practical frameworks for developing investment intuition",
    "Access to exclusive market insights and observations",
    "Opportunity to learn from others' experiences and strategies",
    "Post-webinar resources for continued learning",
    "Certificate of participation",
  ],
  requirements: [
    "Basic understanding of property investment fundamentals",
    "Interest in developing advanced investment skills",
    "Open mindset to both analytical and intuitive approaches",
  ],
  targetAudience: [
    "Experienced property investors looking to refine their approach",
    "Analytical investors seeking to develop more intuitive skills",
    "Property owners wanting to make better decisions about their assets",
    "Real estate professionals looking to understand investor psychology",
    "Anyone interested in the more nuanced aspects of property investment",
  ],
  reviews: [
    {
      name: "Thomas Lee",
      rating: 5,
      date: "April 2023",
      comment:
        "This webinar offered a refreshing perspective on property investment. As someone who tends to get lost in the numbers, the insights on developing intuition were particularly valuable.",
    },
    {
      name: "Sophia Chen",
      rating: 5,
      date: "March 2023",
      comment:
        "Melvin and Yu Rong make an excellent team, bringing both analytical rigor and creative thinking to the discussion. The negotiation tactics alone were worth the time investment.",
    },
    {
      name: "Rajesh Kumar",
      rating: 4,
      date: "March 2023",
      comment:
        "Great content that goes beyond the typical investment advice. The case studies were illuminating and showed how subtle factors can significantly impact investment outcomes.",
    },
  ],
}
