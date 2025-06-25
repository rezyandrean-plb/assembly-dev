"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Settings,
  BookOpen,
  Heart,
  ShoppingBag,
  LogOut,
  Menu,
  X,
  FileText,
  BarChart3,
  Award,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoggedIn, user, logout } = useAuth();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, router]);

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
      if (desktop) {
        setIsSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isLoggedIn) {
    return (
      <div
        className="min-h-screen flex items-center justify-center bg-gray-50"
        data-oid="v0a7o:j"
      >
        <div className="text-center" data-oid="lov2m6x">
          <div
            className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"
            data-oid="gl7799a"
          ></div>
          <p className="text-gray-600" data-oid="dh8b0w7">
            Checking authentication...
          </p>
        </div>
      </div>
    );
  }

  const sidebarItems = [
    {
      name: "Profile Overview",
      href: "/profile",
      icon: User,
      description: "View and edit your profile",
    },
    {
      name: "Account Details",
      href: "/profile/details",
      icon: Settings,
      description: "Manage your account information",
    },
    {
      name: "Learning Progress",
      href: "/profile/learning-progress",
      icon: BarChart3,
      description: "Track your learning journey",
    },
    {
      name: "Completed Courses",
      href: "/profile/completed-courses",
      icon: Award,
      description: "View certificates and achievements",
    },
    {
      name: "Purchase History",
      href: "/profile/purchase-history",
      icon: ShoppingBag,
      description: "View your past orders",
    },
    {
      name: "Wishlist",
      href: "/profile/wishlist",
      icon: Heart,
      description: "Courses you want to take",
    },
    {
      name: "Reviews",
      href: "/profile/reviews",
      icon: BookOpen,
      description: "Your course reviews",
    },
    {
      name: "Settings",
      href: "/profile/settings",
      icon: Settings,
      description: "Account preferences",
    },
    {
      name: "Terms of Use",
      href: "/profile/terms",
      icon: FileText,
      description: "View terms and policies",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16" data-oid="jut:t-j">
      {/* Mobile sidebar overlay */}
      <AnimatePresence data-oid="zh:z4-a">
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
            data-oid="7:facvr"
          />
        )}
      </AnimatePresence>

      <div className="flex" data-oid="su-gbx1">
        {/* Sidebar */}
        <motion.aside
          initial={false}
          animate={{
            x: isDesktop ? 0 : isSidebarOpen ? 0 : "-100%",
          }}
          className="fixed top-16 left-0 z-40 w-80 h-[calc(100vh-4rem)] bg-white shadow-lg lg:relative lg:top-0 lg:z-auto lg:h-auto overflow-y-auto"
          data-oid="le3ywbm"
        >
          <div className="p-6" data-oid="eflc2a_">
            {/* Mobile close button */}
            <div
              className="flex justify-between items-center lg:hidden mb-6"
              data-oid="ux2hwyj"
            >
              <h2
                className="text-xl font-bold text-gray-800"
                data-oid="3vv1hm3"
              >
                Profile Menu
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSidebarOpen(false)}
                data-oid="5pot828"
              >
                <X className="h-5 w-5" data-oid="tp8yagx" />
              </Button>
            </div>

            {/* User info */}
            <div
              className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg mb-6"
              data-oid="e62ac-8"
            >
              {user?.image ? (
                <img
                  src={user.image}
                  alt={user.name || "User"}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                  data-oid="gy8yofz"
                />
              ) : (
                <div
                  className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md"
                  data-oid="2rfpuc2"
                >
                  {user?.name
                    ? user.name.charAt(0).toUpperCase()
                    : user?.email?.charAt(0).toUpperCase() || "U"}
                </div>
              )}
              <div data-oid="7w:v2y4">
                <h3
                  className="font-semibold text-gray-800 text-lg"
                  data-oid="7:394sb"
                >
                  {user?.name || "User"}
                </h3>
                <p className="text-gray-600 text-sm" data-oid="no5:sno">
                  {user?.email}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-2" data-oid="q2.d8fg">
              {sidebarItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors group"
                  onClick={() => setIsSidebarOpen(false)}
                  data-oid="bensjh3"
                >
                  <item.icon
                    className="h-5 w-5 text-gray-500 group-hover:text-blue-600"
                    data-oid="7s22p3g"
                  />

                  <div data-oid="..3mwy9">
                    <div
                      className="font-medium text-gray-800 group-hover:text-blue-600"
                      data-oid="ck9-2-t"
                    >
                      {item.name}
                    </div>
                    <div className="text-xs text-gray-500" data-oid="au11gki">
                      {item.description}
                    </div>
                  </div>
                </Link>
              ))}

              {/* Logout */}
              <button
                onClick={() => {
                  logout();
                  router.push("/");
                }}
                className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-red-50 transition-colors group mt-6 border-t border-gray-200 pt-6"
                data-oid="r.7hjwz"
              >
                <LogOut className="h-5 w-5 text-red-500" data-oid="2.i83n_" />
                <div className="text-left" data-oid="h1dx3uh">
                  <div className="font-medium text-red-600" data-oid="o_l-.u9">
                    Log Out
                  </div>
                  <div className="text-xs text-red-400" data-oid="xx1ppc6">
                    Sign out of your account
                  </div>
                </div>
              </button>
            </nav>
          </div>
        </motion.aside>

        {/* Main content */}
        <div className="flex-1 lg:ml-0" data-oid="w_hvl-4">
          {/* Mobile header */}
          <div
            className="lg:hidden bg-white shadow-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between"
            data-oid="9xcye.4"
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSidebarOpen(true)}
              className="text-gray-600"
              data-oid="8s0oifi"
            >
              <Menu className="h-5 w-5 mr-2" data-oid="pv7mza_" />
              Profile Menu
            </Button>
          </div>

          {/* Content */}
          <main className="p-6" data-oid="brf.xz.">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
