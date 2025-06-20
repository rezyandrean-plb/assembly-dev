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
    <section className="section author-section" data-oid="j3_0pa3">
      <div className="container" data-oid="tlm.kyb">
        <div className="author-content" data-oid="f1m79ec">
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
            data-oid="0xjpvjv"
          >
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Property Lim Brothers Team"
              className="author-image"
              data-oid="o4l03d-"
            />

            <div className="author-image-decoration" data-oid="i3gb23x"></div>
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
            data-oid="87_o-cc"
          >
            <h2 className="author-name" data-oid="6fu5mwb">
              Property Lim Brothers
            </h2>
            <p className="author-title feature-text" data-oid="5pf-0a6">
              Singapore's Property Experts
            </p>
            <p className="author-bio" data-oid="ao1c_lb">
              Property Lim Brothers is Singapore's leading property consultancy,
              with decades of experience in the local real estate market. Our
              team of experts has helped thousands of clients make informed
              property investment decisions.
            </p>
            <div className="social-links" data-oid="uza3td:">
              <a
                href="#"
                className="social-link"
                aria-label="Twitter"
                data-oid="r1omy1-"
              >
                <Twitter size={20} data-oid="8oqn:3g" />
              </a>
              <a
                href="#"
                className="social-link"
                aria-label="Instagram"
                data-oid="07y9:z9"
              >
                <Instagram size={20} data-oid="e77ctb2" />
              </a>
              <a
                href="#"
                className="social-link"
                aria-label="LinkedIn"
                data-oid="hft3asx"
              >
                <Linkedin size={20} data-oid=".69g5rq" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
