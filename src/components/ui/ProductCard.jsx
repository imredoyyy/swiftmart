import { Link } from "react-router-dom";

const ProductCard = ({ products, className }) => {
  return (
    <>
      {products.map((product) => (
        <div
          className={`relative flex max-w-[300px] flex-col gap-4 rounded-[8px] border-2 border-color-100/50 transition-colors duration-300 hover:border-color-100/80 ${className || ""}`}
          key={product.id}
        >
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to={`/${product.category}/${product.name.replace(/\s+/g, "-")}/${product.id}`}
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
    </>
  );
};

export default ProductCard;
