import { notFound } from "next/navigation";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

// Define the valid course slugs
const validSlugs = [
  "strategic-property-investment",
  "property-strategies-in-2025-amid-rate-cuts",
  "hdb-investment-masterclass",
  "condo-investment-masterclass",
  "financial-modeling-masterclass",
  "property-market-trend-analysis",
  "condominium-investment-analysis",
  "condo-investment-workshop-building-a-profitable-property-portfolio-with-confidence",
  "condo-investment-workshop",
  "master-new-launch-selection",
  "module-1-of-niche-positioning-masterclass",
  "property-summit-2024",
  "selling-your-property-effectively-as-a-diy-property-seller",
  "property-financing-strategy-mastery",
  "master-new-launch-selection-6-exclusive-frameworks-to-select-the-winning-new-launch-in-20242025",
  "property-portfolio-strategy-mastery",
  "landed-buyer-investing",
  "hdb-upgraders-101-secrets-to-upgrading-from-a-hdb-to-a-condo",
  "the-shift-in-singapores-real-estate-market-2023",
  "new-launches-is-there-still-an-opportunity-in-2023",
  "making-the-right-move",
  "landed-property-investment-strategies",
  "the-art-of-real-estate-investment",
  "exit-with-confidence",
  "the-ultimate-showdown-cluster-houses-vs-condos-vs-landed-properties",
  "freehold-property-investment-strategy",
  "rising-stars-or-hidden-gems",
  "entry-price-analysis-for-5-upcoming-new-launches",
  "7-analytical-factors-for-safe-new-launch-property-investment",
  "maximizing-your-property-investment",
  "how-has-the-latest-cooling-measures-affected-the-property-market",
  "property-portfolio-expansion-strategies-2024",
  "the-ultimate-guide-to-making-the-best-property-decision",
  "singapores-master-plan-transformation",
  "live-debate-choosing-your-path-in-singapore-property-condo-vs-landed",
  "live-debate-choosing-your-path-in-singapore-property-bto-vs-resale-hdb",
  "ec-sellers-make-the-most-money-when-they-sell-at-mop-year-myth-or-truth",
  "mistakes-in-strategising-to-own-1-hdb-1-condo-right-from-the-start",
  "new-launch-condo-selection-strategies",
  "are-landed-properties-overpriced-in-2024-should-we-wait-for-2025-to-enter-or-is-now-the-best-time",
  "2024-market-trends-strategies-for-landed-properties",
  "singapore-real-estate-market-trends-predictions-2024",
  "2024-market-trends-strategies-for-new-launch-resale-condos",
  "live-debate-resale-hdb-vs-resale-condo",
  "how-to-strategise-from-a-condo-portfolio-into-a-landed-portfolio",
];

