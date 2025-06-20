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
    <section className="section author-section" data-oid=":-h_nom">
      <div className="container" data-oid="k1-e6y1">
        <div className="author-content" data-oid="mwjlw9-">
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
            data-oid="tn8r:lh"
          >
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Property Lim Brothers Team"
              className="author-image"
              data-oid="_qk2n6c"
            />

            <div className="author-image-decoration" data-oid="v:eur_m"></div>
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
            data-oid="4k8hkcm"
          >
            <h2 className="author-name" data-oid="75cxpwq">
              Property Lim Brothers
            </h2>
            <p className="author-title feature-text" data-oid="jx0_926">
              Singapore's Property Experts
            </p>
            <p className="author-bio" data-oid="dkp39jp">
              Property Lim Brothers is Singapore's leading property consultancy,
              with decades of experience in the local real estate market. Our
              team of experts has helped thousands of clients make informed
              property investment decisions.
            </p>
            <div className="social-links" data-oid="mw3eh5y">
              <a
                href="#"
                className="social-link"
                aria-label="Twitter"
                data-oid="xxw8lqs"
              >
                <Twitter size={20} data-oid="8v61_o9" />
              </a>
              <a
                href="#"
                className="social-link"
                aria-label="Instagram"
                data-oid="ipai6xz"
              >
                <Instagram size={20} data-oid="keq3buv" />
              </a>
              <a
                href="#"
                className="social-link"
                aria-label="LinkedIn"
                data-oid="kgn_puq"
              >
                <Linkedin size={20} data-oid="l84mcck" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
