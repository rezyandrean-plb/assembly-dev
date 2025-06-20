"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TestOrderCoursesOnlyPage() {
  const router = useRouter();

  useEffect(() => {
    // Create mock order details for courses only
    const mockOrderDetails = {
      orderId: `ORD-${Date.now()}-COURSES`,
      orderDate: new Date().toISOString(),
      items: [
        {
          id: "course-1",
          title: "Condo Investment Masterclass",
          price: 199.99,
          type: "course",
          quantity: 1,
          image: "/images/course-thumbnail.jpg",
          instructor: "Paul Tan",
        },
        {
          id: "course-2",
          title: "HDB Investment Strategy",
          price: 149.99,
          type: "course",
          quantity: 1,
          image: "/images/course-thumbnail-2.jpg",
          instructor: "Sarah Lim",
        },
      ],

      totalAmount: 349.98,
      customerInfo: {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "+65 9876 5432",
        address: "456 Digital Street, Singapore 654321",
      },
      hasBooks: false, // No books, only courses
    };

    sessionStorage.setItem("orderDetails", JSON.stringify(mockOrderDetails));
    router.push("/order-received");
  }, [router]);

  return (
    <div
      className="min-h-screen bg-gray-50 flex items-center justify-center"
      data-oid="fzypr1r"
    >
      <div className="text-center" data-oid="536ii5p">
        <div
          className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#123b79] mx-auto mb-4"
          data-oid="8ab.4w-"
        ></div>
        <p className="text-gray-600" data-oid="11d773y">
          Setting up courses-only test order...
        </p>
      </div>
    </div>
  );
}
