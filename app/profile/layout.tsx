"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  BookOpen,
  Award,
  Heart,
  MessageSquare,
  LogOut,
} from "lucide-react";
import NetworkBackground from "@/components/network-background";
import { Suspense } from "react";
import ProfileNavbar from "../components/profile-navbar";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrollY, setScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 relative" data-oid="embx4be">
      <NetworkBackground
        scrollY={scrollY}
        scrollSpeed={0.5}
        windowHeight={0}
        opacity={0.05}
        data-oid="1u98e_p"
      />

      {/* Use the ProfileNavbar component */}
      <ProfileNavbar data-oid="b7f6x7u" />

      <div className="flex" data-oid="pq-l55-">
        {/* Sidebar */}
        <div
          className="w-64 fixed left-0 top-16 bg-white shadow-sm z-10 h-screen"
          style={{ maxHeight: "calc(100vh - 16px)", overflowY: "auto" }}
          data-oid="kpfu6ht"
        >
          <div className="flex flex-col h-full" data-oid="lqu:bg:">
            <div className="p-4" data-oid="jv5d21d">
              <div className="flex items-center gap-3" data-oid="-81qq4l">
                <div
                  className="w-10 h-10 rounded-full overflow-hidden"
                  data-oid="jinovgc"
                >
                  <Image
                    src="/profile-placeholder.png"
                    alt="Melvin Lim"
                    width={40}
                    height={40}
                    className="object-cover"
                    data-oid=":edrlc2"
                  />
                </div>
                <div className="flex-1 min-w-0" data-oid="f_pa4.0">
                  <h3
                    className="text-sm font-medium text-gray-900 truncate"
                    data-oid="w4uu84-"
                  >
                    Melvin Lim
                  </h3>
                </div>
              </div>
            </div>

            <div className="px-3 py-2" data-oid="xi4x.ex">
              <p
                className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2"
                data-oid="c_zttqd"
              >
                MAIN NAVIGATION
              </p>
              <Link
                href="/profile"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
                data-oid="uht_wjp"
              >
                <Home size={18} data-oid="5:a:j8y" />
                Dashboard
              </Link>
              <Link
                href="/profile/details"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile/details")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
                data-oid="3zp48ko"
              >
                <User size={18} data-oid="_pta9di" />
                Learning Preferences
              </Link>
              <Link
                href="/profile/learning-progress"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile/learning-progress")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
                data-oid="r293ul."
              >
                <BookOpen size={18} data-oid="yv7fa41" />
                Learning Progress
              </Link>
              <Link
                href="/profile/completed-courses"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile/completed-courses")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
                data-oid="x5t:zun"
              >
                <Award size={18} data-oid="h_e4xks" />
                Completed Courses
              </Link>
              <Link
                href="/profile/reviews"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile/reviews")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
                data-oid="gd0ezl9"
              >
                <MessageSquare size={18} data-oid="f8y.7x-" />
                My Reviews
              </Link>
              <Link
                href="/profile/wishlist"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile/wishlist")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
                data-oid=":1rfcck"
              >
                <Heart size={18} data-oid="5.h2n66" />
                Wishlist
              </Link>
            </div>

            <div className="mt-auto p-4" data-oid="y6j.xao">
              <button
                className="w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 text-red-600 hover:bg-red-50"
                data-oid="pjtydbs"
              >
                <LogOut size={18} data-oid="2i6lqbe" />
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-64 flex-1 pb-16 min-h-screen" data-oid="ac56jr5">
          <Suspense
            fallback={<div data-oid="f0sr1xq">Loading...</div>}
            data-oid="5.8ussi"
          >
            {children}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
