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
      data-oid="8n_1ml8"
    >
      <div ref={bookRef} className="book" data-oid="727n8sr">
        <div className="book-cover" data-oid="hxtry5d">
          <div className="book-title" data-oid="-c0cir3">
            <h2 data-oid="6jw:bqa">Property Launch Bible</h2>
            <p data-oid="8.b.1bn">2025 Edition</p>
          </div>
          <div className="book-author" data-oid="wnyiqpm">
            By Property Lim Brothers
          </div>
          <div className="book-effect" data-oid=".vs3.j5"></div>
        </div>
        <div className="book-spine" data-oid="0ftx94y"></div>
      </div>

      <motion.div
        className="book-shadow"
        animate={{
          width: isHovered ? "90%" : "80%",
          opacity: isHovered ? 0.3 : 0.2,
        }}
        data-oid="f3jnow7"
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
        data-oid="x.-2qii"
      >
        FREE!
      </motion.div>
    </div>
  );
}
