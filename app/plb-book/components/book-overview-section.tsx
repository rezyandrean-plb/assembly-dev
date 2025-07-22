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
    >
      <div className="feature-icon">{icon}</div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
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
    <section className="section features-section" id="features">
      <div className="container">
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
        >
          What's Inside The <span className="text-highlight">PLB Book</span>
        </h2>

        <div className="features-grid">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
