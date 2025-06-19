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
      data-oid="b3ws_2h"
    >
      <div
        className="container mx-auto px-4 flex justify-between items-center"
        data-oid=".zeqydy"
      >
        <Link href="/" className="flex items-center" data-oid="0e491yl">
          <Image
            src="/images/assembly-logo.png"
            alt="Assembly SG Logo"
            width={170}
            height={170}
            data-oid="ecypekg"
          />
        </Link>

        <div
          className="hidden md:flex items-center space-x-8"
          data-oid="_izouhp"
        >
          <Link href="/courses" className="nav-link" data-oid="czvrt4_">
            Courses
          </Link>
          <Link href="/learning-paths" className="nav-link" data-oid="gme1h5v">
            Learning Paths
          </Link>
          <Link href="/plb-book" className="nav-link" data-oid="razgnnn">
            PLB Book
          </Link>
          <Link href="/about" className="nav-link" data-oid=":hpmb:e">
            About
          </Link>
          <Link href="/contact" className="nav-link" data-oid="85r09ha">
            Contact
          </Link>

          {isLoggedIn ? (
            <div className="flex items-center space-x-4" data-oid="eiwqjub">
              <CartIcon data-oid="j_l53z3" />

              <div className="relative" data-oid="6w55_vp">
                <button
                  className="relative p-1 rounded-full hover:bg-gray-100"
                  data-oid="kmzn.yv"
                >
                  <Bell className="h-6 w-6 text-gray-600" data-oid="864zfsk" />
                  {hasNotifications && (
                    <span
                      className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"
                      data-oid="nmfils2"
                    ></span>
                  )}
                </button>
              </div>

              <div className="relative" data-oid="qt574mj">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center space-x-2 focus:outline-none border border-gray-200 rounded-full pl-1 pr-2 py-1 hover:bg-gray-50"
                  data-oid="e-y04co"
                >
                  <div
                    className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden"
                    data-oid="s9xg-e:"
                  >
                    <Image
                      src="/professional-headshot.png"
                      alt="Profile"
                      width={32}
                      height={32}
                      className="object-cover"
                      data-oid="0sk169h"
                    />
                  </div>
                  <span className="font-medium text-sm" data-oid="qo-b_17">
                    Paul Tan
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-gray-500 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                    data-oid="psao26w"
                  />
                </button>

                {isDropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100"
                    data-oid=":6sdro3"
                  >
                    <div
                      className="px-4 py-3 border-b border-gray-100"
                      data-oid="f45xh7r"
                    >
                      <p
                        className="text-sm font-medium text-gray-900"
                        data-oid="9:kwcz1"
                      >
                        paul.tan@example.com
                      </p>
                      <p
                        className="text-xs text-gray-500 mt-1"
                        data-oid="_lksb6o"
                      >
                        Premium Member
                      </p>
                    </div>

                    <Link
                      href="/profile"
                      className="block px-4 py-2 hover:bg-gray-50"
                      data-oid=".89k53r"
                    >
                      <div
                        className="flex items-center space-x-2"
                        data-oid="uzivmjr"
                      >
                        <User
                          className="h-5 w-5 text-gray-500"
                          data-oid="lvm8sve"
                        />

                        <span className="text-sm" data-oid="hg-73x_">
                          Profile
                        </span>
                      </div>
                    </Link>

                    <Link
                      href="/profile/settings"
                      className="block px-4 py-2 hover:bg-gray-50"
                      data-oid="gm0yh2v"
                    >
                      <div
                        className="flex items-center space-x-2"
                        data-oid="o9hj2l8"
                      >
                        <Settings
                          className="h-5 w-5 text-gray-500"
                          data-oid="j1ydf3-"
                        />

                        <span className="text-sm" data-oid="t4kmd8p">
                          Settings
                        </span>
                      </div>
                    </Link>

                    <Link
                      href="/help"
                      className="block px-4 py-2 hover:bg-gray-50"
                      data-oid="fg.c7z0"
                    >
                      <div
                        className="flex items-center space-x-2"
                        data-oid="v3n9q_f"
                      >
                        <HelpCircle
                          className="h-5 w-5 text-gray-500"
                          data-oid="elg0h.l"
                        />

                        <span className="text-sm" data-oid="936axv-">
                          Help & Support
                        </span>
                      </div>
                    </Link>

                    <div
                      className="border-t border-gray-100 mt-2 pt-2"
                      data-oid="zb51kmi"
                    >
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 text-red-600"
                        data-oid="7a-6o:t"
                      >
                        <div
                          className="flex items-center space-x-2"
                          data-oid="zn_zubn"
                        >
                          <LogOut className="h-5 w-5" data-oid="8-i2wq5" />
                          <span className="text-sm" data-oid="m92z8v.">
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
            <div className="flex items-center space-x-4" data-oid="0vygzss">
              <CartIcon data-oid="hn0:5p." />
              <Link
                href="/profile"
                className="btn btn-outline"
                onClick={handleLogin}
                data-oid="vdt78s2"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-4 py-2 rounded-md font-medium transition-colors"
                data-oid="9t:t7lt"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>

        <div className="md:hidden flex items-center" data-oid="4ugnnss">
          <CartIcon data-oid="5s2oc3z" />
          <button
            className="ml-4 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-oid="-:41z5-"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              data-oid="jpqnmqz"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
                data-oid="igk7xfq"
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg" data-oid="v-jo_2b">
          <div
            className="container mx-auto px-4 py-3 space-y-3"
            data-oid="c:3wyhg"
          >
            <Link href="/courses" className="block py-2" data-oid="yufm9zw">
              Courses
            </Link>
            <Link
              href="/learning-paths"
              className="block py-2"
              data-oid="9wsfhmi"
            >
              Learning Paths
            </Link>
            <Link href="/plb-book" className="block py-2" data-oid="5hbt9qy">
              PLB Book
            </Link>
            <Link href="/about" className="block py-2" data-oid="ssdbqln">
              About
            </Link>
            <Link href="/contact" className="block py-2" data-oid="zg-.u01">
              Contact
            </Link>

            {isLoggedIn ? (
              <>
                <div
                  className="py-2 border-t border-gray-100 mt-2"
                  data-oid="a3nnwz."
                >
                  <div
                    className="flex items-center space-x-2 py-2"
                    data-oid="o2ehcu0"
                  >
                    <div
                      className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden"
                      data-oid="dx.dxs0"
                    >
                      <Image
                        src="/professional-headshot.png"
                        alt="Profile"
                        width={32}
                        height={32}
                        className="object-cover"
                        data-oid="iiadjjf"
                      />
                    </div>
                    <span className="font-medium" data-oid="42h58n4">
                      Paul Tan
                    </span>
                  </div>
                </div>
                <Link
                  href="/profile"
                  className="block py-2 pl-10"
                  data-oid="7kpteu0"
                >
                  Profile
                </Link>
                <Link
                  href="/profile/settings"
                  className="block py-2 pl-10"
                  data-oid="oa_k-1."
                >
                  Settings
                </Link>
                <Link
                  href="/help"
                  className="block py-2 pl-10"
                  data-oid="uffb29d"
                >
                  Help & Support
                </Link>
                <button
                  className="block py-2 pl-10 text-red-600"
                  data-oid="ypuksfb"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="block py-2" data-oid="ukt0q4y">
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="block py-2 bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-4 rounded-md font-medium transition-colors text-center"
                  data-oid="vfh6n_e"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
