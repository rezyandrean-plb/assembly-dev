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
import { Truck, Plus, Edit, Trash2, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ShippingMethod {
  id: string;
  name: string;
  cost: number;
  freeShippingThreshold?: number;
  enabled: boolean;
}

export function ShippingSettings() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [editingMethod, setEditingMethod] = useState<ShippingMethod | null>(
    null,
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [methods, setMethods] = useState<ShippingMethod[]>([
    {
      id: "standard",
      name: "Standard Shipping",
      cost: 5.0,
      freeShippingThreshold: 50,
      enabled: true,
    },
    {
      id: "express",
      name: "Express Delivery",
      cost: 15.0,
      enabled: true,
    },
    {
      id: "pickup",
      name: "Store Pickup",
      cost: 0,
      enabled: true,
    },
  ]);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Shipping settings saved",
        description: "All shipping methods have been updated successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save shipping settings. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddMethod = () => {
    setEditingMethod({
      id: "",
      name: "",
      cost: 0,
      enabled: true,
    });
    setIsDialogOpen(true);
  };

  const handleEditMethod = (method: ShippingMethod) => {
    setEditingMethod({ ...method });
    setIsDialogOpen(true);
  };

  const handleDeleteMethod = (methodId: string) => {
    setMethods((prev) => prev.filter((m) => m.id !== methodId));
    toast({
      title: "Method deleted",
      description: "Shipping method has been removed.",
    });
  };

  const handleSaveMethod = () => {
    if (!editingMethod) return;

    if (!editingMethod.name.trim()) {
      toast({
        title: "Validation error",
        description: "Method name is required.",
        variant: "destructive",
      });
      return;
    }

    if (editingMethod.cost < 0) {
      toast({
        title: "Validation error",
        description: "Shipping cost cannot be negative.",
        variant: "destructive",
      });
      return;
    }

    if (editingMethod.id) {
      // Update existing method
      setMethods((prev) =>
        prev.map((m) => (m.id === editingMethod.id ? editingMethod : m)),
      );
    } else {
      // Add new method
      const newMethod = {
        ...editingMethod,
        id: Date.now().toString(),
      };
      setMethods((prev) => [...prev, newMethod]);
    }

    setIsDialogOpen(false);
    setEditingMethod(null);

    toast({
      title: "Method saved",
      description: `${editingMethod.name} has been ${editingMethod.id ? "updated" : "added"}.`,
    });
  };

  const updateMethod = (methodId: string, updates: Partial<ShippingMethod>) => {
    setMethods((prev) =>
      prev.map((m) => (m.id === methodId ? { ...m, ...updates } : m)),
    );
  };

  return (
    <div className="space-y-6" data-oid="w:hj8:k">
      <Card data-oid="m:xfq84">
        <CardHeader data-oid="rq5n2sz">
          <div className="flex items-center justify-between" data-oid="m2hb29v">
            <div data-oid="n-h5f-z">
              <CardTitle className="flex items-center gap-2" data-oid="g:70_kw">
                <Truck className="h-5 w-5" data-oid="oq9o0y3" />
                Shipping & Delivery Configuration
              </CardTitle>
              <CardDescription data-oid="uw28zwd">
                Define shipping methods and costs. These options will be
                available during customer checkout.
              </CardDescription>
            </div>
            <Button
              onClick={handleAddMethod}
              className="bg-[#123B79] hover:bg-[#425DA0]"
              data-oid="i:ji6h6"
            >
              <Plus className="mr-2 h-4 w-4" data-oid="3:_m7g_" />
              Add Method
            </Button>
          </div>
        </CardHeader>
      </Card>

      <div className="space-y-4" data-oid="q9ue.ni">
        {methods.map((method) => (
          <Card key={method.id} data-oid="6jpav8c">
            <CardContent className="pt-6" data-oid="8urdlb8">
              <div
                className="flex items-center justify-between"
                data-oid="mkcj1p3"
              >
                <div className="flex-1" data-oid="aj5lwo2">
                  <div
                    className="flex items-center gap-3 mb-2"
                    data-oid="vw-1rgo"
                  >
                    <h3 className="font-semibold text-lg" data-oid="5vkemud">
                      {method.name}
                    </h3>
                    <Badge
                      variant={method.enabled ? "default" : "secondary"}
                      className={
                        method.enabled
                          ? "bg-green-600 text-white"
                          : "bg-gray-500 text-white"
                      }
                      data-oid="b9b7asd"
                    >
                      {method.enabled ? "Active" : "Inactive"}
                    </Badge>
                  </div>

                  <div
                    className="space-y-2 text-sm text-gray-600"
                    data-oid=":yrtjv0"
                  >
                    <div data-oid="dqual5p">
                      <strong data-oid="h.23uxd">Cost:</strong> $
                      {method.cost.toFixed(2)}
                    </div>
                    {method.freeShippingThreshold && (
                      <div data-oid="zgp2.i2">
                        <strong data-oid="hoerm9f">Free shipping:</strong>{" "}
                        Orders over ${method.freeShippingThreshold.toFixed(2)}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2" data-oid="b:72l_2">
                  <Switch
                    checked={method.enabled}
                    onCheckedChange={(enabled) =>
                      updateMethod(method.id, { enabled })
                    }
                    data-oid="9x5y:fv"
                  />

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditMethod(method)}
                    data-oid="98ozdp7"
                  >
                    <Edit className="h-4 w-4" data-oid=":_v1.gu" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteMethod(method.id)}
                    className="text-red-600 hover:text-red-700"
                    data-oid="9.7_:fv"
                  >
                    <Trash2 className="h-4 w-4" data-oid="02km_rz" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card data-oid="i:hxsyc">
        <CardContent className="pt-6" data-oid="nk6rlsf">
          <Button
            onClick={handleSave}
            disabled={isLoading}
            className="bg-[#123B79] hover:bg-[#425DA0]"
            data-oid="glnxqdq"
          >
            <Save className="mr-2 h-4 w-4" data-oid="8ed2b8z" />
            {isLoading ? "Saving..." : "Save All Changes"}
          </Button>
        </CardContent>
      </Card>

      <Dialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        data-oid="w5kxf.s"
      >
        <DialogContent data-oid="15ctnjy">
          <DialogHeader data-oid="_itpvny">
            <DialogTitle data-oid="fkcr5av">
              {editingMethod?.id
                ? "Edit Shipping Method"
                : "Add New Shipping Method"}
            </DialogTitle>
            <DialogDescription data-oid="dtr17y.">
              Configure the shipping method details and pricing.
            </DialogDescription>
          </DialogHeader>

          {editingMethod && (
            <div className="space-y-4" data-oid="rbuy_lg">
              <div className="space-y-2" data-oid="etqka_j">
                <Label htmlFor="method-name" data-oid="76_vjky">
                  Method Name
                </Label>
                <Input
                  id="method-name"
                  value={editingMethod.name}
                  onChange={(e) =>
                    setEditingMethod((prev) =>
                      prev ? { ...prev, name: e.target.value } : null,
                    )
                  }
                  placeholder="e.g., Standard Shipping"
                  data-oid="4il0uoa"
                />
              </div>

              <div className="space-y-2" data-oid="pw89mbv">
                <Label htmlFor="method-cost" data-oid="v:b8o2-">
                  Shipping Cost ($)
                </Label>
                <Input
                  id="method-cost"
                  type="number"
                  min="0"
                  step="0.01"
                  value={editingMethod.cost}
                  onChange={(e) =>
                    setEditingMethod((prev) =>
                      prev
                        ? { ...prev, cost: parseFloat(e.target.value) || 0 }
                        : null,
                    )
                  }
                  placeholder="0.00"
                  data-oid="-uji_t0"
                />
              </div>

              <div className="space-y-2" data-oid="x_si43_">
                <Label htmlFor="free-threshold" data-oid="f73rd8r">
                  Free Shipping Threshold ($)
                </Label>
                <Input
                  id="free-threshold"
                  type="number"
                  min="0"
                  step="0.01"
                  value={editingMethod.freeShippingThreshold || ""}
                  onChange={(e) =>
                    setEditingMethod((prev) =>
                      prev
                        ? {
                            ...prev,
                            freeShippingThreshold: e.target.value
                              ? parseFloat(e.target.value)
                              : undefined,
                          }
                        : null,
                    )
                  }
                  placeholder="Optional - leave empty for no free shipping"
                  data-oid="kgv91bn"
                />

                <p className="text-xs text-gray-500" data-oid="y:ujnln">
                  Orders above this amount will have free shipping for this
                  method
                </p>
              </div>

              <div className="flex items-center space-x-2" data-oid="-a1mhou">
                <Switch
                  id="method-enabled"
                  checked={editingMethod.enabled}
                  onCheckedChange={(enabled) =>
                    setEditingMethod((prev) =>
                      prev ? { ...prev, enabled } : null,
                    )
                  }
                  data-oid="7g:4ye_"
                />

                <Label htmlFor="method-enabled" data-oid="99mpqwa">
                  Enable this shipping method
                </Label>
              </div>
            </div>
          )}

          <DialogFooter data-oid="mogunfe">
            <Button
              variant="outline"
              onClick={() => setIsDialogOpen(false)}
              data-oid="y-egd7w"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSaveMethod}
              className="bg-[#123B79] hover:bg-[#425DA0]"
              data-oid="xtawvye"
            >
              {editingMethod?.id ? "Update Method" : "Add Method"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
