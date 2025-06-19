"use client";

import { useEffect, useRef, useState } from "react";
import NetworkBackground from "@/components/network-background";
import Link from "next/link";
import { FAQItem } from "./components/faq-item";
import { AutoScrollCarousel } from "./components/auto-scroll-carousel";
import Navbar from "@/components/navbar";
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
      id: "property-leverage-blueprint",
      title: "Property Leverage Blueprint",
      price: "29.00", // Discounted price
      instructor: "Assembly SG",
      image: "/images/plb-book-cover.png",
      type: "Book",
    };
    addToCart(bookItem);
    toast.success("Property Leverage Blueprint added to cart!");
  };

  return (
    <>
      <main className="min-h-screen bg-white" data-oid="5eq2t3k">
        {/* Page Content */}
        <div className="pt-24 pb-16" data-oid="xk-i7l5">
          <Navbar data-oid="f60nfcj" />
          <div className="plb-book-page relative" data-oid="cbkm5jd">
            <NetworkBackground
              scrollY={scrollY}
              scrollSpeed={scrollSpeed}
              windowHeight={windowHeight}
              data-oid="t.xb59p"
            />

            {/* Semi-transparent overlay to improve text readability across the entire page */}
            <div
              className="absolute inset-0 bg-white opacity-30 z-0"
              data-oid="xfp16yb"
            ></div>

            {/* Hero Section */}
            <section
              className="section"
              style={{ paddingTop: "120px" }}
              data-oid="9o0xdja"
            >
              <div className="container relative z-10" data-oid="z6485qn">
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                  data-oid="oa-n:gy"
                >
                  <div className="fade-in" data-oid="0t-y63a">
                    <h1 className="text-primary mb-4" data-oid="gtb-n:v">
                      Property Leverage Blueprint
                    </h1>
                    <p className="text-xl mb-6" data-oid="m7-j.mo">
                      Your comprehensive guide to mastering property investment
                      in Singapore's dynamic market
                    </p>
                    <div className="mb-6" data-oid="w053zzh">
                      <div
                        className="flex items-center mb-2"
                        data-oid="s32okav"
                      >
                        <span
                          className="text-gray-500 line-through mr-2"
                          data-oid="keo0box"
                        >
                          $39
                        </span>
                        <span
                          className="text-2xl font-bold text-primary"
                          data-oid="-qux-qf"
                        >
                          $29
                        </span>
                      </div>
                      <p
                        className="text-sm text-gray-500 mt-2"
                        data-oid="-53krmo"
                      >
                        Free shipping for all physical copies within Singapore
                      </p>
                    </div>
                    <div className="mt-8 flex space-x-4" data-oid="47dd.1f">
                      <Button
                        size="lg"
                        className="bg-primary text-white"
                        data-oid="9qbz_oi"
                      >
                        Get the E-book
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        onClick={handleAddToCart}
                        data-oid=".6qkg5g"
                      >
                        Get the Paperback
                      </Button>
                    </div>
                  </div>
                  <div
                    className="fade-in flex justify-center"
                    data-oid="bw9_jgl"
                  >
                    <div
                      className="relative w-64 h-80 bg-primary rounded-lg shadow-xl transform rotate-3 animate-float"
                      data-oid="v_kyf_u"
                    >
                      <div
                        className="absolute inset-0 bg-white m-1 rounded-lg flex items-center justify-center"
                        data-oid="_plub7n"
                      >
                        <div className="text-center p-4" data-oid="..u9lac">
                          <h3 className="text-primary" data-oid="823wq6j">
                            Property Leverage Blueprint
                          </h3>
                          <p className="text-sm" data-oid="2qg_znx">
                            By Assembly SG
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Book Overview Section - Redesigned */}
            <section
              className="section bg-highlight relative overflow-hidden"
              data-oid="as2t_r9"
            >
              <div
                className="absolute top-0 left-0 w-full h-full opacity-5"
                data-oid="4lchc-0"
              >
                <div
                  className="absolute top-10 right-10 w-40 h-40 rounded-full bg-primary"
                  data-oid="nvk373h"
                ></div>
                <div
                  className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-primary-dark"
                  data-oid="ob_4s0-"
                ></div>
              </div>
              <div className="container relative z-10" data-oid="s7fc_zi">
                <div className="text-center mb-12" data-oid="wvhw2ra">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-3 text-primary fade-in"
                    data-oid="vg2_:gs"
                  >
                    In a crowded real estate marketplace,{" "}
                    <span className="text-primary-dark" data-oid=":wvpmyp">
                      Positioning is Everything
                    </span>
                    .
                  </h2>
                  <div
                    className="flex flex-wrap justify-center gap-3 mt-4 mb-8"
                    data-oid="_3p2ivl"
                  >
                    <span
                      className="bg-primary text-white px-5 py-2 rounded-full text-sm font-bold shadow-md"
                      data-oid="ssmaji9"
                    >
                      Real Estate
                    </span>
                    <span
                      className="bg-primary-dark text-[#123b79] px-5 py-2 rounded-full text-sm font-bold shadow-md"
                      data-oid="rhxpbry"
                    >
                      Selling
                    </span>
                    <span
                      className="bg-[#123b79] text-white px-5 py-2 rounded-full text-sm font-bold shadow-md"
                      data-oid="0-57o1h"
                    >
                      Property Investing Mindset
                    </span>
                  </div>
                </div>

                <div
                  className="bg-white rounded-xl shadow-xl p-6 md:p-8 max-w-4xl mx-auto"
                  data-oid="7rf319t"
                >
                  <p className="mb-6 text-lg" data-oid="gs3ukpy">
                    The moment you list your property in the resale market, it
                    becomes a unique product that needs to attract that one
                    right buyer to make the offer you desire. How do you stand
                    out and find the right buyer that truly appreciates and sees
                    the value of your property? How do you maximise the
                    potential sale price of your home?
                  </p>

                  <div
                    className="bg-primary text-white p-5 mb-6 rounded-lg shadow-inner"
                    data-oid="d64td23"
                  >
                    <p className="font-medium text-lg" data-oid="6gxwk-v">
                      It's about attracting genuine buyers by positioning your
                      property with content and maximum exposure.
                    </p>
                  </div>

                  <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-6"
                    data-oid="1xz4eo6"
                  >
                    <div className="md:col-span-2" data-oid="hu1azx9">
                      <p className="mb-4" data-oid="zxgjhoy">
                        For the first time ever,{" "}
                        <strong data-oid="mwdaq6i">Melvin Lim</strong> and{" "}
                        <strong data-oid="1vfquvb">Adrian Lim</strong>—more
                        popularly known as PropertyLimBrothers, Singapore's most
                        successful real estate duo that revolutionalise how
                        properties are being marketed with video home tours in
                        Singapore—have assembled an unrivaled playbook on
                        property marketing, designed to take your home from{" "}
                        <strong data-oid="37u4a5l">"listed"</strong> to{" "}
                        <strong data-oid="h6d9go3">"sold"</strong>.
                      </p>

                      <p data-oid="14i:xr9">
                        More than just a guide, this is a blueprint for
                        uncovering the unique potential of every real estate you
                        touch and finding the perfect buyer for every home.
                        Backed by wisdom and 17 years of industry experience,
                        this book is your key to mastering the Art of Selling
                        Your Property to its Maximum Potential.
                      </p>
                    </div>
                    <div className="hidden md:block" data-oid="6i8-q8h">
                      <div
                        className="w-full aspect-square bg-gradient-to-br from-primary/10 to-primary-dark/20 rounded-full flex items-center justify-center"
                        data-oid="wtnw35-"
                      >
                        <div
                          className="w-3/4 h-3/4 bg-gradient-to-tr from-primary to-primary-dark rounded-full flex items-center justify-center text-white text-5xl font-bold"
                          data-oid=".9vlnn2"
                        >
                          17+
                          <span className="text-sm ml-1" data-oid="wp4hdq4">
                            years
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Quote Carousel Section */}
            <section
              className="section py-16"
              style={{ backgroundColor: "#E8E8E8" }}
              data-oid="-rq7.5y"
            >
              <div className="container-fluid px-0" data-oid="min91gf">
                <div className="text-center mb-8 px-4" data-oid="se5j5r-">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-3 text-primary fade-in"
                    data-oid="_sxrz32"
                  >
                    Key Insights from the Book
                  </h2>
                  <p
                    className="text-lg text-gray-700 max-w-2xl mx-auto"
                    data-oid="vhpug-g"
                  >
                    Discover powerful strategies and insights that will
                    transform your approach to property selling
                  </p>
                </div>

                <AutoScrollCarousel
                  images={quoteImages}
                  visibleCount={4}
                  autoScrollInterval={4000}
                  data-oid="6mybl9."
                />
              </div>
            </section>

            {/* Book Content Section - Redesigned for Full Width */}
            <section
              className="section relative overflow-hidden bg-secondary py-16"
              data-oid="ds98-y-"
            >
              <div
                className="container-fluid px-4 md:px-8 lg:px-12 relative z-10 max-w-[1600px] mx-auto"
                data-oid="fu4-hpr"
              >
                <div className="text-center mb-12" data-oid=":6u89x0">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-3 text-primary fade-in"
                    data-oid="9vx0:mf"
                  >
                    Discover the Art of{" "}
                    <span className="text-primary-dark" data-oid="ih_tg:s">
                      Home Selling
                    </span>
                  </h2>
                  <p
                    className="text-lg mb-8 max-w-2xl mx-auto"
                    data-oid="vj5rrb8"
                  >
                    A comprehensive playbook that transforms ordinary sellers
                    into market masters
                  </p>
                </div>

                <div
                  className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center"
                  data-oid="wv8p_yg"
                >
                  {/* Book image - now in a 4-column space */}
                  <div
                    className="xl:col-span-4 fade-in order-2 xl:order-1"
                    data-oid="lt9faxr"
                  >
                    <div
                      className="relative mx-auto max-w-md"
                      data-oid="f-a6jeo"
                    >
                      <div
                        className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-primary-dark/30 blur-2xl rounded-full transform -translate-y-4 translate-x-4"
                        data-oid="g7oan0d"
                      ></div>
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-02%20at%209.03.38%E2%80%AFpm-EzqCO8JB6tjTccn8gq9St2vGkBsqG0.png"
                        alt="Property Positioning Book Cover"
                        className="relative z-10 w-full h-auto rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform rotate-3 hover:rotate-0 transition-all duration-500"
                        data-oid="om9j:rf"
                      />

                      <div
                        className="absolute -bottom-6 -right-6 bg-primary text-white rounded-full w-24 h-24 flex items-center justify-center text-center p-2 shadow-lg transform rotate-12 z-20"
                        data-oid="1j:zs.f"
                      >
                        <div data-oid="bqt30_8">
                          <div className="text-xs" data-oid="uc8rxg5">
                            Limited
                          </div>
                          <div className="text-lg font-bold" data-oid="ku9wgji">
                            Edition
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content cards - now in an 8-column space with 3 cards per row */}
                  <div
                    className="xl:col-span-8 fade-in order-1 xl:order-2"
                    data-oid="5nowf7h"
                  >
                    <div
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                      data-oid="9x.dl2w"
                    >
                      <div
                        className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                        data-oid="jzqvjsr"
                      >
                        <div
                          className="flex items-center mb-3"
                          data-oid="wtkyxkq"
                        >
                          <div
                            className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 group-hover:scale-110 transition-transform"
                            data-oid="52_yzt1"
                          >
                            01
                          </div>
                          <h3
                            className="text-primary text-lg font-semibold"
                            data-oid=".5js.1m"
                          >
                            Seller Mindset
                          </h3>
                        </div>
                        <p className="text-gray-600 pl-14" data-oid="q9typ2b">
                          Master the psychology of successful property sellers
                        </p>
                      </div>

                      <div
                        className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                        data-oid="q94_x95"
                      >
                        <div
                          className="flex items-center mb-3"
                          data-oid="w.s4v.8"
                        >
                          <div
                            className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 group-hover:scale-110 transition-transform"
                            data-oid="ztrwer:"
                          >
                            02
                          </div>
                          <h3
                            className="text-primary text-lg font-semibold"
                            data-oid="orzv014"
                          >
                            Market Patterns
                          </h3>
                        </div>
                        <p className="text-gray-600 pl-14" data-oid="jcl7md1">
                          Understand the Singapore Buy and Sell Pattern
                        </p>
                      </div>

                      <div
                        className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                        data-oid="3kx2zo_"
                      >
                        <div
                          className="flex items-center mb-3"
                          data-oid="a1cmzz-"
                        >
                          <div
                            className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 group-hover:scale-110 transition-transform"
                            data-oid="8jcjtln"
                          >
                            03
                          </div>
                          <h3
                            className="text-primary text-lg font-semibold"
                            data-oid="1qhre0-"
                          >
                            Buyer Connection
                          </h3>
                        </div>
                        <p className="text-gray-600 pl-14" data-oid="ts.0v-3">
                          Build empathy with your eventual buyer
                        </p>
                      </div>

                      <div
                        className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                        data-oid="0us583x"
                      >
                        <div
                          className="flex items-center mb-3"
                          data-oid="vs4ex9p"
                        >
                          <div
                            className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 group-hover:scale-110 transition-transform"
                            data-oid="_cby72j"
                          >
                            04
                          </div>
                          <h3
                            className="text-primary text-lg font-semibold"
                            data-oid="3ewct:_"
                          >
                            Home Preparation
                          </h3>
                        </div>
                        <p className="text-gray-600 pl-14" data-oid="x4aszy2">
                          Prepare and dress your house for maximum appeal
                        </p>
                      </div>

                      <div
                        className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                        data-oid="27rpnff"
                      >
                        <div
                          className="flex items-center mb-3"
                          data-oid="5fqag8_"
                        >
                          <div
                            className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 group-hover:scale-110 transition-transform"
                            data-oid="pnzpywz"
                          >
                            05
                          </div>
                          <h3
                            className="text-primary text-lg font-semibold"
                            data-oid="bg:x--5"
                          >
                            Social Media
                          </h3>
                        </div>
                        <p className="text-gray-600 pl-14" data-oid="1q1thj0">
                          Leverage the power of digital marketing
                        </p>
                      </div>

                      <div
                        className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                        data-oid="48i8.2e"
                      >
                        <div
                          className="flex items-center mb-3"
                          data-oid="xcojm8d"
                        >
                          <div
                            className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 group-hover:scale-110 transition-transform"
                            data-oid="957ryze"
                          >
                            06
                          </div>
                          <h3
                            className="text-primary text-lg font-semibold"
                            data-oid="c.g_ucv"
                          >
                            Pricing Strategy
                          </h3>
                        </div>
                        <p className="text-gray-600 pl-14" data-oid="-cn186x">
                          Set the right price with financial calculations
                        </p>
                      </div>
                    </div>

                    <div
                      className="mt-8 text-center lg:text-left"
                      data-oid="l7ouom6"
                    >
                      <Link
                        href="/plb-book/preview"
                        className="inline-block"
                        data-oid="qtj20a9"
                      >
                        <button className="btn btn-primary" data-oid=".trp79n">
                          Preview Free Chapter →
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Chapter Topics Section */}
            <section
              className="section bg-gradient-to-br from-slate-800 to-slate-700 text-white"
              data-oid="uf97ow0"
            >
              <div className="container relative z-10" data-oid="_t568du">
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                  data-oid="9wg61jg"
                >
                  <div className="fade-in" data-oid="ynlykjn">
                    <h2
                      className="text-2xl md:text-3xl font-bold mb-4"
                      data-oid="vax-:av"
                    >
                      Unlock Your Property's Maximum Potential
                    </h2>
                    <p className="mb-6" data-oid="xkao28x">
                      Delve into a comprehensive guide to optimising property
                      value, blending market insights, data analysis, and buyer
                      psychology.
                    </p>
                    <Link
                      href="/plb-book/preview"
                      className="inline-block"
                      data-oid="..5y9r3"
                    >
                      <button
                        className="btn bg-transparent border-2 border-white text-white hover:bg-white/10"
                        data-oid="j2cmwb4"
                      >
                        Preview Free Chapter →
                      </button>
                    </Link>
                  </div>
                  <div className="fade-in" data-oid="kz7h1t-">
                    <div className="space-y-4" data-oid="4n2h6iu">
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="y3n.hiv"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid="s361auy"
                        >
                          01
                        </span>
                        <span className="text-lg" data-oid="o_0n3so">
                          The Most Common Reasons for Selling
                        </span>
                      </div>
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="p4y5v_3"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid="4ttguw1"
                        >
                          02
                        </span>
                        <span className="text-lg" data-oid="atrrh80">
                          12 Steps to Selling Your Home
                        </span>
                      </div>
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid=":f8:pba"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid="sdn4rn7"
                        >
                          03
                        </span>
                        <span className="text-lg" data-oid="ys-._ru">
                          Product Positioning: Transforming the home
                        </span>
                      </div>
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="w1c:6t_"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid=".4211_1"
                        >
                          04
                        </span>
                        <span className="text-lg" data-oid="vk13go4">
                          Marketing in the 21st Century: Real Estate Content
                          Creation
                        </span>
                      </div>
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="wgc95bz"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid="ara3gio"
                        >
                          05
                        </span>
                        <span className="text-lg" data-oid="ui2oibs">
                          Advertising and Distribution of Content: The Often
                          Neglected Part
                        </span>
                      </div>
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="k-14m4k"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid=":xbbuia"
                        >
                          06
                        </span>
                        <span className="text-lg" data-oid="n_osi:k">
                          Viewings: The Art of Showmanship
                        </span>
                      </div>
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="c2l_kuc"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid="sx58p8x"
                        >
                          07
                        </span>
                        <span className="text-lg" data-oid="vjx8:w1">
                          Sealing the Deal: How to Price Your Property Correctly
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Author Section */}
            <section className="section" data-oid="d10f:qe">
              <div className="container relative z-10" data-oid="4f2lpx2">
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                  data-oid="cf9tl-b"
                >
                  <div className="fade-in" data-oid="nky5w9m">
                    <div
                      className="w-64 h-64 rounded-full bg-gray-300 mx-auto md:mx-0"
                      data-oid="y97k0hp"
                    ></div>
                  </div>
                  <div className="fade-in" data-oid="8:1.pea">
                    <h2 className="text-primary" data-oid="e-z-d1d">
                      About the Author
                    </h2>
                    <p className="feature-text text-xl mb-4" data-oid="ihcb7eu">
                      With over 15 years of experience in Singapore's property
                      market
                    </p>
                    <p data-oid="7mxw:vv">
                      The author brings unparalleled insights into the local
                      property landscape, having helped hundreds of clients
                      build wealth through strategic property investments.
                    </p>
                    <p data-oid="lp0lewq">
                      As the founder of Assembly SG, they have developed a
                      proven system for property investment success that works
                      in any market condition.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="section bg-highlight" data-oid=".0bz_j8">
              <div className="container relative z-10" data-oid="w-2ktkf">
                <h2
                  className="text-center text-primary mb-12 fade-in"
                  data-oid="jev3qp9"
                >
                  Frequently Asked Questions
                </h2>
                <div className="max-w-3xl mx-auto space-y-2" data-oid="4e_lf1z">
                  {faqItems.map((item, index) => (
                    <FAQItem
                      key={index}
                      question={item.question}
                      answer={item.answer}
                      isOpen={activeIndex === index}
                      onClick={() => toggleFAQ(index)}
                      className="py-2"
                      data-oid="abam.o:"
                    />
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
