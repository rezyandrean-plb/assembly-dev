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
        data-oid="gndbf:o"
      >
        <div
          className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#123B79]"
          data-oid="ljlrwx3"
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
        data-oid="5d7kcbb"
      />

      <div className="bg-gray-50" data-oid="ut9u_y3">
        <Navbar data-oid="iuj4l_i" />
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24"
          data-oid="ae2nwfw"
        >
          <Stepper currentStep={1} data-oid="s:6uw7z" />
          <h1
            className="text-3xl font-bold text-gray-900 my-8"
            data-oid="em3vs:w"
          >
            Shopping Cart
          </h1>
          {cart.length === 0 ? (
            <div
              className="text-center py-20 bg-white rounded-lg shadow-sm"
              data-oid="t3pmxeb"
            >
              <h2
                className="text-2xl font-semibold text-gray-800 mb-2"
                data-oid="-bicec7"
              >
                Your cart is empty
              </h2>
              <p className="text-gray-600 mb-6" data-oid="59_wn01">
                Looks like you haven't added anything to your cart yet.
              </p>
              <Button
                onClick={() => router.push("/courses")}
                className="bg-[#123B79] hover:bg-[#0A2A5E]"
                data-oid="0:gdrl6"
              >
                Browse Courses
              </Button>
            </div>
          ) : (
            <div
              className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-start"
              data-oid="rt4lry8"
            >
              <section
                aria-labelledby="cart-heading"
                className="lg:col-span-8"
                data-oid="gel:mc-"
              >
                <ul
                  role="list"
                  className="divide-y divide-gray-200 border-t border-b border-gray-200"
                  data-oid="um5zksw"
                >
                  {cart.map((item) => (
                    <li
                      key={item.id}
                      className="flex py-6 px-4 bg-white"
                      data-oid="jm-xrjb"
                    >
                      <div className="flex-shrink-0" data-oid="bsi97:e">
                        <Image
                          src={item.image || "/placeholder.jpg"}
                          alt={item.title}
                          width={160}
                          height={160}
                          className="w-40 h-40 rounded-md object-contain"
                          data-oid="wgpxrkt"
                        />
                      </div>
                      <div
                        className="ml-4 flex-1 flex flex-col justify-between sm:ml-6"
                        data-oid="2ywwghi"
                      >
                        <div
                          className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6"
                          data-oid=":.r.wmv"
                        >
                          <div data-oid=":ennnyj">
                            <h3
                              className="text-lg font-semibold text-gray-800"
                              data-oid="xp8ws57"
                            >
                              <a
                                href={`/courses/${item.slug}`}
                                className="hover:text-[#123B79]"
                                data-oid="jmlr4-_"
                              >
                                {item.title}
                              </a>
                            </h3>
                            <p
                              className="mt-1 text-sm text-gray-500"
                              data-oid="n6_4v:z"
                            >
                              By {item.instructor}
                            </p>
                          </div>
                          <div
                            className="mt-4 sm:mt-0 sm:text-right"
                            data-oid="5kba7m7"
                          >
                            <p
                              className="text-lg font-bold text-gray-900"
                              data-oid="n12ty:z"
                            >
                              {formatPrice(item.price)}
                            </p>
                          </div>
                        </div>
                        <div
                          className="mt-4 flex items-center justify-between"
                          data-oid="geb8s3y"
                        >
                          <div className="flex items-center" data-oid="9ufx3h.">
                            <label
                              htmlFor={`quantity-${item.id}`}
                              className="sr-only"
                              data-oid="-seigkm"
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
                              data-oid="dj:40ex"
                            >
                              {item.type === "Book" ? (
                                [...Array(10).keys()].map((i) => (
                                  <option
                                    key={i + 1}
                                    value={i + 1}
                                    data-oid="pmljsn7"
                                  >
                                    {i + 1}
                                  </option>
                                ))
                              ) : (
                                <option value="1" data-oid="o:f959l">
                                  1
                                </option>
                              )}
                            </select>
                          </div>
                          <div
                            className="flex items-center space-x-4"
                            data-oid="w25wodk"
                          >
                            <button
                              type="button"
                              className="text-gray-400 hover:text-gray-600"
                              data-oid="rdd._r0"
                            >
                              <Heart className="h-5 w-5" data-oid="dvdbetb" />
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              type="button"
                              className="text-red-500 hover:text-red-700 font-medium"
                              data-oid="xtjronh"
                            >
                              <Trash className="h-5 w-5" data-oid="ert7swq" />
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
                data-oid="su7eaug"
              >
                <h2
                  id="summary-heading"
                  className="text-xl font-bold text-gray-900 border-b pb-4"
                  data-oid="ozg-c-k"
                >
                  Order Summary
                </h2>
                <div className="py-4 space-y-4" data-oid="c27:7pm">
                  <div
                    className="flex items-center justify-between"
                    data-oid="as9scup"
                  >
                    <dt className="text-sm text-gray-600" data-oid="mc_n7zu">
                      Subtotal
                    </dt>
                    <dd
                      className="text-sm font-medium text-gray-900"
                      data-oid="8.9z4sx"
                    >
                      {formatPrice(subtotal)}
                    </dd>
                  </div>
                  {discount > 0 && (
                    <div
                      className="flex items-center justify-between text-sm"
                      data-oid="9t0j67u"
                    >
                      <dt className="text-red-600" data-oid="y9_pa9f">
                        Discount
                      </dt>
                      <dd
                        className="font-medium text-red-600"
                        data-oid="aq0ynpi"
                      >
                        -{formatPrice(discount)}
                      </dd>
                    </div>
                  )}
                  <div
                    className="flex items-center justify-between"
                    data-oid="_yvxu4f"
                  >
                    <dt className="text-sm text-gray-600" data-oid="s20y99u">
                      Shipping
                    </dt>
                    <dd
                      className="text-sm font-medium text-gray-900"
                      data-oid="6usy-vg"
                    >
                      {formatPrice(shippingCost)}
                    </dd>
                  </div>
                </div>
                <div
                  className="flex items-center justify-between border-t pt-4"
                  data-oid="cjwq.vs"
                >
                  <dt
                    className="text-base font-bold text-gray-900"
                    data-oid="9cdrlfm"
                  >
                    Order Total
                  </dt>
                  <dd
                    className="text-base font-bold text-gray-900"
                    data-oid="onm3ug_"
                  >
                    {formatPrice(orderTotal)}
                  </dd>
                </div>

                <div className="mt-6" data-oid="48p7cj.">
                  <Button
                    onClick={handleCheckout}
                    className="w-full bg-red-600 hover:bg-red-700 text-white text-base font-bold py-3"
                    data-oid="uffgoh3"
                  >
                    Checkout
                  </Button>
                </div>
                <div className="mt-4" data-oid="-xe9rkh">
                  <Button
                    onClick={() => router.push("/courses")}
                    variant="outline"
                    className="w-full text-base font-bold py-3"
                    data-oid="8h9aa2e"
                  >
                    Continue Shopping
                  </Button>
                </div>
              </section>
            </div>
          )}

          {/* Recommended Courses Section */}
          <div className="mt-24" data-oid="bthpzhd">
            <h2
              className="text-2xl font-bold text-gray-900 mb-6 text-center"
              data-oid="v5bf161"
            >
              Similar Course You May Like
            </h2>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
              data-oid="ylfk_6s"
            >
              {recommendedCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  data-oid="j4nwo-7"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
