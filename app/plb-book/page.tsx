"use client";

import { useEffect, useRef, useState } from "react";
import NetworkBackground from "@/components/network-background";
import Link from "next/link";
import { FAQItem } from "./components/faq-item";
import { AutoScrollCarousel } from "./components/auto-scroll-carousel";
import { useCart } from "@/components/cart-context";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";

export default function PLBBookPage() {
  const { addToCart } = useCart();
  const [scrollY, setScrollY] = useState(0);
  const [scrollSpeed, setScrollSpeed] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastScrollY = useRef(0);
  const animationFrameId = useRef<number | null>(null);

  // FAQ data
  const faqItems = [
    {
      question: "Who is this book for?",
      answer:
        "This book is designed for investors, developers, homeowners, and anyone interested in enhancing the value of their property through strategic insights.",
    },
    {
      question: "Is the book suitable for beginners in real estate?",
      answer:
        "Yes, it is accessible for beginners while offering in-depth strategies that experienced professionals will find valuable.",
    },
    {
      question: "What format is the book available in?",
      answer:
        "The book is available in print. A digital format will be made available for Kindle on Amazon soon.",
    },
    {
      question: "Can I take look at the content before purchasing?",
      answer: "Yes, you may download the first ten pages of the book.",
    },
    {
      question: "Is my purchase refundable?",
      answer: "Unfortunately, all book purchases are non-refundable.",
    },
    {
      question: "What are my shipping options?",
      answer:
        "We provide doorstep delivery for all purchases. Alternatively, you may arrange for self pick-up at our office.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept debit and credit card.",
    },
    {
      question: "What should I do if I encounter a problem with my order?",
      answer:
        "You may write in to hello@assembly.sg with your order number. Our friendly staff will assist you as soon as possible.",
    },
  ];

  // Toggle FAQ item
  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  // Handle scroll events for network background
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }

      animationFrameId.current = requestAnimationFrame(() => {
        setScrollY(currentScrollY);
        setScrollSpeed(currentScrollY - lastScrollY.current);
        lastScrollY.current = currentScrollY;
      });
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    setWindowHeight(window.innerHeight);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  // Set up intersection observer for fade-in animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    // Observe all elements with fade-in class
    document.querySelectorAll(".fade-in").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Use direct blob URLs for the images to ensure they load properly
  const quoteImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLBook-Quote14.jpg-mljcb9g4LxKziIioshBEu7KxfLixpJ.jpeg", // PLBook-Quote14
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLBook-Quote11.jpg-LOG1mIw3LBpNcfbFlE6pq49Rv4IKRr.jpeg", // PLBook-Quote11
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLBook-Quote12.jpg-G1QajCCPLZh83k0pCGW0BLnxcMrftW.jpeg", // PLBook-Quote12
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLBook-Quote13.jpg-z4nbCNHLnMC7jaCV2W0dwHjiYxx8tg.jpeg", // PLBook-Quote13
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLBook-Quote15.jpg-dAEfBuhCgsJrzx6QLDSFELq99QnTzM.jpeg", // PLBook-Quote15
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLBook-Quote16.jpg-zqKTL0K4UBQZfZZiUqEEJicPaw5BMu.jpeg", // PLBook-Quote16
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLBook-Quote17.jpg-kefbzeHmMHZ37dxIylPHbvZsYlr5NH.jpeg", // PLBook-Quote17
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLBook-Quote18.jpg-G4DKm5rKGWpSFCnUsZ5lgU8MSplZ6W.jpeg", // PLBook-Quote18
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLBook-Quote19.jpg-S4fkQOtmVzZ0i5uy9v9mlMJbfCbTN2.jpeg", // PLBook-Quote19
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLBook-Quote20.jpg-LFZQ2ljL72K6tLlMqzxMZajAVW9nXr.jpeg", // PLBook-Quote20
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLBook-Quote21.jpg-5CYOA3zoJxQEA6F77Pd01DwdGQ0WWc.jpeg", // PLBook-Quote21
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLBook-Quote22.jpg-ddZwUaNiTNtr4u2Ohb2rKnqQ0dWuAO.jpeg", // PLBook-Quote22
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLBook-Quote23.jpg-4R8Wu5lX2RbxUjb13al4KmSbwX39uj.jpeg", // PLBook-Quote23
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLBook-Quote24.jpg-qA3vzmrpwArKp97qsBlFH84v0BVN41.jpeg", // PLBook-Quote24
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLBook-Quote25.jpg-YrD0YlloEYIvEugSPFpLUDlkgjDLN6.jpeg", // PLBook-Quote25
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLBook-Quote26.jpg-kshKjIpA3I26Hn6Q7GHayI3gvpHOAI.jpeg", // PLBook-Quote26
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLBook-Quote27.jpg-Jlu8Ak7cvuwWxbQpnMciLbN3qUQdZG.jpeg", // PLBook-Quote27
  ];

  const handleAddToCart = () => {
    const bookItem = {
      id: "plb-book",
      title:
        "Positioning: PropertyLimBrothers on the Art of Selling Your Property to its Maximum Potential",
      price: "29.00", // Discounted price
      author: "PropertyLimBrothers",
      image: "/images/PLB Book Front Cover_FA.jpg",
      type: "Book" as const,
      slug: "propertylimbrothers-on-the-art-of-selling-your-property-to-its-maximum-potential",
    };
    addToCart(bookItem);
    toast.success("Property Leverage Blueprint added to cart!");
  };

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Page Content */}
        <div className="pt-24 pb-16">
          <div className="plb-book-page relative">
            {/* Light gradient background instead of network */}
            <div
              className="absolute inset-0 z-0"
              style={{ backgroundColor: "#ffffff" }}
            ></div>

            {/* Hero Section */}
            <section className="section" style={{ paddingTop: "120px" }}>
              <div className="container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="fade-in">
                    <h1 className="text-primary mb-4 text-3xl">
                      Positioning: PropertyLimBrothers on the Art of Selling
                      Your Property to its Maximum Potential
                    </h1>
                    <p className="text-md mb-6">
                      When you truly understand how to sell and see through the
                      lens of a buyer, you gain charity on what, where and which
                      property to buy and invest in next.
                    </p>
                    <div className="mb-6">
                      <div className="flex items-center mb-2">
                        <span className="text-gray-500 line-through mr-2">
                          $39.00
                        </span>
                        <span className="text-2xl font-bold text-primary">
                          $29.00
                        </span>
                      </div>
                    </div>
                    <div className="mt-8 flex space-x-4">
                      <a
                        href="https://www.amazon.com/dp/B0F1CMZ9MQ"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="lg" className="bg-primary text-white">
                          Get the E-book
                        </Button>
                      </a>
                      <Button
                        size="lg"
                        variant="outline"
                        onClick={handleAddToCart}
                      >
                        Get the Paperback
                      </Button>
                    </div>
                  </div>
                  <div className="fade-in flex justify-center">
                    <div className="relative w-[300px] h-[390px] bg-primary rounded-lg shadow-xl transform rotate-3 animate-float">
                      <img
                        src="/images/PLB Book Front Cover_FA.jpg"
                        alt="PropertyLimBrothers Book Cover"
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Book Overview Section - Redesigned */}
            <section
              className="section relative overflow-hidden"
              style={{ backgroundColor: "#eff5fd" }}
            >
              <div className="absolute top-0 left-0 w-full h-full opacity-5">
                <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-primary"></div>
                <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-primary-dark"></div>
              </div>
              <div className="container relative z-10">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary fade-in">
                    In a crowded real estate marketplace,{" "}
                    <span className="text-primary-dark">
                      Positioning is Everything
                    </span>
                    .
                  </h2>
                  <div className="flex flex-wrap justify-center gap-3 mt-4 mb-8">
                    <span className="bg-primary text-white px-5 py-2 rounded-full text-sm font-bold shadow-md">
                      Real Estate
                    </span>
                    <span className="bg-primary text-white px-5 py-2 rounded-full text-sm font-bold shadow-md">
                      Selling
                    </span>
                    <span className="bg-[#123b79] text-white px-5 py-2 rounded-full text-sm font-bold shadow-md">
                      Property Investing Mindset
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 max-w-4xl mx-auto">
                  <p className="mb-6 text-lg">
                    The moment you list your property in the resale market, it
                    becomes a unique product that needs to attract that one
                    right buyer to make the offer you desire. How do you stand
                    out and find the right buyer that truly appreciates and sees
                    the value of your property? How do you maximise the
                    potential sale price of your home?
                  </p>

                  <div className="bg-primary text-white p-5 mb-6 rounded-lg shadow-inner">
                    <p className="font-medium text-lg">
                      It's about attracting genuine buyers by positioning your
                      property with content and maximum exposure.
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="mb-4">
                      For the first time ever, <strong>Melvin Lim</strong> and{" "}
                      <strong>Adrian Lim</strong>—more popularly known as
                      PropertyLimBrothers, Singapore's most successful real
                      estate duo that revolutionalise how properties are being
                      marketed with video home tours in Singapore—have assembled
                      an unrivaled playbook on property marketing, designed to
                      take your home from <strong>"listed"</strong> to{" "}
                      <strong>"sold"</strong>.
                    </p>

                    <p>
                      More than just a guide, this is a blueprint for uncovering
                      the unique potential of every real estate you touch and
                      finding the perfect buyer for every home. Backed by wisdom
                      and 17 years of industry experience, this book is your key
                      to mastering the Art of Selling Your Property to its
                      Maximum Potential.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Quote Carousel Section */}
            <section
              className="section py-16"
              style={{ backgroundColor: "#ffffff" }}
            >
              <div className="container-fluid px-0">
                <div className="text-center mb-8 px-4">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary fade-in">
                    Key Insights from the Book
                  </h2>
                  <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    Discover powerful strategies and insights that will
                    transform your approach to property selling
                  </p>
                </div>

                <AutoScrollCarousel
                  images={quoteImages}
                  visibleCount={4}
                  autoScrollInterval={4000}
                />
              </div>
            </section>

            {/* Book Content Section - Redesigned for Full Width */}
            <section
              className="section relative overflow-hidden py-16"
              style={{ backgroundColor: "#e7ebf1" }}
            >
              <div className="container-fluid px-4 md:px-8 lg:px-12 relative z-10 max-w-[1600px] mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary fade-in">
                    Discover the Art of{" "}
                    <span className="text-primary-dark">Home Selling</span>
                  </h2>
                  <p className="text-lg mb-8 max-w-3xl mx-auto">
                    Embark on a journey through the pages of this book, where we
                    demystify the art of home selling with a comprehensive,
                    step-by-step playbook.
                  </p>
                </div>

                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
                    {/* Book image on the left - outside white container */}
                    <div className="lg:col-span-4 fade-in relative">
                      <div className="absolute w-[165%] -left-[30%]">
                        <img
                          src="/images/PLB Book Mockup Cover & Content.png"
                          alt="PropertyLimBrothers Book Cover"
                          className="w-full h-full object-contain scale-150"
                        />
                      </div>
                    </div>

                    {/* List on the right - in white container */}
                    <div className="lg:col-span-8 fade-in">
                      <div className="bg-white rounded-xl shadow-lg p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <div className="flex items-start">
                              <div className="bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-3 text-xs flex-shrink-0 mt-0.5">
                                01
                              </div>
                              <div>
                                <h3 className="text-primary font-semibold text-sm">
                                  The mindset of successful property sellers
                                </h3>
                              </div>
                            </div>

                            <div className="flex items-start">
                              <div className="bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-3 text-xs flex-shrink-0 mt-0.5">
                                02
                              </div>
                              <div>
                                <h3 className="text-primary font-semibold text-sm">
                                  The Singapore Buy and Sell Pattern
                                </h3>
                              </div>
                            </div>

                            <div className="flex items-start">
                              <div className="bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-3 text-xs flex-shrink-0 mt-0.5">
                                03
                              </div>
                              <div>
                                <h3 className="text-primary font-semibold text-sm">
                                  How to build empathy and connection with your
                                  eventual buyer
                                </h3>
                              </div>
                            </div>

                            <div className="flex items-start">
                              <div className="bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-3 text-xs flex-shrink-0 mt-0.5">
                                04
                              </div>
                              <div>
                                <h3 className="text-primary font-semibold text-sm">
                                  Step-by-step guide to preparing for a home
                                  sale
                                </h3>
                              </div>
                            </div>

                            <div className="flex items-start">
                              <div className="bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-3 text-xs flex-shrink-0 mt-0.5">
                                05
                              </div>
                              <div>
                                <h3 className="text-primary font-semibold text-sm">
                                  How to prepare and dress your house for the
                                  sale
                                </h3>
                              </div>
                            </div>

                            <div className="flex items-start">
                              <div className="bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-3 text-xs flex-shrink-0 mt-0.5">
                                06
                              </div>
                              <div>
                                <h3 className="text-primary font-semibold text-sm">
                                  How to leverage on and harness the power of
                                  social media
                                </h3>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <div className="flex items-start">
                              <div className="bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-3 text-xs flex-shrink-0 mt-0.5">
                                07
                              </div>
                              <div>
                                <h3 className="text-primary font-semibold text-sm">
                                  The four pillars of social media content
                                  creation
                                </h3>
                              </div>
                            </div>

                            <div className="flex items-start">
                              <div className="bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-3 text-xs flex-shrink-0 mt-0.5">
                                08
                              </div>
                              <div>
                                <h3 className="text-primary font-semibold text-sm">
                                  How to create a comprehensive Home Tour
                                </h3>
                              </div>
                            </div>

                            <div className="flex items-start">
                              <div className="bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-3 text-xs flex-shrink-0 mt-0.5">
                                09
                              </div>
                              <div>
                                <h3 className="text-primary font-semibold text-sm">
                                  How to advertise and distribute your content
                                  to maximise attention
                                </h3>
                              </div>
                            </div>

                            <div className="flex items-start">
                              <div className="bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-3 text-xs flex-shrink-0 mt-0.5">
                                10
                              </div>
                              <div>
                                <h3 className="text-primary font-semibold text-sm">
                                  Pricing techniques for your home
                                </h3>
                              </div>
                            </div>

                            <div className="flex items-start">
                              <div className="bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-3 text-xs flex-shrink-0 mt-0.5">
                                11
                              </div>
                              <div>
                                <h3 className="text-primary font-semibold text-sm">
                                  Graphic guides to timeline and financial
                                  calculations
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Chapter Topics Section */}
            <section
              className="section relative overflow-hidden text-white"
              style={{ backgroundColor: "#123b79" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-800/20 to-blue-900/20"></div>
              <div className="container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="fade-in">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                      Unlock Your Property's Maximum Potential
                    </h2>
                    <p className="mb-6">
                      Delve into a comprehensive guide to optimising property
                      value, blending market insights, data analysis, and buyer
                      psychology.
                    </p>
                    <Link href="/plb-book/preview" className="inline-block">
                      <button className="btn bg-transparent border-2 border-white text-white hover:bg-white/10">
                        Preview Free Chapter →
                      </button>
                    </Link>
                  </div>
                  <div className="fade-in">
                    <div className="space-y-4">
                      <div className="flex items-center border-b border-white/20 pb-3">
                        <span className="text-sm mr-4 opacity-70">01</span>
                        <span className="text-lg">
                          The Most Common Reasons for Selling
                        </span>
                      </div>
                      <div className="flex items-center border-b border-white/20 pb-3">
                        <span className="text-sm mr-4 opacity-70">02</span>
                        <span className="text-lg">
                          12 Steps to Selling Your Home
                        </span>
                      </div>
                      <div className="flex items-center border-b border-white/20 pb-3">
                        <span className="text-sm mr-4 opacity-70">03</span>
                        <span className="text-lg">
                          Product Positioning: Transforming the home
                        </span>
                      </div>
                      <div className="flex items-center border-b border-white/20 pb-3">
                        <span className="text-sm mr-4 opacity-70">04</span>
                        <span className="text-lg">
                          Marketing in the 21st Century: Real Estate Content
                          Creation
                        </span>
                      </div>
                      <div className="flex items-center border-b border-white/20 pb-3">
                        <span className="text-sm mr-4 opacity-70">05</span>
                        <span className="text-lg">
                          Advertising and Distribution of Content: The Often
                          Neglected Part
                        </span>
                      </div>
                      <div className="flex items-center border-b border-white/20 pb-3">
                        <span className="text-sm mr-4 opacity-70">06</span>
                        <span className="text-lg">
                          Viewings: The Art of Showmanship
                        </span>
                      </div>
                      <div className="flex items-center border-b border-white/20 pb-3">
                        <span className="text-sm mr-4 opacity-70">07</span>
                        <span className="text-lg">
                          Sealing the Deal: How to Price Your Property Correctly
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Authors Section */}
            {/* Authors Section */}
            <section
              className="section relative overflow-hidden"
              style={{ backgroundColor: "#ffffff" }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/30 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/20 rounded-full translate-y-24 -translate-x-24"></div>
              <div className="container relative z-10">
                <div className="text-center mb-16 fade-in">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary">
                    About the Authors
                  </h2>
                  <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    Meet the PropertyLimBrothers team - Singapore's leading
                    property experts with over 17 years of combined experience
                  </p>
                </div>

                {/* Melvin Lim - Image Left, Bio Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 fade-in">
                  <div className="order-1 md:order-1">
                    <div className="relative">
                      <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                        <img
                          src="/images/Melvin_01.png"
                          alt="Melvin Lim"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
                    </div>
                  </div>
                  <div className="order-2 md:order-2">
                    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        Melvin Lim
                      </h3>
                      <p className="text-primary-dark font-semibold mb-4">
                        Co-Founder and CEO
                      </p>
                      <div className="text-gray-700 leading-relaxed space-y-4">
                        <p>
                          Co-Founder and CEO of PropertyLimBrothers (PLB),
                          brings 17 years of real estate expertise to the
                          forefront of Singapore's property market. Under his
                          thoughtful leadership, PLB has successfully sold over
                          1,800 homes, setting a new benchmark for real estate
                          in Singapore.
                        </p>
                        <p>
                          In 2017, Melvin introduced presenter-led home tour
                          videos to Singapore—a groundbreaking move that
                          redefined property marketing by showcasing each home's
                          unique story. With over 3,300 videos now under his
                          belt across YouTube and other platforms, his
                          innovative strategies have become a standard others
                          aspire to achieve.
                        </p>
                        <p>
                          Melvin remains committed to his core values of
                          integrity and innovation. His passion for uncovering
                          the true character of every home drives his success,
                          and he leads the PLB team with the same vision: to
                          elevate real estate marketing across Singapore and the
                          ASEAN region.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Adrian Lim - Bio Left, Image Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 fade-in">
                  <div className="order-2 md:order-1">
                    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        Adrian Lim
                      </h3>
                      <p className="text-primary-dark font-semibold mb-4">
                        Co-Founder and Managing Director
                      </p>
                      <div className="text-gray-700 leading-relaxed space-y-4">
                        <p>
                          Co-Founder and Managing Director of
                          PropertyLimBrothers, has 17 years of real estate
                          experience in the industry and has transacted over
                          1,800 with the PLB team till date. Adrian's expert
                          communication skills and experience in selling homes
                          has solved many complex situations for our clients
                          over the past years.
                        </p>
                        <p>
                          He constantly spearheads the Realty Team in PLB. His
                          passion is driven by a relentless pursuit of what lies
                          ahead. This dedication to serve effortlessly connects
                          realtors and clients, inspiring others to thrive under
                          his leadership.
                        </p>
                        <p>
                          A family man who enjoys the company of his wife, four
                          children and their dogs Coffee and Mocha, Adrian is
                          known for his passion, dedication and achievements in
                          real estate.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="relative">
                      <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                        <img
                          src="/images/Adrian_01-600x600.png"
                          alt="Adrian Lim"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-dark/10 rounded-full -z-10"></div>
                    </div>
                  </div>
                </div>

                {/* Grayce Tan - Image Left, Bio Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 fade-in">
                  <div className="order-1 md:order-1">
                    <div className="relative">
                      <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                        <img
                          src="/images/Grayce_02-600x600.png"
                          alt="Grayce Tan"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-full -z-10"></div>
                    </div>
                  </div>
                  <div className="order-2 md:order-2">
                    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        Grayce Tan
                      </h3>
                      <p className="text-primary-dark font-semibold mb-4">
                        Senior Marketing and Business Development Manager
                      </p>
                      <div className="text-gray-700 leading-relaxed space-y-4">
                        <p>
                          Senior Marketing and Business Development Manager at
                          PropertyLimBrothers, with a rich background in Real
                          Estate, Sociology, and Educational Pedagogy. Leading
                          the Business Development, Brand Marketing, and
                          Editorial teams at PropertyLimBrothers, she excels in
                          boosting brand visibility and customer engagement
                          through innovative strategies and key partnerships.
                        </p>
                        <p>
                          A passionate lifelong learner, Grayce's deep curiosity
                          for people and market dynamics drives her approach to
                          real estate. She spearheads strategic content
                          initiatives, manages real-time market analysis, and
                          ensures her teams stay at the forefront of industry
                          trends.
                        </p>
                        <p>
                          Grounded in a commitment to delivering insightful,
                          data-driven content, Grayce is dedicated to helping
                          clients and readers alike navigate the ever-evolving
                          property landscape with clarity and confidence.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section (formerly Guarantee Section) */}
            <section
              className="section relative overflow-hidden"
              style={{ backgroundColor: "#e1e7ee" }}
            >
              <div className="container relative z-10">
                <div className="max-w-4xl mx-auto text-center fade-in">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Everything you need to know about the Property Leverage
                    Blueprint
                  </p>
                </div>

                {/* FAQ Grid Layout */}
                <div className="max-w-6xl mx-auto mt-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    {faqItems.map((item, index) => (
                      <div
                        key={index}
                        className="fade-in h-full"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <FAQItem
                          question={item.question}
                          answer={item.answer}
                          isOpen={activeIndex === index}
                          onClick={() => toggleFAQ(index)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Support Section */}
            <section
              className="section relative overflow-hidden"
              style={{ backgroundColor: "#fdfdfd" }}
            >
              <div className="container relative z-10">
                {/* Contact support section */}
                <div className="text-center fade-in">
                  <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-gray-100">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-3">
                      Still have questions?
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Can't find the answer you're looking for? Our friendly
                      team is here to help.
                    </p>
                    <a
                      href="mailto:hello@assembly.sg"
                      className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200 font-medium"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Contact Support
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
