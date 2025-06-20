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
      author: "PropertyLimBrothers",
      type: "paperback",
    });
    toast.success("Paperback added to your cart!");
    setIsAddingToCart(false);
  };

  return (
    <section
      className="section purchase-section"
      id="purchase"
      data-oid="ofi._.k"
    >
      <div className="container" data-oid="s:tfcik">
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
          data-oid="dpegum0"
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
          data-oid="bv_dx0h"
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
          data-oid="dmvwk6."
        >
          <div
            className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8"
            data-oid="ix.2geq"
          >
            <div className="text-center" data-oid="qd-jyhs">
              <h3 className="text-xl font-semibold mb-2" data-oid="m389k38">
                E-Book
              </h3>
              <div
                className="flex items-center justify-center"
                data-oid="6o9xima"
              >
                <span
                  className="original-price line-through text-gray-500 mr-2"
                  data-oid=".pi004r"
                >
                  $29
                </span>
                <span
                  className="price text-green-600 font-bold"
                  data-oid="l0l.3nn"
                >
                  FREE
                </span>
              </div>
            </div>

            <div className="text-center" data-oid="h-724ol">
              <h3 className="text-xl font-semibold mb-2" data-oid="rk41ymu">
                Paperback
              </h3>
              <div
                className="flex items-center justify-center"
                data-oid="foa_kg6"
              >
                <span className="price font-bold" data-oid="oe556i5">
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
          data-oid="xfd_4a0"
        >
          <div
            className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8"
            data-oid="_kmdlnw"
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
              data-oid="u149e2-"
            >
              <Download size={18} className="mr-2" data-oid="nzzh_ta" />
              <span data-oid="gpvk:qf">Get the E-book</span>
            </a>

            <button
              onClick={handlePaperbackClick}
              disabled={isAddingToCart}
              className="bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center w-full md:w-auto disabled:opacity-70"
              aria-label="Add paperback to cart"
              data-oid="2k.hrcp"
            >
              <ShoppingBag size={18} className="mr-2" data-oid="6ulr1:a" />
              {isAddingToCart ? "Adding to Cart..." : "Get the Paperback"}
            </button>
          </div>
          <p className="form-disclaimer mt-4 text-center" data-oid="p1mqwqc">
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
          data-oid="ktfu:xp"
        >
          <h3 className="guarantee-title" data-oid=":ej1uu0">
            Our Guarantee
          </h3>
          <p className="guarantee-text" data-oid="658p15i">
            We're confident that the Property Launch Bible will provide you with
            valuable insights and strategies. If you're not completely
            satisfied, simply let us know and we'll address any concerns.
          </p>
        </div>
      </div>
    </section>
  );
}
