"use client";

import { usePathname } from "next/navigation";
import { useAdminAuth } from "@/hooks/use-admin-auth";
import { AdminHeader } from "@/components/admin-header";
import Navbar from "@/components/navbar";

export function ConditionalHeader() {
  const pathname = usePathname();
  const { isAdmin } = useAdminAuth();

  // Check if we're on an admin route
  const isAdminRoute = pathname?.startsWith("/admin");

  // If we're on an admin route, show admin header
  if (isAdminRoute) {
    return <AdminHeader data-oid="jb_5.0f" />;
  }

  // Otherwise show the regular public navbar
  return <Navbar data-oid="jtqhl63" />;
}
