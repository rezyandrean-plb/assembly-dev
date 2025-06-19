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
      data-oid="3aif1bm"
    >
      <div
        className="container mx-auto px-4 flex justify-between items-center"
        data-oid="33s711y"
      >
        <Link href="/" className="flex items-center" data-oid="59zd0pu">
          <Image
            src="/public/images/assembly-logo.png"
            alt="Assembly Logo"
            width={180}
            height={50}
            className="object-contain"
            data-oid="f7pnlmb"
          />
        </Link>

        <div
          className="hidden md:flex items-center space-x-8"
          data-oid="z6pyld5"
        >
          <Link href="/courses" className="nav-link" data-oid="7pm04-n">
            Courses
          </Link>
          <Link href="/about" className="nav-link" data-oid="2m8fww7">
            About
          </Link>
          <Link href="/plb-book" className="nav-link" data-oid="60e4aaq">
            PLB Book
          </Link>
          <Link href="/contact" className="nav-link" data-oid="tdgvr0c">
            Contact
          </Link>

          <div className="flex items-center space-x-4" data-oid="miiswr0">
            <CartIcon data-oid="r:nwemb" />

            <div className="relative" data-oid="s38g3j2">
              <button
                onClick={toggleNotifications}
                className="relative p-1 rounded-full hover:bg-gray-100"
                data-oid="xo1gg1-"
              >
                <Bell className="h-6 w-6 text-gray-600" data-oid="nig70zo" />
                {hasNotifications && (
                  <span
                    className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"
                    data-oid="bb5qfdx"
                  ></span>
                )}
              </button>

              {isNotificationsOpen && (
                <div
                  className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100"
                  data-oid="_5:wqww"
                >
                  <div
                    className="px-4 py-2 border-b border-gray-100"
                    data-oid="e0.xsqt"
                  >
                    <div
                      className="flex justify-between items-center"
                      data-oid="hs.mv3x"
                    >
                      <h3
                        className="font-semibold text-gray-800"
                        data-oid="wmv:_8g"
                      >
                        Notifications
                      </h3>
                      <button
                        className="text-xs text-blue-600 hover:underline"
                        data-oid=".e1rh.k"
                      >
                        Mark all as read
                      </button>
                    </div>
                  </div>
                  <div className="max-h-80 overflow-y-auto" data-oid="q-gv86j">
                    <div
                      className="px-4 py-3 border-b border-gray-100 bg-blue-50"
                      data-oid="v01imi5"
                    >
                      <p
                        className="text-sm font-medium text-gray-800"
                        data-oid="mk7500v"
                      >
                        New course available
                      </p>
                      <p
                        className="text-xs text-gray-500 mt-1"
                        data-oid="c4g-g3x"
                      >
                        "Advanced Property Investment Strategies" is now
                        available.
                      </p>
                      <p
                        className="text-xs text-gray-400 mt-1"
                        data-oid="_e.x0n9"
                      >
                        2 hours ago
                      </p>
                    </div>
                    <div
                      className="px-4 py-3 border-b border-gray-100"
                      data-oid="pd2nolt"
                    >
                      <p
                        className="text-sm font-medium text-gray-800"
                        data-oid="g:ui939"
                      >
                        Course completed
                      </p>
                      <p
                        className="text-xs text-gray-500 mt-1"
                        data-oid="mvoa128"
                      >
                        You've completed "HDB Investment Masterclass". View your
                        certificate.
                      </p>
                      <p
                        className="text-xs text-gray-400 mt-1"
                        data-oid="2hqzbq5"
                      >
                        Yesterday
                      </p>
                    </div>
                    <div className="px-4 py-3" data-oid="e7em:ii">
                      <p
                        className="text-sm font-medium text-gray-800"
                        data-oid="taqv3pb"
                      >
                        Upcoming webinar
                      </p>
                      <p
                        className="text-xs text-gray-500 mt-1"
                        data-oid="hyvusqh"
                      >
                        "Property Market Trends 2025" webinar starts in 2 days.
                      </p>
                      <p
                        className="text-xs text-gray-400 mt-1"
                        data-oid="7z3mukt"
                      >
                        2 days ago
                      </p>
                    </div>
                  </div>
                  <div
                    className="px-4 py-2 border-t border-gray-100"
                    data-oid="b2y:kxl"
                  >
                    <button
                      className="text-sm text-blue-600 hover:underline w-full text-center"
                      data-oid="s8wgzlu"
                    >
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="relative" data-oid="a6s:td3">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 focus:outline-none border border-gray-200 rounded-full pl-1 pr-2 py-1 hover:bg-gray-50"
                data-oid="r_zffle"
              >
                <div
                  className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden"
                  data-oid="dzvt0fx"
                >
                  <Image
                    src="/profile-placeholder.png"
                    alt="Profile"
                    width={32}
                    height={32}
                    className="object-cover"
                    data-oid="fp..8q9"
                  />
                </div>
                <span className="font-medium text-sm" data-oid="briz0xj">
                  Melvin Lim
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-gray-500 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                  data-oid="oa-gstq"
                />
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100"
                  data-oid="zvh90bi"
                >
                  <div
                    className="px-4 py-3 border-b border-gray-100"
                    data-oid="mvw0sfa"
                  >
                    <p
                      className="text-sm font-medium text-gray-900"
                      data-oid="-xvphni"
                    >
                      melvin.lim@example.com
                    </p>
                  </div>

                  <button
                    onClick={() => handleNavigation("/profile/account")}
                    className="w-full text-left block px-4 py-2 hover:bg-gray-50"
                    data-oid="2x8d061"
                  >
                    <div
                      className="flex items-center space-x-2"
                      data-oid="n022nfz"
                    >
                      <User
                        className="h-5 w-5 text-gray-500"
                        data-oid="87b83zo"
                      />

                      <span className="text-sm" data-oid="opfb8hk">
                        Account Settings
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() =>
                      handleNavigation("/profile/purchase-history")
                    }
                    className="w-full text-left block px-4 py-2 hover:bg-gray-50"
                    data-oid="0qjp58u"
                  >
                    <div
                      className="flex items-center space-x-2"
                      data-oid="0o3jzs4"
                    >
                      <ShoppingBag
                        className="h-5 w-5 text-gray-500"
                        data-oid="6tane27"
                      />

                      <span className="text-sm" data-oid="4wenyv.">
                        Purchase History
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavigation("/profile/settings")}
                    className="w-full text-left block px-4 py-2 hover:bg-gray-50"
                    data-oid=":ex0qgm"
                  >
                    <div
                      className="flex items-center space-x-2"
                      data-oid="_dsd3ar"
                    >
                      <Settings
                        className="h-5 w-5 text-gray-500"
                        data-oid="tmxa8qo"
                      />

                      <span className="text-sm" data-oid="-d539sd">
                        Settings
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavigation("/profile/terms")}
                    className="w-full text-left block px-4 py-2 hover:bg-gray-50"
                    data-oid="0a8jyir"
                  >
                    <div
                      className="flex items-center space-x-2"
                      data-oid="xqw3-0t"
                    >
                      <FileText
                        className="h-5 w-5 text-gray-500"
                        data-oid="tmei2g1"
                      />

                      <span className="text-sm" data-oid="-ggnbg-">
                        Terms of Use
                      </span>
                    </div>
                  </button>

                  <div
                    className="border-t border-gray-100 mt-2 pt-2"
                    data-oid="ypcgtp4"
                  >
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 text-red-600"
                      data-oid="txqg4t0"
                    >
                      <div
                        className="flex items-center space-x-2"
                        data-oid="ralak5q"
                      >
                        <LogOut className="h-5 w-5" data-oid="36vzsw7" />
                        <span className="text-sm" data-oid="z3u:i6r">
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

        <div className="md:hidden flex items-center" data-oid="sy5a:80">
          <CartIcon data-oid="20r0.0x" />
          <button className="ml-4 text-gray-600" data-oid="2vv9n0h">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              data-oid="v2lmxx_"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
                data-oid="3n3usvs"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
