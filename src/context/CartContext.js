"use client";
import React, { createContext, useReducer, useContext } from "react";
import ITEMS from "../data/items.json"; // Importing initial items data.
import { CartReducer } from "./cartReducer";

const CartContext = createContext(null); // Creating a context for cart state.

export const CartProvider = ({ children }) => {
  // Setting up the initial state and reducer for the cart context.
  const [state, dispatch] = useReducer(CartReducer, {
    items: ITEMS, // Initial items.
    cart: [],
    totalItemsCount: 0, // Total number of items in the cart.
    totalAmount: 0, // Total amount of all items in the cart.
  });

  return (
    // Providing the cart state and dispatch function to the rest of the app.
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access cart context more easily.
export const CartState = () => useContext(CartContext);
