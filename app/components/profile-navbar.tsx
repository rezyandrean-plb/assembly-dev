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
      data-oid="0hfd4uu"
    >
      <div
        className="container mx-auto px-4 flex justify-between items-center"
        data-oid="6t507by"
      >
        <Link href="/" className="flex items-center" data-oid="n:g67ak">
          <Image
            src="/images/assembly-logo.png"
            alt="Assembly Logo"
            width={180}
            height={50}
            className="object-contain"
            data-oid="joh2_2q"
          />
        </Link>

        <div
          className="hidden md:flex items-center space-x-8"
          data-oid="_jczcvf"
        >
          <Link href="/courses" className="nav-link" data-oid="6binx-g">
            Courses
          </Link>
          <Link href="/about" className="nav-link" data-oid="l63s73t">
            About
          </Link>
          <Link href="/plb-book" className="nav-link" data-oid="lo.:qnh">
            PLB Book
          </Link>
          <Link href="/contact" className="nav-link" data-oid="-1uaid9">
            Contact
          </Link>

          <div className="flex items-center space-x-4" data-oid="ecu7qua">
            <CartIcon data-oid="6kuadm-" />

            <div className="relative" data-oid="tzz:ojs">
              <button
                onClick={toggleNotifications}
                className="relative p-1 rounded-full hover:bg-gray-100"
                data-oid="zcje.7l"
              >
                <Bell className="h-6 w-6 text-gray-600" data-oid="tzur8am" />
                {hasNotifications && (
                  <span
                    className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"
                    data-oid="8uth0pl"
                  ></span>
                )}
              </button>

              {isNotificationsOpen && (
                <div
                  className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100"
                  data-oid="4lkocv1"
                >
                  <div
                    className="px-4 py-2 border-b border-gray-100"
                    data-oid="-73_bkl"
                  >
                    <div
                      className="flex justify-between items-center"
                      data-oid="83.1hxw"
                    >
                      <h3
                        className="font-semibold text-gray-800"
                        data-oid="ljkbaqo"
                      >
                        Notifications
                      </h3>
                      <button
                        className="text-xs text-blue-600 hover:underline"
                        data-oid="rxb5lol"
                      >
                        Mark all as read
                      </button>
                    </div>
                  </div>
                  <div className="max-h-80 overflow-y-auto" data-oid="bvapvni">
                    <div
                      className="px-4 py-3 border-b border-gray-100 bg-blue-50"
                      data-oid="yf6.v06"
                    >
                      <p
                        className="text-sm font-medium text-gray-800"
                        data-oid="-z35-dz"
                      >
                        New course available
                      </p>
                      <p
                        className="text-xs text-gray-500 mt-1"
                        data-oid="mccywup"
                      >
                        "Advanced Property Investment Strategies" is now
                        available.
                      </p>
                      <p
                        className="text-xs text-gray-400 mt-1"
                        data-oid="u597r1q"
                      >
                        2 hours ago
                      </p>
                    </div>
                    <div
                      className="px-4 py-3 border-b border-gray-100"
                      data-oid="20iebiv"
                    >
                      <p
                        className="text-sm font-medium text-gray-800"
                        data-oid="qeycgez"
                      >
                        Course completed
                      </p>
                      <p
                        className="text-xs text-gray-500 mt-1"
                        data-oid="c2q6qx4"
                      >
                        You've completed "HDB Investment Masterclass". View your
                        certificate.
                      </p>
                      <p
                        className="text-xs text-gray-400 mt-1"
                        data-oid="q64j_z6"
                      >
                        Yesterday
                      </p>
                    </div>
                    <div className="px-4 py-3" data-oid="lmh8mwz">
                      <p
                        className="text-sm font-medium text-gray-800"
                        data-oid="2j-kx5d"
                      >
                        Upcoming webinar
                      </p>
                      <p
                        className="text-xs text-gray-500 mt-1"
                        data-oid="3mfo3i7"
                      >
                        "Property Market Trends 2025" webinar starts in 2 days.
                      </p>
                      <p
                        className="text-xs text-gray-400 mt-1"
                        data-oid="1is.glq"
                      >
                        2 days ago
                      </p>
                    </div>
                  </div>
                  <div
                    className="px-4 py-2 border-t border-gray-100"
                    data-oid="p:n706i"
                  >
                    <button
                      className="text-sm text-blue-600 hover:underline w-full text-center"
                      data-oid="c1y_s0l"
                    >
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="relative" data-oid=".pzs1_9">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 focus:outline-none border border-gray-200 rounded-full pl-1 pr-2 py-1 hover:bg-gray-50"
                data-oid="va4kg5z"
              >
                <div
                  className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden"
                  data-oid="_h5ao_5"
                >
                  <Image
                    src="/profile-placeholder.png"
                    alt="Profile"
                    width={32}
                    height={32}
                    className="object-cover"
                    data-oid="3r1sky-"
                  />
                </div>
                <span className="font-medium text-sm" data-oid="sdm_16w">
                  Melvin Lim
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-gray-500 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                  data-oid="9l6r0:t"
                />
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100"
                  data-oid=":gf4n8u"
                >
                  <div
                    className="px-4 py-3 border-b border-gray-100"
                    data-oid="2n_qffv"
                  >
                    <p
                      className="text-sm font-medium text-gray-900"
                      data-oid="k6::fwu"
                    >
                      melvin.lim@example.com
                    </p>
                  </div>

                  <button
                    onClick={() => handleNavigation("/profile/account")}
                    className="w-full text-left block px-4 py-2 hover:bg-gray-50"
                    data-oid="2qyve43"
                  >
                    <div
                      className="flex items-center space-x-2"
                      data-oid="6ong9-5"
                    >
                      <User
                        className="h-5 w-5 text-gray-500"
                        data-oid="gv4wd6t"
                      />
                      <span className="text-sm" data-oid="rub7_uh">
                        Account Settings
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() =>
                      handleNavigation("/profile/purchase-history")
                    }
                    className="w-full text-left block px-4 py-2 hover:bg-gray-50"
                    data-oid="xtv42qz"
                  >
                    <div
                      className="flex items-center space-x-2"
                      data-oid="-bd4:j7"
                    >
                      <ShoppingBag
                        className="h-5 w-5 text-gray-500"
                        data-oid="awp7x-b"
                      />
                      <span className="text-sm" data-oid="ke2qzf:">
                        Purchase History
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavigation("/profile/settings")}
                    className="w-full text-left block px-4 py-2 hover:bg-gray-50"
                    data-oid="oi._.ht"
                  >
                    <div
                      className="flex items-center space-x-2"
                      data-oid="qrcw_02"
                    >
                      <Settings
                        className="h-5 w-5 text-gray-500"
                        data-oid="va-s1vj"
                      />
                      <span className="text-sm" data-oid="vg_e0m7">
                        Settings
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavigation("/profile/terms")}
                    className="w-full text-left block px-4 py-2 hover:bg-gray-50"
                    data-oid="39hl6v7"
                  >
                    <div
                      className="flex items-center space-x-2"
                      data-oid="yrtpytg"
                    >
                      <FileText
                        className="h-5 w-5 text-gray-500"
                        data-oid="-t4m.57"
                      />
                      <span className="text-sm" data-oid="71eksoc">
                        Terms of Use
                      </span>
                    </div>
                  </button>

                  <div
                    className="border-t border-gray-100 mt-2 pt-2"
                    data-oid="jc9vmp6"
                  >
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 text-red-600"
                      data-oid="4u9b23c"
                    >
                      <div
                        className="flex items-center space-x-2"
                        data-oid="1ar.nql"
                      >
                        <LogOut className="h-5 w-5" data-oid="ipu6nng" />
                        <span className="text-sm" data-oid="cbj3i23">
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

        <div className="md:hidden flex items-center" data-oid="d_pkj6v">
          <CartIcon data-oid="0cw:iq:" />
          <button className="ml-4 text-gray-600" data-oid="dn_w0ch">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              data-oid="4qnkukm"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
                data-oid="lyg7i9y"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
