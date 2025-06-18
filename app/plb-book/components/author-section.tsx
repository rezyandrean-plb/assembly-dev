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
    <section className="section author-section" data-oid="1.:.5lj">
      <div className="container" data-oid="s1jdhnq">
        <div className="author-content" data-oid="ggmp5ix">
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
            data-oid="3r5uc5u"
          >
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Property Lim Brothers Team"
              className="author-image"
              data-oid=".-occwz"
            />

            <div className="author-image-decoration" data-oid="8x.emh9"></div>
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
            data-oid="2py.fxj"
          >
            <h2 className="author-name" data-oid="lzxz8nw">
              Property Lim Brothers
            </h2>
            <p className="author-title feature-text" data-oid="mbrsv3l">
              Singapore's Property Experts
            </p>
            <p className="author-bio" data-oid="gp3bv7:">
              Property Lim Brothers is Singapore's leading property consultancy,
              with decades of experience in the local real estate market. Our
              team of experts has helped thousands of clients make informed
              property investment decisions.
            </p>
            <div className="social-links" data-oid="5xb0i:t">
              <a
                href="#"
                className="social-link"
                aria-label="Twitter"
                data-oid="f3g4a-7"
              >
                <Twitter size={20} data-oid="k:owg9q" />
              </a>
              <a
                href="#"
                className="social-link"
                aria-label="Instagram"
                data-oid=":p8yl4g"
              >
                <Instagram size={20} data-oid="9653s5_" />
              </a>
              <a
                href="#"
                className="social-link"
                aria-label="LinkedIn"
                data-oid="pl0.sme"
              >
                <Linkedin size={20} data-oid="k804ww8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
