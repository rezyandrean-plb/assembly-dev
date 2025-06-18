"use client";

import React from "react";
import { Check } from "lucide-react";

const steps = [
  { id: 1, name: "Cart", label: "Step 1" },
  { id: 2, name: "Deliver/Collect", label: "Step 2" },
  { id: 3, name: "Address", label: "Step 3" },
  { id: 4, name: "Payment", label: "Step 4" },
];

interface StepperProps {
  currentStep: number;
}

export default function Stepper({ currentStep }: StepperProps) {
  return (
    <div className="w-full py-8 bg-white border-b" data-oid="thy.ci2">
      <div className="max-w-6xl mx-auto px-4" data-oid="_3ih1cc">
        <div className="flex items-center justify-center" data-oid="_glxg0h">
          {steps.map((step, index) => {
            const isCompleted = index + 1 < currentStep;
            const isCurrent = index + 1 === currentStep;

            return (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center" data-oid=":dbnpcv">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                      isCompleted
                        ? "bg-blue-600 text-white"
                        : isCurrent
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-500"
                    }`}
                    data-oid="q-xxy.5"
                  >
                    {isCompleted ? (
                      <Check className="w-5 h-5" data-oid="haeni8y" />
                    ) : (
                      step.id
                    )}
                  </div>
                  <div className="mt-2 text-center" data-oid="51l-qg1">
                    <p
                      className={`text-sm font-medium ${
                        isCompleted || isCurrent
                          ? "text-blue-600"
                          : "text-gray-500"
                      }`}
                      data-oid="b6wkx-m"
                    >
                      {step.name}
                    </p>
                    <p className="text-xs text-gray-400" data-oid="ki_fl2a">
                      {step.label}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-px mx-4 ${
                      index + 1 < currentStep ? "bg-blue-600" : "bg-gray-200"
                    }`}
                    style={{ minWidth: "60px" }}
                    data-oid="pivl3d8"
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
