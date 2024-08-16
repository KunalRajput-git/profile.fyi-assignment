import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function mergeClassNames(...inputs) {
  return twMerge(clsx(...inputs)); // Combine and resolve class names, handling conflicts.
}

export const findCartItem = (cart, itemId) =>
  cart.find((cartItem) => cartItem.id === itemId); // Find an item in the cart by its ID.
