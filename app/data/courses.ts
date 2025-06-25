// This file centralizes course data to ensure consistency across the application

// Import all individual course data files
import { courseData as propertyStrategies2025 } from "@/app/courses/data/property-strategies-in-2025-amid-rate-cuts";
import { courseData as condoInvestmentWorkshop } from "@/app/courses/data/condo-investment-workshop";
import { courseData as masterNewLaunchSelection } from "@/app/courses/data/master-new-launch-selection";
import { courseData as nichePositioningMasterclass } from "@/app/courses/data/module-1-of-niche-positioning-masterclass";
import { courseData as propertySummit2024 } from "@/app/courses/data/property-summit-2024";
import { courseData as sellingPropertyDIY } from "@/app/courses/data/selling-your-property-effectively-as-a-diy-property-seller";
import { courseData as propertyFinancingStrategy } from "@/app/courses/data/property-financing-strategy-mastery";
import { courseData as landedBuyerInvesting } from "@/app/courses/data/landed-buyer-investing";
import { courseData as makingTheRightMove } from "@/app/courses/data/making-the-right-move";
import { courseData as exitWithConfidence } from "@/app/courses/data/exit-with-confidence";
import { courseData as freeholdPropertyStrategy } from "@/app/courses/data/freehold-property-investment-strategy";

import { courseData as hdbUpgraders101 } from "@/app/courses/data/hdb-upgraders-101-secrets-to-upgrading-from-a-hdb-to-a-condo";
import { courseData as landedOverpriced2024 } from "@/app/courses/data/are-landed-properties-overpriced-in-2024-should-we-wait-for-2025-to-enter-or-is-now-the-best-time";
import { courseData as analyticalFactors7 } from "@/app/courses/data/7-analytical-factors-for-safe-new-launch-property-investment";
import { courseData as entryPriceAnalysis } from "@/app/courses/data/entry-price-analysis-for-5-upcoming-new-launches";
import propertyPortfolioExpansion2024 from "@/app/courses/data/property-portfolio-expansion-strategies-2024";
import singaporeMasterPlan from "@/app/courses/data/singapores-master-plan-transformation";
import ultimatePropertyGuide from "@/app/courses/data/the-ultimate-guide-to-making-the-best-property-decision";
import { courseData as ultimateShowdown } from "@/app/courses/data/the-ultimate-showdown-cluster-houses-vs-condos-vs-landed-properties";
import { courseData as liveDebateCondoLanded } from "@/app/courses/data/live-debate-choosing-your-path-in-singapore-property-condo-vs-landed";
import { courseData as liveDebateBtoResale } from "@/app/courses/data/live-debate-choosing-your-path-in-singapore-property-bto-vs-resale-hdb";
import { courseData as realEstateShift2023 } from "@/app/courses/data/the-shift-in-singapores-real-estate-market-2023";
import coolingMeasuresImpact from "@/app/courses/data/how-has-the-latest-cooling-measures-affected-the-property-market";
import { courseData as condoToLandedStrategy } from "@/app/courses/data/how-to-strategise-from-a-condo-portfolio-into-a-landed-portfolio";
import { courseData as liveDebateResaleComparison } from "@/app/courses/data/live-debate-resale-hdb-vs-resale-condo";
import { courseData as marketTrendsCondos2024 } from "@/app/courses/data/2024-market-trends-strategies-for-new-launch-resale-condos";
import { courseData as marketTrendsLanded2024 } from "@/app/courses/data/2024-market-trends-strategies-for-landed-properties";
import { courseData as singaporeTrends2024 } from "@/app/courses/data/singapore-real-estate-market-trends-predictions-2024";
import { courseData as newLaunchSelection } from "@/app/courses/data/new-launch-condo-selection-strategies";
import { courseData as strategisingHdbCondo } from "@/app/courses/data/mistakes-in-strategising-to-own-1-hdb-1-condo-right-from-the-start";
import { courseData as maximizingInvestment } from "@/app/courses/data/maximizing-your-property-investment";

import { courseData as ecSellersMop } from "@/app/courses/data/ec-sellers-make-the-most-money-when-they-sell-at-mop-year-myth-or-truth";
import { courseData as landedPropertyStrategies } from "@/app/courses/data/landed-property-investment-strategies";
import { courseData as newLaunchOpportunity2023 } from "@/app/courses/data/new-launches-is-there-still-an-opportunity-in-2023";
import { courseData as propertyPortfolioMastery } from "@/app/courses/data/property-portfolio-strategy-mastery";
import { courseData as risingStarsGems } from "@/app/courses/data/rising-stars-or-hidden-gems";
import { courseData as artOfRealEstate } from "@/app/courses/data/the-art-of-real-estate-investment";

export interface Course {
  id: number
  title: string
  description: string
  instructorIds: string[]
  level?: string
  duration?: string
  category?: string
  categories: string[]
  price: string
  type?: string
  image: string
  rating?: number
  reviewCount?: number
  tags?: string[]
  slug: string
  url?: string
  progress?: number
  lastAccessed?: string
  totalHours?: number
  completed?: boolean
  completedDate?: string
}

