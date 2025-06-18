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
    <div className="min-h-screen bg-gray-50 pt-16 relative" data-oid="xe:af.w">
      <NetworkBackground
        scrollY={scrollY}
        scrollSpeed={0.5}
        windowHeight={0}
        opacity={0.05}
        data-oid="cnr-40p"
      />

      {/* Use the ProfileNavbar component */}
      <ProfileNavbar data-oid="za01v0-" />

      <div className="flex" data-oid="j50mapx">
        {/* Sidebar */}
        <div
          className="w-64 fixed left-0 top-16 bg-white shadow-sm z-10 h-screen"
          style={{ maxHeight: "calc(100vh - 16px)", overflowY: "auto" }}
          data-oid="snrxwts"
        >
          <div className="flex flex-col h-full" data-oid="028qpoh">
            <div className="p-4" data-oid="j5evvvh">
              <div className="flex items-center gap-3" data-oid="dadjf6o">
                <div
                  className="w-10 h-10 rounded-full overflow-hidden"
                  data-oid="3.2q.3c"
                >
                  <Image
                    src="/profile-placeholder.png"
                    alt="Melvin Lim"
                    width={40}
                    height={40}
                    className="object-cover"
                    data-oid="xl57hme"
                  />
                </div>
                <div className="flex-1 min-w-0" data-oid="qtrsddd">
                  <h3
                    className="text-sm font-medium text-gray-900 truncate"
                    data-oid="q7k667_"
                  >
                    Melvin Lim
                  </h3>
                </div>
              </div>
            </div>

            <div className="px-3 py-2" data-oid="xa3ltpt">
              <p
                className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2"
                data-oid="bll5-ze"
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
                data-oid="gu5qh3_"
              >
                <Home size={18} data-oid="mjtozsz" />
                Dashboard
              </Link>
              <Link
                href="/profile/details"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile/details")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
                data-oid="xpxc:.a"
              >
                <User size={18} data-oid="74d6nfq" />
                Learning Preferences
              </Link>
              <Link
                href="/profile/learning-progress"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile/learning-progress")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
                data-oid="8:9zlly"
              >
                <BookOpen size={18} data-oid="j3wmoe6" />
                Learning Progress
              </Link>
              <Link
                href="/profile/completed-courses"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile/completed-courses")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
                data-oid="9c5h-lo"
              >
                <Award size={18} data-oid="al9jg47" />
                Completed Courses
              </Link>
              <Link
                href="/profile/reviews"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile/reviews")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
                data-oid="vv6aorp"
              >
                <MessageSquare size={18} data-oid="73:87xu" />
                My Reviews
              </Link>
              <Link
                href="/profile/wishlist"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile/wishlist")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
                data-oid=":baw3ep"
              >
                <Heart size={18} data-oid="0lf.wdd" />
                Wishlist
              </Link>
            </div>

            <div className="mt-auto p-4" data-oid="yl10b-f">
              <button
                className="w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 text-red-600 hover:bg-red-50"
                data-oid="zpfxfhy"
              >
                <LogOut size={18} data-oid="1jepet2" />
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-64 flex-1 pb-16 min-h-screen" data-oid="v9:3k5.">
          <Suspense
            fallback={<div data-oid="dcv4wdk">Loading...</div>}
            data-oid="hea.m33"
          >
            {children}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
