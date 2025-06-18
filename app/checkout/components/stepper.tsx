"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ShoppingBag, Truck, MapPin, CreditCard } from "lucide-react";

const steps = [
  { id: 1, name: "Cart", icon: ShoppingBag },
  { id: 2, name: "Delivery", icon: Truck },
  { id: 3, name: "Address", icon: MapPin },
  { id: 4, name: "Payment", icon: CreditCard },
];

interface StepperProps {
  currentStep: number;
}

export default function Stepper({ currentStep }: StepperProps) {
  return (
    <div className="w-full py-8" data-oid="thy.ci2">
      <div className="max-w-4xl mx-auto" data-oid="_3ih1cc">
        <div
          className="flex items-center justify-between relative"
          data-oid="_glxg0h"
        >
          {/* Progress Line */}
          <div
            className="absolute top-6 left-0 w-full h-0.5 bg-neutral-200 z-0"
            data-oid="dj8baqp"
          >
            <motion.div
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{
                width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              data-oid="-dva07l"
            />
          </div>

          {steps.map((step, index) => {
            const isCompleted = index + 1 < currentStep;
            const isCurrent = index + 1 === currentStep;
            const isUpcoming = index + 1 > currentStep;

            return (
              <div
                key={step.id}
                className="flex flex-col items-center relative z-10"
                data-oid=":dbnpcv"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    isCompleted
                      ? "bg-primary border-primary text-white"
                      : isCurrent
                        ? "bg-white border-primary text-primary shadow-lg"
                        : "bg-white border-neutral-200 text-neutral-400"
                  }`}
                  data-oid="q-xxy.5"
                >
                  {isCompleted ? (
                    <Check className="w-6 h-6" data-oid="haeni8y" />
                  ) : (
                    <step.icon className="w-6 h-6" data-oid="hj1t-tv" />
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="mt-3 text-center"
                  data-oid="51l-qg1"
                >
                  <p
                    className={`text-sm font-medium transition-colors duration-300 ${
                      isCompleted || isCurrent
                        ? "text-primary"
                        : "text-neutral-500"
                    }`}
                    data-oid="b6wkx-m"
                  >
                    {step.name}
                  </p>
                  <p
                    className="text-xs text-neutral-400 mt-1"
                    data-oid="ki_fl2a"
                  >
                    Step {step.id}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
