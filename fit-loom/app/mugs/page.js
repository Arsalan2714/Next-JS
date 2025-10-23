"use client";

import Image from "next/image";
import Link from "next/link";



export default function Mugs() {
  const products = [
    {
      id: 1,
      category: "T-shirts",
      title: "Fit-Loom",
      price: "₹499",
      img: "https://m.media-amazon.com/images/I/51I11Ks0SZL._AC_UL480_FMwebp_QL65_.jpg",
      
    },
    {
      id: 2,
      category: "T-shirts",
      title: "Fit-Loom",
      price: "₹499",
      img: "https://m.media-amazon.com/images/I/51I11Ks0SZL._AC_UL480_FMwebp_QL65_.jpg",
      
    },
    {
      id: 3,
      category: "T-shirts",
      title: "Fit-Loom",
      price: "₹499",
      img: "https://m.media-amazon.com/images/I/51I11Ks0SZL._AC_UL480_FMwebp_QL65_.jpg",
      
    },
    {
      id: 4,
      category: "T-shirts",
      title: "Fit-Loom",
      price: "₹499",
      img: "https://m.media-amazon.com/images/I/51I11Ks0SZL._AC_UL480_FMwebp_QL65_.jpg",
      
    },
    {
      id: 5,
      category: "T-shirts",
      title: "Fit-Loom",
      price: "₹499",
      img: "https://m.media-amazon.com/images/I/51I11Ks0SZL._AC_UL480_FMwebp_QL65_.jpg",
      
    },
    {
      id: 6,
      category: "T-shirts",
      title: "Fit-Loom",
      price: "₹499",
      img: "https://m.media-amazon.com/images/I/51I11Ks0SZL._AC_UL480_FMwebp_QL65_.jpg",
      
    },
    {
      id: 7,
      category: "T-shirts",
      title: "Fit-Loom",
      price: "₹499",
      img: "https://m.media-amazon.com/images/I/51I11Ks0SZL._AC_UL480_FMwebp_QL65_.jpg",
      
    },
    {
      id: 8,
      category: "T-shirts",
      title: "Fit-Loom",
      price: "₹499",
      img: "https://m.media-amazon.com/images/I/51I11Ks0SZL._AC_UL480_FMwebp_QL65_.jpg",
      
    },
    {
      id: 9,
      category: "T-shirts",
      title: "Fit-Loom",
      price: "₹499",
      img: "https://m.media-amazon.com/images/I/51I11Ks0SZL._AC_UL480_FMwebp_QL65_.jpg",
      
    },
    {
      id: 10,
      category: "T-shirts",
      title: "Fit-Loom",
      price: "₹499",
      img: "https://m.media-amazon.com/images/I/51I11Ks0SZL._AC_UL480_FMwebp_QL65_.jpg",
      
    },
    {
      id: 11,
      category: "T-shirts",
      title: "Fit-Loom",
      price: "₹499",
      img: "https://m.media-amazon.com/images/I/51I11Ks0SZL._AC_UL480_FMwebp_QL65_.jpg",
      
    },
    {
      id: 12,
      category: "T-shirts",
      title: "Fit-Loom",
      price: "₹499",
      img: "https://m.media-amazon.com/images/I/51I11Ks0SZL._AC_UL480_FMwebp_QL65_.jpg",
      
    },

  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-3 py-10 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="lg:w-1/4 md:w-1/2 p-4 w-full block group"
            >
              <div className="bg-white rounded-lg shadow-lg hover:shadow-lg transition-shadow duration-300 p-4 m-4">
                <div className="block relative w-full aspect-square rounded overflow-hidden bg-gray-50">
                  <Image
                    src={product.img}
                    alt={product.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 25vw"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 text-center">
                    {product.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium text-center">
                    {product.title}
                  </h2>
                  <p className="mt-1 text-center">{product.price}</p>
                  
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
