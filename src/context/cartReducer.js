import {
  ADD_TO_CART,
  APPLY_COUPON,
  DECREMENT_QTY,
  FLAT_DISCOUNT,
  INCREMENT_QTY,
  PERCENTAGE_DISCOUNT,
  REMOVE_FROM_CART,
  SELECTED100,
} from "./CartConstants";

const calculateTotalAmount = (cart) =>
  cart.reduce((total, cartItem) => total + cartItem.price * cartItem.qty, 0); // Calculate the total amount of items in the cart.

const calculateTotalItemsCount = (cart) =>
  cart.reduce((count, cartItem) => count + cartItem.qty, 0); // Calculate the total number of items in the cart.

// Utility function to update the cart state
const updateCartState = (state, updatedCart) => ({
  ...state,
  cart: updatedCart, // Update the cart with the new item.
  totalItemsCount: calculateTotalItemsCount(updatedCart), // Update the total item count.
  totalAmount: calculateTotalAmount(updatedCart), // Update the total amount.
});

// Utility function to update item quantity
const updateItemQuantity = (cart, itemId, quantityChange) =>
  cart.map((cartItem) =>
    cartItem.id === itemId
      ? { ...cartItem, qty: cartItem.qty + quantityChange }
      : cartItem
  );

export const CartReducer = (state, action) => {
  const itemId = action.payload.id || action.payload;
  let updatedCart;
  switch (action.type) {
    case ADD_TO_CART: {
      // Handle adding a new item to the cart.
      updatedCart = [...state.cart, { ...action.payload, qty: 1 }];
      return updateCartState(state, updatedCart);
    }

    case REMOVE_FROM_CART: {
      // Handle removing an item from the cart.
      updatedCart = state.cart.filter((cartItem) => cartItem.id !== itemId);
      return updateCartState(state, updatedCart);
    }

    case INCREMENT_QTY: {
      // Handle incrementing the quantity of an existing item.
      updatedCart = updateItemQuantity(state.cart, itemId, 1);
      return updateCartState(state, updatedCart);
    }

    case DECREMENT_QTY: {
      // Handle decrementing the quantity of an existing item.
      updatedCart = updateItemQuantity(state.cart, itemId, -1);
      return updateCartState(state, updatedCart);
    }

    case APPLY_COUPON: {
      const COUPON = action.payload;
      // Function to calculate a flat discount
      const calculateFlatDiscount = (totalAmount) =>
        totalAmount < FLAT_DISCOUNT ? totalAmount : FLAT_DISCOUNT;
      // Function to calculate a percentage discount
      const calculatePercentageDiscount = (totalAmount) =>
        Math.round((totalAmount * PERCENTAGE_DISCOUNT) / 100);
      // Initialize discount object
      const discount = {
        isCouponApplied: true,
        coupon: COUPON,
        amount:
          COUPON === SELECTED100
            ? calculateFlatDiscount(state.totalAmount)
            : calculatePercentageDiscount(state.totalAmount),
      };
      // Return updated state with applied discount
      return {
        ...state,
        discount,
      };
    }

    default:
      return state;
  }
};
