"use client";

import { useRef } from "react";
import { useScrollAnimation } from "../hooks/use-scroll-animation";
import anime from "animejs";

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

function Feature({ icon, title, description }: FeatureProps) {
  const featureRef = useRef<HTMLDivElement>(null);

  const ref = useScrollAnimation(() => {
    return anime({
      targets: featureRef.current,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
    });
  });

  return (
    <div
      className="feature-card"
      ref={(el) => {
        if (featureRef.current === null && el !== null) {
          featureRef.current = el;
        }
        if (typeof ref === "function") {
          ref(el);
        }
      }}
      data-oid="4nwznks"
    >
      <div className="feature-icon" data-oid="5-g4kjs">
        {icon}
      </div>
      <h3 className="feature-title" data-oid="m2_ke-4">
        {title}
      </h3>
      <p className="feature-description" data-oid="-99ihkw">
        {description}
      </p>
    </div>
  );
}

export default function BookOverviewSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  const titleAnimRef = useScrollAnimation(() => {
    return anime({
      targets: titleRef.current,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
    });
  });

  const features = [
    {
      icon: "📊",
      title: "Market Analysis",
      description:
        "Comprehensive analysis of Singapore's property market trends and forecasts for 2025",
    },
    {
      icon: "💰",
      title: "Investment Strategies",
      description:
        "Proven strategies for property investment in Singapore's dynamic market",
    },
    {
      icon: "🤝",
      title: "Negotiation Tactics",
      description:
        "Master the art of property negotiation with expert techniques from industry leaders",
    },
    {
      icon: "🏦",
      title: "Financing Options",
      description:
        "Navigate complex financing options and optimize your property investment returns",
    },
    {
      icon: "⏱️",
      title: "Market Timing",
      description:
        "Learn when to enter and exit the market for maximum profit potential",
    },
    {
      icon: "⚖️",
      title: "Legal Insights",
      description:
        "Essential legal knowledge for property transactions in Singapore",
    },
  ];

  return (
    <section
      className="section features-section"
      id="features"
      data-oid="7nlxl7p"
    >
      <div className="container" data-oid="jxp56:.">
        <h2
          className="section-title text-center"
          ref={(el) => {
            if (titleRef.current === null && el !== null) {
              titleRef.current = el;
            }
            if (typeof titleAnimRef === "function") {
              titleAnimRef(el);
            }
          }}
          data-oid="99_falu"
        >
          What's Inside The{" "}
          <span className="text-highlight" data-oid="subdvg0">
            PLB Book
          </span>
        </h2>

        <div className="features-grid" data-oid="0uw4s06">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              data-oid="b-s2uin"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
