"use client";

import React from "react";

const steps = ["Bag", "Deliver/Collect", "Address", "Payment"];

interface StepperProps {
  currentStep: number;
}

export default function Stepper({ currentStep }: StepperProps) {
  return (
    <div className="w-full py-8" data-oid="6kuv99b">
      <div
        className="flex justify-between items-center max-w-2xl mx-auto"
        data-oid="gyenyjf"
      >
        {steps.map((step, index) => (
          <React.Fragment key={step}>
            <div className="flex items-center" data-oid="h4hehan">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                  index + 1 <= currentStep
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
                data-oid="4ifwxde"
              >
                {index + 1}
              </div>
              <p
                className={`ml-3 ${index + 1 <= currentStep ? "text-primary" : "text-gray-500"}`}
                data-oid="roa5kf7"
              >
                {step}
              </p>
            </div>
            {index < steps.length - 1 && (
              <div
                className="flex-1 h-px bg-gray-200 mx-4"
                data-oid="ai6cvxi"
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
