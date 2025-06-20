import type { CourseData } from "../components/course-detail-template"
import { getFacilitator } from "@/app/data/facilitators"

const melvin = getFacilitator("melvin-lim");
const nicole = getFacilitator("nicole-ng");

export const courseData: CourseData = {
  id: 2,
  title: "Property Strategies in 2025 Amid Rate Cuts",
  slug: "property-strategies-in-2025-amid-rate-cuts",
  level: "Intermediate",
  duration: "2 hours 7 minutes",
  category: "real-estate",
  price: "Free",
  image: "/images/property-strategies-2025.jpg",
  featured: true,
  tags: ["Investment", "Market Trends", "Rate Cuts"],
  rating: 4.9,
  students: 112,
  instructors: melvin && nicole
    ? [
        {
          name: melvin.name,
          image: melvin.image,
          title: melvin.role,
          bio: melvin.bio,
        },
        {
          name: nicole.name,
          image: nicole.image,
          title: nicole.role,
          bio: nicole.bio,
        },
      ]
    : [],
  lastUpdated: "30 April 2025",
  description: `2025 Is Coming—Is Your Property Strategy Ready?\n\nThe property market is shifting—interest rates are falling, trends are evolving, and opportunities are opening up. But here's the challenge: without a clear plan, navigating these changes can feel overwhelming. Should you act now or wait for better deals? What's the most brilliant move in an unpredictable market?`,
  whatYouWillLearn: [
    "Understand how interest rate cuts impact property valuations and mortgage costs",
    "Identify emerging property hotspots in Singapore's 2025 market",
    "Develop timing strategies for property acquisition and divestment",
    "Optimize financing structures to leverage lower interest rates",
    "Implement risk management techniques for a changing market",
    "Create a personalized property investment roadmap for 2025-2030",
  ],
  curriculum: [
    {
      title: "Understanding the Current Market",
      lessons: [
        'Identifying the "Cross-Head Season" in the Market',
        "Adopting a Buyer's Perspective to Hunt for Value",
        "Analyzing Current Pricing Disparities (Resale vs New Launch)",
        "The Impact of Falling Interest Rates & FOMO on Appreciation",
      ],
    },
    {
      title: "Evaluating Property Opportunities Effectively",
      lessons: [
        "Going Beyond psf: Analyzing Quantum & Usable Space",
        "Considering Layouts and Legacy Features (RC/AC Ledges)",
        "Comparing Value Across Different Property Types (Condo, Landed, HDB)",
        "Examining psf Disparities and Opportunities in OCR, RCR, CCR",
      ],
    },
    {
      title: "Building Your Buy & Exit Strategy",
      lessons: [
        "Determining a Viable New Launch vs Resale Price Gap (Min $400k-$500k Gap)",
        "Using Transaction Volume to Identify Popular, Liquid Districts",
        "Analyzing Absorption Ratios to Assess Ease of Future Exit",
        "Evaluating Quantum & Exit Potential by Bedroom Type & Region",
        "Strategic Timing for Upsizing vs Downsizing",
      ],
    },
  ],
  highlights: [
    "Exclusive webinar with PropertyLimBrothers experts",
    "Real-time market data and analysis tools",
    "2025 Singapore property market forecast report",
    "Interactive property investment calculator",
  ],
  requirements: [
    "Basic understanding of property investment concepts",
    "Familiarity with mortgage and financing terms",
    "Interest in Singapore's property market",
  ],
  targetAudience: [
    "Current property investors looking to adapt to the changing market",
    "First-time investors seeking to enter the market at an opportune time",
    "Property agents wanting to advise clients on 2025 strategies",
    "Anyone interested in understanding how rate cuts affect property investments",
  ],
  reviews: [], // Empty reviews array for this course
}
