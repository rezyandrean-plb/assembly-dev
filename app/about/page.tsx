"use client";

import { useEffect, useState, useRef } from "react";
import { ChevronUp } from "lucide-react";
import "./about.css";
import Navbar from "@/components/navbar";

// Section components
const HeroSection = () => (
  <section
    id="hero-section"
    className="section-container mb-24"
    data-oid=".mytp-y"
  >
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      data-oid="6bialwc"
    >
      <div data-oid="msww6f7">
        <h2
          className="section-heading text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          data-oid="wag6yvz"
        >
          Creating Creators, Empowering Realtors
        </h2>
        <p
          className="section-paragraph text-lg text-gray-700 leading-relaxed"
          data-oid="qk:fnum"
        >
          In a world where information is readily available at our fingertips,
          success is defined by the ability to innovate, adapt, and connect.
          Assembly is built on the foundation of cultivating the next generation
          of creators and empowering real estate professionals with the skills
          and mindset needed to thrive in a dynamic market. We believe in
          blending creative thinking with practical application to shape the
          future of the industry.
        </p>
      </div>
      <div
        className="section-image relative h-96 rounded-xl overflow-hidden shadow-xl"
        data-oid="q_lej-z"
      >
        <img
          src="/images/about-us-hero.jpg"
          alt="Real estate professionals collaborating"
          className="w-full h-full object-cover"
          loading="eager"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            console.error("Image failed to load:", target.src);
            target.src =
              "/placeholder.svg?height=384&width=576&text=Real+Estate+Professionals";
          }}
          data-oid="dpf9-63"
        />
      </div>
    </div>
  </section>
);

const AimSection = () => (
  <section
    id="aim-section"
    className="section-container mb-24"
    data-oid="b1q76eb"
  >
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      data-oid="vip99_x"
    >
      <div
        className="order-2 lg:order-1 section-image relative h-96 rounded-xl overflow-hidden shadow-xl"
        data-oid="yz_etqh"
      >
        <img
          src="/images/about-us-aim.jpg"
          alt="Community of professionals networking"
          className="w-full h-full object-cover"
          loading="eager"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            console.error("Image failed to load:", target.src);
            target.src =
              "/placeholder.svg?height=384&width=576&text=Community+Networking";
          }}
          data-oid="791g-d_"
        />
      </div>
      <div className="order-1 lg:order-2" data-oid="933gq0-">
        <h2
          className="section-heading text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          data-oid="izedb7y"
        >
          Our Aim
        </h2>
        <p
          className="section-paragraph text-lg text-gray-700 leading-relaxed"
          data-oid="wofxc52"
        >
          More than just education, Assembly is dedicated to building a vibrant
          community of like-minded individuals. We provide a platform where
          members can gather, share valuable experiences, forge meaningful
          connections, and leverage each other's diverse skills and expertise.
          This collaborative environment is designed to foster growth, spark
          innovation, and create opportunities that go beyond traditional
          learning.
        </p>
      </div>
    </div>
  </section>
);

const StructureSection = () => (
  <section
    id="structure-section"
    className="section-container mb-24"
    data-oid="nc82lqz"
  >
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      data-oid="b1l8y8m"
    >
      <div data-oid="ewbtdrn">
        <h2
          className="section-heading text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          data-oid="my-kd_a"
        >
          Our Structure
        </h2>
        <p
          className="section-paragraph text-lg text-gray-700 leading-relaxed mb-6"
          data-oid="t310ach"
        >
          Assembly is structured to address the multifaceted needs of the modern
          professional through specialized schools designed for forward-thinking
          development:
        </p>
        <ul className="space-y-4 text-lg text-gray-700" data-oid="edq-uki">
          <li className="section-list-item flex items-start" data-oid="i3bxie8">
            <span
              className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 mr-3 mt-1 flex-shrink-0"
              data-oid="aarspqj"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                data-oid="yuetvir"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                  data-oid="h5mo482"
                />
              </svg>
            </span>
            <span data-oid="fkcq1pk">
              <strong data-oid="wx3smbd">School of Real Estate</strong>{" "}
              (Launching at a Later Date): Focused on innovative approaches and
              advanced strategies for property professionals.
            </span>
          </li>
          <li className="section-list-item flex items-start" data-oid="fpcpeoh">
            <span
              className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 mr-3 mt-1 flex-shrink-0"
              data-oid="4avm5sq"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                data-oid="a7w9hjs"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                  data-oid="k48qfbx"
                />
              </svg>
            </span>
            <span data-oid="y__d7qk">
              <strong data-oid="l-l_2yu">School of Creative Media</strong>{" "}
              (Launching at a Later Date): Cultivating skills in content
              creation, digital storytelling, and brand building.
            </span>
          </li>
          <li className="section-list-item flex items-start" data-oid="vwn_zg7">
            <span
              className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 mr-3 mt-1 flex-shrink-0"
              data-oid="0dua8hx"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                data-oid="12edoy7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                  data-oid="wsd00ox"
                />
              </svg>
            </span>
            <span data-oid="juu8fx.">
              <strong data-oid="5xete3b">School of Entrepreneurship</strong>{" "}
              (Launching at a Later Date): Empowering individuals with the
              knowledge and tools to build and scale successful ventures.
            </span>
          </li>
        </ul>
      </div>
      <div
        className="section-image relative h-96 rounded-xl overflow-hidden shadow-xl"
        data-oid="2.mel8p"
      >
        <img
          src="/images/structure-image.jpg"
          alt="Instructor teaching at a chalkboard"
          className="w-full h-full object-cover"
          loading="eager"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            console.error("Image failed to load:", target.src);
            target.src =
              "/placeholder.svg?height=384&width=576&text=Educational+Structure";
          }}
          data-oid="7gbxqll"
        />
      </div>
    </div>
  </section>
);

