import { useCartDispatch, useCartState } from "../context/CartContext";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_QTY,
  DECREMENT_QTY,
  APPLY_COUPON,
  REMOVE_COUPON,
  CLEAR_CART,
} from "../context/CartConstants";

export const useCartActions = () => {
  // Extract relevant state values from the Cart context
  const {
    cart, // cart
    discount: { isCouponApplied, coupon }, // Destructure discount details
  } = useCartState();

  // Get the dispatch function from the Cart context to dispatch actions
  const dispatch = useCartDispatch();

  // Helper function to apply the discount if a coupon is already applied
  const applyDiscount = () => isCouponApplied && applyCoupon(coupon);

  const addToCartHandler = (item) => {
    // Define a function to handle adding an item to the cart.
    dispatch({ type: ADD_TO_CART, payload: item }); // Dispatch the ADD_TO_CART action with the item as payload.
    applyDiscount(); // Reapply the discount if a coupon is applied
  };

  const removeFromCart = (id) => {
    // Define a function to handle removing an item from the cart.
    dispatch({ type: REMOVE_FROM_CART, payload: { id } }); // Dispatch the REMOVE_FROM_CART action with the id as payload.
    if (isCouponApplied)
      cart.length === 1
        ? removeCoupon() // If there's only one item left in the cart, remove the coupon
        : applyDiscount(); // Reapply the discount if a coupon is applied;
  };

  const incrementQty = (id) => {
    // Define a function to handle incrementing quantity an existing item.
    dispatch({ type: INCREMENT_QTY, payload: { id } }); // Dispatch the INCREMENT_QTY action with the id as payload.
    applyDiscount(); // Reapply the discount if a coupon is applied;
  };

  const decrementQty = (id, qty) => {
    // Define a function to handle decrementing the quantity of an existing item.
    if (qty === 1) {
      removeFromCart(id); // If the quantity is 1, remove the item from the cart.
    } else {
      dispatch({ type: DECREMENT_QTY, payload: { id } }); // Dispatch the DECREMENT_QTY action with the id as payload.
      applyDiscount(); // Reapply the discount if a coupon is applied;
    }
  };

  const applyCoupon = (coupon) => {
    // Define a function to handle applying a coupon to the cart.
    dispatch({ type: APPLY_COUPON, payload: coupon });
  };

  const removeCoupon = () => {
    // Define a function to handle remove a coupon to the cart.
    dispatch({ type: REMOVE_COUPON, payload: {} });
  };

  const clearCart = () => {
    // Define a function to handle clear cart.
    dispatch({ type: CLEAR_CART, payload: {} });
    removeCoupon();
  };

  return {
    // Return the functions for use in other parts of the application.
    addToCartHandler,
    removeFromCart,
    incrementQty,
    decrementQty,
    applyCoupon,
    removeCoupon,
    clearCart,
  };
};
