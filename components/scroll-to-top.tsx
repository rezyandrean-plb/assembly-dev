"use client";

import { useEffect, useState, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function ScrollToTopContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      window.scrollTo(0, 0);
    }
  }, [pathname, searchParams, isMounted]);

  return null;
}

export default function ScrollToTop() {
  return (
    <Suspense fallback={null} data-oid="65o6l9e">
      <ScrollToTopContent data-oid="h_2fvwd" />
    </Suspense>
  );
}
