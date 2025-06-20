"use client";

import { useRef } from "react";
import { useScrollAnimation } from "../hooks/use-scroll-animation";
import anime from "animejs";
import { Twitter, Instagram, Linkedin } from "lucide-react";

export default function AuthorSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const imageAnimRef = useScrollAnimation(() => {
    return anime({
      targets: imageRef.current,
      opacity: [0, 1],
      translateX: [-50, 0],
      duration: 800,
    });
  });

  const infoAnimRef = useScrollAnimation(() => {
    return anime({
      targets: infoRef.current,
      opacity: [0, 1],
      translateX: [50, 0],
      duration: 800,
      delay: 200,
    });
  });

  return (
    <section className="section author-section" data-oid="6r7:gpv">
      <div className="container" data-oid="ve__p6r">
        <div className="author-content" data-oid="p54e9fv">
          <div
            className="author-image-wrapper"
            ref={(el) => {
              if (imageRef.current === null && el !== null) {
                imageRef.current = el;
              }
              if (typeof imageAnimRef === "function") {
                imageAnimRef(el);
              }
            }}
            data-oid="m52wjrz"
          >
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Property Lim Brothers Team"
              className="author-image"
              data-oid="rz4h4jr"
            />

            <div className="author-image-decoration" data-oid=".nz8vxx"></div>
          </div>

          <div
            className="author-info"
            ref={(el) => {
              if (infoRef.current === null && el !== null) {
                infoRef.current = el;
              }
              if (typeof infoAnimRef === "function") {
                infoAnimRef(el);
              }
            }}
            data-oid="f0n85c0"
          >
            <h2 className="author-name" data-oid="rv12qjj">
              Property Lim Brothers
            </h2>
            <p className="author-title feature-text" data-oid="trgapvo">
              Singapore's Property Experts
            </p>
            <p className="author-bio" data-oid="hta7yqs">
              Property Lim Brothers is Singapore's leading property consultancy,
              with decades of experience in the local real estate market. Our
              team of experts has helped thousands of clients make informed
              property investment decisions.
            </p>
            <div className="social-links" data-oid="eu3b39t">
              <a
                href="#"
                className="social-link"
                aria-label="Twitter"
                data-oid="aoqf:v7"
              >
                <Twitter size={20} data-oid="whm8x2." />
              </a>
              <a
                href="#"
                className="social-link"
                aria-label="Instagram"
                data-oid="xwma.61"
              >
                <Instagram size={20} data-oid="4.bd1u7" />
              </a>
              <a
                href="#"
                className="social-link"
                aria-label="LinkedIn"
                data-oid="z8ihi1h"
              >
                <Linkedin size={20} data-oid="4ydpvk." />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
