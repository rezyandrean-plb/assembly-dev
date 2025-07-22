"use client";

import React from "react";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/cart-context";

interface StepperProps {
  currentStep: number;
  hasBook: boolean;
}

export default function Stepper({ currentStep, hasBook }: StepperProps) {
  const router = useRouter();
  const { cart } = useCart();

  // Define steps based on whether there's a book in cart
  const allSteps = [
    { id: 1, name: "Cart", label: "Step 1", route: "/cart" },
    {
      id: 2,
      name: "Deliver/Collect",
      label: "Step 2",
      route: "/checkout/delivery",
    },
    { id: 3, name: "Address", label: "Step 3", route: "/checkout/address" },
    { id: 4, name: "Payment", label: "Step 4", route: "/checkout/payment" },
  ];

  const coursesOnlySteps = [
    { id: 1, name: "Cart", label: "Step 1", route: "/cart" },
    { id: 2, name: "Payment", label: "Step 2", route: "/checkout/payment" },
  ];

  const steps = hasBook ? allSteps : coursesOnlySteps;

  const handleStepClick = (step: any, stepIndex: number) => {
    const stepNumber = stepIndex + 1;

    // Only allow navigation to completed steps or current step
    if (stepNumber <= currentStep) {
      // Special handling for cart step
      if (step.route === "/cart") {
        router.push("/cart");
        return;
      }

      // For checkout steps, check if books are required
      if (
        step.route === "/checkout/delivery" ||
        step.route === "/checkout/address"
      ) {
        const hasBooks = cart.some((item) => item.type === "Book");
        if (!hasBooks) {
          // If no books, redirect to payment instead
          router.push("/checkout/payment");
          return;
        }
      }

      router.push(step.route);
    }
  };

  return (
    <div className="w-full py-8 bg-white border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center">
          {steps.map((step, index) => {
            const isCompleted = index + 1 < currentStep;
            const isCurrent = index + 1 === currentStep;
            const isClickable = index + 1 <= currentStep;

            return (
              <React.Fragment key={step.id}>
                <div
                  className={`flex flex-col items-center ${isClickable ? "cursor-pointer hover:opacity-80" : "cursor-default"} transition-opacity`}
                  onClick={() => handleStepClick(step, index)}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 ${
                      isCompleted
                        ? "bg-[#123b79] text-white shadow-md"
                        : isCurrent
                          ? "bg-[#123b79] text-white shadow-lg ring-2 ring-[#123b79] ring-opacity-30"
                          : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {isCompleted ? <Check className="w-5 h-5" /> : step.id}
                  </div>
                  <div className="mt-2 text-center">
                    <p
                      className={`text-sm font-medium transition-colors duration-200 ${
                        isCompleted || isCurrent
                          ? "text-[#123b79]"
                          : "text-gray-500"
                      } ${isClickable ? "hover:text-[#123b79]" : ""}`}
                    >
                      {step.name}
                    </p>
                    <p className="text-xs text-gray-400">{step.label}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-px mx-4 transition-colors duration-200 ${
                      index + 1 < currentStep ? "bg-[#123b79]" : "bg-gray-200"
                    }`}
                    style={{ minWidth: "60px" }}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
