"use client";

import { useRef, useState, useEffect } from "react";
import { useScrollAnimation } from "../hooks/use-scroll-animation";
import anime from "animejs";
import { Star } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
  rating: number;
}

function Testimonial({ quote, author, title, rating }: TestimonialProps) {
  return (
    <div className="testimonial-card" data-oid="eqdx5k6">
      <div className="rating" data-oid="ycwom1e">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < rating ? "star filled" : "star"}
            fill={i < rating ? "currentColor" : "none"}
            data-oid="jvczt5y"
          />
        ))}
      </div>
      <p className="testimonial-quote" data-oid="rvxhvic">
        {quote}
      </p>
      <div className="testimonial-author" data-oid="k755s7h">
        <div className="author-avatar" data-oid="ml:l:tm">
          {author.charAt(0)}
        </div>
        <div className="author-info" data-oid="h:v.f:5">
          <h4 className="author-name" data-oid="krzg67-">
            {author}
          </h4>
          <p className="author-title" data-oid="81r1sak">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  const titleAnimRef = useScrollAnimation(() => {
    return anime({
      targets: titleRef.current,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
    });
  });

  const subtitleAnimRef = useScrollAnimation(() => {
    return anime({
      targets: subtitleRef.current,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      delay: 200,
    });
  });

  useEffect(() => {
    const updateSlideWidth = () => {
      if (containerRef.current) {
        setSlideWidth(containerRef.current.offsetWidth);
      }
    };

    updateSlideWidth();
    window.addEventListener("resize", updateSlideWidth);

    return () => {
      window.removeEventListener("resize", updateSlideWidth);
    };
  }, []);

  const testimonials = [
    {
      quote:
        "The PLB Book transformed my approach to property investment. I've seen a 15% increase in my portfolio value since applying these strategies.",
      author: "Sarah Tan",
      title: "Property Investor",
      rating: 5,
    },
    {
      quote:
        "As a first-time homebuyer, this guide provided clarity and confidence. The step-by-step approach made the complex process manageable.",
      author: "Michael Lim",
      title: "First-time Homebuyer",
      rating: 5,
    },
    {
      quote:
        "The market analysis in the PLB Book is unparalleled. It's now my go-to resource for property research and investment decisions.",
      author: "David Wong",
      title: "Real Estate Agent",
      rating: 5,
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <section
      className="section testimonials-section bg-[#F0EAE2]"
      id="testimonials"
      data-oid="wbfngry"
    >
      <div className="container" data-oid="0-h6jqu">
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
          data-oid="tk26lqj"
        >
          What Our{" "}
          <span className="text-highlight" data-oid="py8-:w_">
            Readers Say
          </span>
        </h2>

        <p
          className="section-subtitle text-center"
          ref={(el) => {
            if (subtitleRef.current === null && el !== null) {
              subtitleRef.current = el;
            }
            if (typeof subtitleAnimRef === "function") {
              subtitleAnimRef(el);
            }
          }}
          data-oid="y3k-8a8"
        >
          Join thousands of satisfied readers who have transformed their
          property investment journey
        </p>

        <div className="testimonials-slider" data-oid="ft5x46z">
          <div className="navigation-buttons" data-oid="0.2sbv-">
            <button
              onClick={handlePrev}
              className="nav-button prev"
              aria-label="Previous testimonial"
              data-oid=".esfih8"
            >
              &#10094;
            </button>
            <button
              onClick={handleNext}
              className="nav-button next"
              aria-label="Next testimonial"
              data-oid="76le1ur"
            >
              &#10095;
            </button>
          </div>

          <div
            className="slider-container"
            ref={containerRef}
            data-oid="jr70x.9"
          >
            <div
              className="slider-track"
              style={{
                transform: `translateX(${-currentSlide * slideWidth}px)`,
              }}
              data-oid="655mh2a"
            >
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  title={testimonial.title}
                  rating={testimonial.rating}
                  data-oid="8vg1x.c"
                />
              ))}
            </div>
          </div>

          <div className="slider-controls" data-oid="1ef2zsj">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${currentSlide === index ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                data-oid="ybzhhir"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
