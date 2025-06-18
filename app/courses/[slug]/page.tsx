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
            data-oid="p04ghw-"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="42kbsga"
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
            data-oid="e.vstne"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="w696tip"
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
            data-oid="qr4l0jy"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="khalu02"
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
            data-oid=".8b3.4:"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="l6ngcf0"
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
            data-oid="jny0sry"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="19qurhc"
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
            data-oid="o:v019q"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="9hx8yrn"
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
            data-oid=".qwticg"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="3q:v1_e"
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
              data-oid="8ohjqli"
            >
              <div
                className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
                data-oid="-l6e7a9"
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
            data-oid="at_36q-"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="1zt6tpt"
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
            data-oid="71-.4gt"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="zid7:.3"
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
            data-oid="mze--vg"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="dhlpf63"
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
            data-oid="p:-fs9:"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="1i:1cb7"
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
            data-oid="dz9pl_k"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="kgyg9un"
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
            data-oid="51:3fyo"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="nn_dacx"
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
            data-oid="xnh-2tm"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="-ix:t.c"
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
            data-oid="g503591"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="24qugxr"
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
            data-oid="nqo:s_p"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="9032xp:"
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
            data-oid="0c0ogh:"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="osxr79l"
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
            data-oid="gym792z"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid=".fy_9cz"
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
            data-oid="nc47h0c"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="r907.py"
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
            data-oid="hggwn.u"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="jh5r1ma"
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
            data-oid="q6nyk7s"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="9ne7l_8"
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
            data-oid="5-si3jr"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="fq_.:bl"
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
            data-oid="ierj8v0"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="qvx04xd"
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
              data-oid="yt.pmou"
            >
              <div
                className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
                data-oid="9uim7zl"
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
            data-oid=":-jdjwl"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="bbw3p7w"
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
            data-oid="tozcppd"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="k4f938c"
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
            data-oid="ligq-kt"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid=":biic81"
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
            data-oid="9e0vyk1"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid=":wp.x_w"
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
            data-oid="h54pv6o"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="hba0yzc"
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
            data-oid="-gkz5l8"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="4aw76vb"
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
            data-oid=".u86fh3"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="wvbcmtb"
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
            data-oid="mj-e--g"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="jdfqz5m"
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
            data-oid="s_v5r_i"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="o92.84g"
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
              data-oid="1hexp:o"
            >
              <div
                className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
                data-oid="08u--7e"
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
              data-oid="yqsdq4f"
            >
              <div
                className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
                data-oid=":_4z5l5"
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
              data-oid="5-ngl3s"
            >
              <div
                className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
                data-oid="chybkfx"
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
              data-oid="rk:hqj5"
            >
              <div
                className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
                data-oid="pfl1qf3"
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
            data-oid=".1lm:2o"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="enu-:dp"
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
              data-oid="xxd3ury"
            >
              <div
                className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
                data-oid="xnppvjo"
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
            data-oid="lkggzk-"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="ovrr1ff"
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
            data-oid="vwbjsip"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="zh4ru-v"
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
            data-oid="4e1-:ts"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="w:ws1gf"
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
            data-oid="b0ayvow"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="bvvn779"
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
            data-oid="kqw32ja"
          >
            <div
              className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
              data-oid="3b.kz:4"
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

  return <CourseComponent data-oid="vr8rtv5" />;
}
