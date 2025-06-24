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
import { useRouter } from "next/navigation";
import ProfileNavbar from "../components/profile-navbar";
import { useAuth } from "@/context/auth-context";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrollY, setScrollY] = useState(0);
  const pathname = usePathname();
  const { user, logout, isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, router]);

  const isActive = (path: string) => {
    return pathname === path;
  };

  // Show loading while checking authentication
  if (!isLoggedIn) {
    return (
      <div
        className="min-h-screen bg-gray-50 flex items-center justify-center"
        data-oid="nq-dhjo"
      >
        <div className="text-center" data-oid="3dqm_zy">
          <div
            className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"
            data-oid="j4:i.pi"
          ></div>
          <p className="mt-4 text-gray-600" data-oid="8i76u:8">
            Redirecting to login...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16 relative" data-oid="7tc.7.v">
      <NetworkBackground
        scrollY={scrollY}
        scrollSpeed={0.5}
        windowHeight={0}
        opacity={0.05}
        data-oid="gs7--h4"
      />

      {/* Use the ProfileNavbar component */}
      <ProfileNavbar data-oid="sjmbw30" />

      <div className="flex" data-oid="fw96.qd">
        {/* Sidebar */}
        <div
          className="w-64 fixed left-0 top-16 bg-white shadow-sm z-10 h-screen"
          style={{ maxHeight: "calc(100vh - 16px)", overflowY: "auto" }}
          data-oid="ub.m0vo"
        >
          <div className="flex flex-col h-full" data-oid="2qtajs-">
            <div className="p-4" data-oid="ulb0:jc">
              <div className="flex items-center gap-3" data-oid="vw-0e0g">
                <div
                  className="w-10 h-10 rounded-full overflow-hidden"
                  data-oid="a55ubb-"
                >
                  {user?.image ? (
                    <Image
                      src={user.image}
                      alt={user.name || user.email}
                      width={40}
                      height={40}
                      className="object-cover"
                      data-oid="7qkh79b"
                    />
                  ) : (
                    <div
                      className="w-10 h-10 bg-[#ff6b35] rounded-full flex items-center justify-center text-white font-semibold"
                      data-oid=":vql_-y"
                    >
                      {user?.name
                        ? user.name.charAt(0).toUpperCase()
                        : user?.email.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0" data-oid="f_0cdz.">
                  <h3
                    className="text-sm font-medium text-gray-900 truncate"
                    data-oid="h5888n1"
                  >
                    {user?.name || user?.email.split("@")[0]}
                  </h3>
                </div>
              </div>
            </div>

            <div className="px-3 py-2" data-oid="8ixlu8c">
              <p
                className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2"
                data-oid="dvgp3is"
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
                data-oid="1hwb1h-"
              >
                <Home size={18} data-oid="s:v__.l" />
                Dashboard
              </Link>
              <Link
                href="/profile/details"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile/details")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
                data-oid="6pxe.:t"
              >
                <User size={18} data-oid="eg1upmy" />
                Learning Preferences
              </Link>
              <Link
                href="/profile/learning-progress"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile/learning-progress")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
                data-oid="r49q7hg"
              >
                <BookOpen size={18} data-oid="_0fkwap" />
                Learning Progress
              </Link>
              <Link
                href="/profile/completed-courses"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile/completed-courses")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
                data-oid="4j:3u5q"
              >
                <Award size={18} data-oid="slm-34y" />
                Completed Courses
              </Link>
              <Link
                href="/profile/reviews"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile/reviews")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
                data-oid="laaa92j"
              >
                <MessageSquare size={18} data-oid="7p8dzoz" />
                My Reviews
              </Link>
              <Link
                href="/profile/wishlist"
                className={`w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 ${
                  isActive("/profile/wishlist")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
                data-oid="64kkwht"
              >
                <Heart size={18} data-oid="sv1t8mf" />
                Wishlist
              </Link>
            </div>

            <div className="mt-auto p-4" data-oid="4tgsj4v">
              <button
                onClick={logout}
                className="w-full px-3 py-2 rounded-lg font-medium text-sm flex items-center gap-3 text-red-600 hover:bg-red-50"
                data-oid="j-lvcal"
              >
                <LogOut size={18} data-oid="as8mp8v" />
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-64 flex-1 pb-16 min-h-screen" data-oid="_491iyq">
          <Suspense
            fallback={<div data-oid="_932flw">Loading...</div>}
            data-oid="5heamcm"
          >
            {children}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
