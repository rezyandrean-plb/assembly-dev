"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import anime from "animejs";
import { ChevronDown } from "lucide-react";
import BookCover from "./book-cover";

export default function HeroSection() {
  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const bookRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroInView) {
      const timeline = anime.timeline({
        easing: "easeOutExpo",
      });

      timeline
        .add({
          targets: titleRef.current,
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 800,
          delay: 300,
        })
        .add(
          {
            targets: subtitleRef.current,
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 800,
          },
          "-=600",
        )
        .add(
          {
            targets: ctaRef.current,
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 800,
          },
          "-=600",
        )
        .add(
          {
            targets: bookRef.current,
            opacity: [0, 1],
            translateX: [50, 0],
            duration: 1000,
          },
          "-=800",
        );

      // Start floating animation for book cover
      anime({
        targets: bookRef.current,
        translateY: ["-5px", "5px"],
        duration: 3000,
        direction: "alternate",
        loop: true,
        easing: "easeInOutSine",
      });
    }
  }, [heroInView]);

  return (
    <section
      ref={heroRef}
      className="section hero-section"
      id="hero"
      data-oid="pleo.2x"
    >
      <div className="container" data-oid="kf:1qhv">
        <div className="hero-content" data-oid=":vvbqwb">
          <div className="hero-text" data-oid="lg4fkvm">
            <h1 ref={titleRef} className="hero-title" data-oid="su.917q">
              Property Launch{" "}
              <span className="text-highlight" data-oid="4eqc4q7">
                Bible
              </span>
            </h1>
            <p
              ref={subtitleRef}
              className="hero-subtitle feature-text"
              data-oid="a.gorch"
            >
              Your comprehensive guide to navigating Singapore's property market
              with confidence and precision
            </p>
            <div ref={ctaRef} className="hero-cta" data-oid="jtu6zc-">
              <a
                href="#purchase"
                className="btn btn-primary"
                data-oid="gz4r14:"
              >
                Get Your Copy
              </a>
              <a
                href="#features"
                className="btn btn-secondary"
                data-oid="nr07ieh"
              >
                Learn More
              </a>
            </div>
          </div>

          <div ref={bookRef} className="hero-book" data-oid="9i2b__k">
            <BookCover data-oid="ap:.t3e" />
          </div>
        </div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          data-oid="wdga9gq"
        >
          <ChevronDown size={24} data-oid="ahl-539" />
          <span data-oid="0lkxdxo">Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
}
