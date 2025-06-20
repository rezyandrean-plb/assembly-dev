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
    <div className="min-h-screen bg-gray-50 pt-16 relative" data-oid="4ad95hj">
      <NetworkBackground
        scrollY={scrollY}
        scrollSpeed={0.5}
        windowHeight={0}
        opacity={0.05}
        data-oid="km89yti"
      />

      {/* Use the ProfileNavbar component */}
      <ProfileNavbar data-oid="2g:y0s9" />

      <div className="flex" data-oid="ik.-gc0">
        {/* Sidebar */}
        <div
          className="w-64 fixed left-0 top-16 bg-white shadow-sm z-10 h-screen"
          style={{ maxHeight: "calc(100vh - 16px)", overflowY: "auto" }}
          data-oid="6fk91j5"
        >
          <div className="flex flex-col h-full" data-oid="aa66r.j">
            <div className="p-4" data-oid="s9smtfv">
              <div className="flex items-center gap-3" data-oid="4qrua1p">
                <div
                  className="w-10 h-10 rounded-full overflow-hidden"
                  data-oid="0:p_erh"
                >
                  <Image
                    src="/profile-placeholder.png"
                    alt="Melvin Lim"
                    width={40}
                    height={40}
                    className="object-cover"
                    data-oid="vd_w6uk"
                  />
                </div>
                <div className="flex-1 min-w-0" data-oid="ensg35y">
                  <h3
                    className="text-sm font-medium text-gray-900 truncate"
                    data-oid="tw4yx5a"
                  >
                    Melvin Lim
                  </h3>
                </div>
              </div>
            </div>

            <div className="px-3 py-2" data-oid="kgirrk6">
              <p
                className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2"
                data-oid="c:.l1.:"
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
                data-oid="sgc8r_5"
              >
                <Home size={18} data-oid="tnr_svt" />
                Dashboard
              </Link>
              <Link
                href="/profile/details"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile/details")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
                data-oid="h14c0ij"
              >
                <User size={18} data-oid="2:clwkr" />
                Learning Preferences
              </Link>
              <Link
                href="/profile/learning-progress"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile/learning-progress")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
                data-oid="w4xk-y2"
              >
                <BookOpen size={18} data-oid="udgf:9j" />
                Learning Progress
              </Link>
              <Link
                href="/profile/completed-courses"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile/completed-courses")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
                data-oid="w3h.h9c"
              >
                <Award size={18} data-oid="ave12.5" />
                Completed Courses
              </Link>
              <Link
                href="/profile/reviews"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile/reviews")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
                data-oid="kfcdgrk"
              >
                <MessageSquare size={18} data-oid="5kuzowl" />
                My Reviews
              </Link>
              <Link
                href="/profile/wishlist"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile/wishlist")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
                data-oid="s6_ox5w"
              >
                <Heart size={18} data-oid=":hjelbj" />
                Wishlist
              </Link>
            </div>

            <div className="mt-auto p-4" data-oid="nu401xl">
              <button
                className="w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 text-red-600 hover:bg-red-50"
                data-oid="g_0:spk"
              >
                <LogOut size={18} data-oid="0p9-64u" />
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-64 flex-1 pb-16 min-h-screen" data-oid="j5dckrz">
          <Suspense
            fallback={<div data-oid="odie:ao">Loading...</div>}
            data-oid="5qs3fm:"
          >
            {children}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
