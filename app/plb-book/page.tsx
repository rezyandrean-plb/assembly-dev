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
      <main className="min-h-screen bg-white" data-oid="c3_5yxt">
        {/* Page Content */}
        <div className="pt-24 pb-16" data-oid="218jqya">
          <Navbar data-oid="hn3broi" />
          <div className="plb-book-page relative" data-oid="3j3hhgp">
            {/* Light gradient background instead of network */}
            <div
              className="absolute inset-0 z-0"
              style={{ backgroundColor: "#ffffff" }}
              data-oid="di_k3ac"
            ></div>

            {/* Hero Section */}
            <section
              className="section"
              style={{ paddingTop: "120px" }}
              data-oid="vn6md5u"
            >
              <div className="container relative z-10" data-oid="bdvx.q.">
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                  data-oid="ywhmdcx"
                >
                  <div className="fade-in" data-oid="0_94i7m">
                    <h1
                      className="text-primary mb-4 text-3xl"
                      data-oid="u0.mmge"
                    >
                      Positioning: PropertyLimBrothers on the Art of Selling
                      Your Property to its Maximum Potential
                    </h1>
                    <p className="text-md mb-6" data-oid="b4r9bz7">
                      When you truly understand how to sell and see through the
                      lens of a buyer, you gain charity on what, where and which
                      property to buy and invest in next.
                    </p>
                    <div className="mb-6" data-oid="von4_.0">
                      <div
                        className="flex items-center mb-2"
                        data-oid="b:rjxz3"
                      >
                        <span
                          className="text-gray-500 line-through mr-2"
                          data-oid="n8zyuyk"
                        >
                          $39.00
                        </span>
                        <span
                          className="text-2xl font-bold text-primary"
                          data-oid=".28-ec3"
                        >
                          $29.00
                        </span>
                      </div>
                    </div>
                    <div className="mt-8 flex space-x-4" data-oid="zrn.bvx">
                      <Button
                        size="lg"
                        className="bg-primary text-white"
                        data-oid=".o_vdp-"
                      >
                        Get the E-book
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        onClick={handleAddToCart}
                        data-oid="aal3j1c"
                      >
                        Get the Paperback
                      </Button>
                    </div>
                  </div>
                  <div
                    className="fade-in flex justify-center"
                    data-oid="ls8_1q5"
                  >
                    <div
                      className="relative w-64 h-80 bg-primary rounded-lg shadow-xl transform rotate-3 animate-float"
                      data-oid="vmbpa3h"
                    >
                      <img
                        src="/images/PLB Book Front Cover_FA.jpg"
                        alt="PropertyLimBrothers Book Cover"
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                        data-oid="plb-cover-float"
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
              data-oid="_7xo2mm"
            >
              <div
                className="absolute top-0 left-0 w-full h-full opacity-5"
                data-oid="q44m5w3"
              >
                <div
                  className="absolute top-10 right-10 w-40 h-40 rounded-full bg-primary"
                  data-oid=".w:nm3a"
                ></div>
                <div
                  className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-primary-dark"
                  data-oid="7vze5hq"
                ></div>
              </div>
              <div className="container relative z-10" data-oid="rsfh_ye">
                <div className="text-center mb-12" data-oid="hpem0-m">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-3 text-primary fade-in"
                    data-oid="7qv_zs1"
                  >
                    In a crowded real estate marketplace,{" "}
                    <span className="text-primary-dark" data-oid="z1_4k23">
                      Positioning is Everything
                    </span>
                    .
                  </h2>
                  <div
                    className="flex flex-wrap justify-center gap-3 mt-4 mb-8"
                    data-oid="326faog"
                  >
                    <span
                      className="bg-primary text-white px-5 py-2 rounded-full text-sm font-bold shadow-md"
                      data-oid="v3s1fxf"
                    >
                      Real Estate
                    </span>
                    <span
                      className="bg-primary text-white px-5 py-2 rounded-full text-sm font-bold shadow-md"
                      data-oid="baago68"
                    >
                      Selling
                    </span>
                    <span
                      className="bg-[#123b79] text-white px-5 py-2 rounded-full text-sm font-bold shadow-md"
                      data-oid="2a29.y6"
                    >
                      Property Investing Mindset
                    </span>
                  </div>
                </div>

                <div
                  className="bg-white rounded-xl shadow-xl p-6 md:p-8 max-w-4xl mx-auto"
                  data-oid=":6rv0fb"
                >
                  <p className="mb-6 text-lg" data-oid="-mfq:t4">
                    The moment you list your property in the resale market, it
                    becomes a unique product that needs to attract that one
                    right buyer to make the offer you desire. How do you stand
                    out and find the right buyer that truly appreciates and sees
                    the value of your property? How do you maximise the
                    potential sale price of your home?
                  </p>

                  <div
                    className="bg-primary text-white p-5 mb-6 rounded-lg shadow-inner"
                    data-oid="5nbl8vl"
                  >
                    <p className="font-medium text-lg" data-oid="vlig_4h">
                      It's about attracting genuine buyers by positioning your
                      property with content and maximum exposure.
                    </p>
                  </div>

                  <div className="mb-6" data-oid="pxbvq60">
                    <p className="mb-4" data-oid="ku.ucrt">
                      For the first time ever,{" "}
                      <strong data-oid="34kjf6f">Melvin Lim</strong> and{" "}
                      <strong data-oid="z-ld5vo">Adrian Lim</strong>—more
                      popularly known as PropertyLimBrothers, Singapore's most
                      successful real estate duo that revolutionalise how
                      properties are being marketed with video home tours in
                      Singapore—have assembled an unrivaled playbook on property
                      marketing, designed to take your home from{" "}
                      <strong data-oid="_.qbmx5">"listed"</strong> to{" "}
                      <strong data-oid="4rlfx.q">"sold"</strong>.
                    </p>

                    <p data-oid="3q0t:js">
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
              data-oid="bn1eg.."
            >
              <div className="container-fluid px-0" data-oid="1lcwo9o">
                <div className="text-center mb-8 px-4" data-oid="::-:sbn">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-3 text-primary fade-in"
                    data-oid="d.pkkqt"
                  >
                    Key Insights from the Book
                  </h2>
                  <p
                    className="text-lg text-gray-700 max-w-2xl mx-auto"
                    data-oid="4mqdg6m"
                  >
                    Discover powerful strategies and insights that will
                    transform your approach to property selling
                  </p>
                </div>

                <AutoScrollCarousel
                  images={quoteImages}
                  visibleCount={4}
                  autoScrollInterval={4000}
                  data-oid="ub5ji:l"
                />
              </div>
            </section>

            {/* Book Content Section - Redesigned for Full Width */}
            <section
              className="section relative overflow-hidden py-16"
              style={{ backgroundColor: "#e7ebf1" }}
              data-oid="x1m62.2"
            >
              <div
                className="container-fluid px-4 md:px-8 lg:px-12 relative z-10 max-w-[1600px] mx-auto"
                data-oid="zrdrwts"
              >
                <div className="text-center mb-12" data-oid="mc::tel">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-3 text-primary fade-in"
                    data-oid="rp77-sa"
                  >
                    Discover the Art of{" "}
                    <span className="text-primary-dark" data-oid="er:vu5n">
                      Home Selling
                    </span>
                  </h2>
                  <p
                    className="text-lg mb-8 max-w-3xl mx-auto"
                    data-oid="sq6ssl0"
                  >
                    Embark on a journey through the pages of this book, where we
                    demystify the art of home selling with a comprehensive,
                    step-by-step playbook.
                  </p>
                </div>

                <div className="max-w-6xl mx-auto" data-oid="tciay34">
                  {/* Book image centered */}
                  <div className="text-center mb-12 fade-in" data-oid="5vcfxam">
                    <div
                      className="relative inline-block w-48 h-64"
                      data-oid="w5rajm2"
                    >
                      <img
                        src="/images/PLB Book Front Cover_FA.jpg"
                        alt="PropertyLimBrothers Book Cover"
                        className="w-full h-full object-cover rounded-lg shadow-xl"
                        data-oid="ps06acd"
                      />

                      <div
                        className="absolute -bottom-3 -right-3 bg-white text-primary border-2 border-primary rounded-full w-14 h-14 flex items-center justify-center text-center shadow-lg"
                        data-oid="k8h31eh"
                      >
                        <div data-oid="u_zi2t1">
                          <div className="text-xs font-bold" data-oid="4xtwk3j">
                            Limited
                          </div>
                          <div className="text-xs" data-oid="uhrfego">
                            Edition
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Simple list layout */}
                  <div className="fade-in" data-oid="6uw5118">
                    <div
                      className="bg-white rounded-xl shadow-lg p-8 mb-8"
                      data-oid="n6z.j5s"
                    >
                      <div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        data-oid="2_oiooa"
                      >
                        <div className="space-y-4" data-oid="een4fm-">
                          <div className="flex items-start" data-oid="p7j67td">
                            <div
                              className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 text-sm flex-shrink-0 mt-1"
                              data-oid="llqik3k"
                            >
                              01
                            </div>
                            <div data-oid="l-ws_0v">
                              <h3
                                className="text-primary font-semibold mb-1 text-md"
                                data-oid="1f7e16:"
                              >
                                The mindset of successful property sellers
                              </h3>
                            </div>
                          </div>

                          <div className="flex items-start" data-oid="q7v8wzx">
                            <div
                              className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 text-sm flex-shrink-0 mt-1"
                              data-oid="p6ads2m"
                            >
                              02
                            </div>
                            <div data-oid="j4mjb_h">
                              <h3
                                className="text-primary font-semibold mb-1"
                                data-oid="9d418_o"
                              >
                                The Singapore Buy and Sell Pattern
                              </h3>
                            </div>
                          </div>

                          <div className="flex items-start" data-oid="jiyk6a:">
                            <div
                              className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 text-sm flex-shrink-0 mt-1"
                              data-oid="felhmg2"
                            >
                              03
                            </div>
                            <div data-oid=":.4-n-1">
                              <h3
                                className="text-primary font-semibold mb-1"
                                data-oid="b2k90bg"
                              >
                                How to build empathy and connection with your
                                eventual buyer
                              </h3>
                            </div>
                          </div>

                          <div className="flex items-start" data-oid="le6-3og">
                            <div
                              className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 text-sm flex-shrink-0 mt-1"
                              data-oid="y_lxg78"
                            >
                              04
                            </div>
                            <div data-oid=".-llig9">
                              <h3
                                className="text-primary font-semibold mb-1"
                                data-oid="g:oxq9:"
                              >
                                Step-by-step guide to preparing for a home sale
                              </h3>
                            </div>
                          </div>

                          <div className="flex items-start" data-oid="r164gmu">
                            <div
                              className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 text-sm flex-shrink-0 mt-1"
                              data-oid="z16b7z6"
                            >
                              05
                            </div>
                            <div data-oid=":9ll:z_">
                              <h3
                                className="text-primary font-semibold mb-1"
                                data-oid="9fd4vdi"
                              >
                                How to prepare and dress your house for the sale
                              </h3>
                            </div>
                          </div>

                          <div className="flex items-start" data-oid="za809zd">
                            <div
                              className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 text-sm flex-shrink-0 mt-1"
                              data-oid="6xkho2w"
                            >
                              06
                            </div>
                            <div data-oid="r2q2lbs">
                              <h3
                                className="text-primary font-semibold mb-1"
                                data-oid="l0qjj3z"
                              >
                                How to leverage on and harness the power of
                                social media
                              </h3>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4" data-oid="qbge8l7">
                          <div className="flex items-start" data-oid="zua8br0">
                            <div
                              className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 text-sm flex-shrink-0 mt-1"
                              data-oid="we705qq"
                            >
                              07
                            </div>
                            <div data-oid="46iiwr6">
                              <h3
                                className="text-primary font-semibold mb-1"
                                data-oid="q8mjerm"
                              >
                                The four pillars of social media content
                                creation
                              </h3>
                            </div>
                          </div>

                          <div className="flex items-start" data-oid="0g488p5">
                            <div
                              className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 text-sm flex-shrink-0 mt-1"
                              data-oid="7477n6l"
                            >
                              08
                            </div>
                            <div data-oid="v-:4hv0">
                              <h3
                                className="text-primary font-semibold mb-1"
                                data-oid="7_ht_:i"
                              >
                                How to create a comprehensive Home Tour
                              </h3>
                            </div>
                          </div>

                          <div className="flex items-start" data-oid="dxv23zd">
                            <div
                              className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 text-sm flex-shrink-0 mt-1"
                              data-oid="ztas6bi"
                            >
                              09
                            </div>
                            <div data-oid="2e4gs:s">
                              <h3
                                className="text-primary font-semibold mb-1"
                                data-oid="dfajck0"
                              >
                                How to advertise and distribute your content to
                                maximise attention
                              </h3>
                            </div>
                          </div>

                          <div className="flex items-start" data-oid="ytah-ij">
                            <div
                              className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 text-sm flex-shrink-0 mt-1"
                              data-oid="r4prn9i"
                            >
                              10
                            </div>
                            <div data-oid="rd8pxoa">
                              <h3
                                className="text-primary font-semibold mb-1"
                                data-oid=".nuy.l_"
                              >
                                Pricing techniques for your home
                              </h3>
                            </div>
                          </div>

                          <div className="flex items-start" data-oid="47u93bf">
                            <div
                              className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 text-sm flex-shrink-0 mt-1"
                              data-oid=".l_aaoo"
                            >
                              11
                            </div>
                            <div data-oid="jbzvkki">
                              <h3
                                className="text-primary font-semibold mb-1"
                                data-oid="mvzwmqf"
                              >
                                Graphic guides to timeline and financial
                                calculations
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center" data-oid="ed8wkul">
                      <Link
                        href="/plb-book/preview"
                        className="inline-block"
                        data-oid="u0ja7-c"
                      >
                        <button className="btn btn-primary" data-oid="orda2cg">
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
              className="section relative overflow-hidden text-white"
              style={{ backgroundColor: "#123b79" }}
              data-oid="j56s:ce"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-800/20 to-blue-900/20"
                data-oid="8fj-qoi"
              ></div>
              <div className="container relative z-10" data-oid="j4n7mo0">
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                  data-oid="wznvg.c"
                >
                  <div className="fade-in" data-oid="w79zcki">
                    <h2
                      className="text-2xl md:text-3xl font-bold mb-4"
                      data-oid="437oek0"
                    >
                      Unlock Your Property's Maximum Potential
                    </h2>
                    <p className="mb-6" data-oid="8l.7-d3">
                      Delve into a comprehensive guide to optimising property
                      value, blending market insights, data analysis, and buyer
                      psychology.
                    </p>
                    <Link
                      href="/plb-book/preview"
                      className="inline-block"
                      data-oid="clmndmn"
                    >
                      <button
                        className="btn bg-transparent border-2 border-white text-white hover:bg-white/10"
                        data-oid=":5uh54l"
                      >
                        Preview Free Chapter →
                      </button>
                    </Link>
                  </div>
                  <div className="fade-in" data-oid="nqtqjsn">
                    <div className="space-y-4" data-oid="oj83rkf">
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid=".5il:_b"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid="agtx_qh"
                        >
                          01
                        </span>
                        <span className="text-lg" data-oid="4.xfxxt">
                          The Most Common Reasons for Selling
                        </span>
                      </div>
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="_l-t_d5"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid="brga5oz"
                        >
                          02
                        </span>
                        <span className="text-lg" data-oid="u2s7e:0">
                          12 Steps to Selling Your Home
                        </span>
                      </div>
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="3_ge_b9"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid="yaotjjy"
                        >
                          03
                        </span>
                        <span className="text-lg" data-oid="cmtguu.">
                          Product Positioning: Transforming the home
                        </span>
                      </div>
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="ha.3nrv"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid="a60f78t"
                        >
                          04
                        </span>
                        <span className="text-lg" data-oid="r-xm-16">
                          Marketing in the 21st Century: Real Estate Content
                          Creation
                        </span>
                      </div>
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="ys1p8.b"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid="tra-i_s"
                        >
                          05
                        </span>
                        <span className="text-lg" data-oid="o:i.g.a">
                          Advertising and Distribution of Content: The Often
                          Neglected Part
                        </span>
                      </div>
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="100:yxg"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid="gsxz7h2"
                        >
                          06
                        </span>
                        <span className="text-lg" data-oid="ns62kic">
                          Viewings: The Art of Showmanship
                        </span>
                      </div>
                      <div
                        className="flex items-center border-b border-white/20 pb-3"
                        data-oid="w_j-pst"
                      >
                        <span
                          className="text-sm mr-4 opacity-70"
                          data-oid="7zl0oc0"
                        >
                          07
                        </span>
                        <span className="text-lg" data-oid="uf70byw">
                          Sealing the Deal: How to Price Your Property Correctly
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Author Section */}
            <section
              className="section relative overflow-hidden"
              style={{ backgroundColor: "#ffffff" }}
              data-oid="-44txfx"
            >
              <div
                className="absolute top-0 right-0 w-64 h-64 bg-white/30 rounded-full -translate-y-32 translate-x-32"
                data-oid="oiplo4b"
              ></div>
              <div
                className="absolute bottom-0 left-0 w-48 h-48 bg-white/20 rounded-full translate-y-24 -translate-x-24"
                data-oid="cx74vkc"
              ></div>
              <div className="container relative z-10" data-oid="0novn2b">
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                  data-oid="v3od2w6"
                >
                  <div className="fade-in" data-oid="cgibbar">
                    <div
                      className="w-64 h-64 rounded-full bg-gray-300 mx-auto md:mx-0"
                      data-oid="qmt2uoh"
                    ></div>
                  </div>
                  <div className="fade-in" data-oid="iga12aa">
                    <h2 className="text-primary" data-oid="_v7-x6j">
                      About the Author
                    </h2>
                    <p className="feature-text text-xl mb-4" data-oid="pb2u-21">
                      With over 15 years of experience in Singapore's property
                      market
                    </p>
                    <p data-oid="h-4ol.z">
                      The author brings unparalleled insights into the local
                      property landscape, having helped hundreds of clients
                      build wealth through strategic property investments.
                    </p>
                    <p data-oid="uw31jf6">
                      As the founder of Assembly SG, they have developed a
                      proven system for property investment success that works
                      in any market condition.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Guarantee Section - New */}
            <section
              className="section relative overflow-hidden"
              style={{ backgroundColor: "#e1e7ee" }}
              data-oid="guarantee-section"
            >
              <div
                className="container relative z-10"
                data-oid="guarantee-container"
              >
                <div
                  className="max-w-4xl mx-auto text-center fade-in"
                  data-oid="80befgc"
                >
                  <div
                    className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6"
                    data-oid="i4q7hga"
                  >
                    <svg
                      className="w-10 h-10 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="97:5_q6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        data-oid="dlknzmb"
                      />
                    </svg>
                  </div>
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-6 text-primary"
                    data-oid="my9ybqc"
                  >
                    Our Promise to You
                  </h2>
                  <p
                    className="text-xl mb-8 text-gray-700 leading-relaxed"
                    data-oid="xn:3lo4"
                  >
                    We're so confident in the value of the Property Leverage
                    Blueprint that we stand behind every strategy and insight
                    shared. This isn't just theory—it's proven methodology from
                    17+ years of real-world success.
                  </p>
                  <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
                    data-oid="r29dzqd"
                  >
                    <div
                      className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm"
                      data-oid="ddhpq:m"
                    >
                      <div
                        className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                        data-oid="w-15clz"
                      >
                        <svg
                          className="w-6 h-6 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          data-oid="n_y-0kq"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                            data-oid="0jgi2no"
                          />
                        </svg>
                      </div>
                      <h3
                        className="text-lg font-semibold mb-2 text-gray-900"
                        data-oid="blhgsts"
                      >
                        Proven Strategies
                      </h3>
                      <p className="text-gray-600 text-sm" data-oid="bmp0bi0">
                        Battle-tested methods used by Singapore's top property
                        professionals
                      </p>
                    </div>
                    <div
                      className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm"
                      data-oid="i4jm_a1"
                    >
                      <div
                        className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                        data-oid="id895g:"
                      >
                        <svg
                          className="w-6 h-6 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          data-oid="5h7meas"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            data-oid="skh_yx4"
                          />
                        </svg>
                      </div>
                      <h3
                        className="text-lg font-semibold mb-2 text-gray-900"
                        data-oid="sa_cx3e"
                      >
                        Expert Knowledge
                      </h3>
                      <p className="text-gray-600 text-sm" data-oid="zf:n4nu">
                        Insights from PropertyLimBrothers' extensive market
                        experience
                      </p>
                    </div>
                    <div
                      className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm"
                      data-oid="buixmum"
                    >
                      <div
                        className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                        data-oid="p4abhmd"
                      >
                        <svg
                          className="w-6 h-6 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          data-oid="p1gzats"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 11-9.75 9.75A9.75 9.75 0 0112 2.25z"
                            data-oid="5hhdft1"
                          />
                        </svg>
                      </div>
                      <h3
                        className="text-lg font-semibold mb-2 text-gray-900"
                        data-oid="hdrvdmu"
                      >
                        Actionable Content
                      </h3>
                      <p className="text-gray-600 text-sm" data-oid="nhfer-4">
                        Step-by-step guidance you can implement immediately
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section - Redesigned */}
            <section
              className="section relative overflow-hidden"
              style={{ backgroundColor: "#fdfdfd" }}
              data-oid="-tiq_b0"
            >
              {/* Decorative elements */}
              <div
                className="absolute top-0 left-0 w-full h-full opacity-5"
                data-oid="faq-decorative"
              >
                <div
                  className="absolute top-20 right-20 w-32 h-32 rounded-full bg-primary"
                  data-oid="faq-circle-1"
                ></div>
                <div
                  className="absolute bottom-32 left-16 w-24 h-24 rounded-full bg-accent"
                  data-oid="faq-circle-2"
                ></div>
                <div
                  className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-secondary"
                  data-oid="faq-circle-3"
                ></div>
              </div>

              <div className="container relative z-10" data-oid="gevs7ob">
                {/* Enhanced header section */}
                <div
                  className="text-center mb-16 fade-in"
                  data-oid="faq-header"
                >
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6"
                    data-oid="6qgst9r"
                  >
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      data-oid="x5lu2hh"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        data-oid="yvh0k9r"
                      />
                    </svg>
                  </div>
                  <h2
                    className="text-4xl md:text-5xl font-bold text-primary mb-4"
                    data-oid="in8c-wk"
                  >
                    Frequently Asked Questions
                  </h2>
                  <p
                    className="text-xl text-gray-600 max-w-2xl mx-auto"
                    data-oid=":1q989t"
                  >
                    Everything you need to know about the Property Leverage
                    Blueprint
                  </p>
                </div>

                {/* FAQ Grid Layout */}
                <div className="max-w-6xl mx-auto" data-oid="faq-container">
                  <div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                    data-oid="faq-grid"
                  >
                    {faqItems.map((item, index) => (
                      <div
                        key={index}
                        className="fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                        data-oid="ams0_gj"
                      >
                        <FAQItem
                          question={item.question}
                          answer={item.answer}
                          isOpen={activeIndex === index}
                          onClick={() => toggleFAQ(index)}
                          data-oid="q9ums93"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact support section */}
                <div
                  className="mt-16 text-center fade-in"
                  data-oid="faq-support"
                >
                  <div
                    className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-gray-100"
                    data-oid="6l7rru0"
                  >
                    <div
                      className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4"
                      data-oid="3bvh6iq"
                    >
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="c:q9.kp"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          data-oid="qj56o2w"
                        />
                      </svg>
                    </div>
                    <h3
                      className="text-2xl font-bold text-primary mb-3"
                      data-oid="vo2mvqr"
                    >
                      Still have questions?
                    </h3>
                    <p className="text-gray-600 mb-6" data-oid="2w3ehy0">
                      Can't find the answer you're looking for? Our friendly
                      team is here to help.
                    </p>
                    <a
                      href="mailto:hello@assembly.sg"
                      className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200 font-medium"
                      data-oid="vahv9z_"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="ntxglql"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          data-oid="fepvbqu"
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
