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
      <Navbar data-oid="426hrcg" />
      container mx-auto px-4 flex justify-between items-center
      <main className="min-h-screen bg-white" data-oid="-k_z:yz">
        {/* Page Content */}
        <div className="pt-24 pb-16" data-oid="zgdqv1_">
          <div
            className="plb-book-page mx-auto px-4 sm:px-6 lg:px-8"
            data-oid=".gdhixc"
          >
            {/* Light gradient background instead of network */}
            <div
              className="absolute inset-0 z-0"
              style={{ backgroundColor: "#ffffff" }}
              data-oid="2pgf2nx"
            ></div>

            {/* Hero Section */}
            <section
              className="section"
              style={{ paddingTop: "120px" }}
              data-oid="ditgf7o"
            >
              <div className="container relative z-10" data-oid=".l7knxm">
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                  data-oid="o84llaf"
                >
                  <div className="fade-in" data-oid="k5v498j">
                    <h1
                      className="text-primary mb-4 text-3xl"
                      data-oid="g-7y25k"
                    >
                      Positioning: PropertyLimBrothers on the Art of Selling
                      Your Property to its Maximum Potential
                    </h1>
                    <p className="text-md mb-6" data-oid="r-rm:-i">
                      When you truly understand how to sell and see through the
                      lens of a buyer, you gain charity on what, where and which
                      property to buy and invest in next.
                    </p>
                    <div className="mb-6" data-oid="dn75.ao">
                      <div
                        className="flex items-center mb-2"
                        data-oid="coq7-mk"
                      >
                        <span
                          className="text-gray-500 line-through mr-2"
                          data-oid="5czgxza"
                        >
                          $39.00
                        </span>
                        <span
                          className="text-2xl font-bold text-primary"
                          data-oid="_dou2.:"
                        >
                          $29.00
                        </span>
                      </div>
                    </div>
                    <div className="mt-8 flex space-x-4" data-oid=":_fiazd">
                      <a
                        href="https://www.amazon.com/dp/B0F1CMZ9MQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-oid="p:6u5-1"
                      >
                        <Button
                          size="lg"
                          className="bg-primary text-white"
                          data-oid="am4q:9v"
                        >
                          Get the E-book
                        </Button>
                      </a>
                      <Button
                        size="lg"
                        variant="outline"
                        onClick={handleAddToCart}
                        data-oid="o4az903"
                      >
                        Get the Paperback
                      </Button>
                    </div>
                  </div>
                  <div
                    className="fade-in flex justify-center"
                    data-oid="hm02k-c"
                  >
                    <div
                      className="relative w-[300px] h-[390px] bg-primary rounded-lg shadow-xl transform rotate-3 animate-float"
                      data-oid="33n43v1"
                    >
                      <img
                        src="/images/PLB Book Front Cover_FA.jpg"
                        alt="PropertyLimBrothers Book Cover"
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                        data-oid="dbvm9ky"
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
              data-oid="km2w4mn"
            >
              <div
                className="absolute top-0 left-0 w-full h-full opacity-5"
                data-oid="34iqdol"
              >
                <div
                  className="absolute top-10 right-10 w-40 h-40 rounded-full bg-primary"
                  data-oid="gdpws68"
                ></div>
                <div
                  className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-primary-dark"
                  data-oid="4netm4n"
                ></div>
              </div>
              <div className="container relative z-10" data-oid="b1om9m8">
                <div className="text-center mb-12" data-oid="9z_kit6">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-3 text-primary fade-in"
                    data-oid="4suaqzx"
                  >
                    In a crowded real estate marketplace,{" "}
                    <span className="text-primary-dark" data-oid="-ey88-c">
                      Positioning is Everything
                    </span>
                    .
                  </h2>
                  <div
                    className="flex flex-wrap justify-center gap-3 mt-4 mb-8"
                    data-oid="u39uako"
                  >
                    <span
                      className="bg-primary text-white px-5 py-2 rounded-full text-sm font-bold shadow-md"
                      data-oid="k7lyqi."
                    >
                      Real Estate
                    </span>
                    <span
                      className="bg-primary text-white px-5 py-2 rounded-full text-sm font-bold shadow-md"
                      data-oid="z9n9kyh"
                    >
                      Selling
                    </span>
                    <span
                      className="bg-[#123b79] text-white px-5 py-2 rounded-full text-sm font-bold shadow-md"
                      data-oid=".wi5cjp"
                    >
                      Property Investing Mindset
                    </span>
                  </div>
                </div>

                <div
                  className="bg-white rounded-xl shadow-xl p-6 md:p-8 max-w-4xl mx-auto"
                  data-oid="-ehq3_7"
                >
                  <p className="mb-6 text-lg" data-oid="4oszuqi">
                    The moment you list your property in the resale market, it
                    becomes a unique product that needs to attract that one
                    right buyer to make the offer you desire. How do you stand
                    out and find the right buyer that truly appreciates and sees
                    the value of your property? How do you maximise the
                    potential sale price of your home?
                  </p>

                  <div
                    className="bg-primary text-white p-5 mb-6 rounded-lg shadow-inner"
                    data-oid=".8irsbs"
                  >
                    <p className="font-medium text-lg" data-oid="x8mbj78">
                      It's about attracting genuine buyers by positioning your
                      property with content and maximum exposure.
                    </p>
                  </div>

                  <div className="mb-6" data-oid="aqwwtri">
                    <p className="mb-4" data-oid="dfdk44c">
                      For the first time ever,{" "}
                      <strong data-oid="6kve5q9">Melvin Lim</strong> and{" "}
                      <strong data-oid="49t20-x">Adrian Lim</strong>—more
                      popularly known as PropertyLimBrothers, Singapore's most
                      successful real estate duo that revolutionalise how
                      properties are being marketed with video home tours in
                      Singapore—have assembled an unrivaled playbook on property
                      marketing, designed to take your home from{" "}
                      <strong data-oid="8:cedqs">"listed"</strong> to{" "}
                      <strong data-oid="c.242ud">"sold"</strong>.
                    </p>

                    <p data-oid="yayymeo">
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
              data-oid="i4o_c9i"
            >
              <div className="container-fluid px-0" data-oid="0q7rgmh">
                <div className="text-center mb-8 px-4" data-oid="d3deem:">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-3 text-primary fade-in"
                    data-oid="tr:brg0"
                  >
                    Key Insights from the Book
                  </h2>
                  <p
                    className="text-lg text-gray-700 max-w-2xl mx-auto"
                    data-oid="a8r-e-a"
                  >
                    Discover powerful strategies and insights that will
                    transform your approach to property selling
                  </p>
                </div>

                <AutoScrollCarousel
                  images={quoteImages}
                  visibleCount={4}
                  autoScrollInterval={4000}
                  data-oid="bsx3mtx"
                />
              </div>
            </section>

            {/* Book Content Section - Redesigned for Full Width */}
            <section
              className="section relative overflow-hidden py-16"
              style={{ backgroundColor: "#e7ebf1" }}
              data-oid="yw5_bzl"
            >
              <div
                className="container-fluid px-4 md:px-8 lg:px-12 relative z-10 max-w-[1600px] mx-auto"
                data-oid=":r.:dq:"
              >
                <div className="text-center mb-12" data-oid="pvpd.7o">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-3 text-primary fade-in"
                    data-oid="735eun."
                  >
                    Discover the Art of{" "}
                    <span className="text-primary-dark" data-oid="c.hqcj9">
                      Home Selling
                    </span>
                  </h2>
                  <p
                    className="text-lg mb-8 max-w-3xl mx-auto"
                    data-oid="5rtoa5z"
                  >
                    Embark on a journey through the pages of this book, where we
                    demystify the art of home selling with a comprehensive,
                    step-by-step playbook.
                  </p>
                </div>

                <div className="max-w-6xl mx-auto" data-oid="psv6mmy">
                  <div
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8"
                    data-oid="hjuqz11"
                  >
                    {/* Book image on the left - outside white container */}
                    <div
                      className="lg:col-span-4 fade-in relative"
                      data-oid="dsezo28"
                    >
                      <div
                        className="absolute w-[165%] -left-[30%]"
                        data-oid="v0449q5"
                      >
                        <img
                          src="/images/PLB Book Mockup Cover & Content.png"
                          alt="PropertyLimBrothers Book Cover"
                          className="w-full h-full object-contain scale-150"
                          data-oid=":e4asri"
                        />
                      </div>
                    </div>

                    {/* List on the right - in white container */}
                    <div className="lg:col-span-8 fade-in" data-oid="59jp5eq">
                      <div
                        className="bg-white rounded-xl shadow-lg p-8"
                        data-oid="8qkn3jj"
                      >
                        <div
                          className="grid grid-cols-1 md:grid-cols-2 gap-4"
                          data-oid="r9yf2la"
                        >
                          <div className="space-y-3" data-oid="3.18vtz">
                            <div
                              className="flex items-start"
                              data-oid=":-hu0h."
                            >
                              <div
                                className="bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-3 text-xs flex-shrink-0 mt-0.5"
                                data-oid="2g6kz--"
                              >
                                01
                              </div>
                              <div data-oid="2_v5-uj">
                                <h3
                                  className="text-primary font-semibold text-sm"
                                  data-oid="vdnp-w6"
                                >
                                  The mindset of successful property sellers
                                </h3>
                              </div>
                            </div>

                            <div
                              className="flex items-start"
                              data-oid="du.ulc5"
                            >
                              <div
                                className="bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-3 text-xs flex-shrink-0 mt-0.5"
                                data-oid="-4za9kk"
                              >
                                02
                              </div>
                              <div data-oid="81ey3e2">
                                <h3
                                  className="text-primary font-semibold text-sm"
                                  data-oid="haeamw7"
                                >
                                  The Singapore Buy and Sell Pattern
                                </h3>
                              </div>
                            </div>

                            <div
                              className="flex items-start"
                              data-oid="-8iviq6"
                            >
                              <div
                                className="bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-3 text-xs flex-shrink-0 mt-0.5"
                                data-oid="sfx35x:"
                              >
                                03
                              </div>
                              <div data-oid="j:d507l">
                                <h3
                                  className="text-primary font-semibold text-sm"
                                  data-oid="eh3vm4o"
                                >
                                  How to build empathy and connection with your
                                  eventual buyer
                                </h3>
                              </div>
                            </div>

                            <div
                              className="flex items-start"
                              data-oid="sksaxl6"
                            >
                              <div
                                className="bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-3 text-xs flex-shrink-0 mt-0.5"
                                data-oid="k9.rsq5"
                              >
                                04
                              </div>
                              <div data-oid="h3522i1">
                                <h3
                                  className="text-primary font-semibold text-sm"
                                  data-oid="hqjoigb"
                                >
                                  Step-by-step guide to preparing for a home
                                  sale
                                </h3>
                              </div>
                            </div>

                            <div
                              className="flex items-start"
                              data-oid="yfv1.-b"
                            >
                              <div
                                className="bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-3 text-xs flex-shrink-0 mt-0.5"
                                data-oid="_rwwx:z"
                              >
                                05
                              </div>
                              <div data-oid="krtpjro">
                                <h3
                                  className="text-primary font-semibold text-sm"
                                  data-oid="e76rk1a"
                                >
                                  How to prepare and dress your house for the
                                  sale
                                </h3>
                              </div>
                            </div>

                            <div
                              className="flex items-start"
                              data-oid="_:pmh_q"
                            >
                              <div
                                className="bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-3 text-xs flex-shrink-0 mt-0.5"
                                data-oid="f_dih6j"
                              >
                                06
                              </div>
                              <div data-oid="er4p03c">
                                <h3
                                  className="text-primary font-semibold text-sm"
                                  data-oid="kjq.j6e"
                                >
                                  How to leverage on and harness the power of
                                  social media
                                </h3>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-3" data-oid="ua:a-dz">
                            <div
                              className="flex items-start"
                              data-oid="5bw9606"
                            >
                              <div
                                className="bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-3 text-xs flex-shrink-0 mt-0.5"
                                data-oid="gs5sp4a"
                              >
                                07
                              </div>
                              <div data-oid="-o88lto">
                                <h3
                                  className="text-primary font-semibold text-sm"
                                  data-oid="5pxepq0"
                                >
                                  The four pillars of social media content
                                  creation
                                </h3>
                              </div>
                            </div>

                            <div
                              className="flex items-start"
                              data-oid="mtjby3p"
                            >
                              <div
                                className="bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-3 text-xs flex-shrink-0 mt-0.5"
                                data-oid="g6zl78d"
                              >
                                08
                              </div>
                              <div data-oid="rfokp68">
                                <h3
                                  className="text-primary font-semibold text-sm"
                                  data-oid="qyp53sa"
                                >
                                  How to create a comprehensive Home Tour
                                </h3>
                              </div>
                            </div>

                            <div
                              className="flex items-start"
                              data-oid="e4g8tat"
                            >
                              <div
                                className="bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-3 text-xs flex-shrink-0 mt-0.5"
                                data-oid="ujfog_4"
                              >
                                09
                              </div>
                              <div data-oid="fnq06cs">
                                <h3
                                  className="text-primary font-semibold text-sm"
                                  data-oid="eoe9wdp"
                                >
                                  How to advertise and distribute your content
                                  to maximise attention
                                </h3>
                              </div>
                            </div>

                            <div
                              className="flex items-start"
                              data-oid="heiua:1"
                            >
                              <div
                                className="bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-3 text-xs flex-shrink-0 mt-0.5"
                                data-oid="n1tl9qe"
                              >
                                10
                              </div>
                              <div data-oid="vzqe2v0">
                                <h3
                                  className="text-primary font-semibold text-sm"
                                  data-oid="n-smd31"
                                >
                                  Pricing techniques for your home
                                </h3>
                              </div>
                            </div>

                            <div
                              className="flex items-start"
                              data-oid="uheqy:5"
                            >
                              <div
                                className="bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-3 text-xs flex-shrink-0 mt-0.5"
                                data-oid="fxf7907"
                              >
                                11
                              </div>
                              <div data-oid="quvje._">
                                <h3
                                  className="text-primary font-semibold text-sm"
                                  data-oid="h44c-x6"
                                >
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
              data-oid="fhwxxiy"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-800/20 to-blue-900/20"
                data-oid="fmhpvwk"
              ></div>
              <div className="container relative z-10" data-oid="dwa3yie">
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                  data-oid="7h-mzwj"
                >
                  <div className="fade-in" data-oid="wt:f3j.">
                    <h2
                      className="text-2xl md:text-3xl font-bold mb-4"
                      data-oid="p-hvz1q"
                    >
                      Unlock Your Property's Maximum Potential
                    </h2>
                    <p className="mb-6" data-oid="pu18cl:">
                      Delve into a comprehensive guide to optimising property
                      value, blending market insights, data analysis, and buyer
                      psychology.
                    </p>
                    <Link
                      href="/plb-book/preview"
                      className="inline-block"
                      data-oid="8rn7f4i"
                    >
                      <button
                        className="btn bg-transparent border-2 border-white text-white hover:bg-white/10"
                        data-oid="e:p5e_n"
                      >
                        Preview Free Chapter →
                      </button>
                    </Link>
                  </div>
                  <div className="fade-in" data-oid="d9..1eg">
                    <div className="space-y-4" data-oid="ml:.ojm">
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="r_czw:h"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid="up0yy2r"
                        >
                          01
                        </span>
                        <span className="text-lg" data-oid="vwfv:w1">
                          The Most Common Reasons for Selling
                        </span>
                      </div>
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="yz.rl:l"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid="cal014z"
                        >
                          02
                        </span>
                        <span className="text-lg" data-oid="6ox7fm1">
                          12 Steps to Selling Your Home
                        </span>
                      </div>
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="mg77:qe"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid=".6qyult"
                        >
                          03
                        </span>
                        <span className="text-lg" data-oid="9qgvdp7">
                          Product Positioning: Transforming the home
                        </span>
                      </div>
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="lqh9vrb"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid="x9e4q4:"
                        >
                          04
                        </span>
                        <span className="text-lg" data-oid="78y45cu">
                          Marketing in the 21st Century: Real Estate Content
                          Creation
                        </span>
                      </div>
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="wkdspdv"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid="qs6v0wz"
                        >
                          05
                        </span>
                        <span className="text-lg" data-oid="2h2wpu6">
                          Advertising and Distribution of Content: The Often
                          Neglected Part
                        </span>
                      </div>
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="07gxf56"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid="kpy_gdh"
                        >
                          06
                        </span>
                        <span className="text-lg" data-oid="uq4exy:">
                          Viewings: The Art of Showmanship
                        </span>
                      </div>
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="1lh20.0"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid="lrghw7l"
                        >
                          07
                        </span>
                        <span className="text-lg" data-oid="eci_s5t">
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
              data-oid="yyjj-6v"
            >
              <div
                className="absolute top-0 right-0 w-64 h-64 bg-white/30 rounded-full -translate-y-32 translate-x-32"
                data-oid="s.-9i-2"
              ></div>
              <div
                className="absolute bottom-0 left-0 w-48 h-48 bg-white/20 rounded-full translate-y-24 -translate-x-24"
                data-oid="x7gs3r4"
              ></div>
              <div className="container relative z-10" data-oid="_yvwysd">
                <div className="text-center mb-16 fade-in" data-oid="g3udp7r">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-3 text-primary"
                    data-oid="21fqber"
                  >
                    About the Authors
                  </h2>
                  <p
                    className="text-lg text-gray-700 max-w-2xl mx-auto"
                    data-oid="g-fc1b_"
                  >
                    Meet the PropertyLimBrothers team - Singapore's leading
                    property experts with over 17 years of combined experience
                  </p>
                </div>

                {/* Melvin Lim - Image Left, Bio Right */}
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 fade-in"
                  data-oid="d35sl_p"
                >
                  <div className="order-1 md:order-1" data-oid="y8w-o40">
                    <div className="relative" data-oid="1p-hsre">
                      <div
                        className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
                        data-oid="iabjlav"
                      >
                        <img
                          src="/images/Melvin_01.png"
                          alt="Melvin Lim"
                          className="w-full h-full object-cover"
                          data-oid="bbb00a2"
                        />
                      </div>
                      <div
                        className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10"
                        data-oid="wupqgrw"
                      ></div>
                    </div>
                  </div>
                  <div className="order-2 md:order-2" data-oid="n15n41c">
                    <div
                      className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                      data-oid="0zd12mw"
                    >
                      <h3
                        className="text-2xl font-bold text-primary mb-2"
                        data-oid="b2xi-r_"
                      >
                        Melvin Lim
                      </h3>
                      <p
                        className="text-primary-dark font-semibold mb-4"
                        data-oid="hcc3j.q"
                      >
                        Co-Founder and CEO
                      </p>
                      <div
                        className="text-gray-700 leading-relaxed space-y-4"
                        data-oid="u.6a2ke"
                      >
                        <p data-oid=".:n-yfs">
                          Co-Founder and CEO of PropertyLimBrothers (PLB),
                          brings 17 years of real estate expertise to the
                          forefront of Singapore's property market. Under his
                          thoughtful leadership, PLB has successfully sold over
                          1,800 homes, setting a new benchmark for real estate
                          in Singapore.
                        </p>
                        <p data-oid="x6k3xbe">
                          In 2017, Melvin introduced presenter-led home tour
                          videos to Singapore—a groundbreaking move that
                          redefined property marketing by showcasing each home's
                          unique story. With over 3,300 videos now under his
                          belt across YouTube and other platforms, his
                          innovative strategies have become a standard others
                          aspire to achieve.
                        </p>
                        <p data-oid="l9t46xz">
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
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 fade-in"
                  data-oid="wh-11mt"
                >
                  <div className="order-2 md:order-1" data-oid="25.vzeq">
                    <div
                      className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                      data-oid=":qow.7f"
                    >
                      <h3
                        className="text-2xl font-bold text-primary mb-2"
                        data-oid="zgkbczy"
                      >
                        Adrian Lim
                      </h3>
                      <p
                        className="text-primary-dark font-semibold mb-4"
                        data-oid="zvz460i"
                      >
                        Co-Founder and Managing Director
                      </p>
                      <div
                        className="text-gray-700 leading-relaxed space-y-4"
                        data-oid="4_qmsz6"
                      >
                        <p data-oid="7--fui:">
                          Co-Founder and Managing Director of
                          PropertyLimBrothers, has 17 years of real estate
                          experience in the industry and has transacted over
                          1,800 with the PLB team till date. Adrian's expert
                          communication skills and experience in selling homes
                          has solved many complex situations for our clients
                          over the past years.
                        </p>
                        <p data-oid="kjht9y-">
                          He constantly spearheads the Realty Team in PLB. His
                          passion is driven by a relentless pursuit of what lies
                          ahead. This dedication to serve effortlessly connects
                          realtors and clients, inspiring others to thrive under
                          his leadership.
                        </p>
                        <p data-oid="g.8g7n.">
                          A family man who enjoys the company of his wife, four
                          children and their dogs Coffee and Mocha, Adrian is
                          known for his passion, dedication and achievements in
                          real estate.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2" data-oid="cxj8z64">
                    <div className="relative" data-oid="9c9w53-">
                      <div
                        className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300"
                        data-oid="jgudpc9"
                      >
                        <img
                          src="/images/Adrian_01-600x600.png"
                          alt="Adrian Lim"
                          className="w-full h-full object-cover"
                          data-oid="xdbgriv"
                        />
                      </div>
                      <div
                        className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-dark/10 rounded-full -z-10"
                        data-oid="4jql8tk"
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Grayce Tan - Image Left, Bio Right */}
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 fade-in"
                  data-oid="js.:1sx"
                >
                  <div className="order-1 md:order-1" data-oid="sb11oo5">
                    <div className="relative" data-oid="4jwdbdj">
                      <div
                        className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300"
                        data-oid="pv4qerd"
                      >
                        <img
                          src="/images/Grayce_02-600x600.png"
                          alt="Grayce Tan"
                          className="w-full h-full object-cover"
                          data-oid="uf:jwg9"
                        />
                      </div>
                      <div
                        className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-full -z-10"
                        data-oid="yudm.85"
                      ></div>
                    </div>
                  </div>
                  <div className="order-2 md:order-2" data-oid="73w-nlc">
                    <div
                      className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                      data-oid=".gjpmf."
                    >
                      <h3
                        className="text-2xl font-bold text-primary mb-2"
                        data-oid="qw75q7d"
                      >
                        Grayce Tan
                      </h3>
                      <p
                        className="text-primary-dark font-semibold mb-4"
                        data-oid="usuuhvd"
                      >
                        Senior Marketing and Business Development Manager
                      </p>
                      <div
                        className="text-gray-700 leading-relaxed space-y-4"
                        data-oid="47:b2ns"
                      >
                        <p data-oid="fyxc.my">
                          Senior Marketing and Business Development Manager at
                          PropertyLimBrothers, with a rich background in Real
                          Estate, Sociology, and Educational Pedagogy. Leading
                          the Business Development, Brand Marketing, and
                          Editorial teams at PropertyLimBrothers, she excels in
                          boosting brand visibility and customer engagement
                          through innovative strategies and key partnerships.
                        </p>
                        <p data-oid="i7.d02:">
                          A passionate lifelong learner, Grayce's deep curiosity
                          for people and market dynamics drives her approach to
                          real estate. She spearheads strategic content
                          initiatives, manages real-time market analysis, and
                          ensures her teams stay at the forefront of industry
                          trends.
                        </p>
                        <p data-oid="uv82zbf">
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
              data-oid="pjx2sio"
            >
              <div className="container relative z-10" data-oid="1-vm7qe">
                <div
                  className="max-w-4xl mx-auto text-center fade-in"
                  data-oid=":flmldg"
                >
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6"
                    data-oid="aa_xtvr"
                  >
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="xiwixkb"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        data-oid="gl12-ka"
                      />
                    </svg>
                  </div>
                  <h2
                    className="text-4xl md:text-5xl font-bold text-primary mb-4"
                    data-oid="1-ahjp-"
                  >
                    Frequently Asked Questions
                  </h2>
                  <p
                    className="text-xl text-gray-600 max-w-2xl mx-auto"
                    data-oid="vk2z5h5"
                  >
                    Everything you need to know about the Property Leverage
                    Blueprint
                  </p>
                </div>

                {/* FAQ Grid Layout */}
                <div className="max-w-6xl mx-auto mt-12" data-oid="ij.37w8">
                  <div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start"
                    data-oid="tc01d53"
                  >
                    {faqItems.map((item, index) => (
                      <div
                        key={index}
                        className="fade-in h-full"
                        style={{ animationDelay: `${index * 0.1}s` }}
                        data-oid="l47sxwn"
                      >
                        <FAQItem
                          question={item.question}
                          answer={item.answer}
                          isOpen={activeIndex === index}
                          onClick={() => toggleFAQ(index)}
                          data-oid="l:z0967"
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
              data-oid="jw1-dz_"
            >
              <div className="container relative z-10" data-oid="s:7j2lr">
                {/* Contact support section */}
                <div className="text-center fade-in" data-oid="50n3.20">
                  <div
                    className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-gray-100"
                    data-oid="srgatcc"
                  >
                    <div
                      className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4"
                      data-oid="r_uiog5"
                    >
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="gpa_xly"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          data-oid="7xp7i91"
                        />
                      </svg>
                    </div>
                    <h3
                      className="text-2xl font-bold text-primary mb-3"
                      data-oid="y6aqdb8"
                    >
                      Still have questions?
                    </h3>
                    <p className="text-gray-600 mb-6" data-oid="9sdr3x0">
                      Can't find the answer you're looking for? Our friendly
                      team is here to help.
                    </p>
                    <a
                      href="mailto:hello@assembly.sg"
                      className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200 font-medium"
                      data-oid="fbbfeat"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid=".z3c1sc"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          data-oid="ld8qj2h"
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
