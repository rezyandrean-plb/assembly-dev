import type { CourseData } from "../components/course-detail-template"

export const courseData: CourseData = {
  id: 7,
  title: "Selling your Property Effectively as a DIY Property Seller",
  slug: "selling-your-property-effectively-as-a-diy-property-seller",
  level: "All Levels",
  duration: "10 hours",
  category: "Property Selling",
  price: "$399.00",
  image: "/selling-your-property-effectively-as-a-diy-property-seller.jpg",
  featured: false,
  tags: ["DIY Selling", "Property Marketing", "Negotiation"],
  rating: 4.7,
  students: 120,
  instructors: [
    {
      name: "TBD",
      image: "/professional-real-estate-agent.png",
    },
  ],
  lastUpdated: "April 2025",
  description: `This comprehensive course is designed for property owners who want to sell their properties without engaging an agent, saving thousands in commission fees while achieving the best possible price. Whether you're selling an HDB flat, condominium, or landed property, this course provides you with the knowledge, tools, and strategies to handle the entire selling process professionally and effectively.

You'll learn how to accurately value your property, create compelling listings, market effectively across multiple channels, conduct viewings that convert, and negotiate like a professional. The course includes templates, checklists, and step-by-step guides to simplify the process and ensure you don't miss any critical steps.

By the end of this course, you'll have the confidence and skills to sell your property independently, potentially saving tens of thousands in agent commissions while achieving a sale price that matches or exceeds market expectations.`,
  whatYouWillLearn: [
    "Accurately value your property using professional methods",
    "Create compelling property listings that attract qualified buyers",
    "Develop effective marketing strategies across multiple platforms",
    "Conduct professional viewings that highlight your property's strengths",
    "Master negotiation techniques to secure the best possible price",
    "Navigate the legal and administrative aspects of property transactions",
  ],
  curriculum: [
    {
      title: "Module 1: Property Valuation Fundamentals",
      lessons: [
        "Understanding market value vs. asking price",
        "Researching comparable properties and recent transactions",
        "Adjusting for property condition, improvements, and unique features",
        "Creating a comprehensive property valuation report",
      ],
    },
    {
      title: "Module 2: Preparing Your Property for Sale",
      lessons: [
        "Essential repairs and improvements with high ROI",
        "Staging techniques for different property types",
        "Professional photography and virtual tour creation",
        "Creating a compelling property story and unique selling points",
      ],
    },
    {
      title: "Module 3: Marketing Your Property Effectively",
      lessons: [
        "Creating listings that stand out on property portals",
        "Leveraging social media for property marketing",
        "Designing effective property brochures and materials",
        "Targeting and reaching your ideal buyer demographic",
      ],
    },
    {
      title: "Module 4: Conducting Professional Viewings",
      lessons: [
        "Preparing for viewings and open houses",
        "Creating viewing routes that showcase property strengths",
        "Addressing common buyer concerns and objections",
        "Following up effectively after viewings",
      ],
    },
    {
      title: "Module 5: Negotiation and Closing",
      lessons: [
        "Understanding buyer psychology and motivations",
        "Negotiation strategies for different market conditions",
        "Handling multiple offers and creating bidding situations",
        "Navigating the option process and closing procedures",
      ],
    },
  ],
  highlights: [
    "Complete DIY selling system with templates and checklists",
    "Professional property marketing materials and examples",
    "Legal document guides and explanations",
    "Post-course support and resources",
  ],
  requirements: [
    "Property ownership or intent to sell a property",
    "Basic computer skills for online marketing activities",
    "Smartphone or camera for property photography",
  ],
  targetAudience: [
    "Property owners looking to save on agent commissions",
    "Sellers who want more control over the selling process",
    "Individuals comfortable with direct buyer interactions",
    "Anyone interested in learning the property selling process",
  ],
  reviews: [
    {
      name: "Thomas Lim",
      rating: 5,
      date: "March 10, 2025",
      comment:
        "This course saved me over $20,000 in agent commissions! The valuation and marketing modules were particularly helpful, and I sold my condo for $30,000 above my initial expected price.",
    },
    {
      name: "Jasmine Tan",
      rating: 5,
      date: "February 15, 2025",
      comment:
        "As someone with no real estate background, I was nervous about selling my HDB flat myself. This course made the process straightforward and manageable. Sold within 3 weeks!",
    },
    {
      name: "Raymond Ng",
      rating: 4,
      date: "January 20, 2025",
      comment:
        "Comprehensive content and practical advice. The negotiation techniques alone were worth the course fee. Would have given 5 stars if there were more specific examples for landed properties.",
    },
  ],
}
