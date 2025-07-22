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
    <section className="section author-section">
      <div className="container">
        <div className="author-content">
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
          >
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Property Lim Brothers Team"
              className="author-image"
            />

            <div className="author-image-decoration"></div>
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
          >
            <h2 className="author-name">Property Lim Brothers</h2>
            <p className="author-title feature-text">
              Singapore's Property Experts
            </p>
            <p className="author-bio">
              Property Lim Brothers is Singapore's leading property consultancy,
              with decades of experience in the local real estate market. Our
              team of experts has helped thousands of clients make informed
              property investment decisions.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
