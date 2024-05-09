import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

// Total quantity of cart items
export const getTotalQuantity = (cartItems) => {
  let totalQuantity = 0;

  cartItems.forEach((item) => {
    totalQuantity += item.quantity;
  });

  return totalQuantity;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add an item to the cart
  const addToCart = (product) => {
    const matchingItem = cartItems.find((item) => item.id === product.id);

    if (matchingItem) {
      matchingItem.quantity += product.quantity; // Update quantity directly
      setCartItems([...cartItems]); // Update the entire cart state
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  // Remove item from the cart
  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);

    if (updatedCartItems.length === 0) {
      localStorage.removeItem("cartItems");
    } else {
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      console.log(updatedCartItems.length)
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
