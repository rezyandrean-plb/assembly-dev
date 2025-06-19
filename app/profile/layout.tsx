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
    <div className="min-h-screen bg-gray-50 pt-16 relative" data-oid="umbruyu">
      <NetworkBackground
        scrollY={scrollY}
        scrollSpeed={0.5}
        windowHeight={0}
        opacity={0.05}
        data-oid="zjxie7g"
      />

      {/* Use the ProfileNavbar component */}
      <ProfileNavbar data-oid="kzn_oze" />

      <div className="flex" data-oid="uaypfo8">
        {/* Sidebar */}
        <div
          className="w-64 fixed left-0 top-16 bg-white shadow-sm z-10 h-screen"
          style={{ maxHeight: "calc(100vh - 16px)", overflowY: "auto" }}
          data-oid="_:7v8rp"
        >
          <div className="flex flex-col h-full" data-oid="3yy0cyp">
            <div className="p-4" data-oid="rl-b:24">
              <div className="flex items-center gap-3" data-oid="v9lp5za">
                <div
                  className="w-10 h-10 rounded-full overflow-hidden"
                  data-oid="_aa8:h_"
                >
                  <Image
                    src="/profile-placeholder.png"
                    alt="Melvin Lim"
                    width={40}
                    height={40}
                    className="object-cover"
                    data-oid="-lbffke"
                  />
                </div>
                <div className="flex-1 min-w-0" data-oid="l5g0epu">
                  <h3
                    className="text-sm font-medium text-gray-900 truncate"
                    data-oid="ub-r.sn"
                  >
                    Melvin Lim
                  </h3>
                </div>
              </div>
            </div>

            <div className="px-3 py-2" data-oid="y-p0vz8">
              <p
                className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2"
                data-oid="5fg6mw5"
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
                data-oid="7i7thet"
              >
                <Home size={18} data-oid="dcbjbjb" />
                Dashboard
              </Link>
              <Link
                href="/profile/details"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile/details")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
                data-oid="o1lpaz3"
              >
                <User size={18} data-oid="ka3zp0k" />
                Learning Preferences
              </Link>
              <Link
                href="/profile/learning-progress"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile/learning-progress")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
                data-oid="gdewxrs"
              >
                <BookOpen size={18} data-oid="1ueh.rt" />
                Learning Progress
              </Link>
              <Link
                href="/profile/completed-courses"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile/completed-courses")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
                data-oid="fxj2a-n"
              >
                <Award size={18} data-oid="gnh-ej4" />
                Completed Courses
              </Link>
              <Link
                href="/profile/reviews"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile/reviews")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
                data-oid="selm6k7"
              >
                <MessageSquare size={18} data-oid="svftw_b" />
                My Reviews
              </Link>
              <Link
                href="/profile/wishlist"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile/wishlist")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
                data-oid="7ov53y-"
              >
                <Heart size={18} data-oid="xc8._hb" />
                Wishlist
              </Link>
            </div>

            <div className="mt-auto p-4" data-oid="wf-nna2">
              <button
                className="w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 text-red-600 hover:bg-red-50"
                data-oid="2edioz5"
              >
                <LogOut size={18} data-oid="0motw2c" />
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-64 flex-1 pb-16 min-h-screen" data-oid="98pet52">
          <Suspense
            fallback={<div data-oid="56pyc4v">Loading...</div>}
            data-oid="thtdbz."
          >
            {children}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
