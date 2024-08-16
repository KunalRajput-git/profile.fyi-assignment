import { ADD_TO_CART, REMOVE_FROM_CART } from "./CartConstants";

export const findCartItem = (cart, itemId) =>
  cart.find((cartItem) => cartItem.id === itemId); // Find an item in the cart by its ID.

const calculateTotalAmount = (cart) =>
  cart.reduce((total, cartItem) => total + cartItem.price * cartItem.qty, 0); // Calculate the total amount of items in the cart.

const calculateTotalItemsCount = (cart) =>
  cart.reduce((count, cartItem) => count + cartItem.qty, 0); // Calculate the total number of items in the cart.

export const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      // Handle adding a new item to the cart.
      let updatedCart = [...state.cart, { ...action.payload, qty: 1 }];

      return {
        ...state,
        cart: updatedCart, // Update the cart with the new item.
        totalItemsCount: calculateTotalItemsCount(updatedCart), // Update the total item count.
        totalAmount: calculateTotalAmount(updatedCart), // Update the total amount.
      };
    }

    case REMOVE_FROM_CART: {
      // Handle removing an item from the cart.
      let updatedCart = state.cart.filter((cartItem) => cartItem.id !== itemId);
      return {
        ...state,
        cart: updatedCart,
        totalItemsCount: calculateTotalItemsCount(updatedCart),
        totalAmount: calculateTotalAmount(updatedCart),
      };
    }

    default:
      return state;
  }
};
