import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";
import TrendingSlider from "../components/TrendingSlider";

// Icons
import { Plus, Minus, CircleCheck } from "lucide-react";
import CustomerAssurance from "../components/CustomerAssurance";

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));
  const { addToCart } = useCart();

  const [largeImageSrc, setLargeImageSrc] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams({ q: "" });
  const [colorSelected, setColorSelected] = useState(true);
  const [addCartTooltip, setIsAddCartTooltip] = useState(false);

  useEffect(() => {
    if (product) {
      setLargeImageSrc(product.img);
      setSelectedColor(product.colors[0]);
    }
  }, [product]);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const q = searchParams.get("q");
  useEffect(() => {
    setSelectedColor(q);
  }, [q]);

  // Clicking on small images, changes the src of the large image
  const handleColorClick = (color) => {
    setSelectedColor(color);
    setLargeImageSrc(product.otherImg[color]);
  };

  const addToCartNotify = () => {
    setIsAddCartTooltip(true);

    const addCartTooltipId = setTimeout(() => {
      setIsAddCartTooltip(false);
      clearTimeout(addCartTooltipId);
    }, 2000);
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.priceCents / 100,
      quantity: quantity,
      color: selectedColor,
      img: largeImageSrc,
      category: product.category,
    };

    if (selectedColor === "") {
      setColorSelected(false);
      window.scrollTo({ top: 0, behavior: "smooth" });

      const selectedColorTimeoutId = setTimeout(() => {
        setColorSelected(true);
        clearTimeout(selectedColorTimeoutId);
      }, 2000);
    } else {
      addToCart(cartItem);
      setColorSelected(true);
      addToCartNotify();
    }
  };

  return (
    <>
      <div
        className={`absolute left-[50%] flex -translate-x-1/2 items-center gap-2 ${
          !addCartTooltip
            ? "invisible top-6 opacity-0"
            : "visible top-[70px] opacity-100"
        } whitespace-nowrap text-xl font-medium text-green-500 transition-all duration-400 ease-in-out`}
      >
        <span>
          <CircleCheck className="stroke-green-500" />
        </span>
        <span>Added To The Cart</span>
      </div>

      <div
        className={`absolute left-[50%] flex -translate-x-1/2 items-center gap-1 whitespace-nowrap text-xl font-medium text-red-600 transition-all duration-400 ease-in-out ${
          colorSelected
            ? "invisible top-6 opacity-0"
            : "visible top-[70px] opacity-100"
        }`}
      >
        Please Select A Color!
      </div>

      <div className="mx-auto px-4 py-16 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:gap-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center gap-6 md:justify-start">
              {/* Large Image */}
              <div className="max-w-[200px] rounded-lg bg-color-200 sm:max-w-[250px] md:max-w-[400px] lg:max-w-[450px]">
                <img
                  src={largeImageSrc}
                  className="aspect-square rounded-lg object-cover"
                  alt={product.name}
                  loading="lazy"
                />
              </div>

              {/* Small Images */}
              <div className="flex gap-2">
                {Object.entries(product.otherImg).map(([color, img], index) => (
                  <div key={index} className="cursor-pointer">
                    <img
                      src={img}
                      className={`max-w-[90px] rounded-lg bg-color-200 md:max-w-[110px] lg:max-w-[130px] ${
                        largeImageSrc === img ? "border-2 border-color-50" : ""
                      }`}
                      alt={product.name}
                      onClick={() => handleColorClick(color)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* Product Info */}
              <div className="px-4">
                <div className="flex flex-col gap-2 border-b border-y-color-100/20 pb-7">
                  <h1 className="text-center text-2xl font-bold capitalize md:text-left lg:text-3xl">
                    {product.name}
                  </h1>
                  <p className="text-sm font-normal md:text-base">
                    {product.desc}
                  </p>
                </div>
                <div className="flex flex-col gap-8 py-7">
                  <div className="flex flex-col gap-3">
                    <p className="uppercase">Color</p>
                    <div className="flex flex-wrap items-center gap-4">
                      {product.colors.map((color, index) => (
                        <button
                          key={index}
                          className={`rounded-3xl border-2 px-3 py-1 text-sm md:text-base ${
                            selectedColor === color
                              ? "border-color-50 text-color-100"
                              : "border-neutral-400 bg-color-200 text-neutral-700"
                          }`}
                          onClick={() => {
                            setSearchParams({ q: color }, { replace: true });
                            handleColorClick(color);
                          }}
                          value={color}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-2.5">
                    <p className="text-base font-semibold md:text-xl">
                      Quantity
                    </p>
                    <div className="flex items-center border border-color-100/70">
                      <button
                        className="grid h-[42px] w-[54px] place-items-center border-r border-color-100/70 transition-colors duration-300 hover:bg-color-200 md:h-[50px] md:w-[60px]"
                        onClick={decreaseQuantity}
                      >
                        <Minus />
                      </button>
                      <p
                        className="grid h-[42px] w-[54px] place-items-center bg-color-200 text-xl font-medium md:h-[50px] md:w-[60px]"
                        onChange={setQuantity}
                      >
                        {quantity}
                      </p>
                      <button
                        className="grid h-[42px] w-[54px] place-items-center border-l  border-color-100/70 transition-colors duration-300 hover:bg-color-200 md:h-[50px] md:w-[60px]"
                        onClick={increaseQuantity}
                      >
                        <Plus />
                      </button>
                    </div>
                    <p className="text-base font-semibold md:text-xl">
                      ${((product.priceCents / 100) * quantity).toFixed(2)}
                    </p>
                  </div>

                  <div className="flex flex-col flex-wrap justify-center gap-6 sm:flex-row sm:items-center sm:justify-start md:gap-4">
                    <button
                      className="rounded-[3rem] border-2 border-color-100 px-6 py-3 text-sm font-medium transition-colors duration-300 hover:bg-color-100 hover:text-white sm:text-base xl:text-lg"
                      onClick={handleAddToCart}
                    >
                      Add To Cart
                    </button>
                    <button className="rounded-[3rem] border-2 border-color-50 bg-color-50 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-transparent hover:text-color-100 md:text-base lg:text-lg">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <TrendingSlider />
        </div>
      </div>

      <CustomerAssurance />
    </>
  );
};

export default ProductPage;
