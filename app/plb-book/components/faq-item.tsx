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
      data-oid="06uz-2k"
    >
      <button
        className={cn(
          "w-full p-6 flex items-center gap-4 focus:outline-none transition-all duration-300 text-left group h-24",
          isOpen ? "bg-primary/5" : "hover:bg-gray-50",
        )}
        onClick={onClick}
        aria-expanded={isOpen}
        data-oid="ze-z1ll"
      >
        {/* Question icon */}
        <div
          className={cn(
            "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300",
            isOpen
              ? "bg-primary text-white"
              : "bg-primary/10 text-primary group-hover:bg-primary/20",
          )}
          data-oid="qw96o4z"
        >
          <HelpCircle className="w-4 h-4" data-oid="t2848cj" />
        </div>

        {/* Question text */}
        <div
          className="flex-grow flex items-center min-h-[32px]"
          data-oid="yw-glc-"
        >
          <h3
            className={cn(
              "text-lg font-semibold transition-colors duration-300 leading-tight",
              isOpen
                ? "text-primary"
                : "text-gray-900 group-hover:text-primary",
            )}
            data-oid="x3illyu"
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
          data-oid=".7uk:04"
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
        data-oid="x99r19t"
      >
        <div className="px-6 pb-6 pl-18" data-oid="zhdmplx">
          <div className="border-l-2 border-primary/20 pl-6" data-oid="wsajq.v">
            <p className="text-gray-600 leading-relaxed" data-oid="9mttd0z">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
