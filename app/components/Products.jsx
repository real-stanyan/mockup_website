import React from "react";
import Image from "next/image";
import Link from "next/link";

import products from "@/utils/products";

const Products = () => {
  console.log(products);
  return (
    <div className="relative">
      {/* Product title:desktop */}
      <h1 class="hidden md:block rotate-[-90deg] whitespace-nowrap absolute top-[7vw] left-[-2vw] text-[2vw] font-Orbitron text-[var(--border-color)]">
        Our Products
      </h1>
      {/* Product title:mobile */}
      <h1 class="block md:hidden whitespace-nowrap text-[4vw] text-center font-Orbitron text-[var(--border-color)]">
        Our Products
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 px-[10vw] py-[10vw] font-Oswald">
        {products.map((item, i) => {
          return (
            <Link
              href={`/products/${item.id}`}
              className="shadow-custom border-2 border-[var(--border-color)] hover:translate-y-[-15px] transition-all "
              key={i}
            >
              <Image
                src={item.image_url}
                width={1000}
                height={1000}
                alt={item.product_name}
                className="w-full"
              />
              <div className="px-3 py-5 flex flex-col items-end justify-evenly flex-1">
                <p className="text-[2.5vw] text-right md:text-[1.2vw] md:whitespace-nowrap font-bold">
                  {item.product_name}
                </p>
                <p className="text-[var(--primry-color)] text-[2.5vw] md:text-[1vw]">
                  $ {item.price}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
