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
    <section className="section author-section" data-oid="n3yflgu">
      <div className="container" data-oid="2ynzbe6">
        <div className="author-content" data-oid="6y8yxue">
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
            data-oid="2.vpm7b"
          >
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Property Lim Brothers Team"
              className="author-image"
              data-oid="xzlc83c"
            />

            <div className="author-image-decoration" data-oid="u9754bh"></div>
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
            data-oid="fvmuw0e"
          >
            <h2 className="author-name" data-oid="plw54i9">
              Property Lim Brothers
            </h2>
            <p className="author-title feature-text" data-oid="e5tz78y">
              Singapore's Property Experts
            </p>
            <p className="author-bio" data-oid="u_tg1c8">
              Property Lim Brothers is Singapore's leading property consultancy,
              with decades of experience in the local real estate market. Our
              team of experts has helped thousands of clients make informed
              property investment decisions.
            </p>
            <div className="social-links" data-oid="lr8:m5e">
              <a
                href="#"
                className="social-link"
                aria-label="Twitter"
                data-oid="p.7v1p4"
              >
                <Twitter size={20} data-oid="4-dxq96" />
              </a>
              <a
                href="#"
                className="social-link"
                aria-label="Instagram"
                data-oid="nup84x0"
              >
                <Instagram size={20} data-oid="slw510a" />
              </a>
              <a
                href="#"
                className="social-link"
                aria-label="LinkedIn"
                data-oid="e8heafi"
              >
                <Linkedin size={20} data-oid="8--2jjr" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
