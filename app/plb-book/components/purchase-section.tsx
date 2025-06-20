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
      data-oid="udxf5w_"
    >
      <div className="container" data-oid="8hiv5n5">
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
          data-oid="3vujruw"
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
          data-oid="soft9p0"
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
          data-oid="4igi5y8"
        >
          <div
            className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8"
            data-oid="um9w7ej"
          >
            <div className="text-center" data-oid=".t91psi">
              <h3 className="text-xl font-semibold mb-2" data-oid="27-kw6_">
                E-Book
              </h3>
              <div
                className="flex items-center justify-center"
                data-oid="c:ho69l"
              >
                <span
                  className="original-price line-through text-gray-500 mr-2"
                  data-oid="5_-a2vf"
                >
                  $29
                </span>
                <span
                  className="price text-green-600 font-bold"
                  data-oid="yauk9n."
                >
                  FREE
                </span>
              </div>
            </div>

            <div className="text-center" data-oid="3xh95.d">
              <h3 className="text-xl font-semibold mb-2" data-oid="g41yh6x">
                Paperback
              </h3>
              <div
                className="flex items-center justify-center"
                data-oid="n320q.y"
              >
                <span className="price font-bold" data-oid="ekvz697">
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
          data-oid="p.ayw18"
        >
          <div
            className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8"
            data-oid="ou1--g_"
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
              data-oid="53iq7q8"
            >
              <Download size={18} className="mr-2" data-oid="nwh:fpj" />
              <span data-oid="wbee0_p">Get the E-book</span>
            </a>

            <button
              onClick={handlePaperbackClick}
              disabled={isAddingToCart}
              className="bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center w-full md:w-auto disabled:opacity-70"
              aria-label="Add paperback to cart"
              data-oid="wi1k-ci"
            >
              <ShoppingBag size={18} className="mr-2" data-oid="-sbdaak" />
              {isAddingToCart ? "Adding to Cart..." : "Get the Paperback"}
            </button>
          </div>
          <p className="form-disclaimer mt-4 text-center" data-oid="rs:zcy-">
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
          data-oid=".nf8kl5"
        >
          <h3 className="guarantee-title" data-oid="_6copan">
            Our Guarantee
          </h3>
          <p className="guarantee-text" data-oid="a8r-1mc">
            We're confident that the Property Launch Bible will provide you with
            valuable insights and strategies. If you're not completely
            satisfied, simply let us know and we'll address any concerns.
          </p>
        </div>
      </div>
    </section>
  );
}
