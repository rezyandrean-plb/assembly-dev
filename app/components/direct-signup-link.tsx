"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function DirectSignupLink() {
  const router = useRouter();

  return (
    <a href="/signup" className="inline-block" data-oid="hgllbf4">
      <Button
        className="bg-orange-500 text-white hover:bg-orange-600"
        data-oid="l5o.6im"
      >
        Sign Up
      </Button>
    </a>
  );
}
