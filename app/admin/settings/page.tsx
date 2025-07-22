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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GeneralSettings } from "@/components/admin/settings/general-settings";
import { PaymentGateways } from "@/components/admin/settings/payment-gateways";
import { ShippingSettings } from "@/components/admin/settings/shipping-settings";
import { EmailTemplates } from "@/components/admin/settings/email-templates";
import { IntegrationsSettings } from "@/components/admin/settings/integrations-settings";
import { Save, Settings as SettingsIcon } from "lucide-react";

export type SettingsSection =
  | "general"
  | "payment-gateways"
  | "shipping"
  | "email-templates"
  | "integrations";

export default function SettingsPage() {
  const [activeSection, setActiveSection] =
    useState<SettingsSection>("general");
  const [isLoading, setIsLoading] = useState(false);

  const handleSaveAll = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Show success message
    } catch (error) {
      // Show error message
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#123B79]">Settings</h1>
          <p className="text-gray-600 mt-1">
            Manage platform configuration and preferences
          </p>
        </div>
        <Button
          onClick={handleSaveAll}
          disabled={isLoading}
          className="bg-[#123B79] hover:bg-[#425DA0]"
        >
          <Save className="mr-2 h-4 w-4" />
          {isLoading ? "Saving..." : "Save All Changes"}
        </Button>
      </div>

      <Tabs
        value={activeSection}
        onValueChange={(value) => setActiveSection(value as SettingsSection)}
        className="mt-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <TabsList className="bg-white border border-gray-200">
            <TabsTrigger
              value="general"
              className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
            >
              General
            </TabsTrigger>
            <TabsTrigger
              value="shipping"
              className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
            >
              Shipping & Delivery
            </TabsTrigger>
            <TabsTrigger
              value="email-templates"
              className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
            >
              Email Templates
            </TabsTrigger>
            <TabsTrigger
              value="payment-gateways"
              className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
            >
              Payment Gateways
            </TabsTrigger>
            <TabsTrigger
              value="integrations"
              className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
            >
              Integrations & API Keys
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="general" className="mt-4">
          <GeneralSettings />
        </TabsContent>

        <TabsContent value="shipping" className="mt-4">
          <ShippingSettings />
        </TabsContent>

        <TabsContent value="email-templates" className="mt-4">
          <EmailTemplates />
        </TabsContent>

        <TabsContent value="payment-gateways" className="mt-4">
          <PaymentGateways />
        </TabsContent>

        <TabsContent value="integrations" className="mt-4">
          <IntegrationsSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
}
