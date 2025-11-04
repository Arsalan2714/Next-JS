"use client";
import React from "react";
import Link from "next/link";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { IoBagCheckOutline } from "react-icons/io5";
// Adjust the import path below if your CartProvider exports useCart from a different file.
import { useCart } from "../../components/providers/CartProvider";

function Checkout() {
  const {
    cart = {},
    addToCart,
    removeFromCart,
    clearCart,
    subTotal,
  } = useCart();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl my-6 sm:my-8 text-center font-bold">
        Checkout
      </h1>
      <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
        1. Delivery Details
      </h2>
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden mb-6 sm:mb-8">
        <div className="bg-gradient-to-r from-pink-50 to-indigo-50 px-4 sm:px-6 py-4 border-b border-gray-200">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 flex items-center gap-2">
            <span className="text-pink-500">📍</span>
            Shipping Information
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Please provide your delivery address details
          </p>
        </div>
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                <span className="flex items-center gap-1">
                  <span className="text-pink-500">👤</span>
                  Full Name
                </span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                className="w-full bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 focus:bg-white text-base outline-none text-gray-700 py-3 px-4 transition-all duration-200 ease-in-out placeholder:text-gray-400"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                <span className="flex items-center gap-1">
                  <span className="text-pink-500">✉️</span>
                  Email Address
                </span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                className="w-full bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 focus:bg-white text-base outline-none text-gray-700 py-3 px-4 transition-all duration-200 ease-in-out placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="address"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              <span className="flex items-center gap-1">
                <span className="text-pink-500">🏠</span>
                Delivery Address
              </span>
            </label>
            <textarea
              name="address"
              id="address"
              rows="3"
              placeholder="Enter your complete address with street, building, and landmark"
              className="w-full bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 focus:bg-white text-base outline-none text-gray-700 py-3 px-4 leading-6 transition-all duration-200 ease-in-out resize-y placeholder:text-gray-400"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                <span className="flex items-center gap-1">
                  <span className="text-pink-500">📱</span>
                  Phone Number
                </span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+91 1234567890"
                className="w-full bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 focus:bg-white text-base outline-none text-gray-700 py-3 px-4 transition-all duration-200 ease-in-out placeholder:text-gray-400"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="city"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                <span className="flex items-center gap-1">
                  <span className="text-pink-500">🏙️</span>
                  City
                </span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Enter your city"
                className="w-full bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 focus:bg-white text-base outline-none text-gray-700 py-3 px-4 transition-all duration-200 ease-in-out placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-2">
              <label
                htmlFor="state"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                <span className="flex items-center gap-1">
                  <span className="text-pink-500">🗺️</span>
                  State
                </span>
              </label>
              <input
                type="text"
                id="state"
                name="state"
                placeholder="Enter your state"
                className="w-full bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 focus:bg-white text-base outline-none text-gray-700 py-3 px-4 transition-all duration-200 ease-in-out placeholder:text-gray-400"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="pincode"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                <span className="flex items-center gap-1">
                  <span className="text-pink-500">📮</span>
                  Pincode
                </span>
              </label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                placeholder="123456"
                maxLength="6"
                className="w-full bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 focus:bg-white text-base outline-none text-gray-700 py-3 px-4 transition-all duration-200 ease-in-out placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 mt-8 sm:mt-10">
        2. Review Cart Items
      </h2>
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden my-4 sm:my-6">
        {Object.keys(cart).length == 0 ? (
          <div className="text-center py-12 sm:py-16 px-4 sm:px-8">
            <div className="text-gray-400 text-5xl sm:text-6xl mb-4">🛒</div>
            <p className="text-gray-500 font-semibold text-base sm:text-lg">
              Your cart is empty!
            </p>
            <p className="text-gray-400 text-xs sm:text-sm mt-2">
              Add some items to get started
            </p>
          </div>
        ) : (
          <>
            <div className="divide-y divide-gray-200">
              {Object.keys(cart).map((k) => {
                const itemTotal = (cart[k].price || 0) * cart[k].qty;
                return (
                  <div
                    key={k}
                    className="p-4 sm:p-6 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-800 text-base sm:text-lg mb-1 truncate">
                          {cart[k].name}
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {cart[k].size && (
                            <p className="text-xs sm:text-sm text-gray-500">
                              Size: {cart[k].size}
                            </p>
                          )}
                          {cart[k].variant && (
                            <p className="text-xs sm:text-sm text-gray-500">
                              Variant: {cart[k].variant}
                            </p>
                          )}
                        </div>
                        <p className="text-pink-600 font-bold text-base sm:text-lg">
                          ₹{itemTotal.toFixed(2)}
                        </p>
                        <p className="text-gray-400 text-xs sm:text-sm">
                          ₹{cart[k].price?.toFixed(2)} each
                        </p>
                      </div>
                      <div className="flex items-center justify-between sm:justify-end gap-3 bg-gray-100 rounded-full px-3 sm:px-4 py-2 w-full sm:w-auto">
                        <AiFillMinusCircle
                          onClick={() => removeFromCart(k, 1)}
                          className="cursor-pointer text-pink-500 hover:text-pink-700 transition-colors text-xl sm:text-2xl flex-shrink-0"
                        />
                        <span className="mx-2 text-gray-800 font-semibold min-w-[2rem] text-center text-sm sm:text-base">
                          {cart[k].qty}
                        </span>
                        <AiFillPlusCircle
                          onClick={() =>
                            addToCart(
                              k,
                              1,
                              cart[k].price || 0,
                              cart[k].name,
                              cart[k].size,
                              cart[k].variant,
                              false // Don't open cart when updating quantity in checkout page
                            )
                          }
                          className="cursor-pointer text-pink-500 hover:text-pink-700 transition-colors text-xl sm:text-2xl flex-shrink-0"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="bg-gray-50 px-4 sm:px-6 py-4 border-t border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700 font-semibold text-base sm:text-lg">
                  Subtotal:
                </span>
                <span className="text-pink-600 font-bold text-xl sm:text-2xl">
                  ₹{subTotal?.toFixed(2) || "0.00"}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={clearCart}
                  className="flex items-center justify-center w-full sm:flex-1 text-gray-700 bg-gray-200 border-0 py-2.5 sm:py-3 px-4 focus:outline-none hover:bg-gray-300 rounded-lg text-sm sm:text-base font-semibold transition-colors duration-200"
                >
                  Clear Cart
                </button>
                <Link
                  href="/checkout"
                  className="flex items-center justify-center w-full sm:flex-1 text-white bg-pink-500 border-0 py-2.5 sm:py-3 px-4 focus:outline-none hover:bg-pink-600 rounded-lg text-sm sm:text-base font-semibold transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  <IoBagCheckOutline className="mr-2 text-base sm:text-lg" />
                  <span className="hidden sm:inline">Proceed to </span>Checkout
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Checkout;
