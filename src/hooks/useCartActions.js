import { CartState } from "../context/CartContext";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../context/CartConstants";

export const useCartActions = () => {
  const { dispatch } = CartState();

  const addToCartHandler = (item) => {
    // Define a function to handle adding an item to the cart.
    dispatch({ type: ADD_TO_CART, payload: item }); // Dispatch the ADD_TO_CART action with the item as payload.
  };

  const removeFromCart = (id) => {
    // Define a function to handle removing an item from the cart.
    dispatch({ type: REMOVE_FROM_CART, payload: { id } }); // Dispatch the REMOVE_FROM_CART action with the id as payload.
  };

  return {
    addToCartHandler, // Return the addToCartHandler function for use in other parts of the application.
    removeFromCart,
  };
};
