"use client";

import { cn } from "@/lib/utils";
import { Shield, FileText, Users, Settings, Key } from "lucide-react";

export type SecuritySection =
  | "dashboard"
  | "audit-log"
  | "access-control"
  | "security-policies"
  | "api-keys";

interface SecurityNavigationProps {
  activeSection: SecuritySection;
  onSectionChange: (section: SecuritySection) => void;
}

const navigationItems = [
  {
    id: "dashboard" as const,
    label: "Dashboard",
    icon: Shield,
    description: "Security overview and status",
  },
  {
    id: "audit-log" as const,
    label: "Audit Log",
    icon: FileText,
    description: "Track all admin actions",
  },
  {
    id: "access-control" as const,
    label: "Access Control",
    icon: Users,
    description: "Manage admin roles and permissions",
  },
  {
    id: "security-policies" as const,
    label: "Security Policies",
    icon: Settings,
    description: "Configure security rules",
  },
  {
    id: "api-keys" as const,
    label: "API Keys",
    icon: Key,
    description: "Manage third-party integrations",
  },
];

export function SecurityNavigation({
  activeSection,
  onSectionChange,
}: SecurityNavigationProps) {
  return (
    <nav className="space-y-2">
      <div className="pb-2">
        <h2 className="text-lg font-semibold text-[#123B79] mb-1">
          Security Center
        </h2>
        <p className="text-sm text-gray-600">
          Manage platform security settings
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
          >
            <div className="flex items-start gap-3">
              <Icon
                className={cn(
                  "h-5 w-5 mt-0.5 flex-shrink-0",
                  isActive ? "text-[#123B79]" : "text-gray-400",
                )}
              />

              <div className="min-w-0 flex-1">
                <div
                  className={cn(
                    "font-medium text-sm",
                    isActive ? "text-[#123B79]" : "text-gray-900",
                  )}
                >
                  {item.label}
                </div>
                <div className="text-xs text-gray-500 mt-1 leading-tight">
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
