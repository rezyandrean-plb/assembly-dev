"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface TrackingEvent {
  id: string;
  status: string;
  description: string;
  location: string;
  timestamp: Date;
  isCompleted: boolean;
}

export interface TrackingInfo {
  trackingNumber: string;
  orderId: string;
  status: "processing" | "shipped" | "in-transit" | "delivered";
  estimatedDelivery: Date;
  carrier: string;
  events: TrackingEvent[];
  recipientInfo: {
    name: string;
    address: string;
    phone: string;
  };
}

interface TrackingContextType {
  trackingInfo: TrackingInfo | null;
  setTrackingInfo: (info: TrackingInfo) => void;
  createTrackingInfo: (
    orderId: string,
    recipientInfo: TrackingInfo["recipientInfo"],
  ) => TrackingInfo;
  clearTracking: () => void;
}

const TrackingContext = createContext<TrackingContextType | undefined>(
  undefined,
);

export function TrackingProvider({ children }: { children: ReactNode }) {
  const [trackingInfo, setTrackingInfo] = useState<TrackingInfo | null>(null);

  const generateTrackingNumber = (): string => {
    const prefix = "ASG";
    const timestamp = Date.now().toString().slice(-8);
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `${prefix}${timestamp}${random}`;
  };

  const createTrackingInfo = (
    orderId: string,
    recipientInfo: TrackingInfo["recipientInfo"],
  ): TrackingInfo => {
    const trackingNumber = generateTrackingNumber();
    const now = new Date();
    const estimatedDelivery = new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000); // 5 days from now

    const newTrackingInfo: TrackingInfo = {
      trackingNumber,
      orderId,
      status: "processing",
      estimatedDelivery,
      carrier: "SingPost",
      recipientInfo,
      events: [
        {
          id: "1",
          status: "Order Confirmed",
          description:
            "Your order has been confirmed and is being prepared for shipment",
          location: "Assembly SG Warehouse",
          timestamp: now,
          isCompleted: true,
        },
        {
          id: "2",
          status: "Processing",
          description: "Your order is being processed and packed",
          location: "Assembly SG Warehouse",
          timestamp: new Date(now.getTime() + 2 * 60 * 60 * 1000), // 2 hours later
          isCompleted: false,
        },
        {
          id: "3",
          status: "Shipped",
          description: "Your package has been shipped",
          location: "Assembly SG Warehouse",
          timestamp: new Date(now.getTime() + 24 * 60 * 60 * 1000), // 1 day later
          isCompleted: false,
        },
        {
          id: "4",
          status: "In Transit",
          description: "Your package is on its way to you",
          location: "Singapore Post Distribution Center",
          timestamp: new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000), // 2 days later
          isCompleted: false,
        },
        {
          id: "5",
          status: "Out for Delivery",
          description: "Your package is out for delivery",
          location: "Local Delivery Hub",
          timestamp: new Date(now.getTime() + 4 * 24 * 60 * 60 * 1000), // 4 days later
          isCompleted: false,
        },
        {
          id: "6",
          status: "Delivered",
          description: "Your package has been delivered",
          location: recipientInfo.address,
          timestamp: estimatedDelivery,
          isCompleted: false,
        },
      ],
    };

    setTrackingInfo(newTrackingInfo);
    return newTrackingInfo;
  };

  const clearTracking = () => {
    setTrackingInfo(null);
  };

  const value = {
    trackingInfo,
    setTrackingInfo,
    createTrackingInfo,
    clearTracking,
  };

  return (
    <TrackingContext.Provider value={value} data-oid="e6.dhqr">
      {children}
    </TrackingContext.Provider>
  );
}

export function useTracking() {
  const context = useContext(TrackingContext);
  if (context === undefined) {
    throw new Error("useTracking must be used within a TrackingProvider");
  }
  return context;
}
