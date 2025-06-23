import type { CourseData } from "../components/course-detail-template"
import { getFacilitator } from "@/app/data/facilitators"

const melvin = getFacilitator("melvin-lim");

export const courseData: CourseData = {
  id: 5,
  title: "Module 1 of Niche Positioning Masterclass",
  slug: "module-1-of-niche-positioning-masterclass",
  level: "Intermediate",
  duration: "3 hours 52 minutes",
  category: "Webinar",
  price: "$2,999.00",
  image: "/module-1-of-niche-positioning-masterclass.jpg",
  previewUrl: "https://youtu.be/GtI90K2o01w",
  featured: true,
  tags: ["Webinar"],
  rating: 0,
  students: 7,
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
  lastUpdated: "09/06/2025",
  description: `Module 1 of our exclusive Niche Positioning Masterclass is designed for serious property investors who want to develop specialized expertise in high-growth property niches. This foundational module will help you identify lucrative property niches and develop a strategic positioning that sets you apart from the average investor.

Led by Melvin Lim, one of Singapore's foremost property investment strategists, this intensive program combines theoretical frameworks with practical applications to help you develop a unique investment approach that targets underserved or emerging market segments.

This premium program is limited to a small group of participants to ensure personalized attention and high-quality interaction. By the end of Module 1, you'll have a clear understanding of niche positioning principles and be ready to apply them to your investment strategy.`,
  whatYouWillLearn: [
    "Identify profitable property niches with growth potential",
    "Develop a unique investment positioning that differentiates you from competitors",
    "Analyze market gaps and underserved segments",
    "Create a specialized knowledge base in your chosen niche",
    "Build a network of niche-specific contacts and resources",
    "Develop a strategic plan for establishing yourself in your chosen niche",
    "Apply niche positioning principles to your investment strategy",
    "Evaluate the competitive landscape in specialized property segments",
  ],
  curriculum: [
    {
      title: "Unit 1: Niche Positioning Fundamentals",
      lessons: [
        "Understanding the power of specialization in property investment",
        "The psychology of niche marketing and positioning",
        "Case studies of successful niche property investors",
        "Identifying your strengths and alignment with potential niches",
        "Workshop: Assessing your current positioning in the market",
      ],
    },
    {
      title: "Unit 2: Market Segmentation Analysis",
      lessons: [
        "Techniques for identifying market segments in property investment",
        "Analyzing demographic and psychographic factors",
        "Evaluating niche size and growth potential",
        "Assessing competition and market saturation",
        "Workshop: Conducting a market segment analysis",
      ],
    },
    {
      title: "Unit 3: Niche Opportunity Identification",
      lessons: [
        "Systematic approach to discovering untapped niches",
        "Trend analysis and future projection methodologies",
        "Evaluating niche profitability and sustainability",
        "Risk assessment for specialized investment strategies",
        "Workshop: Identifying three potential niches for your focus",
      ],
    },
    {
      title: "Unit 4: Specialized Knowledge Development",
      lessons: [
        "Creating a learning roadmap for your chosen niche",
        "Identifying key information sources and experts",
        "Building specialized analytical frameworks",
        "Developing niche-specific evaluation criteria",
        "Workshop: Creating your niche knowledge acquisition plan",
      ],
    },
    {
      title: "Unit 5: Strategic Positioning Development",
      lessons: [
        "Crafting your unique value proposition",
        "Developing your niche investment philosophy",
        "Creating a strategic plan for niche dominance",
        "Building your personal brand as a niche expert",
        "Workshop: Developing your niche positioning statement",
      ],
    },
    {
      title: "Unit 6: Implementation and Action Planning",
      lessons: [
        "Setting measurable goals for your niche positioning",
        "Creating a 90-day action plan",
        "Establishing key performance indicators",
        "Overcoming common obstacles in niche specialization",
        "Final project: Presenting your complete niche positioning strategy",
      ],
    },
  ],
  highlights: [
    "Personalized coaching from Melvin Lim",
    "Limited class size (maximum 15 participants) for maximum interaction",
    "Comprehensive niche analysis toolkit with proprietary frameworks",
    "Lifetime access to niche positioning resources and updates",
    "Exclusive networking opportunities with like-minded investors",
    "Certificate of completion recognized in the industry",
    "Post-course support and implementation guidance",
  ],
  requirements: [
    "Previous property investment experience (at least 1-2 properties)",
    "Strong commitment to developing specialized expertise",
    "Willingness to focus on a specific market segment",
    "Basic understanding of property investment principles",
    "Laptop with Microsoft Excel or Google Sheets for workshops",
  ],
  targetAudience: [
    "Experienced property investors looking to specialize",
    "Property agents wanting to develop a niche focus",
    "Property investment consultants seeking to differentiate their services",
    "Serious investors committed to long-term market positioning",
    "Business professionals planning to transition to property investment",
  ],
  reviews: [
    {
      name: "Jonathan Koh",
      rating: 5,
      date: "April 20, 2025",
      comment:
        "This masterclass completely transformed my approach to property investment. By focusing on a specific niche (freehold properties in mature estates), I've been able to develop expertise that gives me a significant edge over other investors. Melvin's guidance was invaluable in helping me identify and capitalize on this opportunity.",
    },
    {
      name: "Michelle Tan",
      rating: 5,
      date: "March 5, 2025",
      comment:
        "The personalized coaching from Melvin was worth every penny. He helped me identify a niche that perfectly aligned with my strengths and interests, and now I'm recognized as an expert in this segment. The frameworks and methodologies taught in this course are practical and immediately applicable.",
    },
    {
      name: "David Wong",
      rating: 4,
      date: "February 12, 2025",
      comment:
        "As a property agent, this course helped me differentiate myself in a crowded market. I now specialize in multi-generational homes, and my business has grown significantly as a result. The networking opportunities with other participants were also extremely valuable.",
    },
    {
      name: "Sarah Lim",
      rating: 5,
      date: "January 28, 2025",
      comment:
        "I was skeptical about the price at first, but this course delivered exceptional value. The small class size ensured that I received personalized attention, and the frameworks provided have helped me identify opportunities that I would have otherwise missed. Highly recommended for serious investors.",
    },
  ],
}
