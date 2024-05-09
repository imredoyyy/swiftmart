import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// DayJS Library
import dayjs from "dayjs";

import { useCart, getTotalQuantity } from "../context/CartContext";

// Image
import EmptyCart from "../assets/empty-cart.png";

// Icons
import { Plus, Minus, X } from "lucide-react";

const Cart = () => {
  const { cartItems, setCartItems, removeFromCart } = useCart();
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    setTotalQuantity(getTotalQuantity(cartItems));
  }, [cartItems]);

  // Update quantity of an item
  const updateQuantity = (productId, action) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          quantity:
            action === "increase" ? item.quantity + 1 : item.quantity - 1,
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  // Update shipping option of an item
  const updateShippingOption = (productId, option) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          shippingOption: option,
          deliveryDate: calculateDeliveryDate(option),
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  // Calculate delivery date based on shipping option
  const calculateDeliveryDate = (option) => {
    let deliveryDate = dayjs();
    
    switch (option) {
      case "7-day":
        deliveryDate = deliveryDate.add(7, "days");
        break;
      case "3-day":
        deliveryDate = deliveryDate.add(3, "days");
        break;
      case "same-day":
        deliveryDate = deliveryDate.add(1, "days");
        break;
      default:
        // Default delivery date
        deliveryDate = deliveryDate.add(7, "days");
        break;
    }
    return {
      date: deliveryDate.format("DD MMMM, YYYY"),
      day: deliveryDate.format("ddd"),
    };
  };

  useEffect(() => {
    const updatedCartItems = cartItems.map((item) => ({
      ...item,
      deliveryDate: calculateDeliveryDate(item.shippingOption || "7-day"),
    }));
    setCartItems(updatedCartItems);
  }, []);

  // Total amount of cart items
  const totalAmount = () => {
    let totalWithoutTax = 0;
    let totalTax = 0;

    cartItems.forEach((cartItem) => {
      const itemPriceWithoutTax = cartItem.price * cartItem.quantity;
      const tax = itemPriceWithoutTax * 0.1;
      totalTax += tax;
      totalWithoutTax += itemPriceWithoutTax;
    });

    const totalWithTax = totalWithoutTax + totalTax;

    // Calculate shipping price based on shipping options
    const shippingPrice = cartItems.reduce((acc, item) => {
      switch (item.shippingOption) {
        case "7-day":
          return acc + 0;
        case "3-day":
          return acc + 4.99;
        case "same-day":
          return acc + 9.99;
        default:
          return acc + 0;
      }
    }, 0);

    const orderTotal = totalWithTax + shippingPrice;

    return {
      totalWithoutTax: totalWithoutTax.toFixed(2),
      totalWithTax: totalWithTax.toFixed(2),
      totalTax: totalTax.toFixed(2),
      shippingPrice: shippingPrice.toFixed(2),
      orderTotal: orderTotal.toFixed(2),
    };
  };

  return (
    <section className="px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        {cartItems.length === 0 ? (
          // Run these codes if the cart is empty
          <>
            <div className="mt-7 flex flex-col items-center justify-center gap-8 lg:mt-14">
              <div className="w-fit">
                <img
                  src={EmptyCart}
                  alt="empty cart"
                  className="aspect-square max-w-[300px]"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col items-center gap-3">
                <h1 className="text-xl font-semibold">Your cart is empty</h1>
                <Link
                  to="/categories/all"
                  className="inline-block rounded-[6px] border border-neutral-800 bg-neutral-100 px-4 py-2"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </>
        ) : (
          // Run these if the cart is not empty
          <>
            <div className="flex flex-col gap-6">
              <div className="text-center text-xl font-bold lg:text-left">
                Review your order
              </div>

              <div className="grid grid-cols-1 place-items-center gap-12 lg:grid-cols-cart lg:place-items-start">
                <div className="flex flex-col gap-4">
                  {cartItems.map((cartItem) => (
                    <div
                      key={cartItem.id}
                      className="flex flex-col gap-8 rounded-[4px] border border-color-100/40 p-4"
                    >
                      <div className="text-xl font-bold text-green-600">
                        Delivery date:{" "}
                        {cartItem.deliveryDate
                          ? `${cartItem.deliveryDate.day}, ${cartItem.deliveryDate.date}`
                          : ""}
                      </div>
                      <div
                        key={cartItem.id}
                        className="grid justify-items-center gap-8 rounded-[4px] lg:grid-cols-2"
                      >
                        <div className="grid grid-cols-2 gap-6">
                          <div className="grid aspect-square w-[120px] place-items-center rounded-full bg-color-200">
                            <img
                              src={cartItem.img}
                              alt={cartItem.name}
                              className="max-w-[120px] rounded-full object-cover"
                              loading="lazy"
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Link
                              to={`/${cartItem.category}/${cartItem.name.replace(/\s+/g, "-")}/${cartItem.id}`}
                              onClick={() =>
                                window.scrollTo({ top: 0, behavior: "smooth" })
                              }
                              className="text-lg font-semibold capitalize transition-colors duration-300 hover:text-color-50"
                            >
                              {cartItem.name}
                            </Link>
                            <div className="text-lg font-semibold text-color-50">
                              ${cartItem.price.toFixed(2)}
                            </div>
                            <div className="flex items-center">
                              <button
                                className="grid h-8 w-10 place-items-center border transition-colors duration-300 hover:bg-color-200"
                                onClick={() =>
                                  updateQuantity(cartItem.id, "decrease")
                                }
                              >
                                <Minus className="size-5" />
                              </button>
                              <div className="grid h-8 w-10  place-items-center border-y bg-color-200 text-lg font-medium">
                                {cartItem.quantity}
                              </div>
                              <button
                                className="grid h-8 w-10 place-items-center border transition-colors  duration-300 hover:bg-color-200"
                                onClick={() =>
                                  updateQuantity(cartItem.id, "increase")
                                }
                              >
                                <Plus className="size-5" />
                              </button>
                              <button
                                className="grid h-8 w-10 place-items-center border border-l-[0]  transition-colors duration-300 hover:bg-color-200"
                                onClick={() => removeFromCart(cartItem.id)}
                              >
                                <X className="size-5" />
                              </button>
                            </div>
                            <div>Color: {cartItem.color}</div>
                          </div>
                        </div>
                        <div className="flex w-full flex-col items-start gap-2 lg:w-auto">
                          <label className="font-semibold">
                            Choose Delivery Option:
                          </label>
                          <div className="flex items-center gap-2.5">
                            <input
                              type="radio"
                              id={`7day-${cartItem.id}`}
                              name={`delivery-option-${cartItem.id}`}
                              value="7-day"
                              checked={
                                !cartItem.shippingOption ||
                                cartItem.shippingOption === "7-day"
                              }
                              className="size-4 cursor-pointer"
                              onChange={() =>
                                updateShippingOption(cartItem.id, "7-day")
                              }
                            />
                            <div>
                              <label
                                className="cursor-pointer text-[15px] text-color-50"
                                htmlFor={`7day-${cartItem.id}`}
                              >
                                7-Days
                              </label>
                              <div className="text-[15px]">Free Shipping</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2.5">
                            <input
                              type="radio"
                              id={`3day-${cartItem.id}`}
                              name={`delivery-option-${cartItem.id}`}
                              value="3-day"
                              className="size-4 cursor-pointer"
                              checked={cartItem.shippingOption === "3-day"}
                              onChange={() =>
                                updateShippingOption(cartItem.id, "3-day")
                              }
                            />
                            <div>
                              <label
                                className="cursor-pointer text-[15px] text-color-50"
                                htmlFor={`3day-${cartItem.id}`}
                              >
                                3-Days
                              </label>
                              <div className="text-[15px]">
                                Shipping - $4.99
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2.5">
                            <input
                              type="radio"
                              id={`same-day-${cartItem.id}`}
                              name={`delivery-option-${cartItem.id}`}
                              value="same-day"
                              className="size-4 cursor-pointer"
                              checked={cartItem.shippingOption === "same-day"}
                              onChange={() =>
                                updateShippingOption(cartItem.id, "same-day")
                              }
                            />
                            <div className="">
                              <label
                                className="cursor-pointer text-[15px] text-color-50"
                                htmlFor={`same-day-${cartItem.id}`}
                              >
                                Same Day
                              </label>
                              <div className="text-[15px]">
                                Shipping - $9.99
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="order-first sm:min-w-[380px] lg:order-last lg:min-w-[320px]">
                  <div className="flex flex-col rounded-[4px] border border-color-100/40 p-4">
                    <div className="flex flex-col gap-3">
                      <div className="text-lg font-semibold text-color-50">
                        Order Summary
                      </div>
                      <div className="flex flex-col gap-3 border-b border-color-100/30 pb-3">
                        <div className="flex items-center justify-between">
                          <div>Items ({totalQuantity}):</div>
                          <div>${totalAmount().totalWithoutTax}</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>Shipping:</div>
                          <div>${totalAmount().shippingPrice}</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>Total without tax:</div>
                          <div>${totalAmount().totalWithoutTax}</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>Estimated tax (10%):</div>
                          <div>${totalAmount().totalTax}</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>Order Total:</div>
                        <div>${totalAmount().orderTotal}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
