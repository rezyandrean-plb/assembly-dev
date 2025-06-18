"use client";

import { useRef, useState } from "react";
import { useScrollAnimation } from "../hooks/use-scroll-animation";
import anime from "animejs";
import { Download, ShoppingBag } from "lucide-react";
import { useCart } from "@/components/cart-context";
import toast from "react-hot-toast";

export default function PurchaseSection() {
  const { addToCart } = useCart();
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const priceRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const guaranteeRef = useRef<HTMLDivElement>(null);

  const titleAnimRef = useScrollAnimation(() => {
    return anime({
      targets: titleRef.current,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
    });
  });

  const subtitleAnimRef = useScrollAnimation(() => {
    return anime({
      targets: subtitleRef.current,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      delay: 200,
    });
  });

  const priceAnimRef = useScrollAnimation(() => {
    return anime({
      targets: priceRef.current,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      delay: 400,
    });
  });

  const buttonsAnimRef = useScrollAnimation(() => {
    return anime({
      targets: buttonsRef.current,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      delay: 600,
    });
  });

  const guaranteeAnimRef = useScrollAnimation(() => {
    return anime({
      targets: guaranteeRef.current,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      delay: 800,
    });
  });

  const handlePaperbackClick = () => {
    setIsAddingToCart(true);
    addToCart({
      id: "plb-paperback",
      title: "Property Launch Bible (Paperback)",
      slug: "plb-book-paperback",
      price: "$29.99",
      image: "/images/plb-book-paperback.jpg",
      instructor: "Assembly SG",
      type: "paperback",
    });
    toast.success("Paperback added to your cart!");
    setIsAddingToCart(false);
  };

  return (
    <section
      className="section purchase-section"
      id="purchase"
      data-oid="e.:hwjp"
    >
      <div className="container" data-oid="jz3uhfj">
        <h2
          className="section-title text-center"
          ref={(el) => {
            if (titleRef.current === null && el !== null) {
              titleRef.current = el;
            }
            if (typeof titleAnimRef === "function") {
              titleAnimRef(el);
            }
          }}
          data-oid="yc5paqz"
        >
          Get Your Copy Today
        </h2>

        <p
          className="section-subtitle text-center"
          ref={(el) => {
            if (subtitleRef.current === null && el !== null) {
              subtitleRef.current = el;
            }
            if (typeof subtitleAnimRef === "function") {
              subtitleAnimRef(el);
            }
          }}
          data-oid="s9lgtr_"
        >
          Start your journey towards successful property investment in Singapore
        </p>

        <div
          className="price-container"
          ref={(el) => {
            if (priceRef.current === null && el !== null) {
              priceRef.current = el;
            }
            if (typeof priceAnimRef === "function") {
              priceAnimRef(el);
            }
          }}
          data-oid="jkllojd"
        >
          <div
            className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8"
            data-oid="-3c210_"
          >
            <div className="text-center" data-oid="pcdy0u:">
              <h3 className="text-xl font-semibold mb-2" data-oid="0a45tup">
                E-Book
              </h3>
              <div
                className="flex items-center justify-center"
                data-oid="5hw4m2a"
              >
                <span
                  className="original-price line-through text-gray-500 mr-2"
                  data-oid="x1bqy5-"
                >
                  $29
                </span>
                <span
                  className="price text-green-600 font-bold"
                  data-oid="ell..k2"
                >
                  FREE
                </span>
              </div>
            </div>

            <div className="text-center" data-oid="5meyq9x">
              <h3 className="text-xl font-semibold mb-2" data-oid="ip5jynb">
                Paperback
              </h3>
              <div
                className="flex items-center justify-center"
                data-oid="y.urufk"
              >
                <span className="price font-bold" data-oid="eyjwuzs">
                  $29.99
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="form-container"
          ref={(el) => {
            if (buttonsRef.current === null && el !== null) {
              buttonsRef.current = el;
            }
            if (typeof buttonsAnimRef === "function") {
              buttonsAnimRef(el);
            }
          }}
          data-oid="sud.6t9"
        >
          <div
            className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8"
            data-oid="bfj98nz"
          >
            {/* Direct anchor tag styled as a button */}
            <a
              href="https://www.amazon.com/dp/B0F1CMZ9MQ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center w-full md:w-auto no-underline cursor-pointer"
              style={{ textDecoration: "none" }}
              role="button"
              aria-label="Get the E-book on Amazon"
              data-oid="n1j7i-0"
            >
              <Download size={18} className="mr-2" data-oid="e-kzy9-" />
              <span data-oid="bkhd_-h">Get the E-book</span>
            </a>

            <button
              onClick={handlePaperbackClick}
              disabled={isAddingToCart}
              className="bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center w-full md:w-auto disabled:opacity-70"
              aria-label="Add paperback to cart"
              data-oid="wfz94hj"
            >
              <ShoppingBag size={18} className="mr-2" data-oid="zl19txg" />
              {isAddingToCart ? "Adding to Cart..." : "Get the Paperback"}
            </button>
          </div>
          <p className="form-disclaimer mt-4 text-center" data-oid="1_f8yeb">
            E-book will redirect to Amazon in a new tab. Paperback will be added
            to your cart.
          </p>
        </div>

        <div
          className="guarantee-container"
          ref={(el) => {
            if (guaranteeRef.current === null && el !== null) {
              guaranteeRef.current = el;
            }
            if (typeof guaranteeAnimRef === "function") {
              guaranteeAnimRef(el);
            }
          }}
          data-oid="a9e.6eq"
        >
          <h3 className="guarantee-title" data-oid="4n1tlpw">
            Our Guarantee
          </h3>
          <p className="guarantee-text" data-oid="j:1adi5">
            We're confident that the Property Launch Bible will provide you with
            valuable insights and strategies. If you're not completely
            satisfied, simply let us know and we'll address any concerns.
          </p>
        </div>
      </div>
    </section>
  );
}
