"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";
import { AdminHeader } from "@/components/admin-header";

export function ConditionalHeader() {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  // Don't render header on test login page
  if (pathname === "/admin/test-login") {
    return null;
  }

  // Render admin header for admin routes
  if (isAdminRoute) {
    return <AdminHeader />;
  }

  // Render public navbar for all other routes
  return <Navbar />;
}
