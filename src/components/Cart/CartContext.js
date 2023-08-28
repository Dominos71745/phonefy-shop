import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addCartItem = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (prevItem) =>
          prevItem.name === item.name && prevItem.color === item.color
      );
      if (existingItem) {
        return prevItems.map((prevItem) =>
          prevItem.name === item.name && prevItem.color === item.color
            ? { ...prevItem, amount: prevItem.amount + 1 }
            : prevItem
        );
      } else {
        return [...prevItems, { ...item, amount: 1 }];
      }
    });
  };

  const addQuantity = (itemName, itemColorName) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.name === itemName && item.colors.name === itemColorName
          ? { ...item, amount: item.amount + 1 }
          : item
      )
    );
  };

  const removeQuantity = (itemName, itemColorName) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.name === itemName && item.colors.name === itemColorName
            ? { ...item, amount: Math.max(item.amount - 1, 0) } // Ensure quantity doesn't go below 1
            : item
        )
        .filter((item) => item.amount > 0)
    );
  };

  const calculateTotal = () => {
    const total = cartItems.reduce(
      (acc, item) => acc + parseFloat(item.price) * item.amount,
      0
    );
    return total.toFixed(2);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCartItem,
        clearCart,
        addQuantity,
        removeQuantity,
        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
