"use client";

import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import { createScrollAnimation } from "@/app/utils/animation-utils";

export default function IntroSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Text reveal animation
    const titleAnimation = anime({
      targets: ".intro-title",
      opacity: [0, 1],
      translateY: [20, 0],
      easing: "easeOutExpo",
      duration: 1000,
      autoplay: false,
    });

    // Content animation
    const contentAnimation = anime({
      targets: ".intro-content",
      opacity: [0, 1],
      translateY: [20, 0],
      easing: "easeOutExpo",
      duration: 1000,
      delay: 300,
      autoplay: false,
    });

    // Icon animation
    const iconAnimation = anime({
      targets: ".intro-icon",
      opacity: [0, 1],
      scale: [0.5, 1],
      easing: "easeOutElastic(1, .6)",
      duration: 1500,
      delay: 600,
      autoplay: false,
    });

    // Setup scroll animations
    const cleanupTitle = createScrollAnimation(
      titleRef.current,
      titleAnimation,
    );
    const cleanupContent = createScrollAnimation(
      contentRef.current,
      contentAnimation,
    );
    const cleanupIcon = createScrollAnimation(iconRef.current, iconAnimation);

    return () => {
      cleanupTitle();
      cleanupContent();
      cleanupIcon();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white" data-oid="5z3mq7s">
      <div className="container mx-auto px-4" data-oid="n:mr.zt">
        <div className="max-w-4xl mx-auto" data-oid="5tq4meb">
          <div
            ref={titleRef}
            className="intro-title text-center mb-8"
            data-oid="jvwfrim"
          >
            <h2 className="text-4xl font-bold text-gray-900" data-oid="napz75b">
              Introducing Assembly
            </h2>
            <div
              className="w-20 h-1 bg-orange-500 mx-auto mt-4"
              data-oid="-wag1rb"
            ></div>
          </div>

          <div
            className="flex flex-col md:flex-row items-center gap-12"
            data-oid="oxg7t:4"
          >
            <div
              ref={contentRef}
              className="intro-content md:w-2/3"
              data-oid="v4q6pe9"
            >
              <p className="text-lg text-gray-700 mb-6" data-oid="1:vc5pq">
                Assembly is your knowledge hub for gaining insights, skills, and
                connecting with others in the Singapore real estate ecosystem.
                We provide the resources and community you need to navigate the
                complex property landscape with confidence.
              </p>
              <p className="text-lg text-gray-700" data-oid="v8zc-h2">
                Whether you're a seasoned professional or just starting your
                journey in real estate, our platform offers valuable content,
                expert perspectives, and networking opportunities to help you
                stay ahead in this dynamic market.
              </p>
            </div>

            <div
              ref={iconRef}
              className="intro-icon md:w-1/3 flex justify-center"
              data-oid="pfpc4kn"
            >
              <div className="relative w-48 h-48" data-oid="msal:7_">
                <div
                  className="absolute inset-0 bg-orange-100 rounded-full"
                  data-oid="m6j94.-"
                ></div>
                <div
                  className="absolute inset-2 bg-orange-200 rounded-full"
                  data-oid="du61kl3"
                ></div>
                <div
                  className="absolute inset-4 bg-orange-300 rounded-full"
                  data-oid="9-vx4fp"
                ></div>
                <div
                  className="absolute inset-6 bg-orange-400 rounded-full flex items-center justify-center"
                  data-oid="odx6030"
                >
                  <svg
                    className="w-20 h-20 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    data-oid="q8odydk"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                      data-oid="wpcers8"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
