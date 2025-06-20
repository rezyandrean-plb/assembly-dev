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
      data-oid="slq76hj"
    >
      <div
        className="container mx-auto px-4 flex justify-between items-center"
        data-oid="wftvhvp"
      >
        <Link href="/" className="flex items-center" data-oid="b291iwx">
          <Image
            src="/public/images/assembly-logo.png"
            alt="Assembly Logo"
            width={180}
            height={50}
            className="object-contain"
            data-oid="7ye2rum"
          />
        </Link>

        <div
          className="hidden md:flex items-center space-x-8"
          data-oid="gstm.ve"
        >
          <Link href="/courses" className="nav-link" data-oid="z.0t7l2">
            Courses
          </Link>
          <Link href="/about" className="nav-link" data-oid="b5biw26">
            About
          </Link>
          <Link href="/plb-book" className="nav-link" data-oid="m-5or-z">
            PLB Book
          </Link>
          <Link href="/contact" className="nav-link" data-oid="j2fd4v2">
            Contact
          </Link>

          <div className="flex items-center space-x-4" data-oid="ocyz3zb">
            <CartIcon data-oid="8po8azf" />

            <div className="relative" data-oid="ji8svwk">
              <button
                onClick={toggleNotifications}
                className="relative p-1 rounded-full hover:bg-gray-100"
                data-oid="mib04-."
              >
                <Bell className="h-6 w-6 text-gray-600" data-oid="p8-:o0n" />
                {hasNotifications && (
                  <span
                    className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"
                    data-oid="_lri7z6"
                  ></span>
                )}
              </button>

              {isNotificationsOpen && (
                <div
                  className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100"
                  data-oid="z1u.9gk"
                >
                  <div
                    className="px-4 py-2 border-b border-gray-100"
                    data-oid="7bkz3q8"
                  >
                    <div
                      className="flex justify-between items-center"
                      data-oid="wx-z-z."
                    >
                      <h3
                        className="font-semibold text-gray-800"
                        data-oid="uk7nzv7"
                      >
                        Notifications
                      </h3>
                      <button
                        className="text-xs text-blue-600 hover:underline"
                        data-oid="6:2i0r6"
                      >
                        Mark all as read
                      </button>
                    </div>
                  </div>
                  <div className="max-h-80 overflow-y-auto" data-oid="az:dzcy">
                    <div
                      className="px-4 py-3 border-b border-gray-100 bg-blue-50"
                      data-oid="mv8too_"
                    >
                      <p
                        className="text-sm font-medium text-gray-800"
                        data-oid="jenpgc5"
                      >
                        New course available
                      </p>
                      <p
                        className="text-xs text-gray-500 mt-1"
                        data-oid="7w0k_zl"
                      >
                        "Advanced Property Investment Strategies" is now
                        available.
                      </p>
                      <p
                        className="text-xs text-gray-400 mt-1"
                        data-oid="jqb:65."
                      >
                        2 hours ago
                      </p>
                    </div>
                    <div
                      className="px-4 py-3 border-b border-gray-100"
                      data-oid="huiozih"
                    >
                      <p
                        className="text-sm font-medium text-gray-800"
                        data-oid=".kp1sb."
                      >
                        Course completed
                      </p>
                      <p
                        className="text-xs text-gray-500 mt-1"
                        data-oid="rqd0wxx"
                      >
                        You've completed "HDB Investment Masterclass". View your
                        certificate.
                      </p>
                      <p
                        className="text-xs text-gray-400 mt-1"
                        data-oid="s0p4hgg"
                      >
                        Yesterday
                      </p>
                    </div>
                    <div className="px-4 py-3" data-oid="wvas5pi">
                      <p
                        className="text-sm font-medium text-gray-800"
                        data-oid="v12zegm"
                      >
                        Upcoming webinar
                      </p>
                      <p
                        className="text-xs text-gray-500 mt-1"
                        data-oid="kiz52ez"
                      >
                        "Property Market Trends 2025" webinar starts in 2 days.
                      </p>
                      <p
                        className="text-xs text-gray-400 mt-1"
                        data-oid="u4eoyjw"
                      >
                        2 days ago
                      </p>
                    </div>
                  </div>
                  <div
                    className="px-4 py-2 border-t border-gray-100"
                    data-oid="ocui:l5"
                  >
                    <button
                      className="text-sm text-blue-600 hover:underline w-full text-center"
                      data-oid="_0o.f_0"
                    >
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="relative" data-oid="rpsuj4_">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 focus:outline-none border border-gray-200 rounded-full pl-1 pr-2 py-1 hover:bg-gray-50"
                data-oid="tekrvob"
              >
                <div
                  className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden"
                  data-oid="8gmp0x."
                >
                  <Image
                    src="/profile-placeholder.png"
                    alt="Profile"
                    width={32}
                    height={32}
                    className="object-cover"
                    data-oid="8oqaxvj"
                  />
                </div>
                <span className="font-medium text-sm" data-oid="taco2u.">
                  Melvin Lim
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-gray-500 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                  data-oid="gtn6t2u"
                />
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100"
                  data-oid="k0re4gf"
                >
                  <div
                    className="px-4 py-3 border-b border-gray-100"
                    data-oid="m4s3:e5"
                  >
                    <p
                      className="text-sm font-medium text-gray-900"
                      data-oid="ezltuhv"
                    >
                      melvin.lim@example.com
                    </p>
                  </div>

                  <button
                    onClick={() => handleNavigation("/profile/account")}
                    className="w-full text-left block px-4 py-2 hover:bg-gray-50"
                    data-oid="7y0yctq"
                  >
                    <div
                      className="flex items-center space-x-2"
                      data-oid="lzzj78s"
                    >
                      <User
                        className="h-5 w-5 text-gray-500"
                        data-oid="vwg3:h0"
                      />

                      <span className="text-sm" data-oid="e4kj6o:">
                        Account Settings
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() =>
                      handleNavigation("/profile/purchase-history")
                    }
                    className="w-full text-left block px-4 py-2 hover:bg-gray-50"
                    data-oid="zudj.:f"
                  >
                    <div
                      className="flex items-center space-x-2"
                      data-oid="4mmf25_"
                    >
                      <ShoppingBag
                        className="h-5 w-5 text-gray-500"
                        data-oid="3nu68eb"
                      />

                      <span className="text-sm" data-oid=":la1fyh">
                        Purchase History
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavigation("/profile/settings")}
                    className="w-full text-left block px-4 py-2 hover:bg-gray-50"
                    data-oid="3pz.a_:"
                  >
                    <div
                      className="flex items-center space-x-2"
                      data-oid="ejxhm1s"
                    >
                      <Settings
                        className="h-5 w-5 text-gray-500"
                        data-oid="iyssxw4"
                      />

                      <span className="text-sm" data-oid="2uo04_4">
                        Settings
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavigation("/profile/terms")}
                    className="w-full text-left block px-4 py-2 hover:bg-gray-50"
                    data-oid="qzm3jtg"
                  >
                    <div
                      className="flex items-center space-x-2"
                      data-oid="xdroid9"
                    >
                      <FileText
                        className="h-5 w-5 text-gray-500"
                        data-oid="1q04xwl"
                      />

                      <span className="text-sm" data-oid="w8cz22n">
                        Terms of Use
                      </span>
                    </div>
                  </button>

                  <div
                    className="border-t border-gray-100 mt-2 pt-2"
                    data-oid="4_i_ipb"
                  >
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 text-red-600"
                      data-oid="qod8q01"
                    >
                      <div
                        className="flex items-center space-x-2"
                        data-oid="uec.4m-"
                      >
                        <LogOut className="h-5 w-5" data-oid="tomld0v" />
                        <span className="text-sm" data-oid="2dk.hxu">
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

        <div className="md:hidden flex items-center" data-oid=":67gpge">
          <CartIcon data-oid="tqh2704" />
          <button className="ml-4 text-gray-600" data-oid="_19-a8k">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              data-oid="6xgeaw:"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
                data-oid="9m4j8:o"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
