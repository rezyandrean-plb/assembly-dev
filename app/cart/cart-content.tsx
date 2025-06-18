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
        data-oid="ave.az8"
      >
        <div
          className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#123B79]"
          data-oid="tx9k:p-"
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
        data-oid="ai:gj1s"
      />
      <div className="bg-gray-50" data-oid="ojzacfr">
        <Navbar data-oid="m0-y4c8" />
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24"
          data-oid="m_8iqwg"
        >
          <Stepper currentStep={1} data-oid="0pi3pwe" />
          <h1
            className="text-3xl font-bold text-gray-900 my-8"
            data-oid="xzmgi0v"
          >
            Shopping Cart
          </h1>
          {cart.length === 0 ? (
            <div
              className="text-center py-20 bg-white rounded-lg shadow-sm"
              data-oid=".aspfvc"
            >
              <h2
                className="text-2xl font-semibold text-gray-800 mb-2"
                data-oid="ifwxqve"
              >
                Your cart is empty
              </h2>
              <p className="text-gray-600 mb-6" data-oid="5el84f6">
                Looks like you haven't added anything to your cart yet.
              </p>
              <Button
                onClick={() => router.push("/courses")}
                className="bg-[#123B79] hover:bg-[#0A2A5E]"
                data-oid="q9vhusc"
              >
                Browse Courses
              </Button>
            </div>
          ) : (
            <div
              className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-start"
              data-oid=":qgbui."
            >
              <section
                aria-labelledby="cart-heading"
                className="lg:col-span-8"
                data-oid="f-5ch68"
              >
                <ul
                  role="list"
                  className="divide-y divide-gray-200 border-t border-b border-gray-200"
                  data-oid="8.dmixr"
                >
                  {cart.map((item) => (
                    <li
                      key={item.id}
                      className="flex py-6 px-4 bg-white"
                      data-oid="hmzpr21"
                    >
                      <div className="flex-shrink-0" data-oid="n5wxd9p">
                        <Image
                          src={item.image || "/placeholder.jpg"}
                          alt={item.title}
                          width={160}
                          height={160}
                          className="w-40 h-40 rounded-md object-contain"
                          data-oid="zr0hlwd"
                        />
                      </div>
                      <div
                        className="ml-4 flex-1 flex flex-col justify-between sm:ml-6"
                        data-oid="l1.dlx4"
                      >
                        <div
                          className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6"
                          data-oid="uag.s5i"
                        >
                          <div data-oid="qr6wxz1">
                            <h3
                              className="text-lg font-semibold text-gray-800"
                              data-oid="j8616zk"
                            >
                              <a
                                href={`/courses/${item.slug}`}
                                className="hover:text-[#123B79]"
                                data-oid="95_gxct"
                              >
                                {item.title}
                              </a>
                            </h3>
                            <p
                              className="mt-1 text-sm text-gray-500"
                              data-oid="k5:bjt_"
                            >
                              By {item.instructor}
                            </p>
                          </div>
                          <div
                            className="mt-4 sm:mt-0 sm:text-right"
                            data-oid="yl0:kls"
                          >
                            <p
                              className="text-lg font-bold text-gray-900"
                              data-oid="9.c81l5"
                            >
                              {formatPrice(item.price)}
                            </p>
                          </div>
                        </div>
                        <div
                          className="mt-4 flex items-center justify-between"
                          data-oid="wyp:wxs"
                        >
                          <div className="flex items-center" data-oid="bhki_bx">
                            <label
                              htmlFor={`quantity-${item.id}`}
                              className="sr-only"
                              data-oid="oe99-8e"
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
                              data-oid="220oleb"
                            >
                              {item.type === "Book" ? (
                                [...Array(10).keys()].map((i) => (
                                  <option
                                    key={i + 1}
                                    value={i + 1}
                                    data-oid="nl4cqs-"
                                  >
                                    {i + 1}
                                  </option>
                                ))
                              ) : (
                                <option value="1" data-oid="il08toq">
                                  1
                                </option>
                              )}
                            </select>
                          </div>
                          <div
                            className="flex items-center space-x-4"
                            data-oid="fgu28--"
                          >
                            <button
                              type="button"
                              className="text-gray-400 hover:text-gray-600"
                              data-oid="bx-hu.."
                            >
                              <Heart className="h-5 w-5" data-oid=":og0::g" />
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              type="button"
                              className="text-red-500 hover:text-red-700 font-medium"
                              data-oid="u-bc55g"
                            >
                              <Trash className="h-5 w-5" data-oid="vea4ka3" />
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
                data-oid="szv6csz"
              >
                <h2
                  id="summary-heading"
                  className="text-xl font-bold text-gray-900 border-b pb-4"
                  data-oid="xzdg9.4"
                >
                  Order Summary
                </h2>
                <div className="py-4 space-y-4" data-oid=":o1b26_">
                  <div
                    className="flex items-center justify-between"
                    data-oid="ooug9-1"
                  >
                    <dt className="text-sm text-gray-600" data-oid="8h53n7o">
                      Subtotal
                    </dt>
                    <dd
                      className="text-sm font-medium text-gray-900"
                      data-oid="3mfs28j"
                    >
                      {formatPrice(subtotal)}
                    </dd>
                  </div>
                  {discount > 0 && (
                    <div
                      className="flex items-center justify-between text-sm"
                      data-oid="e7ecn18"
                    >
                      <dt className="text-red-600" data-oid="t6uiihy">
                        Discount
                      </dt>
                      <dd
                        className="font-medium text-red-600"
                        data-oid="smm9zn5"
                      >
                        -{formatPrice(discount)}
                      </dd>
                    </div>
                  )}
                  <div
                    className="flex items-center justify-between"
                    data-oid="rfm16r_"
                  >
                    <dt className="text-sm text-gray-600" data-oid=":pnrvds">
                      Shipping
                    </dt>
                    <dd
                      className="text-sm font-medium text-gray-900"
                      data-oid="q3wrkrl"
                    >
                      {formatPrice(shippingCost)}
                    </dd>
                  </div>
                </div>
                <div
                  className="flex items-center justify-between border-t pt-4"
                  data-oid="evj4p75"
                >
                  <dt
                    className="text-base font-bold text-gray-900"
                    data-oid=".ta4ro3"
                  >
                    Order Total
                  </dt>
                  <dd
                    className="text-base font-bold text-gray-900"
                    data-oid="q733ytg"
                  >
                    {formatPrice(orderTotal)}
                  </dd>
                </div>

                <div className="mt-6" data-oid="xzk7cjj">
                  <Button
                    onClick={handleCheckout}
                    className="w-full bg-red-600 hover:bg-red-700 text-white text-base font-bold py-3"
                    data-oid="q09cv46"
                  >
                    Checkout
                  </Button>
                </div>
                <div className="mt-4" data-oid="_iffe9w">
                  <Button
                    onClick={() => router.push("/courses")}
                    variant="outline"
                    className="w-full text-base font-bold py-3"
                    data-oid="ftqmoet"
                  >
                    Continue Shopping
                  </Button>
                </div>
              </section>
            </div>
          )}

          {/* Recommended Courses Section */}
          <div className="mt-24" data-oid="5-45ey1">
            <h2
              className="text-2xl font-bold text-gray-900 mb-6 text-center"
              data-oid="9vmvuh1"
            >
              Similar Course You May Like
            </h2>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
              data-oid="52iojdr"
            >
              {recommendedCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  data-oid="2jaed7k"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