const PhilosophySection = () => (
  <section
    id="philosophy-section"
    className="section-container mb-24"
    data-oid="3p3h9jk"
  >
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      data-oid="fmey75t"
    >
      <div
        className="order-2 lg:order-1 section-image relative h-96 rounded-xl overflow-hidden shadow-xl"
        data-oid="xe.-rtg"
      >
        <img
          src="/images/philosophy-image.jpg"
          alt="Educational playbooks and materials"
          className="w-full h-full object-cover"
          loading="eager"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            console.error("Image failed to load:", target.src);
            target.src =
              "/placeholder.svg?height=384&width=576&text=Core+Values";
          }}
          data-oid="-ypcc.s"
        />
      </div>
      <div className="order-1 lg:order-2" data-oid="4234f56">
        <h2
          className="section-heading text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          data-oid="0x1vv22"
        >
          Our Philosophy
        </h2>
        <p
          className="section-paragraph text-lg text-gray-700 leading-relaxed"
          data-oid="cxw7vhr"
        >
          At the heart of Assembly are core values that guide our community and
          curriculum: Innovation, Collaboration, Empowerment, and
          Future-Readiness. We are committed to providing practical, relevant
          knowledge and fostering a supportive ecosystem where everyone is
          equipped to create their own success and positively impact their
          field.
        </p>
      </div>
    </div>
  </section>
);

const ChooseSection = () => (
  <section
    id="choose-section"
    className="section-container mb-24"
    data-oid="otjtzio"
  >
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      data-oid="h::v0vk"
    >
      <div data-oid="yb_yqx-">
        <h2
          className="section-heading text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          data-oid="xsu-sqq"
        >
          Why Choose Assembly?
        </h2>
        <p
          className="section-paragraph text-lg text-gray-700 leading-relaxed"
          data-oid="qjftd2d"
        >
          Assembly offers a unique synthesis of real estate expertise and
          creative/entrepreneurial skills. We provide not just education, but a
          transformative community experience focused on practical application
          and future growth. Join us to gain the edge needed to become a leading
          creator and empowered professional in your industry.
        </p>
      </div>
      <div
        className="section-image relative h-96 rounded-xl overflow-hidden shadow-xl"
        data-oid="19x75k9"
      >
        <img
          src="/images/choose-image.jpg"
          alt="Student taking notes at a property investment seminar"
          className="w-full h-full object-cover"
          loading="eager"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            console.error("Image failed to load:", target.src);
            target.src =
              "/placeholder.svg?height=384&width=576&text=Professionals+Celebrating";
          }}
          data-oid="mc06kne"
        />
      </div>
    </div>
  </section>
);

// Scroll to top button component
const ScrollToTopButton = ({ visible }: { visible: boolean }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`scroll-to-top-button ${visible ? "visible" : ""}`}
      data-oid="3-f13gk"
    >
      <ChevronUp size={24} data-oid="fhabblb" />
      <span className="sr-only" data-oid="emo-.de">
        Scroll to top
      </span>
    </button>
  );
};

