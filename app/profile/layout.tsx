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
    <div className="min-h-screen bg-gray-50 pt-16 relative" data-oid="hnyo8ti">
      <NetworkBackground
        scrollY={scrollY}
        scrollSpeed={0.5}
        windowHeight={0}
        opacity={0.05}
        data-oid="dz2r_5r"
      />

      {/* Use the ProfileNavbar component */}
      <ProfileNavbar data-oid="b6wvuy:" />

      <div className="flex" data-oid="rizdz:9">
        {/* Sidebar */}
        <div
          className="w-64 fixed left-0 top-16 bg-white shadow-sm z-10 h-screen"
          style={{ maxHeight: "calc(100vh - 16px)", overflowY: "auto" }}
          data-oid="q0izwe-"
        >
          <div className="flex flex-col h-full" data-oid="v8qj:_h">
            <div className="p-4" data-oid="e2sf6nj">
              <div className="flex items-center gap-3" data-oid="ebiqw-c">
                <div
                  className="w-10 h-10 rounded-full overflow-hidden"
                  data-oid="ct4azxx"
                >
                  <Image
                    src="/profile-placeholder.png"
                    alt="Melvin Lim"
                    width={40}
                    height={40}
                    className="object-cover"
                    data-oid="-jgydrz"
                  />
                </div>
                <div className="flex-1 min-w-0" data-oid="ws:nsmx">
                  <h3
                    className="text-sm font-medium text-gray-900 truncate"
                    data-oid="vgi4.44"
                  >
                    Melvin Lim
                  </h3>
                </div>
              </div>
            </div>

            <div className="px-3 py-2" data-oid="541oi:d">
              <p
                className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2"
                data-oid="l3oezi3"
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
                data-oid="sd1n.h5"
              >
                <Home size={18} data-oid="2s5.pja" />
                Dashboard
              </Link>
              <Link
                href="/profile/details"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile/details")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
                data-oid="ve-mihh"
              >
                <User size={18} data-oid="j:zv4ns" />
                Learning Preferences
              </Link>
              <Link
                href="/profile/learning-progress"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile/learning-progress")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
                data-oid="pe_03tx"
              >
                <BookOpen size={18} data-oid="zcn2_w0" />
                Learning Progress
              </Link>
              <Link
                href="/profile/completed-courses"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile/completed-courses")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
                data-oid="ec0pvbg"
              >
                <Award size={18} data-oid="h9m4:45" />
                Completed Courses
              </Link>
              <Link
                href="/profile/reviews"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile/reviews")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
                data-oid="xc7pre0"
              >
                <MessageSquare size={18} data-oid="joi9sdw" />
                My Reviews
              </Link>
              <Link
                href="/profile/wishlist"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile/wishlist")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
                data-oid="918f0yj"
              >
                <Heart size={18} data-oid="s9-2fo8" />
                Wishlist
              </Link>
            </div>

            <div className="mt-auto p-4" data-oid=".wed4qi">
              <button
                className="w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 text-red-600 hover:bg-red-50"
                data-oid="tp73w-:"
              >
                <LogOut size={18} data-oid="vigj3i9" />
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-64 flex-1 pb-16 min-h-screen" data-oid="c-7rve-">
          <Suspense
            fallback={<div data-oid="60u2nr_">Loading...</div>}
            data-oid="b5xgecb"
          >
            {children}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
