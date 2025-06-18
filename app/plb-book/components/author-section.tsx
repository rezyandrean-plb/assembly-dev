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
    <section className="section author-section" data-oid="m:l4c.m">
      <div className="container" data-oid=":tsarhg">
        <div className="author-content" data-oid="ac1f6gq">
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
            data-oid="5j1m-rw"
          >
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Property Lim Brothers Team"
              className="author-image"
              data-oid="07gf3db"
            />

            <div className="author-image-decoration" data-oid="0r5slp4"></div>
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
            data-oid="w5pireq"
          >
            <h2 className="author-name" data-oid="4dm_.n_">
              Property Lim Brothers
            </h2>
            <p className="author-title feature-text" data-oid="q0e-2dx">
              Singapore's Property Experts
            </p>
            <p className="author-bio" data-oid="-d:282d">
              Property Lim Brothers is Singapore's leading property consultancy,
              with decades of experience in the local real estate market. Our
              team of experts has helped thousands of clients make informed
              property investment decisions.
            </p>
            <div className="social-links" data-oid="9cutqho">
              <a
                href="#"
                className="social-link"
                aria-label="Twitter"
                data-oid="6-hx0:t"
              >
                <Twitter size={20} data-oid="j_ap_xi" />
              </a>
              <a
                href="#"
                className="social-link"
                aria-label="Instagram"
                data-oid="2x4xmov"
              >
                <Instagram size={20} data-oid="3s9auzd" />
              </a>
              <a
                href="#"
                className="social-link"
                aria-label="LinkedIn"
                data-oid="2v_5vy-"
              >
                <Linkedin size={20} data-oid="j2xmto2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
