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
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Edit, Save, Eye, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  body: string;
  description: string;
  placeholders: string[];
}

const availablePlaceholders = [
  { key: "{{customer_name}}", description: "Customer's full name" },
  { key: "{{customer_email}}", description: "Customer's email address" },
  { key: "{{order_id}}", description: "Order reference number" },
  { key: "{{order_total}}", description: "Total order amount" },
  { key: "{{order_items}}", description: "List of ordered items" },
  { key: "{{tracking_number}}", description: "Shipping tracking number" },
  { key: "{{site_name}}", description: "Your site name" },
  { key: "{{support_email}}", description: "Support contact email" },
  { key: "{{reset_link}}", description: "Password reset link" },
  { key: "{{login_link}}", description: "Login page link" },
];

export function EmailTemplates() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [editingTemplate, setEditingTemplate] = useState<EmailTemplate | null>(
    null,
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showPlaceholders, setShowPlaceholders] = useState(false);

  const [templates, setTemplates] = useState<EmailTemplate[]>([
    {
      id: "welcome",
      name: "New User Welcome",
      subject: "Welcome to {{site_name}}!",
      body: `Hi {{customer_name}},

Welcome to {{site_name}}! We're excited to have you join our learning community.

Your account has been successfully created with the email: {{customer_email}}

You can now:
- Browse our course catalog
- Enroll in courses
- Track your learning progress
- Connect with other learners

If you have any questions, feel free to reach out to us at {{support_email}}.

Happy learning!
The {{site_name}} Team`,
      description: "Sent when a new user creates an account",
      placeholders: [
        "{{customer_name}}",
        "{{customer_email}}",
        "{{site_name}}",
        "{{support_email}}",
      ],
    },
    {
      id: "password_reset",
      name: "Password Reset",
      subject: "Reset your {{site_name}} password",
      body: `Hi {{customer_name}},

We received a request to reset your password for your {{site_name}} account.

Click the link below to reset your password:
{{reset_link}}

If you didn't request this password reset, please ignore this email or contact us at {{support_email}}.

This link will expire in 24 hours for security reasons.

Best regards,
The {{site_name}} Team`,
      description: "Sent when a user requests a password reset",
      placeholders: [
        "{{customer_name}}",
        "{{site_name}}",
        "{{reset_link}}",
        "{{support_email}}",
      ],
    },
    {
      id: "order_confirmation",
      name: "Order Confirmation",
      subject: "Order Confirmation - {{order_id}}",
      body: `Hi {{customer_name}},

Thank you for your order! We've received your payment and are processing your order.

Order Details:
Order ID: {{order_id}}
Total: {{order_total}}

Items Ordered:
{{order_items}}

We'll send you another email when your order ships.

If you have any questions about your order, please contact us at {{support_email}}.

Thank you for choosing {{site_name}}!

Best regards,
The {{site_name}} Team`,
      description: "Sent after a successful purchase",
      placeholders: [
        "{{customer_name}}",
        "{{order_id}}",
        "{{order_total}}",
        "{{order_items}}",
        "{{site_name}}",
        "{{support_email}}",
      ],
    },
    {
      id: "order_shipped",
      name: "Order Shipped",
      subject: "Your order {{order_id}} has been shipped!",
      body: `Hi {{customer_name}},

Great news! Your order {{order_id}} has been shipped and is on its way to you.

Tracking Information:
Tracking Number: {{tracking_number}}

You can track your package using the tracking number above.

Order Details:
{{order_items}}
Total: {{order_total}}

If you have any questions, please contact us at {{support_email}}.

Thank you for your business!

Best regards,
The {{site_name}} Team`,
      description: "Sent when an order status is changed to 'Shipped'",
      placeholders: [
        "{{customer_name}}",
        "{{order_id}}",
        "{{tracking_number}}",
        "{{order_items}}",
        "{{order_total}}",
        "{{site_name}}",
        "{{support_email}}",
      ],
    },
    {
      id: "order_status_update",
      name: "Order Status Update",
      subject: "Update on your order {{order_id}}",
      body: `Hi {{customer_name}},

We wanted to update you on the status of your order {{order_id}}.

Your order is currently being processed and we'll notify you as soon as it ships.

Order Details:
{{order_items}}
Total: {{order_total}}

If you have any questions, please don't hesitate to contact us at {{support_email}}.

Thank you for your patience!

Best regards,
The {{site_name}} Team`,
      description: "General template for other order status changes",
      placeholders: [
        "{{customer_name}}",
        "{{order_id}}",
        "{{order_items}}",
        "{{order_total}}",
        "{{site_name}}",
        "{{support_email}}",
      ],
    },
  ]);

  const handleEditTemplate = (template: EmailTemplate) => {
    setEditingTemplate({ ...template });
    setIsDialogOpen(true);
  };

  const handleSaveTemplate = () => {
    if (!editingTemplate) return;

    if (!editingTemplate.subject.trim() || !editingTemplate.body.trim()) {
      toast({
        title: "Validation error",
        description: "Subject and body are required.",
        variant: "destructive",
      });
      return;
    }

    setTemplates((prev) =>
      prev.map((t) => (t.id === editingTemplate.id ? editingTemplate : t)),
    );

    setIsDialogOpen(false);
    setEditingTemplate(null);

    toast({
      title: "Template saved",
      description: `${editingTemplate.name} has been updated successfully.`,
    });
  };

  const copyPlaceholder = (placeholder: string) => {
    navigator.clipboard.writeText(placeholder);
    toast({
      title: "Copied",
      description: `${placeholder} copied to clipboard.`,
    });
  };

  const handleSaveAll = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Templates saved",
        description: "All email templates have been saved successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save templates. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Email Template Management
          </CardTitle>
          <CardDescription>
            Customize automated email templates sent to users. Use placeholders
            to insert dynamic content.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <Collapsible
            open={showPlaceholders}
            onOpenChange={setShowPlaceholders}
          >
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                Available Placeholders
                <Eye className="h-4 w-4" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {availablePlaceholders.map((placeholder) => (
                  <div
                    key={placeholder.key}
                    className="flex items-center justify-between p-2 border rounded-lg"
                  >
                    <div>
                      <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                        {placeholder.key}
                      </code>
                      <p className="text-xs text-gray-500 mt-1">
                        {placeholder.description}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyPlaceholder(placeholder.key)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </CardHeader>
      </Card>

      <div className="space-y-4">
        {templates.map((template) => (
          <Card key={template.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </div>
                <Button
                  variant="outline"
                  onClick={() => handleEditTemplate(template)}
                >
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <Label className="text-sm font-medium">Subject:</Label>
                  <p className="text-sm text-gray-600 mt-1">
                    {template.subject}
                  </p>
                </div>
                <div>
                  <Label className="text-sm font-medium">
                    Placeholders used:
                  </Label>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {template.placeholders.map((placeholder) => (
                      <Badge
                        key={placeholder}
                        variant="secondary"
                        className="text-xs bg-gray-600 text-white"
                      >
                        {placeholder}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardContent className="pt-6">
          <Button
            onClick={handleSaveAll}
            disabled={isLoading}
            className="bg-[#123B79] hover:bg-[#425DA0]"
          >
            <Save className="mr-2 h-4 w-4" />
            {isLoading ? "Saving..." : "Save All Templates"}
          </Button>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Email Template</DialogTitle>
            <DialogDescription>
              Customize the email template content. Use placeholders for dynamic
              content.
            </DialogDescription>
          </DialogHeader>

          {editingTemplate && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="template-subject">Subject Line</Label>
                <Input
                  id="template-subject"
                  value={editingTemplate.subject}
                  onChange={(e) =>
                    setEditingTemplate((prev) =>
                      prev ? { ...prev, subject: e.target.value } : null,
                    )
                  }
                  placeholder="Email subject line"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="template-body">Email Body</Label>
                <Textarea
                  id="template-body"
                  value={editingTemplate.body}
                  onChange={(e) =>
                    setEditingTemplate((prev) =>
                      prev ? { ...prev, body: e.target.value } : null,
                    )
                  }
                  placeholder="Email content..."
                  rows={15}
                  className="font-mono text-sm"
                />

                <p className="text-xs text-gray-500">
                  Use placeholders like {{ customer_name }} for dynamic content
                </p>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleSaveTemplate}
              className="bg-[#123B79] hover:bg-[#425DA0]"
            >
              Save Template
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
