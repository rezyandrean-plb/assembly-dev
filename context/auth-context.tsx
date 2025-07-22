"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface User {
  email: string;
  name?: string;
  image?: string;
  role?: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Temporary user storage - in production this would be in a database
const TEMP_USERS = [
  {
    email: "pyee.1104@gmail.com",
    password: "Abc123456#",
    name: "Pei Yee",
    image: undefined,
    role: "user",
  },
  {
    email: "jenna.tan@propertylimbrothers.com",
    password: "Abc123456#",
    name: "Jenna Tan",
    image: undefined,
    role: "admin",
  },
  {
    email: "blurryorr@gmail.com",
    password: "Abc123456#",
    name: "Blurry Orr",
    image: undefined,
    role: "user",
  },
  {
    email: "admin@assembly.com",
    password: "SuperAdmin123#",
    name: "Super Admin",
    image: undefined,
    role: "super_admin",
  },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Check if user exists in temp storage
    const foundUser = TEMP_USERS.find(
      (u) => u.email === email && u.password === password,
    );

    if (foundUser) {
      setIsLoggedIn(true);
      setUser({
        email: foundUser.email,
        name: foundUser.name,
        image: foundUser.image,
        role: foundUser.role,
      });
      return true;
    }

    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
