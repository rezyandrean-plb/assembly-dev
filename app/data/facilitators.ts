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
    whatsapp?: string;
    email?: string;
  };
  stats?: {
    coursesCreated: number;
  };
  // New field to control visibility on facilitators page
  showOnFacilitatorsPage?: boolean;
}

export const facilitators: Facilitator[] = [
  {
    id: "melvin-lim",
    name: "Melvin Lim",
    role: "CEO/Founder of PropertyLimBrothers",
    image: "https://www.propertylimbrothers.com/wp-content/uploads/2017/10/Melvin-Lim_Headshot_V2_900px.jpg",
    bio: "Melvin Lim is the Founder and CEO of Assembly.",
    longBio: "Melvin Lim is the Founder and CEO of Assembly. Having majored in banking and finance, his knack of crunching numbers is key to analysing the value of each property for his clients. Incorporating that with his passion for content and digital marketing, it paved the way for what PropertyLimBrothers have become today.",
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
      whatsapp: "wa.me/6590676710",
    },
    stats: {
      coursesCreated: 15,
    },
    showOnFacilitatorsPage: true,
  },
  {
    id: "adrian-lim",
    name: "Adrian Lim",
    role: "Co-founder & Managing Director, PropertyLimBrothers",
    image: "https://plb-integrity1-media.propertylimbrothers.com/wp-content/uploads/2022/09/29080058/AdrianLim_new_9x9.jpg",
    bio: "Co-founder and Managing Director of PropertyLimBrothers",
    longBio: "Adrian Lim is the Co-founder and Managing Director of PropertyLimBrothers, bringing strategic leadership and operational excellence to the organization.",
    specialty: "Strategic Leadership & Operations",
    experience: "15+ years in property and business management",
    courses: [
      "Strategic Property Investment",
      "Business Development in Real Estate",
    ],
    socialLinks: {
      instagram: "https://www.instagram.com/adrian_propertylimbrothers/",
      whatsapp: "wa.me/6581832333",
    },
    stats: {
      coursesCreated: 3,
    },
    showOnFacilitatorsPage: false,
  },
  {
    id: "marc-chan",
    name: "Marc Chan",
    role: "VP of Operations",
    image: "https://www.propertylimbrothers.com/wp-content/uploads/2017/11/Marc-Headshot_900px_Prof.jpg",
    bio: "Being an ex-entrepreneur and business owner, Marc brings with him a wealth of entrepreneurial insights",
    longBio: "Being an ex-entrepreneur and business owner, Marc brings with him a wealth of entrepreneurial insights, as well as experience in crafting creative marketing strategies for his clients' properties. As a property investor himself, he brings vision and acumen, as well as first-hand experience to his clients' property planning and investment journey.",
    specialty: "Market Analysis & Investment Timing",
    experience: "15+ years in property analysis",
    courses: [
      "Market Trend Analysis",
      "Investment Timing Strategies",
      "Property Market Fundamentals",
    ],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/marcchanjy/",
      instagram: "https://www.instagram.com/marc_propertylimbrothers",
      whatsapp: "wa.me/6591876797",
    },
    stats: {
      coursesCreated: 8,
    },
    showOnFacilitatorsPage: true,
  },
  {
    id: "george-peng",
    name: "George Peng",
    role: "Associate Senior Investment Director",
    image: "https://www.propertylimbrothers.com/wp-content/uploads/2018/07/George-Headshot_900px.jpg",
    bio: "Prior to real estate, George enjoyed a fast-paced career in the offshore marine industry",
    longBio: "Prior to real estate, George enjoyed a fast-paced career in the offshore marine industry. While the tasks are different, the responsibilities are similar — solving problems, meeting deadlines, ensuring that clients' needs are met. The major difference, and pull factor, is the ability to offer sound, unbiased real estate advice to his clients and gain their trust and appreciation.",
    specialty: "Landed Properties & Luxury Real Estate",
    experience: "18+ years in luxury real estate",
    courses: [
      "Landed Property Investment Strategies",
      "Luxury Real Estate Mastery",
      "High-Value Property Analysis",
    ],
    socialLinks: {
      instagram: "https://www.instagram.com/Commandong",
      whatsapp: "wa.me/6584819588",
    },
    stats: {
      coursesCreated: 7,
    },
    showOnFacilitatorsPage: true,
  },
  {
    id: "ong-yu-rong",
    name: "Ong Yu Rong",
    role: "Associate Senior Investment Director",
    image: "https://www.propertylimbrothers.com/wp-content/uploads/2018/07/Yu-Rong-Headshot_900px_Prof.jpg",
    bio: "Yu Rong, the Listing & Investment Consultant of PropertyLimBrothers Team, is no stranger to the real estate industry",
    longBio: "Yu Rong, the Listing & Investment Consultant of PropertyLimBrothers Team, is no stranger to the real estate industry. Over the last decade, he has helped his clients amass a profitable property portfolio. With an unwavering passion for investment planning and financial literacy, Yu Rong has individually transacted over 250 properties and consistently achieved Top Performer in the industry.",
    specialty: "Property Financing & Mortgage Strategies",
    experience: "12+ years in property finance",
    courses: [
      "Property Financing Mastery",
      "Mortgage Optimization Strategies",
      "Financial Modeling for Property Investment",
    ],
    socialLinks: {
      email: "yurong.ong@propertylimbrothers.com",
      whatsapp: "wa.me/6586140388",
    },
    stats: {
      coursesCreated: 6,
    },
    showOnFacilitatorsPage: true,
  },
  {
    id: "grayce-tan",
    name: "Grayce Tan",
    role: "VP of Strategy, Associate Consultant",
    image: "https://www.propertylimbrothers.com/wp-content/uploads/2017/11/Grayce-Headshot_900px.jpg",
    bio: "Grayce hails from a background of a varying passions, grounded in an insatiable curiosity for people",
    longBio: "Grayce hails from a background of a varying passions, grounded in an insatiable curiosity for people. Her worldview is informed by her pursuit of knowledge in the fields of Sociology, Educational Pedagogy and Real Estate Investment, anchored through her life experiences.",
    specialty: "New Launch Properties & Developer Relations",
    experience: "10+ years in new launch properties",
    courses: [
      "New Launch Selection Mastery",
      "Developer Analysis Workshop",
      "Off-plan Investment Strategies",
    ],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/grayce-tan/",
      instagram: "https://www.instagram.com/babygrayce",
      whatsapp: "wa.me/6597404788",
    },
    stats: {
      coursesCreated: 5,
    },
    showOnFacilitatorsPage: true,
  },
  {
    id: "joan-loh",
    name: "Joan Loh",
    role: "Associate Consultant",
    image: "https://plb-integrity1-media.propertylimbrothers.com/wp-content/uploads/2022/11/13035229/Joan1.jpg",
    bio: "Joan began her career in policy development and digital transformation",
    longBio: "Joan began her career in policy development and digital transformation, and in a similar vein, her property advice is built on foresight, empathy, genuine relationships, and prioritising her clients' needs above all else.",
    specialty: "HDB Properties & Upgrading Strategies",
    experience: "14+ years in HDB and upgrading",
    courses: [
      "HDB Investment Masterclass",
      "Upgrading Strategies Workshop",
      "First-time Buyer's Guide",
    ],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/joan-loh-389846184/",
      instagram: "https://www.instagram.com/joanlohh",
      whatsapp: "wa.me/6590463988",
    },
    stats: {
      coursesCreated: 9,
    },
    showOnFacilitatorsPage: true,
  },
  {
    id: "wayne-tang",
    name: "Wayne Tang",
    role: "VP of Sales Development & Performance Coach",
    image: "https://www.propertylimbrothers.com/wp-content/uploads/2017/11/Wayne-Headshot_900px.jpg",
    bio: "Wayne is a service-oriented, seasoned product storyteller with more than a decade of marketing experience",
    longBio: "Wayne is a service-oriented, seasoned product storyteller with more than a decade of marketing experience in the consumer electronics industry. With this edge, he leverages on the similarities with real estate, finding unique angles for his clients' homes. His keen attention to detail and forthcoming nature makes him a valuable addition to our team.",
    specialty: "Sales Development & Performance Coaching",
    experience: "12+ years in sales and marketing",
    courses: [
      "Sales Development Mastery",
      "Performance Coaching Workshop",
      "Real Estate Marketing Strategies",
    ],
    socialLinks: {
      instagram: "https://www.instagram.com/iamwaynetang/",
      whatsapp: "wa.me/6598476588",
    },
    stats: {
      coursesCreated: 4,
    },
    showOnFacilitatorsPage: false,
  },
  {
    id: "alan-koh",
    name: "Alan Koh",
    role: "Associate Senior Investment Consultant",
    image: "https://www.propertylimbrothers.com/wp-content/uploads/2018/07/Alan-Headshot_900px.jpg",
    bio: "A high-touch real estate agent with extensive market knowledge and unmatched dedication",
    longBio: "A high-touch real estate agent with extensive market knowledge and unmatched dedication, Alan is known to be information ready in most situations, and to offer quick responses to all queries and requirements. He is sales-driven and service-oriented, and often goes above and beyond his duties to meet his clients' needs.",
    specialty: "High-Touch Real Estate Services",
    experience: "8+ years in real estate",
    courses: [
      "Client Relationship Management",
      "Real Estate Consultation Excellence",
    ],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/alan-koh-ba1553188/",
      instagram: "https://www.instagram.com/alankoh_propertylimbrothers/",
      whatsapp: "wa.me/6586867302",
    },
    stats: {
      coursesCreated: 2,
    },
    showOnFacilitatorsPage: false,
  },
  {
    id: "christina-tan",
    name: "Christina Tan",
    role: "Associate Senior Investment Consultant",
    image: "https://www.propertylimbrothers.com/wp-content/uploads/2018/07/Alan-Headshot_900px.jpg", // Note: Same image as Alan Koh - needs update
    bio: "What's clearly noticeable about Christina is her bright and positive disposition and unwavering enthusiasm",
    longBio: "What's clearly noticeable about Christina is her bright and positive disposition and unwavering enthusiasm in getting the job done well. She is a valuable team player who contributes cheerfully to her clients' and team's needs without hesitation. Coming from a sales background, she naturally takes initiative and is determined, handling all her clients with confidence and capability.",
    specialty: "Sales Excellence & Client Relations",
    experience: "6+ years in sales and real estate",
    courses: [
      "Sales Excellence Workshop",
      "Client Relationship Building",
    ],
    socialLinks: {
      instagram: "https://www.instagram.com/christina_propertylimbrothers/",
      whatsapp: "wa.me/6586999440",
    },
    stats: {
      coursesCreated: 2,
    },
    showOnFacilitatorsPage: false,
  },
  {
    id: "eunice-lam",
    name: "Eunice Lam",
    role: "Associate Senior Investment Consultant",
    image: "https://www.propertylimbrothers.com/wp-content/uploads/2018/08/Eunice-Headshot_900px.jpg",
    bio: "Hailing from a background of automotive production Eunice has developed strong capabilities in negotiation and coordination",
    longBio: "Hailing from a background of automotive production Eunice has developed strong capabilities in negotiation and coordination, which she now applies purposefully to achieving her clients' real estate objectives. Her passion and dedication is apparent in the way she strives to exceed her clients' expectations by going the extra mile in every aspect of her role.",
    specialty: "Negotiation & Coordination",
    experience: "7+ years in real estate",
    courses: [
      "Negotiation Mastery",
      "Real Estate Coordination Excellence",
    ],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/eunice-lam-628744233/",
      instagram: "https://www.instagram.com/eunice_propertylimbrothers/",
      whatsapp: "wa.me/6596879322",
    },
    stats: {
      coursesCreated: 2,
    },
    showOnFacilitatorsPage: false,
  },
  {
    id: "kevin-lim",
    name: "Kevin Lim",
    role: "Associate Senior Investment Consultant",
    image: "https://www.propertylimbrothers.com/wp-content/uploads/2018/08/Kevin-Headshot_900px-V2.jpg",
    bio: "A former banker with over a decade of experience in Citibank, DBS Bank, UOB and Standard Chartered",
    longBio: "A former banker with over a decade of experience in Citibank, DBS Bank, UOB and Standard Chartered, Kevin took a natural transition into the real estate industry leveraging on his background in finance. He offers a solid consultancy for his clients combining fresh market perspectives and holistic financial planning.",
    specialty: "Financial Planning & Banking Expertise",
    experience: "15+ years in banking and finance",
    courses: [
      "Financial Planning for Property Investment",
      "Banking Strategies for Real Estate",
    ],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/kevin-lim-93586055/?originalSubdomain=sg",
      instagram: "https://www.instagram.com/kevin_limwl",
      whatsapp: "wa.me/6597458614",
    },
    stats: {
      coursesCreated: 3,
    },
    showOnFacilitatorsPage: false,
  },
  {
    id: "sebastian-lau",
    name: "Sebastian Lau",
    role: "Associate Consultant",
    image: "https://www.propertylimbrothers.com/wp-content/uploads/2019/09/Sebastian-Headshot_900px.jpg",
    bio: "Sebastian, an Analytical and a problem-solver from the PropertyLimBrothers Team.",
    longBio: "Sebastian, our Listing Specialist from the PropertyLimBrothers Team. He brings an array of experiences ranging from Aerospace engineering during his time in the Republic of Singapore Airforce to Risk Management solutions in the insurance industry. Analytical and a problem-solver, he has adapted his skill sets to assist potential homeowners and investors to make an informed and prepared decision through in-depth analytics and thorough research.",
    specialty: "Property Investment and Development",
    experience: "10+ years in real estate",
    courses: [
      "Live Debate - Choosing Your Path in Singapore Property: BTO vs Resale HDB",
    ],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/sebastianlgs/",
      instagram: "https://www.instagram.com/chapstick__/#",
      whatsapp: "wa.me/6590927388",
    },
    stats: {
      coursesCreated: 1,
    },
    showOnFacilitatorsPage: false,
  },
  {
    id: "lyndon-leong",
    name: "Lyndon Leong",
    role: "Associate Consultant",
    image: "https://www.propertylimbrothers.com/wp-content/uploads/2020/04/Lyndon-Headshot_900px.jpg",
    bio: "Knowing how important a home or the journey is, Lyndon always takes pride in putting himself in his clients’ shoes.",
    longBio: "Having worked personally with clients for 8 years, everything has been very personal for him in his line of work, from Funeral Director to Real Estate. Knowing how important a home or the journey is, Lyndon always takes pride in putting himself in his clients’ shoes, treating each sale, purchase, or rental as if it were his own or for his family members’. With the pressure of such a significant move, he meticulously makes sure that everything goes off smoothly and problem-solves should the need arise. More importantly, he sees each experience not as a transaction but as a relationship with his extended family.",
    specialty: "Property Investment and Development",
    experience: "10+ years in real estate",
    courses: [
      "Live Debate - Choosing Your Path in Singapore Property: BTO vs Resale HDB",
    ],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/lyndon-leong-282b00113/",
      instagram: "https://www.instagram.com/llyynnddoonn/",
      whatsapp: "wa.me/6590994688",
    },
    stats: {
      coursesCreated: 1,
    },
    showOnFacilitatorsPage: false,
  },
  {
    id: "shawn-tay",
    name: "Shawn Tay",
    role: "Associate Senior Consultant",
    image: "https://www.propertylimbrothers.com/wp-content/uploads/2018/09/Shawn-Tay-Headshot_900px.jpg",
    bio: "Knowing how important a home or the journey is, Lyndon always takes pride in putting himself in his clients’ shoes.",
    longBio: "Being one of the youngest in the team, Shawn draws inspiration from his teammates’ commitment and drive, as well as his own observation of the human emotions behind his clients’ real estate decision drivers. Naturally empathetic, his strength lies in his ability to put himself in the clients’ shoes, and understand their motivations so as to act in their best interest.",
    specialty: "Property Investment and Development",
    experience: "10+ years in real estate",
    courses: [
      "Live Debate - Choosing Your Path in Singapore Property: Condo vs Landed",
    ],
    socialLinks: {
      instagram: "https://www.instagram.com/peoplecallmeshawnie/",
      whatsapp: "wa.me/6583823988",
    },
    stats: {
      coursesCreated: 1,
    },
    showOnFacilitatorsPage: false,
  },
  {
    id: "gavin-chan",
    name: "Gavin Chan",
    role: "Nil",
    image: "",
    bio: "",
    longBio: "",
    specialty: "Property Investment and Development",
    experience: "10+ years in real estate",
    courses: [
      "Live Debate - Choosing Your Path in Singapore Property: Condo vs Landed",
    ],
    socialLinks: {
      instagram: "",
      whatsapp: "",
    },
    stats: {
      coursesCreated: 1,
    },
    showOnFacilitatorsPage: false,
  },
  {
    id: "beatrice-lim",
    name: "Beatrice Lim",
    role: "Nil",
    image: "",
    bio: "",
    longBio: "",
    specialty: "Property Investment and Development",
    experience: "10+ years in real estate",
    courses: [
      "2024 Market Trends & Strategies for Landed Properties",
    ],
    socialLinks: {
      instagram: "",
      whatsapp: "",
    },
    stats: {
      coursesCreated: 1,
    },
    showOnFacilitatorsPage: false,
  },
  {
    id: "jesley-lim",
    name: "Jesley Lim",
    role: "Associate Senior Consultant",
    image: "https://plb-integrity1-media.propertylimbrothers.com/wp-content/uploads/2022/11/13035201/Jesley1.jpg",
    bio: "A familiar name and voice to all our new enquiries, Jesley’s cheerful and friendly personality puts even the most worried clients at ease.",
    longBio: "A familiar name and voice to all our new enquiries, Jesley’s cheerful and friendly personality puts even the most worried clients at ease. A sincere and listening ear proven from her tutoring and merchandising experience, her knack for numbers continues to help PropertyLimBrothers’s Inside Sales Team.",
    specialty: "Property Investment and Development",
    experience: "10+ years in real estate",
    courses: [
      "Property Summit 2024",
    ],
    socialLinks: {
      instagram: "https://www.instagram.com/jesleylyl/",
      whatsapp: "wa.me/6590992488",
    },
    stats: {
      coursesCreated: 1,
    },
    showOnFacilitatorsPage: false,
  },
  {
    id: "nicole-ng",
    name: "Nicole Ng",
    role: "Associate Consultant",
    image: "https://www.propertylimbrothers.com/wp-content/uploads/2019/11/Nicole-Headshot_900px-V2.jpg",
    bio: "Nicole Ng comes with years of experience in the advertising industry, specialisting in account management, which is entirely relevant in client servicing for property.",
    longBio: "Nicole Ng, our Listing Executive in our PropertyLimBrothers Team. She comes with years of experience in the advertising industry, specialisting in account management, which is entirely relevant in client servicing for property. She believes in the importance of a dwelling, and now answers the calling to bring the right homes to the right folk.",
    specialty: "Property Investment and Development",
    experience: "10+ years in real estate",
    courses: [
      "Property Strategies in 2025 Amid Rate Cuts",
    ],
    socialLinks: {
      instagram: "https://www.instagram.com/nicolewookieng/",
      whatsapp: "wa.me/6597404988",
    },
    stats: {
      coursesCreated: 1,
    },
    showOnFacilitatorsPage: false,
  },
  {
    id: "phyllis-goh",
    name: "Phyllis Goh",
    role: "Associate Consultant",
    image: "https://www.propertylimbrothers.com/wp-content/uploads/2020/04/Phyllis-Headshot_900px.jpg",
    bio: "Phyllis is adept at analysing property market movements and portfolio asset planning.",
    longBio: "Having studied real estate and urban planning as her minor in university, Phyllis is adept at analysing property market movements and portfolio asset planning. While she is currently the youngest member in the team, her warm and empathetic disposition allows her to connect with both the younger and older generation alike.",
    specialty: "Property Investment and Development",
    experience: "10+ years in real estate",
    courses: [
      "Entry Price Analysis for 5 Upcoming New Launches",
    ],
    socialLinks: {
      instagram: "https://www.instagram.com/pygmyllis",
      whatsapp: "wa.me/6590926788",
    },
    stats: {
      coursesCreated: 1,
    },
    showOnFacilitatorsPage: false,
  },
  {
    id: "lee-jun-wei",
    name: "Lee Jun Wei",
    role: "Associate Senior Consultant",
    image: "https://plb-integrity1-media.propertylimbrothers.com/wp-content/uploads/2022/11/13035219/Junwei1.jpg",
    bio: "Jun Wei has a pleasant disposition, and is highly competent in communication and interpersonal skills, contributing to positive client experiences.",
    longBio: "Having specialised in Hotel Management for Luxury hotels, Jun Wei has an eye for detail and is an excellent team player. Jun Wei often goes beyond what is required of him to proactively help clients/ guests, for an above and beyond experience; just like how it is when he was a hotelier. He has a pleasant disposition, and is highly competent in communication and interpersonal skills, contributing to positive client experiences. The fusion of these qualities have honed Jun Wei into a people-centric, focused on the details, enabling him to handle situations that arise and look out for clients the finer details in a property transaction.",
    specialty: "Property Investment and Development",
    experience: "10+ years in real estate",
    courses: [
      "Live Debate - Resale HDB VS Resale Condo",
    ],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/jun-wei-lee/",
      instagram: "https://www.instagram.com/junweifaber",
      whatsapp: "wa.me/6596852588",
    },
    stats: {
      coursesCreated: 1,
    },
    showOnFacilitatorsPage: false,
  },
  {
    id: "ramzi-razak",
    name: "Ramzi Razak",
    role: "Associate Consultant",
    image: "https://www.propertylimbrothers.com/wp-content/uploads/2019/10/Ramzi-Headshot_900px.jpg",
    bio: "Compassionate by nature, Ramzi is driven by his belief in helping others with sincerity and integrity.",
    longBio: "Compassionate by nature, Ramzi is driven by his belief in helping others with sincerity and integrity. A hardworking yet down-to-earth individual, his strong work ethics coupled with his ability to truly listen to what clients need allows Ramzi to connect them seamlessly to the property sphere. Ramzi aims to share his knowledge and insights to value-add to others, building meaningful relationships and enriching his clients’ real estate journeys.",
    specialty: "Property Investment and Development",
    experience: "10+ years in real estate",
    courses: [
      "Live Debate - Resale HDB VS Resale Condo",
    ],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/ramzirazak/",
      instagram: "https://www.instagram.com/rams_plb",
      whatsapp: "wa.me/6597413188",
    },
    stats: {
      coursesCreated: 1,
    },
    showOnFacilitatorsPage: false,
  },
  {
    id: "loong-yanyan",
    name: "Loong Yanyan",
    role: "Associate Consultant",
    image: "https://www.propertylimbrothers.com/wp-content/uploads/2019/10/Yanyan-Headshot_900px_Prof.jpg",
    bio: "No matter the task, Yanyan believes in providing the utmost honest and genuine service.",
    longBio: "Having co-founded a small events company back in 2016, she carries with her that same resilience, entrepreneurial spirit, and growth mindset as strengths for her real estate career. No matter the task, Yanyan believes in providing the utmost honest and genuine service. With her dedicated personality complemented by her vibrant and cheerful demeanour, she has won the hearts of the people whom she has worked with. Yanyan hopes to be invaluable to all her clients, from those seeking a great investment to a new family in search of their dream home.",
    specialty: "Property Investment and Development",
    experience: "10+ years in real estate",
    courses: [
      "Live Debate - Resale HDB VS Resale Condo",
    ],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/loongyanyan/",
      whatsapp: "wa.me/6597419288",
    },
    stats: {
      coursesCreated: 1,
    },
    showOnFacilitatorsPage: false,
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

// New function to get only facilitators that should be shown on the facilitators page
export function getFacilitatorsForPage(): Facilitator[] {
  return facilitators.filter((facilitator) => facilitator.showOnFacilitatorsPage !== false);
}
