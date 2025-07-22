"use client";

import { useState, useEffect } from "react";

interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: string;
  permissions: string[];
}

interface AdminSession {
  user: AdminUser;
  token: string;
  expiresAt: string;
}

export function useAdminAuth() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState<AdminUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAdminSession();
  }, []);

  const checkAdminSession = () => {
    try {
      const sessionData = localStorage.getItem("adminSession");
      if (sessionData) {
        const session: AdminSession = JSON.parse(sessionData);
        const expiresAt = new Date(session.expiresAt);
        
        if (expiresAt > new Date()) {
          setIsAdmin(true);
          setUser(session.user);
        } else {
          // Session expired
          localStorage.removeItem("adminSession");
          setIsAdmin(false);
          setUser(null);
        }
      } else {
        setIsAdmin(false);
        setUser(null);
      }
    } catch (error) {
      console.error("Error checking admin session:", error);
      setIsAdmin(false);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const login = (email: string, password: string): Promise<boolean> => {
    return new Promise((resolve) => {
      // Simulate API call
      setTimeout(() => {
        if (email === "admin@assembly.com" && password === "admin123") {
          const session: AdminSession = {
            user: {
              id: "admin-001",
              email: "admin@assembly.com",
              name: "Super Admin",
              role: "super_admin",
              permissions: ["all"]
            },
            token: "test-admin-token",
            expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
          };
          
          localStorage.setItem("adminSession", JSON.stringify(session));
          setIsAdmin(true);
          setUser(session.user);
          resolve(true);
        } else {
          resolve(false);
        }
      }, 1000);
    });
  };

  const logout = () => {
    localStorage.removeItem("adminSession");
    setIsAdmin(false);
    setUser(null);
  };

  const isSuperAdmin = user?.role === "super_admin";

  return {
    isAdmin,
    user,
    isLoading,
    login,
    logout,
    isSuperAdmin,
    checkAdminSession
  };
}
