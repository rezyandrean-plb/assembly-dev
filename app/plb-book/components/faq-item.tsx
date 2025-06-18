"use client";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef, useEffect, useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
  onClick?: () => void;
}

export function FAQItem({
  question,
  answer,
  isOpen = false,
  onClick,
}: FAQItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden"
      data-oid="d5gp5k9"
    >
      <button
        className="w-full p-6 flex items-center focus:outline-none transition-colors duration-300 hover:bg-gray-50 min-h-[80px]"
        onClick={onClick}
        aria-expanded={isOpen}
        data-oid="cebs_mc"
      >
        <div className="flex-grow flex items-center" data-oid="pwoflfw">
          <h3
            className="text-xl font-medium text-primary text-left w-full max-w-3xl px-4"
            data-oid="powhqgb"
          >
            {question}
          </h3>
        </div>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-primary transition-transform duration-300 ease-in-out flex-shrink-0",
            isOpen && "transform rotate-180",
          )}
          data-oid="wyak10q"
        />
      </button>
      <div
        ref={contentRef}
        style={{ height: height ? `${height}px` : "0px" }}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100" : "opacity-0",
        )}
        data-oid=".93jce7"
      >
        <div
          className="p-6 pt-0 flex items-center min-h-[60px]"
          data-oid="469bju0"
        >
          <p
            className="mx-auto max-w-3xl px-4 w-full text-left"
            data-oid="uoxouhl"
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
