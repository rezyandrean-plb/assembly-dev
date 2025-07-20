"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/footer";

export function ConditionalFooter() {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  // Don't show footer on admin routes
  if (isAdminRoute) {
    return null;
  }

  // Show footer on public routes
  return <Footer data-oid="p30aimh" />;
}
