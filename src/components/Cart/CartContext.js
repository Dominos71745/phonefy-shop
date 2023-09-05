import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = [];

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItemIndex = state.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.colors.name === action.payload.colors.name
      );

      if (existingItemIndex !== -1) {
        const updatedState = [...state];
        updatedState[existingItemIndex].amount++;
        return updatedState;
      } else {
        return [...state, { ...action.payload, amount: 1 }];
      }

    case "INCREMENT_QUANTITY":
      return state.map((item) =>
        item.name === action.payload.name &&
        item.colors.name === action.payload.colors.name
          ? { ...item, amount: item.amount + 1 }
          : item
      );

    case "DECREMENT_QUANTITY":
      return state
        .map((item) =>
          item.name === action.payload.name &&
          item.colors.name === action.payload.colors.name
            ? {
                ...item,
                amount: Math.max(item.amount - 1, 0),
              }
            : item
        )
        .filter((item) => item.amount > 0);

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, initialState);

  const addCartItem = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const addQuantity = (itemName, itemColorName) => {
    dispatch({
      type: "INCREMENT_QUANTITY",
      payload: { name: itemName, colors: { name: itemColorName } },
    });
  };

  const removeQuantity = (itemName, itemColorName) => {
    dispatch({
      type: "DECREMENT_QUANTITY",
      payload: { name: itemName, colors: { name: itemColorName } },
    });
  };

  const calculateTotal = () => {
    const total = cartItems.reduce(
      (acc, item) => acc + parseFloat(item.price) * item.amount,
      0
    );
    return total.toFixed(2);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCartItem,
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
