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
      data-oid="eqizees"
    >
      <div className="container" data-oid="ubtzfxe">
        <div className="hero-content" data-oid="nbk1.wp">
          <div className="hero-text" data-oid="rkadmfg">
            <h1 ref={titleRef} className="hero-title" data-oid="0pm7-q0">
              Property Launch{" "}
              <span className="text-highlight" data-oid="ezwl-zs">
                Bible
              </span>
            </h1>
            <p
              ref={subtitleRef}
              className="hero-subtitle feature-text"
              data-oid="_mvsppx"
            >
              Your comprehensive guide to navigating Singapore's property market
              with confidence and precision
            </p>
            <div ref={ctaRef} className="hero-cta" data-oid="-:b_lgl">
              <a
                href="#purchase"
                className="btn btn-primary"
                data-oid="mpmi7gv"
              >
                Get Your Copy
              </a>
              <a
                href="#features"
                className="btn btn-secondary"
                data-oid="l8cpuu8"
              >
                Learn More
              </a>
            </div>
          </div>

          <div ref={bookRef} className="hero-book" data-oid="hydkxuu">
            <BookCover data-oid="dpthtn3" />
          </div>
        </div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          data-oid="9rpj9w-"
        >
          <ChevronDown size={24} data-oid="k8m2361" />
          <span data-oid="s.qpti3">Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
}
