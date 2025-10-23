

import Image from "next/image";
import Link from "next/link";



export default function Tshirts() {
  const products = [
    {
      id: 1,
      category: "T-shirts",
      title: "Fit-Loom",
      price: "₹499",
      img: "https://m.media-amazon.com/images/I/61bStD2ua2L._SY879_.jpg",
      size: "S,M,XL,XXL",
    },
    {
      id: 2,
      category: "T-shirts",
      title: "Fit-Loom",
      price: "₹499",
      img: "https://m.media-amazon.com/images/I/61bStD2ua2L._SY879_.jpg",
      size: "S,M,XL,XXL",
    },
    {
      id: 3,
      category: "T-shirts",
      title: "Fit-Loom",
      price: "₹499",
      img: "https://m.media-amazon.com/images/I/61bStD2ua2L._SY879_.jpg",
      size: "S,M,XL,XXL",
    },
    {
      id: 4,
      category: "T-shirts",
      title: "Fit-Loom",
      price: "₹499",
      img: "https://m.media-amazon.com/images/I/61bStD2ua2L._SY879_.jpg",
      size: "S,M,XL,XXL",
    },
    {
      id: 5,
      category: "T-shirts",
      title: "Fit-Loom",
      price: "₹499",
      img: "https://m.media-amazon.com/images/I/61bStD2ua2L._SY879_.jpg",
      size: "S,M,XL,XXL",
    },
    {
      id: 6,
      category: "T-shirts",
      title: "Fit-Loom",
      price: "₹499",
      img: "https://m.media-amazon.com/images/I/61bStD2ua2L._SY879_.jpg",
      size: "S,M,XL,XXL",
    },
    {
      id: 7,
      category: "T-shirts",
      title: "Fit-Loom",
      price: "₹499",
      img: "https://m.media-amazon.com/images/I/61bStD2ua2L._SY879_.jpg",
      size: "S,M,XL,XXL",
    },
    {
      id: 8,
      category: "T-shirts",
      title: "Fit-Loom",
      price: "₹499",
      img: "https://m.media-amazon.com/images/I/61bStD2ua2L._SY879_.jpg",
      size: "S,M,XL,XXL",
    },
    {
      id: 9,
      category: "T-shirts",
      title: "Fit-Loom",
      price: "₹499",
      img: "https://m.media-amazon.com/images/I/61bStD2ua2L._SY879_.jpg",
      size: "S,M,XL,XXL",
    },
    {
      id: 10,
      category: "T-shirts",
      title: "Fit-Loom",
      price: "₹499",
      img: "https://m.media-amazon.com/images/I/61bStD2ua2L._SY879_.jpg",
      size: "S,M,XL,XXL",
    },
    {
      id: 11,
      category: "T-shirts",
      title: "Fit-Loom",
      price: "₹499",
      img: "https://m.media-amazon.com/images/I/61bStD2ua2L._SY879_.jpg",
      size: "S,M,XL,XXL",
    },
    {
      id: 12,
      category: "T-shirts",
      title: "Fit-Loom",
      price: "₹499",
      img: "https://m.media-amazon.com/images/I/61bStD2ua2L._SY879_.jpg",
      size: "S,M,XL,XXL",
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
                <div className="block relative h-64 w-full rounded overflow-hidden">
                  <Image
                    src={product.img}
                    alt={product.title}
                    fill
                    className="object-contain object-top w-full h-full"
                    sizes="(max-width: 768px) 100vw, 25vw"
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
                  <p className="mt-1 text-center text-sm text-gray-600">Size: {product.size}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
