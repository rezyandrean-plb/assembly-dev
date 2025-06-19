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
    <section className="section author-section" data-oid="-ijxoc:">
      <div className="container" data-oid="ez73hag">
        <div className="author-content" data-oid="4:83c8n">
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
            data-oid="bkprkn7"
          >
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Property Lim Brothers Team"
              className="author-image"
              data-oid="naz:j4y"
            />

            <div className="author-image-decoration" data-oid="6pqt1-y"></div>
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
            data-oid="r4z.c4t"
          >
            <h2 className="author-name" data-oid="_dpp9_5">
              Property Lim Brothers
            </h2>
            <p className="author-title feature-text" data-oid="dmo4y_z">
              Singapore's Property Experts
            </p>
            <p className="author-bio" data-oid="jfc11cx">
              Property Lim Brothers is Singapore's leading property consultancy,
              with decades of experience in the local real estate market. Our
              team of experts has helped thousands of clients make informed
              property investment decisions.
            </p>
            <div className="social-links" data-oid="fos5axg">
              <a
                href="#"
                className="social-link"
                aria-label="Twitter"
                data-oid=":bzdq25"
              >
                <Twitter size={20} data-oid="iz:uj-_" />
              </a>
              <a
                href="#"
                className="social-link"
                aria-label="Instagram"
                data-oid="7emvndc"
              >
                <Instagram size={20} data-oid="_mp-k8h" />
              </a>
              <a
                href="#"
                className="social-link"
                aria-label="LinkedIn"
                data-oid="-4ewpf2"
              >
                <Linkedin size={20} data-oid="gg-w_mt" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
