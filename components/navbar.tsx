"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ShoppingCart, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart-context";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { cart } = useCart();

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isMounted) return null;

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Learning Paths", href: "/learning-paths" },
    { name: "PLB Book", href: "/plb-book" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg py-3"
          : "bg-white/80 backdrop-blur-sm py-4"
      }`}
      data-oid="mtpgqux"
    >
      <div
        className="container mx-auto px-4 flex justify-between items-center"
        data-oid="h:l9h-t"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center z-10 group"
          data-oid="b0683c-"
        >
          <img
            src="/images/assembly-logo.png"
            alt="Assembly Logo"
            style={{ height: "40px", width: "auto" }}
            data-oid="5l1eenj"
          />
        </Link>

        {/* Desktop Navigation */}
        <div
          className="hidden md:flex items-center space-x-8"
          data-oid="wu4pijt"
        >
          <nav className="flex space-x-6" data-oid="p5c9537">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                data-oid="rhj-b45"
              >
                <Link
                  href={item.href}
                  className="font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group"
                  data-oid="6l601fx"
                >
                  {item.name}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"
                    data-oid="ulausn9"
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Cart */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            data-oid="5vqrchr"
          >
            <Link href="/cart" className="relative group" data-oid="0cbejpe">
              <div
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                data-oid="2jw-6qa"
              >
                <ShoppingCart
                  className="h-6 w-6 text-gray-700 group-hover:text-blue-600 transition-colors"
                  data-oid="t3jg6w0"
                />

                {cart.length > 0 && (
                  <span
                    className="absolute -top-1 -right-1 bg-[#ff6b35] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium"
                    data-oid="j4woho4"
                  >
                    {cart.length}
                  </span>
                )}
              </div>
            </Link>
          </motion.div>

          {/* Auth Buttons */}
          <div className="flex space-x-3" data-oid="qyapenq">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              data-oid="8y7o9t9"
            >
              <Link href="/login" data-oid="quaan94">
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
                  data-oid=".isfyl3"
                >
                  Log In
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              data-oid="7twxy_l"
            >
              <Link href="/signup" data-oid="ct9.7uz">
                <Button
                  className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  data-oid="7sy5bq9"
                >
                  Get Started
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          data-oid="ctio-11"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-gray-700" data-oid="2dlv05m" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" data-oid="cmtypda" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence data-oid="jsnhz1f">
        {isOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            data-oid="5xh1:t6"
          >
            <div className="container mx-auto px-4 py-6" data-oid="vc2s_0m">
              <nav className="flex flex-col space-y-4" data-oid="g_kxm76">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    data-oid="_621-8l"
                  >
                    <Link
                      href={item.href}
                      className="font-medium text-gray-700 py-2 hover:text-blue-600 transition-colors block"
                      onClick={() => setIsOpen(false)}
                      data-oid="hy5acp_"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <div
                  className="flex flex-col space-y-3 pt-4 border-t border-gray-200"
                  data-oid="kka7g-f"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    data-oid="ifh0okf"
                  >
                    <Link href="/login" className="w-full" data-oid="a06_8ro">
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => setIsOpen(false)}
                        data-oid="vobvy-d"
                      >
                        Log In
                      </Button>
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    data-oid="_.n9s3o"
                  >
                    <Link href="/signup" data-oid="g347lda">
                      <Button
                        className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] text-white"
                        onClick={() => setIsOpen(false)}
                        data-oid="6oh9kzn"
                      >
                        Get Started
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