// Function to convert CourseData to Course format
const convertToStandardFormat = (courseData: any, index: number): Course => {
  // Create a mapping from instructor names to facilitator IDs
  const nameToIdMapping: { [key: string]: string } = {
    'Melvin Lim': 'melvin-lim',
    'Adrian Lim': 'adrian-lim', 
    'Marc Chan': 'marc-chan',
    'George Peng': 'george-peng',
    'Ong Yu Rong': 'ong-yu-rong',
    'Grayce Tan': 'grayce-tan',
    'Joan Loh': 'joan-loh',
    'Wayne Tang': 'wayne-tang',
    'Alan Koh': 'alan-koh',
    'Beatrice Lim': 'beatrice-lim',
    'Jesley Lim': 'jesley-lim',
    'Shawn Tay': 'shawn-tay',
    'Lyndon Leong': 'lyndon-leong',
    'Ramzi Razak': 'ramzi-razak',
    'Lee Jun Wei': 'lee-jun-wei',
    'Loong Yanyan': 'loong-yanyan',
    'To be announced': 'tbd',
    'TBD': 'tbd'
  };

  // Extract instructor names from the instructors array and map to IDs
  const instructorIds = courseData.instructors?.map((instructor: any) => 
    nameToIdMapping[instructor.name] || 'tbd'
  ) || ['tbd'];

  // Convert duration to hours if it's in "X hours Y minutes" format
  let totalHours = 0;
  if (courseData.duration) {
    const hourMatch = courseData.duration.match(/(\d+)\s*hours?/);
    const minuteMatch = courseData.duration.match(/(\d+)\s*minutes?/);
    if (hourMatch) totalHours += parseInt(hourMatch[1]);
    if (minuteMatch) totalHours += Math.round(parseInt(minuteMatch[1]) / 60 * 10) / 10;
  }

  // Determine categories based on tags and category
  let categories: string[] = [];
  if (courseData.tags) {
    categories = [...courseData.tags];
  }
  if (courseData.category && !categories.includes(courseData.category)) {
    categories.push(courseData.category);
  }

  // Determine type based on price and other factors
  let type = 'Course';
  if (courseData.price === 'Free') {
    type = 'Webinar';
  } else if (courseData.title.toLowerCase().includes('masterclass')) {
    type = 'Masterclass';
  } else if (courseData.title.toLowerCase().includes('workshop')) {
    type = 'Workshop';
  } else if (courseData.title.toLowerCase().includes('summit')) {
    type = 'Event';
  }

  // Ensure unique ID by using original ID + index if there are conflicts
  const uniqueId = courseData.id ? courseData.id : (1000 + index);

  return {
    id: uniqueId,
    title: courseData.title,
    description: courseData.description || '',
    instructorIds,
    level: courseData.level || 'All Levels',
    duration: courseData.duration || 'Self-paced',
    category: courseData.category?.toLowerCase() || 'real-estate',
    categories,
    price: courseData.price,
    type,
    image: courseData.image,
    rating: courseData.rating || 0,
    reviewCount: courseData.reviews?.length || 0,
    tags: courseData.tags || [],
    slug: courseData.slug,
    url: `/courses/${courseData.slug}`,
    progress: 0,
    lastAccessed: '',
    totalHours: totalHours || 1,
    completed: false,
    completedDate: '',
  };
};

// Array of all course data
const allCourseData = [
  propertyStrategies2025,
  condoInvestmentWorkshop,
  masterNewLaunchSelection,
  nichePositioningMasterclass,
  propertySummit2024,
  sellingPropertyDIY,
  propertyFinancingStrategy,
  landedBuyerInvesting,
  makingTheRightMove,
  exitWithConfidence,
  freeholdPropertyStrategy,

  hdbUpgraders101,
  landedOverpriced2024,
  analyticalFactors7,
  entryPriceAnalysis,
  propertyPortfolioExpansion2024,
  singaporeMasterPlan,
  ultimatePropertyGuide,
  ultimateShowdown,
  liveDebateCondoLanded,
  liveDebateBtoResale,
  realEstateShift2023,
  coolingMeasuresImpact,
  condoToLandedStrategy,
  liveDebateResaleComparison,
  marketTrendsCondos2024,
  marketTrendsLanded2024,
  singaporeTrends2024,
  newLaunchSelection,
  strategisingHdbCondo,
  maximizingInvestment,

  ecSellersMop,
  landedPropertyStrategies,
  newLaunchOpportunity2023,
  propertyPortfolioMastery,
  risingStarsGems,
  artOfRealEstate,
];

// Convert all course data to standard format with unique IDs
export const courses: Course[] = allCourseData.map((courseData, index) => 
  convertToStandardFormat(courseData, index)
).map((course, index) => ({
  ...course,
  // Ensure completely unique IDs by using index-based IDs
  id: 1000 + index
}));
