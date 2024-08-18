"use client";
import React, { createContext, useReducer, useContext } from "react";
import { CartReducer } from "./cartReducer";

const CartContext = createContext(null); // Creating a context for cart state.

export const CartProvider = ({ children }) => {
  // Setting up the initial state and reducer for the cart context.
  const [state, dispatch] = useReducer(CartReducer, {
    cart: [],
    totalItemsCount: 0, // Total number of items in the cart.
    totalAmount: 0, // Total amount of all items in the cart.
    discount: { isCouponApplied: false, coupon: null, amount: 0 }, // Initial discount state.
  });

  return (
    // Providing the cart state and dispatch function to the rest of the app.
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access cart context more easily
export const useCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return { state, dispatch };
};

// Custom hook to access cart state
export const useCartState = () => {
  const { state } = useContext(CartContext);
  return state;
};

// Custom hook to access cart dispatch
export const useCartDispatch = () => {
  const { dispatch } = useContext(CartContext);
  return dispatch;
};
