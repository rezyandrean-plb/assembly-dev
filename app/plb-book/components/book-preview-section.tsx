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
      data-oid="qzgrle-"
    >
      <div className="container" data-oid="y-53gb-">
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
          data-oid="ghizbm4"
        >
          Preview
        </h2>

        <div className="preview-container" data-oid="lqdn27l">
          <div className="book-preview-wrapper" data-oid="s317:m6">
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
              data-oid="e1ondfw"
            >
              <div className="book-preview-front" data-oid="uspi2a3">
                <img
                  src="/placeholder.svg?height=400&width=300"
                  alt="Book Cover"
                  className="book-preview-cover"
                  data-oid="nx.wyct"
                />
              </div>
              <div className="book-preview-back" data-oid="w8qps2.">
                <div className="book-preview-content" data-oid="fwt5hgz">
                  <h3 className="book-preview-title" data-oid="2eagxoq">
                    Chapter 1: The Beginning
                  </h3>
                  <p className="book-preview-text" data-oid="ft3hv-p">
                    The Singapore property market has always been dynamic, with
                    unique characteristics that set it apart from other global
                    markets. Understanding these nuances is the first step to
                    successful property investment.
                  </p>
                  <p className="book-preview-text" data-oid="56e6b43">
                    In this chapter, we explore the fundamentals that every
                    property investor in Singapore should know before making
                    their first purchase.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="preview-instructions" data-oid="0it9vcm">
            Click the book to flip
          </p>

          <div className="quotes-container" data-oid="3ogntx3">
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
              data-oid="lw0m..e"
            >
              <p className="quote-text" data-oid="l9jf4h.">
                "Understanding the property cycle is crucial for timing your
                investments. This book provides clear insights into recognizing
                market phases."
              </p>
              <p className="quote-page" data-oid="xhzudo9">
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
              data-oid="t.u0:v_"
            >
              <p className="quote-text" data-oid="xbnv3p2">
                "The difference between a good and great property investment
                often comes down to location, timing, and financing strategy."
              </p>
              <p className="quote-page" data-oid="5eyh418">
                — Page 87
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
