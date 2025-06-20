"use client";

import { useRef, useState } from "react";
import { useScrollAnimation } from "../hooks/use-scroll-animation";
import anime from "animejs";

export default function BookPreviewSection() {
  const [flipped, setFlipped] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);
  const quote1Ref = useRef<HTMLDivElement>(null);
  const quote2Ref = useRef<HTMLDivElement>(null);

  const titleAnimRef = useScrollAnimation(() => {
    return anime({
      targets: titleRef.current,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
    });
  });

  const bookAnimRef = useScrollAnimation(() => {
    return anime({
      targets: bookRef.current,
      opacity: [0, 1],
      scale: [0.8, 1],
      duration: 1000,
    });
  });

  const quote1AnimRef = useScrollAnimation(() => {
    return anime({
      targets: quote1Ref.current,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
    });
  });

  const quote2AnimRef = useScrollAnimation(() => {
    return anime({
      targets: quote2Ref.current,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      delay: 200,
    });
  });

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <section
      className="section preview-section"
      id="preview"
      data-oid="n62whok"
    >
      <div className="container" data-oid="opp4c_r">
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
          data-oid="m.dfxr:"
        >
          Preview
        </h2>

        <div className="preview-container" data-oid="mvn9ygg">
          <div className="book-preview-wrapper" data-oid="liarlrl">
            <div
              className={`book-preview ${flipped ? "flipped" : ""}`}
              onClick={handleFlip}
              ref={(el) => {
                if (bookRef.current === null && el !== null) {
                  bookRef.current = el;
                }
                if (typeof bookAnimRef === "function") {
                  bookAnimRef(el);
                }
              }}
              data-oid="i1_nq56"
            >
              <div className="book-preview-front" data-oid="5kq_:9u">
                <img
                  src="/placeholder.svg?height=400&width=300"
                  alt="Book Cover"
                  className="book-preview-cover"
                  data-oid="v-tnhuv"
                />
              </div>
              <div className="book-preview-back" data-oid="-ncevhi">
                <div className="book-preview-content" data-oid="6jt26y5">
                  <h3 className="book-preview-title" data-oid="9xi0eza">
                    Chapter 1: The Beginning
                  </h3>
                  <p className="book-preview-text" data-oid="c7o6xcz">
                    The Singapore property market has always been dynamic, with
                    unique characteristics that set it apart from other global
                    markets. Understanding these nuances is the first step to
                    successful property investment.
                  </p>
                  <p className="book-preview-text" data-oid="7wntz-.">
                    In this chapter, we explore the fundamentals that every
                    property investor in Singapore should know before making
                    their first purchase.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="preview-instructions" data-oid="j:voszl">
            Click the book to flip
          </p>

          <div className="quotes-container" data-oid="upcv1-n">
            <div
              className="quote"
              ref={(el) => {
                if (quote1Ref.current === null && el !== null) {
                  quote1Ref.current = el;
                }
                if (typeof quote1AnimRef === "function") {
                  quote1AnimRef(el);
                }
              }}
              data-oid="0ps9v68"
            >
              <p className="quote-text" data-oid="kus1otr">
                "Understanding the property cycle is crucial for timing your
                investments. This book provides clear insights into recognizing
                market phases."
              </p>
              <p className="quote-page" data-oid="o:ig.5m">
                — Page 42
              </p>
            </div>

            <div
              className="quote"
              ref={(el) => {
                if (quote2Ref.current === null && el !== null) {
                  quote2Ref.current = el;
                }
                if (typeof quote2AnimRef === "function") {
                  quote2AnimRef(el);
                }
              }}
              data-oid=":esdtsf"
            >
              <p className="quote-text" data-oid="c87bmhw">
                "The difference between a good and great property investment
                often comes down to location, timing, and financing strategy."
              </p>
              <p className="quote-page" data-oid="gsj:5ic">
                — Page 87
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
