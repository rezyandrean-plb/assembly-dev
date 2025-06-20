"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface NetworkState {
  scrollProgress: number;
  density: number;
  activity: number;
}

interface NetworkContextType {
  networkState: NetworkState;
  setNetworkState: (state: NetworkState) => void;
}

const NetworkContext = createContext<NetworkContextType | undefined>(undefined);

export function NetworkProvider({ children }: { children: ReactNode }) {
  const [networkState, setNetworkState] = useState<NetworkState>({
    scrollProgress: 0,
    density: 0.3,
    activity: 0.2,
  });

  return (
    <NetworkContext.Provider
      value={{ networkState, setNetworkState }}
      data-oid="lwt:86w"
    >
      {children}
    </NetworkContext.Provider>
  );
}

export function useNetwork() {
  const context = useContext(NetworkContext);
  if (context === undefined) {
    throw new Error("useNetwork must be used within a NetworkProvider");
  }
  return context;
}
