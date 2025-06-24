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
  // Handle explicit $0.00 case
  if (price === "$0.00") {
    return "Free";
  }

  const numericPrice =
    typeof price === "string"
      ? parseFloat(price.replace(/[^0-9.]/g, ""))
      : price;
  if (isNaN(numericPrice) || numericPrice === 0) {
    return typeof price === "string" && price.toLowerCase() === "free"
      ? "Free"
      : "Free";
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

    // Check if all items are free (total is $0)
    if (orderTotal === 0) {
      // All items are free, go directly to order received
      router.push("/order-received");
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
        data-oid="bktdyiv"
      >
        <div
          className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"
          data-oid="sfldw8g"
        ></div>
      </div>
    );
  }

  return (
    <>
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSuccessfulLogin={() => {
          // Continue with checkout after successful login
          if (orderTotal === 0) {
            router.push("/order-received");
          } else if (hasBook) {
            router.push("/checkout/delivery");
          } else {
            router.push("/checkout/payment");
          }
        }}
        data-oid="nooz6gx"
      />

      <div
        className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary/5"
        data-oid="wfob7_8"
      >
        <Navbar data-oid="nj9:wyx" />

        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24"
          data-oid="ridwigy"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
            data-oid="aqs.b7l"
          >
            <div
              className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg mb-6"
              data-oid="__cd11z"
            >
              <ShoppingBag
                className="w-6 h-6 text-primary"
                data-oid="1:fukw7"
              />

              <span
                className="font-semibold text-neutral-700"
                data-oid="c5e-tu-"
              >
                Shopping Cart
              </span>
              <span
                className="bg-primary text-white text-sm px-2 py-1 rounded-full"
                data-oid="tw.otlk"
              >
                {cart.length}
              </span>
            </div>
            <h1
              className="text-4xl font-bold text-neutral-900 mb-4"
              data-oid="zf-v:p5"
            >
              Your Learning Journey Awaits
            </h1>
            <p
              className="text-xl text-neutral-600 max-w-2xl mx-auto"
              data-oid="xw73h8p"
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
              data-oid="-ovv-y5"
            >
              <div
                className="bg-white rounded-3xl shadow-xl p-12"
                data-oid="a--k56c"
              >
                <div
                  className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8"
                  data-oid=".cv8kh2"
                >
                  <ShoppingBag
                    className="w-12 h-12 text-primary"
                    data-oid="31suo6y"
                  />
                </div>
                <h2
                  className="text-3xl font-bold text-neutral-900 mb-4"
                  data-oid="lf-mo0o"
                >
                  Your cart is empty
                </h2>
                <p className="text-neutral-600 mb-8 text-lg" data-oid="w1:6b6h">
                  Discover our expert-led courses and start building your real
                  estate investment portfolio today.
                </p>
                <Button
                  onClick={() => router.push("/courses")}
                  className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  data-oid="y9.oydu"
                >
                  Explore Courses
                  <ArrowRight className="w-5 h-5 ml-2" data-oid="7qgvpja" />
                </Button>
              </div>
            </motion.div>
          ) : (
            <div
              className="grid grid-cols-1 lg:grid-cols-3 gap-12"
              data-oid="b35ze15"
            >
              {/* Cart Items */}
              <div className="lg:col-span-2" data-oid="dn18k.f">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  data-oid="dj_9edq"
                >
                  <div
                    className="p-6 border-b border-neutral-200"
                    data-oid="s2j-m9s"
                  >
                    <h2
                      className="text-2xl font-bold text-neutral-900"
                      data-oid="lfs.14o"
                    >
                      Course Selection ({cart.length} items)
                    </h2>
                  </div>

                  <AnimatePresence data-oid="wu9yl5i">
                    {cart.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`border-b border-neutral-100 last:border-b-0 ${
                          removingItems.has(item.id) ? "opacity-50" : ""
                        }`}
                        data-oid="y5cl0a."
                      >
                        <div className="p-6" data-oid="zyyrln6">
                          <div className="flex gap-6" data-oid="wsr4lev">
                            {/* Course Image */}
                            <div className="flex-shrink-0" data-oid="zyu8z_4">
                              <div
                                className="relative w-32 h-32 rounded-xl overflow-hidden bg-neutral-100"
                                data-oid="su:puuk"
                              >
                                {item.type === "Book" ? (
                                  <div
                                    className="w-full h-full bg-gray-100 flex items-center justify-center rounded-lg"
                                    data-oid="hbm0kob"
                                  >
                                    <Image
                                      src="/images/PLB Book Front Cover_FA.jpg"
                                      alt="Book Cover"
                                      width={80}
                                      height={120}
                                      className="object-contain"
                                      data-oid="8sel.e."
                                    />
                                  </div>
                                ) : (
                                  <Image
                                    src={item.image || "/placeholder.jpg"}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                    data-oid="g759lz9"
                                  />
                                )}

                                <div
                                  className="absolute top-2 left-2"
                                  data-oid="8pvv2-b"
                                >
                                  <span
                                    className="bg-primary text-white text-xs px-2 py-1 rounded-full font-medium"
                                    data-oid="r3hd7nl"
                                  >
                                    {item.type === "Book" ? "Book" : "Course"}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Course Details */}
                            <div className="flex-1 min-w-0" data-oid="llimiij">
                              <div
                                className="flex justify-between items-start mb-3"
                                data-oid="vf1he0o"
                              >
                                <div className="flex-1" data-oid="i05_v_f">
                                  <h3
                                    className="text-lg font-bold text-neutral-900 mb-2 line-clamp-2"
                                    data-oid="zben.x3"
                                  >
                                    {item.title}
                                  </h3>
                                  <p
                                    className="text-neutral-600 mb-3"
                                    data-oid="wg-1evv"
                                  >
                                    By {item.author || "Assembly.sg"}
                                  </p>

                                  {/* Course Features */}
                                  <div
                                    className="flex items-center gap-4 text-sm text-neutral-500 mb-4"
                                    data-oid="eigibjn"
                                  >
                                    <div
                                      className="flex items-center gap-1"
                                      data-oid="m_54cqq"
                                    >
                                      <Clock
                                        className="w-4 h-4"
                                        data-oid="nff8sfr"
                                      />

                                      <span data-oid="pcq7wk1">2-3 hours</span>
                                    </div>
                                    <div
                                      className="flex items-center gap-1"
                                      data-oid="iwsi5j-"
                                    >
                                      <Users
                                        className="w-4 h-4"
                                        data-oid="m6g_qz4"
                                      />

                                      <span data-oid="0qz5is-">
                                        1,200+ students
                                      </span>
                                    </div>
                                    <div
                                      className="flex items-center gap-1"
                                      data-oid="opc0teg"
                                    >
                                      <Star
                                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                        data-oid="g0kxkx8"
                                      />

                                      <span data-oid="rp78ab.">4.8</span>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  className="text-right ml-4"
                                  data-oid="ovcl97u"
                                >
                                  <div
                                    className="text-2xl font-bold text-neutral-900"
                                    data-oid="9qh5xb_"
                                  >
                                    {formatPrice(item.price)}
                                  </div>
                                  {item.id === BOOK_ID && (
                                    <div
                                      className="text-sm text-neutral-500 line-through"
                                      data-oid="g:neard"
                                    >
                                      {formatPrice(BOOK_ORIGINAL_PRICE)}
                                    </div>
                                  )}
                                </div>
                              </div>

                              {/* Quantity and Actions */}
                              <div
                                className="flex items-center justify-between"
                                data-oid="w5x2_ae"
                              >
                                <div
                                  className="flex items-center gap-4"
                                  data-oid="s-1cl5r"
                                >
                                  {item.type === "Book" ? (
                                    <div
                                      className="flex items-center gap-2"
                                      data-oid="5pw25ar"
                                    >
                                      <span
                                        className="text-sm text-neutral-600"
                                        data-oid="k_xu70r"
                                      >
                                        Quantity:
                                      </span>
                                      <div
                                        className="flex items-center border border-neutral-200 rounded-lg"
                                        data-oid="xfjwy-d"
                                      >
                                        <button
                                          onClick={() =>
                                            updateQuantity(
                                              item.id,
                                              Math.max(1, item.quantity - 1),
                                            )
                                          }
                                          className="p-2 hover:bg-neutral-50 transition-colors"
                                          data-oid="cbgenie"
                                        >
                                          <Minus
                                            className="w-4 h-4"
                                            data-oid="unk3b2b"
                                          />
                                        </button>
                                        <span
                                          className="px-4 py-2 font-medium"
                                          data-oid="o8:g19b"
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
                                          data-oid="xjph.d9"
                                        >
                                          <Plus
                                            className="w-4 h-4"
                                            data-oid="jn-qxrl"
                                          />
                                        </button>
                                      </div>
                                    </div>
                                  ) : (
                                    <div
                                      className="flex items-center gap-2 text-sm text-neutral-600"
                                      data-oid="yjtst2b"
                                    >
                                      <Award
                                        className="w-4 h-4"
                                        data-oid="ccbh78:"
                                      />

                                      <span data-oid="z451:y_">
                                        Lifetime Access
                                      </span>
                                    </div>
                                  )}
                                </div>

                                <div
                                  className="flex items-center gap-2"
                                  data-oid="bzydw8b"
                                >
                                  <button
                                    type="button"
                                    className="p-2 text-neutral-400 hover:text-red-500 transition-colors"
                                    data-oid="06jsjxe"
                                  >
                                    <Heart
                                      className="w-5 h-5"
                                      data-oid="yrj74z3"
                                    />
                                  </button>
                                  <button
                                    onClick={() => handleRemoveItem(item.id)}
                                    type="button"
                                    className="p-2 text-neutral-400 hover:text-red-500 transition-colors"
                                    data-oid="-k3bd_d"
                                  >
                                    <Trash
                                      className="w-5 h-5"
                                      data-oid="57ezkpj"
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
              <div className="lg:col-span-1" data-oid="pgl:7qw">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="sticky top-24"
                  data-oid="hxpv6_3"
                >
                  <div
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                    data-oid="hpa.2es"
                  >
                    <div
                      className="p-6 bg-primary text-white"
                      data-oid="p94cvf3"
                    >
                      <h2 className="text-xl font-bold mb-2" data-oid="vsi2kt1">
                        Order Summary
                      </h2>
                      <p className="text-grey-400" data-oid="vo.559f">
                        Ready to start learning?
                      </p>
                    </div>

                    <div className="p-6" data-oid="dyio0bx">
                      <div className="space-y-4 mb-6" data-oid="q96_3ci">
                        <div
                          className="flex justify-between items-center"
                          data-oid="3hqj21t"
                        >
                          <span className="text-neutral-600" data-oid="73ykkt3">
                            Subtotal
                          </span>
                          <span className="font-semibold" data-oid="d-m2s6w">
                            {formatPrice(subtotal)}
                          </span>
                        </div>

                        {discount > 0 && (
                          <div
                            className="flex justify-between items-center text-green-600"
                            data-oid="k0h8taq"
                          >
                            <span data-oid="gjnqs0o">Discount</span>
                            <span className="font-semibold" data-oid="6e-k.h5">
                              -{formatPrice(discount)}
                            </span>
                          </div>
                        )}

                        <div
                          className="flex justify-between items-center"
                          data-oid="58z9d:d"
                        >
                          <span className="text-neutral-600" data-oid="r_xaruk">
                            Shipping
                          </span>
                          <span className="font-semibold" data-oid="5s5uk.8">
                            {shippingCost > 0
                              ? formatPrice(shippingCost)
                              : "Free"}
                          </span>
                        </div>

                        <div
                          className="border-t border-neutral-200 pt-4"
                          data-oid="ja64cz8"
                        >
                          <div
                            className="flex justify-between items-center"
                            data-oid="bqj77g7"
                          >
                            <span
                              className="text-lg font-bold text-neutral-900"
                              data-oid="90a8f1-"
                            >
                              Total
                            </span>
                            <span
                              className="text-2xl font-bold text-primary"
                              data-oid=":iusvmg"
                            >
                              {formatPrice(orderTotal)}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Security Features */}
                      <div
                        className="bg-neutral-50 rounded-xl p-4 mb-6"
                        data-oid="-tmlj9:"
                      >
                        <div
                          className="flex items-center gap-3 mb-3"
                          data-oid="ikcch7x"
                        >
                          <Shield
                            className="w-5 h-5 text-green-500"
                            data-oid="lsw8h_-"
                          />

                          <span
                            className="font-semibold text-neutral-900"
                            data-oid="e3.2cnf"
                          >
                            Secure Checkout
                          </span>
                        </div>
                        <ul
                          className="text-sm text-neutral-600 space-y-1"
                          data-oid="dl9fen3"
                        >
                          <li data-oid="1py:5ra">
                            • Lifetime access to courses
                          </li>
                          <li data-oid="r-gxv4k">• SSL encrypted payment</li>
                        </ul>
                      </div>

                      <Button
                        onClick={handleCheckout}
                        className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        data-oid="pims.c9"
                      >
                        Proceed to Checkout
                        <ArrowRight
                          className="w-5 h-5 ml-2"
                          data-oid="9vaiw2x"
                        />
                      </Button>

                      <Button
                        onClick={() => router.push("/courses")}
                        variant="outline"
                        className="w-full mt-3 py-3 border-2 border-neutral-200 hover:border-primary hover:text-primary transition-all duration-300"
                        data-oid="c.t4m7r"
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
              data-oid="ztn-i:p"
            >
              <div className="text-center mb-12" data-oid="02m2isg">
                <div
                  className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg mb-6"
                  data-oid="8036049"
                >
                  <Sparkles
                    className="w-5 h-5 text-yellow-500"
                    data-oid="6nhwz5c"
                  />

                  <span
                    className="font-semibold text-neutral-700"
                    data-oid="f39-xf4"
                  >
                    Recommended for You
                  </span>
                </div>
                <h2
                  className="text-3xl font-bold text-neutral-900 mb-4"
                  data-oid="::z28q1"
                >
                  Complete Your Learning Path
                </h2>
                <p
                  className="text-neutral-600 text-lg max-w-2xl mx-auto"
                  data-oid="u94vi6_"
                >
                  Based on your selections, these courses will help you build a
                  comprehensive understanding of real estate investment
                </p>
              </div>

              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                data-oid=":l2t3o_"
              >
                {recommendedCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    data-oid="u7ncngt"
                  >
                    <CourseCard course={course} data-oid="2b2ebe5" />
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
