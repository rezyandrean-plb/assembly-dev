"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

// Define the shape of a cart item
export interface CartItem {
  id: number | string;
  title: string;
  slug: string;
  price: string;
  image: string;
  instructor: string;
  quantity: number;
  type?: "Course" | "Book";
}

// Define the context value type
interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: number | string) => void;
  updateQuantity: (id: number | string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart) as CartItem[];
        const uniqueItems: { [id: string]: CartItem } = {};

        parsedCart.forEach((item) => {
          if (!item || typeof item.id === "undefined") return;

          const validatedItem = {
            ...item,
            quantity: item.quantity || 1,
            type: item.type || "Course",
          };

          if (uniqueItems[validatedItem.id]) {
            if (validatedItem.type === "Book") {
              uniqueItems[validatedItem.id].quantity += validatedItem.quantity;
            }
          } else {
            uniqueItems[validatedItem.id] = validatedItem;
          }
        });

        setCart(Object.values(uniqueItems));
      } catch (error) {
        console.error("Failed to parse cart from localStorage", error);
        setCart([]); // Clear cart if parsing fails
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCart((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // If item exists and it's a book, you might want to increase quantity
        // For now, we just prevent duplicates as per original logic
        return prev;
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number | string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number | string, quantity: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item,
      ),
    );
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
      data-oid=".t6319g"
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
