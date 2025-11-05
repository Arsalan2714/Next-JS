"use client";
import React from "react";
import Image from "next/image";

const OrderItem = ({ item }) => {
  const { name, qty, price, color, size, img, description } = item;
  const totalPrice = (price * qty).toFixed(2);

  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 border-b border-gray-100 pb-6 mb-6 last:border-0 last:mb-0 last:pb-0">
      <div className="relative w-32 h-32 flex-shrink-0 rounded overflow-hidden border border-gray-200">
        <Image src={img} alt={name} fill className="object-cover rounded" />
      </div>

      <div className="flex-1 w-full">
        <h3 className="font-semibold text-gray-900 text-lg">{name}</h3>
        {description && (
          <p className="text-gray-500 text-sm mb-2 line-clamp-2">{description}</p>
        )}
        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-2">
          <span><b>Color:</b> {color}</span>
          <span><b>Size:</b> {size}</span>
          <span><b>Qty:</b> {qty}</span>
        </div>
        <div className="text-pink-600 font-bold text-base">
          ₹{price.toFixed(2)} × {qty} = ₹{totalPrice}
        </div>
      </div>
    </div>
  );
};

const OrderTotals = ({ subtotal, shipping, total }) => (
  <div className="mt-6 text-base text-gray-700">
    <div className="flex justify-between py-1">
      <span>Subtotal:</span>
      <span>₹{subtotal.toFixed(2)}</span>
    </div>
    <div className="flex justify-between py-1">
      <span>Shipping:</span>
      <span>{shipping ? `₹${shipping.toFixed(2)}` : "Free"}</span>
    </div>
    <div className="flex justify-between py-2 border-t border-gray-200 font-semibold text-lg mt-3">
      <span>Total:</span>
      <span className="text-pink-600">₹{total.toFixed(2)}</span>
    </div>
  </div>
);

const OrderActions = () => (
  <div className="px-8 py-4 bg-pink-50 flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-between rounded-b-2xl">
    <button className="w-full sm:w-auto px-5 py-2 bg-pink-500 text-white rounded-lg font-semibold hover:bg-pink-600 transition-colors">
      Track Order
    </button>
    <button className="w-full sm:w-auto px-5 py-2 bg-white border-2 border-pink-500 text-pink-600 rounded-lg font-semibold hover:bg-pink-100 transition-colors">
      Download Invoice
    </button>
  </div>
);

export default function OrderPage() {
  const order = React.useMemo(
    () => ({
      brand: "codeswear.com",
      id: "ORD-20240602-1234",
      date: "2024-06-02",
      status: "Confirmed",
      address: "221B Baker Street, London, UK",
      items: [
        {
          name: "Animated Night Hill Illustrations",
          description:
            "A beautiful collection of 3D-styled night landscapes perfect for wallpapers, prints, and digital art displays.",
          qty: 4,
          price: 58,
          color: "Blue",
          size: "Medium",
          img: "https://dummyimage.com/400x400",
        },
      ],
      subtotal: 232,
      shipping: 0,
      total: 232,
    }),
    []
  );

  return (
    <section className="text-gray-600 body-font overflow-hidden pt-8">
      <div className="container px-5 py-12 mx-auto max-w-3xl">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
          {/* ✅ Responsive Brand Header */}
          <div className="px-8 py-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-center sm:text-left">
            <h1 className="text-2xl font-extrabold text-pink-600 tracking-tight">
              {order.brand}
            </h1>
            <span className="text-xs text-gray-500 font-medium">
              Thank you for shopping with us!
            </span>
          </div>

          {/* Order Header */}
          <div className="px-8 py-6 border-b border-gray-100">
            <h2 className="text-pink-600 text-xl font-bold mb-2">Order Summary</h2>

            <div className="text-gray-700 text-sm flex flex-col sm:flex-row sm:gap-6 gap-1 mb-2">
              <div>
                <span className="font-semibold text-gray-500">Order ID:</span>{" "}
                <span className="font-mono">{order.id}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-500">Date:</span> {order.date}
              </div>
              <div className="flex items-center gap-1">
                <span className="font-semibold text-gray-500">Status:</span>
                <span className="ml-1 text-xs px-2 py-1 bg-pink-100 text-pink-700 font-bold rounded-full">
                  {order.status}
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-600 mt-1">
              <span className="font-semibold text-gray-500">Shipping Address:</span>
              <br />
              {order.address}
            </p>
          </div>

          {/* Order Items */}
          <div className="px-8 py-8">
            {order.items.map((item, idx) => (
              <OrderItem key={idx} item={item} />
            ))}
            <OrderTotals
              subtotal={order.subtotal}
              shipping={order.shipping}
              total={order.total}
            />
          </div>

          {/* CTA Buttons */}
          <OrderActions />
        </div>
      </div>
    </section>
  );
}
