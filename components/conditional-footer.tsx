"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/footer";

export function ConditionalFooter() {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  // Don't render footer on admin routes or test login page
  if (isAdminRoute || pathname === "/admin/test-login") {
    return null;
  }

  // Render footer for all other routes
  return <Footer />;
}
