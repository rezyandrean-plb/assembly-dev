"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Save } from "lucide-react";
import { SecurityDashboard } from "@/components/admin/security/security-dashboard";
import { AuditLog } from "@/components/admin/security/audit-log";
import { AccessControl } from "@/components/admin/security/access-control";
import { SecurityPolicies } from "@/components/admin/security/security-policies";

export type SecuritySection =
  | "dashboard"
  | "audit-log"
  | "access-control"
  | "security-policies"
  | "api-keys";

export default function SecurityPage() {
  const [activeSection, setActiveSection] =
    useState<SecuritySection>("dashboard");
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
          <h1 className="text-3xl font-bold text-[#123B79]">Security Center</h1>
          <p className="text-gray-600 mt-1">
            Comprehensive security management and monitoring
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
        onValueChange={(value) => setActiveSection(value as SecuritySection)}
        className="mt-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <TabsList className="bg-white border border-gray-200">
            <TabsTrigger 
              value="dashboard"
              className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
            >
              Dashboard
            </TabsTrigger>
            <TabsTrigger 
              value="audit-log"
              className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
            >
              Audit Log
            </TabsTrigger>
            <TabsTrigger 
              value="access-control"
              className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
            >
              Access Control
            </TabsTrigger>
            <TabsTrigger 
              value="security-policies"
              className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
            >
              Security Policies
            </TabsTrigger>
            <TabsTrigger 
              value="api-keys"
              className="data-[state=active]:bg-[#123B79] data-[state=active]:text-white"
            >
              API Keys
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="dashboard" className="mt-4">
          <SecurityDashboard />
        </TabsContent>

        <TabsContent value="audit-log" className="mt-4">
          <AuditLog />
        </TabsContent>

        <TabsContent value="access-control" className="mt-4">
          <AccessControl />
        </TabsContent>

        <TabsContent value="security-policies" className="mt-4">
          <SecurityPolicies />
        </TabsContent>

        <TabsContent value="api-keys" className="mt-4">
          <div>API Keys management coming soon...</div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
