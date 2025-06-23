import type { CourseData } from "../components/course-detail-template"
import { getFacilitator } from "@/app/data/facilitators"

const yurong = getFacilitator("ong-yu-rong");
const george = getFacilitator("george-peng");
const marc = getFacilitator("marc-chan");
const shawntay = getFacilitator("shawn-tay");
const jesley = getFacilitator("jesley-lim");

export const courseData = {
  id: 4002,
  title: "New Launch Condo Selection Strategies",
  slug: "new-launch-condo-selection-strategies",
  level: "All Levels",
  duration: "1 hour 56 minutes",
  category: "Webinar",
  price: "Free",
  image: "/new-launch-condo-selection-strategies.jpg",
  featured: false,
  tags: ["Webinar", "Condo"],
  rating: 0,
  students: 29,
  instructors: marc && yurong && george && shawntay && jesley
    ? [
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
  lastUpdated: "09/01/2025",
  description: "Discover the best strategies for selecting a new launch condo in Singapore.",
  whatYouWillLearn: ["Condo selection", "New launch analysis", "Investment tips"],
  curriculum: [
    { title: "Selection Strategies", lessons: ["What to look for", "Case studies"] }
  ],
  highlights: ["Expert frameworks", "Real-world examples"],
  requirements: ["Interest in property investment"],
  targetAudience: ["Investors", "Homebuyers"],
  reviews: [],
}; 