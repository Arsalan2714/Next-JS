"use client";

import Image from "next/image";
import Link from "next/link";

export default function Stickers() {
  const products = [
    {
      id: 1,
      category: "Stickers",
      title: "Cool Sticker",
      price: "₹99",
      img: "https://m.media-amazon.com/images/I/71SXFPf0Q+L._AC_UY327_FMwebp_QL65_.jpg",
      size: "",
    },
    {
      id: 2,
      category: "Stickers",
      title: "Funny Sticker",
      price: "₹99",
      img: "https://m.media-amazon.com/images/I/71SXFPf0Q+L._AC_UY327_FMwebp_QL65_.jpg",
      size: "",
    },
    {
      id: 3,
      category: "Stickers",
      title: "Motivation Sticker",
      price: "₹99",
      img: "https://m.media-amazon.com/images/I/71SXFPf0Q+L._AC_UY327_FMwebp_QL65_.jpg",
      size: "",
    },
    {
      id: 4,
      category: "Stickers",
      title: "Minimal Sticker",
      price: "₹99",
      img: "https://m.media-amazon.com/images/I/71SXFPf0Q+L._AC_UY327_FMwebp_QL65_.jpg",
      size: "",
    },
    {
      id: 5,
      category: "Stickers",
      title: "Aesthetic Sticker",
      price: "₹99",
      img: "https://m.media-amazon.com/images/I/71SXFPf0Q+L._AC_UY327_FMwebp_QL65_.jpg",
      size: "",
    },
    {
      id: 6,
      category: "Stickers",
      title: "Classic Sticker",
      price: "₹99",
      img: "https://m.media-amazon.com/images/I/71SXFPf0Q+L._AC_UY327_FMwebp_QL65_.jpg",
      size: "",
    },
    {
      id: 7,
      category: "Stickers",
      title: "Artistic Sticker",
      price: "₹99",
      img: "https://m.media-amazon.com/images/I/71SXFPf0Q+L._AC_UY327_FMwebp_QL65_.jpg",
      size: "",
    },
    {
      id: 8,
      category: "Stickers",
      title: "Quote Sticker",
      price: "₹99",
      img: "https://m.media-amazon.com/images/I/71SXFPf0Q+L._AC_UY327_FMwebp_QL65_.jpg",
      size: "",
    },
    {
      id: 9,
      category: "Stickers",
      title: "Cartoon Sticker",
      price: "₹99",
      img: "https://m.media-amazon.com/images/I/71SXFPf0Q+L._AC_UY327_FMwebp_QL65_.jpg",
      size: "",
    },
    {
      id: 10,
      category: "Stickers",
      title: "Chill Sticker",
      price: "₹99",
      img: "https://m.media-amazon.com/images/I/71SXFPf0Q+L._AC_UY327_FMwebp_QL65_.jpg",
      size: "",
    },
    {
      id: 11,
      category: "Stickers",
      title: "Hustle Sticker",
      price: "₹99",
      img: "https://m.media-amazon.com/images/I/71SXFPf0Q+L._AC_UY327_FMwebp_QL65_.jpg",
      size: "",
    },
    {
      id: 12,
      category: "Stickers",
      title: "Iconic Sticker",
      price: "₹99",
      img: "https://m.media-amazon.com/images/I/71SXFPf0Q+L._AC_UY327_FMwebp_QL65_.jpg",
      size: "",
    },
  ];

  // IMPORTANT: You are probably getting a 404 after redirect because you don't have 
  // a route/page set up for /stickers/product/[id]. Make sure you have 
  // a folder structure like: /app/stickers/product/[id]/page.js (or [slug]/page.js) 
  // with a React component exported, otherwise Next.js will throw a 404.

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
