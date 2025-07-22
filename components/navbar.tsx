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
  Bell,
  FileText,
  ShoppingBag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart-context";
import { useAuth } from "@/context/auth-context";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true);
  const { cart } = useCart();
  const { isLoggedIn, user, logout } = useAuth();

  useEffect(() => {
    setIsMounted(true);
    // Only animate once on initial mount
    const timer = setTimeout(() => setHasAnimated(true), 100);

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
      if (
        isNotificationsOpen &&
        !(event.target as Element).closest(
          '[data-oid="notifications-btn"], [data-oid="notifications-dropdown"]',
        )
      ) {
        setIsNotificationsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      clearTimeout(timer);
    };
  }, [isProfileOpen, isNotificationsOpen]);

  if (!isMounted) return null;

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Facilitators", href: "/facilitators" },
    { name: "Courses", href: "/courses" },
    { name: "Learning Paths", href: "/learning-paths" },
    { name: "PLB Book", href: "/plb-book" },
    { name: "Contact", href: "/contact" },
  ];

  // Animation variants - only animate on first load
  const getAnimationProps = (delay: number) => {
    if (hasAnimated) {
      return {
        initial: { opacity: 1, y: 0 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0 },
      };
    }
    return {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, delay },
    };
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white backdrop-blur-lg shadow-lg py-3"
          : "bg-white backdrop-blur-sm py-4"
      }`}
    >
      <div className="w-full px-6 lg:px-8 xl:px-12 flex justify-between items-center">
        {/* Logo - Always on the far left */}
        <Link href="/" className="flex items-center z-10 group flex-shrink-0">
          <img
            src="/images/assembly-logo.png"
            alt="Assembly Logo"
            style={{ height: "40px", width: "auto" }}
          />
        </Link>

        {/* Desktop Navigation - Always on the far right */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                {...getAnimationProps(0.1 + index * 0.1)}
              >
                <Link
                  href={item.href}
                  className="font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group whitespace-nowrap"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Cart */}
          <motion.div className="relative" {...getAnimationProps(0.5)}>
            <Link href="/cart" className="relative group">
              <div className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <ShoppingCart className="h-6 w-6 text-gray-700 group-hover:text-blue-600 transition-colors" />

                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#ff6b35] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {cart.length}
                  </span>
                )}
              </div>
            </Link>
          </motion.div>

          {/* Auth Section */}
          {isLoggedIn && user ? (
            <>
              {/* Notifications - Only show when logged in */}
              <motion.div className="relative" {...getAnimationProps(0.6)}>
                <button
                  onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                  className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <Bell className="h-6 w-6 text-gray-700 hover:text-blue-600 transition-colors" />

                  {hasNotifications && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium" />
                  )}
                </button>

                {/* Notifications Dropdown */}
                <AnimatePresence>
                  {isNotificationsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                    >
                      <div className="px-4 py-2 border-b border-gray-100">
                        <div className="flex justify-between items-center">
                          <h3 className="font-semibold text-gray-800">
                            Notifications
                          </h3>
                          <button
                            className="text-xs text-blue-600 hover:underline"
                            onClick={() => setHasNotifications(false)}
                          >
                            Mark all as read
                          </button>
                        </div>
                      </div>
                      <div className="max-h-80 overflow-y-auto">
                        <div className="px-4 py-3 border-b border-gray-100 bg-blue-50">
                          <p className="text-sm font-medium text-gray-800">
                            New course available
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            "Advanced Property Investment Strategies" is now
                            available.
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            2 hours ago
                          </p>
                        </div>
                        <div className="px-4 py-3 border-b border-gray-100">
                          <p className="text-sm font-medium text-gray-800">
                            Course completed
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            You've completed "HDB Investment Masterclass". View
                            your certificate.
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            Yesterday
                          </p>
                        </div>
                        <div className="px-4 py-3 text-center">
                          <button className="text-sm text-blue-600 hover:underline">
                            View all notifications
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Profile Dropdown */}
              <div className="relative">
                <motion.button
                  {...getAnimationProps(0.7)}
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  {user.image ? (
                    <img
                      src={user.image}
                      alt={user.name || "User"}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-8 h-8 bg-[#ff6b35] rounded-full flex items-center justify-center text-white font-semibold">
                      {user.name
                        ? user.name.charAt(0).toUpperCase()
                        : user.email.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <span className="font-medium text-gray-700 whitespace-nowrap">
                    {user.name || user.email.split("@")[0]}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform ${isProfileOpen ? "rotate-180" : ""}`}
                  />
                </motion.button>

                {/* Profile Dropdown Menu */}
                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                    >
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">
                          {user.email}
                        </p>
                      </div>

                      <Link
                        href="/profile"
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <User className="w-4 h-4 mr-3" />
                        Profile
                      </Link>
                      <Link
                        href="/profile/purchase-history"
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <ShoppingBag className="w-4 h-4 mr-3" />
                        Purchase History
                      </Link>
                      <Link
                        href="/profile/settings"
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <Settings className="w-4 h-4 mr-3" />
                        Settings
                      </Link>
                      <Link
                        href="/profile/terms"
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <FileText className="w-4 h-4 mr-3" />
                        Terms of Use
                      </Link>
                      <hr className="my-2 border-gray-200" />
                      <button
                        onClick={() => {
                          logout();
                          setIsProfileOpen(false);
                        }}
                        className="w-full flex items-center px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <LogOut className="w-4 h-4 mr-3" />
                        Log Out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </>
          ) : (
            /* Auth Buttons - Only show when not logged in */
            <div className="flex space-x-3">
              <motion.div {...getAnimationProps(0.6)}>
                <Link href="/login">
                  <Button
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
                  >
                    Log In
                  </Button>
                </Link>
              </motion.div>
              <motion.div {...getAnimationProps(0.7)}>
                <Link href="/signup">
                  <Button className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white shadow-lg hover:shadow-xl transition-all duration-300">
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
        >
          {isOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full px-6 lg:px-8 xl:px-12 py-6">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="font-medium text-gray-700 py-2 hover:text-blue-600 transition-colors block"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                  {isLoggedIn && user ? (
                    /* Mobile Profile Section */
                    <>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                        className="flex items-center space-x-3 px-3 py-2 bg-gray-50 rounded-lg"
                      >
                        {user.image ? (
                          <img
                            src={user.image}
                            alt={user.name || "User"}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-10 h-10 bg-[#ff6b35] rounded-full flex items-center justify-center text-white font-semibold">
                            {user.name
                              ? user.name.charAt(0).toUpperCase()
                              : user.email.charAt(0).toUpperCase()}
                          </div>
                        )}
                        <div>
                          <p className="font-medium text-gray-900">
                            {user.name || user.email.split("@")[0]}
                          </p>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                      >
                        <Link href="/profile" className="w-full">
                          <Button
                            variant="outline"
                            className="w-full justify-start"
                            onClick={() => setIsOpen(false)}
                          >
                            <User className="w-4 h-4 mr-2" />
                            Profile
                          </Button>
                        </Link>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 }}
                      >
                        <Button
                          variant="outline"
                          className="w-full justify-start text-red-600 border-red-200 hover:bg-red-50"
                          onClick={() => {
                            logout();
                            setIsOpen(false);
                          }}
                        >
                          <LogOut className="w-4 h-4 mr-2" />
                          Log Out
                        </Button>
                      </motion.div>
                    </>
                  ) : (
                    /* Mobile Auth Buttons - Only show when not logged in */
                    <>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                      >
                        <Link href="/login" className="w-full">
                          <Button
                            variant="outline"
                            className="w-full"
                            onClick={() => setIsOpen(false)}
                          >
                            Log In
                          </Button>
                        </Link>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                      >
                        <Link href="/signup">
                          <Button
                            className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] text-white"
                            onClick={() => setIsOpen(false)}
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
