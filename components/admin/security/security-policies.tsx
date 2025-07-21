"use client";

import { useState } from "react";
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
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Settings,
  Lock,
  Clock,
  Shield,
  Globe,
  Save,
  AlertTriangle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SecurityPolicies {
  passwordPolicy: {
    minLength: number;
    requireUppercase: boolean;
    requireLowercase: boolean;
    requireNumbers: boolean;
    requireSpecialChars: boolean;
    passwordHistory: number;
    passwordExpiry: number; // days, 0 = never
  };
  sessionManagement: {
    adminSessionTimeout: number; // minutes
    maxConcurrentSessions: number;
    requireReauthForSensitive: boolean;
  };
  accountLockout: {
    enabled: boolean;
    maxFailedAttempts: number;
    lockoutDuration: number; // minutes
    resetOnSuccessfulLogin: boolean;
  };
  ipWhitelisting: {
    enabled: boolean;
    allowedIPs: string[];
    blockUnknownIPs: boolean;
  };
  twoFactorAuth: {
    enforceForAllAdmins: boolean;
    enforceForSuperAdmins: boolean;
    allowedMethods: string[];
  };
}

export function SecurityPolicies() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [newIP, setNewIP] = useState("");

  const [policies, setPolicies] = useState<SecurityPolicies>({
    passwordPolicy: {
      minLength: 8,
      requireUppercase: true,
      requireLowercase: true,
      requireNumbers: true,
      requireSpecialChars: true,
      passwordHistory: 5,
      passwordExpiry: 90,
    },
    sessionManagement: {
      adminSessionTimeout: 30,
      maxConcurrentSessions: 3,
      requireReauthForSensitive: true,
    },
    accountLockout: {
      enabled: true,
      maxFailedAttempts: 5,
      lockoutDuration: 15,
      resetOnSuccessfulLogin: true,
    },
    ipWhitelisting: {
      enabled: false,
      allowedIPs: ["192.168.1.0/24", "10.0.0.0/8"],
      blockUnknownIPs: true,
    },
    twoFactorAuth: {
      enforceForAllAdmins: true,
      enforceForSuperAdmins: true,
      allowedMethods: ["authenticator", "sms"],
    },
  });

  const handleSave = async () => {
    setIsLoading(true);
    try {
      // Validate policies
      if (policies.passwordPolicy.minLength < 8) {
        throw new Error(
          "Password minimum length must be at least 8 characters",
        );
      }

      if (policies.sessionManagement.adminSessionTimeout < 5) {
        throw new Error("Session timeout must be at least 5 minutes");
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Security policies updated",
        description: "All security policies have been saved successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "Failed to save policies",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const addIPAddress = () => {
    if (!newIP.trim()) return;

    // Basic IP validation
    const ipRegex = /^(\d{1,3}\.){3}\d{1,3}(\/\d{1,2})?$/;
    if (!ipRegex.test(newIP.trim())) {
      toast({
        title: "Invalid IP address",
        description: "Please enter a valid IP address or CIDR notation",
        variant: "destructive",
      });
      return;
    }

    setPolicies((prev) => ({
      ...prev,
      ipWhitelisting: {
        ...prev.ipWhitelisting,
        allowedIPs: [...prev.ipWhitelisting.allowedIPs, newIP.trim()],
      },
    }));
    setNewIP("");
  };

  const removeIPAddress = (index: number) => {
    setPolicies((prev) => ({
      ...prev,
      ipWhitelisting: {
        ...prev.ipWhitelisting,
        allowedIPs: prev.ipWhitelisting.allowedIPs.filter(
          (_, i) => i !== index,
        ),
      },
    }));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Security Policies Configuration
          </CardTitle>
          <CardDescription>
            Configure security rules and policies for the admin panel
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Password Policy */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5" />
            Password Policy
          </CardTitle>
          <CardDescription>
            Set password complexity requirements for all users
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="min-length">Minimum Length</Label>
              <Input
                id="min-length"
                type="number"
                min="8"
                max="32"
                value={policies.passwordPolicy.minLength}
                onChange={(e) =>
                  setPolicies((prev) => ({
                    ...prev,
                    passwordPolicy: {
                      ...prev.passwordPolicy,
                      minLength: parseInt(e.target.value) || 8,
                    },
                  }))
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password-history">Password History</Label>
              <Input
                id="password-history"
                type="number"
                min="0"
                max="24"
                value={policies.passwordPolicy.passwordHistory}
                onChange={(e) =>
                  setPolicies((prev) => ({
                    ...prev,
                    passwordPolicy: {
                      ...prev.passwordPolicy,
                      passwordHistory: parseInt(e.target.value) || 0,
                    },
                  }))
                }
              />
              <p className="text-xs text-gray-500">
                Prevent reuse of last N passwords
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Require Uppercase Letters</Label>
                <p className="text-sm text-gray-500">
                  At least one uppercase letter (A-Z)
                </p>
              </div>
              <Switch
                checked={policies.passwordPolicy.requireUppercase}
                onCheckedChange={(checked) =>
                  setPolicies((prev) => ({
                    ...prev,
                    passwordPolicy: {
                      ...prev.passwordPolicy,
                      requireUppercase: checked,
                    },
                  }))
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label>Require Numbers</Label>
                <p className="text-sm text-gray-500">
                  At least one number (0-9)
                </p>
              </div>
              <Switch
                checked={policies.passwordPolicy.requireNumbers}
                onCheckedChange={(checked) =>
                  setPolicies((prev) => ({
                    ...prev,
                    passwordPolicy: {
                      ...prev.passwordPolicy,
                      requireNumbers: checked,
                    },
                  }))
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label>Require Special Characters</Label>
                <p className="text-sm text-gray-500">
                  At least one special character (!@#$%^&*)
                </p>
              </div>
              <Switch
                checked={policies.passwordPolicy.requireSpecialChars}
                onCheckedChange={(checked) =>
                  setPolicies((prev) => ({
                    ...prev,
                    passwordPolicy: {
                      ...prev.passwordPolicy,
                      requireSpecialChars: checked,
                    },
                  }))
                }
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password-expiry">Password Expiry (days)</Label>
            <Input
              id="password-expiry"
              type="number"
              min="0"
              max="365"
              value={policies.passwordPolicy.passwordExpiry}
              onChange={(e) =>
                setPolicies((prev) => ({
                  ...prev,
                  passwordPolicy: {
                    ...prev.passwordPolicy,
                    passwordExpiry: parseInt(e.target.value) || 0,
                  },
                }))
              }
            />
            <p className="text-xs text-gray-500">
              Set to 0 for passwords that never expire
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Session Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Session Management
          </CardTitle>
          <CardDescription>
            Configure admin session timeouts and limits
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="session-timeout">
                Admin Session Timeout (minutes)
              </Label>
              <Input
                id="session-timeout"
                type="number"
                min="5"
                max="480"
                value={policies.sessionManagement.adminSessionTimeout}
                onChange={(e) =>
                  setPolicies((prev) => ({
                    ...prev,
                    sessionManagement: {
                      ...prev.sessionManagement,
                      adminSessionTimeout: parseInt(e.target.value) || 30,
                    },
                  }))
                }
              />
              <p className="text-xs text-gray-500">
                Automatically log out after inactivity
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="max-sessions">Max Concurrent Sessions</Label>
              <Input
                id="max-sessions"
                type="number"
                min="1"
                max="10"
                value={policies.sessionManagement.maxConcurrentSessions}
                onChange={(e) =>
                  setPolicies((prev) => ({
                    ...prev,
                    sessionManagement: {
                      ...prev.sessionManagement,
                      maxConcurrentSessions: parseInt(e.target.value) || 1,
                    },
                  }))
                }
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label>Require Re-authentication for Sensitive Actions</Label>
              <p className="text-sm text-gray-500">
                Require password confirmation for user deletion, role changes,
                etc.
              </p>
            </div>
            <Switch
              checked={policies.sessionManagement.requireReauthForSensitive}
              onCheckedChange={(checked) =>
                setPolicies((prev) => ({
                  ...prev,
                  sessionManagement: {
                    ...prev.sessionManagement,
                    requireReauthForSensitive: checked,
                  },
                }))
              }
            />
          </div>
        </CardContent>
      </Card>

      {/* Account Lockout */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Account Lockout Policy
          </CardTitle>
          <CardDescription>Protect against brute-force attacks</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>Enable Account Lockout</Label>
              <p className="text-sm text-gray-500">
                Lock accounts after failed login attempts
              </p>
            </div>
            <Switch
              checked={policies.accountLockout.enabled}
              onCheckedChange={(checked) =>
                setPolicies((prev) => ({
                  ...prev,
                  accountLockout: {
                    ...prev.accountLockout,
                    enabled: checked,
                  },
                }))
              }
            />
          </div>

          {policies.accountLockout.enabled && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="max-attempts">Max Failed Attempts</Label>
                <Input
                  id="max-attempts"
                  type="number"
                  min="3"
                  max="10"
                  value={policies.accountLockout.maxFailedAttempts}
                  onChange={(e) =>
                    setPolicies((prev) => ({
                      ...prev,
                      accountLockout: {
                        ...prev.accountLockout,
                        maxFailedAttempts: parseInt(e.target.value) || 5,
                      },
                    }))
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lockout-duration">
                  Lockout Duration (minutes)
                </Label>
                <Input
                  id="lockout-duration"
                  type="number"
                  min="5"
                  max="1440"
                  value={policies.accountLockout.lockoutDuration}
                  onChange={(e) =>
                    setPolicies((prev) => ({
                      ...prev,
                      accountLockout: {
                        ...prev.accountLockout,
                        lockoutDuration: parseInt(e.target.value) || 15,
                      },
                    }))
                  }
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* IP Whitelisting */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            IP Whitelisting
          </CardTitle>
          <CardDescription>
            Restrict admin access to specific IP addresses
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>Enable IP Whitelisting</Label>
              <p className="text-sm text-gray-500">
                Only allow admin access from approved IP addresses
              </p>
            </div>
            <Switch
              checked={policies.ipWhitelisting.enabled}
              onCheckedChange={(checked) =>
                setPolicies((prev) => ({
                  ...prev,
                  ipWhitelisting: {
                    ...prev.ipWhitelisting,
                    enabled: checked,
                  },
                }))
              }
            />
          </div>

          {policies.ipWhitelisting.enabled && (
            <>
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-yellow-800">
                      Warning: IP Whitelisting Active
                    </p>
                    <p className="text-sm text-yellow-700">
                      Ensure your current IP is in the whitelist to avoid being
                      locked out.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Allowed IP Addresses</Label>
                <div className="flex gap-2">
                  <Input
                    placeholder="192.168.1.100 or 192.168.1.0/24"
                    value={newIP}
                    onChange={(e) => setNewIP(e.target.value)}
                  />
                  <Button onClick={addIPAddress} variant="outline">
                    Add
                  </Button>
                </div>
                <p className="text-xs text-gray-500">
                  Enter individual IPs or CIDR notation for ranges
                </p>
              </div>

              <div className="space-y-2">
                {policies.ipWhitelisting.allowedIPs.map((ip, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 border rounded"
                  >
                    <code className="text-sm">{ip}</code>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeIPAddress(index)}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Save Button */}
      <Card>
        <CardContent className="pt-6">
          <Button
            onClick={handleSave}
            disabled={isLoading}
            className="bg-[#123B79] hover:bg-[#425DA0]"
          >
            <Save className="mr-2 h-4 w-4" />
            {isLoading ? "Saving..." : "Save Security Policies"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
