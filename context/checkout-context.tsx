"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type DeliveryOption = "delivery" | "self-collect";

interface Address {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  country: string;
  company: string;
  streetAddress: string;
  suburb: string;
  state: string;
  postcode: string;
}

interface CheckoutContextType {
  deliveryOption: DeliveryOption;
  setDeliveryOption: (option: DeliveryOption) => void;
  shippingCost: number;
  setShippingCost: (cost: number) => void;
  deliveryAddress: Address;
  setDeliveryAddress: (address: Address) => void;
  billingAddress: Address;
  setBillingAddress: (address: Address) => void;
  billingSameAsDelivery: boolean;
  setBillingSameAsDelivery: (isSame: boolean) => void;
}

const CheckoutContext = createContext<CheckoutContextType | undefined>(
  undefined,
);

const initialAddressState: Address = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  country: "Singapore",
  company: "",
  streetAddress: "",
  suburb: "",
  state: "",
  postcode: "",
};

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const [deliveryOption, setDeliveryOption] =
    useState<DeliveryOption>("delivery");
  const [shippingCost, setShippingCost] = useState(0);
  const [deliveryAddress, setDeliveryAddress] =
    useState<Address>(initialAddressState);
  const [billingAddress, setBillingAddress] =
    useState<Address>(initialAddressState);
  const [billingSameAsDelivery, setBillingSameAsDelivery] = useState(true);

  const value = {
    deliveryOption,
    setDeliveryOption,
    shippingCost,
    setShippingCost,
    deliveryAddress,
    setDeliveryAddress,
    billingAddress,
    setBillingAddress,
    billingSameAsDelivery,
    setBillingSameAsDelivery,
  };

  return (
    <CheckoutContext.Provider value={value} data-oid=".-ja:2_">
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const context = useContext(CheckoutContext);
  if (context === undefined) {
    throw new Error("useCheckout must be used within a CheckoutProvider");
  }
  return context;
}
