"use client";
import { ItemCard } from "@/components/ui/";
import { useCartState } from "../context/CartContext";

export default function Home() {
  const { items } = useCartState(); // Extracting items from the global cart state.

  return (
    <main className="flex flex-wrap gap-2 justify-center pt-20 md:pt-24">
      {/* Mapping over the items in the cart and rendering an ItemCard for each */}
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </main>
  );
}
