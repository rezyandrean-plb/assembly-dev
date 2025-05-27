"use client"

import { useEffect, useRef, useState } from "react"
import NetworkBackground from "@/components/network-background"
import Link from "next/link"
import { FAQItem } from "./components/faq-item"
import { AutoScrollCarousel } from "./components/auto-scroll-carousel"
import Navbar from "@/components/navbar"
import { useCart } from "@/components/cart-context"
import { toast } from "react-hot-toast"

export default function PLBBookPage() {
  const { addToCart } = useCart();
  const [scrollY, setScrollY] = useState(0)
  const [scrollSpeed, setScrollSpeed] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const lastScrollY = useRef(0)
  const animationFrameId = useRef<number | null>(null)

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
      answer: "The book is available in print. A digital format will be made available for Kindle on Amazon soon.",
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
  ]

  // Toggle FAQ item
  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index))
  }

  // Handle scroll events for network background
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }

      animationFrameId.current = requestAnimationFrame(() => {
        setScrollY(currentScrollY)
        setScrollSpeed(currentScrollY - lastScrollY.current)
        lastScrollY.current = currentScrollY
      })
    }

    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }

    setWindowHeight(window.innerHeight)
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [])

  // Set up intersection observer for fade-in animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            observerRef.current?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    // Observe all elements with fade-in class
    document.querySelectorAll(".fade-in").forEach((el) => {
      observerRef.current?.observe(el)
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

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
  ]

  const handleAddToCart = () => {
    addToCart({
      id: 'plb-book',
      title: 'Property Leverage Blueprint',
      price: 29,
      type: 'book',
      slug: 'plb-book',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLBook-Quote14.jpg-mljcb9g4LxKziIioshBEu7KxfLixpJ.jpeg'
    });
    toast.success('Added to cart!');
  };

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Page Content */}
        <div className="pt-24 pb-16">
          <Navbar />
          <div className="plb-book-page relative">
            <NetworkBackground scrollY={scrollY} scrollSpeed={scrollSpeed} windowHeight={windowHeight} />
            {/* Semi-transparent overlay to improve text readability across the entire page */}
            <div className="absolute inset-0 bg-white opacity-30 z-0"></div>

            {/* Hero Section */}
            <section className="section" style={{ paddingTop: "120px" }}>
              <div className="container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="fade-in">
                    <h1 className="text-primary mb-4">Property Leverage Blueprint</h1>
                    <p className="text-xl mb-6">
                      Your comprehensive guide to mastering property investment in Singapore's dynamic market
                    </p>
                    <div className="mb-6">
                      <div className="flex items-center mb-2">
                        <span className="text-gray-500 line-through mr-2">$39</span>
                        <span className="text-2xl font-bold text-primary">$29</span>
                      </div>
                      <p className="text-sm text-gray-600">Free shipping for all physical copies within Singapore</p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <button className="btn btn-primary">Get the E-book</button>
                      <button 
                        onClick={handleAddToCart}
                        className="btn btn-secondary"
                      >
                        Get the Paperback
                      </button>
                    </div>
                  </div>
                  <div className="fade-in flex justify-center">
                    <div className="relative w-64 h-80 bg-primary rounded-lg shadow-xl transform rotate-3 animate-float">
                      <div className="absolute inset-0 bg-white m-1 rounded-lg flex items-center justify-center">
                        <div className="text-center p-4">
                          <h3 className="text-primary">Property Leverage Blueprint</h3>
                          <p className="text-sm">By Assembly SG</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Book Overview Section - Redesigned */}
            <section className="section bg-highlight relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-5">
                <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-primary"></div>
                <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-primary-dark"></div>
              </div>
              <div className="container relative z-10">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary fade-in">
                    In a crowded real estate marketplace,{" "}
                    <span className="text-primary-dark">Positioning is Everything</span>.
                  </h2>
                  <div className="flex flex-wrap justify-center gap-3 mt-4 mb-8">
                    <span className="bg-primary text-white px-5 py-2 rounded-full text-sm font-bold shadow-md">
                      Real Estate
                    </span>
                    <span className="bg-primary-dark text-[#123b79] px-5 py-2 rounded-full text-sm font-bold shadow-md">
                      Selling
                    </span>
                    <span className="bg-[#123b79] text-white px-5 py-2 rounded-full text-sm font-bold shadow-md">
                      Property Investing Mindset
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 max-w-4xl mx-auto">
                  <p className="mb-6 text-lg">
                    The moment you list your property in the resale market, it becomes a unique product that needs to
                    attract that one right buyer to make the offer you desire. How do you stand out and find the right
                    buyer that truly appreciates and sees the value of your property? How do you maximise the potential
                    sale price of your home?
                  </p>

                  <div className="bg-primary text-white p-5 mb-6 rounded-lg shadow-inner">
                    <p className="font-medium text-lg">
                      It's about attracting genuine buyers by positioning your property with content and maximum
                      exposure.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-6">
                    <div className="md:col-span-2">
                      <p className="mb-4">
                        For the first time ever, <strong>Melvin Lim</strong> and <strong>Adrian Lim</strong>—more
                        popularly known as PropertyLimBrothers, Singapore's most successful real estate duo that
                        revolutionalise how properties are being marketed with video home tours in Singapore—have
                        assembled an unrivaled playbook on property marketing, designed to take your home from{" "}
                        <strong>"listed"</strong> to <strong>"sold"</strong>.
                      </p>

                      <p>
                        More than just a guide, this is a blueprint for uncovering the unique potential of every real
                        estate you touch and finding the perfect buyer for every home. Backed by wisdom and 17 years of
                        industry experience, this book is your key to mastering the Art of Selling Your Property to its
                        Maximum Potential.
                      </p>
                    </div>
                    <div className="hidden md:block">
                      <div className="w-full aspect-square bg-gradient-to-br from-primary/10 to-primary-dark/20 rounded-full flex items-center justify-center">
                        <div className="w-3/4 h-3/4 bg-gradient-to-tr from-primary to-primary-dark rounded-full flex items-center justify-center text-white text-5xl font-bold">
                          17+
                          <span className="text-sm ml-1">years</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Quote Carousel Section */}
            <section className="section py-16" style={{ backgroundColor: "#E8E8E8" }}>
              <div className="container-fluid px-0">
                <div className="text-center mb-8 px-4">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary fade-in">
                    Key Insights from the Book
                  </h2>
                  <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    Discover powerful strategies and insights that will transform your approach to property selling
                  </p>
                </div>

                <AutoScrollCarousel images={quoteImages} visibleCount={4} autoScrollInterval={4000} />
              </div>
            </section>

            {/* Book Content Section - Redesigned for Full Width */}
            <section className="section relative overflow-hidden bg-secondary py-16">
              <div className="container-fluid px-4 md:px-8 lg:px-12 relative z-10 max-w-[1600px] mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary fade-in">
                    Discover the Art of <span className="text-primary-dark">Home Selling</span>
                  </h2>
                  <p className="text-lg mb-8 max-w-2xl mx-auto">
                    A comprehensive playbook that transforms ordinary sellers into market masters
                  </p>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center">
                  {/* Book image - now in a 4-column space */}
                  <div className="xl:col-span-4 fade-in order-2 xl:order-1">
                    <div className="relative mx-auto max-w-md">
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-primary-dark/30 blur-2xl rounded-full transform -translate-y-4 translate-x-4"></div>
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-02%20at%209.03.38%E2%80%AFpm-EzqCO8JB6tjTccn8gq9St2vGkBsqG0.png"
                        alt="Property Positioning Book Cover"
                        className="relative z-10 w-full h-auto rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform rotate-3 hover:rotate-0 transition-all duration-500"
                      />
                      <div className="absolute -bottom-6 -right-6 bg-primary text-white rounded-full w-24 h-24 flex items-center justify-center text-center p-2 shadow-lg transform rotate-12 z-20">
                        <div>
                          <div className="text-xs">Limited</div>
                          <div className="text-lg font-bold">Edition</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content cards - now in an 8-column space with 3 cards per row */}
                  <div className="xl:col-span-8 fade-in order-1 xl:order-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                        <div className="flex items-center mb-3">
                          <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 group-hover:scale-110 transition-transform">
                            01
                          </div>
                          <h3 className="text-primary text-lg font-semibold">Seller Mindset</h3>
                        </div>
                        <p className="text-gray-600 pl-14">Master the psychology of successful property sellers</p>
                      </div>

                      <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                        <div className="flex items-center mb-3">
                          <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 group-hover:scale-110 transition-transform">
                            02
                          </div>
                          <h3 className="text-primary text-lg font-semibold">Market Patterns</h3>
                        </div>
                        <p className="text-gray-600 pl-14">Understand the Singapore Buy and Sell Pattern</p>
                      </div>

                      <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                        <div className="flex items-center mb-3">
                          <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 group-hover:scale-110 transition-transform">
                            03
                          </div>
                          <h3 className="text-primary text-lg font-semibold">Buyer Connection</h3>
                        </div>
                        <p className="text-gray-600 pl-14">Build empathy with your eventual buyer</p>
                      </div>

                      <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                        <div className="flex items-center mb-3">
                          <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 group-hover:scale-110 transition-transform">
                            04
                          </div>
                          <h3 className="text-primary text-lg font-semibold">Home Preparation</h3>
                        </div>
                        <p className="text-gray-600 pl-14">Prepare and dress your house for maximum appeal</p>
                      </div>

                      <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                        <div className="flex items-center mb-3">
                          <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 group-hover:scale-110 transition-transform">
                            05
                          </div>
                          <h3 className="text-primary text-lg font-semibold">Social Media</h3>
                        </div>
                        <p className="text-gray-600 pl-14">Leverage the power of digital marketing</p>
                      </div>

                      <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                        <div className="flex items-center mb-3">
                          <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3 group-hover:scale-110 transition-transform">
                            06
                          </div>
                          <h3 className="text-primary text-lg font-semibold">Pricing Strategy</h3>
                        </div>
                        <p className="text-gray-600 pl-14">Set the right price with financial calculations</p>
                      </div>
                    </div>

                    <div className="mt-8 text-center lg:text-left">
                      <Link href="/plb-book/preview" className="inline-block">
                        <button className="btn btn-primary">Preview Free Chapter →</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Chapter Topics Section */}
            <section className="section bg-gradient-to-br from-slate-800 to-slate-700 text-white">
              <div className="container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="fade-in">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Unlock Your Property's Maximum Potential</h2>
                    <p className="mb-6">
                      Delve into a comprehensive guide to optimising property value, blending market insights, data
                      analysis, and buyer psychology.
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
                        <span className="text-lg">The Most Common Reasons for Selling</span>
                      </div>
                      <div className="flex items-center border-b border-white/20 pb-3">
                        <span className="text-sm mr-4 opacity-70">02</span>
                        <span className="text-lg">12 Steps to Selling Your Home</span>
                      </div>
                      <div className="flex items-center border-b border-white/20 pb-3">
                        <span className="text-sm mr-4 opacity-70">03</span>
                        <span className="text-lg">Product Positioning: Transforming the home</span>
                      </div>
                      <div className="flex items-center border-b border-white/20 pb-3">
                        <span className="text-sm mr-4 opacity-70">04</span>
                        <span className="text-lg">Marketing in the 21st Century: Real Estate Content Creation</span>
                      </div>
                      <div className="flex items-center border-b border-white/20 pb-3">
                        <span className="text-sm mr-4 opacity-70">05</span>
                        <span className="text-lg">
                          Advertising and Distribution of Content: The Often Neglected Part
                        </span>
                      </div>
                      <div className="flex items-center border-b border-white/20 pb-3">
                        <span className="text-sm mr-4 opacity-70">06</span>
                        <span className="text-lg">Viewings: The Art of Showmanship</span>
                      </div>
                      <div className="flex items-center border-b border-white/20 pb-3">
                        <span className="text-sm mr-4 opacity-70">07</span>
                        <span className="text-lg">Sealing the Deal: How to Price Your Property Correctly</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Author Section */}
            <section className="section">
              <div className="container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="fade-in">
                    <div className="w-64 h-64 rounded-full bg-gray-300 mx-auto md:mx-0"></div>
                  </div>
                  <div className="fade-in">
                    <h2 className="text-primary">About the Author</h2>
                    <p className="feature-text text-xl mb-4">
                      With over 15 years of experience in Singapore's property market
                    </p>
                    <p>
                      The author brings unparalleled insights into the local property landscape, having helped hundreds
                      of clients build wealth through strategic property investments.
                    </p>
                    <p>
                      As the founder of Assembly SG, they have developed a proven system for property investment success
                      that works in any market condition.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="section bg-highlight">
              <div className="container relative z-10">
                <h2 className="text-center text-primary mb-12 fade-in">Frequently Asked Questions</h2>
                <div className="max-w-3xl mx-auto space-y-2">
                  {faqItems.map((item, index) => (
                    <FAQItem
                      key={index}
                      question={item.question}
                      answer={item.answer}
                      isOpen={activeIndex === index}
                      onClick={() => toggleFAQ(index)}
                      className="py-2"
                    />
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}
