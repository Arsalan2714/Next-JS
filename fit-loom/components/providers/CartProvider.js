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

const generateCartKey = (productId, size = '', variant = '') => {
  return `${productId}_${size}_${variant}`.trim();
};

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

  // Calculate subtotal whenever cart changes
  useEffect(() => {
    let total = 0;
    Object.keys(cart).forEach((key) => {
      const item = cart[key];
      total += (parseFloat(item.price) || 0) * item.qty;
    });
    setSubTotal(total);
  }, [cart]);

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

  const addToCart = (productId, qty, price, name, size, variant, openCart = true) => {
    const cartKey = generateCartKey(productId, size, variant);
    
    setCart(prevCart => {
      const newCart = {
        ...prevCart,
        [cartKey]: {
          qty: (prevCart[cartKey]?.qty || 0) + qty,
          price: parseFloat(price),
          name,
          size,
          variant,
          productId
        }
      };
      saveCart(newCart); // Save to localStorage
      return newCart;
    });

    if (openCart) {
      // Dispatch event to open cart
      window.dispatchEvent(new Event('cart:itemAdded'));
    }
  };

  const removeFromCart = (cartKey, qty) => {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      if (newCart[cartKey].qty <= qty) {
        delete newCart[cartKey];
      } else {
        newCart[cartKey].qty -= qty;
      }
      saveCart(newCart); // Save to localStorage
      return newCart;
    });
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