// Main About Page component
export default function AboutPage() {
  // Main container ref to track when sections come into view
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [scrollSpeed, setScrollSpeed] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [documentHeight, setDocumentHeight] = useState(0);
  const lastScrollY = useRef(0);
  const lastScrollTime = useRef(Date.now());
  const sectionsRef = useRef<Map<string, HTMLElement>>(new Map());
  const [isInitialized, setIsInitialized] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  // Function to check if user has scrolled to bottom
  const checkIfAtBottom = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const bottomThreshold = document.documentElement.scrollHeight - 100; // 100px from bottom
    return scrollPosition >= bottomThreshold;
  };

  // Function to calculate section visibility based on position
  const getSectionVisibility = (element: HTMLElement): number => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const isLastSection = element.id === "choose-section";

    // If we're at the bottom of the page and this is the last section, always show it
    if (isLastSection && isAtBottom) {
      return 1;
    }

    // Special case for hero section when at the top of the page
    if (element.id === "hero-section" && window.scrollY < 100) {
      return 1; // Always show hero section when at the top
    }

    // Calculate visibility thresholds
    // These values control when sections start to appear and disappear
    const appearThreshold = windowHeight * 0.9; // When section starts to appear (90% down viewport)
    const fullVisibleThreshold = windowHeight * 0.5; // When section is fully visible (50% down viewport)
    const startFadingThreshold = windowHeight * 0.2; // When section starts to fade (20% down viewport)
    const disappearThreshold = -rect.height * 0.7; // When section is completely gone (70% of its height above viewport)

    // Calculate visibility based on section position
    if (rect.top >= appearThreshold) {
      // Section is below the viewport or just starting to enter
      // Map position from [appearThreshold, windowHeight] to [0, 0.3]
      return Math.max(
        0,
        Math.min(
          0.3,
          1 - (rect.top - appearThreshold) / (windowHeight - appearThreshold),
        ),
      );
    } else if (rect.top >= fullVisibleThreshold) {
      // Section is entering the viewport
      // Map position from [fullVisibleThreshold, appearThreshold] to [0.3, 1]
      return (
        0.3 +
        0.7 *
          (1 -
            (rect.top - fullVisibleThreshold) /
              (appearThreshold - fullVisibleThreshold))
      );
    } else if (rect.top >= startFadingThreshold) {
      // Section is in the prime visibility zone
      return 1;
    } else if (rect.top >= disappearThreshold) {
      // Section is leaving the viewport
      // Map position from [disappearThreshold, startFadingThreshold] to [0, 1]
      return Math.max(
        0,
        (rect.top - disappearThreshold) /
          (startFadingThreshold - disappearThreshold),
      );
    } else {
      // Section is above the viewport
      return 0;
    }
  };

  // Function to animate sections based on scroll position
  const animateSections = () => {
    // Check if we're at the bottom of the page
    const atBottom = checkIfAtBottom();
    setIsAtBottom(atBottom);

    // Get all sections and their visibility values
    const sectionVisibility = new Map<string, number>();
    sectionsRef.current.forEach((section, id) => {
      sectionVisibility.set(id, getSectionVisibility(section));
    });

    // Apply animations based on visibility
    sectionsRef.current.forEach((section, id) => {
      const visibility = sectionVisibility.get(id) || 0;
      const isLastSection = id === "choose-section";

      // If at bottom and this is the last section, force full visibility
      const finalVisibility = isLastSection && atBottom ? 1 : visibility;

      // Apply main section visibility
      section.style.opacity = `${finalVisibility}`;
      section.style.transform = `translateY(${Math.max(0, 30 - finalVisibility * 30)}px)`;

      // Animate child elements with slight delay
      const heading = section.querySelector(".section-heading") as HTMLElement;
      const paragraphs = section.querySelectorAll(".section-paragraph");
      const image = section.querySelector(".section-image") as HTMLElement;
      const listItems = section.querySelectorAll(".section-list-item");

      // Only animate children if section has significant visibility
      const childVisibility = Math.max(0, (finalVisibility - 0.2) * 1.25); // Remap 0.2-1.0 to 0-1

      // If at bottom and this is the last section, force full visibility for all children
      const finalChildVisibility =
        isLastSection && atBottom ? 1 : childVisibility;

      if (heading) {
        heading.style.opacity = `${finalChildVisibility}`;
        heading.style.transform = `scale(${0.95 + finalChildVisibility * 0.05})`;

        // Special case for hero section
        if (id === "hero-section" && window.scrollY < 100) {
          heading.style.opacity = "1";
          heading.style.transform = "scale(1)";
        }
      }

      // REMOVED: Paragraph animations are now removed
      // Make paragraphs always fully visible
      paragraphs.forEach((p) => {
        const el = p as HTMLElement;
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });

      if (image) {
        const imageVisibility =
          isLastSection && atBottom
            ? 1
            : Math.max(0, (childVisibility - 0.05) * 1.05); // Slight delay
        image.style.opacity = `${imageVisibility}`;
        image.style.transform = `scale(${0.9 + imageVisibility * 0.1})`;

        // Special case for hero section
        if (id === "hero-section" && window.scrollY < 100) {
          image.style.opacity = "1";
          image.style.transform = "scale(1)";
        }
      }

      listItems.forEach((item, index) => {
        const el = item as HTMLElement;
        const delay = 0.1 * index; // Staggered delay based on index
        const listItemVisibility =
          isLastSection && atBottom
            ? 1
            : Math.max(0, (childVisibility - delay) * 1.0); // Staggered delay
        el.style.opacity = `${listItemVisibility}`;
        el.style.transform = `translateX(${Math.max(0, 20 - listItemVisibility * 20)}px)`;

        // Special case for hero section
        if (
          id === "hero-section" &&
          window.scrollY < 100 &&
          section.contains(el)
        ) {
          el.style.opacity = "1";
          el.style.transform = "translateX(0)";
        }
      });
    });
  };

  // Initialize animations on first render
  useEffect(() => {
    if (!isInitialized && containerRef.current) {
      // Store references to all sections
      const sections = containerRef.current.querySelectorAll("section");
      sections.forEach((section) => {
        sectionsRef.current.set(section.id, section as HTMLElement);
      });

      // Force initial animation for hero section
      const heroSection = document.getElementById("hero-section");
      if (heroSection) {
        heroSection.style.opacity = "1";
        heroSection.style.transform = "translateY(0)";

        const heading = heroSection.querySelector(
          ".section-heading",
        ) as HTMLElement;
        const paragraphs = heroSection.querySelectorAll(".section-paragraph");
        const image = heroSection.querySelector(
          ".section-image",
        ) as HTMLElement;

        if (heading) {
          heading.style.opacity = "1";
          heading.style.transform = "scale(1)";
        }

        // Make paragraphs always fully visible
        paragraphs.forEach((p) => {
          const el = p as HTMLElement;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        });

        if (image) {
          image.style.opacity = "1";
          image.style.transform = "scale(1)";
        }
      }

      setIsInitialized(true);
    }
  }, [isInitialized]);

  useEffect(() => {
    const handleScroll = () => {
      const currentTime = Date.now();
      const timeDelta = currentTime - lastScrollTime.current;

      if (timeDelta > 0) {
        // Calculate scroll speed (pixels per millisecond)
        const currentScrollY = window.scrollY;
        const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);
        const speed = scrollDelta / timeDelta;

        setScrollY(currentScrollY);
        setScrollSpeed(speed * 100); // Scale for better usability

        // Update scroll to top button visibility
        setShowScrollToTop(currentScrollY > 300);

        // Check if at bottom
        setIsAtBottom(checkIfAtBottom());

        lastScrollY.current = currentScrollY;
        lastScrollTime.current = currentTime;

        // Animate sections based on scroll position
        animateSections();
      }
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
      setDocumentHeight(document.documentElement.scrollHeight);
    };

    // Set initial values
    handleResize();

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Add a small timeout to reset scroll speed when scrolling stops
    const scrollTimeout = setInterval(() => {
      if (Date.now() - lastScrollTime.current > 100) {
        setScrollSpeed(0);
      }
    }, 100);

    // Store references to all sections
    if (containerRef.current) {
      const sections = containerRef.current.querySelectorAll("section");
      sections.forEach((section) => {
        sectionsRef.current.set(section.id, section as HTMLElement);
      });

      // Initial animation
      animateSections();
    }

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      clearInterval(scrollTimeout);
    };
  }, []);

  return (
    <>
      <Navbar data-oid="jcpe9le" />
      <div ref={containerRef} className="bg-white pt-24" data-oid="g4wy82y">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
          data-oid="3q71vyw"
        >
          <HeroSection data-oid="95p-7et" />
          <AimSection data-oid="mn8vz0u" />
          <StructureSection data-oid="2gh4apg" />
          <PhilosophySection data-oid="4aro2jo" />
          <ChooseSection data-oid="n7f3gba" />
        </div>
        <ScrollToTopButton visible={showScrollToTop} data-oid="5hcea06" />
      </div>
    </>
  );
}
