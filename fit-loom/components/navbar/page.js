import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";

 const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-between items-center  py-2 shadow-md">
      <div className="Logo mx-5" > 
      <Link href="/">
     
        <Image src="/logo.webp" alt="logo" width={200} height={40} />
       
      </Link>
      </div>
      <div className="Nav"> 
        <ul className="flex  items-center space-x-6 font-bold md:text-md ">
          <li>  <Link href="/t-shirt"> T-Shirts</Link> </li>
          <li>  <Link href="/hoodies"> Hoodies</Link> </li>
          <li>  <Link href="/mugs"> Mugs</Link> </li>
          <li>  <Link href="/stickers"> Stickers</Link> </li> 
        
        </ul>
      </div>
      <div className="Cart absolute right-0 mx-5 top-4"> <CiShoppingCart className=" text-xl md:text-3xl" /></div>

    </div>
  )
}

export default Navbar