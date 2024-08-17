"use client";
import { BillDetails, CartItems, EmptyCart } from "@/components/cart";
import { useCartState } from "@/context/CartContext";

export default function Cart() {
  const { totalItemsCount } = useCartState(); // Destructure cart from the state using useCartState.
  const isCartEmpty = totalItemsCount === 0; // Check if the cart is empty
  return (
    <div className="pt-20 pb-6 md:pt-24 px-3 md:px-8 m-auto w-full md:w-[600px]">
      {isCartEmpty ? (
        // If the cart is empty, display the EmptyCart component
        <EmptyCart />
      ) : (
        // If the cart is not empty, display both CartItems and BillDetails components
        <>
          <CartItems />
          <BillDetails />
        </>
      )}
    </div>
  );
}
