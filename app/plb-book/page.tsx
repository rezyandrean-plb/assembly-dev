"use client";

import { useEffect, useRef, useState } from "react";
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
  Users,
  Award,
  ChevronDown,
  HelpCircle,
} from "lucide-react";

export default function PLBBookPage() {
  const { addToCart } = useCart();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

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
      <main
        className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50"
        data-oid="oqhqx.v"
      >
        <Navbar data-oid="582sgf9" />
        <div className="pt-24 pb-16" data-oid="u2b0nhw">
          <div className="plb-book-page relative" data-oid="hbq8qp4">
            {/* Hero Section - Simplified Design */}
            <section
              className="section relative"
              style={{ paddingTop: "120px" }}
              data-oid="k:v3y7x"
            >
              <div className="container" data-oid="gh6r0kk">
                <div
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  data-oid="y61nvu-"
                >
                  {/* Left Column - Content */}
                  <div className="fade-in space-y-8" data-oid="vx:ecn8">
                    <div className="space-y-4" data-oid="u6v.wzk">
                      <div
                        className="flex items-center space-x-2 text-sm text-primary font-medium"
                        data-oid="_lwzovv"
                      >
                        <Award className="w-4 h-4" data-oid="x8b7-og" />
                        <span data-oid="9i9udo9">
                          BESTSELLING PROPERTY GUIDE
                        </span>
                      </div>
                      <h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                        data-oid="a.y29i1"
                      >
                        Property Leverage
                        <span className="block text-primary" data-oid="9c1a0-.">
                          Blueprint
                        </span>
                      </h1>
                      <p
                        className="text-xl text-gray-600 leading-relaxed"
                        data-oid="hsv8mbl"
                      >
                        Your comprehensive guide to mastering property
                        investment in Singapore's dynamic market
                      </p>
                    </div>

                    {/* Social Proof */}
                    <div
                      className="flex items-center space-x-6"
                      data-oid="-wxhrtl"
                    >
                      <div
                        className="flex items-center space-x-1"
                        data-oid=":cy4k44"
                      >
                        <div className="flex" data-oid="txg9c.a">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-yellow-400 text-yellow-400"
                              data-oid="6aplw3u"
                            />
                          ))}
                        </div>
                        <span
                          className="text-sm text-gray-600 ml-2"
                          data-oid="kdvv82w"
                        >
                          4.9/5 (500+ reviews)
                        </span>
                      </div>
                      <div
                        className="flex items-center space-x-2 text-sm text-gray-600"
                        data-oid="7:.-612"
                      >
                        <Users className="w-4 h-4" data-oid="-pj0105" />
                        <span data-oid="nznny9l">10,000+ readers</span>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div
                      className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                      data-oid="9_38jq3"
                    >
                      <div
                        className="flex items-center justify-between mb-4"
                        data-oid="tvhi0gn"
                      >
                        <div
                          className="flex items-baseline space-x-2"
                          data-oid="ocb_npo"
                        >
                          <span
                            className="text-gray-500 line-through text-lg"
                            data-oid="abfzz-h"
                          >
                            $39
                          </span>
                          <span
                            className="text-3xl font-bold text-primary"
                            data-oid="gjvc3bn"
                          >
                            $29
                          </span>
                          <span
                            className="text-sm text-gray-500"
                            data-oid="44-cex."
                          >
                            SGD
                          </span>
                        </div>
                        <div
                          className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium"
                          data-oid="c.xlfbu"
                        >
                          Limited Time Offer
                        </div>
                      </div>
                      <p
                        className="text-sm text-gray-500 mb-6"
                        data-oid="w-z7z4_"
                      >
                        Free shipping for all physical copies within Singapore
                      </p>

                      {/* Simple Buttons */}
                      <div className="space-y-3" data-oid="j-.-k34">
                        <Button
                          onClick={handleGetEbook}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                          size="lg"
                          data-oid="6pw0_w_"
                        >
                          <Download
                            className="w-4 h-4 mr-2"
                            data-oid="l8t-4t7"
                          />
                          Get the E-book
                        </Button>
                        <Button
                          onClick={handleGetPaperback}
                          variant="outline"
                          className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                          size="lg"
                          data-oid="j8a1m9t"
                        >
                          <ShoppingCart
                            className="w-4 h-4 mr-2"
                            data-oid="y52csbl"
                          />
                          Get the Paperback
                        </Button>
                      </div>
                    </div>

                    {/* Trust Indicators */}
                    <div
                      className="flex flex-wrap items-center gap-4 text-sm text-gray-500"
                      data-oid="f0mtnwh"
                    >
                      <div
                        className="flex items-center space-x-1"
                        data-oid="gzj0qqv"
                      >
                        <div
                          className="w-2 h-2 bg-green-500 rounded-full"
                          data-oid=":ag09ih"
                        ></div>
                        <span data-oid="1m-f9by">Secure payment</span>
                      </div>
                      <div
                        className="flex items-center space-x-1"
                        data-oid="bhl9zj."
                      >
                        <div
                          className="w-2 h-2 bg-green-500 rounded-full"
                          data-oid="2z4p3vt"
                        ></div>
                        <span data-oid="64e:z:d">Free shipping (SG)</span>
                      </div>
                      <div
                        className="flex items-center space-x-1"
                        data-oid="lo9qn0s"
                      >
                        <div
                          className="w-2 h-2 bg-green-500 rounded-full"
                          data-oid="o2-qc.8"
                        ></div>
                        <span data-oid="k8k2.ni">Expert support</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Book Visual */}
                  <div
                    className="fade-in flex justify-center lg:justify-end"
                    data-oid="8b6ac1m"
                  >
                    <div className="relative" data-oid="axcyvw:">
                      {/* Background decoration */}
                      <div
                        className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary-dark/20 blur-2xl rounded-full"
                        data-oid="lthc3h7"
                      ></div>

                      {/* Book cover */}
                      <div className="relative" data-oid="71ya6rn">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-02%20at%209.03.38%E2%80%AFpm-EzqCO8JB6tjTccn8gq9St2vGkBsqG0.png"
                          alt="Property Leverage Blueprint Book Cover"
                          className="w-80 h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
                          data-oid="zxth3_t"
                        />

                        {/* Floating badges */}
                        <div
                          className="absolute -top-4 -right-4 bg-primary text-white rounded-full w-20 h-20 flex items-center justify-center text-center p-2 shadow-lg transform rotate-12 z-20"
                          data-oid="wry11sb"
                        >
                          <div data-oid="pbxbq_4">
                            <div
                              className="text-xs font-medium"
                              data-oid="3opi4j3"
                            >
                              Limited
                            </div>
                            <div
                              className="text-sm font-bold"
                              data-oid="789xgnv"
                            >
                              Edition
                            </div>
                          </div>
                        </div>

                        <div
                          className="absolute -bottom-4 -left-4 bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transform -rotate-12"
                          data-oid="xnmrlam"
                        >
                          <div className="text-center" data-oid="f79s:f0">
                            <div className="text-xs" data-oid="euqvhk4">
                              Best
                            </div>
                            <div
                              className="text-sm font-bold"
                              data-oid="_rvb9dm"
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

            {/* Book Overview Section */}
            <section
              className="section bg-gradient-to-r from-blue-50 to-indigo-50 relative overflow-hidden"
              data-oid="uvf.7c7"
            >
              <div className="container relative z-10" data-oid="ezmvz2i">
                <div className="text-center mb-12" data-oid="d1beeuc">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-3 text-primary fade-in"
                    data-oid="cod4z93"
                  >
                    In a crowded real estate marketplace,{" "}
                    <span className="text-primary-dark" data-oid="g8x7g32">
                      Positioning is Everything
                    </span>
                    .
                  </h2>
                  <div
                    className="flex flex-wrap justify-center gap-3 mt-4 mb-8"
                    data-oid="1zyn08w"
                  >
                    <span
                      className="bg-primary text-white px-5 py-2 rounded-full text-sm font-bold shadow-md"
                      data-oid="cc34zd:"
                    >
                      Real Estate
                    </span>
                    <span
                      className="bg-primary-dark text-white px-5 py-2 rounded-full text-sm font-bold shadow-md"
                      data-oid="zpr8:px"
                    >
                      Selling
                    </span>
                    <span
                      className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-md"
                      data-oid="vmt09tq"
                    >
                      Property Investing Mindset
                    </span>
                  </div>
                </div>

                <div
                  className="bg-white rounded-xl shadow-xl p-6 md:p-8 max-w-4xl mx-auto"
                  data-oid="dqt47:f"
                >
                  <p className="mb-6 text-lg" data-oid="_xuq32q">
                    The moment you list your property in the resale market, it
                    becomes a unique product that needs to attract that one
                    right buyer to make the offer you desire. How do you stand
                    out and find the right buyer that truly appreciates and sees
                    the value of your property? How do you maximise the
                    potential sale price of your home?
                  </p>

                  <div
                    className="bg-primary text-white p-5 mb-6 rounded-lg shadow-inner"
                    data-oid="hr1rw96"
                  >
                    <p className="font-medium text-lg" data-oid="vuq2x.g">
                      It's about attracting genuine buyers by positioning your
                      property with content and maximum exposure.
                    </p>
                  </div>

                  <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-6"
                    data-oid="omfpsli"
                  >
                    <div className="md:col-span-2" data-oid="xet-d0y">
                      <p className="mb-4" data-oid="eweb-7i">
                        For the first time ever,{" "}
                        <strong data-oid="88a609x">Melvin Lim</strong> and{" "}
                        <strong data-oid="7plctfj">Adrian Lim</strong>—more
                        popularly known as PropertyLimBrothers, Singapore's most
                        successful real estate duo that revolutionalise how
                        properties are being marketed with video home tours in
                        Singapore—have assembled an unrivaled playbook on
                        property marketing, designed to take your home from{" "}
                        <strong data-oid="lga62_j">"listed"</strong> to{" "}
                        <strong data-oid="a0c1bpf">"sold"</strong>.
                      </p>

                      <p data-oid="8id9nlf">
                        More than just a guide, this is a blueprint for
                        uncovering the unique potential of every real estate you
                        touch and finding the perfect buyer for every home.
                        Backed by wisdom and 17 years of industry experience,
                        this book is your key to mastering the Art of Selling
                        Your Property to its Maximum Potential.
                      </p>
                    </div>
                    <div className="hidden md:block" data-oid="9bsoec1">
                      <div
                        className="w-full aspect-square bg-gradient-to-br from-primary/10 to-primary-dark/20 rounded-full flex items-center justify-center"
                        data-oid="h3_olw2"
                      >
                        <div
                          className="w-3/4 h-3/4 bg-gradient-to-tr from-primary to-primary-dark rounded-full flex items-center justify-center text-white text-5xl font-bold"
                          data-oid="w3eg8-i"
                        >
                          17+
                          <span className="text-sm ml-1" data-oid=".20gt9y">
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
            <section className="section py-16 bg-gray-100" data-oid="7bqp2mi">
              <div className="container-fluid px-0" data-oid="uy3wmi6">
                <div className="text-center mb-8 px-4" data-oid="wd2y3u2">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-3 text-primary fade-in"
                    data-oid="z6mit__"
                  >
                    Key Insights from the Book
                  </h2>
                  <p
                    className="text-lg text-gray-700 max-w-2xl mx-auto"
                    data-oid="3g2oss0"
                  >
                    Discover powerful strategies and insights that will
                    transform your approach to property selling
                  </p>
                </div>

                <AutoScrollCarousel
                  images={quoteImages}
                  visibleCount={4}
                  autoScrollInterval={4000}
                  data-oid=".xkz7me"
                />
              </div>
            </section>

            {/* Book Content Section */}
            <section
              className="section relative overflow-hidden bg-white py-16"
              data-oid="e7ajdvo"
            >
              <div
                className="container-fluid px-4 md:px-8 lg:px-12 relative z-10 max-w-[1600px] mx-auto"
                data-oid="nm:.-jg"
              >
                <div className="text-center mb-12" data-oid="ro1bd25">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-3 text-primary fade-in"
                    data-oid="bd-mwsa"
                  >
                    Discover the Art of{" "}
                    <span className="text-primary-dark" data-oid="dplbr5c">
                      Home Selling
                    </span>
                  </h2>
                  <p
                    className="text-lg mb-8 max-w-2xl mx-auto"
                    data-oid="oruyag3"
                  >
                    A comprehensive playbook that transforms ordinary sellers
                    into market masters
                  </p>
                </div>

                <div
                  className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center"
                  data-oid="1njc_47"
                >
                  {/* Book image */}
                  <div
                    className="xl:col-span-4 fade-in order-2 xl:order-1"
                    data-oid="lo089c8"
                  >
                    <div
                      className="relative mx-auto max-w-md"
                      data-oid="q6d86bv"
                    >
                      <div
                        className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-primary-dark/30 blur-2xl rounded-full transform -translate-y-4 translate-x-4"
                        data-oid="4jdyhv4"
                      ></div>
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-02%20at%209.03.38%E2%80%AFpm-EzqCO8JB6tjTccn8gq9St2vGkBsqG0.png"
                        alt="Property Positioning Book Cover"
                        className="relative z-10 w-full h-auto rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform rotate-3 hover:rotate-0 transition-all duration-500"
                        data-oid="ap_zqw-"
                      />

                      <div
                        className="absolute -bottom-6 -right-6 bg-primary text-white rounded-full w-24 h-24 flex items-center justify-center text-center p-2 shadow-lg transform rotate-12 z-20"
                        data-oid="5g0g7uo"
                      >
                        <div data-oid="o9tqbko">
                          <div className="text-xs" data-oid="96o0063">
                            Limited
                          </div>
                          <div className="text-lg font-bold" data-oid="31qewru">
                            Edition
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content cards */}
                  <div
                    className="xl:col-span-8 fade-in order-1 xl:order-2"
                    data-oid="ww:2kie"
                  >
                    <div
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                      data-oid="exqw.iu"
                    >
                      <div
                        className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100"
                        data-oid="iat:v7w"
                      >
                        <div
                          className="flex items-center mb-3"
                          data-oid="mghei-9"
                        >
                          <div
                            className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 group-hover:scale-110 transition-transform"
                            data-oid=":55qtwa"
                          >
                            01
                          </div>
                          <h3
                            className="text-primary text-lg font-semibold"
                            data-oid="39n2o_x"
                          >
                            Seller Mindset
                          </h3>
                        </div>
                        <p className="text-gray-600 pl-14" data-oid="i4t3xv2">
                          Master the psychology of successful property sellers
                        </p>
                      </div>

                      <div
                        className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100"
                        data-oid="eel:u_2"
                      >
                        <div
                          className="flex items-center mb-3"
                          data-oid="5rc6ow7"
                        >
                          <div
                            className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 group-hover:scale-110 transition-transform"
                            data-oid="e-45zlz"
                          >
                            02
                          </div>
                          <h3
                            className="text-primary text-lg font-semibold"
                            data-oid="5xzx-lp"
                          >
                            Market Patterns
                          </h3>
                        </div>
                        <p className="text-gray-600 pl-14" data-oid="g19trtw">
                          Understand the Singapore Buy and Sell Pattern
                        </p>
                      </div>

                      <div
                        className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100"
                        data-oid="tca_az8"
                      >
                        <div
                          className="flex items-center mb-3"
                          data-oid="462v0-p"
                        >
                          <div
                            className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 group-hover:scale-110 transition-transform"
                            data-oid="x3y:eq9"
                          >
                            03
                          </div>
                          <h3
                            className="text-primary text-lg font-semibold"
                            data-oid="hj4pjva"
                          >
                            Buyer Connection
                          </h3>
                        </div>
                        <p className="text-gray-600 pl-14" data-oid="bsx-u63">
                          Build empathy with your eventual buyer
                        </p>
                      </div>

                      <div
                        className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100"
                        data-oid="bsbao-l"
                      >
                        <div
                          className="flex items-center mb-3"
                          data-oid="-7hfzzd"
                        >
                          <div
                            className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 group-hover:scale-110 transition-transform"
                            data-oid="o4xpx2c"
                          >
                            04
                          </div>
                          <h3
                            className="text-primary text-lg font-semibold"
                            data-oid="va954mg"
                          >
                            Home Preparation
                          </h3>
                        </div>
                        <p className="text-gray-600 pl-14" data-oid="z:y_0ed">
                          Prepare and dress your house for maximum appeal
                        </p>
                      </div>

                      <div
                        className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100"
                        data-oid="unr-.sv"
                      >
                        <div
                          className="flex items-center mb-3"
                          data-oid="sll8xs1"
                        >
                          <div
                            className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 group-hover:scale-110 transition-transform"
                            data-oid="gpu80qq"
                          >
                            05
                          </div>
                          <h3
                            className="text-primary text-lg font-semibold"
                            data-oid="p2w_.8t"
                          >
                            Social Media
                          </h3>
                        </div>
                        <p className="text-gray-600 pl-14" data-oid="e0u2lh9">
                          Leverage the power of digital marketing
                        </p>
                      </div>

                      <div
                        className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100"
                        data-oid="65ps227"
                      >
                        <div
                          className="flex items-center mb-3"
                          data-oid="6mdmdya"
                        >
                          <div
                            className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 group-hover:scale-110 transition-transform"
                            data-oid="3z7g7tf"
                          >
                            06
                          </div>
                          <h3
                            className="text-primary text-lg font-semibold"
                            data-oid="k32q5l7"
                          >
                            Pricing Strategy
                          </h3>
                        </div>
                        <p className="text-gray-600 pl-14" data-oid="ji2ozd6">
                          Set the right price with financial calculations
                        </p>
                      </div>
                    </div>

                    <div
                      className="mt-8 text-center lg:text-left"
                      data-oid="2_abirt"
                    >
                      <Link
                        href="/plb-book/preview"
                        className="inline-block"
                        data-oid="y2nfz.s"
                      >
                        <button className="btn btn-primary" data-oid="sw1vaot">
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
              data-oid="te7rnrr"
            >
              <div className="container relative z-10" data-oid="0sdp_a0">
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                  data-oid="9xlwb82"
                >
                  <div className="fade-in" data-oid="de3._6h">
                    <h2
                      className="text-2xl md:text-3xl font-bold mb-4"
                      data-oid="e4_82ft"
                    >
                      Unlock Your Property's Maximum Potential
                    </h2>
                    <p className="mb-6" data-oid="pj:q_3d">
                      Delve into a comprehensive guide to optimising property
                      value, blending market insights, data analysis, and buyer
                      psychology.
                    </p>
                    <Link
                      href="/plb-book/preview"
                      className="inline-block"
                      data-oid="8c.8dra"
                    >
                      <button
                        className="btn bg-transparent border-2 border-white text-white hover:bg-white/10"
                        data-oid="ujdabr."
                      >
                        Preview Free Chapter →
                      </button>
                    </Link>
                  </div>
                  <div className="fade-in" data-oid="4zpp3rn">
                    <div className="space-y-4" data-oid="l5bqzhs">
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="7ww58v7"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid="y2vunwc"
                        >
                          01
                        </span>
                        <span className="text-lg" data-oid="8xgl.ec">
                          The Most Common Reasons for Selling
                        </span>
                      </div>
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid=".c-i9:e"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid="qics5qr"
                        >
                          02
                        </span>
                        <span className="text-lg" data-oid="0._xm3b">
                          12 Steps to Selling Your Home
                        </span>
                      </div>
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="-fjvw1s"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid="dll8mgh"
                        >
                          03
                        </span>
                        <span className="text-lg" data-oid="4dvr_5i">
                          Product Positioning: Transforming the home
                        </span>
                      </div>
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="sfhn6sk"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid="3g1kmk6"
                        >
                          04
                        </span>
                        <span className="text-lg" data-oid="7frbyhq">
                          Marketing in the 21st Century: Real Estate Content
                          Creation
                        </span>
                      </div>
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="60u_lts"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid="a20a8ja"
                        >
                          05
                        </span>
                        <span className="text-lg" data-oid="p_1.0.r">
                          Advertising and Distribution of Content: The Often
                          Neglected Part
                        </span>
                      </div>
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="8em1ok4"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid="p:qyva5"
                        >
                          06
                        </span>
                        <span className="text-lg" data-oid="n-lr:f8">
                          Viewings: The Art of Showmanship
                        </span>
                      </div>
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="tgrucgs"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid="7phjmrx"
                        >
                          07
                        </span>
                        <span className="text-lg" data-oid="iw3hr5m">
                          Sealing the Deal: How to Price Your Property Correctly
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Author Section */}
            <section className="section bg-white" data-oid=".z2qr2p">
              <div className="container relative z-10" data-oid="62_duuw">
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                  data-oid="0p0may5"
                >
                  <div className="fade-in" data-oid="tda0l_2">
                    <div
                      className="w-64 h-64 rounded-full bg-gray-300 mx-auto md:mx-0"
                      data-oid="_hd3:i3"
                    ></div>
                  </div>
                  <div className="fade-in" data-oid="...ghbs">
                    <h2 className="text-primary" data-oid="unc49kq">
                      About the Author
                    </h2>
                    <p className="feature-text text-xl mb-4" data-oid="h7_ic86">
                      With over 15 years of experience in Singapore's property
                      market
                    </p>
                    <p data-oid="w1mxq-r">
                      The author brings unparalleled insights into the local
                      property landscape, having helped hundreds of clients
                      build wealth through strategic property investments.
                    </p>
                    <p data-oid="v.-j6bi">
                      As the founder of Assembly SG, they have developed a
                      proven system for property investment success that works
                      in any market condition.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Redesigned FAQ Section */}
            <section
              className="section bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
              data-oid="qgdzsd."
            >
              <div className="container relative z-10" data-oid="tyvhpd-">
                <div className="text-center mb-16" data-oid="o:g-8nd">
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4"
                    data-oid="2g1mg7o"
                  >
                    <HelpCircle
                      className="w-8 h-8 text-primary"
                      data-oid="48ye1jx"
                    />
                  </div>
                  <h2
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 fade-in"
                    data-oid="f5qg4ne"
                  >
                    Frequently Asked Questions
                  </h2>
                  <p
                    className="text-lg text-gray-600 max-w-2xl mx-auto"
                    data-oid="9dl5etz"
                  >
                    Everything you need to know about the Property Leverage
                    Blueprint
                  </p>
                </div>

                <div className="max-w-4xl mx-auto" data-oid="xks1-pi">
                  <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    data-oid="ovniy5r"
                  >
                    {faqItems.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
                        data-oid="3zzxbah"
                      >
                        <button
                          onClick={() => toggleFAQ(index)}
                          className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                          data-oid="66fx5o3"
                        >
                          <h3
                            className="text-lg font-semibold text-gray-900 pr-4"
                            data-oid="t45fzqn"
                          >
                            {item.question}
                          </h3>
                          <ChevronDown
                            className={`w-5 h-5 text-primary transition-transform duration-200 flex-shrink-0 ${
                              activeIndex === index ? "rotate-180" : ""
                            }`}
                            data-oid="tx0-c3w"
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            activeIndex === index
                              ? "max-h-96 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                          data-oid="2zoy7jv"
                        >
                          <div className="px-6 pb-5" data-oid="8axn50b">
                            <div
                              className="h-px bg-gray-100 mb-4"
                              data-oid="5poyyz2"
                            ></div>
                            <p
                              className="text-gray-600 leading-relaxed"
                              data-oid="mj5onub"
                            >
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Support */}
                <div className="text-center mt-12" data-oid=".g9j:ri">
                  <div
                    className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 max-w-md mx-auto"
                    data-oid="ru3lqvo"
                  >
                    <h3
                      className="text-xl font-semibold text-gray-900 mb-2"
                      data-oid="t0y0t2w"
                    >
                      Still have questions?
                    </h3>
                    <p className="text-gray-600 mb-4" data-oid="8291m-_">
                      Our friendly team is here to help you with any inquiries.
                    </p>
                    <a
                      href="mailto:hello@assembly.sg"
                      className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200"
                      data-oid="3pwnn8_"
                    >
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
