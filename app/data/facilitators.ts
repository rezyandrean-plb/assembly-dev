export interface Facilitator {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  longBio: string;
  specialty: string;
  experience: string;
  courses: string[];
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
  stats?: {
    yearsExperience: number;
    studentsHelped: number;
    coursesCreated: number;
  };
}

export const facilitators: Facilitator[] = [
  {
    id: "melvin-lim",
    name: "Melvin Lim",
    role: "Lead Instructor & Founder",
    image:
      "https://www.propertylimbrothers.com/wp-content/uploads/2017/10/Melvin-Lim_Headshot_V2_900px.jpg",
    bio: "20+ years in property investment with a passion for teaching",
    longBio:
      "Melvin Lim, Co-Founder and CEO of PropertyLimBrothers, one of Singapore's most recognisable property brands. With over 1,800 homes sold, Melvin has built a reputation for excellence in Singapore's real estate scene. His success is rooted in media savvy marketing, data-driven strategy, and a deep commitment to integrity. Melvin brings a unique blend of thought leadership and practical insight to Assembly.",
    specialty: "Property Investment Strategy",
    experience: "20+ years in property investment",
    courses: [
      "Property Investment Masterclass",
      "New Launch Selection Strategies",
      "Property Portfolio Strategy Mastery",
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/melvin-lim",
      instagram: "https://instagram.com/melvinlim",
    },
    stats: {
      yearsExperience: 20,
      studentsHelped: 5000,
      coursesCreated: 15,
    },
  },
  {
    id: "marc-chan",
    name: "Marc Chan",
    role: "Senior Property Strategist",
    image: "/images/facilitators/marc-chan.jpg",
    bio: "Expert in market analysis and investment strategies",
    longBio:
      "Marc Chan is a seasoned property strategist with extensive experience in Singapore's real estate market. He specializes in market analysis, investment timing, and portfolio optimization. Marc's analytical approach and deep market insights have helped hundreds of investors make informed decisions in their property journey.",
    specialty: "Market Analysis & Investment Timing",
    experience: "15+ years in property analysis",
    courses: [
      "Market Trend Analysis",
      "Investment Timing Strategies",
      "Property Market Fundamentals",
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/marc-chan",
    },
    stats: {
      yearsExperience: 15,
      studentsHelped: 2500,
      coursesCreated: 8,
    },
  },
  {
    id: "ong-yu-rong",
    name: "Ong Yu Rong",
    role: "Property Finance Expert",
    image: "/images/facilitators/ong-yu-rong.jpg",
    bio: "Specialist in property financing and mortgage strategies",
    longBio:
      "Ong Yu Rong is a property finance expert with deep knowledge of Singapore's banking and mortgage landscape. He helps investors navigate complex financing structures, optimize loan packages, and maximize their purchasing power. His expertise in financial modeling and risk assessment has been invaluable to countless property investors.",
    specialty: "Property Financing & Mortgage Strategies",
    experience: "12+ years in property finance",
    courses: [
      "Property Financing Mastery",
      "Mortgage Optimization Strategies",
      "Financial Modeling for Property Investment",
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/ong-yu-rong",
    },
    stats: {
      yearsExperience: 12,
      studentsHelped: 1800,
      coursesCreated: 6,
    },
  },
  {
    id: "grayce-tan",
    name: "Grayce Tan",
    role: "New Launch Specialist",
    image: "/images/facilitators/grayce-tan.jpg",
    bio: "Expert in new launch properties and developer relations",
    longBio:
      "Grayce Tan is a new launch specialist with extensive experience in Singapore's new development market. She has strong relationships with major developers and deep insights into upcoming projects. Grayce's expertise helps investors identify the best new launch opportunities and navigate the complexities of off-plan purchases.",
    specialty: "New Launch Properties & Developer Relations",
    experience: "10+ years in new launch properties",
    courses: [
      "New Launch Selection Mastery",
      "Developer Analysis Workshop",
      "Off-plan Investment Strategies",
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/grayce-tan",
      instagram: "https://instagram.com/graycetan",
    },
    stats: {
      yearsExperience: 10,
      studentsHelped: 1500,
      coursesCreated: 5,
    },
  },
  {
    id: "george-peng",
    name: "George Peng",
    role: "Landed Property Expert",
    image: "/images/facilitators/george-peng.jpg",
    bio: "Specialist in landed properties and luxury real estate",
    longBio:
      "George Peng is a landed property expert with extensive experience in Singapore's luxury real estate market. He specializes in landed properties, including bungalows, semi-detached houses, and terrace houses. George's deep understanding of landed property dynamics and market trends makes him an invaluable resource for high-net-worth investors.",
    specialty: "Landed Properties & Luxury Real Estate",
    experience: "18+ years in luxury real estate",
    courses: [
      "Landed Property Investment Strategies",
      "Luxury Real Estate Mastery",
      "High-Value Property Analysis",
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/george-peng",
    },
    stats: {
      yearsExperience: 18,
      studentsHelped: 800,
      coursesCreated: 7,
    },
  },
  {
    id: "joan-loh",
    name: "Joan Loh",
    role: "HDB & Upgrading Specialist",
    image: "/images/facilitators/joan-loh.jpg",
    bio: "Expert in HDB properties and upgrading strategies",
    longBio:
      "Joan Loh is an HDB and upgrading specialist with comprehensive knowledge of Singapore's public housing system. She helps first-time buyers navigate HDB purchases and assists existing HDB owners in planning their upgrading journey to private properties. Joan's practical approach and deep understanding of housing policies make her an essential guide for many Singaporeans.",
    specialty: "HDB Properties & Upgrading Strategies",
    experience: "14+ years in HDB and upgrading",
    courses: [
      "HDB Investment Masterclass",
      "Upgrading Strategies Workshop",
      "First-time Buyer's Guide",
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/joan-loh",
    },
    stats: {
      yearsExperience: 14,
      studentsHelped: 3200,
      coursesCreated: 9,
    },
  },
];

// Helper functions
export function getFacilitator(id: string): Facilitator | undefined {
  return facilitators.find((facilitator) => facilitator.id === id);
}

export function getAllFacilitators(): Facilitator[] {
  return facilitators;
}

export function getFacilitatorsBySpecialty(specialty: string): Facilitator[] {
  return facilitators.filter((facilitator) =>
    facilitator.specialty.toLowerCase().includes(specialty.toLowerCase()),
  );
}
