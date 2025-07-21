"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Save, X } from "lucide-react";
import React from "react";

interface Product {
  id: number;
  title: string;
  sku: string;
  price: number;
  salePrice: number | null;
  status: "Published" | "Draft" | "Archived";
  stock: string;
  stockQuantity: number;
  type: string;
  virtual: boolean;
  downloadable: boolean;
}

interface QuickEditModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (productData: Partial<Product>) => void;
}

export const QuickEditModal = ({ product, isOpen, onClose, onSave }: QuickEditModalProps) => {
  const [formData, setFormData] = useState<Partial<Product>>({});

  // Initialize form data when product changes
  React.useEffect(() => {
    if (product) {
      setFormData({
        title: product.title,
        sku: product.sku,
        price: product.price,
        salePrice: product.salePrice,
        status: product.status,
        stockQuantity: product.stockQuantity,
        virtual: product.virtual,
        downloadable: product.downloadable,
      });
    }
  }, [product]);

  const handleSave = () => {
    if (product) {
      onSave({ ...formData, id: product.id });
      onClose();
    }
  };

  const handleCancel = () => {
    setFormData({});
    onClose();
  };

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            Quick Edit Product
            <Badge variant="outline" className="text-xs">
              {product.type}
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4 py-4">
          {/* Product Title */}
          <div className="col-span-2">
            <Label htmlFor="title">Product Name</Label>
            <Input
              id="title"
              value={formData.title || ""}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>

          {/* SKU */}
          <div>
            <Label htmlFor="sku">SKU</Label>
            <Input
              id="sku"
              value={formData.sku || ""}
              onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
            />
          </div>

          {/* Status */}
          <div>
            <Label htmlFor="status">Status</Label>
            <Select
              value={formData.status}
              onValueChange={(value: "Published" | "Draft" | "Archived") =>
                setFormData({ ...formData, status: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Published">Published</SelectItem>
                <SelectItem value="Draft">Draft</SelectItem>
                <SelectItem value="Archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Regular Price */}
          <div>
            <Label htmlFor="price">Regular Price ($)</Label>
            <Input
              id="price"
              type="number"
              step="0.01"
              value={formData.price || ""}
              onChange={(e) =>
                setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })
              }
            />
          </div>

          {/* Sale Price */}
          <div>
            <Label htmlFor="sale-price">Sale Price ($)</Label>
            <Input
              id="sale-price"
              type="number"
              step="0.01"
              placeholder="Leave empty for no sale"
              value={formData.salePrice || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  salePrice: e.target.value ? parseFloat(e.target.value) : null,
                })
              }
            />
          </div>

          {/* Stock Quantity */}
          {!formData.virtual && (
            <div>
              <Label htmlFor="stock-quantity">Stock Quantity</Label>
              <Input
                id="stock-quantity"
                type="number"
                value={formData.stockQuantity || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    stockQuantity: parseInt(e.target.value) || 0,
                  })
                }
              />
            </div>
          )}

          {/* Product Options */}
          <div className="col-span-2 space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="virtual"
                checked={formData.virtual || false}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, virtual: checked as boolean })
                }
              />
              <Label htmlFor="virtual" className="text-sm">Virtual product</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="downloadable"
                checked={formData.downloadable || false}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, downloadable: checked as boolean })
                }
              />
              <Label htmlFor="downloadable" className="text-sm">Downloadable</Label>
            </div>
          </div>
        </div>

        <DialogFooter className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            ID: {product.id} | Last updated: Just now
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={handleCancel}>
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            <Button onClick={handleSave} className="bg-[#123B79] hover:bg-[#425DA0]">
              <Save className="h-4 w-4 mr-2" />
              Update
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}; 