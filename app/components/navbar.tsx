"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import CartIcon from "./cart-icon";
import {
  ChevronDown,
  User,
  LogOut,
  Settings,
  HelpCircle,
  Bell,
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true);

  useEffect(() => {
    // Function to check if user is logged in based on current path
    const checkLoginStatus = () => {
      // Get the current path
      const currentPath = window.location.pathname;

      // If user is on profile page or any subpath of profile, they must be logged in
      if (currentPath.startsWith("/profile")) {
        setIsLoggedIn(true);
        return;
      }

      // Check other authenticated paths
      const isAuthenticatedPath =
        currentPath.includes("/cart") ||
        sessionStorage.getItem("fromLogin") === "true";

      if (isAuthenticatedPath) {
        setIsLoggedIn(true);
      }
    };

    // Check login status immediately when component mounts
    checkLoginStatus();

    // Set up scroll event listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    sessionStorage.setItem("fromLogin", "true");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white shadow-sm py-3"
      }`}
      data-oid=".vbebop"
    >
      <div
        className="container mx-auto px-4 flex justify-between items-center"
        data-oid="jax-fo5"
      >
        <Link href="/" className="flex items-center" data-oid="63r-jig">
          <Image
            src="/images/assembly-logo.png"
            alt="Assembly SG Logo"
            width={60}
            height={60}
            data-oid="vn3646n"
          />
        </Link>

        <div
          className="hidden md:flex items-center space-x-8"
          data-oid="gcy5ev1"
        >
          <Link href="/courses" className="nav-link" data-oid="nx5bup8">
            Courses
          </Link>
          <Link href="/learning-paths" className="nav-link" data-oid="sefpfqv">
            Learning Paths
          </Link>
          <Link href="/plb-book" className="nav-link" data-oid="xoaq:3x">
            PLB Book
          </Link>
          <Link href="/about" className="nav-link" data-oid="s4ft4vn">
            About
          </Link>
          <Link href="/contact" className="nav-link" data-oid="cq8_8cm">
            Contact
          </Link>

          {isLoggedIn ? (
            <div className="flex items-center space-x-4" data-oid="wab8tl3">
              <CartIcon data-oid="g18z.te" />

              <div className="relative" data-oid="9lqe6e-">
                <button
                  className="relative p-1 rounded-full hover:bg-gray-100"
                  data-oid="2:onc-e"
                >
                  <Bell className="h-6 w-6 text-gray-600" data-oid=".w0eaq4" />
                  {hasNotifications && (
                    <span
                      className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"
                      data-oid="afbkd93"
                    ></span>
                  )}
                </button>
              </div>

              <div className="relative" data-oid="3720x68">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center space-x-2 focus:outline-none border border-gray-200 rounded-full pl-1 pr-2 py-1 hover:bg-gray-50"
                  data-oid="g0eyj0z"
                >
                  <div
                    className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden"
                    data-oid=":2l5f4u"
                  >
                    <Image
                      src="/professional-headshot.png"
                      alt="Profile"
                      width={32}
                      height={32}
                      className="object-cover"
                      data-oid="4anre89"
                    />
                  </div>
                  <span className="font-medium text-sm" data-oid="vq8uap:">
                    Paul Tan
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-gray-500 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                    data-oid="htsr379"
                  />
                </button>

                {isDropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100"
                    data-oid="1.b-orq"
                  >
                    <div
                      className="px-4 py-3 border-b border-gray-100"
                      data-oid="1c7if:p"
                    >
                      <p
                        className="text-sm font-medium text-gray-900"
                        data-oid="vhwkqgk"
                      >
                        paul.tan@example.com
                      </p>
                      <p
                        className="text-xs text-gray-500 mt-1"
                        data-oid="q98arh6"
                      >
                        Premium Member
                      </p>
                    </div>

                    <Link
                      href="/profile"
                      className="block px-4 py-2 hover:bg-gray-50"
                      data-oid="jwtbkzo"
                    >
                      <div
                        className="flex items-center space-x-2"
                        data-oid="9:c.b39"
                      >
                        <User
                          className="h-5 w-5 text-gray-500"
                          data-oid="t3t9x8g"
                        />

                        <span className="text-sm" data-oid="tmfhgip">
                          Profile
                        </span>
                      </div>
                    </Link>

                    <Link
                      href="/profile/settings"
                      className="block px-4 py-2 hover:bg-gray-50"
                      data-oid="8-.rba2"
                    >
                      <div
                        className="flex items-center space-x-2"
                        data-oid="i.:w:zw"
                      >
                        <Settings
                          className="h-5 w-5 text-gray-500"
                          data-oid="7a-vz8i"
                        />

                        <span className="text-sm" data-oid="wuof0ha">
                          Settings
                        </span>
                      </div>
                    </Link>

                    <Link
                      href="/help"
                      className="block px-4 py-2 hover:bg-gray-50"
                      data-oid="0geiuoo"
                    >
                      <div
                        className="flex items-center space-x-2"
                        data-oid="0y:hsyw"
                      >
                        <HelpCircle
                          className="h-5 w-5 text-gray-500"
                          data-oid="h_l2kc7"
                        />

                        <span className="text-sm" data-oid="h-5rf4w">
                          Help & Support
                        </span>
                      </div>
                    </Link>

                    <div
                      className="border-t border-gray-100 mt-2 pt-2"
                      data-oid="yi5a1f5"
                    >
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 text-red-600"
                        data-oid="bv4_zy_"
                      >
                        <div
                          className="flex items-center space-x-2"
                          data-oid="9-1wr82"
                        >
                          <LogOut className="h-5 w-5" data-oid="ir55rj4" />
                          <span className="text-sm" data-oid="gq67z-z">
                            Log out
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-4" data-oid=".rmeka:">
              <CartIcon data-oid="a:wxkpf" />
              <Link
                href="/profile"
                className="btn btn-outline"
                onClick={handleLogin}
                data-oid="5n65_5f"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="btn btn-primary"
                data-oid="k09a-1t"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

        <div className="md:hidden flex items-center" data-oid="n-owrip">
          <CartIcon data-oid="v.e98yo" />
          <button
            className="ml-4 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-oid="2jscje-"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              data-oid="_lxy.xr"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
                data-oid="xdh9ekp"
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg" data-oid="dfo4.pk">
          <div
            className="container mx-auto px-4 py-3 space-y-3"
            data-oid="8vqj.w5"
          >
            <Link href="/courses" className="block py-2" data-oid="gg5gg-4">
              Courses
            </Link>
            <Link
              href="/learning-paths"
              className="block py-2"
              data-oid="zhwz6cq"
            >
              Learning Paths
            </Link>
            <Link href="/plb-book" className="block py-2" data-oid="fvikl1o">
              PLB Book
            </Link>
            <Link href="/about" className="block py-2" data-oid="4hnpmct">
              About
            </Link>
            <Link href="/contact" className="block py-2" data-oid="dgwx8k:">
              Contact
            </Link>

            {isLoggedIn ? (
              <>
                <div
                  className="py-2 border-t border-gray-100 mt-2"
                  data-oid="te2.0.9"
                >
                  <div
                    className="flex items-center space-x-2 py-2"
                    data-oid=":9rof.z"
                  >
                    <div
                      className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden"
                      data-oid=".1sezx-"
                    >
                      <Image
                        src="/professional-headshot.png"
                        alt="Profile"
                        width={32}
                        height={32}
                        className="object-cover"
                        data-oid="36g6u66"
                      />
                    </div>
                    <span className="font-medium" data-oid="f4hfzmk">
                      Paul Tan
                    </span>
                  </div>
                </div>
                <Link
                  href="/profile"
                  className="block py-2 pl-10"
                  data-oid="8y7j1d_"
                >
                  Profile
                </Link>
                <Link
                  href="/profile/settings"
                  className="block py-2 pl-10"
                  data-oid="7de5ayj"
                >
                  Settings
                </Link>
                <Link
                  href="/help"
                  className="block py-2 pl-10"
                  data-oid="kehm5at"
                >
                  Help & Support
                </Link>
                <button
                  className="block py-2 pl-10 text-red-600"
                  data-oid=".gntgxq"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="block py-2" data-oid="fpy0dvv">
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="block py-2 text-blue-600 font-medium"
                  data-oid=":5:rzn_"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
