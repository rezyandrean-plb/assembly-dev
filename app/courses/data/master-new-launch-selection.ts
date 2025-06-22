import type { CourseData } from "../components/course-detail-template"
import { getFacilitator } from "@/app/data/facilitators"

const melvin = getFacilitator("melvin-lim");
const yurong = getFacilitator("ong-yu-rong");
const george = getFacilitator("george-peng");
const marc = getFacilitator("marc-chan");
const shawntay = getFacilitator("shawn-tay");
const jesley = getFacilitator("jesley-lim");

export const courseData: CourseData = {
  id: 4,
  title: "Master New Launch Selection: 6 Exclusive Frameworks to Select the Winning New Launch in 2024/2025",
  slug: "master-new-launch-selection",
  level: "All Levels",
  duration: "3 hours 55 minutes",
  category: "Condo",
  price: "$399.00",
  image: "/master-new-launch-selection.jpg",
  featured: true,
  tags: ["Condo"],
  rating: 0,
  students: 7,
  instructors: melvin && marc && yurong && george && shawntay && jesley
    ? [
        {
          name: melvin.name,
          image: melvin.image,
          title: melvin.role,
          bio: melvin.bio,
        },
        {
          name: marc.name,
          image: marc.image,
          title: marc.role,
          bio: marc.bio,
        },
        {
          name: yurong.name,
          image: yurong.image,
          title: yurong.role,
          bio: yurong.bio,
        },
        {
          name: shawntay.name,
          image: shawntay.image,
          title: shawntay.role,
          bio: shawntay.bio,
        },
        {
          name: jesley.name,
          image: jesley.image,
          title: jesley.role,
          bio: jesley.bio,
        },
        {
          name: george.name,
          image: george.image,
          title: george.role,
          bio: george.bio,
        },
      ]
    : [],
  lastUpdated: "20/06/2025",
  description: `This comprehensive masterclass is designed for property investors looking to make informed decisions when selecting new launch properties in Singapore. Through our 6 exclusive frameworks, you'll learn how to identify winning properties that align with your investment goals and maximize your returns.

Our team of expert instructors brings decades of combined experience in the Singapore property market, offering you insights that go beyond what's available to the general public. You'll learn how to analyze market trends, evaluate developer track records, assess location potential, and much more.

By the end of this masterclass, you'll have the confidence and knowledge to select new launch properties that have the highest potential for appreciation and rental yield.`,
  whatYouWillLearn: [
    "Apply 6 proven frameworks to evaluate new launch properties",
    "Identify key factors that drive property appreciation in different market segments",
    "Analyze developer track records and construction quality",
    "Evaluate location potential and future development plans",
    "Assess floor plans and unit layouts for optimal investment value",
    "Understand pricing strategies and negotiate effectively",
  ],
  curriculum: [
    {
      title: "Framework 1: Market Cycle Analysis",
      lessons: [
        "Understanding property market cycles in Singapore",
        "Identifying current market phase and implications",
        "Forecasting future market movements",
        "Adapting investment strategy to market conditions",
      ],
    },
    {
      title: "Framework 2: Developer Assessment",
      lessons: [
        "Evaluating developer track record and reputation",
        "Analyzing past project performance",
        "Understanding construction quality indicators",
        "Assessing financial stability of developers",
      ],
    },
    {
      title: "Framework 3: Location Potential Analysis",
      lessons: [
        "Identifying growth areas in Singapore",
        "Evaluating URA Master Plan implications",
        "Analyzing transportation connectivity",
        "Assessing amenities and lifestyle factors",
      ],
    },
    {
      title: "Framework 4: Project Concept Evaluation",
      lessons: [
        "Understanding project positioning and target market",
        "Evaluating architectural design and concept",
        "Analyzing facilities and common areas",
        "Assessing unique selling propositions",
      ],
    },
    {
      title: "Framework 5: Unit Selection Strategy",
      lessons: [
        "Analyzing floor plans and layouts",
        "Understanding stack positioning and views",
        "Evaluating unit facing and privacy",
        "Selecting units with highest appreciation potential",
      ],
    },
    {
      title: "Framework 6: Financial Analysis",
      lessons: [
        "Calculating total investment costs",
        "Projecting rental yields and cash flow",
        "Estimating capital appreciation potential",
        "Comparing against alternative investments",
      ],
    },
  ],
  highlights: [
    "Exclusive frameworks developed by top property investors",
    "Real case studies of successful new launch investments",
    "Interactive analysis sessions with expert instructors",
    "Comprehensive market data and research materials",
  ],
  requirements: [
    "Basic understanding of property investment concepts",
    "Calculator or spreadsheet software for financial calculations",
  ],
  targetAudience: [
    "First-time property investors looking to enter the new launch market",
    "Experienced investors seeking to refine their selection criteria",
    "Property agents wanting to provide better advice to clients",
    "Anyone interested in the Singapore new launch property market",
  ],
  reviews: [
    {
      name: "David Tan",
      rating: 5,
      date: "March 15, 2025",
      comment:
        "The frameworks taught in this masterclass helped me identify a gem in the OCR region that has already appreciated by 8% in just 6 months. Highly recommended!",
    },
    {
      name: "Sarah Lim",
      rating: 5,
      date: "February 28, 2025",
      comment:
        "As a first-time investor, I was overwhelmed by the new launch market. This course gave me the confidence to make my first purchase, and the instructors were incredibly helpful with my questions.",
    },
    {
      name: "Michael Wong",
      rating: 4,
      date: "January 10, 2025",
      comment:
        "Solid content and practical frameworks. I particularly appreciated the developer assessment framework which helped me avoid a potentially problematic investment.",
    },
  ],
}
