import React, { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { Search, X } from "lucide-react";

const SearchBar = ({
  className,
  subClassName,
  inputWrapperClass,
  inputClassName,
  noMatchingProductClass,
}) => {
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchWord(searchValue);

    const newFilteredProduct = products.filter((value) => {
      return value.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    if (searchValue === "") {
      setFilteredProduct([]);
    } else {
      setFilteredProduct(newFilteredProduct);
    }
  };

  // Clear input field
  const handleClearInput = () => {
    setFilteredProduct([]);
    setSearchWord("");
  };

  return (
    <div className={`${className || ""}`}>
      <div
        className={`flex items-center rounded-[4px] border px-2 py-1.5 ${inputWrapperClass || ""}`}
      >
        <input
          type="text"
          className={`w-full text-sm outline-none xl:text-base ${inputClassName || ""}`}
          placeholder="Search SwiftMart"
          value={searchWord}
          onChange={handleSearch}
        />
        <button
          className="rounded-full bg-color-50 p-1.5 [&_svg]:stroke-white"
          onClick={handleClearInput}
        >
          {searchWord === "" ? (
            <Search className="size-4" />
          ) : (
            <X className="size-4" />
          )}
        </button>
      </div>

      {/* If search term doesn't matches any product name show this message */}
      {searchWord !== "" && filteredProduct.length === 0 && (
        <div
          className={`absolute z-10 w-full rounded-md border border-neutral-700 bg-white p-2 text-sm ${noMatchingProductClass || ""}`}
        >
          No products found!
        </div>
      )}

      {filteredProduct.length !== 0 && (
        <div
          className={`absolute z-10 flex w-full flex-col gap-2 rounded-md border border-neutral-700 bg-white px-4 py-2 ${
            subClassName || ""
          }`}
        >
          {filteredProduct.map((product) => {
            return (
              <Link
                key={product.id}
                to={`/${product.category}/${product.name.replace(/\s+/g, "-")}/${product.id}`}
                className="block transition-colors duration-300 hover:text-color-50"
                onClick={() => {
                  handleClearInput();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <span>{product.name}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
