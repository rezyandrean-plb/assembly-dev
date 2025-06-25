"use client";

import { SessionProvider } from "next-auth/react";
import { NetworkProvider } from "@/context/network-context";
import { CartProvider } from "@/components/cart-context";
import { AuthProvider } from "@/context/auth-context";
import { ErrorBoundary } from "@/components/error-boundary";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary data-oid="l5qemdb">
      <SessionProvider data-oid="h02cehh">
        <AuthProvider data-oid="ui1bagi">
          <CartProvider data-oid="mm3sitp">
            <NetworkProvider data-oid="koh.7sr">{children}</NetworkProvider>
          </CartProvider>
        </AuthProvider>
      </SessionProvider>
    </ErrorBoundary>
  );
}
