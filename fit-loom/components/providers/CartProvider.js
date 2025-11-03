"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
}

export default function CartProvider({ children }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const stored = typeof window !== "undefined" ? localStorage.getItem("cart") : null;
      if (stored) {
        const parsed = JSON.parse(stored);
        setCart(parsed);
        computeAndSetSubtotal(parsed);
      }
    } catch (error) {
      console.error(error);
      if (typeof window !== "undefined") localStorage.clear();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const computeAndSetSubtotal = (myCart) => {
    let subtotalAmount = 0;
    const keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      const item = myCart[keys[i]];
      subtotalAmount += (item.price || 0) * (item.qty || 0);
    }
    setSubTotal(subtotalAmount);
  };

  const saveCart = (myCart) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(myCart));
    }
    computeAndSetSubtotal(myCart);
  };

  const addToCart = (itemCode, qty, price, name, size, variant) => {
    const newCart = { ...cart };
    if (itemCode in newCart) {
      newCart[itemCode].qty += qty;
    } else {
      newCart[itemCode] = { qty, price, name, size, variant };
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const removeFromCart = (itemCode, qty) => {
    const newCart = { ...cart };
    if (itemCode in newCart) {
      newCart[itemCode].qty -= qty;
      if (newCart[itemCode].qty <= 0) {
        delete newCart[itemCode];
      }
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  const value = useMemo(
    () => ({ cart, subTotal, addToCart, removeFromCart, clearCart }),
    [cart, subTotal]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}


