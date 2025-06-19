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
      data-oid="o4ck__3"
    >
      <div
        className="container mx-auto px-4 flex justify-between items-center"
        data-oid="ga9gw5e"
      >
        <Link href="/" className="flex items-center" data-oid="puu98cm">
          <Image
            src="/images/assembly-logo.png"
            alt="Assembly SG Logo"
            width={170}
            height={170}
            data-oid="98rb_y5"
          />
        </Link>

        <div
          className="hidden md:flex items-center space-x-8"
          data-oid="vl4eyhz"
        >
          <Link href="/courses" className="nav-link" data-oid="9-c3ivq">
            Courses
          </Link>
          <Link href="/learning-paths" className="nav-link" data-oid=":wl2a58">
            Learning Paths
          </Link>
          <Link href="/plb-book" className="nav-link" data-oid="3qbbi.:">
            PLB Book
          </Link>
          <Link href="/about" className="nav-link" data-oid="g2dir5m">
            About
          </Link>
          <Link href="/contact" className="nav-link" data-oid="_ijhbo:">
            Contact
          </Link>

          {isLoggedIn ? (
            <div className="flex items-center space-x-4" data-oid="vo15fcz">
              <CartIcon data-oid="pot6dy_" />

              <div className="relative" data-oid="uix8fci">
                <button
                  className="relative p-1 rounded-full hover:bg-gray-100"
                  data-oid="_noba30"
                >
                  <Bell className="h-6 w-6 text-gray-600" data-oid=":6smbzd" />
                  {hasNotifications && (
                    <span
                      className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"
                      data-oid="tf44uce"
                    ></span>
                  )}
                </button>
              </div>

              <div className="relative" data-oid="eg_gyuq">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center space-x-2 focus:outline-none border border-gray-200 rounded-full pl-1 pr-2 py-1 hover:bg-gray-50"
                  data-oid="2xsrmhj"
                >
                  <div
                    className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden"
                    data-oid="i849bo7"
                  >
                    <Image
                      src="/professional-headshot.png"
                      alt="Profile"
                      width={32}
                      height={32}
                      className="object-cover"
                      data-oid="7qc2r7a"
                    />
                  </div>
                  <span className="font-medium text-sm" data-oid="dffal4c">
                    Paul Tan
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-gray-500 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                    data-oid="6y7zp6-"
                  />
                </button>

                {isDropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100"
                    data-oid="4vy3epl"
                  >
                    <div
                      className="px-4 py-3 border-b border-gray-100"
                      data-oid="0fhcg.x"
                    >
                      <p
                        className="text-sm font-medium text-gray-900"
                        data-oid="rbjgfdh"
                      >
                        paul.tan@example.com
                      </p>
                      <p
                        className="text-xs text-gray-500 mt-1"
                        data-oid="yy2u-lg"
                      >
                        Premium Member
                      </p>
                    </div>

                    <Link
                      href="/profile"
                      className="block px-4 py-2 hover:bg-gray-50"
                      data-oid="8mb3134"
                    >
                      <div
                        className="flex items-center space-x-2"
                        data-oid="jskmymq"
                      >
                        <User
                          className="h-5 w-5 text-gray-500"
                          data-oid="w9u59yw"
                        />

                        <span className="text-sm" data-oid="f31x0vq">
                          Profile
                        </span>
                      </div>
                    </Link>

                    <Link
                      href="/profile/settings"
                      className="block px-4 py-2 hover:bg-gray-50"
                      data-oid="5-zvx8a"
                    >
                      <div
                        className="flex items-center space-x-2"
                        data-oid="o73q7.:"
                      >
                        <Settings
                          className="h-5 w-5 text-gray-500"
                          data-oid="00dc89j"
                        />

                        <span className="text-sm" data-oid="mqd3-8q">
                          Settings
                        </span>
                      </div>
                    </Link>

                    <Link
                      href="/help"
                      className="block px-4 py-2 hover:bg-gray-50"
                      data-oid="zyzvg_."
                    >
                      <div
                        className="flex items-center space-x-2"
                        data-oid="cctbm6."
                      >
                        <HelpCircle
                          className="h-5 w-5 text-gray-500"
                          data-oid="i8i5ww9"
                        />

                        <span className="text-sm" data-oid="7rrtype">
                          Help & Support
                        </span>
                      </div>
                    </Link>

                    <div
                      className="border-t border-gray-100 mt-2 pt-2"
                      data-oid="ay77abs"
                    >
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 text-red-600"
                        data-oid="pibivgd"
                      >
                        <div
                          className="flex items-center space-x-2"
                          data-oid="y:cbgbi"
                        >
                          <LogOut className="h-5 w-5" data-oid="alqvhcp" />
                          <span className="text-sm" data-oid="8lstpzc">
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
            <div className="flex items-center space-x-4" data-oid="dkf1qeo">
              <CartIcon data-oid="ojg483a" />
              <Link
                href="/profile"
                className="btn btn-outline"
                onClick={handleLogin}
                data-oid="3kvng7a"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-4 py-2 rounded-md font-medium transition-colors"
                data-oid="e5dt:ds"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>

        <div className="md:hidden flex items-center" data-oid="_qe6ns:">
          <CartIcon data-oid="d00cnik" />
          <button
            className="ml-4 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-oid="llsl28x"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              data-oid="40u21v2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
                data-oid="num:cl."
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg" data-oid="cmv68e0">
          <div
            className="container mx-auto px-4 py-3 space-y-3"
            data-oid=".olzd-b"
          >
            <Link href="/courses" className="block py-2" data-oid="8gdgtep">
              Courses
            </Link>
            <Link
              href="/learning-paths"
              className="block py-2"
              data-oid="krjo3k5"
            >
              Learning Paths
            </Link>
            <Link href="/plb-book" className="block py-2" data-oid="0wzgccw">
              PLB Book
            </Link>
            <Link href="/about" className="block py-2" data-oid="5iy:96z">
              About
            </Link>
            <Link href="/contact" className="block py-2" data-oid="iqujg6x">
              Contact
            </Link>

            {isLoggedIn ? (
              <>
                <div
                  className="py-2 border-t border-gray-100 mt-2"
                  data-oid="s3m67kd"
                >
                  <div
                    className="flex items-center space-x-2 py-2"
                    data-oid="zzwn71l"
                  >
                    <div
                      className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden"
                      data-oid="-ax83ef"
                    >
                      <Image
                        src="/professional-headshot.png"
                        alt="Profile"
                        width={32}
                        height={32}
                        className="object-cover"
                        data-oid="or6w-9u"
                      />
                    </div>
                    <span className="font-medium" data-oid="5nek-i6">
                      Paul Tan
                    </span>
                  </div>
                </div>
                <Link
                  href="/profile"
                  className="block py-2 pl-10"
                  data-oid="6debh6g"
                >
                  Profile
                </Link>
                <Link
                  href="/profile/settings"
                  className="block py-2 pl-10"
                  data-oid="tmq7eno"
                >
                  Settings
                </Link>
                <Link
                  href="/help"
                  className="block py-2 pl-10"
                  data-oid="1_j.e_n"
                >
                  Help & Support
                </Link>
                <button
                  className="block py-2 pl-10 text-red-600"
                  data-oid="kmb8..u"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="block py-2" data-oid="_4dp:j6">
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="block py-2 bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-4 rounded-md font-medium transition-colors text-center"
                  data-oid="rhzu5d."
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
