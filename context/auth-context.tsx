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
  sendVerificationCode: (email: string) => Promise<boolean>;
  loginWithVerification: (email: string, code: string) => Promise<boolean>;
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

// Temporary verification codes storage - in production this would be in a database
const VERIFICATION_CODES = new Map<string, { code: string; expiresAt: number }>();

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

  const sendVerificationCode = async (email: string): Promise<boolean> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Check if user exists
    const foundUser = TEMP_USERS.find((u) => u.email === email);
    
    if (foundUser) {
      // Generate a 6-digit verification code
      const code = Math.floor(100000 + Math.random() * 900000).toString();
      const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes from now
      
      // Store the verification code
      VERIFICATION_CODES.set(email, { code, expiresAt });
      
      // In production, you would send this code via email
      console.log(`Verification code for ${email}: ${code}`);
      
      return true;
    }

    return false;
  };

  const loginWithVerification = async (email: string, code: string): Promise<boolean> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Check if verification code exists and is valid
    const storedData = VERIFICATION_CODES.get(email);
    
    if (!storedData) {
      return false;
    }

    // Check if code has expired
    if (Date.now() > storedData.expiresAt) {
      VERIFICATION_CODES.delete(email);
      return false;
    }

    // Check if code matches
    if (storedData.code !== code) {
      return false;
    }

    // Find user and log them in
    const foundUser = TEMP_USERS.find((u) => u.email === email);
    
    if (foundUser) {
      setIsLoggedIn(true);
      setUser({
        email: foundUser.email,
        name: foundUser.name,
        image: foundUser.image,
        role: foundUser.role,
      });
      
      // Remove the used verification code
      VERIFICATION_CODES.delete(email);
      
      return true;
    }

    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ 
      isLoggedIn, 
      user, 
      login, 
      sendVerificationCode, 
      loginWithVerification, 
      logout 
    }}>
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
