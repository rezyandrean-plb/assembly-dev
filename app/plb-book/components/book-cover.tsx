"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function BookCover() {
  const [isHovered, setIsHovered] = useState(false);
  const bookRef = useRef<HTMLDivElement>(null);

  // Track mouse position for 3D effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!bookRef.current || !isHovered) return;

      const book = bookRef.current;
      const bookRect = book.getBoundingClientRect();

      const mouseX = e.clientX - bookRect.left;
      const mouseY = e.clientY - bookRect.top;

      const rotateY = (mouseX / bookRect.width - 0.5) * 20;
      const rotateX = (mouseY / bookRect.height - 0.5) * -20;

      book.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovered]);

  return (
    <div
      className="book-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        if (bookRef.current) {
          bookRef.current.style.transform =
            "perspective(1000px) rotateY(0) rotateX(0)";
        }
      }}
      data-oid="9zegtgr"
    >
      <div ref={bookRef} className="book" data-oid="1eir5n0">
        <div className="book-cover" data-oid="ivk0-fr">
          <div className="book-title" data-oid="52-u:mm">
            <h2 data-oid="tx0cd-m">Property Launch Bible</h2>
            <p data-oid="gm8ccp6">2025 Edition</p>
          </div>
          <div className="book-author" data-oid="jssvip0">
            By Property Lim Brothers
          </div>
          <div className="book-effect" data-oid="_-vvkm2"></div>
        </div>
        <div className="book-spine" data-oid="tmn.m2b"></div>
      </div>

      <motion.div
        className="book-shadow"
        animate={{
          width: isHovered ? "90%" : "80%",
          opacity: isHovered ? 0.3 : 0.2,
        }}
        data-oid="98de6.1"
      ></motion.div>

      <motion.div
        className="book-badge"
        initial={{ rotate: -5 }}
        animate={{ rotate: isHovered ? 5 : -5 }}
        transition={{
          duration: 0.5,
          yoyo: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        data-oid="2k2.lbe"
      >
        FREE!
      </motion.div>
    </div>
  );
}
