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
      data-oid="9znt6e3"
    >
      <div ref={bookRef} className="book" data-oid="l.vql4r">
        <div className="book-cover" data-oid="nhb_f52">
          <div className="book-title" data-oid="_lg2lmm">
            <h2 data-oid="l87824-">Property Launch Bible</h2>
            <p data-oid="9-j7qpz">2025 Edition</p>
          </div>
          <div className="book-author" data-oid="jnz_7pa">
            By Property Lim Brothers
          </div>
          <div className="book-effect" data-oid="vqn9hrt"></div>
        </div>
        <div className="book-spine" data-oid="vvwr-wb"></div>
      </div>

      <motion.div
        className="book-shadow"
        animate={{
          width: isHovered ? "90%" : "80%",
          opacity: isHovered ? 0.3 : 0.2,
        }}
        data-oid="gig39lo"
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
        data-oid="jasidd8"
      >
        FREE!
      </motion.div>
    </div>
  );
}
