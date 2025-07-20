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
import { SettingsNavigation } from "@/components/admin/settings/settings-navigation";
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

  const renderActiveSection = () => {
    switch (activeSection) {
      case "general":
        return <GeneralSettings data-oid="p7sumpu" />;
      case "payment-gateways":
        return <PaymentGateways data-oid="yva0_xs" />;
      case "shipping":
        return <ShippingSettings data-oid="8qmsgxh" />;
      case "email-templates":
        return <EmailTemplates data-oid="4egg:n." />;
      case "integrations":
        return <IntegrationsSettings data-oid="l4j.yf:" />;
      default:
        return <GeneralSettings data-oid="g-0vqm0" />;
    }
  };

  return (
    <div className="space-y-6" data-oid="z6ls.29">
      <div className="flex items-center justify-between" data-oid="rbqqm.x">
        <div data-oid="qe1dz5j">
          <h1 className="text-3xl font-bold text-[#123B79]" data-oid="8.wimb7">
            Settings
          </h1>
          <p className="text-gray-600 mt-1" data-oid="gncbb52">
            Manage platform configuration and preferences
          </p>
        </div>
        <Button
          onClick={handleSaveAll}
          disabled={isLoading}
          className="bg-[#123B79] hover:bg-[#425DA0]"
          data-oid="eklgz2n"
        >
          <Save className="mr-2 h-4 w-4" data-oid="wrlhqsk" />
          {isLoading ? "Saving..." : "Save All Changes"}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6" data-oid="y98w05b">
        {/* Settings Navigation */}
        <div className="lg:col-span-1" data-oid="vykq8ep">
          <SettingsNavigation
            activeSection={activeSection}
            onSectionChange={setActiveSection}
            data-oid="p3fbg1d"
          />
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3" data-oid="nneid-2">
          {renderActiveSection()}
        </div>
      </div>
    </div>
  );
}
