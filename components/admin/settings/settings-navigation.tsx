"use client";

import { cn } from "@/lib/utils";
import { Globe, CreditCard, Truck, Mail, Settings, Key } from "lucide-react";
import type { SettingsSection } from "@/app/admin/settings/page";

interface SettingsNavigationProps {
  activeSection: SettingsSection;
  onSectionChange: (section: SettingsSection) => void;
}

const navigationItems = [
  {
    id: "general" as const,
    label: "General",
    icon: Globe,
    description: "Site identity, contact info, and localization",
  },
  {
    id: "shipping" as const,
    label: "Shipping & Delivery",
    icon: Truck,
    description: "Shipping zones, methods, and costs",
  },
  {
    id: "email-templates" as const,
    label: "Email Templates",
    icon: Mail,
    description: "Customize automated email content",
  },
  {
    id: "payment-gateways" as const,
    label: "Payment Gateways",
    icon: CreditCard,
    description: "Configure payment providers",
  },
  {
    id: "integrations" as const,
    label: "Integrations & API Keys",
    icon: Key,
    description: "Third-party service configurations",
  },
];

export function SettingsNavigation({
  activeSection,
  onSectionChange,
}: SettingsNavigationProps) {
  return (
    <nav className="space-y-2" data-oid="qt0if:z">
      <div className="pb-2" data-oid="gbhwqls">
        <h2
          className="text-lg font-semibold text-[#123B79] mb-1"
          data-oid="v5io7nc"
        >
          Settings Categories
        </h2>
        <p className="text-sm text-gray-600" data-oid="iby-hux">
          Configure platform settings
        </p>
      </div>

      {navigationItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;

        return (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={cn(
              "w-full text-left p-3 rounded-lg border transition-all duration-200",
              "hover:border-[#123B79] hover:bg-[#E8EFFF]",
              isActive
                ? "border-[#123B79] bg-[#E8EFFF] shadow-sm"
                : "border-gray-200 bg-white",
            )}
            data-oid="0zw8rxc"
          >
            <div className="flex items-start gap-3" data-oid=".qjjgpo">
              <Icon
                className={cn(
                  "h-5 w-5 mt-0.5 flex-shrink-0",
                  isActive ? "text-[#123B79]" : "text-gray-400",
                )}
                data-oid="fwa8lco"
              />

              <div className="min-w-0 flex-1" data-oid="n3kwh:k">
                <div
                  className={cn(
                    "font-medium text-sm",
                    isActive ? "text-[#123B79]" : "text-gray-900",
                  )}
                  data-oid="-pn6bp3"
                >
                  {item.label}
                </div>
                <div
                  className="text-xs text-gray-500 mt-1 leading-tight"
                  data-oid="en.1v0r"
                >
                  {item.description}
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </nav>
  );
}
