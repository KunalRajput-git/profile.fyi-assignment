"use client";
import { useCartState } from "../../context/CartContext";
import { Cart2 } from "react-bootstrap-icons";
import { Button } from "../ui/";

export default function MyCartButton() {
  const { totalItemsCount, totalAmount } = useCartState(); // Destructure cart from the state using useCartState.
  const isCartEmpty = totalItemsCount === 0; // Check if the cart is empty

  return (
    <Button>
      <Cart2 size={20} />
      {isCartEmpty ? (
        // Display "My Cart" if the cart is empty
        <p className="text-sm">My Cart</p>
      ) : (
        // Display item count and total amount if there are items in the cart
        <div className="flex gap-2 items-center">
          <p className="text-sm">{totalItemsCount} Items</p>
          <p className="text-sm">₹{totalAmount}</p>
        </div>
      )}
    </Button>
  );
}