// Define the course metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;

  // Map slugs to titles
  const titleMap: Record<string, string> = {
    "strategic-property-investment":
      "Strategic Property Investment | Assembly SG",
    "property-strategies-in-2025-amid-rate-cuts":
      "Property Strategies in 2025 Amid Rate Cuts | Assembly SG",
    "hdb-investment-masterclass": "HDB Investment Masterclass | Assembly SG",
    "condo-investment-masterclass":
      "Condo Investment Masterclass | Assembly SG",
    "financial-modeling-masterclass":
      "Financial Modeling Masterclass | Assembly SG",
    "property-market-trend-analysis":
      "Property Market Trend Analysis | Assembly SG",
    "condominium-investment-analysis":
      "Condominium Investment Analysis | Assembly SG",
    "condo-investment-workshop-building-a-profitable-property-portfolio-with-confidence":
      "Condo Investment Workshop: Building a Profitable Property Portfolio with Confidence | Assembly SG",
    "condo-investment-workshop":
      "Condo Investment Workshop: Building a Profitable Property Portfolio with Confidence | Assembly SG",
    "master-new-launch-selection":
      "Master New Launch Selection: 6 Exclusive Frameworks | Assembly SG",
    "module-1-of-niche-positioning-masterclass":
      "Module 1 of Niche Positioning Masterclass | Assembly SG",
    "property-summit-2024": "Property Summit 2024 | Assembly SG",
    "selling-your-property-effectively-as-a-diy-property-seller":
      "Selling your Property Effectively as a DIY Property Seller | Assembly SG",
    "property-financing-strategy-mastery":
      "Property Financing Strategy Mastery | Assembly SG",
    "master-new-launch-selection-6-exclusive-frameworks-to-select-the-winning-new-launch-in-20242025":
      "Master New Launch Selection: 6 Exclusive Frameworks to Select the Winning New Launch in 2024/2025 | Assembly SG",
    "property-portfolio-strategy-mastery":
      "Property Portfolio Strategy Mastery | Assembly SG",
    "landed-buyer-investing":
      "Landed Property Buyer's Investment Guide | Assembly SG",
    "hdb-upgraders-101-secrets-to-upgrading-from-a-hdb-to-a-condo":
      "HDB Upgraders 101: Secrets to Upgrading from a HDB to a Condo | Assembly SG",
    "the-shift-in-singapores-real-estate-market-2023":
      "The Shift in Singapore's Real Estate Market 2023 | Assembly SG",
    "new-launches-is-there-still-an-opportunity-in-2023":
      "New Launches – Is There Still an Opportunity in 2023? | Assembly SG",
    "making-the-right-move": "Making the Right Move | Assembly SG",
    "landed-property-investment-strategies":
      "Landed Property Investment Strategies | Assembly SG",
    "the-art-of-real-estate-investment":
      "The Art of Real Estate Investment | Assembly SG",
    "exit-with-confidence": "Exit with Confidence | Assembly SG",
    "the-ultimate-showdown-cluster-houses-vs-condos-vs-landed-properties":
      "The Ultimate Showdown: Cluster Houses vs. Condos vs. Landed Properties | Assembly SG",
    "freehold-property-investment-strategy":
      "Freehold Property Investment Strategy | Assembly SG",
    "rising-stars-or-hidden-gems": "Rising Stars or Hidden Gems? | Assembly SG",
    "entry-price-analysis-for-5-upcoming-new-launches":
      "Entry Price Analysis for 5 Upcoming New Launches | Assembly SG",
    "7-analytical-factors-for-safe-new-launch-property-investment":
      "7 Analytical Factors for Safe New Launch Property Investment | Assembly SG",
    "maximizing-your-property-investment":
      "Maximizing Your Property Investment | Assembly SG",
    "how-has-the-latest-cooling-measures-affected-the-property-market":
      "How has the latest Cooling Measures affected the Property Market? | Assembly SG",
    "property-portfolio-expansion-strategies-2024":
      "Property Portfolio Expansion Strategies 2024 | Assembly SG",
    "the-ultimate-guide-to-making-the-best-property-decision":
      "The Ultimate Guide to Making the Best Property Decision | Assembly SG",
    "singapores-master-plan-transformation":
      "Singapore's Master Plan Transformation | Assembly SG",
    "live-debate-choosing-your-path-in-singapore-property-condo-vs-landed":
      "Live Debate: Choosing Your Path in Singapore Property (Condo vs. Landed) | Assembly SG",
    "live-debate-choosing-your-path-in-singapore-property-bto-vs-resale-hdb":
      "Live Debate: Choosing Your Path in Singapore Property (BTO vs. Resale HDB) | Assembly SG",
    "ec-sellers-make-the-most-money-when-they-sell-at-mop-year-myth-or-truth":
      "EC Sellers: Make the Most Money When They Sell at MOP Year Myth or Truth | Assembly SG",
    "mistakes-in-strategising-to-own-1-hdb-1-condo-right-from-the-start":
      "Mistakes in Strategising to Own 1 HDB 1 Condo Right from the Start | Assembly SG",
    "new-launch-condo-selection-strategies":
      "New Launch Condo Selection Strategies | Assembly SG",
    "are-landed-properties-overpriced-in-2024-should-we-wait-for-2025-to-enter-or-is-now-the-best-time":
      "Are Landed Properties Overpriced in 2024? Should We Wait for 2025 to Enter or Is Now the Best Time? | Assembly SG",
    "2024-market-trends-strategies-for-landed-properties":
      "2024 Market Trends & Strategies for Landed Properties | Assembly SG",
    "singapore-real-estate-market-trends-predictions-2024":
      "Singapore Real Estate Market Trends & Predictions 2024 | Assembly SG",
    "2024-market-trends-strategies-for-new-launch-resale-condos":
      "2024 Market Trends & Strategies for New Launch & Resale Condos | Assembly SG",
    "live-debate-resale-hdb-vs-resale-condo":
      "Live Debate - Resale HDB VS Resale Condo | Assembly SG",
    "how-to-strategise-from-a-condo-portfolio-into-a-landed-portfolio":
      "How to Strategise from a Condo Portfolio into a Landed Portfolio | Assembly SG",
  };

  return {
    title: titleMap[slug] || "Course | Assembly SG",
    description: "Learn property investment strategies with Assembly SG",
  };
}

