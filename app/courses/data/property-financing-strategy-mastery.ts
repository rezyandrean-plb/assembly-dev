import type { CourseData } from "../components/course-detail-template"
// import { getFacilitator } from "@/app/data/facilitators"

// const melvin = getFacilitator("melvin-lim");

export const courseData: CourseData = {
  id: 8,
  title: "Property Financing Strategy Mastery",
  slug: "property-financing-strategy-mastery",
  level: "All Levels",
  duration: "To be determined",
  category: "Masterclass",
  price: "$1,899.00",
  image: "/property-financing-strategy-mastery.jpg",
  featured: true,
  tags: ["Masterclass", "Investing"],
  rating: 0,
  students: 0,
  instructors: [
    {
      name: "To be announced",
      image: "/images/instructors/placeholder.jpg",
    },
  ],
  lastUpdated: "22/06/2025",
  description: `This advanced masterclass is designed for property investors who understand that financing strategy is often the difference between average and exceptional returns. Through comprehensive modules covering everything from mortgage optimization to tax planning, you'll develop sophisticated financing strategies that can dramatically improve your investment performance.

Led by industry experts with backgrounds in banking, finance, and property investment, this course goes beyond basic mortgage concepts to explore advanced techniques used by professional investors. You'll learn how to structure loans for maximum leverage, optimize your debt portfolio across multiple properties, and implement tax-efficient investment strategies.

By the end of this masterclass, you'll have a comprehensive understanding of property financing and be able to implement sophisticated strategies that minimize costs, maximize returns, and accelerate your wealth building through property investment.`,
  whatYouWillLearn: [
    "Develop optimal financing strategies for different property types and investment goals",
    "Master mortgage selection and negotiation techniques to secure favorable terms",
    "Implement advanced refinancing strategies to accelerate equity growth",
    "Structure your property investments for tax efficiency",
    "Create sophisticated cash flow management systems for your property portfolio",
    "Develop risk management strategies for interest rate fluctuations and market changes",
  ],
  curriculum: [
    {
      title: "Module 1: Financing Fundamentals for Investors",
      lessons: [
        "Understanding the true cost of property financing",
        "Analyzing different mortgage products and their applications",
        "Calculating debt service ratios and borrowing capacity",
        "Developing a financing strategy aligned with investment goals",
      ],
    },
    {
      title: "Module 2: Advanced Mortgage Optimization",
      lessons: [
        "Fixed vs. floating rate strategies in different market cycles",
        "Loan tenure optimization for different property types",
        "Negotiating with banks for preferential rates and terms",
        "Leveraging mortgage broker relationships effectively",
      ],
    },
    {
      title: "Module 3: Portfolio Financing Strategies",
      lessons: [
        "Managing debt across multiple properties",
        "Cross-collateralization strategies and considerations",
        "Equity recycling techniques for portfolio expansion",
        "Optimizing loan-to-value ratios across your portfolio",
      ],
    },
    {
      title: "Module 4: Refinancing Mastery",
      lessons: [
        "Strategic timing of refinancing activities",
        "Cost-benefit analysis of refinancing options",
        "Leveraging home equity for investment purposes",
        "Refinancing case studies and optimization examples",
      ],
    },
    {
      title: "Module 5: Tax Planning for Property Investors",
      lessons: [
        "Understanding tax deductions for property investors",
        "Structuring investments for optimal tax outcomes",
        "Depreciation strategies and capital works deductions",
        "Tax implications of different ownership structures",
      ],
    },
    {
      title: "Module 6: Risk Management and Future Planning",
      lessons: [
        "Interest rate risk management strategies",
        "Insurance and liability protection for investors",
        "Planning for market downturns and financial stress",
        "Exit strategies and financing considerations",
      ],
    },
  ],
  highlights: [
    "Comprehensive financing strategy toolkit",
    "Real-world case studies and financial modeling",
    "Personalized financing strategy consultation",
    "Exclusive mortgage lender relationships and offers",
  ],
  requirements: [
    "Basic understanding of property investment concepts",
    "Familiarity with mortgage and loan terminology",
    "Calculator or spreadsheet software for financial exercises",
  ],
  targetAudience: [
    "Property investors with existing portfolios seeking optimization",
    "New investors wanting to start with optimal financing structures",
    "Property owners looking to refinance strategically",
    "Professionals in finance, banking, or real estate seeking specialized knowledge",
  ],
  reviews: [
    {
      name: "Daniel Koh",
      rating: 5,
      date: "April 25, 2025",
      comment:
        "This masterclass completely transformed my approach to property financing. The refinancing strategies alone saved me over $30,000 in interest costs across my portfolio.",
    },
    {
      name: "Sophia Tan",
      rating: 5,
      date: "March 30, 2025",
      comment:
        "As someone with a finance background, I was impressed by the depth and practical application of the content. The tax planning module was particularly valuable and offered strategies I hadn't considered.",
    },
    {
      name: "Marcus Lee",
      rating: 5,
      date: "February 15, 2025",
      comment:
        "Worth every penny! The personalized consultation helped me restructure my portfolio financing, resulting in improved cash flow and reduced risk exposure. Highly recommended for serious investors.",
    },
  ],
}
