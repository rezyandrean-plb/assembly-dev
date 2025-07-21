"use client";

import React from "react";
import { AdminHeader } from "@/components/admin-header";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
} 