"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/cart-context";
import { Button } from "@/components/ui/button";
import { Trash, Heart } from "lucide-react";
import { courses as allCourses } from "@/app/data/courses";
import CourseCard from "@/components/course-card";
import Navbar from "@/components/navbar";
import { useAuth } from "@/context/auth-context";
import LoginModal from "@/app/components/login-modal";
import Stepper from "../checkout/components/stepper";

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
      price = BOOK_ORIGINAL_PRICE; // Always use original price for subtotal
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

  const recommendedCourses = allCourses
    .filter((course) => !cart.some((cartItem) => cartItem.id === course.id))
    .slice(0, 4);

  if (!isMounted) {
    return (
      <div
        className="min-h-screen bg-gray-50 flex items-center justify-center"
        data-oid="bnke479"
      >
        <div
          className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#123B79]"
          data-oid="pob6mr6"
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
        data-oid="us7ga.m"
      />

      <div className="bg-gray-50" data-oid="0u9-6fa">
        <Navbar data-oid="g3n5g:b" />
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24"
          data-oid="5m1zf.6"
        >
          <Stepper currentStep={1} data-oid="qq-cs5b" />
          <h1
            className="text-3xl font-bold text-gray-900 my-8"
            data-oid="jvyw7il"
          >
            Shopping Cart
          </h1>
          {cart.length === 0 ? (
            <div
              className="text-center py-20 bg-white rounded-lg shadow-sm"
              data-oid="dqjo.4h"
            >
              <h2
                className="text-2xl font-semibold text-gray-800 mb-2"
                data-oid="y8a61j3"
              >
                Your cart is empty
              </h2>
              <p className="text-gray-600 mb-6" data-oid="riwlxn0">
                Looks like you haven't added anything to your cart yet.
              </p>
              <Button
                onClick={() => router.push("/courses")}
                className="bg-[#123B79] hover:bg-[#0A2A5E]"
                data-oid="24c1tce"
              >
                Browse Courses
              </Button>
            </div>
          ) : (
            <div
              className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-start"
              data-oid="bq7yu.c"
            >
              <section
                aria-labelledby="cart-heading"
                className="lg:col-span-8"
                data-oid="em1kifn"
              >
                <ul
                  role="list"
                  className="divide-y divide-gray-200 border-t border-b border-gray-200"
                  data-oid="c.dh_mv"
                >
                  {cart.map((item) => (
                    <li
                      key={item.id}
                      className="flex py-6 px-4 bg-white"
                      data-oid="lcxv0gt"
                    >
                      <div className="flex-shrink-0" data-oid="xwyr82y">
                        <Image
                          src={item.image || "/placeholder.jpg"}
                          alt={item.title}
                          width={160}
                          height={160}
                          className="w-40 h-40 rounded-md object-contain"
                          data-oid="e3nzvii"
                        />
                      </div>
                      <div
                        className="ml-4 flex-1 flex flex-col justify-between sm:ml-6"
                        data-oid="tfm23_0"
                      >
                        <div
                          className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6"
                          data-oid="4d101.o"
                        >
                          <div data-oid="65wsx3k">
                            <h3
                              className="text-lg font-semibold text-gray-800"
                              data-oid="rs-qoq."
                            >
                              <a
                                href={`/courses/${item.slug}`}
                                className="hover:text-[#123B79]"
                                data-oid="w2fagg."
                              >
                                {item.title}
                              </a>
                            </h3>
                            <p
                              className="mt-1 text-sm text-gray-500"
                              data-oid="ycnso6i"
                            >
                              By {item.instructor}
                            </p>
                          </div>
                          <div
                            className="mt-4 sm:mt-0 sm:text-right"
                            data-oid="..jr4u4"
                          >
                            <p
                              className="text-lg font-bold text-gray-900"
                              data-oid="_i0kxck"
                            >
                              {formatPrice(item.price)}
                            </p>
                          </div>
                        </div>
                        <div
                          className="mt-4 flex items-center justify-between"
                          data-oid="s0qgy9k"
                        >
                          <div className="flex items-center" data-oid=":_w0rps">
                            <label
                              htmlFor={`quantity-${item.id}`}
                              className="sr-only"
                              data-oid="8r.nt39"
                            >
                              Quantity
                            </label>
                            <select
                              id={`quantity-${item.id}`}
                              name={`quantity-${item.id}`}
                              value={item.quantity}
                              onChange={(e) =>
                                updateQuantity(
                                  item.id,
                                  parseInt(e.target.value),
                                )
                              }
                              disabled={item.type !== "Book"}
                              className="block max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
                              data-oid="9oqp9ts"
                            >
                              {item.type === "Book" ? (
                                [...Array(10).keys()].map((i) => (
                                  <option
                                    key={i + 1}
                                    value={i + 1}
                                    data-oid="rc4eqwk"
                                  >
                                    {i + 1}
                                  </option>
                                ))
                              ) : (
                                <option value="1" data-oid="2ctd.zj">
                                  1
                                </option>
                              )}
                            </select>
                          </div>
                          <div
                            className="flex items-center space-x-4"
                            data-oid="a_57z2y"
                          >
                            <button
                              type="button"
                              className="text-gray-400 hover:text-gray-600"
                              data-oid="8r0ir2j"
                            >
                              <Heart className="h-5 w-5" data-oid="vjq5a1s" />
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              type="button"
                              className="text-red-500 hover:text-red-700 font-medium"
                              data-oid="5xn88r."
                            >
                              <Trash className="h-5 w-5" data-oid="4f7p3hx" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Order summary */}
              <section
                aria-labelledby="summary-heading"
                className="mt-16 bg-white rounded-lg shadow-sm lg:col-span-4 lg:mt-0 lg:sticky lg:top-28 p-6"
                data-oid="5e61l:z"
              >
                <h2
                  id="summary-heading"
                  className="text-xl font-bold text-gray-900 border-b pb-4"
                  data-oid="_-hiw9f"
                >
                  Order Summary
                </h2>
                <div className="py-4 space-y-4" data-oid="jz.v0_r">
                  <div
                    className="flex items-center justify-between"
                    data-oid="g-66lg4"
                  >
                    <dt className="text-sm text-gray-600" data-oid="m_elvb9">
                      Subtotal
                    </dt>
                    <dd
                      className="text-sm font-medium text-gray-900"
                      data-oid="h1i2x.."
                    >
                      {formatPrice(subtotal)}
                    </dd>
                  </div>
                  {discount > 0 && (
                    <div
                      className="flex items-center justify-between text-sm"
                      data-oid="-wn3tyd"
                    >
                      <dt className="text-red-600" data-oid="_fi66:s">
                        Discount
                      </dt>
                      <dd
                        className="font-medium text-red-600"
                        data-oid="sdoofo1"
                      >
                        -{formatPrice(discount)}
                      </dd>
                    </div>
                  )}
                  <div
                    className="flex items-center justify-between"
                    data-oid="_3glr5r"
                  >
                    <dt className="text-sm text-gray-600" data-oid="evv3q-7">
                      Shipping
                    </dt>
                    <dd
                      className="text-sm font-medium text-gray-900"
                      data-oid="6rx2dfw"
                    >
                      {formatPrice(shippingCost)}
                    </dd>
                  </div>
                </div>
                <div
                  className="flex items-center justify-between border-t pt-4"
                  data-oid="q4whd74"
                >
                  <dt
                    className="text-base font-bold text-gray-900"
                    data-oid="zyeqr3y"
                  >
                    Order Total
                  </dt>
                  <dd
                    className="text-base font-bold text-gray-900"
                    data-oid="qhwmivc"
                  >
                    {formatPrice(orderTotal)}
                  </dd>
                </div>

                <div className="mt-6" data-oid="_ojnvj1">
                  <Button
                    onClick={handleCheckout}
                    className="w-full bg-red-600 hover:bg-red-700 text-white text-base font-bold py-3"
                    data-oid="hlro:m6"
                  >
                    Checkout
                  </Button>
                </div>
                <div className="mt-4" data-oid="gp4h7cv">
                  <Button
                    onClick={() => router.push("/courses")}
                    variant="outline"
                    className="w-full text-base font-bold py-3"
                    data-oid="pwpsfwj"
                  >
                    Continue Shopping
                  </Button>
                </div>
              </section>
            </div>
          )}

          {/* Recommended Courses Section */}
          <div className="mt-24" data-oid=":gy3bra">
            <h2
              className="text-2xl font-bold text-gray-900 mb-6 text-center"
              data-oid="qnxx:9s"
            >
              Similar Course You May Like
            </h2>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
              data-oid="qiho0r4"
            >
              {recommendedCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  data-oid="w6trygu"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
