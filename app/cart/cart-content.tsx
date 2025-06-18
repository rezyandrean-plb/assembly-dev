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
        data-oid="x8n7ra3"
      >
        <div
          className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"
          data-oid="o2uhg9c"
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
        data-oid=":3hrpx9"
      />

      <div
        className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary/5"
        data-oid="gos3i7s"
      >
        <Navbar data-oid="hsvaihb" />

        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24"
          data-oid="2w_4d3y"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
            data-oid="gksmr82"
          >
            <div
              className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg mb-6"
              data-oid="16zyb-j"
            >
              <ShoppingBag
                className="w-6 h-6 text-primary"
                data-oid="65n:hq:"
              />
              <span
                className="font-semibold text-neutral-700"
                data-oid="v2n:470"
              >
                Shopping Cart
              </span>
              <span
                className="bg-primary text-white text-sm px-2 py-1 rounded-full"
                data-oid=".t9edqj"
              >
                {cart.length}
              </span>
            </div>
            <h1
              className="text-4xl font-bold text-neutral-900 mb-4"
              data-oid="i6dqtbt"
            >
              Your Learning Journey Awaits
            </h1>
            <p
              className="text-xl text-neutral-600 max-w-2xl mx-auto"
              data-oid="12qsh36"
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
              data-oid="_ao3ssb"
            >
              <div
                className="bg-white rounded-3xl shadow-xl p-12"
                data-oid="3cu.aqp"
              >
                <div
                  className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8"
                  data-oid="3ckf-p7"
                >
                  <ShoppingBag
                    className="w-12 h-12 text-primary"
                    data-oid="ej3kp27"
                  />
                </div>
                <h2
                  className="text-3xl font-bold text-neutral-900 mb-4"
                  data-oid="neyujm_"
                >
                  Your cart is empty
                </h2>
                <p className="text-neutral-600 mb-8 text-lg" data-oid="nasslvg">
                  Discover our expert-led courses and start building your real
                  estate investment portfolio today.
                </p>
                <Button
                  onClick={() => router.push("/courses")}
                  className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  data-oid="35a6ld7"
                >
                  Explore Courses
                  <ArrowRight className="w-5 h-5 ml-2" data-oid="c--ar0n" />
                </Button>
              </div>
            </motion.div>
          ) : (
            <div
              className="grid grid-cols-1 lg:grid-cols-3 gap-12"
              data-oid="p71oan9"
            >
              {/* Cart Items */}
              <div className="lg:col-span-2" data-oid="qrrv1-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  data-oid="j610ypt"
                >
                  <div
                    className="p-6 border-b border-neutral-200"
                    data-oid="ag1-vgr"
                  >
                    <h2
                      className="text-2xl font-bold text-neutral-900"
                      data-oid=".yghkvv"
                    >
                      Course Selection ({cart.length} items)
                    </h2>
                  </div>

                  <AnimatePresence data-oid="iijy4ab">
                    {cart.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`border-b border-neutral-100 last:border-b-0 ${
                          removingItems.has(item.id) ? "opacity-50" : ""
                        }`}
                        data-oid="k5lxdqr"
                      >
                        <div className="p-6" data-oid="1:qt47z">
                          <div className="flex gap-6" data-oid="2mggo-c">
                            {/* Course Image */}
                            <div className="flex-shrink-0" data-oid="nn60log">
                              <div
                                className="relative w-32 h-32 rounded-xl overflow-hidden bg-neutral-100"
                                data-oid="tuom4t_"
                              >
                                <Image
                                  src={item.image || "/placeholder.jpg"}
                                  alt={item.title}
                                  fill
                                  className="object-cover"
                                  data-oid="e.9_9eb"
                                />

                                <div
                                  className="absolute top-2 left-2"
                                  data-oid="t3pw-te"
                                >
                                  <span
                                    className="bg-primary text-white text-xs px-2 py-1 rounded-full font-medium"
                                    data-oid="pw4cq9e"
                                  >
                                    {item.type === "Book" ? "Book" : "Course"}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Course Details */}
                            <div className="flex-1 min-w-0" data-oid="m:moqd_">
                              <div
                                className="flex justify-between items-start mb-3"
                                data-oid="l6h-j37"
                              >
                                <div className="flex-1" data-oid="7m_awm9">
                                  <h3
                                    className="text-lg font-bold text-neutral-900 mb-2 line-clamp-2"
                                    data-oid=".p.x1r1"
                                  >
                                    {item.title}
                                  </h3>
                                  <p
                                    className="text-neutral-600 mb-3"
                                    data-oid="dgx44h0"
                                  >
                                    By {item.instructor || "Assembly.sg"}
                                  </p>

                                  {/* Course Features */}
                                  <div
                                    className="flex items-center gap-4 text-sm text-neutral-500 mb-4"
                                    data-oid="cacjx3q"
                                  >
                                    <div
                                      className="flex items-center gap-1"
                                      data-oid="q2mlffp"
                                    >
                                      <Clock
                                        className="w-4 h-4"
                                        data-oid=".-q-f1x"
                                      />
                                      <span data-oid="5uljg21">2-3 hours</span>
                                    </div>
                                    <div
                                      className="flex items-center gap-1"
                                      data-oid="_i3euv1"
                                    >
                                      <Users
                                        className="w-4 h-4"
                                        data-oid="era:f.g"
                                      />
                                      <span data-oid="y5spsj4">
                                        1,200+ students
                                      </span>
                                    </div>
                                    <div
                                      className="flex items-center gap-1"
                                      data-oid="yt_-f8z"
                                    >
                                      <Star
                                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                        data-oid="n-b71dv"
                                      />
                                      <span data-oid="qpb0.um">4.8</span>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  className="text-right ml-4"
                                  data-oid="9fj_3oz"
                                >
                                  <div
                                    className="text-2xl font-bold text-neutral-900"
                                    data-oid="_tbrguz"
                                  >
                                    {formatPrice(item.price)}
                                  </div>
                                  {item.id === BOOK_ID && (
                                    <div
                                      className="text-sm text-neutral-500 line-through"
                                      data-oid="-:imc41"
                                    >
                                      {formatPrice(BOOK_ORIGINAL_PRICE)}
                                    </div>
                                  )}
                                </div>
                              </div>

                              {/* Quantity and Actions */}
                              <div
                                className="flex items-center justify-between"
                                data-oid="ngjl0ve"
                              >
                                <div
                                  className="flex items-center gap-4"
                                  data-oid="audzanv"
                                >
                                  {item.type === "Book" ? (
                                    <div
                                      className="flex items-center gap-2"
                                      data-oid="e_4o5c0"
                                    >
                                      <span
                                        className="text-sm text-neutral-600"
                                        data-oid="lis3tay"
                                      >
                                        Quantity:
                                      </span>
                                      <div
                                        className="flex items-center border border-neutral-200 rounded-lg"
                                        data-oid="3gj3as9"
                                      >
                                        <button
                                          onClick={() =>
                                            updateQuantity(
                                              item.id,
                                              Math.max(1, item.quantity - 1),
                                            )
                                          }
                                          className="p-2 hover:bg-neutral-50 transition-colors"
                                          data-oid="u46cpfz"
                                        >
                                          <Minus
                                            className="w-4 h-4"
                                            data-oid="irsai6l"
                                          />
                                        </button>
                                        <span
                                          className="px-4 py-2 font-medium"
                                          data-oid="n33590i"
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
                                          data-oid="7njk3:6"
                                        >
                                          <Plus
                                            className="w-4 h-4"
                                            data-oid="21v.fso"
                                          />
                                        </button>
                                      </div>
                                    </div>
                                  ) : (
                                    <div
                                      className="flex items-center gap-2 text-sm text-neutral-600"
                                      data-oid="se_ig3."
                                    >
                                      <Award
                                        className="w-4 h-4"
                                        data-oid=".0lwkp2"
                                      />
                                      <span data-oid="3ir86gb">
                                        Lifetime Access
                                      </span>
                                    </div>
                                  )}
                                </div>

                                <div
                                  className="flex items-center gap-2"
                                  data-oid=".o93ry4"
                                >
                                  <button
                                    type="button"
                                    className="p-2 text-neutral-400 hover:text-red-500 transition-colors"
                                    data-oid="sncypi2"
                                  >
                                    <Heart
                                      className="w-5 h-5"
                                      data-oid="k4q0:xs"
                                    />
                                  </button>
                                  <button
                                    onClick={() => handleRemoveItem(item.id)}
                                    type="button"
                                    className="p-2 text-neutral-400 hover:text-red-500 transition-colors"
                                    data-oid="nxxb79y"
                                  >
                                    <Trash
                                      className="w-5 h-5"
                                      data-oid="5u3jtw3"
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
              <div className="lg:col-span-1" data-oid="2r0no3h">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="sticky top-24"
                  data-oid="740m:b9"
                >
                  <div
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                    data-oid="wti2rbq"
                  >
                    <div
                      className="p-6 bg-primary text-white"
                      data-oid="2u08yab"
                    >
                      <h2 className="text-xl font-bold mb-2" data-oid="-hyhp6x">
                        Order Summary
                      </h2>
                      <p className="text-primary-light" data-oid="o66g_ks">
                        Ready to start learning?
                      </p>
                    </div>

                    <div className="p-6" data-oid="5ban46j">
                      <div className="space-y-4 mb-6" data-oid="vd--4jt">
                        <div
                          className="flex justify-between items-center"
                          data-oid="vusu5ws"
                        >
                          <span className="text-neutral-600" data-oid="sdfjf8o">
                            Subtotal
                          </span>
                          <span className="font-semibold" data-oid=":1mnhl-">
                            {formatPrice(subtotal)}
                          </span>
                        </div>

                        {discount > 0 && (
                          <div
                            className="flex justify-between items-center text-green-600"
                            data-oid="p6-b0tp"
                          >
                            <span data-oid="10.dqlo">Discount</span>
                            <span className="font-semibold" data-oid="v8.7j82">
                              -{formatPrice(discount)}
                            </span>
                          </div>
                        )}

                        <div
                          className="flex justify-between items-center"
                          data-oid="7eaj7ou"
                        >
                          <span className="text-neutral-600" data-oid="osd7al5">
                            Shipping
                          </span>
                          <span className="font-semibold" data-oid="1jbhu.z">
                            {shippingCost > 0
                              ? formatPrice(shippingCost)
                              : "Free"}
                          </span>
                        </div>

                        <div
                          className="border-t border-neutral-200 pt-4"
                          data-oid="kyao3ht"
                        >
                          <div
                            className="flex justify-between items-center"
                            data-oid="c9k0uwr"
                          >
                            <span
                              className="text-lg font-bold text-neutral-900"
                              data-oid="59n0wa9"
                            >
                              Total
                            </span>
                            <span
                              className="text-2xl font-bold text-primary"
                              data-oid="8-enlww"
                            >
                              {formatPrice(orderTotal)}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Security Features */}
                      <div
                        className="bg-neutral-50 rounded-xl p-4 mb-6"
                        data-oid="ei:2dmh"
                      >
                        <div
                          className="flex items-center gap-3 mb-3"
                          data-oid="ptef89r"
                        >
                          <Shield
                            className="w-5 h-5 text-green-500"
                            data-oid="it7gk.k"
                          />
                          <span
                            className="font-semibold text-neutral-900"
                            data-oid="cuyv4do"
                          >
                            Secure Checkout
                          </span>
                        </div>
                        <ul
                          className="text-sm text-neutral-600 space-y-1"
                          data-oid="65h3rf3"
                        >
                          <li data-oid="gd2kjpu">
                            • 30-day money-back guarantee
                          </li>
                          <li data-oid="1yum.j3">
                            • Lifetime access to courses
                          </li>
                          <li data-oid="8i6q-ov">• SSL encrypted payment</li>
                        </ul>
                      </div>

                      <Button
                        onClick={handleCheckout}
                        className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        data-oid="qbba60k"
                      >
                        Proceed to Checkout
                        <ArrowRight
                          className="w-5 h-5 ml-2"
                          data-oid="aelm7ls"
                        />
                      </Button>

                      <Button
                        onClick={() => router.push("/courses")}
                        variant="outline"
                        className="w-full mt-3 py-3 border-2 border-neutral-200 hover:border-primary hover:text-primary transition-all duration-300"
                        data-oid=".mo-5.w"
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
              data-oid="p6cjcju"
            >
              <div className="text-center mb-12" data-oid=":e4gvx5">
                <div
                  className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg mb-6"
                  data-oid="i3zt5ud"
                >
                  <Sparkles
                    className="w-5 h-5 text-yellow-500"
                    data-oid="6w7w4h3"
                  />
                  <span
                    className="font-semibold text-neutral-700"
                    data-oid="6-uqf2q"
                  >
                    Recommended for You
                  </span>
                </div>
                <h2
                  className="text-3xl font-bold text-neutral-900 mb-4"
                  data-oid="pkbacxi"
                >
                  Complete Your Learning Path
                </h2>
                <p
                  className="text-neutral-600 text-lg max-w-2xl mx-auto"
                  data-oid="xz-s55o"
                >
                  Based on your selections, these courses will help you build a
                  comprehensive understanding of real estate investment
                </p>
              </div>

              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                data-oid="d63rbti"
              >
                {recommendedCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    data-oid="cfcz27_"
                  >
                    <CourseCard course={course} data-oid="j_n38kh" />
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
