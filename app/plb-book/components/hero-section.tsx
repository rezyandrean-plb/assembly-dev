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
      data-oid="aq963i8"
    >
      <div className="container" data-oid="g:91ym3">
        <div className="hero-content" data-oid="dgl:740">
          <div className="hero-text" data-oid="0zz4_d7">
            <h1 ref={titleRef} className="hero-title" data-oid="5t_bml9">
              Property Launch{" "}
              <span className="text-highlight" data-oid="7y78el-">
                Bible
              </span>
            </h1>
            <p
              ref={subtitleRef}
              className="hero-subtitle feature-text"
              data-oid="fb9hon4"
            >
              Your comprehensive guide to navigating Singapore's property market
              with confidence and precision
            </p>
            <div ref={ctaRef} className="hero-cta" data-oid="k-dhd19">
              <a
                href="#purchase"
                className="btn btn-primary"
                data-oid="lneu6y0"
              >
                Get Your Copy
              </a>
              <a
                href="#features"
                className="btn btn-secondary"
                data-oid="_z1v:6v"
              >
                Learn More
              </a>
            </div>
          </div>

          <div ref={bookRef} className="hero-book" data-oid="hmjxr1f">
            <BookCover data-oid="et.6c5u" />
          </div>
        </div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          data-oid="ceh_190"
        >
          <ChevronDown size={24} data-oid="fg0tv5q" />
          <span data-oid="aiaww2m">Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
}
