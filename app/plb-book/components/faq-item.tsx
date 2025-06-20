"use client";
import { ChevronDown, HelpCircle } from "lucide-react";
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
      className={cn(
        "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md",
        isOpen && "shadow-lg border-primary/20",
      )}
      data-oid="fz5n3h:"
    >
      <button
        className={cn(
          "w-full p-6 flex items-center gap-4 focus:outline-none transition-all duration-300 text-left group h-24",
          isOpen ? "bg-primary/5" : "hover:bg-gray-50",
        )}
        onClick={onClick}
        aria-expanded={isOpen}
        data-oid="c-:3h2m"
      >
        {/* Question icon */}
        <div
          className={cn(
            "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300",
            isOpen
              ? "bg-primary text-white"
              : "bg-primary/10 text-primary group-hover:bg-primary/20",
          )}
          data-oid="bxo:is3"
        >
          <HelpCircle className="w-4 h-4" data-oid="48a_7hl" />
        </div>

        {/* Question text */}
        <div
          className="flex-grow flex items-center min-h-[32px]"
          data-oid="5n9yws."
        >
          <h3
            className={cn(
              "text-lg font-semibold transition-colors duration-300 leading-tight",
              isOpen
                ? "text-primary"
                : "text-gray-900 group-hover:text-primary",
            )}
            data-oid="d_-3r_g"
          >
            {question}
          </h3>
        </div>

        {/* Chevron icon */}
        <ChevronDown
          className={cn(
            "h-5 w-5 transition-all duration-300 ease-in-out flex-shrink-0",
            isOpen
              ? "transform rotate-180 text-primary"
              : "text-gray-400 group-hover:text-primary",
          )}
          data-oid="6x.9hn2"
        />
      </button>

      {/* Answer content */}
      <div
        ref={contentRef}
        style={{ height: height ? `${height}px` : "0px" }}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100" : "opacity-0",
        )}
        data-oid="2wlzh64"
      >
        <div className="px-6 pb-6 pl-18" data-oid="k82avl3">
          <div className="border-l-2 border-primary/20 pl-6" data-oid="sas7lhi">
            <p className="text-gray-600 leading-relaxed" data-oid="0wcm_ef">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
