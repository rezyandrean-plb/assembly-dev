"use client";

import { usePathname } from "next/navigation";

interface AdminLayoutWrapperProps {
  children: React.ReactNode;
}

export function AdminLayoutWrapper({ children }: AdminLayoutWrapperProps) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  if (isAdminRoute) {
    // For admin routes, render without padding
    return <main className="flex-grow">{children}</main>;
  }

  // For public routes, render with padding
  return <main className="flex-grow pt-16">{children}</main>;
}
