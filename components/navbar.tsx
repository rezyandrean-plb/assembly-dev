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
    { name: "Courses", href: "/courses" },
    { name: "Learning Paths", href: "/learning-paths" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg py-3"
          : "bg-white/80 backdrop-blur-sm py-4"
      }`}
      data-oid="8-s:l76"
    >
      <div
        className="container mx-auto px-4 flex justify-between items-center"
        data-oid="ffmritj"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center z-10 group"
          data-oid="14.5us-"
        >
          <div className="flex items-center gap-2" data-oid="4vs5hp3">
            <div
              className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              data-oid="sqioblt"
            >
              <Sparkles className="w-6 h-6 text-white" data-oid="e-1_ea8" />
            </div>
            <span
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              data-oid="e1vp30n"
            >
              Assembly.sg
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div
          className="hidden md:flex items-center space-x-8"
          data-oid="pikxmzz"
        >
          <nav className="flex space-x-6" data-oid="q3mewva">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                data-oid="ozr-apv"
              >
                <Link
                  href={item.href}
                  className="font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group"
                  data-oid="spi4u7g"
                >
                  {item.name}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"
                    data-oid="8ex4yoa"
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
            data-oid="1aow2b."
          >
            <Link href="/cart" className="relative group" data-oid="5rc8c2k">
              <div
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                data-oid="ykg.spm"
              >
                <ShoppingCart
                  className="h-6 w-6 text-gray-700 group-hover:text-blue-600 transition-colors"
                  data-oid="is-z1ec"
                />

                {cart.length > 0 && (
                  <span
                    className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium"
                    data-oid="htmmcte"
                  >
                    {cart.length}
                  </span>
                )}
              </div>
            </Link>
          </motion.div>

          {/* Auth Buttons */}
          <div className="flex space-x-3" data-oid="budgaxw">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              data-oid="2d.q_rt"
            >
              <Link href="/login" data-oid="88_o4w:">
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
                  data-oid="x31.qan"
                >
                  Log In
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              data-oid="-h-zerq"
            >
              <Link href="/signup" data-oid="ycsy2g0">
                <Button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  data-oid="d_ff7ph"
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
          data-oid="-7-:koq"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-gray-700" data-oid="v7.rlhl" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" data-oid="m_ca00z" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence data-oid="v.e6zeo">
        {isOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            data-oid="u_q-um1"
          >
            <div className="container mx-auto px-4 py-6" data-oid=":t8l3f9">
              <nav className="flex flex-col space-y-4" data-oid="a6trcc1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    data-oid="uif5xov"
                  >
                    <Link
                      href={item.href}
                      className="font-medium text-gray-700 py-2 hover:text-blue-600 transition-colors block"
                      onClick={() => setIsOpen(false)}
                      data-oid="njs:.7c"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <div
                  className="flex flex-col space-y-3 pt-4 border-t border-gray-200"
                  data-oid=":rl4l-n"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    data-oid="4_al-f3"
                  >
                    <Link href="/login" className="w-full" data-oid="7snbm6a">
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => setIsOpen(false)}
                        data-oid="j-ac6za"
                      >
                        Log In
                      </Button>
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    data-oid="n33bszb"
                  >
                    <Link href="/signup" data-oid="e2.sr.n">
                      <Button
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                        onClick={() => setIsOpen(false)}
                        data-oid="t99e861"
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
