"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/cart-context";
import { Button } from "@/components/ui/button";
import {
  Trash,
  Heart,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  Star,
  Clock,
  Users,
  Award,
  Shield,
  Sparkles,
} from "lucide-react";
import { courses as allCourses } from "@/app/data/courses";
import CourseCard from "@/components/course-card";
import Navbar from "@/components/navbar";
import { useAuth } from "@/context/auth-context";
import LoginModal from "@/app/components/login-modal";
import { motion, AnimatePresence } from "framer-motion";

function formatPrice(price: number | string) {
  const numericPrice =
    typeof price === "string"
      ? parseFloat(price.replace(/[^0-9.]/g, ""))
      : price;
  if (isNaN(numericPrice)) {
    return typeof price === "string" && price.toLowerCase() === "free"
      ? "Free"
      : "$0.00";
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "SGD",
  }).format(numericPrice);
}

const BOOK_ID = "property-leverage-blueprint";
const BOOK_ORIGINAL_PRICE = 39;
const BOOK_DISCOUNTED_PRICE = 29;

export default function CartPageContent() {
  const router = useRouter();
  const { cart, removeFromCart, updateQuantity } = useCart();
  const { isLoggedIn } = useAuth();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [removingItems, setRemovingItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const bookInCart = cart.find((item) => item.id === BOOK_ID);
  const discount = bookInCart
    ? (BOOK_ORIGINAL_PRICE - BOOK_DISCOUNTED_PRICE) * bookInCart.quantity
    : 0;

  const subtotal = cart.reduce((sum, item) => {
    let price = 0;
    if (item.id === BOOK_ID) {
      price = BOOK_ORIGINAL_PRICE;
    } else if (item.price.toString().toLowerCase() !== "free") {
      const parsedPrice = parseFloat(
        item.price.toString().replace(/[^0-9.]/g, ""),
      );
      price = isNaN(parsedPrice) ? 0 : parsedPrice;
    }
    return sum + price * item.quantity;
  }, 0);

  const hasBook = cart.some((item) => item.type === "Book");
  const shippingCost = hasBook ? 10.0 : 0.0;
  const orderTotal = subtotal - discount + shippingCost;

  const handleRemoveItem = (itemId: string) => {
    setRemovingItems((prev) => new Set(prev).add(itemId));
    setTimeout(() => {
      removeFromCart(itemId);
      setRemovingItems((prev) => {
        const newSet = new Set(prev);
        newSet.delete(itemId);
        return newSet;
      });
    }, 300);
  };

  const handleCheckout = () => {
    if (!isLoggedIn) {
      setIsLoginModalOpen(true);
      return;
    }

    if (hasBook) {
      router.push("/checkout/delivery");
    } else {
      router.push("/checkout/payment");
    }
  };

  // Enhanced recommendation logic
  const getRecommendedCourses = () => {
    const cartCourseIds = cart.map((item) => item.id);
    const cartCategories = cart
      .map((item) => {
        const course = allCourses.find((c) => c.id === item.id);
        return course?.category || "";
      })
      .filter(Boolean);

    // Get courses from same categories first
    const sameCategoryCourses = allCourses.filter(
      (course) =>
        !cartCourseIds.includes(course.id) &&
        cartCategories.includes(course.category || ""),
    );

    // Get popular courses if we need more
    const popularCourses = allCourses
      .filter(
        (course) =>
          !cartCourseIds.includes(course.id) &&
          !sameCategoryCourses.includes(course),
      )
      .sort((a, b) => (b.rating || 0) - (a.rating || 0));

    return [...sameCategoryCourses, ...popularCourses].slice(0, 6);
  };

  const recommendedCourses = getRecommendedCourses();

  if (!isMounted) {
    return (
      <div
        className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary/5 flex items-center justify-center"
        data-oid="wm2x0sd"
      >
        <div
          className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"
          data-oid="nuxqp-3"
        ></div>
      </div>
    );
  }

  return (
    <>
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => {
          setIsLoginModalOpen(false);
          setTimeout(handleCheckout, 100);
        }}
        data-oid="3kg7fd8"
      />

      <div
        className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary/5"
        data-oid="tf4ru:j"
      >
        <Navbar data-oid="812yy_v" />

        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24"
          data-oid="5h3a_n."
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
            data-oid="n833w6m"
          >
            <div
              className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg mb-6"
              data-oid="iyy_yli"
            >
              <ShoppingBag
                className="w-6 h-6 text-primary"
                data-oid="3d52q3e"
              />

              <span
                className="font-semibold text-neutral-700"
                data-oid="4shej_4"
              >
                Shopping Cart
              </span>
              <span
                className="bg-primary text-white text-sm px-2 py-1 rounded-full"
                data-oid="wx9dmq2"
              >
                {cart.length}
              </span>
            </div>
            <h1
              className="text-4xl font-bold text-neutral-900 mb-4"
              data-oid="a726905"
            >
              Your Learning Journey Awaits
            </h1>
            <p
              className="text-xl text-neutral-600 max-w-2xl mx-auto"
              data-oid="k::rhax"
            >
              Review your selected courses and take the next step towards
              mastering real estate investment
            </p>
          </motion.div>

          {cart.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto text-center py-20"
              data-oid="lhgvi6h"
            >
              <div
                className="bg-white rounded-3xl shadow-xl p-12"
                data-oid="d0femef"
              >
                <div
                  className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8"
                  data-oid="6u_.3nf"
                >
                  <ShoppingBag
                    className="w-12 h-12 text-primary"
                    data-oid="xl.ls6z"
                  />
                </div>
                <h2
                  className="text-3xl font-bold text-neutral-900 mb-4"
                  data-oid="mh9k5cl"
                >
                  Your cart is empty
                </h2>
                <p className="text-neutral-600 mb-8 text-lg" data-oid="0442ugt">
                  Discover our expert-led courses and start building your real
                  estate investment portfolio today.
                </p>
                <Button
                  onClick={() => router.push("/courses")}
                  className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  data-oid="8xvkgsb"
                >
                  Explore Courses
                  <ArrowRight className="w-5 h-5 ml-2" data-oid="wu89p71" />
                </Button>
              </div>
            </motion.div>
          ) : (
            <div
              className="grid grid-cols-1 lg:grid-cols-3 gap-12"
              data-oid="ej_m9v."
            >
              {/* Cart Items */}
              <div className="lg:col-span-2" data-oid="b5ur.kt">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  data-oid="6jpmqmj"
                >
                  <div
                    className="p-6 border-b border-neutral-200"
                    data-oid="8ua::ap"
                  >
                    <h2
                      className="text-2xl font-bold text-neutral-900"
                      data-oid="13ja_yt"
                    >
                      Course Selection ({cart.length} items)
                    </h2>
                  </div>

                  <AnimatePresence data-oid="qi-pqml">
                    {cart.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`border-b border-neutral-100 last:border-b-0 ${
                          removingItems.has(item.id) ? "opacity-50" : ""
                        }`}
                        data-oid="wydbho1"
                      >
                        <div className="p-6" data-oid="z5rbq1i">
                          <div className="flex gap-6" data-oid="l:qc3dy">
                            {/* Course Image */}
                            <div className="flex-shrink-0" data-oid="96uh4nc">
                              <div
                                className="relative w-32 h-32 rounded-xl overflow-hidden bg-neutral-100"
                                data-oid="x.1ja.."
                              >
                                {item.type === "Book" ? (
                                  <div
                                    className="w-full h-full bg-gray-100 flex items-center justify-center rounded-lg"
                                    data-oid="sqxi4qq"
                                  >
                                    <Image
                                      src="/images/PLB Book Front Cover_FA.jpg"
                                      alt="Book Cover"
                                      width={80}
                                      height={120}
                                      className="object-contain"
                                      data-oid="2ymzgj5"
                                    />
                                  </div>
                                ) : (
                                  <Image
                                    src={item.image || "/placeholder.jpg"}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                    data-oid="x7oy3vk"
                                  />
                                )}

                                <div
                                  className="absolute top-2 left-2"
                                  data-oid="1x6x6zx"
                                >
                                  <span
                                    className="bg-primary text-white text-xs px-2 py-1 rounded-full font-medium"
                                    data-oid="8a-j86g"
                                  >
                                    {item.type === "Book" ? "Book" : "Course"}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Course Details */}
                            <div className="flex-1 min-w-0" data-oid="khk3y-f">
                              <div
                                className="flex justify-between items-start mb-3"
                                data-oid="6t0i:2t"
                              >
                                <div className="flex-1" data-oid="0w707g.">
                                  <h3
                                    className="text-lg font-bold text-neutral-900 mb-2 line-clamp-2"
                                    data-oid="u.7r4fj"
                                  >
                                    {item.title}
                                  </h3>
                                  <p
                                    className="text-neutral-600 mb-3"
                                    data-oid="yon7d.m"
                                  >
                                    By {item.author || "Assembly.sg"}
                                  </p>

                                  {/* Course Features */}
                                  <div
                                    className="flex items-center gap-4 text-sm text-neutral-500 mb-4"
                                    data-oid="-isrkg_"
                                  >
                                    <div
                                      className="flex items-center gap-1"
                                      data-oid="-azodkv"
                                    >
                                      <Clock
                                        className="w-4 h-4"
                                        data-oid="x2sjizo"
                                      />

                                      <span data-oid="nr7..s:">2-3 hours</span>
                                    </div>
                                    <div
                                      className="flex items-center gap-1"
                                      data-oid="cegmg:n"
                                    >
                                      <Users
                                        className="w-4 h-4"
                                        data-oid="bl3yce:"
                                      />

                                      <span data-oid="2ycps0z">
                                        1,200+ students
                                      </span>
                                    </div>
                                    <div
                                      className="flex items-center gap-1"
                                      data-oid="1vgkz.n"
                                    >
                                      <Star
                                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                        data-oid="vp8zeie"
                                      />

                                      <span data-oid="u92yuiz">4.8</span>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  className="text-right ml-4"
                                  data-oid="riomsam"
                                >
                                  <div
                                    className="text-2xl font-bold text-neutral-900"
                                    data-oid="cm2o2qv"
                                  >
                                    {formatPrice(item.price)}
                                  </div>
                                  {item.id === BOOK_ID && (
                                    <div
                                      className="text-sm text-neutral-500 line-through"
                                      data-oid="hsebp4j"
                                    >
                                      {formatPrice(BOOK_ORIGINAL_PRICE)}
                                    </div>
                                  )}
                                </div>
                              </div>

                              {/* Quantity and Actions */}
                              <div
                                className="flex items-center justify-between"
                                data-oid="-:3wnja"
                              >
                                <div
                                  className="flex items-center gap-4"
                                  data-oid="rrpu62f"
                                >
                                  {item.type === "Book" ? (
                                    <div
                                      className="flex items-center gap-2"
                                      data-oid="r7e5d7b"
                                    >
                                      <span
                                        className="text-sm text-neutral-600"
                                        data-oid="0gf74-l"
                                      >
                                        Quantity:
                                      </span>
                                      <div
                                        className="flex items-center border border-neutral-200 rounded-lg"
                                        data-oid="x8aia.4"
                                      >
                                        <button
                                          onClick={() =>
                                            updateQuantity(
                                              item.id,
                                              Math.max(1, item.quantity - 1),
                                            )
                                          }
                                          className="p-2 hover:bg-neutral-50 transition-colors"
                                          data-oid="wtabbyc"
                                        >
                                          <Minus
                                            className="w-4 h-4"
                                            data-oid="18_zu.9"
                                          />
                                        </button>
                                        <span
                                          className="px-4 py-2 font-medium"
                                          data-oid="1ch7a2i"
                                        >
                                          {item.quantity}
                                        </span>
                                        <button
                                          onClick={() =>
                                            updateQuantity(
                                              item.id,
                                              Math.min(10, item.quantity + 1),
                                            )
                                          }
                                          className="p-2 hover:bg-neutral-50 transition-colors"
                                          data-oid="o3noxyf"
                                        >
                                          <Plus
                                            className="w-4 h-4"
                                            data-oid="o:v6g.z"
                                          />
                                        </button>
                                      </div>
                                    </div>
                                  ) : (
                                    <div
                                      className="flex items-center gap-2 text-sm text-neutral-600"
                                      data-oid="iv-9:ah"
                                    >
                                      <Award
                                        className="w-4 h-4"
                                        data-oid="ob.395w"
                                      />

                                      <span data-oid="o2rfwve">
                                        Lifetime Access
                                      </span>
                                    </div>
                                  )}
                                </div>

                                <div
                                  className="flex items-center gap-2"
                                  data-oid="tguu9nx"
                                >
                                  <button
                                    type="button"
                                    className="p-2 text-neutral-400 hover:text-red-500 transition-colors"
                                    data-oid="nmzgze4"
                                  >
                                    <Heart
                                      className="w-5 h-5"
                                      data-oid="0bj0aob"
                                    />
                                  </button>
                                  <button
                                    onClick={() => handleRemoveItem(item.id)}
                                    type="button"
                                    className="p-2 text-neutral-400 hover:text-red-500 transition-colors"
                                    data-oid="0wtqmbi"
                                  >
                                    <Trash
                                      className="w-5 h-5"
                                      data-oid="lj3x3x4"
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1" data-oid="b7prhow">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="sticky top-24"
                  data-oid="xatelkd"
                >
                  <div
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                    data-oid="8wq.6ly"
                  >
                    <div
                      className="p-6 bg-primary text-white"
                      data-oid="9aiu.da"
                    >
                      <h2 className="text-xl font-bold mb-2" data-oid="6fpgoid">
                        Order Summary
                      </h2>
                      <p className="text-grey-400" data-oid="p_c2-pj">
                        Ready to start learning?
                      </p>
                    </div>

                    <div className="p-6" data-oid="9iut_i0">
                      <div className="space-y-4 mb-6" data-oid="aafyl5q">
                        <div
                          className="flex justify-between items-center"
                          data-oid="4cg:i5:"
                        >
                          <span className="text-neutral-600" data-oid="7z.w2_l">
                            Subtotal
                          </span>
                          <span className="font-semibold" data-oid="2h3l7bc">
                            {formatPrice(subtotal)}
                          </span>
                        </div>

                        {discount > 0 && (
                          <div
                            className="flex justify-between items-center text-green-600"
                            data-oid="_05cang"
                          >
                            <span data-oid="68xl9v3">Discount</span>
                            <span className="font-semibold" data-oid="_i1i0.u">
                              -{formatPrice(discount)}
                            </span>
                          </div>
                        )}

                        <div
                          className="flex justify-between items-center"
                          data-oid=".s.o9lj"
                        >
                          <span className="text-neutral-600" data-oid="4bxuzcm">
                            Shipping
                          </span>
                          <span className="font-semibold" data-oid="baf4l-4">
                            {shippingCost > 0
                              ? formatPrice(shippingCost)
                              : "Free"}
                          </span>
                        </div>

                        <div
                          className="border-t border-neutral-200 pt-4"
                          data-oid="svngowk"
                        >
                          <div
                            className="flex justify-between items-center"
                            data-oid="4ll790z"
                          >
                            <span
                              className="text-lg font-bold text-neutral-900"
                              data-oid="e2p0lc6"
                            >
                              Total
                            </span>
                            <span
                              className="text-2xl font-bold text-primary"
                              data-oid="4303hoi"
                            >
                              {formatPrice(orderTotal)}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Security Features */}
                      <div
                        className="bg-neutral-50 rounded-xl p-4 mb-6"
                        data-oid="t-sc9hc"
                      >
                        <div
                          className="flex items-center gap-3 mb-3"
                          data-oid="8f7ltf8"
                        >
                          <Shield
                            className="w-5 h-5 text-green-500"
                            data-oid="ecr3:yv"
                          />

                          <span
                            className="font-semibold text-neutral-900"
                            data-oid="7wye_::"
                          >
                            Secure Checkout
                          </span>
                        </div>
                        <ul
                          className="text-sm text-neutral-600 space-y-1"
                          data-oid="-w5mgb3"
                        >
                          <li data-oid="fs.7ffw">
                            • 30-day money-back guarantee
                          </li>
                          <li data-oid="aq_i.d5">
                            • Lifetime access to courses
                          </li>
                          <li data-oid=".2l2qx-">• SSL encrypted payment</li>
                        </ul>
                      </div>

                      <Button
                        onClick={handleCheckout}
                        className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        data-oid="tdx-utl"
                      >
                        Proceed to Checkout
                        <ArrowRight
                          className="w-5 h-5 ml-2"
                          data-oid="mi61jqe"
                        />
                      </Button>

                      <Button
                        onClick={() => router.push("/courses")}
                        variant="outline"
                        className="w-full mt-3 py-3 border-2 border-neutral-200 hover:border-primary hover:text-primary transition-all duration-300"
                        data-oid="v4n:.be"
                      >
                        Continue Shopping
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          )}

          {/* Enhanced Recommendations Section */}
          {cart.length > 0 && recommendedCourses.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-20"
              data-oid="p.qzdl_"
            >
              <div className="text-center mb-12" data-oid="0kgf78g">
                <div
                  className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg mb-6"
                  data-oid="c_2yt03"
                >
                  <Sparkles
                    className="w-5 h-5 text-yellow-500"
                    data-oid="d.mzglm"
                  />

                  <span
                    className="font-semibold text-neutral-700"
                    data-oid="4__kest"
                  >
                    Recommended for You
                  </span>
                </div>
                <h2
                  className="text-3xl font-bold text-neutral-900 mb-4"
                  data-oid="350b6h9"
                >
                  Complete Your Learning Path
                </h2>
                <p
                  className="text-neutral-600 text-lg max-w-2xl mx-auto"
                  data-oid="icm4ynf"
                >
                  Based on your selections, these courses will help you build a
                  comprehensive understanding of real estate investment
                </p>
              </div>

              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                data-oid="7gqnfb:"
              >
                {recommendedCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    data-oid=":km21kw"
                  >
                    <CourseCard course={course} data-oid="_io0qdj" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}
