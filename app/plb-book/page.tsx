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
      <main className="min-h-screen bg-white" data-oid="vfx.7wl">
        {/* Page Content */}
        <div className="pt-24 pb-16" data-oid="ky4isrw">
          <Navbar data-oid="k7fpyc6" />
          <div className="plb-book-page relative" data-oid="m59cbt8">
            <NetworkBackground
              scrollY={scrollY}
              scrollSpeed={scrollSpeed}
              windowHeight={windowHeight}
              data-oid="oswfshl"
            />
            {/* Semi-transparent overlay to improve text readability across the entire page */}
            <div
              className="absolute inset-0 bg-white opacity-30 z-0"
              data-oid="-bb1hdg"
            ></div>

            {/* Hero Section */}
            <section
              className="section"
              style={{ paddingTop: "120px" }}
              data-oid="h-5h32o"
            >
              <div className="container relative z-10" data-oid="ima132s">
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                  data-oid="7f07fx3"
                >
                  <div className="fade-in" data-oid="yo2ud-h">
                    <h1 className="text-primary mb-4" data-oid="twv-50s">
                      Property Leverage Blueprint
                    </h1>
                    <p className="text-xl mb-6" data-oid="ck-bi:2">
                      Your comprehensive guide to mastering property investment
                      in Singapore's dynamic market
                    </p>
                    <div className="mb-6" data-oid="t_6okw9">
                      <div
                        className="flex items-center mb-2"
                        data-oid="u8r3wi_"
                      >
                        <span
                          className="text-gray-500 line-through mr-2"
                          data-oid="um7jo_q"
                        >
                          $39
                        </span>
                        <span
                          className="text-2xl font-bold text-primary"
                          data-oid="vf_.4n2"
                        >
                          $29
                        </span>
                      </div>
                      <p
                        className="text-sm text-gray-500 mt-2"
                        data-oid="6p4c2:4"
                      >
                        Free shipping for all physical copies within Singapore
                      </p>
                    </div>
                    <div className="mt-8 flex space-x-4" data-oid="y8ld6q6">
                      <Button
                        size="lg"
                        className="bg-primary text-white"
                        data-oid="ssw5l7j"
                      >
                        Get the E-book
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        onClick={handleAddToCart}
                        data-oid="jzi9jc2"
                      >
                        Get the Paperback
                      </Button>
                    </div>
                  </div>
                  <div
                    className="fade-in flex justify-center"
                    data-oid="uf3wc00"
                  >
                    <div
                      className="relative w-64 h-80 bg-primary rounded-lg shadow-xl transform rotate-3 animate-float"
                      data-oid="ix45pc3"
                    >
                      <div
                        className="absolute inset-0 bg-white m-1 rounded-lg flex items-center justify-center"
                        data-oid="k_py2md"
                      >
                        <div className="text-center p-4" data-oid="bvg9tj4">
                          <h3 className="text-primary" data-oid="l77-7nw">
                            Property Leverage Blueprint
                          </h3>
                          <p className="text-sm" data-oid="c:bmxk7">
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
              data-oid="w:1rww8"
            >
              <div
                className="absolute top-0 left-0 w-full h-full opacity-5"
                data-oid="._n6tob"
              >
                <div
                  className="absolute top-10 right-10 w-40 h-40 rounded-full bg-primary"
                  data-oid="lpd_so0"
                ></div>
                <div
                  className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-primary-dark"
                  data-oid="de3:may"
                ></div>
              </div>
              <div className="container relative z-10" data-oid="4bm661q">
                <div className="text-center mb-12" data-oid="k80zyvt">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-3 text-primary fade-in"
                    data-oid="4iv38bp"
                  >
                    In a crowded real estate marketplace,{" "}
                    <span className="text-primary-dark" data-oid="laqe6c3">
                      Positioning is Everything
                    </span>
                    .
                  </h2>
                  <div
                    className="flex flex-wrap justify-center gap-3 mt-4 mb-8"
                    data-oid="93t37ck"
                  >
                    <span
                      className="bg-primary text-white px-5 py-2 rounded-full text-sm font-bold shadow-md"
                      data-oid="3o7nr:p"
                    >
                      Real Estate
                    </span>
                    <span
                      className="bg-primary-dark text-[#123b79] px-5 py-2 rounded-full text-sm font-bold shadow-md"
                      data-oid="4l1:ntr"
                    >
                      Selling
                    </span>
                    <span
                      className="bg-[#123b79] text-white px-5 py-2 rounded-full text-sm font-bold shadow-md"
                      data-oid="5i1ve5x"
                    >
                      Property Investing Mindset
                    </span>
                  </div>
                </div>

                <div
                  className="bg-white rounded-xl shadow-xl p-6 md:p-8 max-w-4xl mx-auto"
                  data-oid="x2phip6"
                >
                  <p className="mb-6 text-lg" data-oid="79shgr4">
                    The moment you list your property in the resale market, it
                    becomes a unique product that needs to attract that one
                    right buyer to make the offer you desire. How do you stand
                    out and find the right buyer that truly appreciates and sees
                    the value of your property? How do you maximise the
                    potential sale price of your home?
                  </p>

                  <div
                    className="bg-primary text-white p-5 mb-6 rounded-lg shadow-inner"
                    data-oid="oumhant"
                  >
                    <p className="font-medium text-lg" data-oid="2atl3c6">
                      It's about attracting genuine buyers by positioning your
                      property with content and maximum exposure.
                    </p>
                  </div>

                  <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-6"
                    data-oid="hk42of2"
                  >
                    <div className="md:col-span-2" data-oid="qplp--l">
                      <p className="mb-4" data-oid="a15tvmy">
                        For the first time ever,{" "}
                        <strong data-oid="kdeh24b">Melvin Lim</strong> and{" "}
                        <strong data-oid="2l_4noc">Adrian Lim</strong>—more
                        popularly known as PropertyLimBrothers, Singapore's most
                        successful real estate duo that revolutionalise how
                        properties are being marketed with video home tours in
                        Singapore—have assembled an unrivaled playbook on
                        property marketing, designed to take your home from{" "}
                        <strong data-oid="bvhi0bz">"listed"</strong> to{" "}
                        <strong data-oid="d_1wuoq">"sold"</strong>.
                      </p>

                      <p data-oid="bzb:u42">
                        More than just a guide, this is a blueprint for
                        uncovering the unique potential of every real estate you
                        touch and finding the perfect buyer for every home.
                        Backed by wisdom and 17 years of industry experience,
                        this book is your key to mastering the Art of Selling
                        Your Property to its Maximum Potential.
                      </p>
                    </div>
                    <div className="hidden md:block" data-oid="tcqkk7t">
                      <div
                        className="w-full aspect-square bg-gradient-to-br from-primary/10 to-primary-dark/20 rounded-full flex items-center justify-center"
                        data-oid="weq5qrx"
                      >
                        <div
                          className="w-3/4 h-3/4 bg-gradient-to-tr from-primary to-primary-dark rounded-full flex items-center justify-center text-white text-5xl font-bold"
                          data-oid="3u686st"
                        >
                          17+
                          <span className="text-sm ml-1" data-oid="3zea8ra">
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
              data-oid="3s0.8nz"
            >
              <div className="container-fluid px-0" data-oid="a5x_g7.">
                <div className="text-center mb-8 px-4" data-oid=".hh.-:h">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-3 text-primary fade-in"
                    data-oid="7c0_dq5"
                  >
                    Key Insights from the Book
                  </h2>
                  <p
                    className="text-lg text-gray-700 max-w-2xl mx-auto"
                    data-oid="a43.bwy"
                  >
                    Discover powerful strategies and insights that will
                    transform your approach to property selling
                  </p>
                </div>

                <AutoScrollCarousel
                  images={quoteImages}
                  visibleCount={4}
                  autoScrollInterval={4000}
                  data-oid="q9z-7j5"
                />
              </div>
            </section>

            {/* Book Content Section - Redesigned for Full Width */}
            <section
              className="section relative overflow-hidden bg-secondary py-16"
              data-oid="40bek7g"
            >
              <div
                className="container-fluid px-4 md:px-8 lg:px-12 relative z-10 max-w-[1600px] mx-auto"
                data-oid="hoajxwb"
              >
                <div className="text-center mb-12" data-oid="rsbtwhg">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-3 text-primary fade-in"
                    data-oid="txwyd8d"
                  >
                    Discover the Art of{" "}
                    <span className="text-primary-dark" data-oid="86_3qr_">
                      Home Selling
                    </span>
                  </h2>
                  <p
                    className="text-lg mb-8 max-w-2xl mx-auto"
                    data-oid="_osiuca"
                  >
                    A comprehensive playbook that transforms ordinary sellers
                    into market masters
                  </p>
                </div>

                <div
                  className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center"
                  data-oid="v:ibt74"
                >
                  {/* Book image - now in a 4-column space */}
                  <div
                    className="xl:col-span-4 fade-in order-2 xl:order-1"
                    data-oid="98m8onl"
                  >
                    <div
                      className="relative mx-auto max-w-md"
                      data-oid="lliwdre"
                    >
                      <div
                        className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-primary-dark/30 blur-2xl rounded-full transform -translate-y-4 translate-x-4"
                        data-oid="-6gufi0"
                      ></div>
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-02%20at%209.03.38%E2%80%AFpm-EzqCO8JB6tjTccn8gq9St2vGkBsqG0.png"
                        alt="Property Positioning Book Cover"
                        className="relative z-10 w-full h-auto rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform rotate-3 hover:rotate-0 transition-all duration-500"
                        data-oid="1hyjh8l"
                      />

                      <div
                        className="absolute -bottom-6 -right-6 bg-primary text-white rounded-full w-24 h-24 flex items-center justify-center text-center p-2 shadow-lg transform rotate-12 z-20"
                        data-oid="uk4tmv2"
                      >
                        <div data-oid="um-am.y">
                          <div className="text-xs" data-oid=".9qiln4">
                            Limited
                          </div>
                          <div className="text-lg font-bold" data-oid="7k7pg4a">
                            Edition
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content cards - now in an 8-column space with 3 cards per row */}
                  <div
                    className="xl:col-span-8 fade-in order-1 xl:order-2"
                    data-oid="v19tmlf"
                  >
                    <div
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                      data-oid="9dbd71u"
                    >
                      <div
                        className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                        data-oid="bt-4ir8"
                      >
                        <div
                          className="flex items-center mb-3"
                          data-oid="bk243g3"
                        >
                          <div
                            className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 group-hover:scale-110 transition-transform"
                            data-oid="m6yrns1"
                          >
                            01
                          </div>
                          <h3
                            className="text-primary text-lg font-semibold"
                            data-oid="npctg-z"
                          >
                            Seller Mindset
                          </h3>
                        </div>
                        <p className="text-gray-600 pl-14" data-oid="ywhq3kl">
                          Master the psychology of successful property sellers
                        </p>
                      </div>

                      <div
                        className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                        data-oid="vk1-6-r"
                      >
                        <div
                          className="flex items-center mb-3"
                          data-oid="5dd3vtn"
                        >
                          <div
                            className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 group-hover:scale-110 transition-transform"
                            data-oid="1cnk9dm"
                          >
                            02
                          </div>
                          <h3
                            className="text-primary text-lg font-semibold"
                            data-oid="t305g-x"
                          >
                            Market Patterns
                          </h3>
                        </div>
                        <p className="text-gray-600 pl-14" data-oid="me3__mr">
                          Understand the Singapore Buy and Sell Pattern
                        </p>
                      </div>

                      <div
                        className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                        data-oid="wq5xc5q"
                      >
                        <div
                          className="flex items-center mb-3"
                          data-oid="zjxj8m3"
                        >
                          <div
                            className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 group-hover:scale-110 transition-transform"
                            data-oid="0o8:q7j"
                          >
                            03
                          </div>
                          <h3
                            className="text-primary text-lg font-semibold"
                            data-oid="y45kn.b"
                          >
                            Buyer Connection
                          </h3>
                        </div>
                        <p className="text-gray-600 pl-14" data-oid="gkgsf57">
                          Build empathy with your eventual buyer
                        </p>
                      </div>

                      <div
                        className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                        data-oid="a-3r0qz"
                      >
                        <div
                          className="flex items-center mb-3"
                          data-oid="236uo.d"
                        >
                          <div
                            className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 group-hover:scale-110 transition-transform"
                            data-oid="t0jy9tn"
                          >
                            04
                          </div>
                          <h3
                            className="text-primary text-lg font-semibold"
                            data-oid="4tt5dv4"
                          >
                            Home Preparation
                          </h3>
                        </div>
                        <p className="text-gray-600 pl-14" data-oid="68vn1il">
                          Prepare and dress your house for maximum appeal
                        </p>
                      </div>

                      <div
                        className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                        data-oid="wj_y_y6"
                      >
                        <div
                          className="flex items-center mb-3"
                          data-oid="zy5yuek"
                        >
                          <div
                            className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 group-hover:scale-110 transition-transform"
                            data-oid="6r7w-qc"
                          >
                            05
                          </div>
                          <h3
                            className="text-primary text-lg font-semibold"
                            data-oid="5ual119"
                          >
                            Social Media
                          </h3>
                        </div>
                        <p className="text-gray-600 pl-14" data-oid="9n9:d8n">
                          Leverage the power of digital marketing
                        </p>
                      </div>

                      <div
                        className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                        data-oid="pas_xwf"
                      >
                        <div
                          className="flex items-center mb-3"
                          data-oid="u26qwws"
                        >
                          <div
                            className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 group-hover:scale-110 transition-transform"
                            data-oid="0robyh2"
                          >
                            06
                          </div>
                          <h3
                            className="text-primary text-lg font-semibold"
                            data-oid="_:4aeu1"
                          >
                            Pricing Strategy
                          </h3>
                        </div>
                        <p className="text-gray-600 pl-14" data-oid="y8uoqvg">
                          Set the right price with financial calculations
                        </p>
                      </div>
                    </div>

                    <div
                      className="mt-8 text-center lg:text-left"
                      data-oid="utp.a6z"
                    >
                      <Link
                        href="/plb-book/preview"
                        className="inline-block"
                        data-oid="_l9:y4i"
                      >
                        <button className="btn btn-primary" data-oid="5v14muu">
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
              data-oid="huz2icm"
            >
              <div className="container relative z-10" data-oid="nay5btf">
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                  data-oid=":4_d:qo"
                >
                  <div className="fade-in" data-oid="fm0j4-_">
                    <h2
                      className="text-2xl md:text-3xl font-bold mb-4"
                      data-oid="0g.vvnk"
                    >
                      Unlock Your Property's Maximum Potential
                    </h2>
                    <p className="mb-6" data-oid="der9c-g">
                      Delve into a comprehensive guide to optimising property
                      value, blending market insights, data analysis, and buyer
                      psychology.
                    </p>
                    <Link
                      href="/plb-book/preview"
                      className="inline-block"
                      data-oid="y_nz5o3"
                    >
                      <button
                        className="btn bg-transparent border-2 border-white text-white hover:bg-white/10"
                        data-oid="f67o:58"
                      >
                        Preview Free Chapter →
                      </button>
                    </Link>
                  </div>
                  <div className="fade-in" data-oid="wo33o0r">
                    <div className="space-y-4" data-oid="__ulf1:">
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="71u6ruc"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid=":12k3au"
                        >
                          01
                        </span>
                        <span className="text-lg" data-oid="mtifsus">
                          The Most Common Reasons for Selling
                        </span>
                      </div>
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="i2_h2jk"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid="wyhod05"
                        >
                          02
                        </span>
                        <span className="text-lg" data-oid="tsnpjup">
                          12 Steps to Selling Your Home
                        </span>
                      </div>
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="zvsr4kz"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid="dyo.wso"
                        >
                          03
                        </span>
                        <span className="text-lg" data-oid="axq2o4h">
                          Product Positioning: Transforming the home
                        </span>
                      </div>
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="gx-4te2"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid="1yda6y8"
                        >
                          04
                        </span>
                        <span className="text-lg" data-oid="g420:l2">
                          Marketing in the 21st Century: Real Estate Content
                          Creation
                        </span>
                      </div>
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="vn2:wc9"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid="tclv4p8"
                        >
                          05
                        </span>
                        <span className="text-lg" data-oid="s4ijjd.">
                          Advertising and Distribution of Content: The Often
                          Neglected Part
                        </span>
                      </div>
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="p1a_j8o"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid="2r6s4-:"
                        >
                          06
                        </span>
                        <span className="text-lg" data-oid="tjl4lf_">
                          Viewings: The Art of Showmanship
                        </span>
                      </div>
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="carxnpf"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid="hoj49:9"
                        >
                          07
                        </span>
                        <span className="text-lg" data-oid="ar__ulo">
                          Sealing the Deal: How to Price Your Property Correctly
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Author Section */}
            <section className="section" data-oid="5e7fyar">
              <div className="container relative z-10" data-oid="mk69zsz">
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                  data-oid="4mi_yvf"
                >
                  <div className="fade-in" data-oid="9k5ore5">
                    <div
                      className="w-64 h-64 rounded-full bg-gray-300 mx-auto md:mx-0"
                      data-oid="768x70a"
                    ></div>
                  </div>
                  <div className="fade-in" data-oid="toil.nx">
                    <h2 className="text-primary" data-oid="e_6:83m">
                      About the Author
                    </h2>
                    <p className="feature-text text-xl mb-4" data-oid="r3fd-be">
                      With over 15 years of experience in Singapore's property
                      market
                    </p>
                    <p data-oid="2:..h5z">
                      The author brings unparalleled insights into the local
                      property landscape, having helped hundreds of clients
                      build wealth through strategic property investments.
                    </p>
                    <p data-oid="8flixdr">
                      As the founder of Assembly SG, they have developed a
                      proven system for property investment success that works
                      in any market condition.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="section bg-highlight" data-oid="bc.s69h">
              <div className="container relative z-10" data-oid="yq_ti8x">
                <h2
                  className="text-center text-primary mb-12 fade-in"
                  data-oid="4t8.qfj"
                >
                  Frequently Asked Questions
                </h2>
                <div className="max-w-3xl mx-auto space-y-2" data-oid="eoppvt7">
                  {faqItems.map((item, index) => (
                    <FAQItem
                      key={index}
                      question={item.question}
                      answer={item.answer}
                      isOpen={activeIndex === index}
                      onClick={() => toggleFAQ(index)}
                      className="py-2"
                      data-oid="zdew4lm"
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
