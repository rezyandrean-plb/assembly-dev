"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Bell,
  ChevronDown,
  User,
  LogOut,
  Settings,
  FileText,
  ShoppingBag,
} from "lucide-react";
import CartIcon from "./cart-icon";

export default function ProfileNavbar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (isNotificationsOpen) setIsNotificationsOpen(false);
  };

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
    if (isDropdownOpen) setIsDropdownOpen(false);
  };

  const handleNavigation = (href) => {
    setIsDropdownOpen(false);
    setIsNotificationsOpen(false);
    router.push(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white shadow-sm py-3"
      }`}
      data-oid="ktkop4k"
    >
      <div
        className="container mx-auto px-4 flex justify-between items-center"
        data-oid="7jofida"
      >
        <Link href="/" className="flex items-center" data-oid="cgwdlew">
          <Image
            src="/images/assembly-logo.png"
            alt="Assembly Logo"
            width={180}
            height={50}
            className="object-contain"
            data-oid="e1yc:ts"
          />
        </Link>

        <div
          className="hidden md:flex items-center space-x-8"
          data-oid="1p9e2rm"
        >
          <Link href="/courses" className="nav-link" data-oid="0eaiywm">
            Courses
          </Link>
          <Link href="/about" className="nav-link" data-oid="1qql.5f">
            About
          </Link>
          <Link href="/plb-book" className="nav-link" data-oid="gth4vyv">
            PLB Book
          </Link>
          <Link href="/contact" className="nav-link" data-oid="597vhxf">
            Contact
          </Link>

          <div className="flex items-center space-x-4" data-oid=".wrj56r">
            <CartIcon data-oid="ctjkvaz" />

            <div className="relative" data-oid="cn::b8l">
              <button
                onClick={toggleNotifications}
                className="relative p-1 rounded-full hover:bg-gray-100"
                data-oid="5b3cli1"
              >
                <Bell className="h-6 w-6 text-gray-600" data-oid="f3ccj3u" />
                {hasNotifications && (
                  <span
                    className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"
                    data-oid="bpu:ppi"
                  ></span>
                )}
              </button>

              {isNotificationsOpen && (
                <div
                  className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100"
                  data-oid="2h.v3gt"
                >
                  <div
                    className="px-4 py-2 border-b border-gray-100"
                    data-oid="8kgrgqv"
                  >
                    <div
                      className="flex justify-between items-center"
                      data-oid="11p0jlc"
                    >
                      <h3
                        className="font-semibold text-gray-800"
                        data-oid="7vqh6pr"
                      >
                        Notifications
                      </h3>
                      <button
                        className="text-xs text-blue-600 hover:underline"
                        data-oid="xvtdti2"
                      >
                        Mark all as read
                      </button>
                    </div>
                  </div>
                  <div className="max-h-80 overflow-y-auto" data-oid="5gqpj.0">
                    <div
                      className="px-4 py-3 border-b border-gray-100 bg-blue-50"
                      data-oid="q-yj6hl"
                    >
                      <p
                        className="text-sm font-medium text-gray-800"
                        data-oid="v42:032"
                      >
                        New course available
                      </p>
                      <p
                        className="text-xs text-gray-500 mt-1"
                        data-oid=":n6ut4a"
                      >
                        "Advanced Property Investment Strategies" is now
                        available.
                      </p>
                      <p
                        className="text-xs text-gray-400 mt-1"
                        data-oid="r8.o6_n"
                      >
                        2 hours ago
                      </p>
                    </div>
                    <div
                      className="px-4 py-3 border-b border-gray-100"
                      data-oid="x-y0ju."
                    >
                      <p
                        className="text-sm font-medium text-gray-800"
                        data-oid="iwocv.m"
                      >
                        Course completed
                      </p>
                      <p
                        className="text-xs text-gray-500 mt-1"
                        data-oid="23tvz-z"
                      >
                        You've completed "HDB Investment Masterclass". View your
                        certificate.
                      </p>
                      <p
                        className="text-xs text-gray-400 mt-1"
                        data-oid="yhh7tic"
                      >
                        Yesterday
                      </p>
                    </div>
                    <div className="px-4 py-3" data-oid="18e2bea">
                      <p
                        className="text-sm font-medium text-gray-800"
                        data-oid="ly4sjdz"
                      >
                        Upcoming webinar
                      </p>
                      <p
                        className="text-xs text-gray-500 mt-1"
                        data-oid="kighfvh"
                      >
                        "Property Market Trends 2025" webinar starts in 2 days.
                      </p>
                      <p
                        className="text-xs text-gray-400 mt-1"
                        data-oid="a3vqz2_"
                      >
                        2 days ago
                      </p>
                    </div>
                  </div>
                  <div
                    className="px-4 py-2 border-t border-gray-100"
                    data-oid=".44n03m"
                  >
                    <button
                      className="text-sm text-blue-600 hover:underline w-full text-center"
                      data-oid="sb_a.x7"
                    >
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="relative" data-oid="mwr7kl8">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 focus:outline-none border border-gray-200 rounded-full pl-1 pr-2 py-1 hover:bg-gray-50"
                data-oid="iq0xg8b"
              >
                <div
                  className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden"
                  data-oid="nb6v3ho"
                >
                  <Image
                    src="/profile-placeholder.png"
                    alt="Profile"
                    width={32}
                    height={32}
                    className="object-cover"
                    data-oid="yv2krj5"
                  />
                </div>
                <span className="font-medium text-sm" data-oid="b_c6i7g">
                  Melvin Lim
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-gray-500 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                  data-oid="trtpyi9"
                />
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100"
                  data-oid="ucrf6ti"
                >
                  <div
                    className="px-4 py-3 border-b border-gray-100"
                    data-oid="wd8:mzz"
                  >
                    <p
                      className="text-sm font-medium text-gray-900"
                      data-oid="g0e_tkj"
                    >
                      melvin.lim@example.com
                    </p>
                  </div>

                  <button
                    onClick={() => handleNavigation("/profile/account")}
                    className="w-full text-left block px-4 py-2 hover:bg-gray-50"
                    data-oid="mxu16o3"
                  >
                    <div
                      className="flex items-center space-x-2"
                      data-oid="sqn79v8"
                    >
                      <User
                        className="h-5 w-5 text-gray-500"
                        data-oid="qeaq_9z"
                      />

                      <span className="text-sm" data-oid="v_ozcd0">
                        Account Settings
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() =>
                      handleNavigation("/profile/purchase-history")
                    }
                    className="w-full text-left block px-4 py-2 hover:bg-gray-50"
                    data-oid="5v922g6"
                  >
                    <div
                      className="flex items-center space-x-2"
                      data-oid="x6ttuu5"
                    >
                      <ShoppingBag
                        className="h-5 w-5 text-gray-500"
                        data-oid="u3zo-0t"
                      />

                      <span className="text-sm" data-oid="cd:qgzw">
                        Purchase History
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavigation("/profile/settings")}
                    className="w-full text-left block px-4 py-2 hover:bg-gray-50"
                    data-oid="ilu8rke"
                  >
                    <div
                      className="flex items-center space-x-2"
                      data-oid="bbj8p56"
                    >
                      <Settings
                        className="h-5 w-5 text-gray-500"
                        data-oid="usfsewj"
                      />

                      <span className="text-sm" data-oid="99__4-e">
                        Settings
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavigation("/profile/terms")}
                    className="w-full text-left block px-4 py-2 hover:bg-gray-50"
                    data-oid="c7u.x4s"
                  >
                    <div
                      className="flex items-center space-x-2"
                      data-oid="csca1vs"
                    >
                      <FileText
                        className="h-5 w-5 text-gray-500"
                        data-oid="c1zo4f8"
                      />

                      <span className="text-sm" data-oid="lpdqxzf">
                        Terms of Use
                      </span>
                    </div>
                  </button>

                  <div
                    className="border-t border-gray-100 mt-2 pt-2"
                    data-oid="p5r0ykd"
                  >
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 text-red-600"
                      data-oid="-2c3ren"
                    >
                      <div
                        className="flex items-center space-x-2"
                        data-oid="x5q2t8y"
                      >
                        <LogOut className="h-5 w-5" data-oid="-p0mh0c" />
                        <span className="text-sm" data-oid="w.qkshj">
                          Log out
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="md:hidden flex items-center" data-oid="uh:ty6i">
          <CartIcon data-oid="vhvc:85" />
          <button className="ml-4 text-gray-600" data-oid="znrwn-u">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              data-oid="ddlc6rx"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
                data-oid="cx6ap0n"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
