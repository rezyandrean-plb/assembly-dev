"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface AutoScrollCarouselProps {
  images: string[];
  visibleCount?: number;
  autoScrollInterval?: number;
}

export function AutoScrollCarousel({
  images,
  visibleCount = 4,
  autoScrollInterval = 3000,
}: AutoScrollCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const totalImages = images.length;
  const containerRef = useRef<HTMLDivElement>(null);

  // Create a duplicated array of images for infinite scrolling
  // We need enough copies to ensure smooth scrolling in both directions
  const extendedImages = [...images, ...images, ...images];
  const startIndex = totalImages; // Start from the middle set

  // Initialize with the middle set
  useEffect(() => {
    setCurrentIndex(startIndex);
  }, [startIndex]);

  // Function to scroll to the next image with seamless looping
  const scrollToNext = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    // Always increment normally
    setCurrentIndex((prevIndex) => prevIndex + 1);

    // If we're approaching the end of our extended array, reset to the middle
    // This happens after the transition is complete so it's invisible to the user
    setTimeout(() => {
      setIsTransitioning(false);

      // If we've scrolled past the second set, reset to the equivalent position in the middle set
      if (currentIndex >= totalImages * 2 - 1) {
        setCurrentIndex((prevIndex) => (prevIndex % totalImages) + totalImages);
      }
    }, 600);
  };

  // Function to scroll to the previous image with seamless looping
  const scrollToPrev = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    // Always decrement normally
    setCurrentIndex((prevIndex) => prevIndex - 1);

    // If we're approaching the beginning of our extended array, reset to the middle
    setTimeout(() => {
      setIsTransitioning(false);

      // If we've scrolled before the first set, reset to the equivalent position in the middle set
      if (currentIndex <= 0) {
        setCurrentIndex(
          (prevIndex) => totalImages * 2 - (Math.abs(prevIndex) % totalImages),
        );
      }
    }, 600);
  };

  // Set up auto-scrolling
  useEffect(() => {
    if (!isHovered && !isTransitioning) {
      intervalRef.current = setInterval(scrollToNext, autoScrollInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, autoScrollInterval, isTransitioning, currentIndex]);

  return (
    <div
      className="relative w-full overflow-hidden py-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={containerRef}
      data-oid="6h5vtpj"
    >
      {/* Navigation buttons */}
      <button
        onClick={scrollToPrev}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-all"
        aria-label="Previous image"
        data-oid="9g7inyy"
      >
        <ChevronLeft className="h-6 w-6" data-oid="bldv2q6" />
      </button>

      <button
        onClick={scrollToNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-all"
        aria-label="Next image"
        data-oid=".oqpg.:"
      >
        <ChevronRight className="h-6 w-6" data-oid="nrz.8cm" />
      </button>

      {/* Carousel container with consistent padding */}
      <div className="px-8" data-oid="h9k5f4l">
        {/* Carousel track */}
        <div
          className="flex flex-nowrap gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(calc(-${(currentIndex - startIndex) * 25}% - ${(currentIndex - startIndex) * 2}rem))`,
            willChange: "transform",
          }}
          data-oid="x-13:e-"
        >
          {extendedImages.map((image, index) => (
            <div
              key={index}
              className="w-[calc(25%-1.5rem)] flex-shrink-0"
              style={{ minWidth: "calc(25% - 1.5rem)" }}
              data-oid="o51mo:k"
            >
              <div
                className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white p-2"
                data-oid="adan_xv"
              >
                <div
                  className="w-full h-full flex items-center justify-center"
                  data-oid="4pj.b:."
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Property Quote ${(index % totalImages) + 1}`}
                    className="max-w-full max-h-full object-contain"
                    data-oid="axh7wfx"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-6 gap-2" data-oid="-gsssno">
        {Array.from({ length: totalImages }).map((_, index) => {
          const normalizedIndex =
            ((currentIndex % totalImages) + totalImages) % totalImages;
          const isActive = normalizedIndex === index;
          return (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  // Jump to the equivalent position in the middle set
                  setCurrentIndex(index + totalImages);
                  setTimeout(() => setIsTransitioning(false), 600);
                }
              }}
              className={`w-2 h-2 rounded-full transition-all ${isActive ? "bg-primary w-6" : "bg-gray-300"}`}
              aria-label={`Go to image ${index + 1}`}
              data-oid=":09l_37"
            />
          );
        })}
      </div>
    </div>
  );
}
