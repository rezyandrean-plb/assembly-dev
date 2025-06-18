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
    <section ref={sectionRef} className="py-24 bg-white" data-oid="4kq8h07">
      <div className="container mx-auto px-4" data-oid="yafwet3">
        <div className="max-w-4xl mx-auto" data-oid="gamp_0w">
          <div
            ref={titleRef}
            className="intro-title text-center mb-8"
            data-oid="k00d1z."
          >
            <h2 className="text-4xl font-bold text-gray-900" data-oid="vecggqh">
              Introducing Assembly
            </h2>
            <div
              className="w-20 h-1 bg-orange-500 mx-auto mt-4"
              data-oid="7phqupc"
            ></div>
          </div>

          <div
            className="flex flex-col md:flex-row items-center gap-12"
            data-oid="rlqkpo."
          >
            <div
              ref={contentRef}
              className="intro-content md:w-2/3"
              data-oid="5-jr4nr"
            >
              <p className="text-lg text-gray-700 mb-6" data-oid="r73-dlv">
                Assembly is your knowledge hub for gaining insights, skills, and
                connecting with others in the Singapore real estate ecosystem.
                We provide the resources and community you need to navigate the
                complex property landscape with confidence.
              </p>
              <p className="text-lg text-gray-700" data-oid="_5_1o5a">
                Whether you're a seasoned professional or just starting your
                journey in real estate, our platform offers valuable content,
                expert perspectives, and networking opportunities to help you
                stay ahead in this dynamic market.
              </p>
            </div>

            <div
              ref={iconRef}
              className="intro-icon md:w-1/3 flex justify-center"
              data-oid="w8_g:1i"
            >
              <div className="relative w-48 h-48" data-oid="tjbc4bz">
                <div
                  className="absolute inset-0 bg-orange-100 rounded-full"
                  data-oid="-l38xew"
                ></div>
                <div
                  className="absolute inset-2 bg-orange-200 rounded-full"
                  data-oid="ezoo6sr"
                ></div>
                <div
                  className="absolute inset-4 bg-orange-300 rounded-full"
                  data-oid="ldymwhe"
                ></div>
                <div
                  className="absolute inset-6 bg-orange-400 rounded-full flex items-center justify-center"
                  data-oid="mt_axwb"
                >
                  <svg
                    className="w-20 h-20 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    data-oid="wzvtr0d"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                      data-oid="_bqkj-g"
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
