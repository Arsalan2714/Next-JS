"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { CiShoppingCart, CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { IoBagCheckOutline } from "react-icons/io5";

import { useCart } from "../providers/CartProvider";

const Navbar = () => {
  const { cart, addToCart, removeFromCart, clearCart, subTotal } = useCart();
  console.log(cart, addToCart, removeFromCart, clearCart, subTotal);
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (ref.current.classList.contains("translate-x-0")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-between items-center  py-2 shadow-md">
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
      <div
        onClick={toggleCart}
        className="cursor-pointer Cart absolute right-0 mx-5 top-4"
      >
        {" "}
        <CiShoppingCart className=" text-xl md:text-3xl" />
      </div>

      <div
        ref={ref}
        className="w-72 sideCart absolute top-0 right-0 h-screen bg-pink-100 px-8 py-10 transform transition-transform translate-x-full z-50 "
      >
        <h2 className="font-bold text-xl text-center">Shopping cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-500"
        >
          <IoIosCloseCircle />
        </span>
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length==0 && <div className="my-4 font-semibold text-center">
             Your cart is empty!
            </div>}
         { Object.keys(cart).map((k)=>  {
          return <li key={k}>
          <div className="item flex my-5">
            <div className="w-2/3 font-semibold"> {cart[k].name}</div>
            <div className="w-1/3 flex items-center font-semibold justify-center text-lg">
              {" "}
              <AiFillMinusCircle
                onClick={() => removeFromCart(k, 1)}
                className="cursor-pointer text-pink-500"
              />{" "}
              <span className="mx-2 text-sm">{cart[k].qty}</span>{" "}
              <AiFillPlusCircle
                onClick={() =>
                  addToCart(
                    k,
                    1,
                    cart[k].price || 0,
                    cart[k].name,
                    cart[k].size,
                    cart[k].variant
                  )
                }
                className="cursor-pointer text-pink-500"
              />{" "}
            </div>
          </div>
        </li>
         })
}
        </ol>
        <div className="flex gap-2 mt-4">
          <button className="flex items-center justify-center flex-1 text-white bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-pink-600 rounded text-lg">
            <IoBagCheckOutline className="m-1" />Checkout
          </button>
          <button onClick={clearCart} className="flex items-center justify-center flex-1 text-white bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-pink-600 rounded text-lg">
            <IoBagCheckOutline className="m-1" />Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
