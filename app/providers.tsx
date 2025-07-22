"use client";

import { NetworkProvider } from "@/context/network-context";
import { CartProvider } from "@/components/cart-context";
import { AuthProvider } from "@/context/auth-context";
import { ErrorBoundary } from "@/components/error-boundary";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <CartProvider>
          <NetworkProvider>{children}</NetworkProvider>
        </CartProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}
