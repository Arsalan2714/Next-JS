"use client";
import { useState, useEffect } from "react"; // Import useState
import FeaturesSection from "@/components/FeaturesSection/page";

export default function Home() {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    console.log("Hey I am useEffect from home page");

    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
  }, []); // Add dependency array

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart)); // Ensure to stringify the cart
    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const item = myCart[key];
      subt += (item.price || 0) * (item.qty || 0);
    }
    setSubTotal(subt);
  };

  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = { ...cart }; // Create a new cart object
    if (itemCode in newCart) {
      newCart[itemCode].qty += qty; // Update quantity
    } else {
      newCart[itemCode] = { qty, price, name, size, variant }; // Add new item
    }
    setCart(newCart);
    saveCart(newCart); // Call saveCart correctly
  };

  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  const removeFromCart = (itemCode, qty) => {
    let newCart = { ...cart }; // Create a new cart object
    if (itemCode in newCart) {
      newCart[itemCode].qty -= qty; // Update quantity
      if (newCart[itemCode].qty <= 0) {
        delete newCart[itemCode]; // Remove item if qty is 0
      }
    }
    setCart(newCart);
    saveCart(newCart); // Call saveCart correctly
  };

  return (
    <div>
      <FeaturesSection
        
      />
    </div>
  );
}
