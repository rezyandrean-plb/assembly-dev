"use client";

import React from "react";

const steps = ["Bag", "Deliver/Collect", "Address", "Payment"];

interface StepperProps {
  currentStep: number;
}

export default function Stepper({ currentStep }: StepperProps) {
  return (
    <div className="w-full py-8" data-oid=".yoa8.8">
      <div
        className="flex justify-between items-center max-w-2xl mx-auto"
        data-oid="o5ltwo2"
      >
        {steps.map((step, index) => (
          <React.Fragment key={step}>
            <div className="flex items-center" data-oid="wn8b_5h">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                  index + 1 <= currentStep
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
                data-oid="t20b1z4"
              >
                {index + 1}
              </div>
              <p
                className={`ml-3 ${index + 1 <= currentStep ? "text-primary" : "text-gray-500"}`}
                data-oid="905hzam"
              >
                {step}
              </p>
            </div>
            {index < steps.length - 1 && (
              <div
                className="flex-1 h-px bg-gray-200 mx-4"
                data-oid="nh:cdb."
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
