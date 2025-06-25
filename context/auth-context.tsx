"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface User {
  email: string;
  name?: string;
  image?: string;
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
  },
  {
    email: "jenna.tan@propertylimbrothers.com",
    password: "Abc123456#",
    name: "Jenna Tan",
    image: undefined,
  },
  {
    email: "blurryorr@gmail.com",
    password: "Abc123456#",
    name: "Blurry Orr",
    image: undefined,
  },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load auth state from localStorage on mount (client-side only)
  useEffect(() => {
    // Ensure we're on the client side
    if (typeof window === "undefined") return;

    try {
      const savedUser = localStorage.getItem("auth_user");
      const savedLoginState = localStorage.getItem("auth_logged_in");

      if (savedUser && savedLoginState === "true") {
        setUser(JSON.parse(savedUser));
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error("Error loading auth state:", error);
    }
    setIsInitialized(true);
  }, []);

  // Save auth state to localStorage whenever it changes (client-side only)
  useEffect(() => {
    // Ensure we're on the client side and initialized
    if (typeof window === "undefined" || !isInitialized) return;

    try {
      if (isLoggedIn && user) {
        localStorage.setItem("auth_user", JSON.stringify(user));
        localStorage.setItem("auth_logged_in", "true");
      } else {
        localStorage.removeItem("auth_user");
        localStorage.removeItem("auth_logged_in");
      }
    } catch (error) {
      console.error("Error saving auth state:", error);
    }
  }, [isLoggedIn, user, isInitialized]);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Check if user exists in temp storage
    const foundUser = TEMP_USERS.find(
      (u) => u.email === email && u.password === password,
    );

    if (foundUser) {
      const userData = {
        email: foundUser.email,
        name: foundUser.name,
        image: foundUser.image,
      };
      setIsLoggedIn(true);
      setUser(userData);
      return true;
    }

    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, user, login, logout }}
      data-oid="wqdf_kj"
    >
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
