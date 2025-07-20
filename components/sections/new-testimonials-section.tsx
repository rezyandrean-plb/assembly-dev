"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NewTestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Property Investor",
      location: "Singapore",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Assembly.sg transformed my understanding of real estate investment. Within 6 months of completing the HDB Specialist path, I successfully upgraded from my HDB to a condo and started building my investment portfolio. The instructors are incredibly knowledgeable and the community support is amazing.",
      achievement: "Built $800K portfolio in 18 months",
    },
    {
      id: 2,
      name: "Marcus Tan",
      role: "First-time Investor",
      location: "Singapore",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "As a complete beginner, I was overwhelmed by the complexity of real estate investment. The Beginner's Path at Assembly.sg broke everything down into digestible lessons. I'm now confident in analyzing properties and have made my first profitable investment. Highly recommend!",
      achievement: "Achieved 15% ROI on first investment",
    },
    {
      id: 3,
      name: "Jennifer Lim",
      role: "Real Estate Agent",
      location: "Singapore",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Even as a real estate professional, I learned so much from the Condo Expert path. The market analysis techniques and new launch strategies have significantly improved my ability to advise clients. My commission increased by 40% after applying what I learned.",
      achievement: "Increased income by 40%",
    },
    {
      id: 4,
      name: "David Wong",
      role: "Business Owner",
      location: "Singapore",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "The Landed Property Pro course opened my eyes to high-value investment opportunities I never knew existed. The networking opportunities alone were worth the investment. I've since acquired two landed properties and my portfolio value has doubled.",
      achievement: "Doubled portfolio value",
    },
    {
      id: 5,
      name: "Rachel Ng",
      role: "Young Professional",
      location: "Singapore",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Starting my investment journey in my 20s seemed daunting, but Assembly.sg made it accessible and exciting. The step-by-step approach and practical examples helped me make informed decisions. I now own two properties and have a clear 10-year investment plan.",
      achievement: "Owns 2 properties by age 28",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-blue-50 to-purple-50"
      data-oid="ak64:vh"
    >
      <div className="container mx-auto px-4" data-oid="dzznkuu">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          data-oid="-364thq"
        >
          <h2
            className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent"
            data-oid="hgk6xw6"
          >
            Success Stories
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            data-oid="c1spdmr"
          >
            Hear from our students who've transformed their financial future
            through real estate investment
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          data-oid="8ulc:2-"
        >
          <div
            className="bg-white rounded-3xl shadow-2xl p-12 relative overflow-hidden"
            data-oid="z2px0yu"
          >
            {/* Background Quote */}
            <div
              className="absolute top-8 right-8 opacity-10"
              data-oid="k6cp091"
            >
              <Quote className="w-24 h-24 text-blue-600" data-oid=".-12u-o" />
            </div>

            <div className="relative z-10" data-oid="a_6vdx9">
              {/* Rating */}
              <div
                className="flex items-center justify-center mb-6"
                data-oid="4ssbd50"
              >
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-yellow-400 text-yellow-400"
                      data-oid="ef4cm-e"
                    />
                  ),
                )}
              </div>

              {/* Testimonial Text */}
              <blockquote
                className="text-xl lg:text-2xl text-gray-700 text-center mb-8 leading-relaxed"
                data-oid="nprwros"
              >
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Achievement Badge */}
              <div className="text-center mb-8" data-oid="0twj:9l">
                <div
                  className="inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 text-green-700 px-6 py-3 rounded-full font-semibold"
                  data-oid="ze00616"
                >
                  🎉 {testimonials[currentTestimonial].achievement}
                </div>
              </div>

              {/* Author Info */}
              <div
                className="flex items-center justify-center gap-4"
                data-oid="x98u6dm"
              >
                <div
                  className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl"
                  data-oid="-axkejs"
                >
                  {testimonials[currentTestimonial].name.charAt(0)}
                </div>
                <div className="text-center" data-oid="_e8x1xs">
                  <div
                    className="font-semibold text-gray-900 text-lg"
                    data-oid="5:-50:x"
                  >
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600" data-oid="ehovak_">
                    {testimonials[currentTestimonial].role} •{" "}
                    {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div
            className="flex items-center justify-center gap-4 mt-8"
            data-oid="gobn39g"
          >
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full w-12 h-12 p-0"
              data-oid="jrpndzb"
            >
              <ChevronLeft className="w-5 h-5" data-oid="3--pwp9" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2" data-oid="x5trhxt">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-blue-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  data-oid="ww5mysy"
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full w-12 h-12 p-0"
              data-oid="fkdnpk_"
            >
              <ChevronRight className="w-5 h-5" data-oid=":6_9b4q" />
            </Button>
          </div>
        </motion.div>

        {/* Testimonial Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          data-oid="d0:bscj"
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              data-oid=".8i150x"
            >
              {/* Rating */}
              <div className="flex items-center mb-4" data-oid="b5u-0ge">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    data-oid="iydewgf"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 mb-4 line-clamp-4" data-oid=".3dzb3o">
                "{testimonial.text.substring(0, 120)}..."
              </p>

              {/* Author */}
              <div className="flex items-center gap-3" data-oid="-4i.plt">
                <div
                  className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold"
                  data-oid="x_r0qyb"
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div data-oid="0ivynx7">
                  <div
                    className="font-semibold text-gray-900 text-sm"
                    data-oid="dt1k2sw"
                  >
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-xs" data-oid=":je0aul">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
