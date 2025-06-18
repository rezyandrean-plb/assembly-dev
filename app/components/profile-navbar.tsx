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
      data-oid="9i1xv1b"
    >
      <div
        className="container mx-auto px-4 flex justify-between items-center"
        data-oid="lfiz8gw"
      >
        <Link href="/" className="flex items-center" data-oid="v81x5_-">
          <Image
            src="/images/assembly-logo.png"
            alt="Assembly Logo"
            width={180}
            height={50}
            className="object-contain"
            data-oid="2bw3ou3"
          />
        </Link>

        <div
          className="hidden md:flex items-center space-x-8"
          data-oid="yt5_7kp"
        >
          <Link href="/courses" className="nav-link" data-oid="z.2n2fu">
            Courses
          </Link>
          <Link href="/about" className="nav-link" data-oid="v6j5f2i">
            About
          </Link>
          <Link href="/plb-book" className="nav-link" data-oid="1wv0k-i">
            PLB Book
          </Link>
          <Link href="/contact" className="nav-link" data-oid="do56izc">
            Contact
          </Link>

          <div className="flex items-center space-x-4" data-oid="id3xwf-">
            <CartIcon data-oid="8.940e6" />

            <div className="relative" data-oid="cdew1oz">
              <button
                onClick={toggleNotifications}
                className="relative p-1 rounded-full hover:bg-gray-100"
                data-oid="v23-fvc"
              >
                <Bell className="h-6 w-6 text-gray-600" data-oid="u-69clz" />
                {hasNotifications && (
                  <span
                    className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"
                    data-oid=".19mmhl"
                  ></span>
                )}
              </button>

              {isNotificationsOpen && (
                <div
                  className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100"
                  data-oid="5pla9_s"
                >
                  <div
                    className="px-4 py-2 border-b border-gray-100"
                    data-oid="5ozf5a4"
                  >
                    <div
                      className="flex justify-between items-center"
                      data-oid="gx66y9-"
                    >
                      <h3
                        className="font-semibold text-gray-800"
                        data-oid="b.56g-d"
                      >
                        Notifications
                      </h3>
                      <button
                        className="text-xs text-blue-600 hover:underline"
                        data-oid="pvt_gsq"
                      >
                        Mark all as read
                      </button>
                    </div>
                  </div>
                  <div className="max-h-80 overflow-y-auto" data-oid="_l-mshz">
                    <div
                      className="px-4 py-3 border-b border-gray-100 bg-blue-50"
                      data-oid="p:l9_mq"
                    >
                      <p
                        className="text-sm font-medium text-gray-800"
                        data-oid="7a--p1f"
                      >
                        New course available
                      </p>
                      <p
                        className="text-xs text-gray-500 mt-1"
                        data-oid="tmek0zd"
                      >
                        "Advanced Property Investment Strategies" is now
                        available.
                      </p>
                      <p
                        className="text-xs text-gray-400 mt-1"
                        data-oid="z:-28-e"
                      >
                        2 hours ago
                      </p>
                    </div>
                    <div
                      className="px-4 py-3 border-b border-gray-100"
                      data-oid="197kybt"
                    >
                      <p
                        className="text-sm font-medium text-gray-800"
                        data-oid="w64:bd1"
                      >
                        Course completed
                      </p>
                      <p
                        className="text-xs text-gray-500 mt-1"
                        data-oid="nhrmnvr"
                      >
                        You've completed "HDB Investment Masterclass". View your
                        certificate.
                      </p>
                      <p
                        className="text-xs text-gray-400 mt-1"
                        data-oid="6weh3qh"
                      >
                        Yesterday
                      </p>
                    </div>
                    <div className="px-4 py-3" data-oid="ot0ttp1">
                      <p
                        className="text-sm font-medium text-gray-800"
                        data-oid="ig-wbjd"
                      >
                        Upcoming webinar
                      </p>
                      <p
                        className="text-xs text-gray-500 mt-1"
                        data-oid="d_-x9_w"
                      >
                        "Property Market Trends 2025" webinar starts in 2 days.
                      </p>
                      <p
                        className="text-xs text-gray-400 mt-1"
                        data-oid="4ev6f86"
                      >
                        2 days ago
                      </p>
                    </div>
                  </div>
                  <div
                    className="px-4 py-2 border-t border-gray-100"
                    data-oid="70nma77"
                  >
                    <button
                      className="text-sm text-blue-600 hover:underline w-full text-center"
                      data-oid="xnnibmh"
                    >
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="relative" data-oid="4bckelr">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 focus:outline-none border border-gray-200 rounded-full pl-1 pr-2 py-1 hover:bg-gray-50"
                data-oid="4oyyo.j"
              >
                <div
                  className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden"
                  data-oid="1gqwyhi"
                >
                  <Image
                    src="/profile-placeholder.png"
                    alt="Profile"
                    width={32}
                    height={32}
                    className="object-cover"
                    data-oid="o3_j3:4"
                  />
                </div>
                <span className="font-medium text-sm" data-oid="s7q7ell">
                  Melvin Lim
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-gray-500 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                  data-oid="rw0b2gu"
                />
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100"
                  data-oid="7nm68f0"
                >
                  <div
                    className="px-4 py-3 border-b border-gray-100"
                    data-oid="b2jyv2v"
                  >
                    <p
                      className="text-sm font-medium text-gray-900"
                      data-oid="m9htgks"
                    >
                      melvin.lim@example.com
                    </p>
                  </div>

                  <button
                    onClick={() => handleNavigation("/profile/account")}
                    className="w-full text-left block px-4 py-2 hover:bg-gray-50"
                    data-oid="et1.92x"
                  >
                    <div
                      className="flex items-center space-x-2"
                      data-oid="s5_7wci"
                    >
                      <User
                        className="h-5 w-5 text-gray-500"
                        data-oid="1q_h0xt"
                      />

                      <span className="text-sm" data-oid="dt.ajs6">
                        Account Settings
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() =>
                      handleNavigation("/profile/purchase-history")
                    }
                    className="w-full text-left block px-4 py-2 hover:bg-gray-50"
                    data-oid="we3st3e"
                  >
                    <div
                      className="flex items-center space-x-2"
                      data-oid="al:kj3m"
                    >
                      <ShoppingBag
                        className="h-5 w-5 text-gray-500"
                        data-oid="l1v3bba"
                      />

                      <span className="text-sm" data-oid="qbjhj3t">
                        Purchase History
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavigation("/profile/settings")}
                    className="w-full text-left block px-4 py-2 hover:bg-gray-50"
                    data-oid="k4u95h9"
                  >
                    <div
                      className="flex items-center space-x-2"
                      data-oid="a8aldds"
                    >
                      <Settings
                        className="h-5 w-5 text-gray-500"
                        data-oid="c534me7"
                      />

                      <span className="text-sm" data-oid="0jq7yof">
                        Settings
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavigation("/profile/terms")}
                    className="w-full text-left block px-4 py-2 hover:bg-gray-50"
                    data-oid="v7vwxvf"
                  >
                    <div
                      className="flex items-center space-x-2"
                      data-oid="c8x0v-n"
                    >
                      <FileText
                        className="h-5 w-5 text-gray-500"
                        data-oid="yy4k-3v"
                      />

                      <span className="text-sm" data-oid="g7d_oye">
                        Terms of Use
                      </span>
                    </div>
                  </button>

                  <div
                    className="border-t border-gray-100 mt-2 pt-2"
                    data-oid="btnux6g"
                  >
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 text-red-600"
                      data-oid="qr3ax_3"
                    >
                      <div
                        className="flex items-center space-x-2"
                        data-oid="dce5-ey"
                      >
                        <LogOut className="h-5 w-5" data-oid="aemzp.4" />
                        <span className="text-sm" data-oid="_4bacfa">
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

        <div className="md:hidden flex items-center" data-oid="g_y23e9">
          <CartIcon data-oid="kch57p5" />
          <button className="ml-4 text-gray-600" data-oid="dsjxxr3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              data-oid="sq6b8ng"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
                data-oid="smzsis-"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
