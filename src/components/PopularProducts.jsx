import { Link } from "react-router-dom";

import ProductCard from "./ui/ProductCard";
import { products } from "../data/products";

// Icons
import { ArrowRight } from "lucide-react";

const PopularProducts = () => {
  const filteredProducts = products.filter((product) => product.id <= 8);

  return (
    <section className="mx-auto px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:gap-12">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold md:text-2xl">
            Popular Products
          </div>
          <div>
            <Link
              to="/categories/all"
              className="flex items-center gap-2 text-xl font-semibold transition-colors duration-300 hover:text-color-50 md:text-2xl"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              See All{" "}
              <span>
                <ArrowRight />
              </span>
            </Link>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:gap-12">
          <ProductCard products={filteredProducts} />
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
