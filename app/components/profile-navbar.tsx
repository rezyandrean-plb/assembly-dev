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
      data-oid="btd0wt:"
    >
      <div
        className="container mx-auto px-4 flex justify-between items-center"
        data-oid="ycv:hlw"
      >
        <Link href="/" className="flex items-center" data-oid="c7b4_rw">
          <Image
            src="/public/images/assembly-logo.png"
            alt="Assembly Logo"
            width={180}
            height={50}
            className="object-contain"
            data-oid="ftv8qr:"
          />
        </Link>

        <div
          className="hidden md:flex items-center space-x-8"
          data-oid="0z6nlnr"
        >
          <Link href="/courses" className="nav-link" data-oid="gj40cw8">
            Courses
          </Link>
          <Link href="/about" className="nav-link" data-oid="p3e7dyg">
            About
          </Link>
          <Link href="/plb-book" className="nav-link" data-oid="aa2o6a_">
            PLB Book
          </Link>
          <Link href="/contact" className="nav-link" data-oid="tqs_5z0">
            Contact
          </Link>

          <div className="flex items-center space-x-4" data-oid="oltatkb">
            <CartIcon data-oid="2nvw:pf" />

            <div className="relative" data-oid="0hzxs2-">
              <button
                onClick={toggleNotifications}
                className="relative p-1 rounded-full hover:bg-gray-100"
                data-oid=".xe2aec"
              >
                <Bell className="h-6 w-6 text-gray-600" data-oid="3u3dat_" />
                {hasNotifications && (
                  <span
                    className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"
                    data-oid="zq.m2ew"
                  ></span>
                )}
              </button>

              {isNotificationsOpen && (
                <div
                  className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100"
                  data-oid="05oxqws"
                >
                  <div
                    className="px-4 py-2 border-b border-gray-100"
                    data-oid="f:f0dl9"
                  >
                    <div
                      className="flex justify-between items-center"
                      data-oid="07mc10r"
                    >
                      <h3
                        className="font-semibold text-gray-800"
                        data-oid="hjnnzm:"
                      >
                        Notifications
                      </h3>
                      <button
                        className="text-xs text-blue-600 hover:underline"
                        data-oid="w0mn7f9"
                      >
                        Mark all as read
                      </button>
                    </div>
                  </div>
                  <div className="max-h-80 overflow-y-auto" data-oid="xw277q2">
                    <div
                      className="px-4 py-3 border-b border-gray-100 bg-blue-50"
                      data-oid="9s8o.s8"
                    >
                      <p
                        className="text-sm font-medium text-gray-800"
                        data-oid="a86v:8v"
                      >
                        New course available
                      </p>
                      <p
                        className="text-xs text-gray-500 mt-1"
                        data-oid="_..:3my"
                      >
                        "Advanced Property Investment Strategies" is now
                        available.
                      </p>
                      <p
                        className="text-xs text-gray-400 mt-1"
                        data-oid="iwid-q1"
                      >
                        2 hours ago
                      </p>
                    </div>
                    <div
                      className="px-4 py-3 border-b border-gray-100"
                      data-oid="e9oe3zz"
                    >
                      <p
                        className="text-sm font-medium text-gray-800"
                        data-oid="l2_0ebo"
                      >
                        Course completed
                      </p>
                      <p
                        className="text-xs text-gray-500 mt-1"
                        data-oid=".3w0f1k"
                      >
                        You've completed "HDB Investment Masterclass". View your
                        certificate.
                      </p>
                      <p
                        className="text-xs text-gray-400 mt-1"
                        data-oid="azma_99"
                      >
                        Yesterday
                      </p>
                    </div>
                    <div className="px-4 py-3" data-oid="y2tga5c">
                      <p
                        className="text-sm font-medium text-gray-800"
                        data-oid="2kkagp-"
                      >
                        Upcoming webinar
                      </p>
                      <p
                        className="text-xs text-gray-500 mt-1"
                        data-oid="c3d:k:o"
                      >
                        "Property Market Trends 2025" webinar starts in 2 days.
                      </p>
                      <p
                        className="text-xs text-gray-400 mt-1"
                        data-oid="2z6sl7s"
                      >
                        2 days ago
                      </p>
                    </div>
                  </div>
                  <div
                    className="px-4 py-2 border-t border-gray-100"
                    data-oid="4j6zwlo"
                  >
                    <button
                      className="text-sm text-blue-600 hover:underline w-full text-center"
                      data-oid="45a57oh"
                    >
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="relative" data-oid="emrfvtw">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 focus:outline-none border border-gray-200 rounded-full pl-1 pr-2 py-1 hover:bg-gray-50"
                data-oid="i9wm5w4"
              >
                <div
                  className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden"
                  data-oid="g-gnf8j"
                >
                  <Image
                    src="/profile-placeholder.png"
                    alt="Profile"
                    width={32}
                    height={32}
                    className="object-cover"
                    data-oid="v49gx2m"
                  />
                </div>
                <span className="font-medium text-sm" data-oid="4i42ca5">
                  Melvin Lim
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-gray-500 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                  data-oid="tw1qzks"
                />
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100"
                  data-oid="es0xsjt"
                >
                  <div
                    className="px-4 py-3 border-b border-gray-100"
                    data-oid="djh:nnu"
                  >
                    <p
                      className="text-sm font-medium text-gray-900"
                      data-oid="4w2vk:i"
                    >
                      melvin.lim@example.com
                    </p>
                  </div>

                  <button
                    onClick={() => handleNavigation("/profile/account")}
                    className="w-full text-left block px-4 py-2 hover:bg-gray-50"
                    data-oid="06dji0s"
                  >
                    <div
                      className="flex items-center space-x-2"
                      data-oid="sg2pn3m"
                    >
                      <User
                        className="h-5 w-5 text-gray-500"
                        data-oid="-ori:hw"
                      />

                      <span className="text-sm" data-oid="dk6t4cy">
                        Account Settings
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() =>
                      handleNavigation("/profile/purchase-history")
                    }
                    className="w-full text-left block px-4 py-2 hover:bg-gray-50"
                    data-oid="mnni1qk"
                  >
                    <div
                      className="flex items-center space-x-2"
                      data-oid="8t6qam."
                    >
                      <ShoppingBag
                        className="h-5 w-5 text-gray-500"
                        data-oid="lztpj32"
                      />

                      <span className="text-sm" data-oid="k39t-5r">
                        Purchase History
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavigation("/profile/settings")}
                    className="w-full text-left block px-4 py-2 hover:bg-gray-50"
                    data-oid="q_-hil-"
                  >
                    <div
                      className="flex items-center space-x-2"
                      data-oid="xbk.hb."
                    >
                      <Settings
                        className="h-5 w-5 text-gray-500"
                        data-oid="1-0h7j8"
                      />

                      <span className="text-sm" data-oid="9rxcmdz">
                        Settings
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavigation("/profile/terms")}
                    className="w-full text-left block px-4 py-2 hover:bg-gray-50"
                    data-oid="7eiy9xw"
                  >
                    <div
                      className="flex items-center space-x-2"
                      data-oid="frpqm:e"
                    >
                      <FileText
                        className="h-5 w-5 text-gray-500"
                        data-oid="kr4zy1x"
                      />

                      <span className="text-sm" data-oid="a_r2noh">
                        Terms of Use
                      </span>
                    </div>
                  </button>

                  <div
                    className="border-t border-gray-100 mt-2 pt-2"
                    data-oid="k3vzyuc"
                  >
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 text-red-600"
                      data-oid="cmjqebk"
                    >
                      <div
                        className="flex items-center space-x-2"
                        data-oid="cgu15bm"
                      >
                        <LogOut className="h-5 w-5" data-oid="hi:s95i" />
                        <span className="text-sm" data-oid="pbu8wt:">
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

        <div className="md:hidden flex items-center" data-oid="jlb3fli">
          <CartIcon data-oid="ocqow-f" />
          <button className="ml-4 text-gray-600" data-oid="1m32dd.">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              data-oid="1fyi6ri"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
                data-oid="2a:vka5"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
