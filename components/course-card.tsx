"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart-context";
import type { CartItem } from "@/components/cart-context";

interface CourseCardProps {
  course: {
    title: string;
    instructor: string;
    level?: string;
    duration?: string;
    image: string;
    price: string;
    slug: string;
    url?: string;
    category?: string;
    categories?: string[];
    tags?: string[];
    rating?: number;
    reviewCount?: number;
    id?: number;
  };
  delay?: number;
  size?: "normal" | "small";
}

export default function CourseCard({
  course,
  delay = 0,
  size = "normal",
}: CourseCardProps) {
  // Determine if the course is free or paid
  const isFree = course.price === "Free";

  // Get the appropriate link - use the URL if available, otherwise use the slug
  const courseLink = `/courses/${course.slug
    .toLowerCase()
    .replace(/[–—]/g, "-") // Replace en dash and em dash with hyphen
    .replace(/[^\w\s-]/g, "") // Remove other non-word characters
    .replace(/\s+/g, "-") // Replace spaces with hyphen
    .replace(/-{2,}/g, "-") // Collapse multiple hyphens into one
    .replace(/^-|-$/g, "")}`; // Remove leading/trailing hyphens

  // Determine if the price should be displayed as a currency
  const displayPrice = isFree ? "Free" : course.price;

  const { addToCart, cart } = useCart();

  // Size-based classes
  const cardPadding = size === "small" ? "p-2" : "p-4";
  const fontSize = size === "small" ? "text-xs" : "text-base";
  const titleSize = size === "small" ? "text-sm" : "text-lg";
  const imageHeight = size === "small" ? 240 : 180;
  const buttonSize = size === "small" ? "px-2 py-1 text-[10px]" : "px-4 py-2";

  // New design for 'You Might Also Like' section
  const inCart = cart.some((item: CartItem) => item.slug === course.slug);

  if (size === "small") {
    return (
      <Link href={courseLink} className="block h-full" data-oid="e:c_yub">
        <motion.div
          className="group h-full cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay }}
          viewport={{ once: true }}
          data-oid="x4nn6e3"
        >
          <div
            className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full p-4 items-center"
            data-oid="reo49u3"
          >
            {/* Image */}
            <div className="w-full flex justify-center" data-oid="tx3q09h">
              <div
                className="rounded-xl overflow-hidden w-full"
                style={{ height: 120, maxWidth: 220 }}
                data-oid="665xiir"
              >
                <Image
                  src={
                    course.image ||
                    "/placeholder.svg?height=120&width=220&query=real+estate+course"
                  }
                  alt={course.title}
                  width={220}
                  height={120}
                  className="object-contain w-full h-full"
                  data-oid="_9g77_-"
                />
              </div>
            </div>

            {/* Instructor/Logo */}
            <div
              className="flex items-center mt-4 mb-2 w-full"
              data-oid="-ei-2lu"
            >
              {/* Optionally, you can show a logo or avatar here if available */}
              <span
                className="text-xs text-gray-500 font-medium truncate"
                data-oid="yw_wbnv"
              >
                {course.instructor}
              </span>
            </div>

            {/* Title */}
            <div className="w-full mb-2" data-oid="si_xj6b">
              <span
                className="block font-semibold text-gray-900 text-sm line-clamp-2"
                data-oid="01p_yal"
              >
                {course.title}
              </span>
            </div>

            {/* Rating and reviews */}
            <div
              className="flex items-center w-full mb-2 text-xs text-gray-500"
              data-oid="zb7r-us"
            >
              {course.rating && course.rating > 0 ? (
                <>
                  <span
                    className="flex items-center text-[#F0A500] font-bold mr-1"
                    data-oid="57gskr:"
                  >
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      data-oid="n1af.no"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-.181h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        data-oid="f6cdz1_"
                      ></path>
                    </svg>
                    {course.rating.toFixed(1)}
                  </span>
                  <span className="ml-1" data-oid="pljiqrs">
                    {course.reviewCount
                      ? `${course.reviewCount} reviews`
                      : "No reviews"}
                  </span>
                </>
              ) : (
                <span data-oid="_mn1itb">No Reviews Yet</span>
              )}
            </div>

            {/* Level and type */}
            <div
              className="flex items-center w-full text-xs text-gray-500 mb-2"
              data-oid="n15if5d"
            >
              {course.level && (
                <span className="mr-2" data-oid="m15c3u1">
                  {course.level}
                </span>
              )}
              {course.category && (
                <span data-oid="aw1i..j">• {course.category}</span>
              )}
            </div>

            {/* Price and action button */}
            <div
              className="flex items-center justify-between w-full mt-auto pt-2"
              data-oid="9yce9av"
            >
              <span
                className={`font-semibold ${isFree ? "text-green-600" : "text-gray-900"}`}
                data-oid="kkk56nq"
              >
                {displayPrice}
              </span>
              {inCart ? (
                <Button
                  disabled
                  className="bg-gray-200 text-gray-500 font-medium rounded px-3 py-1 text-xs cursor-not-allowed"
                  data-oid="9qw4lmf"
                >
                  In Cart
                </Button>
              ) : isFree ? (
                <Button
                  className="bg-[#1e3a8a] hover:bg-[#152b67] text-white font-medium rounded px-3 py-1 text-xs"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.location.href = courseLink;
                  }}
                  data-oid="epgpmlu"
                >
                  Enroll Now
                </Button>
              ) : (
                <Button
                  variant="outline"
                  className="border border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#e6edf8] bg-white font-medium rounded px-3 py-1 text-xs"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToCart({
                      id: course.id || Date.now(),
                      title: course.title,
                      slug: course.slug,
                      price: course.price,
                      image: course.image,
                      instructor: course.instructor,
                    });
                  }}
                  data-oid="fbw_26m"
                >
                  Add to Cart
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      data-oid="bgh15z1"
    >
      <div
        className={`bg-white rounded-lg overflow-hidden h-full flex flex-col border border-gray-200 shadow-sm hover:shadow-md transition-shadow ${cardPadding}`}
        data-oid="phzvjq."
      >
        <Link href={courseLink} className="block" data-oid="gxybfyy">
          <div
            className="relative w-full"
            style={{ height: imageHeight }}
            data-oid="5xcni_:"
          >
            <Image
              src={
                course.title === "Rising Stars or Hidden Gems?"
                  ? "/rising-stars-or-hidden-gems.jpg"
                  : course.title === "Freehold Property Investment Strategy"
                    ? "/freehold-property-investment-strategy.jpg"
                    : course.title ===
                        "The Ultimate Showdown: Cluster Houses vs. Condos vs. Landed Properties"
                      ? "/the-ultimate-showdown-cluster-houses-vs-condos-vs-landed-properties.jpg"
                      : course.title === "Landed Property Investment Strategies"
                        ? "/landed-property-investment-strategies.jpg"
                        : course.title === "The Art of Real Estate Investment"
                          ? "/the-art-of-real-estate-investment.jpg"
                          : course.title === "Exit with Confidence"
                            ? "/exit-with-confidence.jpg"
                            : course.title ===
                                "Condo Investment Workshop: Building a Profitable Property Portfolio with Confidence"
                              ? "/images/condo-investment-workshop-building-a-profitable-property-portfolio-with-confidence.jpg"
                              : course.title === "Landed Buyer Investing"
                                ? "/landed-buyer-investing.jpg"
                                : course.title ===
                                    "Selling Your Property Effectively as a DIY Property Seller"
                                  ? "/selling-your-property-effectively-as-a-diy-property-seller.jpg"
                                  : course.title ===
                                      "Property Financing Strategy Mastery"
                                    ? "/property-financing-strategy-mastery.jpg"
                                    : course.title ===
                                        "Are Landed Properties Overpriced in 2024? Should We Wait for 2025 to Enter or Is Now the Best Time?"
                                      ? "/are-landed-properties-overpriced-in-2024-should-we-wait-for-2025-to-enter-or-is-now-the-best-time.jpg"
                                      : course.image ||
                                        "/placeholder.svg?height=200&width=400&query=real+estate+course"
              }
              alt={course.title}
              fill
              className={`${size === "small" ? "object-contain" : "object-cover"} transition-transform duration-300 group-hover:scale-105`}
              data-oid="ye69ld-"
            />

            <div
              className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-opacity"
              data-oid="l_4fysu"
            ></div>

            {/* FREE label on thumbnail for free courses */}
            {isFree && (
              <div
                className="absolute top-3 right-3 bg-green-500 text-white py-1 px-3 rounded text-xs font-semibold uppercase"
                data-oid="u0kdulz"
              >
                Free
              </div>
            )}

            {/* Level badge if available */}
            {course.level && (
              <div
                className="absolute bottom-3 left-3 bg-[#E6EDF8] text-[#123B79] py-1 px-2 rounded-full text-xs font-medium"
                data-oid="9kvcpli"
              >
                {course.level}
              </div>
            )}
          </div>
        </Link>
        <div
          className={`flex-1 flex flex-col ${cardPadding}`}
          data-oid="1079l3z"
        >
          {/* Categories */}
          {course.categories && course.categories.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-2" data-oid="3i8.vje">
              {course.categories.map((category, index) => (
                <span
                  key={index}
                  className="text-xs font-medium px-2 py-0.5 bg-[#E6EDF8] text-[#123B79] rounded-full"
                  data-oid="cn710hh"
                >
                  {category}
                </span>
              ))}
            </div>
          )}

          <Link href={courseLink} className="block" data-oid="br1if-m">
            <h3
              className={`font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-[#123B79] ${titleSize}`}
              data-oid=".-r8nsa"
            >
              {course.title}
            </h3>
            <p className={`text-gray-500 mb-2 ${fontSize}`} data-oid="taz-vst">
              By {course.instructor}
            </p>
          </Link>

          {/* Rating or No Reviews message */}
          <div
            className={`flex items-center text-gray-500 mb-4 ${fontSize}`}
            data-oid="c22or.3"
          >
            {course.rating && course.rating > 0 ? (
              <span className="flex items-center" data-oid="18iydm3">
                <svg
                  className="w-4 h-4 text-yellow-400 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  data-oid="cjv_9t0"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-.181h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    data-oid="s_28dmn"
                  ></path>
                </svg>
                {course.rating.toFixed(1)}
                {course.reviewCount && (
                  <span className="ml-1" data-oid="8awij:s">
                    ({course.reviewCount})
                  </span>
                )}
              </span>
            ) : (
              <span data-oid="11ikfi.">No Reviews Yet</span>
            )}

            {/* Show duration if available */}
            {course.duration && (
              <>
                <span className="mx-2" data-oid="61w5m4e">
                  •
                </span>
                <span data-oid="dn2kpa:">{course.duration}</span>
              </>
            )}
          </div>

          {/* Subtle divider */}
          <div className="mt-auto pt-3" data-oid="b:.v.v:">
            <div
              className="border-t border-gray-200 opacity-60 mx-2 mb-3"
              data-oid="wb-en7t"
            ></div>

            {/* Price and action button section */}
            <div
              className="flex items-center justify-between"
              data-oid="3h-geeg"
            >
              {/* Price display */}
              <div
                className={`font-medium ${fontSize} ${isFree ? "text-green-600" : "text-gray-900"}`}
                data-oid="21ytf3l"
              >
                {displayPrice}
              </div>

              {/* Action button */}
              {inCart ? (
                <Button
                  disabled
                  className="bg-gray-200 text-gray-500 font-medium rounded px-3 py-1 text-xs cursor-not-allowed"
                  data-oid="5jampn1"
                >
                  In Cart
                </Button>
              ) : isFree ? (
                <Button
                  className={`bg-[#1e3a8a] hover:bg-[#152b67] text-white font-medium rounded ${buttonSize}`}
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = courseLink;
                  }}
                  data-oid="bi6mder"
                >
                  Enroll Now
                </Button>
              ) : (
                <Button
                  variant="outline"
                  className={`border border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#e6edf8] bg-white font-medium rounded ${buttonSize}`}
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart({
                      id: course.id || Date.now(),
                      title: course.title,
                      slug: course.slug,
                      price: course.price,
                      image: course.image,
                      instructor: course.instructor,
                    });
                  }}
                  data-oid="c4f3_l_"
                >
                  Add to Cart
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
