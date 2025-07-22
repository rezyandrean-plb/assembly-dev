"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useRouter } from "next/navigation";
import {
  LogIn,
  AlertTriangle,
  CheckCircle,
  Settings,
  Users,
  BarChart3,
  CreditCard,
  ShoppingCart,
} from "lucide-react";

export default function TestLoginPage() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [adminSession, setAdminSession] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    checkAdminSession();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Test credentials for super admin
      if (
        credentials.email === "admin@assembly.com" &&
        credentials.password === "admin123"
      ) {
        setSuccess("Login successful! Redirecting to admin dashboard...");

        // Store admin session (in real app, this would be a proper JWT token)
        const sessionData = {
          user: {
            id: "admin-001",
            email: "admin@assembly.com",
            name: "Super Admin",
            role: "super_admin",
            permissions: ["all"],
          },
          token: "test-admin-token",
          expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
        };

        localStorage.setItem("adminSession", JSON.stringify(sessionData));
        setAdminSession(sessionData);

        // Redirect to admin dashboard after a short delay
        setTimeout(() => {
          router.push("/admin");
        }, 1500);
      } else {
        setError("Invalid credentials. Use admin@assembly.com / admin123");
      }
    } catch (error) {
      setError("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminSession");
    setAdminSession(null);
    setSuccess("Logged out successfully!");
    setCredentials({ email: "", password: "" });
  };

  const checkAdminSession = () => {
    if (!isClient) return;

    try {
      const sessionData = localStorage.getItem("adminSession");
      if (sessionData) {
        const session = JSON.parse(sessionData);
        const expiresAt = new Date(session.expiresAt);
        if (expiresAt > new Date()) {
          setAdminSession(session);
        } else {
          localStorage.removeItem("adminSession");
          setAdminSession(null);
        }
      }
    } catch (error) {
      console.error("Error checking admin session:", error);
      setAdminSession(null);
    }
  };

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#123B79] mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#123B79] mb-2">
            Assembly Admin Test
          </h1>
          <p className="text-gray-600">
            Test super admin login and dashboard access
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Login Form */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LogIn className="h-5 w-5" />
                Super Admin Login
              </CardTitle>
              <CardDescription>
                Test credentials: admin@assembly.com / admin123
              </CardDescription>
            </CardHeader>
            <CardContent>
              {adminSession ? (
                <div className="space-y-4">
                  <Alert>
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Logged in as:</strong> {adminSession.user.name} (
                      {adminSession.user.email})
                    </AlertDescription>
                  </Alert>
                  <div className="space-y-2">
                    <Button
                      onClick={() => router.push("/admin")}
                      className="w-full bg-[#123B79] hover:bg-[#425DA0]"
                    >
                      Go to Admin Dashboard
                    </Button>
                    <Button
                      onClick={() => router.push("/admin/settings")}
                      variant="outline"
                      className="w-full"
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      Go to Settings
                    </Button>
                    <Button
                      onClick={handleLogout}
                      variant="outline"
                      className="w-full"
                    >
                      Logout
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleLogin} className="space-y-4">
                  {error && (
                    <Alert variant="destructive">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}
                  {success && (
                    <Alert>
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription>{success}</AlertDescription>
                    </Alert>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={credentials.email}
                      onChange={(e) =>
                        setCredentials((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      placeholder="admin@assembly.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={credentials.password}
                      onChange={(e) =>
                        setCredentials((prev) => ({
                          ...prev,
                          password: e.target.value,
                        }))
                      }
                      placeholder="admin123"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#123B79] hover:bg-[#425DA0]"
                  >
                    {isLoading ? "Logging in..." : "Login as Super Admin"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Admin Dashboard Preview */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Admin Dashboard Preview
              </CardTitle>
              <CardDescription>
                Available admin pages and features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="h-4 w-4 text-[#123B79]" />

                      <span className="font-medium text-sm">Dashboard</span>
                    </div>
                    <p className="text-xs text-gray-600">
                      Overview and analytics
                    </p>
                  </div>

                  <div className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4 text-[#123B79]" />

                      <span className="font-medium text-sm">
                        User Management
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">
                      Manage users and roles
                    </p>
                  </div>

                  <div className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <ShoppingCart className="h-4 w-4 text-[#123B79]" />

                      <span className="font-medium text-sm">
                        Orders & Sales
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">
                      View orders and revenue
                    </p>
                  </div>

                  <div className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <CreditCard className="h-4 w-4 text-[#123B79]" />

                      <span className="font-medium text-sm">Payments</span>
                    </div>
                    <p className="text-xs text-gray-600">Payment management</p>
                  </div>
                </div>

                <div className="p-3 border border-gray-200 rounded-lg bg-[#E8EFFF]">
                  <div className="flex items-center gap-2 mb-2">
                    <Settings className="h-4 w-4 text-[#123B79]" />

                    <span className="font-medium text-sm text-[#123B79]">
                      Settings (Super Admin Only)
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Platform configuration, payment gateways, email templates,
                    integrations
                  </p>
                </div>

                <div className="text-xs text-gray-500 space-y-1">
                  <p>
                    <strong>Test Credentials:</strong>
                  </p>
                  <p>Email: admin@assembly.com</p>
                  <p>Password: admin123</p>
                  <p className="mt-2">
                    <strong>Note:</strong> This is a test environment. In
                    production, use proper authentication.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
