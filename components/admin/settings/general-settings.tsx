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
    <Card data-oid="cppz3sg">
      <CardHeader data-oid="_hj6d_6">
        <CardTitle className="flex items-center gap-2" data-oid="o_b_6e8">
          <Globe className="h-5 w-5" data-oid="3rp0yyx" />
          General Settings
        </CardTitle>
        <CardDescription data-oid="4znj6g7">
          Configure basic site information and global settings that affect the
          entire platform.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6" data-oid="pv0g.oe">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          data-oid="vy3ad44"
        >
          <div className="space-y-2" data-oid="oxv7m22">
            <Label htmlFor="site-name" data-oid="58sk:k8">
              Site Name
            </Label>
            <Input
              id="site-name"
              value={settings.siteName}
              onChange={(e) =>
                setSettings((prev) => ({ ...prev, siteName: e.target.value }))
              }
              placeholder="Enter site name"
              data-oid="h3rpsxp"
            />

            <p className="text-xs text-gray-500" data-oid="g1:k0i5">
              Used in browser titles and email templates
            </p>
          </div>

          <div className="space-y-2" data-oid="n0jw02e">
            <Label htmlFor="contact-email" data-oid="djr-7jv">
              Public Contact Email
            </Label>
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
              data-oid="s2a4wi4"
            />

            <p className="text-xs text-gray-500" data-oid="fg:jsfh">
              Displayed on contact forms and support pages
            </p>
          </div>
        </div>

        <div className="space-y-2" data-oid="ahf99sl">
          <Label htmlFor="logo-upload" data-oid="2_oia3b">
            Site Logo
          </Label>
          <div className="flex items-center gap-4" data-oid="54y:i2i">
            <div className="flex-1" data-oid="1jf9ov:">
              <Input
                id="logo-upload"
                type="file"
                accept=".jpg,.jpeg,.png,.svg"
                onChange={handleLogoUpload}
                className="cursor-pointer"
                data-oid="f9hwm_w"
              />
            </div>
            <Button variant="outline" size="sm" data-oid="4:ckktb">
              <Upload className="h-4 w-4 mr-2" data-oid="o_vqo8s" />
              Upload
            </Button>
          </div>
          <p className="text-xs text-gray-500" data-oid="ua_ya44">
            Accepts JPG, PNG, SVG files up to 2MB. Appears in site header and
            emails.
          </p>
          {settings.logo && (
            <div className="text-sm text-green-600" data-oid="jlxcec:">
              Selected: {settings.logo.name}
            </div>
          )}
        </div>

        <div className="space-y-2" data-oid="u70et_f">
          <Label htmlFor="currency" data-oid="-bjid7r">
            Store Currency
          </Label>
          <Select
            value={settings.currency}
            onValueChange={(value) =>
              setSettings((prev) => ({ ...prev, currency: value }))
            }
            data-oid="9mserkn"
          >
            <SelectTrigger data-oid="q:xpm4v">
              <SelectValue placeholder="Select currency" data-oid="8v9gh.g" />
            </SelectTrigger>
            <SelectContent data-oid="tl078da">
              {currencies.map((currency) => (
                <SelectItem
                  key={currency.code}
                  value={currency.code}
                  data-oid="2nwhdba"
                >
                  <div className="flex items-center gap-2" data-oid="p59:wbj">
                    <span className="font-mono text-sm" data-oid="5m2oe6n">
                      {currency.symbol}
                    </span>
                    <span data-oid="1dwe5u5">
                      {currency.name} ({currency.code})
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-xs text-gray-500" data-oid="_xln8d8">
            Affects product pricing display and order processing
          </p>
        </div>

        <div className="pt-4 border-t" data-oid="hs0:tp7">
          <Button
            onClick={handleSave}
            disabled={isLoading}
            className="bg-[#123B79] hover:bg-[#425DA0]"
            data-oid="yb.7xw1"
          >
            <Save className="mr-2 h-4 w-4" data-oid="r5ab.ko" />
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
