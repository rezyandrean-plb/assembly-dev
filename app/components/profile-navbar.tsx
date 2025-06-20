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
      data-oid="d1j-wea"
    >
      <div
        className="container mx-auto px-4 flex justify-between items-center"
        data-oid="vzl.un5"
      >
        <Link href="/" className="flex items-center" data-oid="7u0sf.w">
          <Image
            src="/public/images/assembly-logo.png"
            alt="Assembly Logo"
            width={180}
            height={50}
            className="object-contain"
            data-oid="zcrhp.:"
          />
        </Link>

        <div
          className="hidden md:flex items-center space-x-8"
          data-oid=".kn3bkj"
        >
          <Link href="/courses" className="nav-link" data-oid="e6p0p71">
            Courses
          </Link>
          <Link href="/about" className="nav-link" data-oid="e2r0aty">
            About
          </Link>
          <Link href="/plb-book" className="nav-link" data-oid="kks5usl">
            PLB Book
          </Link>
          <Link href="/contact" className="nav-link" data-oid="e3u-b9x">
            Contact
          </Link>

          <div className="flex items-center space-x-4" data-oid="rojduk8">
            <CartIcon data-oid="hf_ueh0" />

            <div className="relative" data-oid="5xftpm3">
              <button
                onClick={toggleNotifications}
                className="relative p-1 rounded-full hover:bg-gray-100"
                data-oid="50qnax1"
              >
                <Bell className="h-6 w-6 text-gray-600" data-oid="a7o7zs6" />
                {hasNotifications && (
                  <span
                    className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"
                    data-oid="sp_uvww"
                  ></span>
                )}
              </button>

              {isNotificationsOpen && (
                <div
                  className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100"
                  data-oid="o6qo.t7"
                >
                  <div
                    className="px-4 py-2 border-b border-gray-100"
                    data-oid="xski63p"
                  >
                    <div
                      className="flex justify-between items-center"
                      data-oid="zw4mmsc"
                    >
                      <h3
                        className="font-semibold text-gray-800"
                        data-oid="4-vkkvv"
                      >
                        Notifications
                      </h3>
                      <button
                        className="text-xs text-blue-600 hover:underline"
                        data-oid="-pciavd"
                      >
                        Mark all as read
                      </button>
                    </div>
                  </div>
                  <div className="max-h-80 overflow-y-auto" data-oid="ej4:lg8">
                    <div
                      className="px-4 py-3 border-b border-gray-100 bg-blue-50"
                      data-oid="p_rtszg"
                    >
                      <p
                        className="text-sm font-medium text-gray-800"
                        data-oid="uvguw:4"
                      >
                        New course available
                      </p>
                      <p
                        className="text-xs text-gray-500 mt-1"
                        data-oid=".y_p2dt"
                      >
                        "Advanced Property Investment Strategies" is now
                        available.
                      </p>
                      <p
                        className="text-xs text-gray-400 mt-1"
                        data-oid="3a_u:ln"
                      >
                        2 hours ago
                      </p>
                    </div>
                    <div
                      className="px-4 py-3 border-b border-gray-100"
                      data-oid="2orgror"
                    >
                      <p
                        className="text-sm font-medium text-gray-800"
                        data-oid="fbnzm_8"
                      >
                        Course completed
                      </p>
                      <p
                        className="text-xs text-gray-500 mt-1"
                        data-oid="mbmsp--"
                      >
                        You've completed "HDB Investment Masterclass". View your
                        certificate.
                      </p>
                      <p
                        className="text-xs text-gray-400 mt-1"
                        data-oid="yd:2_0w"
                      >
                        Yesterday
                      </p>
                    </div>
                    <div className="px-4 py-3" data-oid="c7l944v">
                      <p
                        className="text-sm font-medium text-gray-800"
                        data-oid="dylr-0m"
                      >
                        Upcoming webinar
                      </p>
                      <p
                        className="text-xs text-gray-500 mt-1"
                        data-oid="wqc:jey"
                      >
                        "Property Market Trends 2025" webinar starts in 2 days.
                      </p>
                      <p
                        className="text-xs text-gray-400 mt-1"
                        data-oid="g50ovz7"
                      >
                        2 days ago
                      </p>
                    </div>
                  </div>
                  <div
                    className="px-4 py-2 border-t border-gray-100"
                    data-oid="2b5ygor"
                  >
                    <button
                      className="text-sm text-blue-600 hover:underline w-full text-center"
                      data-oid="wedqae-"
                    >
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="relative" data-oid="bkfci_:">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 focus:outline-none border border-gray-200 rounded-full pl-1 pr-2 py-1 hover:bg-gray-50"
                data-oid="6izi2s1"
              >
                <div
                  className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden"
                  data-oid="c0t1f6-"
                >
                  <Image
                    src="/profile-placeholder.png"
                    alt="Profile"
                    width={32}
                    height={32}
                    className="object-cover"
                    data-oid="xm66p-a"
                  />
                </div>
                <span className="font-medium text-sm" data-oid="h3_zsz5">
                  Melvin Lim
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-gray-500 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                  data-oid="9hmt_8a"
                />
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100"
                  data-oid="e.zx469"
                >
                  <div
                    className="px-4 py-3 border-b border-gray-100"
                    data-oid="9r8vo0v"
                  >
                    <p
                      className="text-sm font-medium text-gray-900"
                      data-oid="asvwxlw"
                    >
                      melvin.lim@example.com
                    </p>
                  </div>

                  <button
                    onClick={() => handleNavigation("/profile/account")}
                    className="w-full text-left block px-4 py-2 hover:bg-gray-50"
                    data-oid="kkvy_lx"
                  >
                    <div
                      className="flex items-center space-x-2"
                      data-oid="86k0m._"
                    >
                      <User
                        className="h-5 w-5 text-gray-500"
                        data-oid="t3rpfq2"
                      />

                      <span className="text-sm" data-oid="iar9gcv">
                        Account Settings
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() =>
                      handleNavigation("/profile/purchase-history")
                    }
                    className="w-full text-left block px-4 py-2 hover:bg-gray-50"
                    data-oid="is9.v6s"
                  >
                    <div
                      className="flex items-center space-x-2"
                      data-oid="fcg.1_n"
                    >
                      <ShoppingBag
                        className="h-5 w-5 text-gray-500"
                        data-oid="0cdkoqw"
                      />

                      <span className="text-sm" data-oid="f-0k1qa">
                        Purchase History
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavigation("/profile/settings")}
                    className="w-full text-left block px-4 py-2 hover:bg-gray-50"
                    data-oid="69a4bz6"
                  >
                    <div
                      className="flex items-center space-x-2"
                      data-oid="vjjgl17"
                    >
                      <Settings
                        className="h-5 w-5 text-gray-500"
                        data-oid="slp8e2:"
                      />

                      <span className="text-sm" data-oid="myqv:m-">
                        Settings
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavigation("/profile/terms")}
                    className="w-full text-left block px-4 py-2 hover:bg-gray-50"
                    data-oid="_l1kwvj"
                  >
                    <div
                      className="flex items-center space-x-2"
                      data-oid="gvy3_ex"
                    >
                      <FileText
                        className="h-5 w-5 text-gray-500"
                        data-oid="apz1l7i"
                      />

                      <span className="text-sm" data-oid="_1oj7xq">
                        Terms of Use
                      </span>
                    </div>
                  </button>

                  <div
                    className="border-t border-gray-100 mt-2 pt-2"
                    data-oid="okdadye"
                  >
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 text-red-600"
                      data-oid="8pxo.0e"
                    >
                      <div
                        className="flex items-center space-x-2"
                        data-oid="201:ef-"
                      >
                        <LogOut className="h-5 w-5" data-oid="fz4848:" />
                        <span className="text-sm" data-oid="k43k8l8">
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

        <div className="md:hidden flex items-center" data-oid="3jq.1lv">
          <CartIcon data-oid="4v769ys" />
          <button className="ml-4 text-gray-600" data-oid="ej2whah">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              data-oid="ph2ygd2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
                data-oid="sv4e:dr"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
