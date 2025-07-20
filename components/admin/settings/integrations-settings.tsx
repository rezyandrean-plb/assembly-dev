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
    <div className="space-y-6" data-oid="k0pvkb-">
      <Card data-oid="c4d-yh-">
        <CardHeader data-oid="t85.2ir">
          <CardTitle className="flex items-center gap-2" data-oid="gt_jrkb">
            <Key className="h-5 w-5" data-oid="h3swxvl" />
            Integrations & API Keys
          </CardTitle>
          <CardDescription data-oid="k-cng3h">
            Configure third-party services and API integrations. These services
            power various platform features.
          </CardDescription>
        </CardHeader>
      </Card>

      <Alert data-oid="towgge1">
        <AlertTriangle className="h-4 w-4" data-oid="o8twe-o" />
        <AlertDescription data-oid="6:ran40">
          <strong data-oid="razm.1y">Security Notice:</strong> API keys and
          secrets are sensitive. Only authorized personnel should have access to
          this section.
        </AlertDescription>
      </Alert>

      {/* Email Service Integration */}
      <Card data-oid="sodoblz">
        <CardHeader data-oid="x29bbhb">
          <div className="flex items-center justify-between" data-oid="nif39hp">
            <div className="flex items-center gap-3" data-oid="3-7yd9s">
              <Mail className="h-5 w-5" data-oid="niedfm7" />
              <div data-oid="wzpd983">
                <CardTitle className="text-lg" data-oid="mk7-3xe">
                  Email Service
                </CardTitle>
                <CardDescription data-oid="pyzliei">
                  Configure email provider for sending automated emails
                </CardDescription>
              </div>
            </div>
            <div className="flex items-center gap-2" data-oid="pmpaey2">
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
                data-oid="l32qbw9"
              >
                {integrations.find((i) => i.id === "email")?.isConnected
                  ? "Connected"
                  : "Not Connected"}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4" data-oid="k_n1sp1">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            data-oid="tsd02f4"
          >
            <div className="space-y-2" data-oid="6ao:9q5">
              <Label htmlFor="email-provider" data-oid="og905v1">
                Email Provider
              </Label>
              <Select
                value={emailSettings.provider}
                onValueChange={(value) =>
                  setEmailSettings((prev) => ({ ...prev, provider: value }))
                }
                data-oid="z5zpby4"
              >
                <SelectTrigger data-oid=":3s2.p:">
                  <SelectValue
                    placeholder="Select provider"
                    data-oid="oolzq32"
                  />
                </SelectTrigger>
                <SelectContent data-oid="lu4hii7">
                  {emailProviders.map((provider) => (
                    <SelectItem
                      key={provider.value}
                      value={provider.value}
                      data-oid="remc3xc"
                    >
                      {provider.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2" data-oid="0lvk25c">
              <Label htmlFor="email-domain" data-oid="-_3-kxj">
                Domain
              </Label>
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
                data-oid="7outn.x"
              />
            </div>
          </div>

          <div className="space-y-2" data-oid="fl53634">
            <Label htmlFor="email-api-key" data-oid="4ym1ok-">
              API Key
            </Label>
            <div className="relative" data-oid="12f8xm:">
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
                data-oid="j1.qk-4"
              />

              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3"
                onClick={() => toggleSecretVisibility("emailApiKey")}
                data-oid="4rmv2la"
              >
                {showSecrets.emailApiKey ? (
                  <EyeOff className="h-4 w-4" data-oid="5ax:6zl" />
                ) : (
                  <Eye className="h-4 w-4" data-oid="gwhnkhm" />
                )}
              </Button>
            </div>
            <p className="text-xs text-gray-500" data-oid="_-hdgx8">
              Used to send all automated emails from the platform
            </p>
          </div>

          <div className="flex gap-2 pt-2" data-oid="vd2.msv">
            <Button
              variant="outline"
              onClick={() => testConnection("email")}
              disabled={isLoading}
              data-oid="7s3grry"
            >
              <Wifi className="mr-2 h-4 w-4" data-oid="5nmx7cf" />
              {isLoading ? "Testing..." : "Test Connection"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Analytics Integration */}
      <Card data-oid="cxl._-9">
        <CardHeader data-oid=".kqcxh7">
          <div className="flex items-center justify-between" data-oid="y.ydpn9">
            <div className="flex items-center gap-3" data-oid="hnf-qs0">
              <BarChart3 className="h-5 w-5" data-oid="cjich2c" />
              <div data-oid="cni_yi:">
                <CardTitle className="text-lg" data-oid="rrbihhp">
                  Analytics
                </CardTitle>
                <CardDescription data-oid="w_80yn4">
                  Configure analytics and tracking services
                </CardDescription>
              </div>
            </div>
            <div className="flex items-center gap-2" data-oid="uc6h.bc">
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
                data-oid=":g7hec-"
              >
                {integrations.find((i) => i.id === "analytics")?.isConnected
                  ? "Connected"
                  : "Not Connected"}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4" data-oid="78:vb9l">
          <div className="space-y-2" data-oid="_-w_ufh">
            <Label htmlFor="ga-id" data-oid="big7__r">
              Google Analytics ID
            </Label>
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
              data-oid="s:9dcok"
            />

            <p className="text-xs text-gray-500" data-oid="-.axlhc">
              Used to track user behavior and validate KPIs in the admin
              dashboard
            </p>
          </div>

          <Separator data-oid="dzzbfz7" />

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            data-oid="pjzhvvg"
          >
            <div className="space-y-2" data-oid="n7i5o89">
              <Label htmlFor="fb-pixel" data-oid="2a3x01e">
                Facebook Pixel ID (Optional)
              </Label>
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
                data-oid="wkchaas"
              />
            </div>

            <div className="space-y-2" data-oid="21jtrp1">
              <Label htmlFor="hotjar-id" data-oid="xfd:fj4">
                Hotjar Site ID (Optional)
              </Label>
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
                data-oid="sapmopg"
              />
            </div>
          </div>

          <div className="flex gap-2 pt-2" data-oid="jwwpqwd">
            <Button
              variant="outline"
              onClick={() => testConnection("analytics")}
              disabled={isLoading}
              data-oid="o:k2jvq"
            >
              <Wifi className="mr-2 h-4 w-4" data-oid="unr:5l2" />
              {isLoading ? "Testing..." : "Test Connection"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Save All Button */}
      <Card data-oid="q.h51w-">
        <CardContent className="pt-6" data-oid="2hvfudx">
          <Button
            onClick={handleSave}
            disabled={isLoading}
            className="bg-[#123B79] hover:bg-[#425DA0]"
            data-oid="u2i:zft"
          >
            <Save className="mr-2 h-4 w-4" data-oid="g6aui5n" />
            {isLoading ? "Saving..." : "Save All Integrations"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
