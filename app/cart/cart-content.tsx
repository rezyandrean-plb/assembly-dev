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
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const { isLoggedIn, user } = useAuth();
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

  // Generate order details for free checkout
  const generateOrderDetails = () => {
    const orderId = `ORD-${Date.now()}${Math.random().toString(36).substr(2, 9).toUpperCase()}-TEST123`;
    const orderDate = new Date().toISOString();

    const orderItems = cart.map((item) => ({
      id: item.id,
      title: item.title,
      price:
        item.id === BOOK_ID
          ? BOOK_DISCOUNTED_PRICE
          : item.price.toString().toLowerCase() === "free"
            ? 0
            : parseFloat(item.price.toString().replace(/[^0-9.]/g, "")) || 0,
      type: item.type as "course" | "book" | "Course" | "Book",
      quantity: item.quantity,
      image: item.image,
      author: item.author,
    }));

    const customerInfo = {
      name: user?.name || "John Doe",
      email: user?.email || "john.doe@example.com",
      phone: "+65 9123 4567",
      address: "123 Example Street, Singapore 123456",
    };

    return {
      orderId,
      orderDate,
      items: orderItems,
      totalAmount: orderTotal,
      customerInfo,
      hasBooks: hasBook,
      trackingNumber: undefined,
    };
  };

  const handleCheckout = () => {
    if (!isLoggedIn) {
      setIsLoginModalOpen(true);
      return;
    }

    // Check if all items are free (total is $0)
    if (orderTotal === 0) {
      // Generate and store order details for free items
      const orderDetails = generateOrderDetails();
      sessionStorage.setItem("orderDetails", JSON.stringify(orderDetails));

      // All items are free, clear cart and go directly to order received
      clearCart();
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
        data-oid="ogq43s2"
      >
        <div
          className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"
          data-oid="17ga3q4"
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
            // Generate and store order details for free items
            const orderDetails = generateOrderDetails();
            sessionStorage.setItem(
              "orderDetails",
              JSON.stringify(orderDetails),
            );
            clearCart();
            router.push("/order-received");
          } else if (hasBook) {
            router.push("/checkout/delivery");
          } else {
            router.push("/checkout/payment");
          }
        }}
        data-oid="_5.onsn"
      />

      <div
        className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary/5"
        data-oid="3:ngaw9"
      >
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24"
          data-oid="3b-bhw6"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
            data-oid="jt5e2yn"
          >
            <div
              className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg mb-6"
              data-oid="cnnol86"
            >
              <ShoppingBag
                className="w-6 h-6 text-primary"
                data-oid=":aqoyw_"
              />

              <span
                className="font-semibold text-neutral-700"
                data-oid="bf1dpu-"
              >
                Shopping Cart
              </span>
              <span
                className="bg-primary text-white text-sm px-2 py-1 rounded-full"
                data-oid="c0ynav:"
              >
                {cart.length}
              </span>
            </div>
            <h1
              className="text-4xl font-bold text-neutral-900 mb-4"
              data-oid="gnb5gm6"
            >
              Your Learning Journey Awaits
            </h1>
            <p
              className="text-xl text-neutral-600 max-w-2xl mx-auto"
              data-oid="adrbi3j"
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
              data-oid="u84xht5"
            >
              <div
                className="bg-white rounded-3xl shadow-xl p-12"
                data-oid="krkar.c"
              >
                <div
                  className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8"
                  data-oid="h840m0_"
                >
                  <ShoppingBag
                    className="w-12 h-12 text-primary"
                    data-oid="wijq56e"
                  />
                </div>
                <h2
                  className="text-3xl font-bold text-neutral-900 mb-4"
                  data-oid="holkqql"
                >
                  Your cart is empty
                </h2>
                <p className="text-neutral-600 mb-8 text-lg" data-oid=":l6oxaz">
                  Discover our expert-led courses and start building your real
                  estate investment portfolio today.
                </p>
                <Button
                  onClick={() => router.push("/courses")}
                  className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  data-oid="lqqkuq9"
                >
                  Explore Courses
                  <ArrowRight className="w-5 h-5 ml-2" data-oid="7qjbqn2" />
                </Button>
              </div>
            </motion.div>
          ) : (
            <div
              className="grid grid-cols-1 lg:grid-cols-3 gap-12"
              data-oid="mk7gqws"
            >
              {/* Cart Items */}
              <div className="lg:col-span-2" data-oid="n:-8_zf">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  data-oid="9v.qhm:"
                >
                  <div
                    className="p-6 border-b border-neutral-200"
                    data-oid="b-4-g97"
                  >
                    <h2
                      className="text-2xl font-bold text-neutral-900"
                      data-oid="qemxl1."
                    >
                      Course Selection ({cart.length} items)
                    </h2>
                  </div>

                  <AnimatePresence data-oid="mrw:3d5">
                    {cart.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`border-b border-neutral-100 last:border-b-0 ${
                          removingItems.has(item.id) ? "opacity-50" : ""
                        }`}
                        data-oid="t_z35vt"
                      >
                        <div className="p-6" data-oid="zba1m-s">
                          <div className="flex gap-6" data-oid="5_yiki:">
                            {/* Course Image */}
                            <div className="flex-shrink-0" data-oid="thnusx-">
                              <div
                                className="relative w-32 h-32 rounded-xl overflow-hidden bg-neutral-100"
                                data-oid="5zopgwy"
                              >
                                {item.type === "Book" ? (
                                  <div
                                    className="w-full h-full bg-gray-100 flex items-center justify-center rounded-lg"
                                    data-oid="qiygth_"
                                  >
                                    <Image
                                      src="/images/PLB Book Front Cover_FA.jpg"
                                      alt="Book Cover"
                                      width={80}
                                      height={120}
                                      className="object-contain"
                                      data-oid="kbw.t1w"
                                    />
                                  </div>
                                ) : (
                                  <Image
                                    src={item.image || "/placeholder.jpg"}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                    data-oid="svxta:b"
                                  />
                                )}

                                <div
                                  className="absolute top-2 left-2"
                                  data-oid="7_nerwl"
                                >
                                  <span
                                    className="bg-primary text-white text-xs px-2 py-1 rounded-full font-medium"
                                    data-oid="9s36ilf"
                                  >
                                    {item.type === "Book" ? "Book" : "Course"}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Course Details */}
                            <div className="flex-1 min-w-0" data-oid="iirwc49">
                              <div
                                className="flex justify-between items-start mb-3"
                                data-oid="0b.cc6r"
                              >
                                <div className="flex-1" data-oid=":d6ym10">
                                  <h3
                                    className="text-lg font-bold text-neutral-900 mb-2 line-clamp-2"
                                    data-oid="yjjz06m"
                                  >
                                    {item.title}
                                  </h3>
                                  <p
                                    className="text-neutral-600 mb-3"
                                    data-oid="_88neut"
                                  >
                                    By {item.author || "Assembly.sg"}
                                  </p>

                                  {/* Course Features */}
                                  <div
                                    className="flex items-center gap-4 text-sm text-neutral-500 mb-4"
                                    data-oid="9dbc0zs"
                                  >
                                    <div
                                      className="flex items-center gap-1"
                                      data-oid="fexxov6"
                                    >
                                      <Clock
                                        className="w-4 h-4"
                                        data-oid="2rh8:y1"
                                      />

                                      <span data-oid="u4ezlmz">2-3 hours</span>
                                    </div>
                                    <div
                                      className="flex items-center gap-1"
                                      data-oid="nof00ll"
                                    >
                                      <Users
                                        className="w-4 h-4"
                                        data-oid="40da:7w"
                                      />

                                      <span data-oid="w92ic9v">
                                        1,200+ students
                                      </span>
                                    </div>
                                    <div
                                      className="flex items-center gap-1"
                                      data-oid="mk6e9-o"
                                    >
                                      <Star
                                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                        data-oid="egg04sp"
                                      />

                                      <span data-oid="4hs6yk5">4.8</span>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  className="text-right ml-4"
                                  data-oid="w483_zl"
                                >
                                  <div
                                    className="text-2xl font-bold text-neutral-900"
                                    data-oid="_zo8yg2"
                                  >
                                    {formatPrice(item.price)}
                                  </div>
                                  {item.id === BOOK_ID && (
                                    <div
                                      className="text-sm text-neutral-500 line-through"
                                      data-oid="t_laaui"
                                    >
                                      {formatPrice(BOOK_ORIGINAL_PRICE)}
                                    </div>
                                  )}
                                </div>
                              </div>

                              {/* Quantity and Actions */}
                              <div
                                className="flex items-center justify-between"
                                data-oid="nqaly8w"
                              >
                                <div
                                  className="flex items-center gap-4"
                                  data-oid="1sgj1md"
                                >
                                  {item.type === "Book" ? (
                                    <div
                                      className="flex items-center gap-2"
                                      data-oid="-u.s1ms"
                                    >
                                      <span
                                        className="text-sm text-neutral-600"
                                        data-oid="1ktjp1n"
                                      >
                                        Quantity:
                                      </span>
                                      <div
                                        className="flex items-center border border-neutral-200 rounded-lg"
                                        data-oid="0w2m.uc"
                                      >
                                        <button
                                          onClick={() =>
                                            updateQuantity(
                                              item.id,
                                              Math.max(1, item.quantity - 1),
                                            )
                                          }
                                          className="p-2 hover:bg-neutral-50 transition-colors"
                                          data-oid="tnosnf_"
                                        >
                                          <Minus
                                            className="w-4 h-4"
                                            data-oid="yq5ewys"
                                          />
                                        </button>
                                        <span
                                          className="px-4 py-2 font-medium"
                                          data-oid="h3idrrr"
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
                                          data-oid="rf:rw2r"
                                        >
                                          <Plus
                                            className="w-4 h-4"
                                            data-oid="m3175u."
                                          />
                                        </button>
                                      </div>
                                    </div>
                                  ) : (
                                    <div
                                      className="flex items-center gap-2 text-sm text-neutral-600"
                                      data-oid="3leo34."
                                    >
                                      <Award
                                        className="w-4 h-4"
                                        data-oid="xyyv.3b"
                                      />

                                      <span data-oid="crjnazm">
                                        Lifetime Access
                                      </span>
                                    </div>
                                  )}
                                </div>

                                <div
                                  className="flex items-center gap-2"
                                  data-oid="by:_0da"
                                >
                                  <button
                                    type="button"
                                    className="p-2 text-neutral-400 hover:text-red-500 transition-colors"
                                    data-oid="pro.azf"
                                  >
                                    <Heart
                                      className="w-5 h-5"
                                      data-oid="1xetgf8"
                                    />
                                  </button>
                                  <button
                                    onClick={() => handleRemoveItem(item.id)}
                                    type="button"
                                    className="p-2 text-neutral-400 hover:text-red-500 transition-colors"
                                    data-oid=".r-fwp7"
                                  >
                                    <Trash
                                      className="w-5 h-5"
                                      data-oid="remblk."
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
              <div className="lg:col-span-1" data-oid="x0l6iel">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="sticky top-24"
                  data-oid="y.l9_ar"
                >
                  <div
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                    data-oid="5hbrn7k"
                  >
                    <div
                      className="p-6 bg-primary text-white"
                      data-oid="r90_nit"
                    >
                      <h2 className="text-xl font-bold mb-2" data-oid="gowg.u6">
                        Order Summary
                      </h2>
                      <p className="text-grey-400" data-oid="_hvkqg9">
                        Ready to start learning?
                      </p>
                    </div>

                    <div className="p-6" data-oid="9twv2ri">
                      <div className="space-y-4 mb-6" data-oid="fcbsyhe">
                        <div
                          className="flex justify-between items-center"
                          data-oid="qscdp1w"
                        >
                          <span className="text-neutral-600" data-oid="1unewy9">
                            Subtotal
                          </span>
                          <span className="font-semibold" data-oid="oiwac.4">
                            {formatPrice(subtotal)}
                          </span>
                        </div>

                        {discount > 0 && (
                          <div
                            className="flex justify-between items-center text-green-600"
                            data-oid="sh_t.1-"
                          >
                            <span data-oid="diao-8n">Discount</span>
                            <span className="font-semibold" data-oid="r-igltm">
                              -{formatPrice(discount)}
                            </span>
                          </div>
                        )}

                        <div
                          className="flex justify-between items-center"
                          data-oid="8xjokwp"
                        >
                          <span className="text-neutral-600" data-oid="uhypltp">
                            Shipping
                          </span>
                          <span className="font-semibold" data-oid="043ue:c">
                            {shippingCost > 0
                              ? formatPrice(shippingCost)
                              : "Free"}
                          </span>
                        </div>

                        <div
                          className="border-t border-neutral-200 pt-4"
                          data-oid="0l5t9ir"
                        >
                          <div
                            className="flex justify-between items-center"
                            data-oid="gnr3_w1"
                          >
                            <span
                              className="text-lg font-bold text-neutral-900"
                              data-oid="_23.x5y"
                            >
                              Total
                            </span>
                            <span
                              className="text-2xl font-bold text-primary"
                              data-oid="xwd7an-"
                            >
                              {formatPrice(orderTotal)}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Security Features */}
                      <div
                        className="bg-neutral-50 rounded-xl p-4 mb-6"
                        data-oid="5:lhzl7"
                      >
                        <div
                          className="flex items-center gap-3 mb-3"
                          data-oid="94plpwy"
                        >
                          <Shield
                            className="w-5 h-5 text-green-500"
                            data-oid="j40q.iu"
                          />

                          <span
                            className="font-semibold text-neutral-900"
                            data-oid="nvnl539"
                          >
                            Secure Checkout
                          </span>
                        </div>
                        <ul
                          className="text-sm text-neutral-600 space-y-1"
                          data-oid="c55y21u"
                        >
                          <li data-oid="0.g2:2h">
                            • Lifetime access to courses
                          </li>
                          <li data-oid="pj:opg3">• SSL encrypted payment</li>
                        </ul>
                      </div>

                      <Button
                        onClick={handleCheckout}
                        className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        data-oid="5ped2xi"
                      >
                        Proceed to Checkout
                        <ArrowRight
                          className="w-5 h-5 ml-2"
                          data-oid="6r9c7he"
                        />
                      </Button>

                      <Button
                        onClick={() => router.push("/courses")}
                        variant="outline"
                        className="w-full mt-3 py-3 border-2 border-neutral-200 hover:border-primary hover:text-primary transition-all duration-300"
                        data-oid="88ecj2j"
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
              data-oid="i5g05s1"
            >
              <div className="text-center mb-12" data-oid=".n3xfah">
                <div
                  className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg mb-6"
                  data-oid="_x:-pd7"
                >
                  <Sparkles
                    className="w-5 h-5 text-yellow-500"
                    data-oid="0olozlr"
                  />

                  <span
                    className="font-semibold text-neutral-700"
                    data-oid="6tgsn.y"
                  >
                    Recommended for You
                  </span>
                </div>
                <h2
                  className="text-3xl font-bold text-neutral-900 mb-4"
                  data-oid="72._oux"
                >
                  Complete Your Learning Path
                </h2>
                <p
                  className="text-neutral-600 text-lg max-w-2xl mx-auto"
                  data-oid="fcy-y0-"
                >
                  Based on your selections, these courses will help you build a
                  comprehensive understanding of real estate investment
                </p>
              </div>

              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                data-oid="emxhejp"
              >
                {recommendedCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    data-oid="uavlk0q"
                  >
                    <CourseCard course={course} data-oid="293:xgt" />
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
