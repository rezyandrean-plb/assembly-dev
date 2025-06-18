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
      data-oid="rqymn1c"
    >
      <div
        className="container mx-auto px-4 flex justify-between items-center"
        data-oid="tfei-no"
      >
        <Link href="/" className="flex items-center" data-oid="xz_je5s">
          <Image
            src="/images/assembly-logo.png"
            alt="Assembly SG Logo"
            width={60}
            height={60}
            data-oid="jqfw7w6"
          />
        </Link>

        <div
          className="hidden md:flex items-center space-x-8"
          data-oid="ecp.t-q"
        >
          <Link href="/courses" className="nav-link" data-oid="y126by1">
            Courses
          </Link>
          <Link href="/learning-paths" className="nav-link" data-oid="7umok2:">
            Learning Paths
          </Link>
          <Link href="/plb-book" className="nav-link" data-oid="ra7heb-">
            PLB Book
          </Link>
          <Link href="/about" className="nav-link" data-oid="y41-xht">
            About
          </Link>
          <Link href="/contact" className="nav-link" data-oid="io_mg9h">
            Contact
          </Link>

          {isLoggedIn ? (
            <div className="flex items-center space-x-4" data-oid="8.4obn3">
              <CartIcon data-oid="b83.z9u" />

              <div className="relative" data-oid="z6:z_4x">
                <button
                  className="relative p-1 rounded-full hover:bg-gray-100"
                  data-oid="a6r:nza"
                >
                  <Bell className="h-6 w-6 text-gray-600" data-oid="r.jc4ar" />
                  {hasNotifications && (
                    <span
                      className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"
                      data-oid="be5u.7m"
                    ></span>
                  )}
                </button>
              </div>

              <div className="relative" data-oid="76ykqrr">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center space-x-2 focus:outline-none border border-gray-200 rounded-full pl-1 pr-2 py-1 hover:bg-gray-50"
                  data-oid="63pjpx5"
                >
                  <div
                    className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden"
                    data-oid="mkwmyhl"
                  >
                    <Image
                      src="/professional-headshot.png"
                      alt="Profile"
                      width={32}
                      height={32}
                      className="object-cover"
                      data-oid="jkfxauz"
                    />
                  </div>
                  <span className="font-medium text-sm" data-oid="38w194s">
                    Paul Tan
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-gray-500 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                    data-oid="lur8wic"
                  />
                </button>

                {isDropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100"
                    data-oid="tzeq4ul"
                  >
                    <div
                      className="px-4 py-3 border-b border-gray-100"
                      data-oid="3mss-6l"
                    >
                      <p
                        className="text-sm font-medium text-gray-900"
                        data-oid="jmakp3a"
                      >
                        paul.tan@example.com
                      </p>
                      <p
                        className="text-xs text-gray-500 mt-1"
                        data-oid="pcf259x"
                      >
                        Premium Member
                      </p>
                    </div>

                    <Link
                      href="/profile"
                      className="block px-4 py-2 hover:bg-gray-50"
                      data-oid="sqr1ss8"
                    >
                      <div
                        className="flex items-center space-x-2"
                        data-oid="j0ktqml"
                      >
                        <User
                          className="h-5 w-5 text-gray-500"
                          data-oid="zciaw3e"
                        />

                        <span className="text-sm" data-oid="cj4m-bz">
                          Profile
                        </span>
                      </div>
                    </Link>

                    <Link
                      href="/profile/settings"
                      className="block px-4 py-2 hover:bg-gray-50"
                      data-oid=":qacpmw"
                    >
                      <div
                        className="flex items-center space-x-2"
                        data-oid="viltco8"
                      >
                        <Settings
                          className="h-5 w-5 text-gray-500"
                          data-oid="l2bzbt9"
                        />

                        <span className="text-sm" data-oid="9pkzw76">
                          Settings
                        </span>
                      </div>
                    </Link>

                    <Link
                      href="/help"
                      className="block px-4 py-2 hover:bg-gray-50"
                      data-oid="glm9ql."
                    >
                      <div
                        className="flex items-center space-x-2"
                        data-oid="5lj0n65"
                      >
                        <HelpCircle
                          className="h-5 w-5 text-gray-500"
                          data-oid="tmld4dg"
                        />

                        <span className="text-sm" data-oid="r77xus_">
                          Help & Support
                        </span>
                      </div>
                    </Link>

                    <div
                      className="border-t border-gray-100 mt-2 pt-2"
                      data-oid="i36-9pi"
                    >
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 text-red-600"
                        data-oid="rjrzta3"
                      >
                        <div
                          className="flex items-center space-x-2"
                          data-oid="jxjh8lp"
                        >
                          <LogOut className="h-5 w-5" data-oid="m5n_50b" />
                          <span className="text-sm" data-oid="csxcrea">
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
            <div className="flex items-center space-x-4" data-oid="z03s.:c">
              <CartIcon data-oid="aj2gg.9" />
              <Link
                href="/profile"
                className="btn btn-outline"
                onClick={handleLogin}
                data-oid="cwexd7z"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="btn btn-primary"
                data-oid="-zrpcqe"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

        <div className="md:hidden flex items-center" data-oid="1dh8_xu">
          <CartIcon data-oid="eu84igi" />
          <button
            className="ml-4 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-oid="4q0_s9r"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              data-oid="75-psm8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
                data-oid="ux8-m:r"
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg" data-oid="90xvfp9">
          <div
            className="container mx-auto px-4 py-3 space-y-3"
            data-oid="-_dlsl:"
          >
            <Link href="/courses" className="block py-2" data-oid="sgoky2.">
              Courses
            </Link>
            <Link
              href="/learning-paths"
              className="block py-2"
              data-oid="66udptu"
            >
              Learning Paths
            </Link>
            <Link href="/plb-book" className="block py-2" data-oid="dmborq9">
              PLB Book
            </Link>
            <Link href="/about" className="block py-2" data-oid="w1f6.:0">
              About
            </Link>
            <Link href="/contact" className="block py-2" data-oid="4v:sw:s">
              Contact
            </Link>

            {isLoggedIn ? (
              <>
                <div
                  className="py-2 border-t border-gray-100 mt-2"
                  data-oid="375ic8j"
                >
                  <div
                    className="flex items-center space-x-2 py-2"
                    data-oid="2v56l6y"
                  >
                    <div
                      className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden"
                      data-oid="6ib1eig"
                    >
                      <Image
                        src="/professional-headshot.png"
                        alt="Profile"
                        width={32}
                        height={32}
                        className="object-cover"
                        data-oid="g840u7i"
                      />
                    </div>
                    <span className="font-medium" data-oid="zr3d44p">
                      Paul Tan
                    </span>
                  </div>
                </div>
                <Link
                  href="/profile"
                  className="block py-2 pl-10"
                  data-oid="e1qby5e"
                >
                  Profile
                </Link>
                <Link
                  href="/profile/settings"
                  className="block py-2 pl-10"
                  data-oid="9_fv.:m"
                >
                  Settings
                </Link>
                <Link
                  href="/help"
                  className="block py-2 pl-10"
                  data-oid="xrjuosm"
                >
                  Help & Support
                </Link>
                <button
                  className="block py-2 pl-10 text-red-600"
                  data-oid="y.zdqk0"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="block py-2" data-oid="y7hoq44">
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="block py-2 text-blue-600 font-medium"
                  data-oid="mb6d4qu"
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
