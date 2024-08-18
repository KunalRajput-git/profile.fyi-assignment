"use client";
import { mergeClassNames } from "@/lib/utils"; // Utility function for conditional class names
import { ItemImg, ItemActionRow, Trashi, ItemName, ItemSection } from "./";

// Base class names for the ItemCard component
const baseClassNames =
  "border p-4 w-[165px] xs:w-[180px] md:w-56 h-max rounded-md shadow-sm cursor-pointer bg-white";

export default function ItemCard({ item, className, isFromCart }) {
  // Combine base class names with additional custom classes
  const combinedClassNames = mergeClassNames(baseClassNames, className);
  return (
    <article className={combinedClassNames}>
      <ItemImg item={item} isFromCart={isFromCart} />
      <ItemSection isFromCart={isFromCart}>
        <ItemName item={item} isFromCart={isFromCart} />
        <ItemActionRow item={item} isFromCart={isFromCart} />
        {isFromCart && <Trashi item={item} />}
      </ItemSection>
    </article>
  );
}
