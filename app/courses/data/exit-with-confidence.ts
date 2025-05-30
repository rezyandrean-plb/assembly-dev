import type { CourseData } from "../components/course-detail-template"

export const courseData: CourseData = {
  id: 26,
  title: "Exit with Confidence",
  slug: "exit-with-confidence",
  level: "All Levels",
  duration: "1 hour",
  category: "condo",
  price: "Free",
  image: "/exit-with-confidence.jpg",
  featured: false,
  tags: ["Condo", "Exit Strategy", "Webinar"],
  rating: 4.7,
  students: 850,
  instructors: [
    {
      name: "Melvin Lim",
      image: "/images/instructors/melvin-lim.png",
      bio: "Property Investment Expert with over 15 years of experience",
    },
    {
      name: "Marc Chan",
      image: "/marc-chan-headshot.png",
      bio: "Specialist in property exit strategies and market timing",
    },
  ],
  lastUpdated: "February 2023",
  description:
    "While much attention is given to property acquisition, successful investing ultimately depends on your exit strategy. This webinar focuses on the often-overlooked art of exiting property investments at the right time and in the right way to maximize returns. Property experts Melvin Lim and Marc Chan share their expertise on developing and executing exit strategies that protect your capital and optimize your gains in Singapore's competitive property market.",
  whatYouWillLearn: [
    "Understand the importance of planning your exit strategy before you invest",
    "Learn how to identify the optimal time to sell based on market cycles",
    "Develop frameworks for evaluating when to hold and when to sell",
    "Master techniques for maximizing your property's value before selling",
    "Understand tax optimization strategies for property exits",
    "Learn how to manage the emotional aspects of selling investments",
    "Discover strategies for reinvesting proceeds effectively",
    "Understand how to execute a smooth and profitable exit",
  ],
  curriculum: [
    {
      title: "Exit Strategy Fundamentals",
      lessons: [
        "Why Exit Strategy Matters from Day One",
        "Common Exit Strategy Mistakes to Avoid",
        "Types of Exit Strategies for Different Investment Goals",
        "Setting Clear Exit Criteria and Triggers",
        "Aligning Exit Strategies with Life Goals",
      ],
    },
    {
      title: "Market Timing and Exit Windows",
      lessons: [
        "Reading Market Cycles for Optimal Exits",
        "Identifying Peak Selling Opportunities",
        "Recognizing Early Warning Signs of Market Shifts",
        "Balancing Patience with Decisive Action",
        "Creating a Personal Market Monitoring System",
      ],
    },
    {
      title: "Value Maximization Before Exit",
      lessons: [
        "Strategic Renovations That Increase Sale Value",
        "Presentation and Staging for Maximum Impact",
        "Timing Renovations for ROI Optimization",
        "Working with Agents to Position Your Property",
        "Creating Compelling Narratives for Your Property",
      ],
    },
    {
      title: "Execution and Reinvestment",
      lessons: [
        "Tax Planning for Property Exits",
        "Managing the Sale Process Effectively",
        "Negotiation Strategies for Sellers",
        "Reinvestment Planning for Sale Proceeds",
        "Building a Long-term Exit and Reinvestment Cycle",
      ],
    },
  ],
  highlights: [
    "Real case studies of successful property exits",
    "Interactive Q&A with exit strategy experts",
    "Downloadable exit strategy planning toolkit",
    "Access to market timing indicators and resources",
    "Practical checklists for property preparation",
    "Post-webinar consultation opportunity",
    "Community of investors for support and networking",
  ],
  requirements: [
    "Basic understanding of property investment concepts",
    "Preferably current property owners or investors",
    "Interest in optimizing investment returns through strategic exits",
  ],
  targetAudience: [
    "Property investors considering selling in the near to medium term",
    "Long-term property holders evaluating their portfolio",
    "Investors who have never sold a property before",
    "Property owners unsure about when to exit their investments",
    "Investors looking to optimize their property portfolio",
    "Anyone interested in understanding property exit strategies",
  ],
  reviews: [
    {
      name: "Daniel Koh",
      rating: 5,
      date: "March 2023",
      comment:
        "This webinar completely changed my perspective on property investment. I've always focused on buying right but never gave enough thought to selling right. The framework provided is practical and actionable.",
    },
    {
      name: "Linda Teo",
      rating: 4,
      date: "February 2023",
      comment:
        "As someone considering selling my investment property this year, the timing couldn't be better. The section on value maximization gave me several ideas I hadn't considered.",
    },
    {
      name: "Richard Tan",
      rating: 5,
      date: "February 2023",
      comment:
        "Melvin and Marc make an excellent team, bringing both strategic thinking and practical execution advice. The case studies were particularly illuminating in showing how timing can significantly impact returns.",
    },
  ],
}
