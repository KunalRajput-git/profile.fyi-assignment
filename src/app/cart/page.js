"use client";
import { useEffect } from "react";
import { BillDetails, CartItems, EmptyCart } from "@/components/cart";
import { useCartState } from "@/context/CartContext";
import { HorizontalDivider } from "@/components/ui";
import { Container } from "@/components/layout";

export default function Cart() {
  // Scroll to the bottom of the page smoothly when the component mounts
  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }, []);
  const { totalItemsCount } = useCartState(); // Destructure cart from the state using useCartState.
  const isCartEmpty = totalItemsCount === 0; // Check if the cart is empty
  return (
    <Container className="md:w-[600px]">
      {isCartEmpty ? (
        // If the cart is empty, display the EmptyCart component
        <EmptyCart />
      ) : (
        // If the cart is not empty, display both CartItems and BillDetails components
        <>
          <CartItems />
          <HorizontalDivider />
          <BillDetails />
        </>
      )}
    </Container>
  );
}