export default function CourseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  // Validate slug format (prevent path traversal)
  if (!/^[a-z0-9-]+$/.test(slug)) {
    return notFound();
  }

  // Check if the slug is valid
  if (!validSlugs.includes(slug)) {
    return notFound();
  }

  // Map of slugs to component imports
  const componentMap: Record<string, any> = {
    "strategic-property-investment": dynamic(
      () => import("../components/strategic-property-investment"),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="s.4_m4s"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="f2yk75j"
            ></div>
          </div>
        ),
      },
    ),
    "property-strategies-in-2025-amid-rate-cuts": dynamic(
      () => import("../components/property-strategies-in-2025-amid-rate-cuts"),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="d4-deak"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="sk.:ju7"
            ></div>
          </div>
        ),
      },
    ),
    "hdb-investment-masterclass": dynamic(
      () => import("../components/hdb-investment-masterclass"),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="3n:mr0k"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="ymh423t"
            ></div>
          </div>
        ),
      },
    ),
    "condo-investment-masterclass": dynamic(
      () => import("../components/condo-investment-masterclass"),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="q1khva2"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid=".gij2bm"
            ></div>
          </div>
        ),
      },
    ),
    "financial-modeling-masterclass": dynamic(
      () => import("../components/financial-modeling-masterclass"),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="me9dvjv"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="gmqduzp"
            ></div>
          </div>
        ),
      },
    ),
    "property-market-trend-analysis": dynamic(
      () => import("../components/property-market-trend-analysis"),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="85ax.wj"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="295vr31"
            ></div>
          </div>
        ),
      },
    ),
    "condominium-investment-analysis": dynamic(
      () => import("../components/condominium-investment-analysis"),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="t_ek-og"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="vpa0ukb"
            ></div>
          </div>
        ),
      },
    ),
    "condo-investment-workshop-building-a-profitable-property-portfolio-with-confidence":
      dynamic(
        () =>
          import(
            "../components/condo-investment-workshop-building-a-profitable-property-portfolio-with-confidence"
          ),
        {
          loading: () => (
            <div
              className="flex items-center justify-center min-h-screen"
              data-oid="fjutp5t"
            >
              <div
                className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
                data-oid="ora_hf_"
              ></div>
            </div>
          ),
        },
      ),
    "condo-investment-workshop": dynamic(
      () => import("../components/condo-investment-workshop"),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="9m1-q_j"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="54xlud7"
            ></div>
          </div>
        ),
      },
    ),
    "master-new-launch-selection": dynamic(
      () => import("../components/master-new-launch-selection"),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="6qa12_d"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="val7o-n"
            ></div>
          </div>
        ),
      },
    ),
    "module-1-of-niche-positioning-masterclass": dynamic(
      () => import("../components/module-1-of-niche-positioning-masterclass"),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="n_6g-79"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="3ipa-yp"
            ></div>
          </div>
        ),
      },
    ),
    "property-summit-2024": dynamic(
      () => import("../components/property-summit-2024"),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="84vhcyr"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="ye_ft-v"
            ></div>
          </div>
        ),
      },
    ),
    "selling-your-property-effectively-as-a-diy-property-seller": dynamic(
      () =>
        import(
          "../components/selling-your-property-effectively-as-a-diy-property-seller"
        ),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="wleid9a"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="avsmxr_"
            ></div>
          </div>
        ),
      },
    ),
    "property-financing-strategy-mastery": dynamic(
      () => import("../components/property-financing-strategy-mastery"),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="w_mr.-a"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="..s7kkj"
            ></div>
          </div>
        ),
      },
    ),
    "master-new-launch-selection-6-exclusive-frameworks-to-select-the-winning-new-launch-in-20242025":
      dynamic(() => import("../components/master-new-launch-selection"), {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="1:9xd37"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="-u5hx3x"
            ></div>
          </div>
        ),
      }),
    "property-portfolio-strategy-mastery": dynamic(
      () => import("../components/property-portfolio-strategy-mastery"),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="1urk4r3"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="ecbtq4k"
            ></div>
          </div>
        ),
      },
    ),
    "landed-buyer-investing": dynamic(
      () => import("../components/landed-buyer-investing"),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="np:f9xb"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="fh:34d-"
            ></div>
          </div>
        ),
      },
    ),
    "hdb-upgraders-101-secrets-to-upgrading-from-a-hdb-to-a-condo": dynamic(
      () =>
        import(
          "../components/hdb-upgraders-101-secrets-to-upgrading-from-a-hdb-to-a-condo"
        ),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="2t68yyf"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="4-qukcs"
            ></div>
          </div>
        ),
      },
    ),
    "the-shift-in-singapores-real-estate-market-2023": dynamic(
      () =>
        import("../components/the-shift-in-singapores-real-estate-market-2023"),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="s2k:twr"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="facadpx"
            ></div>
          </div>
        ),
      },
    ),
    "new-launches-is-there-still-an-opportunity-in-2023": dynamic(
      () =>
        import(
          "../components/new-launches-is-there-still-an-opportunity-in-2023"
        ),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="v5p76q1"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="qrjwee_"
            ></div>
          </div>
        ),
      },
    ),
    "making-the-right-move": dynamic(
      () => import("../components/making-the-right-move"),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="r0ajc8l"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="w8:k:x_"
            ></div>
          </div>
        ),
      },
    ),
    "landed-property-investment-strategies": dynamic(
      () => import("../components/landed-property-investment-strategies"),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="fpvrjvk"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid=":0k08mq"
            ></div>
          </div>
        ),
      },
    ),
    "the-art-of-real-estate-investment": dynamic(
      () => import("../components/the-art-of-real-estate-investment"),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="57tjjd4"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="zgu8-8f"
            ></div>
          </div>
        ),
      },
    ),
    "exit-with-confidence": dynamic(
      () => import("../components/exit-with-confidence"),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid=".:5kr1x"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="ibyiav4"
            ></div>
          </div>
        ),
      },
    ),
    "the-ultimate-showdown-cluster-houses-vs-condos-vs-landed-properties":
      dynamic(
        () =>
          import(
            "../components/the-ultimate-showdown-cluster-houses-vs-condos-vs-landed-properties"
          ),
        {
          loading: () => (
            <div
              className="flex items-center justify-center min-h-screen"
              data-oid=":.8giiw"
            >
              <div
                className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
                data-oid="t5uuwh3"
              ></div>
            </div>
          ),
        },
      ),
    "freehold-property-investment-strategy": dynamic(
      () => import("../components/freehold-property-investment-strategy"),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="2zg9lx_"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="sm2hbvy"
            ></div>
          </div>
        ),
      },
    ),
    "rising-stars-or-hidden-gems": dynamic(
      () => import("../components/rising-stars-or-hidden-gems"),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="sg4ho44"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="74v:7.7"
            ></div>
          </div>
        ),
      },
    ),
    "entry-price-analysis-for-5-upcoming-new-launches": dynamic(
      () =>
        import(
          "../components/entry-price-analysis-for-5-upcoming-new-launches"
        ),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="uc106qt"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="wwu0f1e"
            ></div>
          </div>
        ),
      },
    ),
    "7-analytical-factors-for-safe-new-launch-property-investment": dynamic(
      () =>
        import(
          "../components/7-analytical-factors-for-safe-new-launch-property-investment"
        ),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="jsnrb3b"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="gux-rsy"
            ></div>
          </div>
        ),
      },
    ),
    "maximizing-your-property-investment": dynamic(
      () => import("../components/maximizing-your-property-investment"),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="rre6r.x"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid=":zl1x2j"
            ></div>
          </div>
        ),
      },
    ),
    "how-has-the-latest-cooling-measures-affected-the-property-market": dynamic(
      () =>
        import(
          "../components/how-has-the-latest-cooling-measures-affected-the-property-market"
        ),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="hn_vaf_"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="3ikqk-9"
            ></div>
          </div>
        ),
      },
    ),
    "property-portfolio-expansion-strategies-2024": dynamic(
      () =>
        import("../components/property-portfolio-expansion-strategies-2024"),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="txha8nw"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="m-zay-:"
            ></div>
          </div>
        ),
      },
    ),
    "the-ultimate-guide-to-making-the-best-property-decision": dynamic(
      () =>
        import(
          "../components/the-ultimate-guide-to-making-the-best-property-decision"
        ),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="8lendt3"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="9f6w9sn"
            ></div>
          </div>
        ),
      },
    ),
    "singapores-master-plan-transformation": dynamic(
      () => import("../components/singapores-master-plan-transformation"),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="tzb:dfi"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="f7axsni"
            ></div>
          </div>
        ),
      },
    ),
    "live-debate-choosing-your-path-in-singapore-property-condo-vs-landed":
      dynamic(
        () =>
          import(
            "../components/live-debate-choosing-your-path-in-singapore-property-condo-vs-landed"
          ),
        {
          loading: () => (
            <div
              className="flex items-center justify-center min-h-screen"
              data-oid="6f:zslt"
            >
              <div
                className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
                data-oid="odm:yif"
              ></div>
            </div>
          ),
        },
      ),
    "live-debate-choosing-your-path-in-singapore-property-bto-vs-resale-hdb":
      dynamic(
        () =>
          import(
            "../components/live-debate-choosing-your-path-in-singapore-property-bto-vs-resale-hdb"
          ),
        {
          loading: () => (
            <div
              className="flex items-center justify-center min-h-screen"
              data-oid="f_lic2h"
            >
              <div
                className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
                data-oid="1m2.87w"
              ></div>
            </div>
          ),
        },
      ),
    "ec-sellers-make-the-most-money-when-they-sell-at-mop-year-myth-or-truth":
      dynamic(
        () =>
          import(
            "../components/ec-sellers-make-the-most-money-when-they-sell-at-mop-year-myth-or-truth"
          ),
        {
          loading: () => (
            <div
              className="flex items-center justify-center min-h-screen"
              data-oid="lfby-id"
            >
              <div
                className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
                data-oid="lthq_wi"
              ></div>
            </div>
          ),
        },
      ),
    "mistakes-in-strategising-to-own-1-hdb-1-condo-right-from-the-start":
      dynamic(
        () =>
          import(
            "../components/mistakes-in-strategising-to-own-1-hdb-1-condo-right-from-the-start"
          ),
        {
          loading: () => (
            <div
              className="flex items-center justify-center min-h-screen"
              data-oid="cunqcx0"
            >
              <div
                className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
                data-oid="qro9l5_"
              ></div>
            </div>
          ),
        },
      ),
    "new-launch-condo-selection-strategies": dynamic(
      () => import("../components/new-launch-condo-selection-strategies"),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="_wxboqf"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="zttqmn1"
            ></div>
          </div>
        ),
      },
    ),
    "are-landed-properties-overpriced-in-2024-should-we-wait-for-2025-to-enter-or-is-now-the-best-time":
      dynamic(
        () =>
          import(
            "../components/are-landed-properties-overpriced-in-2024-should-we-wait-for-2025-to-enter-or-is-now-the-best-time"
          ),
        {
          loading: () => (
            <div
              className="flex items-center justify-center min-h-screen"
              data-oid="hpj54lr"
            >
              <div
                className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
                data-oid="b-7ny8q"
              ></div>
            </div>
          ),
        },
      ),
    "2024-market-trends-strategies-for-landed-properties": dynamic(
      () =>
        import(
          "../components/2024-market-trends-strategies-for-landed-properties"
        ),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="19v27e2"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="_760k32"
            ></div>
          </div>
        ),
      },
    ),
    "singapore-real-estate-market-trends-predictions-2024": dynamic(
      () =>
        import(
          "../components/singapore-real-estate-market-trends-predictions-2024"
        ),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="uyfs7cy"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="svc0:3n"
            ></div>
          </div>
        ),
      },
    ),
    "2024-market-trends-strategies-for-new-launch-resale-condos": dynamic(
      () =>
        import(
          "../components/2024-market-trends-strategies-for-new-launch-resale-condos"
        ),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="bvlpcpy"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="6g9m-qt"
            ></div>
          </div>
        ),
      },
    ),
    "live-debate-resale-hdb-vs-resale-condo": dynamic(
      () => import("../components/live-debate-resale-hdb-vs-resale-condo"),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="vf3f:7p"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="nvp1-oi"
            ></div>
          </div>
        ),
      },
    ),
    "how-to-strategise-from-a-condo-portfolio-into-a-landed-portfolio": dynamic(
      () =>
        import(
          "../components/how-to-strategise-from-a-condo-portfolio-into-a-landed-portfolio"
        ),
      {
        loading: () => (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="s6ecwd0"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="dh0v9jy"
            ></div>
          </div>
        ),
      },
    ),
  };
  // Get the component for the current slug
  const CourseComponent = componentMap[slug];

  if (!CourseComponent) {
    return notFound();
  }

  return <CourseComponent data-oid="3j7nch9" />;
}
