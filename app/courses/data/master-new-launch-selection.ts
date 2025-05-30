import type { CourseData } from "../components/course-detail-template"
import { getInstructors } from "@/app/data/instructors"

export const courseData: CourseData = {
  id: 4,
  title: "Master New Launch Selection: 6 Exclusive Frameworks to Select the Winning New Launch in 2024/2025",
  slug: "master-new-launch-selection",
  level: "All Levels",
  duration: "12 hours",
  category: "Condo Investment",
  price: "$399.00",
  image: "/master-new-launch-selection.jpg",
  featured: true,
  tags: ["Condo", "Masterclass", "New Launch"],
  rating: 4.7,
  students: 120,
  instructors: [
    ...getInstructors(["melvin-lim"]),
    {
      name: "Marc Chan",
      image: "/images/instructors/marc-chan.png",
    },
    {
      name: "Ong Yu Rong",
      image: "/images/instructors/yu-rong.png",
    },
    {
      name: "Shawn Tay",
      image: "/images/instructors/shawn-tay.png",
    },
    {
      name: "George Peng",
      image: "/images/instructors/george-peng.png",
    },
    {
      name: "Jesley Lim",
      image: "/images/instructors/jesley-lim.png",
    },
  ],
  lastUpdated: "April 2025",
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
