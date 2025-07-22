"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  HelpCircle,
  MessageCircle,
  Mail,
  Phone,
  Search,
  Star,
  Users,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Assembly SG?",
    answer:
      "Assembly SG is Singapore's premier knowledge hub for real estate professionals. We provide comprehensive courses, learning paths, and resources to help property investors, agents, and enthusiasts make informed decisions in the Singapore property market.",
    category: "General",
  },
  {
    question: "Who can benefit from Assembly SG courses?",
    answer:
      "Our courses are designed for a wide range of individuals including first-time property buyers, experienced investors, real estate agents, property developers, and anyone interested in understanding the Singapore property market better.",
    category: "General",
  },
  {
    question: "How do I access my purchased courses?",
    answer:
      "Once you've purchased a course, you can access it through your profile dashboard. Simply log in to your account, navigate to 'My Courses' or 'Learning Progress' to view and access all your purchased content.",
    category: "Courses",
  },
  {
    question: "Are the courses suitable for beginners?",
    answer:
      "Yes! We offer courses for all levels, from complete beginners to advanced investors. Our learning paths are specifically designed to guide you through your property investment journey, starting with foundational concepts and progressing to advanced strategies.",
    category: "Courses",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including credit cards, debit cards, and online banking. All payments are processed securely through our encrypted payment gateway.",
    category: "Payment",
  },
  {
    question: "Can I get a refund if I'm not satisfied with a course?",
    answer:
      "We offer a satisfaction guarantee on our courses. If you're not satisfied with your purchase, please contact our support team within 30 days of purchase to discuss refund options.",
    category: "Payment",
  },
  {
    question: "How long do I have access to purchased courses?",
    answer:
      "Once you purchase a course, you have lifetime access to the content. You can revisit the materials anytime and learn at your own pace.",
    category: "Courses",
  },
  {
    question: "Do you offer certificates upon course completion?",
    answer:
      "Yes, we provide certificates of completion for our courses. These certificates can be downloaded from your profile once you've successfully completed all course modules.",
    category: "Courses",
  },
  {
    question: "Are the courses updated regularly?",
    answer:
      "Yes, we regularly update our course content to reflect the latest market trends, regulations, and strategies in the Singapore property market. Existing students get access to updated content at no additional cost.",
    category: "Courses",
  },
  {
    question: "Can I access courses on mobile devices?",
    answer:
      "Absolutely! Our platform is fully responsive and optimized for mobile devices. You can access your courses on smartphones, tablets, and desktop computers.",
    category: "Technical",
  },
  {
    question: "Do you offer group discounts or corporate packages?",
    answer:
      "Yes, we offer special pricing for group purchases and corporate training packages. Please contact our sales team for more information about bulk pricing and customized training solutions.",
    category: "Payment",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our customer support team through the contact form on our website, email us directly, or use the live chat feature. We typically respond within 24 hours during business days.",
    category: "Support",
  },
  {
    question:
      "What makes Assembly SG different from other property education platforms?",
    answer:
      "Assembly SG focuses specifically on the Singapore property market with courses taught by experienced local professionals. We provide practical, actionable insights based on real market data and current regulations specific to Singapore.",
    category: "General",
  },
  {
    question: "Can I preview course content before purchasing?",
    answer:
      "Yes, most of our courses offer free preview modules or sample content so you can get a feel for the teaching style and course quality before making a purchase decision.",
    category: "Courses",
  },
  {
    question: "Do you offer one-on-one consultations?",
    answer:
      "We offer personalized consultation services with our expert facilitators. These sessions can be booked separately and are tailored to your specific property investment goals and questions.",
    category: "Support",
  },
];

const categories = [
  "All",
  "General",
  "Courses",
  "Payment",
  "Technical",
  "Support",
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const filteredFAQs = faqData.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div className="min-h-screen bg-neutral-50 w-full">
        {/* Hero Section */}
        <section
          ref={sectionRef}
          className="relative bg-primary overflow-hidden mt-16 py-16 lg:py-32 w-full"
        >
          <div className="w-full px-4 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto text-center">
              {" "}
              <motion.h1
                className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Frequently Asked
                <span className="block text-white/90">Questions</span>
              </motion.h1>
              <motion.p
                className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Find answers to common questions about Assembly SG courses,
                platform features, and more.
              </motion.p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20 w-full">
          <div className="w-full px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 mb-12 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-primary text-white shadow-lg"
                        : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* FAQ Items */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredFAQs.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50/50 transition-colors duration-200 group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                          <HelpCircle className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 pr-4 group-hover:text-primary transition-colors">
                          {item.question}
                        </h3>
                      </div>
                      <div className="flex-shrink-0">
                        {openItems.includes(index) ? (
                          <svg
                            className="h-6 w-6 text-primary transition-transform duration-200"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 15l7-7 7 7"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="h-6 w-6 text-gray-400 group-hover:text-primary transition-colors duration-200"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        )}
                      </div>
                    </button>
                    {openItems.includes(index) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-8 pb-6"
                      >
                        <div className="border-t border-gray-100 pt-6 ml-14">
                          <p className="text-gray-700 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* No Results */}
              {filteredFAQs.length === 0 && (
                <div className="text-center py-12 lg:col-span-2">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No results found
                  </h3>
                  <p className="text-gray-600">
                    Try adjusting your search or filter criteria
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-neutral-100 w-full">
          <div className="w-full px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="bg-[#0000000000] rounded-3xl p-12 text-center text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  />
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="w-8 h-8 text-primary" />
                  </div>

                  <h2 className="text-primary text-3xl lg:text-4xl font-bold mb-4">
                    Still have questions?
                  </h2>
                  <p className="text-xl text-primary mb-8 max-w-2xl mx-auto">
                    Can't find the answer you're looking for? Our support team
                    is here to help you succeed.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border-0"
                      >
                        <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                        Contact Support
                      </Button>
                    </Link>
                    <Button
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border-0"
                      asChild
                    >
                      <a href="mailto:support@assembly.sg">
                        <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                        Email Us
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
