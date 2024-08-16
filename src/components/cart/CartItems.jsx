"use client";
import { useCartState } from "@/context/CartContext";
import { ItemCard } from "../ui";

export default function CartItems() {
  const { cart } = useCartState(); // Destructure cart from the global state

  return (
    <div className="bg-gray-50 rounded-2xl p-4 border w-full ">
      <h1 className="font-bold ml-2 mb-2 text-sm">My Cart</h1>
      {cart.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          className="flex w-full p-2 xs:p-3 md:p-4 pr-4 xs:w-full md:w-full justify-between items-center mt-2 relative"
          isFromCart={true}
        />
      ))}
    </div>
  );
}
