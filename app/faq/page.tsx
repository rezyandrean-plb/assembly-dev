"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Assembly SG?",
    answer:
      "Assembly SG is Singapore's premier knowledge hub for real estate professionals. We provide comprehensive courses, learning paths, and resources to help property investors, agents, and enthusiasts make informed decisions in the Singapore property market.",
  },
  {
    question: "Who can benefit from Assembly SG courses?",
    answer:
      "Our courses are designed for a wide range of individuals including first-time property buyers, experienced investors, real estate agents, property developers, and anyone interested in understanding the Singapore property market better.",
  },
  {
    question: "How do I access my purchased courses?",
    answer:
      "Once you've purchased a course, you can access it through your profile dashboard. Simply log in to your account, navigate to 'My Courses' or 'Learning Progress' to view and access all your purchased content.",
  },
  {
    question: "Are the courses suitable for beginners?",
    answer:
      "Yes! We offer courses for all levels, from complete beginners to advanced investors. Our learning paths are specifically designed to guide you through your property investment journey, starting with foundational concepts and progressing to advanced strategies.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including credit cards, debit cards, and online banking. All payments are processed securely through our encrypted payment gateway.",
  },
  {
    question: "Can I get a refund if I'm not satisfied with a course?",
    answer:
      "We offer a satisfaction guarantee on our courses. If you're not satisfied with your purchase, please contact our support team within 30 days of purchase to discuss refund options.",
  },
  {
    question: "How long do I have access to purchased courses?",
    answer:
      "Once you purchase a course, you have lifetime access to the content. You can revisit the materials anytime and learn at your own pace.",
  },
  {
    question: "Do you offer certificates upon course completion?",
    answer:
      "Yes, we provide certificates of completion for our courses. These certificates can be downloaded from your profile once you've successfully completed all course modules.",
  },
  {
    question: "Are the courses updated regularly?",
    answer:
      "Yes, we regularly update our course content to reflect the latest market trends, regulations, and strategies in the Singapore property market. Existing students get access to updated content at no additional cost.",
  },
  {
    question: "Can I access courses on mobile devices?",
    answer:
      "Absolutely! Our platform is fully responsive and optimized for mobile devices. You can access your courses on smartphones, tablets, and desktop computers.",
  },
  {
    question: "Do you offer group discounts or corporate packages?",
    answer:
      "Yes, we offer special pricing for group purchases and corporate training packages. Please contact our sales team for more information about bulk pricing and customized training solutions.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our customer support team through the contact form on our website, email us directly, or use the live chat feature. We typically respond within 24 hours during business days.",
  },
  {
    question:
      "What makes Assembly SG different from other property education platforms?",
    answer:
      "Assembly SG focuses specifically on the Singapore property market with courses taught by experienced local professionals. We provide practical, actionable insights based on real market data and current regulations specific to Singapore.",
  },
  {
    question: "Can I preview course content before purchasing?",
    answer:
      "Yes, most of our courses offer free preview modules or sample content so you can get a feel for the teaching style and course quality before making a purchase decision.",
  },
  {
    question: "Do you offer one-on-one consultations?",
    answer:
      "We offer personalized consultation services with our expert facilitators. These sessions can be booked separately and are tailored to your specific property investment goals and questions.",
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <div className="min-h-screen bg-gray-50" data-oid="d-qvhxo">
      {/* Hero Section */}
      <div
        className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16"
        data-oid="3k0cx_."
      >
        <div className="container mx-auto px-4" data-oid="d9qu965">
          <div className="max-w-3xl mx-auto text-center" data-oid="ejf6h.q">
            <h1
              className="text-4xl md:text-5xl font-bold mb-6"
              data-oid="0wtag8n"
            >
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-100" data-oid="f503p6x">
              Find answers to common questions about Assembly SG courses,
              platform features, and more.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 py-16" data-oid="44vis2f">
        <div className="max-w-4xl mx-auto" data-oid="iuc6bbr">
          <div className="space-y-4" data-oid="qpdxqpa">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
                data-oid="nf_by5r"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  data-oid="kh:0qiv"
                >
                  <h3
                    className="text-lg font-semibold text-gray-900 pr-4"
                    data-oid="5zjfl6g"
                  >
                    {item.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <svg
                      className="h-5 w-5 text-gray-500 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="-f779-d"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                        data-oid="1xtl_do"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-5 w-5 text-gray-500 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="88s-5ih"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        data-oid="d8m46qf"
                      />
                    </svg>
                  )}
                </button>
                {openItems.includes(index) && (
                  <div className="px-6 pb-4" data-oid="_hcpu4r">
                    <div
                      className="border-t border-gray-200 pt-4"
                      data-oid="953l73j"
                    >
                      <p
                        className="text-gray-700 leading-relaxed"
                        data-oid="vy-g.0."
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div
            className="mt-16 bg-blue-50 rounded-lg p-8 text-center"
            data-oid="fe.hm8y"
          >
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              data-oid="lc8e6:h"
            >
              Still have questions?
            </h2>
            <p className="text-gray-600 mb-6" data-oid="4ei8nr_">
              Can't find the answer you're looking for? Our support team is here
              to help.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              data-oid="u92ij66"
            >
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                data-oid="y5qjl36"
              >
                Contact Support
              </a>
              <a
                href="mailto:support@assembly.sg"
                className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-200"
                data-oid="a4x7sv1"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
