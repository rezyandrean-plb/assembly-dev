import type { CourseData } from "../components/course-detail-template"
import { getInstructors } from "@/app/data/instructors"

export const courseData: CourseData = {
  id: 6,
  title: "Property Summit 2024",
  slug: "property-summit-2024",
  level: "All Levels",
  duration: "2 days",
  category: "Event",
  price: "$399.00",
  image: "/property-summit-2024.jpg",
  featured: true,
  tags: ["Event", "Summit", "Market Trends"],
  rating: 4.8,
  students: 350,
  instructors: [
    ...getInstructors(["melvin-lim"]),
    {
      name: "Marc Chan",
      image: "/images/instructors/marc-chan.png",
    },
    {
      name: "Grayce Tan",
      image: "/images/instructors/grayce-tan.png",
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
      name: "Jesley Lim",
      image: "/images/instructors/jesley-lim.png",
    },
    {
      name: "George Peng",
      image: "/images/instructors/george-peng.png",
    },
    {
      name: "Wayne Tang",
      image: "/images/instructors/wayne-tang.png",
    },
    {
      name: "Joan Loh",
      image: "/images/instructors/joan-loh.png",
    },
  ],
  lastUpdated: "June 2024",
  description: `Join us for the premier property investment event of the year! The Property Summit 2024 brings together Singapore's top property experts, successful investors, and industry insiders for two days of intensive learning, networking, and strategy development.

This exclusive event will cover the latest market trends, investment strategies, and opportunities across all property segments in Singapore. From HDB to luxury condos, from landed properties to commercial real estate, our expert speakers will provide insights and actionable advice to help you make informed investment decisions.

Whether you're a beginner looking to make your first property purchase or an experienced investor seeking to optimize your portfolio, the Property Summit 2024 offers valuable content tailored to your needs. Don't miss this opportunity to learn from the best in the industry and connect with like-minded investors.`,
  whatYouWillLearn: [
    "Understand current property market trends and future projections",
    "Discover investment strategies for different property segments",
    "Learn how to identify high-potential properties in a competitive market",
    "Master financing techniques to optimize your investment returns",
    "Network with successful investors and industry professionals",
    "Develop a personalized action plan for your property investment journey",
  ],
  curriculum: [
    {
      title: "Day 1: Market Insights & Investment Strategies",
      lessons: [
        "Opening Keynote: Singapore Property Market Outlook 2024-2025",
        "Panel Discussion: Navigating Market Uncertainties",
        "Workshop: Property Selection Frameworks for Different Segments",
        "Expert Talk: Financing Strategies in a Rising Interest Rate Environment",
        "Panel Discussion: New Launch vs. Resale - Pros and Cons",
        "Networking Dinner with Speakers and Participants",
      ],
    },
    {
      title: "Day 2: Specialized Topics & Action Planning",
      lessons: [
        "Expert Talk: HDB Investment Strategies for 2024",
        "Workshop: Analyzing Condo Developments for Maximum ROI",
        "Panel Discussion: Landed Property Opportunities and Challenges",
        "Expert Talk: Commercial Property Investment for Beginners",
        "Workshop: Building Your Personal Investment Roadmap",
        "Closing Keynote: Future-Proofing Your Property Portfolio",
      ],
    },
  ],
  highlights: [
    "9 expert speakers with proven track records",
    "Interactive workshops and panel discussions",
    "Comprehensive event materials and resources",
    "Networking opportunities with industry professionals",
    "Exclusive post-event community access",
  ],
  requirements: ["No prior knowledge required - suitable for all levels", "Notebook for workshop activities"],
  targetAudience: [
    "First-time property buyers seeking guidance",
    "Current homeowners looking to upgrade or invest",
    "Experienced investors wanting to optimize their portfolio",
    "Property agents seeking to enhance their market knowledge",
    "Anyone interested in Singapore's property market",
  ],
  reviews: [
    {
      name: "Richard Tan",
      rating: 5,
      date: "July 15, 2023",
      comment:
        "Last year's summit was incredibly valuable. The insights I gained helped me make a property purchase that has already appreciated by 12%. Looking forward to this year's event!",
    },
    {
      name: "Linda Goh",
      rating: 5,
      date: "July 10, 2023",
      comment:
        "As a first-time attendee last year, I was impressed by the quality of speakers and the practical nature of the content. The networking opportunities alone were worth the ticket price.",
    },
    {
      name: "Kenneth Lim",
      rating: 4,
      date: "July 8, 2023",
      comment:
        "The 2023 summit provided excellent market insights and actionable strategies. The only reason for 4 stars instead of 5 is that some sessions were too crowded. Hope this is improved for 2024!",
    },
  ],
}
