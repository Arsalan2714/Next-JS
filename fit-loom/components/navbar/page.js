"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CiShoppingCart, CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";

import { useCart } from "../providers/CartProvider";

const Navbar = () => {
  const { cart, addToCart, removeFromCart, clearCart, subTotal } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Listen for cart:itemAdded event to open cart when Add to Cart button is clicked
  useEffect(() => {
    if (!isMounted) return;

    const handleCartItemAdded = () => {
      setIsCartOpen(true);
    };

    window.addEventListener("cart:itemAdded", handleCartItemAdded);

    return () => {
      window.removeEventListener("cart:itemAdded", handleCartItemAdded);
    };
  }, [isMounted]);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-between items-center py-2 shadow-md sticky top-0 bg-white z-50">
      <div className="Logo mx-5">
        <Link href="/">
          <Image src="/logo.webp" alt="logo" width={200} height={40} />
        </Link>
      </div>
      <div className="Nav">
        <ul className="flex  items-center space-x-6 font-bold md:text-md ">
          <li>
            {" "}
            <Link href="/t-shirt"> T-Shirts</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="/hoodies"> Hoodies</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="/mugs"> Mugs</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="/stickers"> Stickers</Link>{" "}
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-2 md:ml-auto md:static absolute right-0 top-3 sm:top-5 mx-4 sm:mx-5 h-10">
        <Link href="/login">
          <MdAccountCircle className="cursor-pointer text-xl sm:text-2xl md:text-3xl" />
        </Link>
        <div onClick={toggleCart} className="cursor-pointer flex items-center">
          <CiShoppingCart className="text-xl sm:text-2xl md:text-3xl" />
        </div>
      </div>

      {/* Side Cart */}
      {isMounted && (
        <div
          className={`w-3/4 sm:w-80 md:w-96 sideCart fixed top-0 right-0 h-screen bg-white shadow-2xl transform transition-transform duration-300 z-50 flex flex-col overflow-hidden ${
            isCartOpen ? "translate-x-0" : "translate-x-full"
          }`}
          suppressHydrationWarning
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-500 to-pink-600 px-4 sm:px-6 py-4 flex items-center justify-between border-b border-pink-400 flex-shrink-0">
            <h2 className="font-bold text-lg sm:text-xl text-white flex items-center gap-2">
              <span>🛒</span>
              Shopping Cart
            </h2>
            <button
              onClick={closeCart}
              className="cursor-pointer text-white hover:text-pink-200 transition-colors text-2xl sm:text-3xl"
            >
              <IoIosCloseCircle />
            </button>
          </div>

          {/* Cart Items - Scrollable */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 min-h-0">
            {Object.keys(cart).length == 0 ? (
              <div className="flex flex-col items-center justify-center h-full py-12">
                <div className="text-gray-300 text-6xl mb-4">🛒</div>
                <p className="text-gray-500 font-semibold text-base sm:text-lg text-center">
                  Your cart is empty!
                </p>
                <p className="text-gray-400 text-sm mt-2 text-center">
                  Add some items to get started
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {Object.keys(cart).map((cartKey) => {
                  const item = cart[cartKey];
                  const itemTotal = (item.price || 0) * item.qty;

                  return (
                    <div
                      key={cartKey}
                      className="bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-200 hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col gap-3">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-800 text-sm sm:text-base mb-1 truncate">
                            {item.name}
                          </h3>
                          {(item.size || item.variant) && (
                            <div className="flex flex-wrap gap-2 mb-2">
                              {item.size && (
                                <span className="text-xs text-gray-500 bg-gray-200 px-2 py-0.5 rounded">
                                  Size: {item.size}
                                </span>
                              )}
                              {item.variant && (
                                <span className="text-xs text-gray-500 bg-gray-200 px-2 py-0.5 rounded">
                                  {item.variant}
                                </span>
                              )}
                            </div>
                          )}
                          <p className="text-pink-600 font-bold text-sm sm:text-base">
                            ₹{itemTotal.toFixed(2)}
                          </p>
                          <p className="text-gray-400 text-xs">
                            ₹{item.price?.toFixed(2)} each
                          </p>
                        </div>
                        {/* Quantity controls */}
                        <div className="flex items-center justify-between bg-white rounded-full px-3 py-1.5 border border-gray-200">
                          <AiFillMinusCircle
                            onClick={() => removeFromCart(cartKey, 1)}
                            className="cursor-pointer text-pink-500 hover:text-pink-700 transition-colors text-lg sm:text-xl flex-shrink-0"
                          />
                          <span className="mx-3 text-gray-800 font-semibold min-w-[1.5rem] text-center text-sm sm:text-base">
                            {item.qty}
                          </span>
                          <AiFillPlusCircle
                            onClick={() =>
                              addToCart(
                                item.productId,
                                1,
                                item.price,
                                item.name,
                                item.size,
                                item.variant,
                                false
                              )
                            }
                            className="cursor-pointer text-pink-500 hover:text-pink-700 transition-colors text-lg sm:text-xl flex-shrink-0"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer with Subtotal and Buttons - Always visible when cart has items */}
          {Object.keys(cart).length > 0 && (
            <div className="border-t border-gray-200 bg-gray-50 px-3 sm:px-4 md:px-6 py-3 sm:py-4 space-y-2 sm:space-y-3 flex-shrink-0">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-semibold text-xs sm:text-sm md:text-base">
                  Subtotal:
                </span>
                <span className="text-pink-600 font-bold text-base sm:text-lg md:text-xl">
                  ₹{subTotal?.toFixed(2) || "0.00"}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full">
                <button
                  onClick={clearCart}
                  className="flex items-center justify-center w-full sm:flex-1 text-gray-700 bg-gray-200 border-0 py-2 sm:py-2.5 px-3 focus:outline-none hover:bg-gray-300 rounded-lg text-xs sm:text-sm font-semibold transition-colors duration-200 min-h-[40px]"
                >
                  Clear Cart
                </button>
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="flex items-center justify-center w-full sm:flex-1 text-white bg-pink-500 border-0 py-2 sm:py-2.5 px-3 focus:outline-none hover:bg-pink-600 rounded-lg text-xs sm:text-sm font-semibold transition-colors duration-200 shadow-md hover:shadow-lg min-h-[40px]"
                >
                  <IoBagCheckOutline className="mr-1.5 text-sm" />
                  Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
