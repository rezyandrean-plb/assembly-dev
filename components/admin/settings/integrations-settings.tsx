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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Key,
  Mail,
  BarChart3,
  Save,
  Eye,
  EyeOff,
  AlertTriangle,
  Wifi,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface Integration {
  id: string;
  name: string;
  description: string;
  isConfigured: boolean;
  isConnected: boolean;
}

export function IntegrationsSettings() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [showSecrets, setShowSecrets] = useState<Record<string, boolean>>({});

  const [emailSettings, setEmailSettings] = useState({
    provider: "mailgun",
    apiKey: "key-1234567890abcdef",
    domain: "mg.assembly.com",
  });

  const [analyticsSettings, setAnalyticsSettings] = useState({
    googleAnalyticsId: "G-XXXXXXXXXX",
    facebookPixelId: "",
    hotjarId: "",
  });

  const [integrations, setIntegrations] = useState<Integration[]>([
    {
      id: "email",
      name: "Email Service",
      description: "Send transactional and marketing emails",
      isConfigured: true,
      isConnected: true,
    },
    {
      id: "analytics",
      name: "Analytics",
      description: "Track user behavior and site performance",
      isConfigured: true,
      isConnected: true,
    },
  ]);

  const emailProviders = [
    { value: "mailgun", label: "Mailgun" },
    { value: "sendgrid", label: "SendGrid" },
    { value: "ses", label: "Amazon SES" },
    { value: "postmark", label: "Postmark" },
  ];

  const handleSave = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Integrations saved",
        description: "All integration settings have been updated successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save integration settings. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const testConnection = async (integrationId: string) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIntegrations((prev) =>
        prev.map((i) =>
          i.id === integrationId ? { ...i, isConnected: true } : i,
        ),
      );

      toast({
        title: "Connection successful",
        description: `${integrations.find((i) => i.id === integrationId)?.name} connection test passed.`,
      });
    } catch (error) {
      setIntegrations((prev) =>
        prev.map((i) =>
          i.id === integrationId ? { ...i, isConnected: false } : i,
        ),
      );

      toast({
        title: "Connection failed",
        description: "Please check your configuration and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleSecretVisibility = (field: string) => {
    setShowSecrets((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const maskKey = (key: string) => {
    if (!key) return "";
    if (key.length <= 8) return "*".repeat(key.length);
    return key.slice(0, 4) + "*".repeat(key.length - 8) + key.slice(-4);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Key className="h-5 w-5" />
            Integrations & API Keys
          </CardTitle>
          <CardDescription>
            Configure third-party services and API integrations. These services
            power various platform features.
          </CardDescription>
        </CardHeader>
      </Card>

      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          <strong>Security Notice:</strong> API keys and secrets are sensitive.
          Only authorized personnel should have access to this section.
        </AlertDescription>
      </Alert>

      {/* Email Service Integration */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5" />
              <div>
                <CardTitle className="text-lg">Email Service</CardTitle>
                <CardDescription>
                  Configure email provider for sending automated emails
                </CardDescription>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge
                variant={
                  integrations.find((i) => i.id === "email")?.isConnected
                    ? "default"
                    : "destructive"
                }
                className={
                  integrations.find((i) => i.id === "email")?.isConnected
                    ? "bg-green-600 text-white"
                    : "bg-red-600 text-white"
                }
              >
                {integrations.find((i) => i.id === "email")?.isConnected
                  ? "Connected"
                  : "Not Connected"}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email-provider">Email Provider</Label>
              <Select
                value={emailSettings.provider}
                onValueChange={(value) =>
                  setEmailSettings((prev) => ({ ...prev, provider: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select provider" />
                </SelectTrigger>
                <SelectContent>
                  {emailProviders.map((provider) => (
                    <SelectItem key={provider.value} value={provider.value}>
                      {provider.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email-domain">Domain</Label>
              <Input
                id="email-domain"
                value={emailSettings.domain}
                onChange={(e) =>
                  setEmailSettings((prev) => ({
                    ...prev,
                    domain: e.target.value,
                  }))
                }
                placeholder="mg.yourdomain.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email-api-key">API Key</Label>
            <div className="relative">
              <Input
                id="email-api-key"
                type={showSecrets.emailApiKey ? "text" : "password"}
                value={
                  showSecrets.emailApiKey
                    ? emailSettings.apiKey
                    : maskKey(emailSettings.apiKey)
                }
                onChange={(e) =>
                  setEmailSettings((prev) => ({
                    ...prev,
                    apiKey: e.target.value,
                  }))
                }
                placeholder="key-1234567890abcdef"
              />

              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3"
                onClick={() => toggleSecretVisibility("emailApiKey")}
              >
                {showSecrets.emailApiKey ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-gray-500">
              Used to send all automated emails from the platform
            </p>
          </div>

          <div className="flex gap-2 pt-2">
            <Button
              variant="outline"
              onClick={() => testConnection("email")}
              disabled={isLoading}
            >
              <Wifi className="mr-2 h-4 w-4" />
              {isLoading ? "Testing..." : "Test Connection"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Analytics Integration */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BarChart3 className="h-5 w-5" />
              <div>
                <CardTitle className="text-lg">Analytics</CardTitle>
                <CardDescription>
                  Configure analytics and tracking services
                </CardDescription>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge
                variant={
                  integrations.find((i) => i.id === "analytics")?.isConnected
                    ? "default"
                    : "destructive"
                }
                className={
                  integrations.find((i) => i.id === "analytics")?.isConnected
                    ? "bg-green-600 text-white"
                    : "bg-red-600 text-white"
                }
              >
                {integrations.find((i) => i.id === "analytics")?.isConnected
                  ? "Connected"
                  : "Not Connected"}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="ga-id">Google Analytics ID</Label>
            <Input
              id="ga-id"
              value={analyticsSettings.googleAnalyticsId}
              onChange={(e) =>
                setAnalyticsSettings((prev) => ({
                  ...prev,
                  googleAnalyticsId: e.target.value,
                }))
              }
              placeholder="G-XXXXXXXXXX"
            />

            <p className="text-xs text-gray-500">
              Used to track user behavior and validate KPIs in the admin
              dashboard
            </p>
          </div>

          <Separator />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fb-pixel">Facebook Pixel ID (Optional)</Label>
              <Input
                id="fb-pixel"
                value={analyticsSettings.facebookPixelId}
                onChange={(e) =>
                  setAnalyticsSettings((prev) => ({
                    ...prev,
                    facebookPixelId: e.target.value,
                  }))
                }
                placeholder="123456789012345"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="hotjar-id">Hotjar Site ID (Optional)</Label>
              <Input
                id="hotjar-id"
                value={analyticsSettings.hotjarId}
                onChange={(e) =>
                  setAnalyticsSettings((prev) => ({
                    ...prev,
                    hotjarId: e.target.value,
                  }))
                }
                placeholder="1234567"
              />
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <Button
              variant="outline"
              onClick={() => testConnection("analytics")}
              disabled={isLoading}
            >
              <Wifi className="mr-2 h-4 w-4" />
              {isLoading ? "Testing..." : "Test Connection"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Save All Button */}
      <Card>
        <CardContent className="pt-6">
          <Button
            onClick={handleSave}
            disabled={isLoading}
            className="bg-[#123B79] hover:bg-[#425DA0]"
          >
            <Save className="mr-2 h-4 w-4" />
            {isLoading ? "Saving..." : "Save All Integrations"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
