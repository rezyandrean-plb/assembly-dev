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
      <div
        className="min-h-screen bg-gray-50 flex items-center justify-center p-4"
        data-oid="ev82k8."
      >
        <div className="text-center" data-oid="fxwwljo">
          <div
            className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#123B79] mx-auto"
            data-oid="ftveylm"
          ></div>
          <p className="mt-2 text-gray-600" data-oid="n:k6svg">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-gray-50 flex items-center justify-center p-4"
      data-oid="9zb2gn8"
    >
      <div className="w-full max-w-4xl" data-oid="0yq1-gf">
        <div className="text-center mb-8" data-oid="9332lzj">
          <h1
            className="text-4xl font-bold text-[#123B79] mb-2"
            data-oid="ilx27eq"
          >
            Assembly Admin Test
          </h1>
          <p className="text-gray-600" data-oid="1va.9m0">
            Test super admin login and dashboard access
          </p>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          data-oid="7aq2c6h"
        >
          {/* Login Form */}
          <Card className="border-gray-200" data-oid="mqczn.2">
            <CardHeader data-oid="kzwou-v">
              <CardTitle className="flex items-center gap-2" data-oid="3t3z__a">
                <LogIn className="h-5 w-5" data-oid="88f_v0n" />
                Super Admin Login
              </CardTitle>
              <CardDescription data-oid="pejcp7s">
                Test credentials: admin@assembly.com / admin123
              </CardDescription>
            </CardHeader>
            <CardContent data-oid="moq1ka2">
              {adminSession ? (
                <div className="space-y-4" data-oid=":.osipl">
                  <Alert data-oid="0-b5z04">
                    <CheckCircle className="h-4 w-4" data-oid="6o_3qov" />
                    <AlertDescription data-oid="dhimz1c">
                      <strong data-oid="52u0t6m">Logged in as:</strong>{" "}
                      {adminSession.user.name} ({adminSession.user.email})
                    </AlertDescription>
                  </Alert>
                  <div className="space-y-2" data-oid="8h4r7xt">
                    <Button
                      onClick={() => router.push("/admin")}
                      className="w-full bg-[#123B79] hover:bg-[#425DA0]"
                      data-oid="y228qk4"
                    >
                      Go to Admin Dashboard
                    </Button>
                    <Button
                      onClick={() => router.push("/admin/settings")}
                      variant="outline"
                      className="w-full"
                      data-oid="_zhh5a3"
                    >
                      <Settings className="mr-2 h-4 w-4" data-oid="h8v:e9j" />
                      Go to Settings
                    </Button>
                    <Button
                      onClick={handleLogout}
                      variant="outline"
                      className="w-full"
                      data-oid="bn.bdyo"
                    >
                      Logout
                    </Button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleLogin}
                  className="space-y-4"
                  data-oid="_-s_9ln"
                >
                  {error && (
                    <Alert variant="destructive" data-oid="ry3szgi">
                      <AlertTriangle className="h-4 w-4" data-oid="k_tdsrh" />
                      <AlertDescription data-oid="3mhka_e">
                        {error}
                      </AlertDescription>
                    </Alert>
                  )}
                  {success && (
                    <Alert data-oid="qietgtr">
                      <CheckCircle className="h-4 w-4" data-oid="fordx9:" />
                      <AlertDescription data-oid="wrcj-ys">
                        {success}
                      </AlertDescription>
                    </Alert>
                  )}

                  <div className="space-y-2" data-oid="j-enb2v">
                    <Label htmlFor="email" data-oid="0ky9otn">
                      Email
                    </Label>
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
                      data-oid="3ulnxqc"
                    />
                  </div>

                  <div className="space-y-2" data-oid="7sg:clf">
                    <Label htmlFor="password" data-oid="aci36sf">
                      Password
                    </Label>
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
                      data-oid="r_t6xkw"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#123B79] hover:bg-[#425DA0]"
                    data-oid="a32n1wg"
                  >
                    {isLoading ? "Logging in..." : "Login as Super Admin"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Admin Dashboard Preview */}
          <Card className="border-gray-200" data-oid="xza1140">
            <CardHeader data-oid="zbquk7_">
              <CardTitle className="flex items-center gap-2" data-oid="bmp4g9c">
                <BarChart3 className="h-5 w-5" data-oid="__1w-9i" />
                Admin Dashboard Preview
              </CardTitle>
              <CardDescription data-oid="9101cir">
                Available admin pages and features
              </CardDescription>
            </CardHeader>
            <CardContent data-oid="2a6hjch">
              <div className="space-y-4" data-oid="9k06sgw">
                <div className="grid grid-cols-2 gap-3" data-oid="swc26u:">
                  <div
                    className="p-3 border border-gray-200 rounded-lg"
                    data-oid="l7cwjdx"
                  >
                    <div
                      className="flex items-center gap-2 mb-2"
                      data-oid="2q-3t9s"
                    >
                      <BarChart3
                        className="h-4 w-4 text-[#123B79]"
                        data-oid="nxd2fpe"
                      />
                      <span className="font-medium text-sm" data-oid="rb:chz0">
                        Dashboard
                      </span>
                    </div>
                    <p className="text-xs text-gray-600" data-oid="6:jwu.k">
                      Overview and analytics
                    </p>
                  </div>

                  <div
                    className="p-3 border border-gray-200 rounded-lg"
                    data-oid="9:n:2cw"
                  >
                    <div
                      className="flex items-center gap-2 mb-2"
                      data-oid="e7y1mhw"
                    >
                      <Users
                        className="h-4 w-4 text-[#123B79]"
                        data-oid="-8tl-do"
                      />
                      <span className="font-medium text-sm" data-oid="mhcq_w0">
                        User Management
                      </span>
                    </div>
                    <p className="text-xs text-gray-600" data-oid="7nl2bai">
                      Manage users and roles
                    </p>
                  </div>

                  <div
                    className="p-3 border border-gray-200 rounded-lg"
                    data-oid="n0v_g.1"
                  >
                    <div
                      className="flex items-center gap-2 mb-2"
                      data-oid="oluv2fz"
                    >
                      <ShoppingCart
                        className="h-4 w-4 text-[#123B79]"
                        data-oid="heuby0v"
                      />
                      <span className="font-medium text-sm" data-oid="-nwuw.j">
                        Orders & Sales
                      </span>
                    </div>
                    <p className="text-xs text-gray-600" data-oid="u5tqzwc">
                      View orders and revenue
                    </p>
                  </div>

                  <div
                    className="p-3 border border-gray-200 rounded-lg"
                    data-oid=":avo084"
                  >
                    <div
                      className="flex items-center gap-2 mb-2"
                      data-oid="p3ma90a"
                    >
                      <CreditCard
                        className="h-4 w-4 text-[#123B79]"
                        data-oid="0p6i3f-"
                      />
                      <span className="font-medium text-sm" data-oid="0bmo6nr">
                        Payments
                      </span>
                    </div>
                    <p className="text-xs text-gray-600" data-oid="vbrqxve">
                      Payment management
                    </p>
                  </div>
                </div>

                <div
                  className="p-3 border border-gray-200 rounded-lg bg-[#E8EFFF]"
                  data-oid="5g076qr"
                >
                  <div
                    className="flex items-center gap-2 mb-2"
                    data-oid=".ml-nvm"
                  >
                    <Settings
                      className="h-4 w-4 text-[#123B79]"
                      data-oid="6n1lidy"
                    />
                    <span
                      className="font-medium text-sm text-[#123B79]"
                      data-oid="tu424s3"
                    >
                      Settings (Super Admin Only)
                    </span>
                  </div>
                  <p className="text-xs text-gray-600" data-oid="7ewqasr">
                    Platform configuration, payment gateways, email templates,
                    integrations
                  </p>
                </div>

                <div
                  className="text-xs text-gray-500 space-y-1"
                  data-oid="cmalar6"
                >
                  <p data-oid=".5_-jj.">
                    <strong data-oid="72e:.:3">Test Credentials:</strong>
                  </p>
                  <p data-oid="4sgsz44">Email: admin@assembly.com</p>
                  <p data-oid="zavf1ej">Password: admin123</p>
                  <p className="mt-2" data-oid="jlq5e47">
                    <strong data-oid="-go04cw">Note:</strong> This is a test
                    environment. In production, use proper authentication.
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
