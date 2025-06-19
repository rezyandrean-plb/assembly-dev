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
import {
  Download,
  ShoppingCart,
  Star,
  BookOpen,
  Users,
  Award,
} from "lucide-react";

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
        "The book is available in both digital (e-book) and physical (paperback) formats. The e-book is available on Amazon Kindle, while the paperback can be ordered through our website.",
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

  const handleGetEbook = () => {
    // Redirect to Amazon
    window.open("https://www.amazon.com/dp/B0F1CMZ9MQ", "_blank");
  };

  const handleGetPaperback = () => {
    const bookItem = {
      id: "property-leverage-blueprint-paperback",
      title: "Property Leverage Blueprint (Paperback)",
      slug: "property-leverage-blueprint-paperback",
      price: "29.00",
      instructor: "Assembly SG",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-02%20at%209.03.38%E2%80%AFpm-EzqCO8JB6tjTccn8gq9St2vGkBsqG0.png",
      type: "Book" as const,
    };
    addToCart(bookItem);
    toast.success("Property Leverage Blueprint (Paperback) added to cart!");
  };

  return (
    <>
      <main className="min-h-screen bg-white" data-oid="qafoaab">
        <Navbar data-oid="8clxc2z" />
        <div className="pt-24 pb-16" data-oid="y:.:j0x">
          <div className="plb-book-page relative" data-oid="a9.o8-.">
            <NetworkBackground
              scrollY={scrollY}
              scrollSpeed={scrollSpeed}
              windowHeight={windowHeight}
              data-oid="f4ujm7n"
            />

            {/* Semi-transparent overlay to improve text readability */}
            <div
              className="absolute inset-0 bg-white opacity-30 z-0"
              data-oid="5qo5x:q"
            ></div>

            {/* Hero Section - Brand New Design */}
            <section
              className="section relative z-10"
              style={{ paddingTop: "120px" }}
              data-oid="94kxtox"
            >
              <div className="container" data-oid="3:26w2h">
                <div
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  data-oid="3xb65ae"
                >
                  {/* Left Column - Content */}
                  <div className="fade-in space-y-8" data-oid="56g7vpx">
                    <div className="space-y-4" data-oid="0kwib09">
                      <div
                        className="flex items-center space-x-2 text-sm text-primary font-medium"
                        data-oid="vm-b:d6"
                      >
                        <Award className="w-4 h-4" data-oid="guxr72l" />
                        <span data-oid="q1zp7gu">
                          BESTSELLING PROPERTY GUIDE
                        </span>
                      </div>
                      <h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                        data-oid="v5z32ni"
                      >
                        Property Leverage
                        <span className="block text-primary" data-oid="94jjpn.">
                          Blueprint
                        </span>
                      </h1>
                      <p
                        className="text-xl text-gray-600 leading-relaxed"
                        data-oid="v.:vtth"
                      >
                        Master the art of property investment in Singapore's
                        dynamic market with proven strategies from industry
                        experts.
                      </p>
                    </div>

                    {/* Social Proof */}
                    <div
                      className="flex items-center space-x-6"
                      data-oid="t0zvps-"
                    >
                      <div
                        className="flex items-center space-x-1"
                        data-oid="j469peu"
                      >
                        <div className="flex" data-oid="n-x7snk">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-yellow-400 text-yellow-400"
                              data-oid="ghvjjct"
                            />
                          ))}
                        </div>
                        <span
                          className="text-sm text-gray-600 ml-2"
                          data-oid="0giioo8"
                        >
                          4.9/5 (500+ reviews)
                        </span>
                      </div>
                      <div
                        className="flex items-center space-x-2 text-sm text-gray-600"
                        data-oid="82dihx4"
                      >
                        <Users className="w-4 h-4" data-oid="q-nvph0" />
                        <span data-oid="h4h7l2p">10,000+ readers</span>
                      </div>
                    </div>

                    {/* Version Selection Cards */}
                    <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      data-oid="b_kfdy_"
                    >
                      {/* Digital Version */}
                      <div
                        className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                        data-oid="b5jr3lp"
                      >
                        <div
                          className="flex items-center justify-between mb-4"
                          data-oid="pyy__s6"
                        >
                          <div
                            className="flex items-center space-x-2"
                            data-oid="1t8jcsr"
                          >
                            <Download
                              className="w-5 h-5 text-blue-600"
                              data-oid="t3dr3.4"
                            />
                            <h3
                              className="text-lg font-semibold text-gray-900"
                              data-oid="b.cwr1r"
                            >
                              Digital Edition
                            </h3>
                          </div>
                          <div
                            className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium"
                            data-oid="9f5n2vw"
                          >
                            INSTANT ACCESS
                          </div>
                        </div>
                        <div className="space-y-3" data-oid="q1gh2:6">
                          <div
                            className="flex items-baseline space-x-2"
                            data-oid="5i.w3.3"
                          >
                            <span
                              className="text-2xl font-bold text-blue-600"
                              data-oid="rbannc1"
                            >
                              FREE
                            </span>
                            <span
                              className="text-sm text-gray-500 line-through"
                              data-oid="06hoapm"
                            >
                              $29
                            </span>
                          </div>
                          <ul
                            className="text-sm text-gray-600 space-y-1"
                            data-oid="d-6mgk3"
                          >
                            <li data-oid="he:4oav">• Instant download</li>
                            <li data-oid="fwvngjx">• Read on any device</li>
                            <li data-oid="en6d:kv">• Searchable content</li>
                          </ul>
                          <Button
                            onClick={handleGetEbook}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                            size="lg"
                            data-oid="ua:0t1h"
                          >
                            <Download
                              className="w-4 h-4 mr-2"
                              data-oid="f_pnu:6"
                            />
                            Get the E-book
                          </Button>
                        </div>
                      </div>

                      {/* Physical Version */}
                      <div
                        className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                        data-oid="1br:eqh"
                      >
                        <div
                          className="flex items-center justify-between mb-4"
                          data-oid="1x-13ih"
                        >
                          <div
                            className="flex items-center space-x-2"
                            data-oid="jyt7a:t"
                          >
                            <BookOpen
                              className="w-5 h-5 text-amber-600"
                              data-oid="6pd_q:y"
                            />
                            <h3
                              className="text-lg font-semibold text-gray-900"
                              data-oid="rx0bcqs"
                            >
                              Paperback Edition
                            </h3>
                          </div>
                          <div
                            className="bg-amber-600 text-white px-2 py-1 rounded-full text-xs font-medium"
                            data-oid="el5ip8m"
                          >
                            PREMIUM
                          </div>
                        </div>
                        <div className="space-y-3" data-oid="2y7jxqk">
                          <div
                            className="flex items-baseline space-x-2"
                            data-oid="7s4a8iz"
                          >
                            <span
                              className="text-2xl font-bold text-amber-600"
                              data-oid="o:q:a22"
                            >
                              $29
                            </span>
                            <span
                              className="text-sm text-gray-500"
                              data-oid="50ig-2m"
                            >
                              SGD
                            </span>
                          </div>
                          <ul
                            className="text-sm text-gray-600 space-y-1"
                            data-oid="ce2jz-r"
                          >
                            <li data-oid="-lzz9ju">• Premium paper quality</li>
                            <li data-oid="cej1o5u">• Free shipping in SG</li>
                            <li data-oid=".oqrqt4">• Perfect for notes</li>
                          </ul>
                          <Button
                            onClick={handleGetPaperback}
                            className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                            size="lg"
                            data-oid="m4mth6a"
                          >
                            <ShoppingCart
                              className="w-4 h-4 mr-2"
                              data-oid="bwlweq0"
                            />
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Trust Indicators */}
                    <div
                      className="flex flex-wrap items-center gap-4 text-sm text-gray-500"
                      data-oid="yujchn7"
                    >
                      <div
                        className="flex items-center space-x-1"
                        data-oid="nh7qr3o"
                      >
                        <div
                          className="w-2 h-2 bg-green-500 rounded-full"
                          data-oid="3mzog_h"
                        ></div>
                        <span data-oid="cfi5zo5">Secure payment</span>
                      </div>
                      <div
                        className="flex items-center space-x-1"
                        data-oid="x:sms00"
                      >
                        <div
                          className="w-2 h-2 bg-green-500 rounded-full"
                          data-oid="j66unkl"
                        ></div>
                        <span data-oid="ui53qpx">Free shipping (SG)</span>
                      </div>
                      <div
                        className="flex items-center space-x-1"
                        data-oid="i4vv40w"
                      >
                        <div
                          className="w-2 h-2 bg-green-500 rounded-full"
                          data-oid="4rn86vs"
                        ></div>
                        <span data-oid="b8eg36c">Expert support</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Book Visual */}
                  <div
                    className="fade-in flex justify-center lg:justify-end"
                    data-oid="iym03iw"
                  >
                    <div className="relative" data-oid="egvdajc">
                      {/* Background decoration */}
                      <div
                        className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary-dark/20 blur-2xl rounded-full"
                        data-oid="jc7o1l9"
                      ></div>

                      {/* Book cover */}
                      <div className="relative" data-oid="zfke1sq">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-02%20at%209.03.38%E2%80%AFpm-EzqCO8JB6tjTccn8gq9St2vGkBsqG0.png"
                          alt="Property Leverage Blueprint Book Cover"
                          className="w-80 h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
                          data-oid=".obebf8"
                        />

                        {/* Floating badges */}
                        <div
                          className="absolute -top-4 -right-4 bg-primary text-white rounded-full w-20 h-20 flex items-center justify-center text-center p-2 shadow-lg transform rotate-12 z-20"
                          data-oid="gzw5-ps"
                        >
                          <div data-oid="kh:kecv">
                            <div
                              className="text-xs font-medium"
                              data-oid="_xn9mqy"
                            >
                              Limited
                            </div>
                            <div
                              className="text-sm font-bold"
                              data-oid="4lxqnk6"
                            >
                              Edition
                            </div>
                          </div>
                        </div>

                        <div
                          className="absolute -bottom-4 -left-4 bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transform -rotate-12"
                          data-oid="gwnl0ig"
                        >
                          <div className="text-center" data-oid="_84wu9m">
                            <div className="text-xs" data-oid="25_jpqz">
                              Best
                            </div>
                            <div
                              className="text-sm font-bold"
                              data-oid="odrobpq"
                            >
                              Seller
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Keep existing sections but update the purchase buttons */}
            {/* Book Overview Section - Redesigned */}
            <section
              className="section bg-highlight relative overflow-hidden"
              data-oid="yxd8p4y"
            >
              <div
                className="absolute top-0 left-0 w-full h-full opacity-5"
                data-oid="2w-jz:h"
              >
                <div
                  className="absolute top-10 right-10 w-40 h-40 rounded-full bg-primary"
                  data-oid="ast.jiz"
                ></div>
                <div
                  className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-primary-dark"
                  data-oid="q1--k6w"
                ></div>
              </div>
              <div className="container relative z-10" data-oid="3gf0uc4">
                <div className="text-center mb-12" data-oid="h.cpozz">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-3 text-primary fade-in"
                    data-oid="dyg:1c1"
                  >
                    In a crowded real estate marketplace,{" "}
                    <span className="text-primary-dark" data-oid="f-bjrdc">
                      Positioning is Everything
                    </span>
                    .
                  </h2>
                  <div
                    className="flex flex-wrap justify-center gap-3 mt-4 mb-8"
                    data-oid=".wuh282"
                  >
                    <span
                      className="bg-primary text-white px-5 py-2 rounded-full text-sm font-bold shadow-md"
                      data-oid="3.bd6an"
                    >
                      Real Estate
                    </span>
                    <span
                      className="bg-primary-dark text-[#123b79] px-5 py-2 rounded-full text-sm font-bold shadow-md"
                      data-oid="k45p9hu"
                    >
                      Selling
                    </span>
                    <span
                      className="bg-[#123b79] text-white px-5 py-2 rounded-full text-sm font-bold shadow-md"
                      data-oid="4bx5t3f"
                    >
                      Property Investing Mindset
                    </span>
                  </div>
                </div>

                <div
                  className="bg-white rounded-xl shadow-xl p-6 md:p-8 max-w-4xl mx-auto"
                  data-oid="fjt16fv"
                >
                  <p className="mb-6 text-lg" data-oid="q50.ck9">
                    The moment you list your property in the resale market, it
                    becomes a unique product that needs to attract that one
                    right buyer to make the offer you desire. How do you stand
                    out and find the right buyer that truly appreciates and sees
                    the value of your property? How do you maximise the
                    potential sale price of your home?
                  </p>

                  <div
                    className="bg-primary text-white p-5 mb-6 rounded-lg shadow-inner"
                    data-oid="be8_2fv"
                  >
                    <p className="font-medium text-lg" data-oid="qjfy.e5">
                      It's about attracting genuine buyers by positioning your
                      property with content and maximum exposure.
                    </p>
                  </div>

                  <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-6"
                    data-oid="ywnt5-4"
                  >
                    <div className="md:col-span-2" data-oid="e3rwq1e">
                      <p className="mb-4" data-oid="q8t.jx6">
                        For the first time ever,{" "}
                        <strong data-oid="z2d27b7">Melvin Lim</strong> and{" "}
                        <strong data-oid="p1w5z.q">Adrian Lim</strong>—more
                        popularly known as PropertyLimBrothers, Singapore's most
                        successful real estate duo that revolutionalise how
                        properties are being marketed with video home tours in
                        Singapore—have assembled an unrivaled playbook on
                        property marketing, designed to take your home from{" "}
                        <strong data-oid="h7fgyc7">"listed"</strong> to{" "}
                        <strong data-oid="7y4mwyr">"sold"</strong>.
                      </p>

                      <p data-oid="nf45a-l">
                        More than just a guide, this is a blueprint for
                        uncovering the unique potential of every real estate you
                        touch and finding the perfect buyer for every home.
                        Backed by wisdom and 17 years of industry experience,
                        this book is your key to mastering the Art of Selling
                        Your Property to its Maximum Potential.
                      </p>
                    </div>
                    <div className="hidden md:block" data-oid="5uc-5g:">
                      <div
                        className="w-full aspect-square bg-gradient-to-br from-primary/10 to-primary-dark/20 rounded-full flex items-center justify-center"
                        data-oid="hzs1mwv"
                      >
                        <div
                          className="w-3/4 h-3/4 bg-gradient-to-tr from-primary to-primary-dark rounded-full flex items-center justify-center text-white text-5xl font-bold"
                          data-oid="qe-b35p"
                        >
                          17+
                          <span className="text-sm ml-1" data-oid="k.qh:cv">
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
              data-oid="7elmaz5"
            >
              <div className="container-fluid px-0" data-oid="b9--8n-">
                <div className="text-center mb-8 px-4" data-oid="l93mr:n">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-3 text-primary fade-in"
                    data-oid="ewsk25r"
                  >
                    Key Insights from the Book
                  </h2>
                  <p
                    className="text-lg text-gray-700 max-w-2xl mx-auto"
                    data-oid="s1bp4jy"
                  >
                    Discover powerful strategies and insights that will
                    transform your approach to property selling
                  </p>
                </div>

                <AutoScrollCarousel
                  images={quoteImages}
                  visibleCount={4}
                  autoScrollInterval={4000}
                  data-oid=":j4025e"
                />
              </div>
            </section>

            {/* Book Content Section - Keep existing design */}
            <section
              className="section relative overflow-hidden bg-secondary py-16"
              data-oid="arl3i:9"
            >
              <div
                className="container-fluid px-4 md:px-8 lg:px-12 relative z-10 max-w-[1600px] mx-auto"
                data-oid="od92qo9"
              >
                <div className="text-center mb-12" data-oid="zzh95dg">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-3 text-primary fade-in"
                    data-oid="63rs2:y"
                  >
                    Discover the Art of{" "}
                    <span className="text-primary-dark" data-oid="xzrwck2">
                      Home Selling
                    </span>
                  </h2>
                  <p
                    className="text-lg mb-8 max-w-2xl mx-auto"
                    data-oid="ewhxqhq"
                  >
                    A comprehensive playbook that transforms ordinary sellers
                    into market masters
                  </p>
                </div>

                <div
                  className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center"
                  data-oid="b5ge8:9"
                >
                  {/* Book image - now in a 4-column space */}
                  <div
                    className="xl:col-span-4 fade-in order-2 xl:order-1"
                    data-oid="9r__t2-"
                  >
                    <div
                      className="relative mx-auto max-w-md"
                      data-oid="prws1oe"
                    >
                      <div
                        className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-primary-dark/30 blur-2xl rounded-full transform -translate-y-4 translate-x-4"
                        data-oid="ddpsg9m"
                      ></div>
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-02%20at%209.03.38%E2%80%AFpm-EzqCO8JB6tjTccn8gq9St2vGkBsqG0.png"
                        alt="Property Positioning Book Cover"
                        className="relative z-10 w-full h-auto rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform rotate-3 hover:rotate-0 transition-all duration-500"
                        data-oid="txispsl"
                      />

                      <div
                        className="absolute -bottom-6 -right-6 bg-primary text-white rounded-full w-24 h-24 flex items-center justify-center text-center p-2 shadow-lg transform rotate-12 z-20"
                        data-oid=".i0_fwi"
                      >
                        <div data-oid="l40scnp">
                          <div className="text-xs" data-oid="isad0zg">
                            Limited
                          </div>
                          <div className="text-lg font-bold" data-oid="z2hjhl9">
                            Edition
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content cards - now in an 8-column space with 3 cards per row */}
                  <div
                    className="xl:col-span-8 fade-in order-1 xl:order-2"
                    data-oid="df3vlg5"
                  >
                    <div
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                      data-oid="mm90wn1"
                    >
                      <div
                        className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                        data-oid="56yle25"
                      >
                        <div
                          className="flex items-center mb-3"
                          data-oid="k0k74h2"
                        >
                          <div
                            className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 group-hover:scale-110 transition-transform"
                            data-oid="jshcz6s"
                          >
                            01
                          </div>
                          <h3
                            className="text-primary text-lg font-semibold"
                            data-oid="o:.8y.9"
                          >
                            Seller Mindset
                          </h3>
                        </div>
                        <p className="text-gray-600 pl-14" data-oid="kljtve6">
                          Master the psychology of successful property sellers
                        </p>
                      </div>

                      <div
                        className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                        data-oid="zc51_kk"
                      >
                        <div
                          className="flex items-center mb-3"
                          data-oid="s36p20z"
                        >
                          <div
                            className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 group-hover:scale-110 transition-transform"
                            data-oid="p3xu047"
                          >
                            02
                          </div>
                          <h3
                            className="text-primary text-lg font-semibold"
                            data-oid=":4ftlw4"
                          >
                            Market Patterns
                          </h3>
                        </div>
                        <p className="text-gray-600 pl-14" data-oid="d8v.uck">
                          Understand the Singapore Buy and Sell Pattern
                        </p>
                      </div>

                      <div
                        className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                        data-oid="a5p-jxs"
                      >
                        <div
                          className="flex items-center mb-3"
                          data-oid="_tw11:c"
                        >
                          <div
                            className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 group-hover:scale-110 transition-transform"
                            data-oid="0iflxtw"
                          >
                            03
                          </div>
                          <h3
                            className="text-primary text-lg font-semibold"
                            data-oid="8_3a6ya"
                          >
                            Buyer Connection
                          </h3>
                        </div>
                        <p className="text-gray-600 pl-14" data-oid="bku3e.l">
                          Build empathy with your eventual buyer
                        </p>
                      </div>

                      <div
                        className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                        data-oid="4bm6:1c"
                      >
                        <div
                          className="flex items-center mb-3"
                          data-oid="pssnfks"
                        >
                          <div
                            className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 group-hover:scale-110 transition-transform"
                            data-oid="mfg.bs7"
                          >
                            04
                          </div>
                          <h3
                            className="text-primary text-lg font-semibold"
                            data-oid="eis-5ha"
                          >
                            Home Preparation
                          </h3>
                        </div>
                        <p className="text-gray-600 pl-14" data-oid="yajk_1n">
                          Prepare and dress your house for maximum appeal
                        </p>
                      </div>

                      <div
                        className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                        data-oid="pomkep3"
                      >
                        <div
                          className="flex items-center mb-3"
                          data-oid="sa.3vrs"
                        >
                          <div
                            className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 group-hover:scale-110 transition-transform"
                            data-oid="izq5f.-"
                          >
                            05
                          </div>
                          <h3
                            className="text-primary text-lg font-semibold"
                            data-oid="-55vtu."
                          >
                            Social Media
                          </h3>
                        </div>
                        <p className="text-gray-600 pl-14" data-oid="kh95g5c">
                          Leverage the power of digital marketing
                        </p>
                      </div>

                      <div
                        className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                        data-oid="hg_j:st"
                      >
                        <div
                          className="flex items-center mb-3"
                          data-oid="zhudfkm"
                        >
                          <div
                            className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 group-hover:scale-110 transition-transform"
                            data-oid="26olh8t"
                          >
                            06
                          </div>
                          <h3
                            className="text-primary text-lg font-semibold"
                            data-oid="oalsg6s"
                          >
                            Pricing Strategy
                          </h3>
                        </div>
                        <p className="text-gray-600 pl-14" data-oid="kjr.a_m">
                          Set the right price with financial calculations
                        </p>
                      </div>
                    </div>

                    <div
                      className="mt-8 text-center lg:text-left"
                      data-oid="q57c3q2"
                    >
                      <Link
                        href="/plb-book/preview"
                        className="inline-block"
                        data-oid="y_cqj7j"
                      >
                        <button className="btn btn-primary" data-oid="ic9db.m">
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
              data-oid="h4ub5.8"
            >
              <div className="container relative z-10" data-oid="8k5_uv3">
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                  data-oid="t32m2bh"
                >
                  <div className="fade-in" data-oid="17wltpz">
                    <h2
                      className="text-2xl md:text-3xl font-bold mb-4"
                      data-oid="hf-u0.."
                    >
                      Unlock Your Property's Maximum Potential
                    </h2>
                    <p className="mb-6" data-oid="flan6cr">
                      Delve into a comprehensive guide to optimising property
                      value, blending market insights, data analysis, and buyer
                      psychology.
                    </p>
                    <Link
                      href="/plb-book/preview"
                      className="inline-block"
                      data-oid="krt:fd3"
                    >
                      <button
                        className="btn bg-transparent border-2 border-white text-white hover:bg-white/10"
                        data-oid="-vh.e:4"
                      >
                        Preview Free Chapter →
                      </button>
                    </Link>
                  </div>
                  <div className="fade-in" data-oid="pzrae..">
                    <div className="space-y-4" data-oid="mb-aihn">
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="4v0p40v"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid="::na3z9"
                        >
                          01
                        </span>
                        <span className="text-lg" data-oid="rqrm46v">
                          The Most Common Reasons for Selling
                        </span>
                      </div>
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="kgd51ft"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid=":ho1vr:"
                        >
                          02
                        </span>
                        <span className="text-lg" data-oid="szao7g4">
                          12 Steps to Selling Your Home
                        </span>
                      </div>
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="983c:vt"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid="d6k.ghr"
                        >
                          03
                        </span>
                        <span className="text-lg" data-oid="8zyf5jh">
                          Product Positioning: Transforming the home
                        </span>
                      </div>
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="vnwi1_3"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid=".1hnp9k"
                        >
                          04
                        </span>
                        <span className="text-lg" data-oid=":bcure2">
                          Marketing in the 21st Century: Real Estate Content
                          Creation
                        </span>
                      </div>
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="1yu2z47"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid="602_sj9"
                        >
                          05
                        </span>
                        <span className="text-lg" data-oid="c:t19hw">
                          Advertising and Distribution of Content: The Often
                          Neglected Part
                        </span>
                      </div>
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="r-90lxh"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid="rg_ah4g"
                        >
                          06
                        </span>
                        <span className="text-lg" data-oid="6g7ywxh">
                          Viewings: The Art of Showmanship
                        </span>
                      </div>
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="94nwpsc"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid="7kkikl0"
                        >
                          07
                        </span>
                        <span className="text-lg" data-oid="y-7s:l:">
                          Sealing the Deal: How to Price Your Property Correctly
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Author Section */}
            <section className="section" data-oid=":pgi_r.">
              <div className="container relative z-10" data-oid="9.zyo9d">
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                  data-oid="v4vxwvs"
                >
                  <div className="fade-in" data-oid="mmpku08">
                    <div
                      className="w-64 h-64 rounded-full bg-gray-300 mx-auto md:mx-0"
                      data-oid="3e-:s.:"
                    ></div>
                  </div>
                  <div className="fade-in" data-oid="gery8qv">
                    <h2 className="text-primary" data-oid="ea.6tar">
                      About the Author
                    </h2>
                    <p className="feature-text text-xl mb-4" data-oid="jzwo1c-">
                      With over 15 years of experience in Singapore's property
                      market
                    </p>
                    <p data-oid="dbsfyff">
                      The author brings unparalleled insights into the local
                      property landscape, having helped hundreds of clients
                      build wealth through strategic property investments.
                    </p>
                    <p data-oid="z_jxgwv">
                      As the founder of Assembly SG, they have developed a
                      proven system for property investment success that works
                      in any market condition.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="section bg-highlight" data-oid="saf0m.a">
              <div className="container relative z-10" data-oid="o9etgzg">
                <h2
                  className="text-center text-primary mb-12 fade-in"
                  data-oid="xm96w22"
                >
                  Frequently Asked Questions
                </h2>
                <div className="max-w-3xl mx-auto space-y-2" data-oid="5bpilpv">
                  {faqItems.map((item, index) => (
                    <FAQItem
                      key={index}
                      question={item.question}
                      answer={item.answer}
                      isOpen={activeIndex === index}
                      onClick={() => toggleFAQ(index)}
                      className="py-2"
                      data-oid="9vzyaeu"
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
