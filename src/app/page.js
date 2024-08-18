"use client";
import { Container } from "@/components/layout";
import { ItemCard } from "@/components/ui/";
import { useCartState } from "../context/CartContext";

export default function Home() {
  const { items } = useCartState(); // Extracting items from the global cart state.

  return (
    <Container className="flex flex-wrap gap-2 justify-center">
      {/* Mapping over the items in the cart and rendering an ItemCard for each */}
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </Container>
  );
}
