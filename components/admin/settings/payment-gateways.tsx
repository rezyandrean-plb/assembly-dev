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
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  CreditCard,
  Eye,
  EyeOff,
  Save,
  AlertTriangle,
  Wifi,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface PaymentGateway {
  id: string;
  name: string;
  displayName: string;
  enabled: boolean;
  publicKey: string;
  secretKey: string;
  isConnected: boolean;
}

export function PaymentGateways() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [showSecrets, setShowSecrets] = useState<Record<string, boolean>>({});
  const [gateways, setGateways] = useState<PaymentGateway[]>([
    {
      id: "stripe",
      name: "Stripe",
      displayName: "Pay with Credit Card",
      enabled: true,
      publicKey: "pk_test_51234567890abcdef",
      secretKey: "sk_test_51234567890abcdef",
      isConnected: true,
    },
    {
      id: "paypal",
      name: "PayPal",
      displayName: "Pay with PayPal",
      enabled: false,
      publicKey: "",
      secretKey: "",
      isConnected: false,
    },
  ]);

  const handleSave = async (gatewayId: string) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Gateway updated",
        description: `${gateways.find((g) => g.id === gatewayId)?.name} settings have been saved.`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save gateway settings. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const testConnection = async (gatewayId: string) => {
    const gateway = gateways.find((g) => g.id === gatewayId);
    if (!gateway?.publicKey || !gateway?.secretKey) {
      toast({
        title: "Missing credentials",
        description: "Please enter both public and secret keys before testing.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API test
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Update connection status
      setGateways((prev) =>
        prev.map((g) => (g.id === gatewayId ? { ...g, isConnected: true } : g)),
      );

      toast({
        title: "Connection successful",
        description: `${gateway.name} connection test passed.`,
      });
    } catch (error) {
      setGateways((prev) =>
        prev.map((g) =>
          g.id === gatewayId ? { ...g, isConnected: false } : g,
        ),
      );

      toast({
        title: "Connection failed",
        description: "Please check your API keys and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const updateGateway = (
    gatewayId: string,
    updates: Partial<PaymentGateway>,
  ) => {
    setGateways((prev) =>
      prev.map((g) => (g.id === gatewayId ? { ...g, ...updates } : g)),
    );
  };

  const toggleSecretVisibility = (gatewayId: string) => {
    setShowSecrets((prev) => ({
      ...prev,
      [gatewayId]: !prev[gatewayId],
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
            <CreditCard className="h-5 w-5" />
            Payment Gateways
          </CardTitle>
          <CardDescription>
            Configure payment providers for processing customer transactions. At
            least one gateway must be enabled for checkout to function.
          </CardDescription>
        </CardHeader>
      </Card>

      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          <strong>Security Notice:</strong> API keys are sensitive information.
          Only enter production keys in a secure environment. Test keys are safe
          for development.
        </AlertDescription>
      </Alert>

      {gateways.map((gateway) => (
        <Card key={gateway.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CardTitle className="text-lg">{gateway.name}</CardTitle>
                <Badge
                  variant={gateway.enabled ? "default" : "secondary"}
                  className={
                    gateway.enabled
                      ? "bg-green-600 text-white"
                      : "bg-gray-500 text-white"
                  }
                >
                  {gateway.enabled ? "Enabled" : "Disabled"}
                </Badge>
                <Badge
                  variant={gateway.isConnected ? "default" : "destructive"}
                  className={
                    gateway.isConnected
                      ? "bg-green-600 text-white"
                      : "bg-red-600 text-white"
                  }
                >
                  {gateway.isConnected ? "Connected" : "Not Connected"}
                </Badge>
              </div>
              <Switch
                checked={gateway.enabled}
                onCheckedChange={(enabled) =>
                  updateGateway(gateway.id, { enabled })
                }
              />
            </div>
            <CardDescription>
              Configure {gateway.name} payment processing
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor={`${gateway.id}-display-name`}>Display Name</Label>
              <Input
                id={`${gateway.id}-display-name`}
                value={gateway.displayName}
                onChange={(e) =>
                  updateGateway(gateway.id, { displayName: e.target.value })
                }
                placeholder="Name shown to customers at checkout"
              />

              <p className="text-xs text-gray-500">
                This is what customers see as a payment option
              </p>
            </div>

            <Separator />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor={`${gateway.id}-public-key`}>
                  Public API Key
                </Label>
                <Input
                  id={`${gateway.id}-public-key`}
                  value={gateway.publicKey}
                  onChange={(e) =>
                    updateGateway(gateway.id, { publicKey: e.target.value })
                  }
                  placeholder="pk_test_..."
                />

                <p className="text-xs text-gray-500">
                  Safe to expose in frontend code
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor={`${gateway.id}-secret-key`}>
                  Secret API Key
                </Label>
                <div className="relative">
                  <Input
                    id={`${gateway.id}-secret-key`}
                    type={showSecrets[gateway.id] ? "text" : "password"}
                    value={
                      showSecrets[gateway.id]
                        ? gateway.secretKey
                        : maskKey(gateway.secretKey)
                    }
                    onChange={(e) =>
                      updateGateway(gateway.id, { secretKey: e.target.value })
                    }
                    placeholder="sk_test_..."
                  />

                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3"
                    onClick={() => toggleSecretVisibility(gateway.id)}
                  >
                    {showSecrets[gateway.id] ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <p className="text-xs text-gray-500">
                  Keep this secret and secure
                </p>
              </div>
            </div>

            <div className="flex gap-2 pt-4">
              <Button
                onClick={() => handleSave(gateway.id)}
                disabled={isLoading}
                className="bg-[#123B79] hover:bg-[#425DA0]"
              >
                <Save className="mr-2 h-4 w-4" />
                {isLoading ? "Saving..." : "Save"}
              </Button>

              <Button
                variant="outline"
                onClick={() => testConnection(gateway.id)}
                disabled={isLoading || !gateway.publicKey || !gateway.secretKey}
              >
                <Wifi className="mr-2 h-4 w-4" />
                {isLoading ? "Testing..." : "Test Connection"}
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
