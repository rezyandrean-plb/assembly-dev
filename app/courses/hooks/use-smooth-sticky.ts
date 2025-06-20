"use client";

import { useEffect, useRef, useState } from "react";

interface UseSmoothStickyOptions {
  offset?: number;
  rootMargin?: string;
}

export function useSmoothSticky(options: UseSmoothStickyOptions = {}) {
  const { offset = 24, rootMargin = "0px" } = options;
  const [isSticky, setIsSticky] = useState(false);
  const [stickyOffset, setStickyOffset] = useState(offset);
  const elementRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    const sentinel = sentinelRef.current;

    if (!element || !sentinel) return;

    // Create intersection observer for the sentinel
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      {
        rootMargin,
        threshold: 0,
      },
    );

    observer.observe(sentinel);

    // Handle scroll for smooth offset adjustment
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          // Create a more subtle offset adjustment that feels natural
          const dynamicOffset = Math.max(
            offset,
            Math.min(offset + scrollY * 0.01, offset + 12),
          );
          setStickyOffset(dynamicOffset);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset, rootMargin]);

  return {
    elementRef,
    sentinelRef,
    isSticky,
    stickyOffset,
  };
}
