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
import { Save, Upload, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const currencies = [
  { code: "USD", name: "US Dollar", symbol: "$" },
  { code: "EUR", name: "Euro", symbol: "€" },
  { code: "SGD", name: "Singapore Dollar", symbol: "S$" },
  { code: "GBP", name: "British Pound", symbol: "£" },
  { code: "JPY", name: "Japanese Yen", symbol: "¥" },
];

export function GeneralSettings() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [settings, setSettings] = useState({
    siteName: "Assembly Learning Platform",
    contactEmail: "contact@assembly.com",
    currency: "SGD",
    logo: null as File | null,
  });

  const handleSave = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Settings saved",
        description: "General settings have been updated successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save settings. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        // 2MB limit
        toast({
          title: "File too large",
          description: "Logo file must be smaller than 2MB.",
          variant: "destructive",
        });
        return;
      }

      if (!file.type.match(/^image\/(jpeg|jpg|png|svg\+xml)$/)) {
        toast({
          title: "Invalid file type",
          description: "Logo must be a JPG, PNG, or SVG file.",
          variant: "destructive",
        });
        return;
      }

      setSettings((prev) => ({ ...prev, logo: file }));
    }
  };

  return (
    <div className="space-y-6">
      {/* Site Identity Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Site Identity
          </CardTitle>
          <CardDescription>Basic site information and branding</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="site-name">Site Name</Label>
              <Input
                id="site-name"
                value={settings.siteName}
                onChange={(e) =>
                  setSettings((prev) => ({ ...prev, siteName: e.target.value }))
                }
                placeholder="Enter site name"
              />
              <p className="text-xs text-gray-500">
                Used in browser titles and email templates
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-email">Public Contact Email</Label>
              <Input
                id="contact-email"
                type="email"
                value={settings.contactEmail}
                onChange={(e) =>
                  setSettings((prev) => ({
                    ...prev,
                    contactEmail: e.target.value,
                  }))
                }
                placeholder="contact@yoursite.com"
              />
              <p className="text-xs text-gray-500">
                Displayed on contact forms and support pages
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="logo-upload">Site Logo</Label>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <Input
                  id="logo-upload"
                  type="file"
                  accept=".jpg,.jpeg,.png,.svg"
                  onChange={handleLogoUpload}
                  className="cursor-pointer"
                />
              </div>
              <Button variant="outline" size="sm">
                <Upload className="h-4 w-4 mr-2" />
                Upload
              </Button>
            </div>
            <p className="text-xs text-gray-500">
              Accepts JPG, PNG, SVG files up to 2MB. Appears in site header and
              emails.
            </p>
            {settings.logo && (
              <div className="text-sm text-green-600">
                Selected: {settings.logo.name}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Localization Card */}
      <Card>
        <CardHeader>
          <CardTitle>Localization & Display</CardTitle>
          <CardDescription>
            Currency, language, and regional settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="currency">Store Currency</Label>
              <Select
                value={settings.currency}
                onValueChange={(value) =>
                  setSettings((prev) => ({ ...prev, currency: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((currency) => (
                    <SelectItem key={currency.code} value={currency.code}>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm">
                          {currency.symbol}
                        </span>
                        <span>
                          {currency.name} ({currency.code})
                        </span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-gray-500">
                Affects product pricing display and order processing
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="timezone">Default Timezone</Label>
              <Select defaultValue="Asia/Singapore">
                <SelectTrigger>
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Asia/Singapore">
                    Asia/Singapore (SGT)
                  </SelectItem>
                  <SelectItem value="Asia/Kuala_Lumpur">
                    Asia/Kuala_Lumpur (MYT)
                  </SelectItem>
                  <SelectItem value="Asia/Bangkok">
                    Asia/Bangkok (ICT)
                  </SelectItem>
                  <SelectItem value="UTC">UTC</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-gray-500">
                Used for displaying dates and scheduling
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="language">Default Language</Label>
            <Select defaultValue="en">
              <SelectTrigger className="md:w-1/2">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="zh">中文 (Chinese)</SelectItem>
                <SelectItem value="ms">Bahasa Malaysia</SelectItem>
                <SelectItem value="th">ไทย (Thai)</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-gray-500">
              Default language for the platform interface
            </p>
          </div>
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
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
