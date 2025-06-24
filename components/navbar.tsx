"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  ShoppingCart,
  X,
  Sparkles,
  User,
  LogOut,
  Settings,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart-context";
import { useAuth } from "@/context/auth-context";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { cart } = useCart();
  const { isLoggedIn, user, logout } = useAuth();

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        isProfileOpen &&
        !(event.target as Element).closest(
          '[data-oid="profile-btn"], [data-oid="profile-dropdown"]',
        )
      ) {
        setIsProfileOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfileOpen]);

  if (!isMounted) return null;

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Facilitators", href: "/facilitators" },
    { name: "Courses", href: "/courses" },
    { name: "Learning Paths", href: "/learning-paths" },
    { name: "PLB Book", href: "/plb-book" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white backdrop-blur-lg shadow-lg py-3"
          : "bg-white backdrop-blur-sm py-4"
      }`}
      data-oid="63yrf_e"
    >
      <div
        className="container mx-auto px-4 flex justify-between items-center"
        data-oid="6-3sj8_"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center z-10 group"
          data-oid="s6la8gk"
        >
          <img
            src="/images/assembly-logo.png"
            alt="Assembly Logo"
            style={{ height: "40px", width: "auto" }}
            data-oid="l.adv7r"
          />
        </Link>

        {/* Desktop Navigation */}
        <div
          className="hidden md:flex items-center space-x-8"
          data-oid="lt27hr2"
        >
          <nav className="flex space-x-6" data-oid="-_-z2ya">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                data-oid="k_kl:ku"
              >
                <Link
                  href={item.href}
                  className="font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group"
                  data-oid=".v7l1.q"
                >
                  {item.name}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"
                    data-oid="ncfwjg0"
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
            data-oid="51vktl1"
          >
            <Link href="/cart" className="relative group" data-oid="fe.dsf7">
              <div
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                data-oid="4iecfh_"
              >
                <ShoppingCart
                  className="h-6 w-6 text-gray-700 group-hover:text-blue-600 transition-colors"
                  data-oid="a:bywqo"
                />

                {cart.length > 0 && (
                  <span
                    className="absolute -top-1 -right-1 bg-[#ff6b35] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium"
                    data-oid="71z.lhe"
                  >
                    {cart.length}
                  </span>
                )}
              </div>
            </Link>
          </motion.div>

          {/* Auth Section */}
          {isLoggedIn && user ? (
            /* Profile Dropdown */
            <div className="relative" data-oid="-knzbcp">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                data-oid="profile-btn"
              >
                {user.image ? (
                  <img
                    src={user.image}
                    alt={user.name || "User"}
                    className="w-8 h-8 rounded-full object-cover"
                    data-oid="6z9:yiv"
                  />
                ) : (
                  <div
                    className="w-8 h-8 bg-[#ff6b35] rounded-full flex items-center justify-center text-white font-semibold"
                    data-oid="s3zra48"
                  >
                    {user.name
                      ? user.name.charAt(0).toUpperCase()
                      : user.email.charAt(0).toUpperCase()}
                  </div>
                )}
                <span className="font-medium text-gray-700" data-oid="08v-s8x">
                  {user.name || user.email.split("@")[0]}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform ${isProfileOpen ? "rotate-180" : ""}`}
                  data-oid="6p4ezyd"
                />
              </motion.button>

              {/* Profile Dropdown Menu */}
              <AnimatePresence data-oid="0.xsk37">
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                    data-oid="profile-dropdown"
                  >
                    <Link
                      href="/profile"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                      data-oid="1k6c8ju"
                    >
                      <User className="w-4 h-4 mr-3" data-oid="25alrdt" />
                      Profile
                    </Link>
                    <Link
                      href="/profile/settings"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                      data-oid="kfp6ai7"
                    >
                      <Settings className="w-4 h-4 mr-3" data-oid="j7m:yym" />
                      Settings
                    </Link>
                    <hr className="my-2 border-gray-200" data-oid="9v9cqdp" />
                    <button
                      onClick={() => {
                        logout();
                        setIsProfileOpen(false);
                      }}
                      className="w-full flex items-center px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
                      data-oid="fh4vj1y"
                    >
                      <LogOut className="w-4 h-4 mr-3" data-oid="wufq2dp" />
                      Log Out
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            /* Auth Buttons */
            <div className="flex space-x-3" data-oid="udajwx4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                data-oid="b9fg9h4"
              >
                <Link href="/login" data-oid="ma2ql9r">
                  <Button
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
                    data-oid="66rbolk"
                  >
                    Log In
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                data-oid="z:n:qrl"
              >
                <Link href="/signup" data-oid="-rea637">
                  <Button
                    className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    data-oid="d595fuu"
                  >
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          data-oid="pt-g0vh"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-gray-700" data-oid="yhsvdb0" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" data-oid=".ecc5oc" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence data-oid="qhf8y7o">
        {isOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            data-oid="ba9la_j"
          >
            <div className="container mx-auto px-4 py-6" data-oid="b4lzrcs">
              <nav className="flex flex-col space-y-4" data-oid="_serqfm">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    data-oid="4vg5obv"
                  >
                    <Link
                      href={item.href}
                      className="font-medium text-gray-700 py-2 hover:text-blue-600 transition-colors block"
                      onClick={() => setIsOpen(false)}
                      data-oid="oz8n4lo"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <div
                  className="flex flex-col space-y-3 pt-4 border-t border-gray-200"
                  data-oid="hf_ack1"
                >
                  {isLoggedIn && user ? (
                    /* Mobile Profile Section */
                    <>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                        className="flex items-center space-x-3 px-3 py-2 bg-gray-50 rounded-lg"
                        data-oid="mobile-profile"
                      >
                        {user.image ? (
                          <img
                            src={user.image}
                            alt={user.name || "User"}
                            className="w-10 h-10 rounded-full object-cover"
                            data-oid="l2rgr83"
                          />
                        ) : (
                          <div
                            className="w-10 h-10 bg-[#ff6b35] rounded-full flex items-center justify-center text-white font-semibold"
                            data-oid="y2igfn_"
                          >
                            {user.name
                              ? user.name.charAt(0).toUpperCase()
                              : user.email.charAt(0).toUpperCase()}
                          </div>
                        )}
                        <div data-oid="vw4a3i8">
                          <p
                            className="font-medium text-gray-900"
                            data-oid="mn.p.93"
                          >
                            {user.name || user.email.split("@")[0]}
                          </p>
                          <p
                            className="text-sm text-gray-500"
                            data-oid="spz8k58"
                          >
                            {user.email}
                          </p>
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                        data-oid="mobile-profile-link"
                      >
                        <Link
                          href="/profile"
                          className="w-full"
                          data-oid="mobile-profile-btn"
                        >
                          <Button
                            variant="outline"
                            className="w-full justify-start"
                            onClick={() => setIsOpen(false)}
                            data-oid="profile-btn-mobile"
                          >
                            <User className="w-4 h-4 mr-2" data-oid="8k_z2vj" />
                            Profile
                          </Button>
                        </Link>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 }}
                        data-oid="mobile-logout"
                      >
                        <Button
                          variant="outline"
                          className="w-full justify-start text-red-600 border-red-200 hover:bg-red-50"
                          onClick={() => {
                            logout();
                            setIsOpen(false);
                          }}
                          data-oid="logout-btn-mobile"
                        >
                          <LogOut className="w-4 h-4 mr-2" data-oid="i1yb14q" />
                          Log Out
                        </Button>
                      </motion.div>
                    </>
                  ) : (
                    /* Mobile Auth Buttons */
                    <>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                        data-oid="ndg3.do"
                      >
                        <Link
                          href="/login"
                          className="w-full"
                          data-oid="7dquadt"
                        >
                          <Button
                            variant="outline"
                            className="w-full"
                            onClick={() => setIsOpen(false)}
                            data-oid="7017dcg"
                          >
                            Log In
                          </Button>
                        </Link>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                        data-oid="jf77fby"
                      >
                        <Link href="/signup" data-oid="9sip:zl">
                          <Button
                            className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] text-white"
                            onClick={() => setIsOpen(false)}
                            data-oid="j_vis6p"
                          >
                            Get Started
                          </Button>
                        </Link>
                      </motion.div>
                    </>
                  )}
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
