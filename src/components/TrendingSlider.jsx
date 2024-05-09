import React, { useRef } from "react";
import { Link } from "react-router-dom";

import { products } from "../data/products";

// Icons
import { ArrowRight, ArrowLeft } from "lucide-react";

const TrendingSlider = ({ onProductClick }) => {
  const specificProductsId = [1, 2, 11, 4, 6, 9, 10];

  const filteredProducts = specificProductsId.map((id) =>
    products.find((product) => product.id === id),
  );

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= 200;
  };

  const scrollRight = () => {
    sliderRef.current.scrollLeft += 200;
  };

  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:gap-12">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold md:text-2xl">
            Trending Products
          </h2>

          <div className="flex items-center gap-2 md:gap-4">
            <button
              className="group rounded-md bg-neutral-200 p-2 transition-colors duration-200 hover:bg-neutral-300"
              onClick={scrollLeft}
            >
              <ArrowLeft className="transition-colors duration-200 group-hover:stroke-color-50" />
            </button>
            <button
              className="group rounded-md bg-neutral-200 p-2 transition-colors duration-200 hover:bg-neutral-300"
              onClick={scrollRight}
            >
              <ArrowRight className="transition-colors duration-200 group-hover:stroke-color-50" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          id="trendingSlider"
          className="flex gap-8 overflow-y-hidden overflow-x-scroll whitespace-nowrap"
          ref={sliderRef}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="relative flex min-w-[220px] flex-col gap-4 rounded-[8px] border-2 border-color-100/50 transition-colors duration-300 hover:border-color-100/80"
            >
              <Link
                onClick={() => {
                  onProductClick(product.img);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                to={`/${product.category}/${product.name.replace(/\s+/g, "-")}/${product.id}`}
              >
                <div className="rounded-[10px] bg-color-200">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="aspect-square rounded-t-md object-cover"
                    loading="lazy"
                  />
                </div>
              </Link>
              <div className="flex flex-col gap-2 px-3 pb-5 pt-2">
                <Link
                  onClick={() => {
                    onProductClick(product.img);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  to={`/${product.category}/${product.name.replace(
                    /\s+/g,
                    "-",
                  )}/${product.id}`}
                  className="text-base font-medium capitalize transition-colors duration-300 hover:text-color-50 md:text-lg"
                >
                  {product.name}
                </Link>
                <p
                  className="text-base font-semibold text-color-50 md:text-lg"
                  aria-label="Price"
                >
                  ${(product.priceCents / 100).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSlider;
