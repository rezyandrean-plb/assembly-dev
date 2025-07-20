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
    <section ref={sectionRef} className="py-24 bg-white" data-oid="2v36ggf">
      <div className="container mx-auto px-4" data-oid="_ff1kjv">
        <div className="max-w-4xl mx-auto" data-oid="6yp0_hb">
          <div
            ref={titleRef}
            className="intro-title text-center mb-8"
            data-oid="9ylbg3w"
          >
            <h2 className="text-4xl font-bold text-gray-900" data-oid="iorzoop">
              Introducing Assembly
            </h2>
            <div
              className="w-20 h-1 bg-orange-500 mx-auto mt-4"
              data-oid="a_ws9er"
            ></div>
          </div>

          <div
            className="flex flex-col md:flex-row items-center gap-12"
            data-oid="p20-14a"
          >
            <div
              ref={contentRef}
              className="intro-content md:w-2/3"
              data-oid="pcicmz3"
            >
              <p className="text-lg text-gray-700 mb-6" data-oid="7_wxsk_">
                Assembly is your knowledge hub for gaining insights, skills, and
                connecting with others in the Singapore real estate ecosystem.
                We provide the resources and community you need to navigate the
                complex property landscape with confidence.
              </p>
              <p className="text-lg text-gray-700" data-oid="f_t7mm:">
                Whether you're a seasoned professional or just starting your
                journey in real estate, our platform offers valuable content,
                expert perspectives, and networking opportunities to help you
                stay ahead in this dynamic market.
              </p>
            </div>

            <div
              ref={iconRef}
              className="intro-icon md:w-1/3 flex justify-center"
              data-oid="qqhctbu"
            >
              <div className="relative w-48 h-48" data-oid="_dorxxw">
                <div
                  className="absolute inset-0 bg-orange-100 rounded-full"
                  data-oid="v8:vcdy"
                ></div>
                <div
                  className="absolute inset-2 bg-orange-200 rounded-full"
                  data-oid="nas_ysz"
                ></div>
                <div
                  className="absolute inset-4 bg-orange-300 rounded-full"
                  data-oid="yg5gs8v"
                ></div>
                <div
                  className="absolute inset-6 bg-orange-400 rounded-full flex items-center justify-center"
                  data-oid="aqdt3:m"
                >
                  <svg
                    className="w-20 h-20 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    data-oid="tz538_w"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                      data-oid="55i4-fy"
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
