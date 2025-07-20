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
    <section className="section author-section" data-oid="ynjy1go">
      <div className="container" data-oid="olpl8u_">
        <div className="author-content" data-oid="sgsva1j">
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
            data-oid="xh8-9h8"
          >
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Property Lim Brothers Team"
              className="author-image"
              data-oid="wgaqj8z"
            />

            <div className="author-image-decoration" data-oid="_fd:4i1"></div>
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
            data-oid="wt:5r53"
          >
            <h2 className="author-name" data-oid="3w5age_">
              Property Lim Brothers
            </h2>
            <p className="author-title feature-text" data-oid="pyu7hd:">
              Singapore's Property Experts
            </p>
            <p className="author-bio" data-oid="qe9k1vr">
              Property Lim Brothers is Singapore's leading property consultancy,
              with decades of experience in the local real estate market. Our
              team of experts has helped thousands of clients make informed
              property investment decisions.
            </p>
            <div className="social-links" data-oid="3ni8bff">
              <a
                href="#"
                className="social-link"
                aria-label="Twitter"
                data-oid="ffsiusg"
              >
                <Twitter size={20} data-oid=".1_6qp5" />
              </a>
              <a
                href="#"
                className="social-link"
                aria-label="Instagram"
                data-oid="oakzdk:"
              >
                <Instagram size={20} data-oid="wfpdon:" />
              </a>
              <a
                href="#"
                className="social-link"
                aria-label="LinkedIn"
                data-oid="en5n4uz"
              >
                <Linkedin size={20} data-oid="ix005e1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
