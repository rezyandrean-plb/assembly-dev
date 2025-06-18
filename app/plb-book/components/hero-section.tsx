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
      data-oid="kfrm1ao"
    >
      <div className="container" data-oid="58qqs-i">
        <div className="hero-content" data-oid="0hc0mf3">
          <div className="hero-text" data-oid="v2ia-vk">
            <h1 ref={titleRef} className="hero-title" data-oid="0dx1w-r">
              Property Launch{" "}
              <span className="text-highlight" data-oid="bagaxow">
                Bible
              </span>
            </h1>
            <p
              ref={subtitleRef}
              className="hero-subtitle feature-text"
              data-oid="k6x4q.q"
            >
              Your comprehensive guide to navigating Singapore's property market
              with confidence and precision
            </p>
            <div ref={ctaRef} className="hero-cta" data-oid="la_.dr9">
              <a
                href="#purchase"
                className="btn btn-primary"
                data-oid="1:_hy3-"
              >
                Get Your Copy
              </a>
              <a
                href="#features"
                className="btn btn-secondary"
                data-oid="9p1_9ut"
              >
                Learn More
              </a>
            </div>
          </div>

          <div ref={bookRef} className="hero-book" data-oid="4qb9z8w">
            <BookCover data-oid="lcowtqs" />
          </div>
        </div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          data-oid="fwtiiv8"
        >
          <ChevronDown size={24} data-oid="-mf9za-" />
          <span data-oid="gnc95j3">Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
}
