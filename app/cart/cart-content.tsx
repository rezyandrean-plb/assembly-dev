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
        data-oid="qqlpk21"
      >
        <div
          className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"
          data-oid="0v55ylp"
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
        data-oid="f8unb68"
      />

      <div
        className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary/5"
        data-oid="-ss__6v"
      >
        <Navbar data-oid="9w_ldc1" />

        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24"
          data-oid="i5alm6-"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
            data-oid="rx1lgvt"
          >
            <div
              className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg mb-6"
              data-oid="ft0u1r7"
            >
              <ShoppingBag
                className="w-6 h-6 text-primary"
                data-oid="zow-o:b"
              />

              <span
                className="font-semibold text-neutral-700"
                data-oid="6__9qkg"
              >
                Shopping Cart
              </span>
              <span
                className="bg-primary text-white text-sm px-2 py-1 rounded-full"
                data-oid="gw:3dlr"
              >
                {cart.length}
              </span>
            </div>
            <h1
              className="text-4xl font-bold text-neutral-900 mb-4"
              data-oid="yau81rz"
            >
              Your Learning Journey Awaits
            </h1>
            <p
              className="text-xl text-neutral-600 max-w-2xl mx-auto"
              data-oid="1i5-dy:"
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
              data-oid="ontzwpd"
            >
              <div
                className="bg-white rounded-3xl shadow-xl p-12"
                data-oid=":mooo2r"
              >
                <div
                  className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8"
                  data-oid="__ux_ok"
                >
                  <ShoppingBag
                    className="w-12 h-12 text-primary"
                    data-oid="6kec6y:"
                  />
                </div>
                <h2
                  className="text-3xl font-bold text-neutral-900 mb-4"
                  data-oid="ycmdrfg"
                >
                  Your cart is empty
                </h2>
                <p className="text-neutral-600 mb-8 text-lg" data-oid="pg3383y">
                  Discover our expert-led courses and start building your real
                  estate investment portfolio today.
                </p>
                <Button
                  onClick={() => router.push("/courses")}
                  className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  data-oid="4shjtvj"
                >
                  Explore Courses
                  <ArrowRight className="w-5 h-5 ml-2" data-oid="kmly1rg" />
                </Button>
              </div>
            </motion.div>
          ) : (
            <div
              className="grid grid-cols-1 lg:grid-cols-3 gap-12"
              data-oid="f-uyt9z"
            >
              {/* Cart Items */}
              <div className="lg:col-span-2" data-oid="b_s5hk0">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  data-oid="eeco-2z"
                >
                  <div
                    className="p-6 border-b border-neutral-200"
                    data-oid="l6go0l2"
                  >
                    <h2
                      className="text-2xl font-bold text-neutral-900"
                      data-oid="6hg_n3f"
                    >
                      Course Selection ({cart.length} items)
                    </h2>
                  </div>

                  <AnimatePresence data-oid="bc7c4z-">
                    {cart.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`border-b border-neutral-100 last:border-b-0 ${
                          removingItems.has(item.id) ? "opacity-50" : ""
                        }`}
                        data-oid="xp23gkk"
                      >
                        <div className="p-6" data-oid="dghoklo">
                          <div className="flex gap-6" data-oid="uo:td_h">
                            {/* Course Image */}
                            <div className="flex-shrink-0" data-oid="smhyqnr">
                              <div
                                className="relative w-32 h-32 rounded-xl overflow-hidden bg-neutral-100"
                                data-oid="oolfw35"
                              >
                                <Image
                                  src={item.image || "/placeholder.jpg"}
                                  alt={item.title}
                                  fill
                                  className="object-cover"
                                  data-oid="s24b3u9"
                                />

                                <div
                                  className="absolute top-2 left-2"
                                  data-oid="y8qu_v."
                                >
                                  <span
                                    className="bg-primary text-white text-xs px-2 py-1 rounded-full font-medium"
                                    data-oid="bj:u6p_"
                                  >
                                    {item.type === "Book" ? "Book" : "Course"}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Course Details */}
                            <div className="flex-1 min-w-0" data-oid="ayl.twu">
                              <div
                                className="flex justify-between items-start mb-3"
                                data-oid="r10jfzp"
                              >
                                <div className="flex-1" data-oid="-rdrurp">
                                  <h3
                                    className="text-lg font-bold text-neutral-900 mb-2 line-clamp-2"
                                    data-oid="d3mqtoj"
                                  >
                                    {item.title}
                                  </h3>
                                  <p
                                    className="text-neutral-600 mb-3"
                                    data-oid="_.m9mst"
                                  >
                                    By {item.author || "Assembly.sg"}
                                  </p>

                                  {/* Course Features */}
                                  <div
                                    className="flex items-center gap-4 text-sm text-neutral-500 mb-4"
                                    data-oid="zmkzw:8"
                                  >
                                    <div
                                      className="flex items-center gap-1"
                                      data-oid="wy5-kpx"
                                    >
                                      <Clock
                                        className="w-4 h-4"
                                        data-oid="haltxuq"
                                      />

                                      <span data-oid="3rh:.su">2-3 hours</span>
                                    </div>
                                    <div
                                      className="flex items-center gap-1"
                                      data-oid="4k64p3b"
                                    >
                                      <Users
                                        className="w-4 h-4"
                                        data-oid="0dr5bnr"
                                      />

                                      <span data-oid="jshnrfq">
                                        1,200+ students
                                      </span>
                                    </div>
                                    <div
                                      className="flex items-center gap-1"
                                      data-oid="9wgbp53"
                                    >
                                      <Star
                                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                        data-oid="ld0ethl"
                                      />

                                      <span data-oid="840xsj6">4.8</span>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  className="text-right ml-4"
                                  data-oid="e6e21_4"
                                >
                                  <div
                                    className="text-2xl font-bold text-neutral-900"
                                    data-oid="_ctmonh"
                                  >
                                    {formatPrice(item.price)}
                                  </div>
                                  {item.id === BOOK_ID && (
                                    <div
                                      className="text-sm text-neutral-500 line-through"
                                      data-oid="0jhh6hb"
                                    >
                                      {formatPrice(BOOK_ORIGINAL_PRICE)}
                                    </div>
                                  )}
                                </div>
                              </div>

                              {/* Quantity and Actions */}
                              <div
                                className="flex items-center justify-between"
                                data-oid="0q2yvch"
                              >
                                <div
                                  className="flex items-center gap-4"
                                  data-oid="tk.g:wm"
                                >
                                  {item.type === "Book" ? (
                                    <div
                                      className="flex items-center gap-2"
                                      data-oid="3s:3.q_"
                                    >
                                      <span
                                        className="text-sm text-neutral-600"
                                        data-oid="r6reljz"
                                      >
                                        Quantity:
                                      </span>
                                      <div
                                        className="flex items-center border border-neutral-200 rounded-lg"
                                        data-oid="po1:y4g"
                                      >
                                        <button
                                          onClick={() =>
                                            updateQuantity(
                                              item.id,
                                              Math.max(1, item.quantity - 1),
                                            )
                                          }
                                          className="p-2 hover:bg-neutral-50 transition-colors"
                                          data-oid="08g:vc1"
                                        >
                                          <Minus
                                            className="w-4 h-4"
                                            data-oid="8sf7-f0"
                                          />
                                        </button>
                                        <span
                                          className="px-4 py-2 font-medium"
                                          data-oid="f5ss09x"
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
                                          data-oid="v_acnrw"
                                        >
                                          <Plus
                                            className="w-4 h-4"
                                            data-oid="9ig_u39"
                                          />
                                        </button>
                                      </div>
                                    </div>
                                  ) : (
                                    <div
                                      className="flex items-center gap-2 text-sm text-neutral-600"
                                      data-oid="30d5rpp"
                                    >
                                      <Award
                                        className="w-4 h-4"
                                        data-oid="36b6yn3"
                                      />

                                      <span data-oid="rh8ked8">
                                        Lifetime Access
                                      </span>
                                    </div>
                                  )}
                                </div>

                                <div
                                  className="flex items-center gap-2"
                                  data-oid="6pw_s:b"
                                >
                                  <button
                                    type="button"
                                    className="p-2 text-neutral-400 hover:text-red-500 transition-colors"
                                    data-oid="nn8h5xr"
                                  >
                                    <Heart
                                      className="w-5 h-5"
                                      data-oid="l3l55mz"
                                    />
                                  </button>
                                  <button
                                    onClick={() => handleRemoveItem(item.id)}
                                    type="button"
                                    className="p-2 text-neutral-400 hover:text-red-500 transition-colors"
                                    data-oid="d7twk3a"
                                  >
                                    <Trash
                                      className="w-5 h-5"
                                      data-oid="lfxw0sy"
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
              <div className="lg:col-span-1" data-oid="c7mgvky">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="sticky top-24"
                  data-oid="jd2tuml"
                >
                  <div
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                    data-oid="lfsxxjy"
                  >
                    <div
                      className="p-6 bg-primary text-white"
                      data-oid="cs3zbw7"
                    >
                      <h2 className="text-xl font-bold mb-2" data-oid="ktwvqdo">
                        Order Summary
                      </h2>
                      <p className="text-primary-light" data-oid="gia.u9t">
                        Ready to start learning?
                      </p>
                    </div>

                    <div className="p-6" data-oid="s:g16rr">
                      <div className="space-y-4 mb-6" data-oid="mpeo4vd">
                        <div
                          className="flex justify-between items-center"
                          data-oid="m1mv-5y"
                        >
                          <span className="text-neutral-600" data-oid="istgnb2">
                            Subtotal
                          </span>
                          <span className="font-semibold" data-oid="586q.tk">
                            {formatPrice(subtotal)}
                          </span>
                        </div>

                        {discount > 0 && (
                          <div
                            className="flex justify-between items-center text-green-600"
                            data-oid="hyscknc"
                          >
                            <span data-oid="iu6--vl">Discount</span>
                            <span className="font-semibold" data-oid=".52f5a_">
                              -{formatPrice(discount)}
                            </span>
                          </div>
                        )}

                        <div
                          className="flex justify-between items-center"
                          data-oid="knoxorj"
                        >
                          <span className="text-neutral-600" data-oid="9ce1p_r">
                            Shipping
                          </span>
                          <span className="font-semibold" data-oid="k5gkfj5">
                            {shippingCost > 0
                              ? formatPrice(shippingCost)
                              : "Free"}
                          </span>
                        </div>

                        <div
                          className="border-t border-neutral-200 pt-4"
                          data-oid="yabuz7j"
                        >
                          <div
                            className="flex justify-between items-center"
                            data-oid="9gl4p7v"
                          >
                            <span
                              className="text-lg font-bold text-neutral-900"
                              data-oid="k5yk2n."
                            >
                              Total
                            </span>
                            <span
                              className="text-2xl font-bold text-primary"
                              data-oid="4kfflhb"
                            >
                              {formatPrice(orderTotal)}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Security Features */}
                      <div
                        className="bg-neutral-50 rounded-xl p-4 mb-6"
                        data-oid="c1:wuvp"
                      >
                        <div
                          className="flex items-center gap-3 mb-3"
                          data-oid="m3_rir:"
                        >
                          <Shield
                            className="w-5 h-5 text-green-500"
                            data-oid="py.f.v:"
                          />

                          <span
                            className="font-semibold text-neutral-900"
                            data-oid="uj90.rw"
                          >
                            Secure Checkout
                          </span>
                        </div>
                        <ul
                          className="text-sm text-neutral-600 space-y-1"
                          data-oid="yil67rb"
                        >
                          <li data-oid="tsqfzub">
                            • 30-day money-back guarantee
                          </li>
                          <li data-oid="doj3tcf">
                            • Lifetime access to courses
                          </li>
                          <li data-oid=".dwjwh8">• SSL encrypted payment</li>
                        </ul>
                      </div>

                      <Button
                        onClick={handleCheckout}
                        className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        data-oid=":7rq7-q"
                      >
                        Proceed to Checkout
                        <ArrowRight
                          className="w-5 h-5 ml-2"
                          data-oid="ddgra39"
                        />
                      </Button>

                      <Button
                        onClick={() => router.push("/courses")}
                        variant="outline"
                        className="w-full mt-3 py-3 border-2 border-neutral-200 hover:border-primary hover:text-primary transition-all duration-300"
                        data-oid="uaexuw6"
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
              data-oid="v:76jya"
            >
              <div className="text-center mb-12" data-oid="ay565i5">
                <div
                  className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg mb-6"
                  data-oid="zum16vd"
                >
                  <Sparkles
                    className="w-5 h-5 text-yellow-500"
                    data-oid="hqvteqh"
                  />

                  <span
                    className="font-semibold text-neutral-700"
                    data-oid="5o1b.cf"
                  >
                    Recommended for You
                  </span>
                </div>
                <h2
                  className="text-3xl font-bold text-neutral-900 mb-4"
                  data-oid="p_8qzv3"
                >
                  Complete Your Learning Path
                </h2>
                <p
                  className="text-neutral-600 text-lg max-w-2xl mx-auto"
                  data-oid="5f9t4bj"
                >
                  Based on your selections, these courses will help you build a
                  comprehensive understanding of real estate investment
                </p>
              </div>

              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                data-oid="rme3a4-"
              >
                {recommendedCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    data-oid="em.ldqf"
                  >
                    <CourseCard course={course} data-oid="l-7jwa7" />
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
