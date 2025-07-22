"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  BookOpen,
  Users,
  ShoppingCart,
  CreditCard,
  Settings,
  Shield,
  HelpCircle,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useAdminAuth } from "@/hooks/use-admin-auth";

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: BarChart3,
  },
  {
    title: "Course Management",
    href: "/admin/courses",
    icon: BookOpen,
  },
  {
    title: "User Management",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Orders & Sales",
    href: "/admin/orders",
    icon: ShoppingCart,
  },
  {
    title: "Payments",
    href: "/admin/payments",
    icon: CreditCard,
  },
  {
    title: "Analytics & Reports",
    href: "/admin/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
    subItems: [
      { title: "General", href: "/admin/settings" },
      {
        title: "Email Templates",
        href: "/admin/settings?section=email-templates",
      },
      { title: "Shipping", href: "/admin/settings?section=shipping" },
    ],
  },
  {
    title: "Security",
    href: "/admin/security",
    icon: Shield,
    subItems: [
      { title: "Dashboard", href: "/admin/security" },
      { title: "Audit Log", href: "/admin/security?section=audit-log" },
      {
        title: "Access Control",
        href: "/admin/security?section=access-control",
      },
      {
        title: "Security Policies",
        href: "/admin/security?section=security-policies",
      },
      { title: "API Keys", href: "/admin/security?section=api-keys" },
    ],
  },
  {
    title: "Support",
    href: "/admin/support",
    icon: HelpCircle,
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();
  const { user, isSuperAdmin } = useAdminAuth();

  // Filter sidebar items based on user role
  const filteredSidebarItems = sidebarItems.filter((item) => {
    // Show Settings only to Super Admins
    if (item.href === "/admin/settings") {
      return isSuperAdmin;
    }
    return true;
  });

  // Use actual user data from auth context
  const displayUser = {
    name: user?.name || "Admin User",
    email: user?.email || "admin@assembly.com",
    role: user?.role === "super_admin" ? "Super Admin" : "Administrator",
    avatar: user?.image || "/placeholder.svg?height=36&width=36",
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden absolute top-20 left-4 z-40"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <div className="flex flex-1">
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-20 flex w-64 flex-col border-r border-gray-200 bg-white transition-transform md:sticky md:translate-x-0",
            sidebarOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex flex-col px-4 py-3">
            <div className="flex items-center justify-between px-4 md:hidden">
              <span className="font-bold">Admin Panel</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close Sidebar</span>
              </Button>
            </div>
            <div className="rounded-lg bg-[#E8EFFF] p-3">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border-2 border-[#123B79]">
                  <AvatarImage
                    src={displayUser.avatar || "/placeholder.svg"}
                    alt={displayUser.name}
                  />

                  <AvatarFallback
                    style={{ backgroundColor: "#123B79", color: "white" }}
                  >
                    {displayUser.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-[#123B79]">
                    {displayUser.name}
                  </p>
                  <Badge
                    variant="outline"
                    className="mt-1 text-xs border-[#123B79] text-[#123B79] bg-[#123B79] text-white"
                  >
                    {displayUser.role}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
          <div
            data-orientation="horizontal"
            role="none"
            className="shrink-0 bg-gray-300 h-px mx-4 my-2"
          ></div>
          <nav className="flex-1 overflow-auto py-4">
            <div className="px-4 md:px-6">
              <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight text-[#123B79]">
                Admin Navigation
              </h2>
              <div className="space-y-1">
                {filteredSidebarItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      pathname === item.href
                        ? "bg-[#123B79] text-white"
                        : "text-gray-600 hover:bg-[#E8EFFF] hover:text-[#123B79]",
                    )}
                  >
                    <item.icon
                      className={cn(
                        pathname === item.href
                          ? "text-white"
                          : "text-gray-400 group-hover:text-[#123B79]",
                        "mr-3 flex-shrink-0 h-5 w-5",
                      )}
                      aria-hidden="true"
                    />

                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </aside>
        <main className="flex-1 overflow-auto bg-[#F6F8FF] p-4 md:p-6">
          {children}
        </main>
      </div>
    </>
  );
}
